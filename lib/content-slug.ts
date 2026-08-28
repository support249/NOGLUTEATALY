import { getPost, posts } from "@/content/posts";
import { getTour, tours } from "@/content/tours";

export type ContentSlug =
  | { kind: "tour"; slug: string }
  | { kind: "post"; slug: string };

const RESERVED = new Set(["tours", "blog", "faq", "contact"]);

export function resolveContentSlug(slug: string): ContentSlug | null {
  if (RESERVED.has(slug)) return null;
  if (getTour(slug)) return { kind: "tour", slug };
  if (getPost(slug)) return { kind: "post", slug };
  return null;
}

export function allContentSlugs(): ContentSlug[] {
  return [
    ...tours.map((tour) => ({ kind: "tour" as const, slug: tour.slug })),
    ...posts.map((post) => ({ kind: "post" as const, slug: post.slug })),
  ];
}
