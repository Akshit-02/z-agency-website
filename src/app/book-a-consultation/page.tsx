import type { Metadata } from "next";
import { Search, Target, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { BookingEmbed } from "@/components/contact/booking-embed";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "A free 30-minute consultation to talk through your project, get honest input, and find out if Zspace is the right fit.",
  alternates: { canonical: "/book-a-consultation" },
};

const whatYouGet = [
  {
    icon: Search,
    title: "An honest read on your idea",
    description: "We'll tell you what looks solid, what's underspecified, and what we'd want to know before scoping.",
  },
  {
    icon: Target,
    title: "A realistic sense of scope",
    description: "Rough timeline and complexity expectations, based on similar projects — not a sales estimate.",
  },
  {
    icon: FileText,
    title: "Clear next steps",
    description: "If it's a fit, you'll leave knowing exactly what a proposal and next stage would look like.",
  },
];

const whoItsFor = [
  "Founders scoping an MVP before committing budget",
  "Teams whose current site or product has stopped performing",
  "Companies evaluating whether AI or automation is worth pursuing",
  "Anyone who wants a second, technically grounded opinion",
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        mood="mint"
        eyebrow="Book a consultation"
        title="A straight conversation before anything else"
        description="Thirty minutes, no deck, no pressure. Just a technically grounded conversation about what you're trying to build."
      />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-medium text-ink">What you&rsquo;ll get</h2>
              <div className="mt-8 space-y-6">
                {whatYouGet.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.07}>
                    <div className="flex gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center border border-line-strong">
                        <item.icon className="size-4 text-coral" />
                      </div>
                      <div>
                        <p className="font-medium text-ink">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <h2 className="mt-12 font-display text-2xl font-medium text-ink">Who this is for</h2>
              <ul className="mt-6 space-y-3">
                {whoItsFor.map((item) => (
                  <li key={item} className="border border-line px-4 py-3 text-sm text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <BookingEmbed />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
