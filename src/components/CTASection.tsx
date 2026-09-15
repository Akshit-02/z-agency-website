import type { ReactNode } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Reveal } from "./ScrollReveal";
import { site } from "@/lib/site";

export function CTASection({
  eyebrow = "Get in touch",
  title,
  description,
  primaryLabel = "Start a Project",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="border-y border-line bg-ink text-paper">
      <Container className="flex flex-col items-start gap-10 py-20 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.8rem] font-medium uppercase tracking-[0.14em] text-orange-bright">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-bright" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-[2.1rem] font-medium leading-[1.12] tracking-tight sm:text-[2.9rem]">
              {title}
            </h2>
          </Reveal>
          {description && (
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[50ch] text-pretty text-[1.05rem] leading-relaxed text-white/70">
                {description}
              </p>
            </Reveal>
          )}
        </div>
        <Reveal delay={0.15} className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href={primaryHref} variant="primary" className="sm:min-w-[190px]">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              href={secondaryHref}
              variant="secondary"
              showArrow={false}
              className="border-white/25 text-paper hover:border-white sm:min-w-[190px]"
            >
              {secondaryLabel}
            </Button>
          )}
        </Reveal>
      </Container>
      <Container className="pb-10">
        <a href={`mailto:${site.email}`} className="text-[0.9rem] text-white/50 hover:text-white/80">
          or write to us directly at {site.email}
        </a>
      </Container>
    </section>
  );
}
