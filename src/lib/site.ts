export const site = {
  name: "ZSpace",
  legalName: "ZSpace",
  domain: "zspace.in",
  url: "https://zspace.in",
  email: "connect@zspace.in",
  tagline: "A technology studio for businesses that refuse to look average.",
  description:
    "ZSpace is a technology studio that designs and builds websites, mobile apps, AI automation and digital products for businesses that want to move faster and look sharper doing it.",
  social: {
    linkedin: "https://www.linkedin.com/company/zspace",
    instagram: "https://www.instagram.com/zspace.in",
    twitter: "https://twitter.com/zspace_in",
  },
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
