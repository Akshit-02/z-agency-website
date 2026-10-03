import type { Metadata } from "next";
import { Inter, Space_Grotesk, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";
import { services } from "@/lib/services-data";
import { ORG_ID, WEBSITE_ID } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.defaultTitle,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "technology agency",
    "web development agency",
    "mobile app development",
    "AI automation agency",
    "UI UX design studio",
    "Shopify development agency",
    "CRO audit",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.defaultTitle,
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    google: "g1CFVm17mGpVIJmAf6vaq1pViTaQBbso8Xf4rI3--qI",
  },
};

const GA_MEASUREMENT_ID = "G-00464BTJH5";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${newsreader.variable}`}>
      <body className="font-body antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": ORG_ID,
            name: site.name,
            alternateName: "ZSpace",
            url: site.url,
            logo: { "@type": "ImageObject", url: `${site.url}/apple-icon`, width: 180, height: 180 },
            email: site.email,
            description: site.intro,
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: site.email,
              url: `${site.url}/contact`,
              availableLanguage: ["English"],
            },
            knowsAbout: services.map((service) => service.name),
            ...(Object.keys(site.social).length > 0 ? { sameAs: Object.values(site.social) } : {}),
          }}
        />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": WEBSITE_ID,
            name: site.name,
            url: site.url,
            publisher: { "@id": ORG_ID },
            inLanguage: "en",
            potentialAction: {
              "@type": "SearchAction",
              target: `${site.url}/blogs?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
