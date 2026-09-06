import {
  Rocket,
  Cloud,
  ShoppingCart,
  HeartPulse,
  Landmark,
  GraduationCap,
  Building2,
  Plane,
  Truck,
  Briefcase,
} from "lucide-react";
import type { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "startups",
    name: "Startups",
    description:
      "From first prototype to first hundred customers, we help founders build the right thing without over-building it.",
    icon: Rocket,
    capabilities: ["MVP development", "Product strategy", "Fundraising-ready design"],
  },
  {
    slug: "saas",
    name: "SaaS",
    description:
      "Dashboards, onboarding flows, and marketing sites for software companies scaling past their first version.",
    icon: Cloud,
    capabilities: ["Product design systems", "Onboarding optimization", "Growth infrastructure"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description:
      "Storefronts and conversion systems for DTC and retail brands that need more than a template theme.",
    icon: ShoppingCart,
    capabilities: ["Shopify development", "Conversion optimization", "Retention automation"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description:
      "Patient-facing and clinical tools built with the care and compliance awareness healthcare software requires.",
    icon: HeartPulse,
    capabilities: ["Patient portals", "Intake automation", "Mobile health apps"],
  },
  {
    slug: "fintech",
    name: "Fintech",
    description:
      "Financial products where trust, clarity, and accuracy aren't optional — from consumer apps to internal tools.",
    icon: Landmark,
    capabilities: ["Secure application design", "AI-assisted analysis tools", "Dashboard architecture"],
  },
  {
    slug: "education",
    name: "Education",
    description:
      "Learning platforms and tools designed around how people actually study and retain, not just deliver content.",
    icon: GraduationCap,
    capabilities: ["Learning platforms", "AI study tools", "Cohort and course systems"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description:
      "Listing platforms, portals, and internal tools for brokerages and proptech companies.",
    icon: Building2,
    capabilities: ["Listing platforms", "CRM automation", "Lead capture systems"],
  },
  {
    slug: "travel",
    name: "Travel",
    description:
      "Booking flows and mobility apps built to handle real-time availability and two-sided marketplaces.",
    icon: Plane,
    capabilities: ["Booking systems", "Two-sided marketplace apps", "Mobile experiences"],
  },
  {
    slug: "logistics",
    name: "Logistics",
    description:
      "Operational systems that keep inventory, orders, and fulfillment in sync across multiple platforms.",
    icon: Truck,
    capabilities: ["Workflow automation", "Systems integration", "Operational dashboards"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description:
      "Sites and internal tools for firms whose credibility depends on how clearly they present their expertise.",
    icon: Briefcase,
    capabilities: ["Corporate websites", "Client portals", "Internal reporting tools"],
  },
];
