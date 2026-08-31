import type { Metadata } from "next";
import { ToursBokunClient } from "@/components/ToursBokunClient";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tours",
  description:
    "Book gluten-free food tours, pasta experiences, cooking classes, and orientation walks in Rome for celiac travelers.",
  path: "/tours/",
});

export default function ToursPage() {
  return (
    <section className="section tours-bokun-page">
      <div className="wrap">
        <div className="featured-header tours-bokun-header">
          <p className="safety-eyebrow">
            <span aria-hidden="true">»</span> Book Online
          </p>
          <h1 className="page-title">Explore Our Tours</h1>
          <p className="featured-subtitle">
            Choose a gluten-free experience in Rome and book securely online.
          </p>
        </div>

        <ToursBokunClient />
      </div>
    </section>
  );
}
