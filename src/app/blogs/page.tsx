import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogExplorer } from "@/components/BlogExplorer";
import { BlogHero, BlogSection, FeaturedPost, TopicGrid, type PostLite } from "@/components/blog/BlogKit";
import { StructuredData } from "@/components/StructuredData";
import { posts, toSummary, type BlogPost } from "@/lib/blog-data";
import { blogCategories } from "@/lib/blog-categories";
import { WEBSITE_ID, ORG_ID } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog: Web, App, Shopify, UX, AI and CRO Guides",
  description:
    "Practical writing from ZSpace Labs on website performance, mobile app development, AI automation, design systems, Shopify and conversion optimization.",
  alternates: { canonical: "/blogs" },
};

const lite = (p: BlogPost): PostLite => ({
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category,
  readingTime: p.readingTime,
  banner: p.banner,
});

export default function BlogsPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${site.name} Insights`,
          url: `${site.url}/blogs`,
          isPartOf: { "@id": WEBSITE_ID },
          publisher: { "@id": ORG_ID },
        }}
      />
      <BlogHero
        eyebrow="ZSpace Labs / Insights"
        title={[<>Ideas, insights &amp;</>, <span key="t" className="italic text-orange">technology that ships.</span>]}
        description="Practical writing on web development, AI automation, design systems, commerce and conversion — grounded in how we actually build, not trend chasing."
        stack={posts.slice(0, 3).map(lite)}
        stats={[
          { value: String(posts.length), label: "Articles" },
          { value: String(blogCategories.length), label: "Topic hubs" },
        ]}
      />

      <FeaturedPost post={lite(featured)} />

      <TopicGrid
        topics={blogCategories.map((c) => ({
          slug: c.slug,
          name: c.name,
          title: c.title,
          description: c.description,
          count: posts.filter((post) => post.category === c.name).length,
          serviceSlug: c.serviceSlug,
        }))}
      />

      <BlogSection id="all-articles" eyebrow="All articles" title={[<>Everything</>, <span key="w" className="italic text-orange">we&rsquo;ve written.</span>]}>
        <Suspense fallback={null}>
          <BlogExplorer posts={rest.map(toSummary)} />
        </Suspense>
      </BlogSection>
    </>
  );
}
