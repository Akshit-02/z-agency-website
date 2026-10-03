import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { BlogBanner } from "@/components/BlogBanner";
import { BlogCard } from "@/components/BlogCard";
import { ArticleCover, ArticleRelated } from "@/components/blog/BlogKit";
import { BlogScene } from "@/components/blog/BlogScene";
import { sceneFor } from "@/lib/blog-scenes";
import { Atmosphere } from "@/components/ui/Aesthetic";
import { Callout } from "@/components/Callout";
import { ReadingProgress } from "@/components/ReadingProgress";
import { TableOfContents } from "@/components/TableOfContents";
import { IndustryGlyph } from "@/components/IndustryGlyph";
import { Faq } from "@/components/Faq";
import { renderInline, slugifyHeading, stripInline } from "@/lib/inline-content";
import { posts, getPostBySlug, getRelatedPosts, toSummary } from "@/lib/blog-data";
import { getServiceBySlug } from "@/lib/services-data";
import { getIndustryBySlug } from "@/lib/industries-data";
import { site } from "@/lib/site";
import { getCategoryByName } from "@/lib/blog-categories";
import { metaDescription, pageTitle, ORG_ID, WEBSITE_ID } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.title;
  const description = metaDescription(post.excerpt);

  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      siteName: site.name,
      type: "article",
      title,
      description,
      url: `${site.url}/blogs/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const tocItems = post.content.map((section) => ({
    id: slugifyHeading(section.heading),
    label: section.heading,
  }));

  const relatedServices = post.relatedServiceSlugs
    .map(getServiceBySlug)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedIndustries = (post.relatedIndustrySlugs ?? [])
    .map(getIndustryBySlug)
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .filter((i) => i.hasDetailPage);

  const relatedPosts = getRelatedPosts(post, 3);
  const category = getCategoryByName(post.category);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${site.url}/blogs/${post.slug}#article`,
          headline: post.title,
          description: metaDescription(post.excerpt),
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          image: `${site.url}/blogs/${post.slug}/opengraph-image`,
          articleSection: post.category,
          inLanguage: "en",
          author: { "@id": ORG_ID },
          publisher: { "@id": ORG_ID },
          isPartOf: { "@id": WEBSITE_ID },
          about: relatedServices.map((service) => ({
            "@type": "Service",
            name: service.name,
            url: `${site.url}/services/${service.slug}`,
          })),
          mainEntityOfPage: `${site.url}/blogs/${post.slug}`,
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: stripInline(f.q),
              acceptedAnswer: { "@type": "Answer", text: stripInline(f.a) },
            })),
          }}
        />
      )}
      <ReadingProgress targetId="article-body" />

      <div id="article-body">
        <section className="relative overflow-hidden bg-white pb-16 pt-[120px] sm:pt-[140px]">
          <Atmosphere tone="light" />
          <Container className="relative max-w-[960px]">
            <Reveal>
              <Breadcrumbs
                items={[
                  { name: "Blogs", href: "/blogs" },
                  ...(category ? [{ name: category.name, href: `/blogs/category/${category.slug}` }] : []),
                  { name: post.title, href: `/blogs/${post.slug}` },
                ]}
              />
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.8rem]">
                <Link
                  href={category ? `/blogs/category/${category.slug}` : "/blogs"}
                  className="flex items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 font-medium text-white transition-colors hover:bg-ink/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-bright" />
                  {post.category}
                </Link>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink/45">{post.readingTime}</span>
                <span className="h-1 w-1 rounded-full bg-ink/20" />
                <time dateTime={post.updated ?? post.date} className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink/45">
                  {new Date(post.updated ?? post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </time>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={30}>
              <h1 className="mt-6 text-balance font-serif-display text-[2.4rem] leading-[1.05] sm:text-[3.4rem] lg:text-[3.8rem]">
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-[64ch] text-pretty text-[1.15rem] leading-relaxed text-ink/60">{post.excerpt}</p>
            </Reveal>

            <div className="mt-12">
              <ArticleCover label={post.bannerAlt ?? `Illustration for ${post.title}`}>
                <BlogScene scene={sceneFor(post)} />
              </ArticleCover>
            </div>
          </Container>
        </section>

        <Container className="max-w-[1240px] py-14">
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,720px)] lg:gap-16">
            <div className="lg:pt-2">
              <TableOfContents items={tocItems} />
            </div>

            <div className="min-w-0">
              {post.content.map((section, i) => {
                const id = slugifyHeading(section.heading);
                return (
                  <Reveal key={id} delay={0.03 * i} className="mb-12 last:mb-0">
                    <span className="font-mono text-[0.72rem] text-orange">{String(i + 1).padStart(2, "0")}</span>
                    <h2
                      id={id}
                      className="mt-1.5 scroll-mt-28 text-balance font-serif-display text-[1.75rem] leading-[1.15] sm:text-[2.1rem]"
                    >
                      {section.heading}
                    </h2>

                    <div className="mt-4 flex flex-col gap-4">
                      {section.body.map((para, j) => (
                        <p key={j} className="text-pretty text-[1.06rem] leading-[1.8] text-ink-soft">
                          {renderInline(para)}
                        </p>
                      ))}
                    </div>

                    {section.checklist && (
                      <ul className="mt-5 flex flex-col gap-3">
                        {section.checklist.map((item) => (
                          <li key={item} className="flex gap-3 text-[1.02rem] leading-relaxed text-ink-soft">
                            <span className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-blue text-white"><Check className="h-3 w-3" strokeWidth={3} /></span>
                            <span>{renderInline(item)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.table && (
                      <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/10 shadow-[0_20px_50px_-40px_rgba(11,12,14,0.4)]">
                        <table className="w-full min-w-[520px] border-collapse text-left text-[0.95rem]">
                          <thead>
                            <tr className="bg-ink">
                              {section.table.headers.map((h) => (
                                <th
                                  key={h}
                                  className="px-5 py-3.5 font-display text-[0.85rem] font-medium tracking-tight text-white"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, ri) => (
                              <tr key={ri} className="border-b border-line last:border-b-0">
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-5 py-3 align-top leading-relaxed text-ink-soft">
                                    {renderInline(cell)}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.code && (
                      <figure className="mt-6">
                        <figcaption className="mb-2 text-[0.85rem] font-medium text-ink-soft">
                          {section.code.label}
                        </figcaption>
                        <pre
                          tabIndex={0}
                          className="overflow-x-auto rounded-2xl bg-ink p-5 font-mono text-[0.85rem] leading-relaxed text-white/85 shadow-[0_30px_60px_-40px_rgba(11,12,14,0.6)] focus-visible:outline-2 focus-visible:outline-blue"
                        >
                          <code>{section.code.text}</code>
                        </pre>
                      </figure>
                    )}

                    {section.visual && (
                      <figure className="mt-6">
                        <div className="aspect-[11/8] w-full max-w-sm overflow-hidden rounded-2xl">
                          <IndustryGlyph visual={section.visual.variant} accent={section.visual.accent} />
                        </div>
                        <figcaption className="mt-3 max-w-sm text-[0.88rem] leading-relaxed text-ink-soft">
                          {section.visual.caption}
                        </figcaption>
                      </figure>
                    )}

                    {section.diagram && (
                      <figure className="mt-6">
                        <div
                          tabIndex={0}
                          role="region"
                          aria-label={`${section.diagram.alt} (scrollable)`}
                          className="overflow-x-auto rounded-2xl bg-white p-1.5 shadow-[0_30px_70px_-45px_rgba(11,12,14,0.45)] ring-1 ring-ink/[0.06] focus-visible:outline-2 focus-visible:outline-blue"
                        >
                          <div role="img" aria-label={section.diagram.alt} className="aspect-[16/9] w-full min-w-[560px] overflow-hidden rounded-xl">
                            <BlogBanner variant={section.diagram.variant} />
                          </div>
                        </div>
                        <figcaption className="mt-3 text-[0.88rem] leading-relaxed text-ink-soft">
                          {section.diagram.caption}
                        </figcaption>
                      </figure>
                    )}

                    {section.callout && (
                      <div className="mt-6">
                        <Callout type={section.callout.type} text={section.callout.text} />
                      </div>
                    )}

                    {section.cta && (
                      <div className="relative mt-8 flex flex-col items-start gap-5 overflow-hidden rounded-[24px] bg-ink p-7 text-white sm:flex-row sm:items-center sm:justify-between">
                        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-600/30 blur-[70px]" />
                        <div className="relative">
                          <p className="font-serif-display text-[1.45rem] leading-tight">
                            {section.cta.title}
                          </p>
                          {section.cta.description && (
                            <p className="mt-2 max-w-[42ch] text-[0.95rem] leading-relaxed text-white/60 [&_a]:text-white [&_a]:underline [&_a]:decoration-white/30">
                              {renderInline(section.cta.description)}
                            </p>
                          )}
                        </div>
                        <Link
                          href={`/contact?src=${encodeURIComponent(`/blogs/${post.slug}`)}`}
                          className="group relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[0.9rem] font-medium text-ink transition-colors hover:bg-white/90"
                        >
                          Start a Project
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    )}
                  </Reveal>
                );
              })}

              {post.faqs && post.faqs.length > 0 && (
                <Reveal delay={0.1} className="mt-16 border-t border-ink/10 pt-12">
                  <Eyebrow accent="orange">FAQ</Eyebrow>
                  <h2 className="mt-4 text-balance font-serif-display text-[2rem] leading-tight sm:text-[2.4rem]">
                    Common <span className="text-orange">questions.</span>
                  </h2>
                  <div className="mt-6">
                    <Faq items={post.faqs} />
                  </div>
                </Reveal>
              )}

              {(relatedServices.length > 0 || relatedIndustries.length > 0) && (
                <Reveal delay={0.1} className="mt-16 border-t border-ink/10 pt-12">
                  <Eyebrow accent="blue">Where this applies</Eyebrow>
                  <h2 className="mt-4 text-balance font-serif-display text-[2rem] leading-tight sm:text-[2.4rem]">
                    Related services <span className="text-orange">&amp; industries.</span>
                  </h2>
                  <div className="mt-8">
                    <ArticleRelated
                      services={relatedServices.map((s) => ({ slug: s.slug, name: s.name, summary: s.summary }))}
                      industries={relatedIndustries.map((i) => ({ slug: i.slug, name: i.name, shortDescription: i.shortDescription }))}
                    />
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </div>

      <CTASection
        primaryHref={`/contact?src=${encodeURIComponent(`/blogs/${post.slug}`)}`}
        title={
          <>
            Have a <span className="text-orange-bright">project</span> in
            mind?
          </>
        }
        description="Whether you're building a new digital product, improving an existing website, or looking to automate part of your business — let's talk."
      />

      {relatedPosts.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <Container>
            <Eyebrow accent="orange">Keep exploring</Eyebrow>
            <h2 className="mt-4 text-balance font-serif-display text-[2.3rem] leading-tight sm:text-[3rem]">
              More from <span className="text-orange">{post.category}.</span>
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={toSummary(p)} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
