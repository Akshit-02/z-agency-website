import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Principles } from "@/components/home/Principles";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyZspace } from "@/components/home/WhyZspace";
import { TechStack } from "@/components/home/TechStack";
import { CTASection } from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Website, App & AI Automation Studio`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Principles />
      <ServicesShowcase />
      <IndustriesSection />
      <ProcessSection />
      <WhyZspace />
      <TechStack />
      <CTASection
        title={
          <>
            Have a <span className="text-orange-bright">project</span> in
            mind? Let&apos;s figure out the{" "}
            <span className="text-blue-bright">right approach</span>.
          </>
        }
        description="Tell us what you're building and where it's stuck. We'll respond with a clear read on scope, approach and next steps — no generic sales pitch."
      />
    </>
  );
}
