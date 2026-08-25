"use client";

import { useState } from "react";
import { site } from "@/content/site";

const PREVIEW_LENGTH = 120;

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TripadvisorDots() {
  return (
    <span className="review-rating" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="review-dot" />
      ))}
    </span>
  );
}

function VerifiedBadge() {
  return (
    <span className="review-verified" title="Verified review" aria-label="Verified">
      <svg width="10" height="10" viewBox="0 0 20 20" aria-hidden="true">
        <path
          d="M4.5 10.5l3.5 3.5 7.5-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ReviewCard({
  review,
}: {
  review: (typeof site.reviews)[number];
}) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncate = review.text.length > PREVIEW_LENGTH;
  const body =
    !needsTruncate || expanded
      ? review.text
      : `${review.text.slice(0, PREVIEW_LENGTH).trimEnd()}…`;

  return (
    <article className="review-card">
      <div className="review-avatar-wrap" aria-hidden="true">
        <div className="review-avatar">{initials(review.name)}</div>
        <span className="review-platform">TA</span>
      </div>
      <h3 className="review-name">{review.name}</h3>
      <p className="review-when">{review.when}</p>
      <div className="review-rating-row">
        <TripadvisorDots />
        <VerifiedBadge />
      </div>
      <p className="review-title">{review.title}</p>
      <p className="review-text">{body}</p>
      {needsTruncate ? (
        <button
          type="button"
          className="review-more"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      ) : null}
    </article>
  );
}

export function ReviewsSection() {
  const reviews = site.reviews;
  const visible = 3;
  const maxStart = Math.max(0, reviews.length - visible);
  const [start, setStart] = useState(0);
  const current = reviews.slice(start, start + visible);

  return (
    <section className="reviews-section">
      <div className="wrap reviews-inner">
        <p className="reviews-eyebrow">
          <span aria-hidden="true">»</span> Client Feedback
        </p>
        <h2>Reviews from Tripadvisor</h2>

        <div className="reviews-carousel">
          <button
            type="button"
            className="reviews-nav reviews-nav-prev"
            aria-label="Previous reviews"
            disabled={start === 0}
            onClick={() => setStart((value) => Math.max(0, value - 1))}
          >
            <Chevron direction="left" />
          </button>

          <div className="reviews-track">
            {current.map((review) => (
              <ReviewCard key={`${review.name}-${review.title}`} review={review} />
            ))}
          </div>

          <button
            type="button"
            className="reviews-nav reviews-nav-next"
            aria-label="Next reviews"
            disabled={start >= maxStart}
            onClick={() => setStart((value) => Math.min(maxStart, value + 1))}
          >
            <Chevron direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
