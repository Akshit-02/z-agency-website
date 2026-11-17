# Schema validation report

Validation method: every `<script type="application/ld+json">` block in the prerendered HTML for the homepage and six service pages was parsed as JSON; all parsed without errors. Not yet run through Google's Rich Results Test or the Schema.org validator (needs the deployed URL).

## Current structured data

| Page | Types | Change in this pass |
|---|---|---|
| All pages (layout) | Organization (single, `@id` …/#organization), WebSite | `knowsAbout` now lists "Shopify Development" and "CRO Audit & Optimisation" via the service rename. No duplicate Organization added. |
| / | WebPage, FAQPage | WebPage `name` = new title. FAQPage gains the 2 new visible FAQs. |
| /services/* | Service, FAQPage, BreadcrumbList | `Service.name`/`serviceType` follow the renamed services. FAQPage gains the new visible "how to choose" FAQ (and the CRO audit-vs-ongoing FAQ). `description` = new meta description. |

## Rules checked

- **No AggregateRating, Review, award or rating markup** exists or was added.
- **Schema matches visible content:** FAQ schema is generated from the same arrays the FAQ sections render (`homeFaqs`, `service.faq`), so marked-up questions are always visible.
- **No inline link tokens in FAQ answers.** The new answers are plain text, so `[[...]]` markup does not leak into schema.
- **"Best" is not marked up as a claim.** It appears in titles and H1s only; `Service.description` uses the meta description, which for most pages describes the service without "best".

## Note on FAQPage

Google has limited FAQ rich results to authoritative government and health sites since 2023, so these FAQPage blocks are unlikely to produce rich results for a commercial site. They are still valid, match the visible content and are kept as they were before this pass.
