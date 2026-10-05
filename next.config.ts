import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
