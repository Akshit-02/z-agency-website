import type { Metadata } from "next";
import { NotFoundHero } from "@/components/NotFoundHero";
import { services } from "@/lib/services-data";
import { homepageIndustries } from "@/lib/industries-data";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <NotFoundHero
      quickLinks={quickLinks}
      services={services.slice(0, 4).map((s) => ({ slug: s.slug, name: s.name }))}
      industries={homepageIndustries.filter((i) => i.hasDetailPage).slice(0, 4).map((i) => ({ slug: i.slug, name: i.name }))}
    />
  );
}
