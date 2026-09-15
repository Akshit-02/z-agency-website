import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { IndustryGlyph } from "@/components/IndustryGlyph";
import {
  industriesWithDetailPages,
  getIndustryBySlug,
  homepageIndustries,
} from "@/lib/industries-data";
import { getServiceBySlug } from "@/lib/services-data";
import { posts } from "@/lib/blog-data";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return industriesWithDetailPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry || !industry.hasDetailPage) return {};

  const metaDescription = `${industry.shortDescription} ZSpace designs and builds the websites, apps and automation these businesses need.`;

  return {
    title: `${industry.name} — Industries`,
    description: metaDescription,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} — ${site.name}`,
      description: metaDescription,
      url: `${site.url}/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry || !industry.hasDetailPage) notFound();

  const accent = industry.accent;
  const textAccent = accent === "blue" ? "text-blue" : "text-orange";
  const bgAccent = accent === "blue" ? "bg-blue" : "bg-orange";

  const services = (industry.serviceSlugs ?? [])
    .map(getServiceBySlug)
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedPosts = (industry.relatedBlogSlugs ?? [])
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const otherIndustries = homepageIndustries
    .filter((i) => i.slug !== industry.slug && i.hasDetailPage)
    .slice(0, 3);

  return (
    <>
      {industry.faqs && industry.faqs.length > 0 && (
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: industry.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      <PageHero
        eyebrow={`Industry · ${industry.name}`}
        title={
          industry.heroTitle
            ? industry.heroTitle.map((part, i) => (
                <span
                  key={i}
                  className={part.accent ? (part.accent === "blue" ? "text-blue" : "text-orange") : undefined}
                >
                  {part.text}
                </span>
              ))
            : industry.name
        }
        description={industry.heroCopy}
        accent={accent}
        breadcrumbs={[
          { name: "Industries", href: "/industries" },
          { name: industry.name, href: `/industries/${industry.slug}` },
        ]}
      />

      <section className="border-b border-line py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <Reveal>
            <div className="mx-auto aspect-[11/8] w-full max-w-[380px] lg:mx-0">
              <IndustryGlyph visual={industry.visual} accent={accent} />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow accent={accent}>Where {industry.name.toLowerCase()} businesses are</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                {industry.description}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {industry.challenges && industry.challenges.length > 0 && (
        <section className="border-b border-line bg-[#f3f2ee] py-16 sm:py-24">
          <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow accent={accent}>Common challenges</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-balance font-display text-[1.9rem] font-medium leading-[1.15] tracking-tight sm:text-[2.2rem]">
                  Sound familiar?
                </h2>
              </Reveal>
            </div>
            <ul className="flex flex-col gap-5">
              {industry.challenges.map((challenge, i) => (
                <Reveal key={challenge} delay={0.05 * i}>
                  <li className="border-t border-line-strong pt-4 text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
                    {challenge}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {industry.solutions && industry.solutions.length > 0 && (
        <section className="border-b border-line py-16 sm:py-24">
          <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow accent={accent}>How we help</Eyebrow>
              </Reveal>
            </div>
            <div className="flex flex-col gap-5">
              {industry.solutions.map((solution, i) => (
                <Reveal key={solution} delay={0.05 * i}>
                  <div className="flex gap-3">
                    <Check className={`mt-1 h-4 w-4 shrink-0 ${textAccent}`} />
                    <p className="text-pretty text-[1.02rem] leading-relaxed text-ink-soft">{solution}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-b border-line py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {services.length > 0 && (
            <div>
              <Reveal>
                <Eyebrow accent={accent}>Recommended services</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <ul className="mt-6 flex flex-col gap-4">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex items-center justify-between gap-4 text-[1.05rem] font-medium text-ink"
                      >
                        <span>{service.name}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}
          {industry.useCases && industry.useCases.length > 0 && (
            <div>
              <Reveal>
                <Eyebrow accent={accent}>Example use cases</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <ul className="mt-6 flex flex-col gap-3">
                  {industry.useCases.map((useCase) => (
                    <li key={useCase} className="flex gap-3 text-[1rem] text-ink-soft">
                      <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${bgAccent}`} />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          )}
        </Container>
      </section>

      {industry.faqs && industry.faqs.length > 0 && (
        <section className="border-b border-line py-16 sm:py-24">
          <Container>
            <div className="max-w-xl">
              <Reveal>
                <Eyebrow accent={accent}>FAQ</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 text-balance font-display text-[1.9rem] font-medium leading-[1.15] tracking-tight sm:text-[2.2rem]">
                  Common questions
                </h2>
              </Reveal>
            </div>
            <div className="mt-10">
              <Faq items={industry.faqs} />
            </div>
          </Container>
        </section>
      )}

      {(relatedPosts.length > 0 || otherIndustries.length > 0) && (
        <section className="py-16 sm:py-20">
          <Container className="grid gap-12 lg:grid-cols-2">
            {relatedPosts.length > 0 && (
              <div>
                <Eyebrow accent={accent}>Related reading</Eyebrow>
                <ul className="mt-5 flex flex-col gap-4">
                  {relatedPosts.map((post) => (
                    <li key={post.slug}>
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="group flex items-center justify-between gap-4 text-[1rem] font-medium text-blue transition-colors duration-300 hover:text-blue-deep"
                      >
                        <span className="text-pretty">{post.title}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {otherIndustries.length > 0 && (
              <div>
                <Eyebrow accent={accent === "blue" ? "orange" : "blue"}>Other industries</Eyebrow>
                <ul className="mt-5 flex flex-col gap-4">
                  {otherIndustries.map((i) => (
                    <li key={i.slug}>
                      <Link
                        href={`/industries/${i.slug}`}
                        className="group flex items-center justify-between gap-4 text-[1rem] font-medium text-blue transition-colors duration-300 hover:text-blue-deep"
                      >
                        <span>{i.name}</span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </section>
      )}

      <CTASection
        title={industry.ctaTitle ?? `Talk to us about ${industry.name.toLowerCase()}`}
        description={industry.ctaDescription}
        primaryLabel="Discuss your project"
      />
    </>
  );
}
