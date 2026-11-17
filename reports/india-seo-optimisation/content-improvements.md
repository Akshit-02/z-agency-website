# Content improvements by service page

All service content lives in `src/lib/services-data.ts`. The pages already had full sections for definition, problems, audience, honest boundaries, use cases, process, deliverables, technology, India context, international markets, FAQs and guides, so this pass focused on what was actually weak: the opening paragraph, the H1 keyword, service naming and buyer-question coverage. No existing content was removed.

## Changes applied to every service page

1. **Opening paragraph (hero copy) rewritten.** It now says what the service is, who it is for and that ZSpace Labs is India-based, using the primary keyword once in plain language. The original line ("Your website is the one property you fully control…") is kept as the second sentence on each page so the brand voice stays.
2. **H1 keyword line.** The eyebrow, which is rendered inside the H1, now reads "Best … in India". The large serif headline is unchanged except on Shopify.
3. **New FAQ answering the buyer's "best" question honestly**: "How do I choose a … company in India?" Each answer is specific to the service (e.g. COD/UPI/GST for Shopify, test sizing for CRO, process-first for AI). They are written as practical criteria, not as a claim that ZSpace is the best, which also keeps the FAQPage schema factual.

## Per page

| Page | Specific changes |
|---|---|
| Website development | Opening names startups, growing businesses and companies replacing an older site; mentions web applications. FAQ: how to choose a website development company in India. |
| Mobile app development | Opening names iOS, Android and cross-platform, startups and growing businesses, scope to store launch. FAQ includes testing on the mid-range Android phones many Indian users carry (a claim already made on the page). |
| Shopify development | Service renamed **"Shopify Store Setup & Optimization" → "Shopify Development"** (matches search language; flows into footer, breadcrumbs, `Service.serviceType`, `Organization.knowsAbout`). Headline changed to "Shopify stores built for growing ecommerce brands." Opening mentions Shopify Plus (supported per the existing FAQ) and D2C/retail brands. FAQ on choosing a Shopify partner in India. |
| CRO | Service renamed **"CRO Audit" → "CRO Audit & Optimisation"**. Opening says who it is for and that implementation and testing are optional follow-ons. New FAQ **"What is the difference between a CRO audit and ongoing CRO?"** separates the fixed 1–2 week audit from ongoing implementation and testing, as the brief required. FAQ on choosing a CRO agency. |
| UI/UX design | Opening names websites, mobile apps, SaaS products and online stores (the SaaS and ecommerce UI/UX variants in the brief). FAQ on what to look for in a UI/UX agency in India. |
| AI automation | Opening names workflow automations, AI agents and integrations for sales, support and operations. Meta description deliberately **unchanged**: this is the only service page with search impressions (289, mostly "ai automation services/agency" queries), and the existing description already matches them. FAQ on choosing an AI automation agency. |

## Writing rules followed

- No invented statistics, clients, testimonials, awards or ratings.
- "Best" appears only in titles and the H1 keyword line, as requested, not repeated through body copy.
- No new em dashes in body copy; Indian English spelling (optimise, optimisation).
- Every new FAQ is different per page, so there is no duplicated block across services.
