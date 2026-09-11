import Image from "next/image";
import { site } from "@/content/site";

function CheckIcon() {
  return (
    <span className="safety-check" aria-hidden="true">
      <svg viewBox="0 0 20 20" width="12" height="12" fill="none">
        <path
          d="M4.5 10.5l3.5 3.5 7.5-8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function SafetySection() {
  return (
    <section className="section safety-section">
      <div className="wrap safety-grid">
        <div className="safety-media">
          <Image
            src="/images/caracel.jpg"
            alt="Gluten-free Italian dishes prepared for a celiac-safe food experience"
            fill
            sizes="(max-width: 960px) 100vw, 48vw"
            className="safety-media-image"
          />
        </div>

        <div className="safety-copy">
          <p className="safety-eyebrow">
            <span aria-hidden="true">»</span> Why It’s Celiac Safe
          </p>
          <h2>Why Our Tours Are Designed for Celiac Safety</h2>
          <p className="safety-lead">
            We understand that eating out with celiac disease isn’t just a
            preference, it’s a medical necessity. Our gluten-free food tours in
            Rome are carefully designed to reduce stress and uncertainty, so you
            can experience the city’s food culture with confidence.
          </p>
          <ul className="safety-list">
            {site.safetyPoints.map((point) => (
              <li key={point}>
                <CheckIcon />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
