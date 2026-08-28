"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = site.hero.slides;
  const active = slides[activeIndex];

  return (
    <section className="hero-shell">
      <div className="wrap">
        <div className="hero-panel">
          <div className="hero-copy">
            <h1>{active.heading}</h1>
            <p className="hero-subheading">{active.subheading}</p>
            <Link className="btn-book" href="/tours/">
              Book Now
            </Link>
          </div>

          <div className="hero-aside">
            <div className="hero-index" aria-hidden="true">
              <span className="hero-index-line" />
              <span className="hero-index-number">{active.id}</span>
            </div>

            <div
              className="hero-slides"
              role="tablist"
              aria-label="Featured experiences"
            >
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-label={slide.title}
                    aria-selected={isActive}
                    className={isActive ? "hero-slide is-active" : "hero-slide"}
                    onClick={() => setActiveIndex(index)}
                  >
                    {slide.image ? (
                      <Image
                        src={slide.image}
                        alt=""
                        fill
                        sizes="(max-width: 960px) 45vw, 18vw"
                        className="hero-slide-image"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
