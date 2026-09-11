import { site } from "@/content/site";

export type SiteReview = (typeof site.reviews)[number];

export function reviewPlatform(
  review: SiteReview,
): "getyourguide" | "viator" | "tripadvisor" {
  if ("source" in review && review.source === "getyourguide") {
    return "getyourguide";
  }
  if (review.when.includes("Viator")) {
    return "viator";
  }
  return "tripadvisor";
}

function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (Math.imul(1664525, state) + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function shuffleReviews(reviews: readonly SiteReview[], seed: number): SiteReview[] {
  const random = seededRandom(seed);
  const list = [...reviews];
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

/** Swap neighbors so the carousel rarely shows the same platform back-to-back. */
function softenPlatformClumps(reviews: SiteReview[]): SiteReview[] {
  const list = [...reviews];
  for (let i = 1; i < list.length; i++) {
    if (reviewPlatform(list[i]) === reviewPlatform(list[i - 1])) {
      for (let j = i + 1; j < list.length; j++) {
        if (reviewPlatform(list[j]) !== reviewPlatform(list[i - 1])) {
          [list[i], list[j]] = [list[j], list[i]];
          break;
        }
      }
    }
  }
  return list;
}

/** Fixed seed — mixed order is stable across builds and refreshes. */
export const mixedReviews = softenPlatformClumps(
  shuffleReviews(site.reviews, 0x4e4f474c),
);
