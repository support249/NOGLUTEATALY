import Link from "next/link";
import { site } from "@/content/site";

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
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
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
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
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <p className="footer-logo">{site.name}</p>
          <p>
            Eat pizza, pasta, gelato and tiramisù without worrying about
            cross-contamination. We only take you to tested and certified
            celiac-safe places.
          </p>
        </div>

        <div>
          <h2>Contact Info</h2>
          <ul className="footer-contact">
            <li>
              <PinIcon />
              <span>{site.location}</span>
            </li>
            <li>
              <MailIcon />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <PhoneIcon />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Our Pages</h2>
          <ul className="footer-pages">
            {site.footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span aria-hidden="true">»</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Quick Links</h2>
          <a
            className="footer-social"
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p className="copyright">
          Copyright © {new Date().getFullYear()} {site.name}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
