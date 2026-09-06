import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { BlogCard } from "@/components/blog/blog-card";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const headings = post.content.map((section) => section.heading);
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const relatedFallback = related.length > 0 ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          url: `${siteConfig.url}/blog/${post.slug}`,
          datePublished: post.publishedAt,
          authorName: post.author.name,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Insights", url: `${siteConfig.url}/blog` },
          { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
        ])}
      />

      <section className="border-b border-line pb-12 pt-16 sm:pt-20">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-ink"
          >
            <ArrowLeft className="size-4" />
            All insights
          </Link>
          <div className="mx-auto mt-8 max-w-3xl">
            <Reveal>
              <Eyebrow>{post.category}</Eyebrow>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 font-display text-3xl font-medium leading-[1.15] tracking-tight text-balance sm:text-5xl">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-ink-faint">
                <span className="font-medium text-ink-soft">{post.author.name}</span>
                <span>{post.author.role}</span>
                <span aria-hidden>·</span>
                <span>{formatDate(post.publishedAt)}</span>
                <span aria-hidden>·</span>
                <span>{post.readingTime}</span>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[200px_1fr]">
            <TableOfContents headings={headings} />
            <div className="mx-auto w-full max-w-2xl">
              {post.content.map((section, i) => (
                <div key={section.heading} id={`section-${i}`} className="scroll-mt-28 pb-10">
                  <h2 className="font-display text-2xl font-medium text-ink">{section.heading}</h2>
                  {section.body.map((paragraph, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-ink-soft text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              <div className="mt-4 flex flex-col gap-3 border border-line bg-mist p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-ink">Enjoyed this one?</p>
                  <p className="text-sm text-ink-faint">Get new articles as we publish them.</p>
                </div>
                <NewsletterForm variant="light" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-mist py-20">
        <Container>
          <h2 className="font-display text-2xl font-medium text-ink">Related reading</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {relatedFallback.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
