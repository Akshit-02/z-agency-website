# 14. Structured data and international SEO audit

Checked on all 1,089 live URLs and again on the local build after batch 1. 0 invalid JSON-LD blocks before and after.

## Structured data in use

| Type | Pages | Matches visible content? | Notes |
| --- | --- | --- | --- |
| Organization | All (sitewide `@id`) | Yes | `areaServed` now lists the five confirmed countries (was India + "Worldwide"). No `sameAs` until verified profiles exist; no address, because none is published |
| WebSite | All | Yes | — |
| BreadcrumbList | 1,072 | Yes | Matches visible breadcrumbs |
| BlogPosting | 1,046 | Mostly | `author` is the Organization (no named authors). `datePublished` predates the site on 93 articles (owner to confirm). `dateModified` set only on substantive edits |
| Service | 6 | Yes | Valid schema.org; not a Google rich-result type, so expect no display change |
| FAQPage | 1,065 | Yes (FAQs are visible) | Google retired FAQ rich results in 2026; harmless, no action |
| CollectionPage / ItemList / AboutPage / ContactPage | Hubs | Yes | — |

## Recommended

| Priority | Change | Condition |
| --- | --- | --- |
| P1 | `Person` author markup and author pages | Only for real, named people who review the articles |
| P2 | `sameAs` on Organization | Only verified official profiles (LinkedIn, Clutch) |
| — | Review, AggregateRating, Offer/price, LocalBusiness | **Not recommended**: no real reviews, prices or premises are published |

## International SEO

| Check | Finding |
| --- | --- |
| Domain | `.in` is a country-code domain Google treats as India-targeted; it is not on Google's list of generic ccTLDs |
| hreflang | None, correctly: there are no language or regional alternates. Add only for real alternates, with reciprocal and self-referencing annotations |
| Canonicals | Self-referencing; no regional pages canonicalised to one URL |
| Sitemap | No noncanonical, redirected or noindex URLs included |
| Geo redirects | None (correct; Google advises against IP-based redirects) |
| Language | `inLanguage: en`; spelling is mixed British and American across articles. Standardise on British English for UK, AU, SG, IN and UAE readers when articles are refreshed |
| Market signals added in batch 1 | Service pages, About, `llms.txt` and Organization schema now name the five markets consistently |
