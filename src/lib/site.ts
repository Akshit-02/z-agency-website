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
