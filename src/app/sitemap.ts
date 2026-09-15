import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services-data";
import { posts } from "@/lib/blog-data";
import { industriesWithDetailPages } from "@/lib/industries-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/blogs",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes = industriesWithDetailPages.map((industry) => ({
    url: `${site.url}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${site.url}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...postRoutes];
}
