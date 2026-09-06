import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { LogoMark } from "@/components/brand/logo";
import { ContextualCta } from "@/components/ui/contextual-cta";
import { values, teamRoles } from "@/data/team";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zspace is a technology and product studio built around one idea: understand the business before proposing the solution.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        mood="peach"
        eyebrow="About Zspace"
        title="Built by people who got tired of watching good ideas get built badly"
        description="Most of what goes wrong on a project happens before anyone writes a line of code."
      />

      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl space-y-7 text-lg leading-relaxed text-ink-soft">
            <Reveal>
              <p className="font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
                Most agencies specialize narrowly, or they generalize so loosely that
                nobody&rsquo;s really responsible for the outcome.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <p>
                We built Zspace on a different bet: that strategy, design, engineering, and the
                newer disciplines — AI and automation — work best when they sit inside one team,
                instead of getting handed between vendors who never talk to each other.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                That means a client doesn&rsquo;t get a designer&rsquo;s guess at what&rsquo;s
                technically feasible, or an engineer&rsquo;s guess at what the business actually
                needs. The same people carry the thinking from the first strategy conversation
                through to the thing that ships.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p>
                We&rsquo;re deliberately not the agency that says yes to everything. Some of our
                best client relationships started with us talking someone out of the project they
                walked in with, and toward the one that actually solved their problem.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-ink-faint">
            How we think
          </p>
          <div className="mt-10">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div
                  className={cn(
                    "flex flex-col gap-4 border-t border-line py-9 sm:flex-row sm:items-baseline sm:gap-10",
                    i % 2 === 1 && "sm:flex-row-reverse sm:text-right",
                  )}
                >
                  <span className="shrink-0 font-mono-label text-xs text-ink-faint sm:w-10">
                    0{i + 1}
                  </span>
                  <h3
                    className={cn(
                      "font-display text-2xl font-medium leading-snug text-ink sm:w-2/5 sm:text-3xl",
                    )}
                  >
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed text-ink-soft sm:flex-1">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-ink-faint">
                The team
              </p>
              <p className="mt-5 font-display text-3xl font-medium leading-snug text-ink sm:text-4xl">
                Small and senior, on purpose.
              </p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
                When you call, it&rsquo;s the person doing the work — not an account manager
                relaying a message from someone you&rsquo;ve never met. We stay this size
                deliberately, even when it means saying no to a project.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-2 gap-y-2">
                {teamRoles.map((role) => (
                  <span
                    key={role.role}
                    className="border border-line-strong px-3 py-1.5 text-sm text-ink-soft"
                  >
                    {role.role}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-ink">
                <div className="grid-field-ink pointer-events-none absolute inset-0" />
                <LogoMark withTrail={false} className="relative h-32 w-32 text-white/90" />
                <div className="absolute -right-3 -top-3 flex size-14 items-center justify-center bg-coral">
                  <span className="font-display text-lg font-medium text-white">Z</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <ContextualCta
        eyebrow="Work with us"
        title="If this sounds like how you'd want a project run, let's talk."
        ctaLabel="Let's Talk"
        ctaHref="/contact"
      />
    </>
  );
}
