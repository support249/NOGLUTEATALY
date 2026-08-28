import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SafetySection } from "@/components/SafetySection";
import { VenuesSection } from "@/components/VenuesSection";
import { FeaturedToursSection } from "@/components/FeaturedToursSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SafetySection />
      <VenuesSection />
      <FeaturedToursSection />
      <AboutSection />
      <ReviewsSection />
    </>
  );
}
