"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Clock, Mail, MapPin, Paperclip, Reply, Star } from "lucide-react";
import { Atmosphere, EASE, Eyebrow, MaskLines, riseProps, serif } from "@/components/ui/Aesthetic";

const facts = [
  { icon: Mail, label: "Email", value: "connect@zspace.in", href: "mailto:connect@zspace.in" },
  { icon: MapPin, label: "Where we work", value: "Remote-first, working globally" },
  { icon: Clock, label: "Response time", value: "Usually within one business day" },
];

/** A realistic inbox preview of what a reply looks like. */
function ReplyPreview({ on, still }: { on: boolean; still: boolean }) {
  return (
    <motion.div
      className="relative"
      initial={still ? false : { opacity: 0, y: 30, rotateX: 25 }}
      animate={on ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 1, ease: EASE, delay: 0.6 }}
      style={{ transformPerspective: 1000, transformOrigin: "50% 100%" }}
      aria-hidden
    >
      <div className="absolute inset-x-6 -bottom-3 h-full rounded-2xl bg-white/70 shadow-[0_20px_40px_-30px_rgba(11,12,14,0.4)] ring-1 ring-ink/[0.05]" />
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_30px_60px_-30px_rgba(11,12,14,0.4)] ring-1 ring-ink/[0.06]">
        <div className="flex items-center justify-between border-b border-ink/[0.06] px-4 py-2.5">
          <span className="text-[0.7rem] font-semibold text-ink">Inbox</span>
          <span className="flex items-center gap-1 text-[0.62rem] text-ink/40">
            <Star className="h-3 w-3 fill-[#f59e0b] text-[#f59e0b]" /> Priority
          </span>
        </div>
        <div className="flex gap-3 px-4 py-3.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-[0.72rem] font-bold text-white">ZS</span>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-2">
              <p className="truncate text-[0.78rem] font-semibold text-ink">ZSpace Labs</p>
              <span className="shrink-0 text-[0.62rem] text-ink/40">Next business day</span>
            </div>
            <p className="truncate text-[0.74rem] font-medium text-ink">Re: Your project — scope and next steps</p>
            <p className="mt-1 line-clamp-2 text-[0.7rem] leading-relaxed text-ink/55">
              Thanks for the detail. We&rsquo;ve read it properly — here&rsquo;s our honest read on scope, what we&rsquo;d
              build first and a couple of questions&hellip;
            </p>
            <div className="mt-2.5 flex items-center gap-2">
              <span className="flex items-center gap-1 rounded-md border border-ink/10 px-2 py-1 text-[0.62rem] text-ink/60">
                <Paperclip className="h-3 w-3" /> scope-notes.pdf
              </span>
              <span className="flex items-center gap-1 rounded-md bg-ink px-2 py-1 text-[0.62rem] font-medium text-white">
                <Reply className="h-3 w-3" /> Reply
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ContactHero({ form }: { form: ReactNode }) {
  const still = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const on = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="relative overflow-hidden bg-white px-5 pb-20 pt-[120px] sm:px-8 lg:pb-28 lg:pt-[150px]">
      <Atmosphere tone="light" still={still} />
      <div ref={ref} className="relative mx-auto grid max-w-[1180px] items-start gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
        <div>
          <Eyebrow on={on} still={still}>
            Contact
          </Eyebrow>
          <h1 className="mt-6 text-[2.9rem] leading-[1] tracking-[-0.03em] text-ink sm:text-[4rem] lg:text-[4.4rem]" style={serif}>
            <MaskLines
              on={on}
              still={still}
              lines={[
                <>Let&rsquo;s figure out</>,
                <>what you&rsquo;re</>,
                <span key="b" className="italic text-orange">
                  building.
                </span>,
              ]}
            />
          </h1>
          <motion.p className="mt-7 max-w-[30rem] text-pretty text-[1.05rem] leading-relaxed text-ink/60" {...riseProps(on, still, 0.4)}>
            Share a few details about the project and we&rsquo;ll come back with a clear read on scope and next steps —
            no automated sales sequence.
          </motion.p>

          <ul className="mt-9 flex flex-col gap-2.5">
            {facts.map((f, i) => (
              <motion.li key={f.label} {...riseProps(on, still, 0.45 + i * 0.08, 16)}>
                <div className="flex items-center gap-4 rounded-2xl border border-ink/[0.07] bg-white/80 px-4 py-3.5 backdrop-blur">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${i % 2 ? "bg-blue-tint text-blue" : "bg-orange-tint text-orange"}`}>
                    <f.icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink/45">{f.label}</p>
                    {f.href ? (
                      <a href={f.href} className="text-[1rem] font-medium text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-ink">
                        {f.value}
                      </a>
                    ) : (
                      <p className="text-[1rem] font-medium text-ink">{f.value}</p>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 hidden max-w-[420px] lg:block">
            <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink/40">What a reply looks like</p>
            <ReplyPreview on={on} still={still} />
          </div>
        </div>

        <motion.div
          className="relative"
          initial={still ? false : { opacity: 0, y: 50, rotateY: -12 }}
          animate={on ? { opacity: 1, y: 0, rotateY: 0 } : {}}
          transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
          style={{ transformPerspective: 1400 }}
        >
          <div aria-hidden className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-orange-500/10 via-transparent to-blue/10 blur-2xl" />
          <div className="relative rounded-[28px] bg-white p-6 shadow-[0_60px_120px_-60px_rgba(11,12,14,0.5),0_0_0_1px_rgba(11,12,14,0.06)] sm:p-9">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-[1.6rem] leading-tight text-ink" style={serif}>
                  Tell us about the <span className="italic text-orange">project.</span>
                </p>
                <p className="mt-1 text-[0.85rem] text-ink/50">Takes about two minutes.</p>
              </div>
            </div>
            {form}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
