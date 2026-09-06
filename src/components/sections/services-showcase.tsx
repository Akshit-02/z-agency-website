"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { CaseStudyVisual, accentHex, softHex } from "@/components/case-studies/case-study-visual";
import { cn } from "@/lib/utils";

/**
 * "What can we make together?" — services reframed as the sentence someone
 * would actually say out loud, not a grid of names. Touching a line changes
 * the whole room's color to that discipline's mood and reveals its graphic;
 * this is the section that's supposed to surprise people.
 */
export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <motion.div
      animate={{ backgroundColor: softHex[current.color] }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr]"
    >
      <div className="border-t border-line lg:border-r">
        {services.map((service, i) => {
          const isActive = i === active;
          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="group relative block w-full border-b border-line px-6 py-7 text-left sm:px-10 sm:py-9"
            >
              <motion.span
                aria-hidden
                className="absolute inset-y-0 left-0 w-[3px]"
                animate={{
                  scaleY: isActive ? 1 : 0,
                  backgroundColor: accentHex[service.color],
                }}
                transition={{ duration: 0.3 }}
                style={{ originY: 0 }}
              />
              <span className="font-mono-label text-xs text-ink-faint">0{i + 1}</span>
              <p
                className={cn(
                  "mt-2 font-display text-2xl font-medium leading-snug tracking-tight text-balance transition-opacity sm:text-3xl lg:text-[2.15rem]",
                  isActive ? "text-ink opacity-100" : "text-ink opacity-45",
                )}
              >
                &ldquo;{service.prompt}&rdquo;
              </p>
              <motion.p
                initial={false}
                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                className="overflow-hidden text-sm font-medium text-ink-soft"
              >
                <span className="mt-3 inline-block">
                  → {service.name}
                </span>
              </motion.p>
            </button>
          );
        })}
      </div>

      <div className="relative flex flex-col justify-between p-8 sm:p-10">
        <div>
          <span className="font-mono-label text-xs uppercase tracking-[0.16em] text-ink-faint">
            What you get
          </span>
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="mt-3 font-display text-2xl font-medium text-ink">{current.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{current.tagline}</p>
          </motion.div>
        </div>

        <motion.div
          key={`${current.slug}-visual`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-8"
        >
          <CaseStudyVisual accent={current.color} initial={current.shortName[0]} className="aspect-[4/3]" />
        </motion.div>

        <Link
          href={`/services/${current.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
        >
          Explore {current.shortName}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </motion.div>
  );
}
