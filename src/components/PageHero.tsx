import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./ScrollReveal";
import { Eyebrow } from "./SectionHeading";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

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
    <section className="border-b border-line pb-16 pt-[150px] sm:pb-20 sm:pt-[170px]">
      <Container>
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <Reveal>
          <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-[2.4rem] font-medium leading-[1.08] tracking-tight sm:text-[3.2rem]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[56ch] text-pretty text-[1.1rem] leading-relaxed text-ink-soft">
              {description}
            </p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
