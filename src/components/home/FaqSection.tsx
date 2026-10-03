"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import { Atmosphere } from "@/components/ui/Aesthetic";
import { BlogScene } from "@/components/blog/BlogScene";
import type { BlogSceneData } from "@/lib/blog-scenes";

const FAQ_CHAT: BlogSceneData = {
  kind: "chat",
  label: "How much does a project cost, and how long does it take?",
  items: ["Tell us the scope you have in mind", "We share an honest range", "You decide, with no pressure"],
  seed: 3,
};
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
      className={`relative overflow-hidden rounded-2xl border transition-colors duration-500 ${
        open ? "border-ink bg-ink text-white" : "border-ink/10 bg-white hover:border-ink/25"
      }`}
      initial={still ? false : { opacity: 0, y: 24, rotateX: 30 }}
      animate={on ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, ease: EASE, delay: 0.05 * index }}
      style={{ transformPerspective: 900, transformOrigin: "50% 0%" }}
    >
      {open && (
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-orange-600/25 blur-[70px]" />
      )}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group relative flex w-full items-center gap-4 px-5 py-4 text-left sm:gap-5 sm:px-6 sm:py-5"
      >
        <span className={`font-mono text-[0.78rem] tabular-nums ${open ? "text-orange-bright" : "text-ink/35"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 text-[1rem] font-medium leading-snug tracking-tight sm:text-[1.05rem]">{item.q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
            open ? "rotate-45 bg-white text-ink" : "bg-ink/[0.05] text-ink/60 group-hover:bg-ink group-hover:text-white"
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="relative overflow-hidden"
          >
            <p className="max-w-[62ch] px-5 pb-6 pl-[3.1rem] text-[0.92rem] leading-relaxed text-white/65 sm:px-6 sm:pl-[3.6rem] sm:text-[0.95rem]">
              {item.a}
              {index === 0 && (
                <>
                  {" "}
                  If you have an idea but aren&rsquo;t sure what you need yet, that&rsquo;s completely fine. Start
                  with the problem and we&rsquo;ll{" "}
                  <Link href="/contact" className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
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
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:py-28">
      <Atmosphere tone="light" still={still} />
      <div className="relative mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[400px_1fr] lg:gap-16">
        <div ref={headRef} className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow on={headOn} still={still}>
            FAQ
          </Eyebrow>
          <h2 className="mt-6 text-[2.8rem] leading-[1] tracking-[-0.025em] text-ink sm:text-[3.6rem]" style={serif}>
            {["Things you’re probably", <span key="w" className="italic text-orange">wondering.</span>].map((line, i) => (

              <span key={i} className="block overflow-hidden pb-[0.08em]">
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

          <motion.div className="mt-10 hidden max-w-[420px] lg:block" {...rise(0.5)}>
            <div className="overflow-hidden rounded-[20px] bg-white p-1.5 shadow-[0_40px_80px_-40px_rgba(11,12,14,0.4),0_0_0_1px_rgba(11,12,14,0.06)]">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[15px]">
                <BlogScene scene={FAQ_CHAT} />
              </div>
            </div>
          </motion.div>
        </div>

        <div ref={listRef} className="flex flex-col gap-2.5">
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
