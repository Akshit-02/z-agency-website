"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { technologyCategories } from "@/data/technologies";
import { accentHex, softHex, type Accent } from "@/components/case-studies/case-study-visual";
import { cn } from "@/lib/utils";

const categoryAccents: Accent[] = ["blue", "purple", "coral", "yellow", "mint", "ink"];

export function TechEcosystem() {
  const [active, setActive] = useState(0);
  const accent = categoryAccents[active % categoryAccents.length];

  return (
    <div className="border border-line">
      <div className="flex flex-wrap border-b border-line">
        {technologyCategories.map((cat, i) => (
          <button
            key={cat.name}
            type="button"
            onClick={() => setActive(i)}
            className={cn(
              "relative px-5 py-4 font-mono-label text-xs uppercase tracking-wide transition-colors",
              i === active ? "text-ink" : "text-ink-faint hover:text-ink-soft",
            )}
          >
            {cat.name}
            {i === active && (
              <motion.span
                layoutId="tech-tab"
                className="absolute inset-x-0 bottom-0 h-[2px]"
                style={{ backgroundColor: accentHex[accent] }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        animate={{ backgroundColor: softHex[accent] }}
        transition={{ duration: 0.4 }}
        className="relative min-h-[220px] p-8 sm:p-12"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-px bg-line sm:grid-cols-4"
          >
            {technologyCategories[active].items.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className="flex aspect-square flex-col justify-between bg-white p-5"
              >
                <span className="font-mono-label text-[0.65rem] text-ink-faint">0{i + 1}</span>
                <span className="font-display text-lg font-medium leading-tight text-ink sm:text-xl">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
