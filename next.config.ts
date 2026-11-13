import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Most visits land from search on one article and leave, so favour fewer,
    // larger JS files on first load over chunk reuse across navigations. Each
    // file is a billed CDN request.
    turbopackChunking: {
      firstPageLoadPriority: 0.8,
      maxChunkCountPerGroup: 6,
      minChunkSize: 150000,
    },
  },
  // Baseline security headers. A Content-Security-Policy is deliberately not
  // set here yet: GA4 and Next.js inline scripts need a nonce-based policy,
  // which should be rolled out and tested separately.
  async headers() {
    return [
      // Generated icons are linked with a content hash (/icon?<hash>), so they
      // can be cached for good instead of re-checked on every page load.
      ...["/icon", "/apple-icon"].map((source) => ({
        source,
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      })),
      // Social/OG images rarely change; let crawlers and browsers reuse them for a day.
      ...["/opengraph-image", "/:section/:slug/opengraph-image"].map((source) => ({
        source,
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      })),
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Common mistyped/legacy path: the blog lives at /blogs.
      { source: "/blog", destination: "/blogs", permanent: true },
      { source: "/blog/:slug", destination: "/blogs/:slug", permanent: true },
      // India commercial URLs resolve to the canonical service pages (no duplicate pages)
      { source: "/web-development-company-india", destination: "/services/website-development", permanent: true },
      { source: "/mobile-app-development-company-india", destination: "/services/mobile-app-development", permanent: true },
      { source: "/shopify-development-company-india", destination: "/services/shopify-development", permanent: true },
      { source: "/ai-automation-agency-india", destination: "/services/ai-automation", permanent: true },
      { source: "/ui-ux-design-agency-india", destination: "/services/ui-ux-design", permanent: true },
      { source: "/cro-agency-india", destination: "/services/cro-audit", permanent: true },
    ];
  },
};

export default nextConfig;
