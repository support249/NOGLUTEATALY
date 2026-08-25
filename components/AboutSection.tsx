import { site } from "@/content/site";

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function KitchenIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 3v8M8 11v10M6 3c0 2.5 2 3.5 2 8M10 3c0 2.5-2 3.5-2 8M16 3v7c0 1.5 1.5 2 1.5 4v7M16 10h3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5.5 19c1-3.2 3.2-5 6.5-5s5.5 1.8 6.5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="18" cy="15" r="3.2" fill="currentColor" />
      <path
        d="M16.6 15.1l1 1 1.8-2"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons = [LocationIcon, KitchenIcon, GuideIcon];

export function AboutSection() {
  const [featured, ...rest] = site.whyChooseUs;

  return (
    <section className="section about-section" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <p className="safety-eyebrow">
            <span aria-hidden="true">»</span> Why Choose Us
          </p>
          <h2>About Us</h2>
          {site.founder.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="about-points">
          <article className="about-point about-point-wide">
            <span className="about-point-icon">
              <LocationIcon />
            </span>
            <div>
              <h3>{featured.title}</h3>
              <p>{featured.text}</p>
            </div>
          </article>

          {rest.map((item, index) => {
            const Icon = icons[index + 1] ?? GuideIcon;
            return (
              <article className="about-point" key={item.title}>
                <span className="about-point-icon">
                  <Icon />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
