# ZSpace Labs: Founder-Focused Content Programme, Batch 5 (Topics 81–100)

Prepared 15 October 2026 (IST). **Status: audit and decisions only. Waiting for owner approval. No site files changed. Nothing deployed.**

## Baseline and limits

- **Repository:** 1,048 articles. That is 1,044 registered in `src/lib/blog-data.ts` plus 4 Batch 3 articles in `blog-data-founder-3-{growth,ops}.ts`, which were not yet registered when this audit ran.
- **Live site:** `https://www.zspace.in/sitemap.xml` (`zspace.in` 308-redirects to `www`) lists 1,036 `/blogs/` URLs and 6 service pages. None of the Founder Batch 1–3 pages are live, which is consistent with the uncommitted working tree.
- **A second session was editing Batch 3 files during this audit** (`blog-data.ts`, `mobile-3`, `mobile-5`, `shopify-cro`, `webdev-9` and `commerce-rewrites` were all modified between 09:24 and 09:26 IST). Several Batch 5 targets are Batch 3 targets too. Implementation must start only after Batch 3 lands, and must re-read each file before editing it.
- **Topics 61–80 (Batch 4) have no audit or files in the repository.** This batch compares against Batches 1–3 and the rest of the library. If Batch 4 exists elsewhere, re-check topics 81–100 against it.
- **No Search Console, GA4 or keyword-tool data** was available, so no search volumes, difficulty scores or forecasts are given. Search results were observed from the US only. Priorities are qualitative.
- **Method:** keyword and pattern scoring of each topic against slug, title, H2s and FAQs of all 1,048 articles (`q.py` in the session scratchpad), then a manual read of the H2s, FAQs and key sections of each overlapping page. This was followed by search-results research and official-source checks; see `research/research-notes.md`.

## Decisions

| # | Topic | Decision | URL that serves the intent | Priority |
|---|---|---|---|---|
| 81 | Integrating third-party APIs | **UPDATE** (substantial) | `/blogs/website-api-integration` | P2 |
| 82 | Staging vs production | **CREATE** | `/blogs/staging-vs-production-environments` | P1 |
| 83 | Reducing technical debt without a rebuild | **CREATE** (lowest-confidence create) | `/blogs/reduce-technical-debt-web-application` | P3 |
| 84 | Web app maintenance: what to monitor | **UPDATE** (moderate) | `/blogs/website-maintenance-guide` | P2 |
| 85 | Which app events to track | **UPDATE** (moderate) | `/blogs/mobile-app-analytics` | P3 |
| 86 | Mobile app accessibility testing | **CREATE** | `/blogs/mobile-app-accessibility-testing` | P1 |
| 87 | Mobile app testing strategy | **UPDATE** (substantial, retitle) | `/blogs/mobile-app-testing` | P1 |
| 88 | Push notification integration | **CREATE** + condense the existing build half | `/blogs/mobile-app-push-notification-integration` | P2 |
| 89 | Shopify ERP and inventory integration | **UPDATE** (moderate) | `/blogs/ecommerce-erp-integration` | P2 |
| 90 | Large Shopify catalogues | **CREATE** | `/blogs/manage-large-shopify-product-catalogue` | P1 |
| 91 | Shopify fulfilment automation | **CREATE** | `/blogs/shopify-order-fulfilment-automation` | P2 |
| 92 | Shopify migration testing | **REJECT** | `/blogs/ecommerce-migration-testing` (Batch 3, topic 52) | — |
| 93 | Reusable component library | **DEFER** | `/blogs/design-systems-for-teams-that-move-fast` (Batch 3, topic 56) | — |
| 94 | Responsive vs adaptive | **CREATE** | `/blogs/responsive-vs-adaptive-design` | P2 |
| 95 | User research on a limited budget | **UPDATE** (substantial) | `/blogs/user-research-methods` | P2 |
| 96 | Empty states | **CREATE** | `/blogs/empty-state-ux-design` | P2 |
| 97 | Lead qualification without extra fields | **REJECT** | `/blogs/improve-website-enquiry-form-conversions` + `/blogs/improve-website-lead-quality` | — |
| 98 | Heatmaps and session recordings, responsibly | **UPDATE** (moderate) | `/blogs/ecommerce-heatmaps` | P3 |
| 99 | Measuring lead quality | **REJECT** | `/blogs/improve-website-lead-quality` (slug retired in Batch 3) | — |
| 100 | Prioritising website improvements | **REJECT** | `/blogs/ecommerce-experiment-prioritization` (Batch 3, topic 59) | — |

**Totals:** 8 CREATE · 7 UPDATE · 1 DEFER · 4 REJECT · 0 MERGE.

Details, evidence and the boundary for each new page are in `03-batch-5-decisions.md`.

## Owner decisions needed

1. **Approve Batch 5** in full or in part. If the publishing-pause recommendation from the global audit still stands, the smallest useful set is the five P1 items: 82, 86, 87, 90 and 81.
2. **Topic 88:** create a separate implementation page and condense the existing page's six build sections into a summary with a link (recommended). The alternative is to deepen the existing page in place, which would take it to about 3,700 words.
3. **Topic 83:** create a new page (recommended, low confidence). The alternative is to add an "after the review" section to `software-architecture-review`.
4. **Topic 94:** the new comparison page means replacing the "responsive vs adaptive" FAQ answer on `responsive-ui-design` with a short answer and a link. That page is a Batch 3 target, so this edit must wait until Batch 3 lands.
5. **Sequencing:** confirm that Batch 3 is finished before Batch 5 edits `mobile-app-analytics`, `responsive-ui-design` and the push notifications page.
6. **Still open from earlier batches:** answers to global-audit Q1–Q5 (author bylines, consent, regional pages), committing Batches 1–3, and the status of Batch 4.

No ranking, AI-citation, traffic or lead outcome is guaranteed by any of this work.
