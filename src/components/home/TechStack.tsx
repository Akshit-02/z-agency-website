import { Container } from "../Container";
import { Eyebrow } from "../SectionHeading";
import { Reveal } from "../ScrollReveal";

const stack = [
  { label: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", tools: ["Node.js", "PostgreSQL", "REST & GraphQL", "Serverless"] },
  { label: "Mobile", tools: ["React Native", "Swift", "Kotlin"] },
  { label: "AI & Automation", tools: ["OpenAI & Anthropic APIs", "Vector databases", "Workflow automation"] },
  { label: "Commerce", tools: ["Shopify Liquid", "Shopify Hydrogen", "Klaviyo"] },
  { label: "Design", tools: ["Figma", "Design systems", "Prototyping"] },
];

export function TechStack() {
  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <div className="max-w-xl">
          <Reveal>
            <Eyebrow accent="blue">Under the hood</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-display text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-[2.6rem]">
              Modern <span className="text-blue">technology</span>, chosen
              deliberately.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
              We stick to technology that&apos;s proven at scale and easy for your
              team to inherit later — nothing exotic just to look impressive.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group, i) => (
            <Reveal key={group.label} delay={0.04 * i}>
              <div className="border-t border-line-strong pt-5">
                <h3 className="text-[0.85rem] font-medium uppercase tracking-[0.1em] text-ink-soft">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-line-strong px-3.5 py-1.5 text-[0.88rem] text-ink"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
