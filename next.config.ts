import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Baseline security headers. A Content-Security-Policy is deliberately not
  // set here yet: GA4 and Next.js inline scripts need a nonce-based policy,
  // which should be rolled out and tested separately.
  async headers() {
    return [
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
