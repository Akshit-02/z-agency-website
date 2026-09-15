import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Tell ZSpace about your website, app, AI automation or Shopify project. We respond with honest scoping, usually within one business day.",
  alternates: { canonical: "/contact" },
};

const facts = [
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Where we work", value: "Remote-first, working globally" },
  { icon: Clock, label: "Response time", value: "Usually within one business day" },
];

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${site.url}/contact`,
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Let's figure out what you're building."
        description="Share a few details about the project and we'll come back with a clear read on scope and next steps — no automated sales sequence."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} delay={0.05 * i}>
                <div className="flex items-start gap-4 border-t border-line-strong pt-5">
                  <fact.icon className="mt-1 h-5 w-5 shrink-0 text-ink-soft" />
                  <div>
                    <p className="text-[0.85rem] font-medium uppercase tracking-[0.08em] text-ink-soft">
                      {fact.label}
                    </p>
                    {fact.href ? (
                      <a href={fact.href} className="mt-1 block text-[1.05rem] font-medium text-blue">
                        {fact.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[1.05rem] font-medium text-ink">{fact.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
