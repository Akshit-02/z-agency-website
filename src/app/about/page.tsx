import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/ScrollReveal";
import { Eyebrow } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About ZSpace — A Technology Studio Built Around One Team",
  description:
    "ZSpace is a technology studio that designs and builds digital products under one roof. Learn how we think about technology, design and working with clients.",
  alternates: { canonical: "/about" },
};

const beliefs = [
  {
    title: "Good technology solves a real problem",
    body: "We don't build features because they're trendy. Every decision has to trace back to a problem worth solving for your users or your business.",
  },
  {
    title: "Design should make complexity feel simple",
    body: "The best interfaces disappear. If a user has to think about how to use your product, the design has more work to do.",
  },
  {
    title: "Performance is part of the experience",
    body: "A slow product feels broken, no matter how good it looks. Speed is treated as a feature, not an afterthought.",
  },
  {
    title: "Businesses deserve better than a template",
    body: "Off-the-shelf solutions are a starting point, not a finish line. We build toward what your business actually needs, not what's easiest to ship.",
  },
];

const capabilities = [
  {
    title: "Design",
    body: "Interface design, design systems, prototyping and usability, handled by people who think in components, not one-off screens.",
  },
  {
    title: "Engineering",
    body: "Frontend, backend, mobile and infrastructure, built on frameworks that scale and stay maintainable long after launch.",
  },
  {
    title: "Strategy",
    body: "Before any design or code, we get clear on what the product needs to achieve and for whom — so decisions have a reason behind them.",
  },
];

export default function AboutPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About ZSpace",
          url: `${site.url}/about`,
        }}
      />
      <PageHero
        eyebrow="About ZSpace"
        title={
          <>
            A technology studio that thinks like a{" "}
            <span className="text-blue">product team</span>, not a vendor.
          </>
        }
        description="ZSpace was built on a simple idea: businesses shouldn't have to choose between good design and solid engineering. We do both, together, for every project we take on."
      />

      <section className="border-b border-line py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow accent="blue">Philosophy</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[1.9rem] font-medium leading-[1.15] tracking-tight sm:text-[2.3rem]">
                Technology should make a business faster, clearer and easier
                to <span className="text-blue">trust</span> — never more
                complicated.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <p className="text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                Most businesses don&apos;t need more technology. They need the
                right technology, built well, and maintained by people who
                understand why it exists in the first place.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                That&apos;s the gap ZSpace works in — between an idea and a
                product that&apos;s genuinely ready for the people who&apos;ll use it.
                We work across websites, mobile apps, AI automation, design
                and commerce, but the approach stays the same: understand the
                problem deeply, then build the smallest, sharpest solution
                that solves it well.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <Reveal>
            <Eyebrow accent="blue">What we believe</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {beliefs.map((belief, i) => (
              <Reveal key={belief.title} delay={0.05 * i}>
                <div className="border-t border-line-strong pt-5">
                  <h3 className="font-display text-[1.2rem] font-medium tracking-tight">
                    {belief.title}
                  </h3>
                  <p className="mt-2.5 text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                    {belief.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-20 sm:py-28">
        <Container>
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow accent="orange">Capabilities</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-[2.4rem]">
                Design, engineering and strategy,{" "}
                <span className="text-orange">under one roof</span>.
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={0.05 * i}>
                <div className="rounded-2xl border border-line p-7">
                  <h3 className="font-display text-[1.15rem] font-medium tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-pretty text-[0.95rem] leading-relaxed text-ink-soft">
                    {cap.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow accent="blue">Working style</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-[2.4rem]">
                Clear communication, from kickoff to launch.
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col gap-5">
            <Reveal delay={0.1}>
              <p className="text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
                We work in short, focused cycles with regular check-ins, so
                you always know what&apos;s being built and why. No black-box
                development, no surprise scope, no disappearing between
                milestones.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-pretty text-[1.02rem] leading-relaxed text-ink-soft">
                We work with founders, marketing teams and product teams
                anywhere in the world — collaboration happens over async
                updates and scheduled calls, whatever fits your team&apos;s pace.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-orange-bright">worth talking about</span>.
          </>
        }
        description="If you're evaluating who to build with, the easiest next step is a conversation about what you're trying to build."
        primaryLabel="Talk to ZSpace"
      />
    </>
  );
}
