import { Check, X } from "lucide-react";
import { Container } from "../Container";
import { Eyebrow } from "../SectionHeading";
import { Reveal } from "../ScrollReveal";

const rows = [
  {
    them: "Design and development handled by separate vendors",
    us: "One team owns design and engineering end to end",
  },
  {
    them: "A template with your logo swapped in",
    us: "A product architected around your actual goals",
  },
  {
    them: "Launch day is the finish line",
    us: "We stay involved to measure, learn and improve",
  },
  {
    them: "Vague scopes that expand as they go",
    us: "Clear deliverables agreed before work starts",
  },
  {
    them: "Performance considered after complaints start",
    us: "Speed and Core Web Vitals planned from day one",
  },
];

export function WhyZspace() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow accent="blue">Why ZSpace</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-[2.6rem]">
              <span className="text-blue">Business-first</span>, not
              template-first.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-line">
          <div className="grid grid-cols-2 border-b border-line bg-[#f3f2ee] text-[0.85rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
            <div className="px-6 py-4 sm:px-8">Typical agency</div>
            <div className="px-6 py-4 sm:px-8 text-blue">ZSpace</div>
          </div>
          {rows.map((row, i) => (
            <Reveal key={row.us} delay={0.05 * i}>
              <div className="grid grid-cols-2 border-b border-line last:border-b-0">
                <div className="flex items-start gap-3 px-6 py-5 text-[0.95rem] text-ink-soft sm:px-8">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-line-strong" />
                  <span>{row.them}</span>
                </div>
                <div className="flex items-start gap-3 bg-[#fbfbf9] px-6 py-5 text-[0.95rem] font-medium text-ink sm:px-8">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                  <span>{row.us}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
