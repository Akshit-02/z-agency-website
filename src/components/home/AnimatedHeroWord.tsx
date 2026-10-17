"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const EASE = [0.25, 1, 0.5, 1] as const;

export function AnimatedHeroWord({
  phrases,
  interval = 3200,
  paused = false,
}: {
  phrases: string[];
  interval?: number;
  paused?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % phrases.length), interval);
    return () => clearInterval(t);
  }, [paused, interval, phrases.length]);

  const words = phrases[index].split(" ");

  return (
    <span
      aria-hidden
      className="relative -mb-[0.15em] flex h-[1.4em] items-center justify-center overflow-hidden px-4 italic text-orange"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={phrases[index]}
          className="flex gap-[0.25em] whitespace-nowrap"
          exit={{ transition: { duration: 0.28 } }}
        >
          {words.map((word, i) => (
            // The space keeps the words separate in the page text; flexbox
            // ignores whitespace-only text, so the visual gap is unchanged.
            <Fragment key={word}>
              {i > 0 && " "}
              <motion.span
                className="inline-block"
                initial={{ y: "65%", opacity: 0, filter: "blur(8px)" }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: EASE, delay: i * 0.08 },
                }}
                exit={{
                  y: "-65%",
                  opacity: 0,
                  filter: "blur(8px)",
                  transition: { duration: 0.28, ease: EASE },
                }}
              >
                {word}
                {i === words.length - 1 && <span className="text-ink not-italic">.</span>}
              </motion.span>
            </Fragment>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
