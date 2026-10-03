"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import { FaqIllustration } from "./FaqIllustration";
import { homeFaqs } from "@/lib/home-faqs";

const EASE = [0.25, 1, 0.5, 1] as const;
const serif = { fontFamily: "var(--font-newsreader), Georgia, serif" } as const;

const faqs = homeFaqs;

function Eyebrow({ children, on, still }: { children: React.ReactNode; on: boolean; still: boolean }) {
  return (
    <p className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink">
      <motion.span
        className="h-px w-6 origin-left bg-orange-600"
        initial={still ? false : { scaleX: 0 }}
        animate={on ? { scaleX: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
      />
      {children}
    </p>
  );
}

function Row({
  item,
  index,
  open,
  onToggle,
  on,
  still,
}: {
  item: (typeof faqs)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
  on: boolean;
  still: boolean;
}) {
  return (
    <motion.div
      className="border-t border-ink/10 last:border-b"
      initial={still ? false : { opacity: 0, y: 14 }}
      animate={on ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE, delay: 0.04 * index }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-start gap-4 py-5 text-left sm:gap-6 sm:py-6"
      >
        <span className="pt-0.5 text-[0.85rem] tabular-nums text-ink/35">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`flex-1 text-[1.02rem] font-medium leading-snug tracking-tight transition-colors duration-300 sm:text-[1.1rem] ${
            open ? "text-ink" : "text-ink group-hover:text-ink/70"
          }`}
        >
          {item.q}
        </span>
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-ink/50">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-[62ch] pb-6 pl-[2.1rem] text-[0.92rem] leading-relaxed text-ink/60 sm:pl-[2.6rem] sm:text-[0.95rem]">
              {item.a}
              {index === 0 && (
                <>
                  {" "}
                  If you have an idea but aren&rsquo;t sure what you need yet, that&rsquo;s completely fine. Start
                  with the problem and we&rsquo;ll{" "}
                  <Link href="/contact" className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
                    help figure out the right approach
                  </Link>
                  .
                </>
              )}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FaqSection() {
  const [open, setOpen] = useState(0);
  const reduced = useReducedMotion();
  const still = !!reduced;

  const headRef = useRef<HTMLDivElement>(null);
  const headOn = useInView(headRef, { once: true, amount: 0.4 });
  const listRef = useRef<HTMLDivElement>(null);
  const listOn = useInView(listRef, { once: true, amount: 0.15 });

  const rise = (delay: number) =>
    still
      ? { initial: false as const }
      : {
          initial: { opacity: 0, y: 18 },
          animate: headOn ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.8, ease: EASE, delay },
        };

  return (
    <section className="relative overflow-hidden bg-[#fdfdfc] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[400px_1fr] lg:gap-16">
        <div ref={headRef}>
          <Eyebrow on={headOn} still={still}>
            FAQ
          </Eyebrow>
          <h2 className="mt-6 text-[2.6rem] leading-[1.03] tracking-[-0.02em] text-ink sm:text-[3rem]" style={serif}>
            {["Things you’re probably", "wondering."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={still ? false : { y: "105%", rotate: 2 }}
                  animate={headOn ? { y: 0, rotate: 0 } : {}}
                  transition={{ duration: 1, ease: EASE, delay: 0.1 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>
          <motion.p className="mt-4 max-w-[26rem] text-[0.98rem] leading-relaxed text-ink/55" {...rise(0.35)}>
            A few useful answers before we start building.
          </motion.p>

          <div className="hidden lg:block">
            <FaqIllustration on={headOn} still={still} />
          </div>
        </div>

        <div ref={listRef}>
          {faqs.map((item, i) => (
            <Row
              key={item.q}
              item={item}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
              on={listOn}
              still={still}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
