import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/content/tours";
import { contentPath, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tours",
  description:
    "Gluten-free food tours, pasta experiences, cooking classes, and orientation walks in Rome for celiac travelers.",
  path: "/tours/",
});

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

export default function ToursPage() {
  return (
    <section className="section featured-section tours-page">
      <div className="wrap">
        <div className="featured-header">
          <p className="safety-eyebrow">
            <span aria-hidden="true">»</span> Browse By Category
          </p>
          <h1 className="page-title">Explore Our Tours</h1>
          <p className="featured-subtitle">
            Find the best gluten-free travel choice in Rome — food tours, a
            pasta experience, a cooking class, and a short orientation walk.
          </p>
        </div>

        <div className="featured-grid tours-page-grid">
          {tours.map((tour, index) => (
            <article className="tour-card" key={tour.slug}>
              <div className="tour-card-media">
                {tour.image ? (
                  <Image
                    src={tour.image}
                    alt=""
                    fill
                    sizes="(max-width: 960px) 100vw, 50vw"
                    className="tour-card-image"
                  />
                ) : null}
                {index === 0 ? (
                  <span className="tour-card-badge">Top Picked</span>
                ) : null}
                <Link
                  href={contentPath(tour.slug)}
                  className="tour-card-arrow"
                  aria-label={`Open ${tour.title}`}
                >
                  <ArrowIcon />
                </Link>
              </div>

              <div className="tour-card-body">
                <div className="tour-card-top">
                  <h2>{tour.title}</h2>
                  <div className="tour-card-price">
                    <span className="tour-card-price-label">Adult</span>
                    <span className="tour-card-price-current">
                      {tour.adultPrice}
                    </span>
                  </div>
                </div>
                <Link className="btn-book tour-card-cta" href={contentPath(tour.slug)}>
                  View Tour
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
