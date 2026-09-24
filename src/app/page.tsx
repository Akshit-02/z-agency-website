import type { Metadata } from "next";
import { HomeIntro } from "@/components/home/HomeIntro";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { Principles } from "@/components/home/Principles";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { IndustriesGrid } from "@/components/home/IndustriesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyZspace } from "@/components/home/WhyZspace";
import { TechStack } from "@/components/home/TechStack";
import { FaqSection } from "@/components/home/FaqSection";
import { BuildCTA } from "@/components/home/BuildCTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Website, App & AI Automation Studio`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeIntro />
      <WhatWeBuild />
      <Principles />
      <ServicesShowcase />
      <IndustriesGrid />
      <WhyZspace />
      <ProcessSection />
      <TechStack />
      <FaqSection />
      <BuildCTA />
    </>
  );
}
