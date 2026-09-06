import { Reveal } from "@/components/ui/reveal";

const differentiators = [
  {
    title: "We push back before we start building",
    description:
      "If a feature won't help, we'll tell you before it's built, not after it's billed. Half our best client relationships started with us questioning the brief.",
  },
  {
    title: "Design has to earn its place",
    description:
      "Every screen is judged by what it does for the user and the business, not by how it looks in a portfolio shot.",
  },
  {
    title: "We use boring technology on purpose",
    description:
      "The right tool for the problem, not the newest one. Complexity is a cost we make you pay for later — we'd rather not add it.",
  },
  {
    title: "Built to outlast the first version",
    description:
      "Architecture decisions account for where the product is going, so version two doesn't mean starting over.",
  },
  {
    title: "You always know where things stand",
    description:
      "Weekly visibility into progress, budget, and decisions — not a status update you have to ask for.",
  },
];

export function WhyZspace() {
  return (
    <div className="border-t border-line">
      {differentiators.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.05}>
          <div className="group grid grid-cols-1 gap-3 border-b border-line py-9 sm:grid-cols-[8rem_1fr] sm:gap-8 lg:grid-cols-[10rem_1fr_20rem]">
            <span className="font-display text-5xl font-medium text-transparent [-webkit-text-stroke:1.5px_var(--color-line-strong)] transition-[-webkit-text-stroke] duration-300 group-hover:[-webkit-text-stroke:1.5px_var(--color-purple)] sm:text-6xl">
              0{i + 1}
            </span>
            <h3 className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
              {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-soft lg:pt-2">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
