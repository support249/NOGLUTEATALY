"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { site } from "@/content/site";
import { mixedReviews, reviewPlatform } from "@/lib/reviews-order";

const DESKTOP_VISIBLE = 3;
const MOBILE_QUERY = "(max-width: 960px)";

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

function TripadvisorRating() {
  return (
    <span className="review-rating" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src="/icons/f.svg"
          alt=""
          width={16}
          height={16}
          aria-hidden="true"
          className="review-rating-bubble"
        />
      ))}
    </span>
  );
}

function VerifiedBadge() {
  return (
    <Image
      src="/icons/ti-verified.svg"
      alt="Verified review"
      width={16}
      height={16}
      className="review-verified"
    />
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

  const platform = reviewPlatform(review);
  const platformIcon =
    platform === "getyourguide"
      ? "/icons/getyourguide-svgrepo-com.svg"
      : platform === "viator"
        ? "/icons/viator-converted-from-jpeg.svg"
        : "/icons/TA-icon.svg";
  const platformClass =
    platform === "getyourguide"
      ? "review-platform review-platform-gyg"
      : platform === "viator"
        ? "review-platform review-platform-viator"
        : "review-platform";

  return (
    <article className="review-card">
      <div className="review-avatar-wrap" aria-hidden="true">
        <div className="review-avatar">{initials(review.name)}</div>
        <Image
          src={platformIcon}
          alt=""
          width={24}
          height={24}
          className={platformClass}
        />
      </div>
      <h3 className="review-name">{review.name}</h3>
      <p className="review-when">{review.when}</p>
      <div className="review-rating-row">
        <TripadvisorRating />
        <VerifiedBadge />
      </div>
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
  const reviews = mixedReviews;
  const [visible, setVisible] = useState(DESKTOP_VISIBLE);
  const [start, setStart] = useState(0);
  const dragX = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);

    function onChange() {
      setVisible(media.matches ? 1 : DESKTOP_VISIBLE);
    }

    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const maxStart = Math.max(0, reviews.length - visible);
  const startIndex = Math.min(start, maxStart);
  const current = reviews.slice(startIndex, startIndex + visible);
  const oneAtATime = visible === 1;

  function goTo(next: number) {
    setStart(Math.max(0, Math.min(maxStart, next)));
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (!oneAtATime) return;
    dragX.current = event.clientX;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    if (!oneAtATime || dragX.current == null) return;
    const delta = event.clientX - dragX.current;
    dragX.current = null;
    if (delta > 40) goTo(startIndex - 1);
    if (delta < -40) goTo(startIndex + 1);
  }

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
            aria-label={oneAtATime ? "Previous review" : "Previous reviews"}
            disabled={startIndex === 0}
            onClick={() => goTo(startIndex - 1)}
          >
            <Chevron direction="left" />
          </button>

          <div
            className="reviews-track"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              dragX.current = null;
            }}
          >
            {current.map((review) => (
              <ReviewCard key={`${review.name}-${review.title}`} review={review} />
            ))}
          </div>

          <button
            type="button"
            className="reviews-nav reviews-nav-next"
            aria-label={oneAtATime ? "Next review" : "Next reviews"}
            disabled={startIndex >= maxStart}
            onClick={() => goTo(startIndex + 1)}
          >
            <Chevron direction="right" />
          </button>
        </div>

        <div className="reviews-dots" role="group" aria-label="Review slides">
          {reviews.map((review, index) => (
            <button
              key={`${review.name}-${review.title}-dot`}
              type="button"
              className={
                index === startIndex ? "reviews-dot is-active" : "reviews-dot"
              }
              aria-label={`Go to review ${index + 1} of ${reviews.length}`}
              aria-current={index === startIndex ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
