import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/container";
import { PageHero, type RoomMood } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ContextualCta } from "@/components/ui/contextual-cta";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { CaseStudyVisual, accentHex, type Accent } from "@/components/case-studies/case-study-visual";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const roomMood: Record<Accent, RoomMood> = {
  ink: "ink",
  blue: "sky",
  purple: "lavender",
  coral: "peach",
  yellow: "peach",
  mint: "mint",
};

const roomBg: Record<Accent, string> = {
  ink: "bg-mist",
  blue: "bg-sky",
  purple: "bg-lavender",
  coral: "bg-peach",
  yellow: "bg-peach",
  mint: "bg-mint",
};

const contextualCtaCopy: Record<string, { eyebrow: string; title: string; ctaLabel: string }> = {
  "ai-solutions": {
    eyebrow: "Curious what applies to you",
    title: "Explore what's actually possible with AI in your product.",
    ctaLabel: "Explore What's Possible With AI",
  },
  automation: {
    eyebrow: "Found the repetitive task",
    title: "If a person is doing it the same way every day, it's probably automatable.",
    ctaLabel: "Let's Automate It",
  },
};

const defaultCtaCopy = {
  eyebrow: "Ready when you are",
  title: "Tell us where this would slot into what you're already building.",
  ctaLabel: "Discuss Your Idea",
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.name, description: service.description },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedCaseStudies = caseStudies.filter((cs) =>
    service.relatedCaseStudySlugs.includes(cs.slug),
  );
  const ctaCopy = contextualCtaCopy[service.slug] ?? defaultCtaCopy;
  const accent = accentHex[service.color];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.name,
          description: service.description,
          url: `${siteConfig.url}/services/${service.slug}`,
        })}
      />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: `${siteConfig.url}/services` },
          { name: service.name, url: `${siteConfig.url}/services/${service.slug}` },
        ])}
      />

      <PageHero mood={roomMood[service.color]} eyebrow={service.shortName} title={service.name} description={service.tagline}>
        <div className="mt-9">
          <ButtonLink href="/book-a-consultation" size="lg">
            Start Your Project
          </ButtonLink>
        </div>
      </PageHero>

      <section className="border-b border-line py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="font-display text-2xl italic leading-snug text-ink-soft sm:text-3xl">
              &ldquo;{service.prompt}&rdquo;
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
              {service.description}
            </p>
          </div>
          <CaseStudyVisual accent={service.color} initial={service.shortName[0]} className="aspect-square hidden lg:flex" />
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <SectionHeading
            index="01"
            eyebrow="Problems we solve"
            title="The situations that usually bring clients to us"
          />
          <div className="mt-12 grid grid-cols-1 border-t border-l border-line sm:grid-cols-3">
            {service.problems.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 0.08} className="border-b border-r border-line p-7">
                <span className="font-mono-label text-xs text-ink-faint">0{i + 1}</span>
                <h3 className="mt-3 font-display text-lg font-medium text-ink">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{problem.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-line py-20 sm:py-24", roomBg[service.color])}>
        <Container>
          <SectionHeading index="02" eyebrow="Our approach" title="How we think about this work" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {service.approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div
                  className={cn("h-full p-6", i === 1 ? "text-white" : "border border-line bg-white")}
                  style={i === 1 ? { backgroundColor: accent } : undefined}
                >
                  <h3 className={cn("font-display text-lg font-medium", i === 1 ? "text-white" : "text-ink")}>
                    {item.title}
                  </h3>
                  <p className={cn("mt-2 text-sm leading-relaxed", i === 1 ? "text-white/80" : "text-ink-soft")}>
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading index="03" eyebrow="Capabilities" title="What's included" />
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="mt-0.5 size-4 shrink-0" style={{ color: accent }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading eyebrow="Deliverables" title="What you walk away with" />
              <ul className="mt-8 flex flex-col gap-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="border border-line px-4 py-3 text-sm font-medium text-ink">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className={cn("border-b border-line py-20 sm:py-24", roomBg[service.color])}>
        <Container>
          <SectionHeading index="04" eyebrow="Technology" title="What we build it with" />
          <div className="mt-8 flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span key={tech} className="border border-line-strong bg-white px-4 py-2 text-sm font-medium text-ink">
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-24">
        <Container>
          <SectionHeading index="05" eyebrow="Process" title="How a project like this runs" />
          <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05} className="bg-white p-4">
                <span className="font-mono-label text-xs text-ink-faint">{step.number}</span>
                <p className="mt-2 font-display text-base font-medium text-ink">{step.title}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {relatedCaseStudies.length > 0 && (
        <section className="border-b border-line py-20 sm:py-24">
          <Container>
            <SectionHeading index="06" eyebrow="Related work" title="See it applied" />
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCaseStudies.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr]">
            <SectionHeading eyebrow="FAQs" title="Common questions" />
            <FaqAccordion items={service.faqs} />
          </div>
        </Container>
      </section>

      <ContextualCta
        eyebrow={ctaCopy.eyebrow}
        title={ctaCopy.title}
        ctaLabel={ctaCopy.ctaLabel}
        ctaHref="/contact"
        variant="dark"
      />
    </>
  );
}
