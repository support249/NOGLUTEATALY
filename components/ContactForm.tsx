"use client";

import { FormEvent, useState } from "react";

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

type StatusKind = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [statusKind, setStatusKind] = useState<StatusKind>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatusKind("loading");
    setStatus("Sending your message…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: String(data.get("firstName") ?? ""),
          lastName: String(data.get("lastName") ?? ""),
          email: String(data.get("email") ?? ""),
          phone: String(data.get("phone") ?? ""),
          message: String(data.get("message") ?? ""),
          website: String(data.get("website") ?? ""),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        setStatusKind("error");
        setStatus(result.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatusKind("success");
      setStatus(
        "Thank you for reaching NOGLUTEATALY, we will be in touch soon.",
      );
    } catch {
      setStatusKind("error");
      setStatus("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form className="contact-form contact-form-compact" onSubmit={onSubmit}>
      <div className="contact-form-row">
        <label>
          <span className="sr-only">First Name</span>
          <input
            name="firstName"
            type="text"
            required
            placeholder="First Name"
            autoComplete="given-name"
            disabled={statusKind === "loading"}
          />
        </label>
        <label>
          <span className="sr-only">Last Name</span>
          <input
            name="lastName"
            type="text"
            required
            placeholder="Last Name"
            autoComplete="family-name"
            disabled={statusKind === "loading"}
          />
        </label>
      </div>
      <label>
        <span className="sr-only">Email</span>
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          autoComplete="email"
          disabled={statusKind === "loading"}
        />
      </label>
      <label>
        <span className="sr-only">Phone</span>
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          autoComplete="tel"
          disabled={statusKind === "loading"}
        />
      </label>
      <label>
        <span className="sr-only">How can we help you?</span>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="How can we help you?"
          disabled={statusKind === "loading"}
        />
      </label>

      {/* Honeypot — hidden from people, bots often fill it */}
      <label className="contact-honeypot" aria-hidden="true">
        Website
        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <div className="contact-form-actions">
        <button
          className="btn-contact"
          type="submit"
          disabled={statusKind === "loading"}
        >
          {statusKind === "loading" ? "Sending…" : "Send Message"}
          <span className="btn-contact-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </button>
      </div>
      {status ? (
        <p
          className={
            statusKind === "error"
              ? "contact-form-status is-error"
              : statusKind === "success"
                ? "contact-form-status is-success"
                : "contact-form-status"
          }
          role="status"
        >
          {status}
        </p>
      ) : null}
    </form>
  );
}
