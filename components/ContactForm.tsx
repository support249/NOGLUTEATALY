"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") ?? "");
    const lastName = String(data.get("lastName") ?? "");
    const name = [firstName, lastName].filter(Boolean).join(" ");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with this message.");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form-row">
        <label>
          First Name
          <input
            name="firstName"
            type="text"
            required
            placeholder="Enter your first name..."
            autoComplete="given-name"
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            type="text"
            required
            placeholder="Enter your last name..."
            autoComplete="family-name"
          />
        </label>
      </div>
      <label>
        Email
        <input
          name="email"
          type="email"
          required
          placeholder="Enter your email address..."
          autoComplete="email"
        />
      </label>
      <label>
        Phone
        <input
          name="phone"
          type="tel"
          placeholder="Enter your phone number..."
          autoComplete="tel"
        />
      </label>
      <label>
        How can we help you?
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Enter your message..."
        />
      </label>
      <div className="contact-form-actions">
        <button className="btn-contact" type="submit">
          Send Message
          <span className="btn-contact-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </button>
      </div>
      {status ? <p className="contact-form-status">{status}</p> : null}
    </form>
  );
}
