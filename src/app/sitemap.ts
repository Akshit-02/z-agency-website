import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/lib/services-data";
import { posts } from "@/lib/blog-data";
import { industriesWithDetailPages } from "@/lib/industries-data";
import { blogCategories } from "@/lib/blog-categories";

// lastmod is only set where a real content date exists (articles and the
// listings built from them). A build-time "now" on every URL tells search
// engines nothing changed reliably, so they learn to ignore it.
const postDate = (post: (typeof posts)[number]) => post.updated ?? post.date;
const latest = (dates: string[]) =>
  dates.length ? new Date(dates.reduce((a, b) => (a > b ? a : b))) : undefined;

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = latest(posts.map(postDate));

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
    ...(path === "/blogs" && latestPost ? { lastModified: latestPost } : {}),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryRoutes = industriesWithDetailPages.map((industry) => ({
    url: `${site.url}/industries/${industry.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categoryRoutes = blogCategories.map((category) => {
    const lastModified = latest(
      posts.filter((post) => post.category === category.name).map(postDate),
    );
    return {
      url: `${site.url}/blogs/category/${category.slug}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  const postRoutes = posts.map((post) => ({
    url: `${site.url}/blogs/${post.slug}`,
    lastModified: new Date(postDate(post)),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...categoryRoutes, ...postRoutes];
}
