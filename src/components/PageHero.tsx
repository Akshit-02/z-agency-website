import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./ScrollReveal";
import { Eyebrow } from "./SectionHeading";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Atmosphere } from "./ui/Aesthetic";

export function PageHero({
  eyebrow,
  title,
  description,
  accent = "orange",
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  accent?: "blue" | "orange";
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white pb-16 pt-[150px] sm:pb-20 sm:pt-[170px]">
      <Atmosphere tone="light" />
      <Container className="relative">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <Reveal>
          <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08} y={36}>
          <h1 className="mt-5 max-w-4xl text-balance font-serif-display text-[2.8rem] leading-[1.02] sm:text-[4rem] lg:text-[4.6rem]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-[56ch] text-pretty text-[1.1rem] leading-relaxed text-ink-soft">
              {description}
            </p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
