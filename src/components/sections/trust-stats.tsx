import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";

const statements = [
  {
    value: 50,
    suffix: "+",
    lead: "Digital experiences",
    tail: "designed and built for teams who needed more than a vendor.",
  },
  {
    value: 10,
    suffix: "+",
    lead: "Industries",
    tail: "worth of context, from fintech compliance to retail seasonality.",
  },
  {
    value: 95,
    suffix: "%",
    lead: "Client satisfaction",
    tail: "measured the only way that matters — would they hire us again.",
  },
];

export function TrustStats() {
  return (
    <section className="border-b border-line bg-white">
      <Container className="grid grid-cols-1 divide-y divide-line lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        {statements.map((s, i) => (
          <Reveal key={s.lead} delay={i * 0.08} className="py-14 lg:px-10 lg:py-20">
            <p className="font-display text-6xl font-medium leading-none tracking-tight text-ink sm:text-7xl">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-4 max-w-[16rem] text-base leading-snug text-ink">
              <span className="font-medium">{s.lead}</span>{" "}
              <span className="text-ink-soft">{s.tail}</span>
            </p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
