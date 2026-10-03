# Technical SEO

Audit and fixes completed 2026-10-03 on the codebase. All checks below were run against a local production build (`next build` + `next start`) unless stated otherwise.

## Stack

- Next.js 16.3.5 (App Router), React 19, TypeScript, Tailwind CSS 4, `motion` for animation
- All pages statically generated at build time (`generateStaticParams` for services, industries, blog categories and 728 articles); one dynamic route: `POST /api/contact`
- Content stored as typed TypeScript data (`src/lib/blog-data*.ts`, `services-data.ts`, `industries-data.ts`)
- Metadata via the Metadata API (`generateMetadata`), JSON-LD via a `StructuredData` component, sitemap via `app/sitemap.ts`, robots via `app/robots.ts`, `public/llms.txt`
- Images: articles use inline SVG diagrams (no raster images in content); Open Graph images are generated with `next/og`
- Fonts: `next/font/google` (Inter, Space Grotesk, Newsreader) with `display: swap`
- Analytics: Google Analytics 4 via `next/script` (`afterInteractive`)

## Findings and fixes

### Crawlability and indexability

| Check | Before | After |
|---|---|---|
| Canonical host | `https://zspace.in` while production 308-redirects to `https://www.zspace.in` (every canonical pointed at a redirect) | `site.url` = `https://www.zspace.in`; canonicals, sitemap, robots `Host`, Open Graph URLs, JSON-LD and llms.txt all use the www host |
| Next.js config | Stale compiled `next.config.js` committed beside `next.config.ts`; Next.js loads `.js` first, so `.ts` settings were silently ignored | `.js` removed; `next.config.ts` is the single config |
| Legacy blog path | `/blog` and `/blog/:slug` → 404 | 308 to `/blogs` and `/blogs/:slug` |
| Sitemap | 754 URLs, apex host, future `lastModified` on 97+ posts | 760 URLs (adds 6 category hubs), www host, `lastModified` = real `updated`/publication date |
| Robots | `Allow: /`, sitemap on apex host | Same rules, www sitemap URL |
| Status codes | — | 760/760 sitemap URLs return 200; 0 broken internal links |
| Trailing slash | `/about/` → 308 → `/about` (Next.js default) | Unchanged, consistent |
| noindex | none | none (privacy/terms explicitly index,follow) |

**Platform-level item not fixable in code:** `http://zspace.in` → `https://zspace.in/` → `https://www.zspace.in/` is a two-hop chain controlled by the hosting/domain configuration. Recommended: redirect `http://zspace.in` straight to `https://www.zspace.in` in the hosting dashboard, or switch the primary domain to the apex and change `site.url` back. Both canonical choices work; what matters is that code and hosting agree (they now do for www).

### Metadata

- Root `title.template` `%s — ZSpace Labs`; `pageTitle()` (src/lib/seo.ts) returns an absolute title when the suffixed title would exceed 70 characters.
- 59 articles received concise `seoTitle`s (previously up to 103 characters); index page titles shortened. Result: 0 titles over 70 characters.
- `metaDescription()` derives descriptions ≤160 characters from excerpts at sentence, dash or list boundaries (366 excerpts were longer than 160). Result: 0 descriptions over 160; 2 under 70 (/terms and one article).
- No duplicate titles or descriptions across 760 URLs.
- Open Graph `siteName` added on service, industry, article and category pages.

### Structured data

| Type | Where | Notes |
|---|---|---|
| Organization (`#organization`) | every page | name, alternateName "ZSpace", logo, email, ContactPoint, knowsAbout (services). `sameAs` removed: previous values pointed to an unrelated company's LinkedIn page and a non-existent X account |
| WebSite (`#website`) | every page | publisher → Organization; SearchAction for blog search |
| WebPage + FAQPage | home | FAQ text shared with the visible FAQ component (single source in `src/lib/home-faqs.ts`) |
| Service + FAQPage | 6 service pages | `@id`, url, provider → Organization, audience; FAQs match visible content |
| BlogPosting (was Article) | 728 articles | `@id`, datePublished/dateModified (corrected), image, articleSection, author/publisher → Organization, about → related Services |
| FAQPage | articles, industries | only where FAQs are visible |
| CollectionPage + ItemList | 6 category hubs | lists every article in the hub |
| BreadcrumbList | all inner pages | articles now Home › Blogs › Category › Article |
| AboutPage, ContactPage, Blog | about, contact, blogs | linked to Organization/WebSite by `@id` |

All 760 pages parse as valid JSON-LD (0 errors); no duplicate BreadcrumbList blocks. No Review, AggregateRating, Product, Offer or Person markup is used (none would be truthful). Validation was done by parsing every block in the crawl; running Google's Rich Results Test on a sample of live URLs after deployment is recommended.

### Performance

Measured on the production build (byte sizes of generated output, not Core Web Vitals):

| Page | Before | After |
|---|---|---|
| /blogs HTML | 8.35 MB | 520 KB |
| /blogs RSC payload | 8.04 MB | 469 KB |
| Typical article HTML | ~236 KB | ~236 KB |

Causes fixed: the client blog explorer received every article's full body (now a slim `BlogSummary`), rendered all ~727 cards at once (now 24 per page with "Load more"), and used an animation delay of `index × 0.05 s` (now capped). **Core Web Vitals were not measured** (no field data access and no lab run against production); see seo-performance-baseline.md.

Other observations (not changed, design-preserving): the homepage hero uses a scroll-linked intro animation; animated sections use `motion` with reveal-on-scroll, which renders content with opacity 0 until hydration. Content is present in server HTML, so it is indexable, but heavy reveal animation can affect perceived LCP; measure after deployment before changing.

### Mobile and accessibility

- No horizontal overflow at 360, 390 and 768 px on home, about, contact, all changed templates, and a random sample of 80 articles.
- Breadcrumbs now wrap on small screens (the added category level previously overflowed on long category names).
- One H1 per page on all 760 URLs; homepage H1 accessible name now reflects all rotating roles.
- Inline SVG diagrams carry text alternatives via alt text in data.

### Security and trust

- HTTPS enforced by hosting; no mixed content found in page content.
- Contact form: validated with Zod, honeypot, rate limit, server-side Gmail delivery (requires `EMAIL_FROM`, `EMAIL_TO`, `EMAIL_APP_PASSWORD` env vars in production; see .env.example). Not tested end-to-end with real credentials.
- **Privacy policy accuracy (owner action required):** the policy says the site "may use privacy-respecting analytics… No personally identifying advertising cookies are used", but the site loads Google Analytics 4, which sets cookies, and contact enquiries are emailed via Google. The policy should be reviewed (ideally by someone qualified) to disclose GA4, cookies, email processing and retention; consider a consent mechanism where required by your users' jurisdictions. The `/privacy` and `/terms` footer links are commented out in `Footer.tsx`; re-enable them once the policy is accurate.
- `npm audit` reports a critical advisory for `next` 16.3.5 and a high advisory in dev tooling (`brace-expansion`). Upgrading Next.js is recommended as a separate, tested change.

## Remaining technical work

1. Deploy: the live site still serves the pre-rebrand build with apex canonicals.
2. Fix the double redirect from `http://zspace.in` at the hosting level.
3. Update the privacy policy and restore legal links (above).
4. Upgrade Next.js for the security advisory.
5. After deployment: submit the sitemap in Google Search Console and Bing Webmaster Tools, request indexing for the six service pages and six category hubs, and run Rich Results Test and PageSpeed Insights on representative URLs.
