import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/SectionHeading";
import { BlogExplorer } from "@/components/BlogExplorer";
import { BlogBanner } from "@/components/BlogBanner";
import { StructuredData } from "@/components/StructuredData";
import { posts } from "@/lib/blog-data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights — Notes on Web, Mobile, AI Automation & Conversion",
  description:
    "Practical writing from ZSpace on website performance, mobile app development, AI automation, design systems, Shopify and conversion optimization.",
  alternates: { canonical: "/blogs" },
};

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
        }}
      />
      <PageHero
        eyebrow="ZSpace / Insights"
        title={
          <>
            Ideas, insights &amp;{" "}
            <span className="text-blue">technology</span> that ships.
          </>
        }
        description="Practical writing on web development, AI automation, design systems, commerce and conversion — grounded in how we actually build, not trend chasing."
      />

      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <Reveal>
            <Link
              href={`/blogs/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16"
            >
              <div className="order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line lg:order-1 lg:aspect-[16/12]">
                <div className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]">
                  <BlogBanner variant={featured.banner} />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[0.8rem] font-medium uppercase tracking-[0.14em] text-orange">
                  Featured insight
                </span>
                <div className="mt-4 text-[0.85rem]">
                  <span className="text-blue">{featured.category}</span>
                  <span className="mx-2 text-line-strong">/</span>
                  <span className="text-ink-soft">{featured.readingTime}</span>
                </div>
                <h2 className="mt-4 text-balance font-display text-[1.7rem] font-medium leading-[1.15] tracking-tight sm:text-[2.2rem]">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-medium text-blue transition-colors duration-300 group-hover:text-blue-deep">
                  Read the article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <Eyebrow accent="blue">All articles</Eyebrow>
          <div className="mt-8">
            <Suspense fallback={null}>
              <BlogExplorer posts={rest} />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
