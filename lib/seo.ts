import type { Metadata } from "next";

/** Canonical production origin (non-www), matching GSC primary property. */
export const SITE_URL = "https://nogluteataly.com";

export function canonicalUrl(path: string): string {
  if (path === "/" || path === "") {
    return `${SITE_URL}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${SITE_URL}${withSlash}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description?: string;
  path: string;
}): Metadata {
  const url = canonicalUrl(path);
  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: { canonical: url },
    openGraph: {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      url,
      siteName: "NOGLUTEATALY",
      locale: "en_US",
      type: "website",
    },
  };
}

/** WordPress-style root URL for tour and blog post slugs. */
export function contentPath(slug: string): string {
  return `/${slug}/`;
}
