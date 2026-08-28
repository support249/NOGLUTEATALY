import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { tours } from "@/content/tours";
import { SITE_URL } from "@/lib/seo";

const sectionPaths = ["/", "/tours/", "/blog/", "/faq/", "/contact/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = sectionPaths.map((path) => ({
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.8,
  }));

  const contentPages = [...tours, ...posts].map((item) => ({
    url: `${SITE_URL}/${item.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...sections, ...contentPages];
}
