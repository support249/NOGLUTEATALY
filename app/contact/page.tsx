import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact NOGLUTEATALY your gluten-free food tour experts in Rome. Reach out for bookings and celiac-safe tour enquiries.",
  path: "/contact/",
});

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="10"
        r="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 7l8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 3h3l1.5 4.5-2 1.5a12 12 0 006 6l1.5-2L21 14v3a2 2 0 01-2 2A14 14 0 015 5a2 2 0 012-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="wrap contact-layout">
        <div className="contact-info">
          <h1 className="contact-heading">We&rsquo;d Love To Hear From You</h1>
          <p className="contact-lead">
            Contact NOGLUTEATALY Your Gluten-Free Experts in Rome. Reach out
            for details about our celiac-safe food tours, private experiences,
            or group bookings. We&rsquo;ll reply within 24 hours. Gluten-free
            travelers are our priority!
          </p>

          <ul className="contact-details">
            <li>
              <span className="contact-icon" aria-hidden="true">
                <PinIcon />
              </span>
              <span>{site.location}</span>
            </li>
            <li>
              <span className="contact-icon" aria-hidden="true">
                <MailIcon />
              </span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="contact-icon" aria-hidden="true">
                <PhoneIcon />
              </span>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
          </ul>

          <div className="contact-social">
            <h2 className="contact-social-heading">Follow Us On</h2>
            <a
              className="contact-icon contact-social-link"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="contact-form-card">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
