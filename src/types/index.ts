import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  /** The human way someone would actually phrase needing this — used to frame services as problems, not a list of names. */
  prompt: string;
  description: string;
  icon: LucideIcon;
  color: "ink" | "blue" | "purple" | "coral" | "yellow" | "mint";
  capabilities: string[];
  problems: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  technologies: string[];
  deliverables: string[];
  faqs: { question: string; answer: string }[];
  relatedCaseStudySlugs: string[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  serviceSlugs: string[];
  technologies: string[];
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  process: { title: string; description: string }[];
  results: { metric: string; label: string }[];
  year: string;
  heroAccent: "ink" | "blue" | "purple" | "coral" | "yellow" | "mint";
  gallery: number;
};

export type Industry = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  featured?: boolean;
  content: {
    heading: string;
    body: string[];
  }[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  result?: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  details: string[];
};

export type TechCategory = {
  name: string;
  items: string[];
};

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};
