import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "@/components/brand/logo";
import { ButtonLink } from "@/components/ui/button";
import { LinkedInIcon, XIcon, InstagramIcon, DribbbleIcon } from "@/components/brand/social-icons";
import { footerLinks } from "@/data/nav";
import { siteConfig } from "@/lib/site-config";
import { NewsletterForm } from "./newsletter-form";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="flex h-2 w-full">
        <div className="h-full flex-1 bg-blue" />
        <div className="h-full flex-1 bg-purple" />
        <div className="h-full flex-1 bg-coral" />
        <div className="h-full flex-1 bg-yellow" />
        <div className="h-full flex-1 bg-mint-line" />
      </div>
      <div className="container-page border-b border-white/10 py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Still deciding? That&rsquo;s what the first call is for.
          </h2>
          <ButtonLink href="/book-a-consultation" variant="light" size="lg" className="shrink-0">
            Book a Consultation
          </ButtonLink>
        </div>
      </div>

      <div className="container-page py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <span className="inline-flex items-center gap-2.5">
              <LogoMark className="h-7 w-7 text-white" />
              <span className="font-display text-[1.3rem] leading-none tracking-tight text-white">
                <span className="font-semibold">Z</span>
                <span className="font-medium text-white/60">space</span>
              </span>
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: LinkedInIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: XIcon, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: DribbbleIcon, href: siteConfig.social.dribbble, label: "Dribbble" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Services" links={footerLinks.services} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white">Occasional notes on tech, AI, and product strategy</p>
            <p className="text-xs text-white/45">No spam. Unsubscribe whenever.</p>
          </div>
          <NewsletterForm />
        </div>

        <div className="mt-10 flex flex-col gap-3 font-mono-label text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-1 hover:text-white/80"
            >
              {siteConfig.email}
              <ArrowUpRight className="size-3" />
            </a>
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-mono-label text-xs uppercase tracking-[0.14em] text-white/35">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
