import postsJson from "./posts.json";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

export const posts = postsJson as Post[];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function splitParagraphs(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}
