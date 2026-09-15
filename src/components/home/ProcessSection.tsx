"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "../Container";
import { Eyebrow } from "../SectionHeading";
import { Reveal } from "../ScrollReveal";

const steps = [
  {
    n: "01",
    title: "Understand",
    body: "We start by understanding your business, your users and what success actually looks like, before proposing any solution.",
    accent: "orange" as const,
  },
  {
    n: "02",
    title: "Strategize",
    body: "We define the right product, design direction and technical approach based on what we learned, not a default template.",
    accent: "blue" as const,
  },
  {
    n: "03",
    title: "Build",
    body: "Design and engineering move together, working from the same system, so the build stays true to the intended experience.",
    accent: "orange" as const,
  },
  {
    n: "04",
    title: "Launch",
    body: "We test across devices and real conditions, fix what needs fixing, and launch with a clear rollout plan.",
    accent: "blue" as const,
  },
  {
    n: "05",
    title: "Improve",
    body: "Post-launch, we use real usage data and feedback to keep refining the product rather than treating launch as the finish line.",
    accent: "orange" as const,
  },
];

export function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-line bg-[#f3f2ee] py-24 sm:py-32">
      <Container>
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <Eyebrow accent="blue">How we work</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-[2.6rem]">
                A process built for <span className="text-blue">clarity</span>,
                not ceremony.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                className="font-display text-[6rem] font-medium leading-none tracking-tight text-ink"
              >
                {steps[active].n}
              </motion.span>
              <div
                className={`mt-4 h-[2px] w-16 ${
                  steps[active].accent === "orange" ? "bg-orange" : "bg-blue"
                }`}
              />
              <p className="mt-6 max-w-[30ch] text-[1rem] leading-relaxed text-ink-soft">
                Step {Number(steps[active].n)} of {steps.length} in every ZSpace engagement.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                onViewportEnter={() => setActive(i)}
                viewport={{ margin: "-40% 0px -40% 0px" }}
                className={`border-t py-8 transition-colors duration-300 last:border-b sm:py-10 ${
                  active === i ? "border-ink" : "border-line-strong"
                }`}
              >
                <div className="flex items-start gap-5 sm:gap-8">
                  <span
                    className={`font-display text-[1.1rem] font-medium transition-colors duration-300 lg:hidden ${
                      active === i ? "text-ink" : "text-ink-soft"
                    }`}
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3
                      className={`font-display text-[1.4rem] font-medium tracking-tight transition-colors duration-300 sm:text-[1.7rem] ${
                        active === i ? "text-ink" : "text-ink-soft"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-[54ch] text-pretty text-[1rem] leading-relaxed transition-colors duration-300 ${
                        active === i ? "text-ink-soft" : "text-ink-soft/60"
                      }`}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
