import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { services } from "@/data/services";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { CaseStudyVisual } from "@/components/case-studies/case-study-visual";
import { ContextualCta } from "@/components/ui/contextual-cta";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const relatedServices = services.filter((s) => cs.serviceSlugs.includes(s.slug));
  const currentIndex = caseStudies.findIndex((c) => c.slug === cs.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Case Studies", url: `${siteConfig.url}/case-studies` },
          { name: cs.title, url: `${siteConfig.url}/case-studies/${cs.slug}` },
        ])}
      />

      <section className="border-b border-line pt-16 pb-12 sm:pt-20">
        <Container>
          <Reveal>
            <Eyebrow>
              {cs.industry} · {cs.client} · {cs.year}
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {cs.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
              {cs.summary}
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 text-xs text-ink-faint">
              This is a representative engagement illustrating our process — details are
              composited for confidentiality where needed.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line">
        <Reveal>
          <CaseStudyVisual accent={cs.heroAccent} initial={cs.client[0]} className="aspect-[16/9] sm:aspect-[21/8]" />
        </Reveal>
      </section>

      <section className="border-b border-line">
        <Container className="grid grid-cols-2 divide-y divide-line sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {cs.results.map((result) => (
            <div key={result.label} className="py-8 sm:px-8 sm:py-10">
              <p className="font-display text-4xl font-medium text-ink sm:text-5xl">{result.metric}</p>
              <p className="mt-1 text-xs text-ink-faint sm:text-sm">{result.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-ink">The challenge</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{cs.challenge}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl font-medium text-ink">The solution</h2>
              <p className="mt-4 leading-relaxed text-ink-soft">{cs.solution}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-mist py-20">
        <Container>
          <h2 className="font-display text-2xl font-medium text-ink sm:text-3xl">How we got there</h2>
          <div className="mt-10 grid grid-cols-1 border-t border-l border-line sm:grid-cols-3">
            {cs.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08} className="border-b border-r border-line bg-white p-6">
                <span className="font-mono-label text-xs text-ink-faint">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {cs.gallery > 1 && (
        <section className="border-b border-line py-20">
          <Container>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Array.from({ length: cs.gallery - 1 }).map((_, i) => (
                <CaseStudyVisual key={i} accent={cs.heroAccent} initial={cs.client[0]} className="aspect-[4/3]" />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-b border-line py-20">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
                Technologies used
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cs.technologies.map((t) => (
                  <span key={t} className="border border-line-strong px-3.5 py-1.5 text-sm text-ink">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
                Services provided
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1 border border-blue/30 bg-sky px-3.5 py-1.5 text-sm font-medium text-blue"
                  >
                    {s.shortName}
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20">
        <Container>
          <Link
            href={`/case-studies/${next.slug}`}
            className="group flex items-center justify-between border border-line px-8 py-8 transition-colors hover:bg-mist"
          >
            <div>
              <p className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
                Next case study
              </p>
              <p className="mt-2 font-display text-2xl font-medium text-ink">{next.title}</p>
            </div>
            <ArrowRight className="size-6 shrink-0 text-ink-soft transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </section>

      <ContextualCta
        eyebrow="See how we can build yours"
        title="Want to talk through something similar for your product?"
        ctaLabel="Start a Project"
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
