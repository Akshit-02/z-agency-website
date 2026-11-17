# Implementation summary

Date: 17 November 2026. Not committed or deployed.

## Files changed

| File | Change |
|---|---|
| `src/app/page.tsx` | Homepage title, meta description, WebPage schema name |
| `src/components/home/Hero.tsx` | Keyword line inside the H1; updated aria-label; hero copy leads with Shopify |
| `src/components/home/WhatWeBuild.tsx` | Intro sentence names all six services |
| `src/lib/home-faqs.ts` | 2 new FAQs (Shopify-only? / outside India?) |
| `src/lib/services-data.ts` | All 6 services: title, H1 keyword line, opening paragraph, new FAQ; meta descriptions for 5 (AI kept); Shopify and CRO service names; Shopify headline; CRO audit-vs-ongoing FAQ |
| `src/lib/blog-data-india.ts` | Listicle template anchor to service pages ("… in India" on India-wide lists); 3 varied anchors in how-to-choose guides |
| `reports/india-seo-optimisation/*` | These 12 reports |

## Success criteria

| # | Criterion | Status |
|---|---|---|
| 1–3 | Homepage title, description, H1 carry Shopify positioning | Done |
| 4–8 | Website, mobile, Shopify, CRO, UI/UX pages: India-focused title, description, H1 | Done |
| 9 | Other existing service pages reviewed | Done (AI automation is the only other one) |
| 10 | Distinct keyword per page | Done (see keyword-mapping.csv, cannibalisation report) |
| 11 | Content improved, not only metadata | Done (opening paragraphs, FAQs, naming, CRO scope); see content-improvements.md |
| 12 | Internal links support the right pages | Done; links were already dense, so changes were targeted anchors (9 implemented, 4 recommended) |
| 13 | URLs and functionality intact | Done; no URL, form or route changes |
| 14 | Production build and tests pass | Build passes; tsc clean; ESLint 0 errors (5 pre-existing unused-import warnings). The project has no test suite. |
| 15 | Reports generated | Done |

## Not done, and why

- **Keyword volumes / live SERP checks:** no keyword tool or SERP data connected in this session; nothing was estimated or invented.
- **New service pages** (custom software, SaaS, enterprise, API integration, AI development): not created, per the brief, because no existing page serves them. A custom software page remains an open owner decision from the 2027 audit.
- **Case studies / portfolio on homepage:** none exist in the codebase; needs real projects from the owner.
- **Homepage process section:** exists but is commented out; re-enabling is an owner decision.
- **City pages:** none created (no local-office justification).

## Recommendations

1. Deploy, then request indexing for `/` and the six service URLs in Search Console.
2. Re-export GSC after 6–8 weeks **with the Page filter applied per service URL** so query-to-page attribution is measurable (the current export can't show it).
3. Add 2–3 real case studies (Shopify first). That is the biggest remaining trust and relevance gap for "best X company" searches.
4. Apply the 4 recommended anchor changes in `internal-linking-report.csv`.
5. Watch the homepage vs Shopify page overlap described in the cannibalisation report.
