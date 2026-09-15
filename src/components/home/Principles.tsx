import { Container } from "../Container";
import { Reveal } from "../ScrollReveal";
import { Eyebrow } from "../SectionHeading";

const principles = [
  {
    title: "Built to perform",
    body: "Speed and Core Web Vitals are planning decisions, not last-minute fixes. Every product we ship is engineered to load fast and stay fast as it grows.",
  },
  {
    title: "One team, no handoffs",
    body: "Design and engineering work from the same component system from day one, so what gets shipped matches what was designed.",
  },
  {
    title: "Systems over one-offs",
    body: "We build design systems and clean architecture, not disposable pages, so your team can extend the product long after we hand it over.",
  },
  {
    title: "Honest about scope",
    body: "We tell you what a project actually needs before we tell you what it costs. No inflated timelines, no scope you didn't ask for.",
  },
];

export function Principles() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow accent="blue">How we operate</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.15] tracking-tight sm:text-[2.5rem]">
                A technology partner your team can actually{" "}
                <span className="text-blue">rely on</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[46ch] text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                We&apos;re not the agency that disappears after launch or ships a
                site that breaks the moment you try to change it. Everything
                below is a standard we hold ourselves to on every project.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i}>
                <div className="border-t border-line-strong pt-5">
                  <h3 className="font-display text-[1.15rem] font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-pretty text-[0.98rem] leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
