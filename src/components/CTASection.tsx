import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "./ScrollReveal";
import { DarkPanel } from "./ui/Aesthetic";
import { CtaVisual } from "./CtaVisual";
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
    <DarkPanel className="py-6 sm:py-8" innerClassName="px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
      <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div>
          <Reveal>
            <span className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/70">
              <span className="h-px w-6 bg-orange-500" aria-hidden="true" />
              {eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.06} y={30}>
            <h2 className="mt-5 text-balance font-serif-display text-[2.6rem] leading-[1.02] sm:text-[3.4rem] [&_span]:!text-orange-bright">
              {title}
            </h2>
          </Reveal>
          {description && (
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[46ch] text-pretty text-[1.05rem] leading-relaxed text-white/60">{description}</p>
            </Reveal>
          )}

          {/* actions sit with the message, not off to the side */}
          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href={primaryHref}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-white px-7 py-4 text-[0.92rem] font-medium text-ink"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange-500/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                {primaryLabel}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center whitespace-nowrap rounded-full border border-white/20 px-6 py-3.5 text-[0.9rem] font-medium text-white transition-colors duration-300 hover:border-white/60"
                >
                  {secondaryLabel}
                </Link>
              ) : (
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-2 text-[0.9rem] text-white/60 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors group-hover:border-white/50">
                    <Mail className="h-4 w-4" />
                  </span>
                  {site.email}
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <CtaVisual />
      </div>
    </DarkPanel>
  );
}
