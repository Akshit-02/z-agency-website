# Structured data audit

Method: every `application/ld+json` block on all 1,165 production pages was extracted and parsed before the changes, and again on the local build after them. Required-property checks were run for BlogPosting. The Claude SEO schema hook (`validate-schema.py`) was installed for future edits.

## Results

| Check | Before | After |
|---|---|---|
| Invalid JSON-LD blocks | 0 | 0 |
| Pages with Organization + WebSite | 1,165 | 1,165 |
| BlogPosting missing headline / datePublished / dateModified / author / image / publisher | 0 | 0 |
| FAQPage answers that are also visible on the page | **1,247 / 9,229** | **9,229 / 9,229** |

## Inventory by page type

| Page type | Types emitted |
|---|---|
| All pages | `Organization` (`@id` …/#organization, logo ImageObject 180×180, email, ContactPoint sales, knowsAbout = 6 services, areaServed = 5 Countries, sameAs = Instagram + LinkedIn), `WebSite` (publisher → org, SearchAction) |
| Homepage | `WebPage`, `FAQPage` |
| Articles (1,130 matched; 3 with "category" in the slug were grouped separately but are the same) | `BlogPosting`, `BreadcrumbList`, `FAQPage`, `Service` (related service reference) |
| Services | `Service` + `BusinessAudience`, `BreadcrumbList`, `FAQPage` |
| Industries | `BreadcrumbList`, `FAQPage` |
| /blogs | `Blog` |
| Categories, /services | `CollectionPage`/`ItemList`, `BreadcrumbList` |
| About / Contact | `AboutPage` / `ContactPage` |

## Findings

| # | Severity | Finding | Action |
|---|---|---|---|
| 1 | High (fixed) | FAQPage markup described answers that weren't in the visible HTML, which goes against Google's structured-data guidelines | Answers now always rendered (see implementation log) |
| 2 | Info | FAQ rich results were retired for all sites on 7 May 2026, so the FAQPage markup has no SERP feature | Keep it (valid, consistent with visible content). Don't add more expecting rich results. |
| 3 | Info | `WebSite` SearchAction: Google retired the sitelinks search box in Nov 2024. The target `/blogs?q=` does work. | Leave |
| 4 | Medium (needs owner input) | `BlogPosting.author` is the Organization. No `Person` exists anywhere. | Add real author/reviewer Person entities with `sameAs` LinkedIn **only when real people are named** |
| 5 | Low | Industry pages have no `Service`/`WebPage` node describing the offer | Optional: add a `WebPage` with `about` → the related Service `@id`s |
| 6 | Investigate | GSC "Product snippets" appearance (20 impressions, pos 7) but no Product markup on the site | Check GSC → Enhancements → Product snippets for the URL |
| 7 | Correct as is | No `LocalBusiness`: no physical office is published | Do not add one unless a real eligible address exists |
| 8 | Correct as is | Organization `sameAs` limited to verified profiles (the code notes earlier wrong entries were removed) | Keep. Add Clutch/GoodFirms etc. only if real profiles exist. |

No fake reviews, ratings, `aggregateRating`, awards or credentials are present, and none were added.
