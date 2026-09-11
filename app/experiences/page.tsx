import type { Metadata } from "next";
import { ToursListing } from "@/components/ToursListing";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Experiences",
  description:
    "Browse our gluten-free food tours, pasta experiences, cooking classes, and orientation walks in Rome for celiac travelers.",
  path: "/experiences/",
});

/** Preserved custom tour card listing (formerly /tours/). */
export default function ExperiencesPage() {
  return (
    <ToursListing
      title="Explore Our Experiences"
      subtitle="Find the best gluten-free travel choice in Rome, food tours, a pasta experience, a cooking class, and a short orientation walk."
    />
  );
}
