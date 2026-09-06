import type { Metadata } from "next";
import { Mail, Clock, ShieldCheck, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us about your project and we'll get back to you within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        mood="lavender"
        eyebrow="Contact"
        title="So — what are you working on?"
        description="Whether you have a clear product roadmap or just the beginning of an idea, we'd like to hear about it."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-8">
              <InfoRow
                icon={Clock}
                title="Response time"
                description="We reply to every inquiry within one business day, usually sooner."
              />
              <InfoRow
                icon={Mail}
                title="Prefer email?"
                description={
                  <a href={`mailto:${siteConfig.email}`} className="text-ink underline underline-offset-2">
                    {siteConfig.email}
                  </a>
                }
              />
              <InfoRow
                icon={CalendarClock}
                title="Ready to just talk?"
                description={
                  <ButtonLink href="/book-a-consultation" variant="secondary" size="sm" className="mt-1">
                    Book a consultation
                  </ButtonLink>
                }
              />
              <InfoRow
                icon={ShieldCheck}
                title="No pressure"
                description="This form starts a conversation, not a sales sequence. If we're not the right fit, we'll tell you."
              />
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

function InfoRow({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex size-10 shrink-0 items-center justify-center border border-line-strong">
        <Icon className="size-4 text-coral" />
      </div>
      <div>
        <p className="font-medium text-ink">{title}</p>
        <div className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</div>
      </div>
    </div>
  );
}
