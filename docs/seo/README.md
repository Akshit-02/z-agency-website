# ZSpace Labs: international SEO, AEO and lead-generation programme

Started 17 October 2026. Covers India, the UAE, the UK, Australia and Singapore.
Readable summary: [Claude Doc](https://claude.ai/code/artifact/85b98ac1-bb03-468c-8027-693b5430f3d3). The files in this folder are the source of truth.

**Nothing here has been deployed.** All code and content changes are uncommitted in the working tree on `master`.

## Status at a glance

| Item | Status |
| --- | --- |
| URLs inventoried (repo, build, live sitemap reconciled) | 1,089 of 1,089 (1,057 articles) |
| Articles auto-checked and classified (A–J) | 1,057 of 1,057 |
| Pages changed and validated in batch 1 | 182 (162 articles, 20 other pages) |
| Articles still `audited` (no change yet) | 907 |
| Build, type check, lint, full local crawl | Pass (see `16-validation-report.md`) |
| Search Console, GA4, backlink, CRM data | **Not available.** Every performance column is blank by design |

## Deliverables

| # | Deliverable | File |
| --- | --- | --- |
| 1 | Full website audit report | `01-audit-report.md` |
| 2 | Complete URL inventory | `02-url-inventory.csv` |
| 3 | Content quality classification, every article | `03-blog-quality-classification.csv` |
| 4 | Technical SEO issue report | `04-technical-seo-issues.md` |
| 5 | Current service inventory | `05-service-inventory.md` |
| 6 | Five-market opportunity report | `06-market-opportunity.md` |
| 7 | Competitor and search-intent research | `07-competitors-and-search-intent.md` |
| 8 | Keyword-to-URL mapping | `08-keyword-url-map.csv` |
| 9 | Duplicate content and cannibalisation report | `09-cannibalisation-report.md` |
| 10 | Internal linking recommendations | `10-internal-linking.md` |
| 11 | Service-page improvement plan | `11-service-page-plan.md` |
| 12 | International landing-page recommendations and URL mapping | `12-international-landing-pages.md` |
| 13 | Blog refresh and consolidation plan | `13-blog-refresh-plan.md` |
| 14 | Structured data and international SEO audit | `14-structured-data-and-international.md` |
| 15 | Implemented change log | `15-change-log.md` |
| 16 | Validation and test report | `16-validation-report.md` |
| 17 | Outstanding human-review requirements | `17-human-review.md` |
| 18 | 90-day roadmap | `18-roadmap-90-days.md` |
| 19 | Baseline and KPI tracking specification | `19-kpi-specification.md` |
| — | Per-URL progress ledger | `progress-ledger.csv` |
| — | Articles stripped of links on 3 Oct (no links to be added) | `link-free-articles.txt` |
| — | GSC-driven batch (22 Oct): analysis, URL map, change log, linking plan, technical report, summary | `gsc-2026-10-22/` |

## Owner decisions recorded (17 October 2026)

- ZSpace has clients in India, the UAE, the UK and/or Australia, and Singapore.
- No case studies or named authors are available yet.
- Audit files live in `docs/seo/` in the repo; work stays uncommitted on `master`.
- The 3 October removal of external links stands: orphaned citation labels were removed, and no links were re-added to the 274 articles that were stripped that day.

## How to continue in batches

1. Each URL in `progress-ledger.csv` has a status: `pending`, `audited`, `approved`, `updated`, `validated` or `skipped` (with a reason in `note`).
2. Pick the next batch from `13-blog-refresh-plan.md` (wave order) and `03-blog-quality-classification.csv` (priority, then `all_classes`).
3. Edit articles with `tools/postedit.py` (exact-string edits inside one article, optional `updated` date) so each change is checked and local.
4. Re-run the checks: `node docs/seo/tools/dump-posts.mjs <workdir>/data.json` from the repo root, then `python3 -I docs/seo/tools/qa.py <workdir>`; build; crawl with `tools/crawl.py`.
5. Set the ledger status to `validated` only after the build and crawl pass, and add a line to `15-change-log.md`.

Rules that apply to every batch: no invented facts, clients, results, prices or reviews; primary sources for regulatory and platform claims; no external links added to the 274 link-free articles; never bump `updated` without a substantive edit; no new country- or city-swapped pages.

## Environment note

A `next start -p 3123` process started on 4 October was still running from this repository. When it receives requests it regenerates pages into `.next` with its old code (it turned 274 freshly built articles into "not found" pages during this audit). Stop it before building or testing locally. Live is unaffected.
