import Link from "next/link";
import Image from "next/image";
import { tours } from "@/content/tours";

const featured = tours.slice(0, 3);

const stats = [
  { label: "Experiences", value: "4" },
  { label: "Guest rating", value: "5★" },
  { label: "Max group", value: "12" },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 17L17 7M10 7h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FeaturedToursSection() {
  return (
    <section className="section featured-section">
      <div className="wrap">
        <div className="featured-header">
          <p className="safety-eyebrow">
            <span aria-hidden="true">»</span> Browse By Category
          </p>
          <h2>Find Out The Best Travel Choice</h2>
          <p className="featured-subtitle">
            Pick from our most booked celiac-safe tours — walking tastings,
            pasta experiences, and cooking classes in Rome.
          </p>
        </div>

        <div className="featured-grid">
          {featured.map((tour, index) => (
            <article className="tour-card" key={tour.slug}>
              <div className="tour-card-media">
                {tour.image ? (
                  <Image
                    src={tour.image}
                    alt=""
                    fill
                    sizes="(max-width: 960px) 100vw, 33vw"
                    className="tour-card-image"
                  />
                ) : null}
                {index === 0 ? (
                  <span className="tour-card-badge">Top Picked</span>
                ) : null}
                <Link
                  href="/tours/"
                  className="tour-card-arrow"
                  aria-label={`Book ${tour.title}`}
                >
                  <ArrowIcon />
                </Link>
              </div>

              <div className="tour-card-body">
                <div className="tour-card-top">
                  <h3>{tour.title}</h3>
                  <div className="tour-card-price">
                    <span className="tour-card-price-label">Adult</span>
                    <span className="tour-card-price-current">{tour.adultPrice}</span>
                  </div>
                </div>
                <Link className="btn-book tour-card-cta" href="/tours/">
                  View Tour
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-bottom">
          <div className="featured-cta-block">
            <p>
              Loved by gluten-free travelers, these are the experiences that
              turn a good day in Rome into a great memory — safely and with
              confidence.
            </p>
            <Link className="btn-book featured-all" href="/tours/">
              See all activities
              <span className="featured-all-icon" aria-hidden="true">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          <dl className="featured-stats">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
