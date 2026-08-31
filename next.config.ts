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
      // Legacy Next.js tour detail paths → WordPress root slugs (GSC-indexed URLs)
      // Explicit slugs only so /tours/ itself stays the Bokun booking page
      {
        source: "/tours/the-original-gluten-free-food-lovers-tour-of-rome",
        destination: "/the-original-gluten-free-food-lovers-tour-of-rome/",
        permanent: true,
      },
      {
        source: "/tours/the-original-gluten-free-pasta-lovers-tour-of-rome-gelato",
        destination:
          "/the-original-gluten-free-pasta-lovers-tour-of-rome-gelato/",
        permanent: true,
      },
      {
        source: "/tours/gluten-free-pasta-tiramisu-cooking-class-in-rome",
        destination: "/gluten-free-pasta-tiramisu-cooking-class-in-rome/",
        permanent: true,
      },
      {
        source:
          "/tours/gluten-free-rome-safe-food-orientation-walk-with-a-local-expert",
        destination:
          "/gluten-free-rome-safe-food-orientation-walk-with-a-local-expert/",
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
