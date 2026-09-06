import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { ContextualCta } from "@/components/ui/contextual-cta";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Zspace works across startups, SaaS, e-commerce, healthcare, fintech, education, real estate, travel, logistics, and professional services.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        mood="sky"
        eyebrow="Industries"
        title="Different industries, the same rigor"
        description="Every sector has its own constraints — compliance, seasonality, trust requirements. We adapt our approach to them without diluting how we build."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <IndustriesGrid />
        </Container>
      </section>
      <ContextualCta
        eyebrow="Don't see yours listed"
        title="That's fine — most of what we do transfers across industries anyway."
        ctaLabel="Tell Us What You're Building"
        ctaHref="/contact"
      />
    </>
  );
}
