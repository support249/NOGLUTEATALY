import { NextResponse } from "next/server";
import { site } from "@/content/site";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  website?: string; // honeypot
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Bot honeypot — leave empty; bots often fill hidden fields
  if (body.website?.trim()) {
    return NextResponse.json({ ok: true });
  }

  const firstName = String(body.firstName ?? "").trim();
  const lastName = String(body.lastName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();
  const name = [firstName, lastName].filter(Boolean).join(" ");

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { error: "First name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY?.trim();
  const senderEmail = process.env.BREVO_SENDER_EMAIL?.trim();
  const senderName = process.env.BREVO_SENDER_NAME?.trim() ?? site.name;
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() ?? site.email;

  if (!apiKey || !senderEmail) {
    console.error("Missing BREVO_API_KEY or BREVO_SENDER_EMAIL");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  if (senderEmail.toLowerCase() === toEmail.toLowerCase()) {
    console.warn(
      "BREVO_SENDER_EMAIL and CONTACT_TO_EMAIL are the same; Gmail will show the sender as “me”. Use a different From address (e.g. noreply@your-domain).",
    );
  }

  // SMTP keys (xsmtpsib-) cannot call the REST API — need API keys (xkeysib-)
  if (apiKey.startsWith("xsmtpsib-")) {
    console.error(
      "BREVO_API_KEY looks like an SMTP key (xsmtpsib-). Use an API key (xkeysib-) from https://app.brevo.com/settings/keys/api",
    );
    return NextResponse.json(
      {
        error:
          "Wrong Brevo key type. Use an API key (starts with xkeysib-), not an SMTP key.",
      },
      { status: 503 },
    );
  }

  const subject = `Website enquiry from ${name || "visitor"}`;
  const textContent = [
    "New contact form submission from nogluteataly.com",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "n/a"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
        <h2 style="margin-bottom: 0.5rem;">New contact form enquiry</h2>
        <p style="margin-top: 0; color: #555;">Submitted via nogluteataly.com</p>
        <table style="border-collapse: collapse; margin: 1rem 0;">
          <tr>
            <td style="padding: 0.35rem 1rem 0.35rem 0; font-weight: bold;">Name</td>
            <td style="padding: 0.35rem 0;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 0.35rem 1rem 0.35rem 0; font-weight: bold;">Email</td>
            <td style="padding: 0.35rem 0;">${escapeHtml(email)}</td>
          </tr>
          <tr>
            <td style="padding: 0.35rem 1rem 0.35rem 0; font-weight: bold;">Phone</td>
            <td style="padding: 0.35rem 0;">${escapeHtml(phone || "n/a")}</td>
          </tr>
        </table>
        <p style="font-weight: bold; margin-bottom: 0.35rem;">Message</p>
        <p style="white-space: pre-wrap; margin-top: 0;">${escapeHtml(message)}</p>
      </body>
    </html>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        // Verified Brevo address must stay in `email`; visitor goes in `name` for inbox scanning.
        sender: {
          name: name ? `${name} · ${senderName}` : senderName,
          email: senderEmail,
        },
        to: [{ email: toEmail, name: site.name }],
        replyTo: { email, name: name || email },
        subject,
        textContent,
        htmlContent,
        tags: ["contact-form"],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Brevo error:", response.status, detail);
      return NextResponse.json(
        { error: "Could not send your message. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Brevo request failed:", error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again later." },
      { status: 502 },
    );
  }
}
