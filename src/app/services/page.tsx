import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContextualCta } from "@/components/ui/contextual-cta";
import { CaseStudyVisual } from "@/components/case-studies/case-study-visual";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const roomBg: Record<(typeof services)[number]["color"], string> = {
  ink: "bg-white",
  blue: "bg-sky",
  purple: "bg-lavender",
  coral: "bg-peach",
  yellow: "bg-peach",
  mint: "bg-mint",
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, mobile apps, Shopify stores, AI solutions, automation, and UI/UX design — the full stack of services Zspace offers.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six disciplines. One team that connects them."
        description="We don't hand you off between departments. The same people who scope the strategy stay through design, build, and launch."
      />

      <div className="border-t border-line">
        {services.map((service, i) => (
          <section
            key={service.slug}
            className={cn("relative border-b border-line py-16 sm:py-20", roomBg[service.color])}
          >
            <Container>
              <div
                className={cn(
                  "grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16",
                  i % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <Reveal>
                  <CaseStudyVisual accent={service.color} initial={String(i + 1)} className="aspect-[4/3]" />
                </Reveal>

                <div>
                  <Reveal>
                    <span className="font-mono-label text-xs uppercase tracking-wide text-ink-faint">
                      0{i + 1} / {service.shortName}
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <p className="mt-3 font-display text-xl italic text-ink-soft">
                      &ldquo;{service.prompt}&rdquo;
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                      {service.name}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-4 text-base leading-relaxed text-ink-soft">
                      {service.description}
                    </p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-ink-soft">
                          <Check className="mt-0.5 size-4 shrink-0 text-coral" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="link-underline mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                    >
                      Explore {service.shortName}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </Container>
          </section>
        ))}
      </div>

      <ContextualCta
        eyebrow="Still deciding"
        title="Most projects touch three or four of these at once. We'll help you scope the real list."
        ctaLabel="Discuss Your Idea"
        ctaHref="/contact"
      />
    </>
  );
}
