# Priority action plan

Scoring: SEO impact (S), business impact (B), confidence (C), effort (E: L/M/H), risk (R), each 1–5 except effort. ✅ = done in this session (uncommitted, not deployed).

## P0: Critical

There are no indexation, canonical, sitemap, robots, redirect or broken-form failures. The crawl foundation is sound (see the technical report).

| # | Issue | S | B | C | E | R | Status / dependency |
|---|---|---|---|---|---|---|---|
| 0.1 | FAQPage markup without visible answers (1,152 pages; cost and timeline answers hidden) | 4 | 4 | 5 | L | 1 | ✅ IMPL-1 |
| 0.2 | Deploy and verify this change set (preview → click-through at phone width → production) | — | — | — | L | 2 | **Owner**. Unblocks measuring everything below. |

## P1: High

| # | Issue | S | B | C | E | R | Status / dependency |
|---|---|---|---|---|---|---|---|
| 1.1 | Social and OG tags generic on 32 pages, og:image missing on 6 | 2 | 3 | 5 | L | 1 | ✅ IMPL-2 |
| 1.2 | Homepage H1 "your website builder" (wrong intent); no markets named; no services or process section | 3 | 4 | 4 | L | 2 | Owner copy decision → then a 1-file change in `Hero.tsx` |
| 1.3 | `/services/ai-automation` expansion (keyword H1, named service lines, cost factors, process) | 4 | 5 | 4 | M | 1 | Owner confirms service lines and tool names |
| 1.4 | Cost-factor and process sections on all 6 services (from existing FAQ copy) | 3 | 4 | 4 | M | 1 | Shared component. No new facts needed. |
| 1.5 | Pause mass publishing; refocus on about 50 commercially mapped articles | 4 | 4 | 4 | L | 1 | Owner/editorial decision |
| 1.6 | Real authors or reviewers + Person schema + visible dates on articles | 4 | 3 | 4 | M | 2 | Owner supplies people. Template change after that. |
| 1.7 | Verify 3 flagged facts (RBA surcharge, OAIC 1,205, DMN 1.6) and link sources on the 29 P1 articles | 3 | 2 | 4 | M | 1 | Editorial |
| 1.8 | Decide India-only vs international framing of homepage and services titles | 3 | 4 | 3 | L | 3 | Owner (India is the largest click market) |
| 1.9 | Configure the Google API (GSC, PSI/CrUX, GA4) for Claude SEO | 3 | 3 | 5 | L | 1 | Owner creates credentials locally (see installation report) |

## P2: Medium

| # | Issue | S | B | C | E | R | Status |
|---|---|---|---|---|---|---|---|
| 2.1 | llms.txt format fail, 32 articles missing | 1 | 1 | 5 | L | 1 | ✅ IMPL-4 |
| 2.2 | Industry titles not stating the offer | 2 | 2 | 4 | L | 1 | ✅ IMPL-3 |
| 2.3 | Market regulation notes wording | 1 | 2 | 4 | L | 1 | ✅ IMPL-5 |
| 2.4 | Australia market hub (then UK/IE, UAE/GCC, US engagement page) | 3 | 4 | 3 | M | 2 | Owner approval + local evidence (international report §3–4) |
| 2.5 | Website-development / Shopify sections for portals, SaaS sites, B2B, custom apps | 3 | 4 | 3 | M | 2 | Owner confirms these are offered |
| 2.6 | Restructure 11 self-ranked "best agencies" lists; merge or noindex 5 city variants | 2 | 2 | 4 | M | 2 | Owner decision |
| 2.7 | Industry pages: expand about 300 words of generic copy; verify the 23 "also active in" sectors | 2 | 3 | 4 | M | 1 | Editorial + owner |
| 2.8 | Performance: `/blogs` 1 MB HTML + 0.9 MB RSC, `motion` + BlogScene on every page, LCP render delay about 3–4.7 s (lab) | 3 | 2 | 4 | H | 2 | Engineering. Measure field data first (1.9). |
| 2.9 | 35 proposed contextual links to weakly linked articles; 13 articles with the primary service linked only from the template | 1 | 1 | 3 | L | 1 | `internal-linking-report.csv` (proposed) |
| 2.10 | 8 near-duplicate pairs: check query-level overlap before merging | 2 | 1 | 3 | L | 2 | Needs GSC page+query data (1.9) |
| 2.11 | Investigate the "Product snippets" GSC appearance | 1 | 1 | 3 | L | 1 | GSC UI |

## P3: Low

| # | Issue | Status |
|---|---|---|
| 3.1 | Consolidation review of 210 zero-impression articles published before 1 Oct 2026 | Feb–Mar 2027, with 6 months of data |
| 3.2 | Titles 61–70 characters (heuristic) | Only when rewriting a page for other reasons |
| 3.3 | Generate llms.txt from data; optional llms-full.txt | Engineering |
| 3.4 | HSTS includeSubDomains; CSP with nonces; consent-gate Clarity | Engineering and legal |
| 3.5 | Remove the non-standard `Host:` robots line and the unused `keywords` meta | Cosmetic |
| 3.6 | Contact form budget bands in INR/AED | Owner |
| 3.7 | 9 lint warnings (unused imports) | Housekeeping |

Every recommendation has a falsifiable check: the before/after metrics and the "success indicators" in `before-after-results.md`. If service-page impressions and positions don't move within 8–12 weeks of 1.3–1.4, revisit intent targeting before adding more content.
