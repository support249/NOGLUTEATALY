import { Hero } from "@/components/Hero";
import { SafetySection } from "@/components/SafetySection";
import { VenuesSection } from "@/components/VenuesSection";
import { FeaturedToursSection } from "@/components/FeaturedToursSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";

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
