import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogList } from "@/components/blog/blog-list";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on technology, startups, AI, automation, product development, and digital strategy from the Zspace team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <PageHero
        mood="peach"
        eyebrow="Insights"
        title="Notes on technology, product, and growth"
        description="What we're learning from client work — written plainly, without the filler."
      />
      <section className="pb-16">
        <Container>
          <BlogCard post={featured} featured />
        </Container>
      </section>
      <section className="pb-24">
        <Container>
          <BlogList posts={rest} />
        </Container>
      </section>
    </>
  );
}
