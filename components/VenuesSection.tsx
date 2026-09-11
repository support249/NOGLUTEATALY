import { site } from "@/content/site";

function MapIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 4l-5 2v14l5-2 6 2 5-2V2l-5 2-6-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 4v14M15 6v14" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function SafeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 19c1-3.2 3.2-5 7-5s6 1.8 7 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="18" cy="15.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16.7 15.6l1 1 1.7-1.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DishIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 14h16c0 3-3.5 5-8 5s-8-2-8-5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 14c0-5 2.5-8 6-8s6 3 6 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 4v2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const icons = [MapIcon, SafeIcon, GuideIcon, DishIcon];

export function VenuesSection() {
  return (
    <section className="venues-section">
      <div className="wrap">
        <p className="venues-eyebrow">
          <span aria-hidden="true">»</span> Tested · Trusted · Safe
        </p>
        <h2>Carefully Vetted Celiac-Safe Venues</h2>

        <div className="venues-grid">
          {site.features.map((feature, index) => {
            const Icon = icons[index] ?? MapIcon;
            return (
              <article className="venues-card" key={feature.title}>
                <span className="venues-card-icon">
                  <Icon />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
