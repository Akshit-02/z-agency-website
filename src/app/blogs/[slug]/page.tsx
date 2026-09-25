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
import { Callout } from "@/components/Callout";
import { ReadingProgress } from "@/components/ReadingProgress";
import { TableOfContents } from "@/components/TableOfContents";
import { IndustryGlyph } from "@/components/IndustryGlyph";
import { Faq } from "@/components/Faq";
import { renderInline, slugifyHeading, stripInline } from "@/lib/inline-content";
import { posts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { getServiceBySlug } from "@/lib/services-data";
import { getIndustryBySlug } from "@/lib/industries-data";
import { site } from "@/lib/site";

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

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${site.url}/blogs/${post.slug}`,
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

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
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

      <div id="article-body" className="pt-[150px] sm:pt-[170px]">
        <Container className="max-w-[860px]">
          <Reveal>
            <Breadcrumbs
              items={[
                { name: "Blogs", href: "/blogs" },
                { name: post.title, href: `/blogs/${post.slug}` },
              ]}
            />
          </Reveal>

          <Reveal delay={0.05}>
            <span className="mt-8 inline-block text-[0.85rem] font-medium uppercase tracking-[0.08em] text-blue">
              {post.category}
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-4 text-balance font-display text-[2.1rem] font-medium leading-[1.14] tracking-tight sm:text-[2.8rem]">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[68ch] text-pretty text-[1.15rem] leading-relaxed text-ink-soft">
              {post.excerpt}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              role="img"
              aria-label={`Illustration for ${post.title}`}
              className="mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line"
            >
              <BlogBanner variant={post.banner} />
            </div>
          </Reveal>
        </Container>

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
                    <h2
                      id={id}
                      className="scroll-mt-28 font-display text-[1.4rem] font-medium tracking-tight sm:text-[1.6rem]"
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
                            <Check className="mt-1 h-4 w-4 shrink-0 text-blue" />
                            <span>{renderInline(item)}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.table && (
                      <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
                        <table className="w-full min-w-[520px] border-collapse text-left text-[0.95rem]">
                          <thead>
                            <tr className="bg-[#f3f2ee]">
                              {section.table.headers.map((h) => (
                                <th
                                  key={h}
                                  className="border-b border-line px-5 py-3 font-display text-[0.85rem] font-medium tracking-tight text-ink"
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

                    {section.callout && (
                      <div className="mt-6">
                        <Callout type={section.callout.type} text={section.callout.text} />
                      </div>
                    )}

                    {section.cta && (
                      <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-line-strong bg-[#f3f2ee] p-7 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-display text-[1.1rem] font-medium tracking-tight">
                            {section.cta.title}
                          </p>
                          {section.cta.description && (
                            <p className="mt-1.5 max-w-[42ch] text-[0.95rem] leading-relaxed text-ink-soft">
                              {renderInline(section.cta.description)}
                            </p>
                          )}
                        </div>
                        <Link
                          href="/contact"
                          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[0.9rem] font-medium text-white transition-colors hover:bg-orange-deep"
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
                <Reveal delay={0.1} className="mt-14 border-t border-line pt-10">
                  <Eyebrow accent="orange">FAQ</Eyebrow>
                  <h2 className="mt-4 text-balance font-display text-[1.5rem] font-medium tracking-tight sm:text-[1.7rem]">
                    Common questions
                  </h2>
                  <div className="mt-6">
                    <Faq items={post.faqs} />
                  </div>
                </Reveal>
              )}

              {(relatedServices.length > 0 || relatedIndustries.length > 0) && (
                <Reveal delay={0.1} className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2">
                  {relatedServices.length > 0 && (
                    <div>
                      <Eyebrow accent="blue">Related services</Eyebrow>
                      <ul className="mt-5 flex flex-col gap-4">
                        {relatedServices.map((service) => (
                          <li key={service.slug}>
                            <Link
                              href={`/services/${service.slug}`}
                              className="group flex items-center justify-between gap-4 text-[1.05rem] font-medium text-blue transition-colors duration-300 hover:text-blue-deep"
                            >
                              <span>{service.name}</span>
                              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {relatedIndustries.length > 0 && (
                    <div>
                      <Eyebrow accent="orange">Relevant industries</Eyebrow>
                      <ul className="mt-5 flex flex-col gap-4">
                        {relatedIndustries.map((industry) => (
                          <li key={industry.slug}>
                            <Link
                              href={`/industries/${industry.slug}`}
                              className="group flex items-center justify-between gap-4 text-[1.05rem] font-medium text-orange transition-colors duration-300 hover:text-orange-deep"
                            >
                              <span>{industry.name}</span>
                              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </div>

      <CTASection
        title={
          <>
            Have a <span className="text-orange-bright">project</span> in
            mind?
          </>
        }
        description="Whether you're building a new digital product, improving an existing website, or looking to automate part of your business — let's talk."
      />

      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <Eyebrow accent="orange">Keep exploring</Eyebrow>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
