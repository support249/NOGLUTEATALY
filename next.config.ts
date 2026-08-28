import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      // GSC 404: old tour slug (www variant handled by middleware → apex first)
      {
        source: "/tour/rome-gluten-free-food-tour-celiac-safe-pizza-gelato",
        destination: "/the-original-gluten-free-food-lovers-tour-of-rome/",
        permanent: true,
      },
      // GSC crawled-not-indexed: dead WordPress marketing page
      {
        source: "/keep-in-touch-with-site-visitors-and-boost-loyalty",
        destination: "/",
        permanent: true,
      },
      // WordPress RSS feeds on posts → canonical post URL
      {
        source: "/comments/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:slug/feed",
        destination: "/:slug/",
        permanent: true,
      },
      // Legacy Next.js paths → WordPress root slugs (GSC-indexed URLs)
      {
        source: "/tours/:slug",
        destination: "/:slug/",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/:slug/",
        permanent: true,
      },
      // WordPress archives, feeds, and system paths
      { source: "/tag/:path*", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-json/:path*", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
