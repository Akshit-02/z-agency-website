"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { accentHex } from "@/components/case-studies/case-study-visual";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** The homepage's closing beat — one bold room, and a literal color key back
 * to the six disciplines, so the "space for every idea" concept pays off. */
export function SpaceStartsHere() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden bg-ink px-6 py-20 text-white sm:px-16 sm:py-28">
      <div className="grid-field-ink pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="font-mono-label text-xs uppercase tracking-[0.2em] text-white/45">
            Your space starts here
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Every idea on this page started as a sentence like yours.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            Tell us what you&rsquo;re building. We&rsquo;ll tell you honestly whether — and how
            — we can help.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex justify-center">
            <ButtonLink href="/contact" variant="light" size="lg">
              Start a Project
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-3">
        {services.map((service, i) => {
          const isHovered = hovered === i;
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative flex items-center gap-2 border border-white/15 px-4 py-2.5 transition-colors hover:border-white/30"
            >
              <motion.span
                aria-hidden
                className="size-2 shrink-0"
                animate={{ backgroundColor: accentHex[service.color] }}
              />
              <span
                className={cn(
                  "font-mono-label text-xs uppercase tracking-wide text-white/60 transition-colors",
                  isHovered && "text-white",
                )}
              >
                {service.shortName}
              </span>
              <ArrowUpRight
                className={cn(
                  "size-3 text-white/0 transition-all duration-200",
                  isHovered && "translate-x-0.5 text-white/70",
                )}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
