export const site = {
  name: "ZSpace Labs",
  legalName: "ZSpace Labs",
  domain: "zspace.in",
  // Production serves from www (apex redirects to www), so canonical URLs,
  // sitemap entries and structured data must use the www host.
  url: "https://www.zspace.in",
  email: "connect@zspace.in",
  tagline: "A technology studio for businesses that refuse to look average.",
  description:
    "ZSpace Labs builds websites, mobile apps, Shopify experiences, digital products and AI automations through thoughtful design and technology.",
  // Default browser/social title for pages without their own title.
  defaultTitle: "ZSpace Labs | Technology & Digital Product Studio",
  // How the brand is introduced in long-form copy (about page, llms.txt).
  intro:
    "ZSpace Labs is a technology and digital product studio focused on building useful digital experiences, products and systems. We bring strategy, design and engineering together to turn ideas into practical digital solutions.",
  footerDescription:
    "An independent technology and digital product studio building websites, apps, commerce experiences and intelligent automations.",
  // Official social profiles, used as schema.org sameAs. Only add profiles
  // that are verified to belong to ZSpace Labs: the previous entries pointed
  // to an unrelated company's LinkedIn page and a non-existent X account.
  social: {} as Record<string, string>,
} as const;

/**
 * Countries where ZSpace Labs has clients (confirmed by the owner on
 * 17 October 2026). Used for Organization.areaServed, the About page and the
 * "outside India" section on service pages. Each note summarises the main
 * rule a build in that market is designed around, with its primary source.
 * Re-check the notes when the rules change; they are not legal advice.
 */
export const markets = [
  {
    name: "India",
    note:
      "The DPDP Act 2023 and DPDP Rules 2025 phase in from November 2025. Most duties for businesses, including notices, security safeguards, breach reporting and user rights, apply from May 2027.",
  },
  {
    name: "United Arab Emirates",
    note:
      "The federal Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) has applied since 2 January 2022, and the DIFC has its own Data Protection Law. Arabic and right-to-left layouts are planned from the start when your audience needs them.",
  },
  {
    name: "United Kingdom",
    note:
      "UK GDPR covers personal data, and the ICO's storage and access guidance, finalised on 29 April 2026, sets the rules for cookies and analytics. We use WCAG 2.2 AA as the accessibility benchmark.",
  },
  {
    name: "Australia",
    note:
      "The Privacy Act 1988 and the Australian Privacy Principles apply. From 10 December 2026, privacy policies must also describe significant decisions that software makes or substantially informs (APP 1.7 to 1.9).",
  },
  {
    name: "Singapore",
    note:
      "The Personal Data Protection Act 2012 sets consent, purpose and protection obligations for collecting and using personal data.",
  },
] as const;

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blogs", href: "/blogs" },
];
