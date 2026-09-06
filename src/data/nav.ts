import type { NavLink } from "@/types";
import { services } from "./services";

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/case-studies" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const servicesNav: NavLink[] = services.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
  description: s.tagline,
}));

export const footerLinks = {
  services: services.map((s) => ({ label: s.shortName, href: `/services/${s.slug}` })),
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/case-studies" },
    { label: "Industries", href: "/industries" },
    { label: "Insights", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Book a Consultation", href: "/book-a-consultation" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};
