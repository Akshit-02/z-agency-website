# ZSpace Labs: Founder-Focused Content Programme, Batch 3 (Topics 41–60)

Prepared 15 October 2026 (IST). Research ran on 14–15 October 2026; the first run was interrupted by a usage limit and re-run on 15 Oct.

**Status: complete and validated in the working tree.** The owner approved everything on 15 Oct 2026, with topic 56 done as an update. Delivered: 6 new articles, 10 substantial updates, 4 minor updates, corrections on 9 pages, and 17 backlinks. See `05-implementation-and-qa.md`. **Nothing is committed or deployed.**

**Baseline.** Batches 1 and 2 are still uncommitted in the working tree (47 changed or new paths at the start of Batch 3) and were treated as existing content. The live sitemap still lists 1,030 articles, so neither batch is deployed.

## Deliverables

| # (brief) | Deliverable | File | Status |
|---|---|---|---|
| 1 | Blog inventory and URL map (1,044 rows, `batch3_topic_overlap` column) | `01-blog-inventory.csv` | Done |
| 2 | Dated research notes and source URLs | `research/research-{webdev,mobile,shopify,uiux,cro}.md` | Done |
| 3 | Topic-by-topic decisions | `03-batch-3-decisions.md` | Done |
| 4 | Content-gap and cannibalisation report | `02-overlap-and-cannibalisation.md` | Done |
| 5 | Master 200-topic roadmap | `../founder-batch-1/04-editorial-roadmap-200.csv` (single master) | Done |
| 6 | Created / updated / merged / kept / deferred list | `03` summary + `05` §1 | Done |
| 7 | Final content | `src/lib/blog-data-founder-3-{build,growth,ops}.ts` + edited articles (`05` §1) | Done |
| 8 | Internal-linking and CTA changes | `05` §1 | Done |
| 9 | Build and QA results | `05` §3 | Done |
| 10, 11 | Outstanding issues; Batch 4 priorities | this README | Done |

## Decisions in brief

**CREATE (6):**
- 42 fixed price vs time and materials
- 43 scope creep
- 47 app retention
- 49 Shopify multi-location inventory
- 55 prototype testing
- 58 lead quality

**Substantial UPDATE (10):**
- 41 agency selection
- 44 outgrown platform (`website-replatforming`)
- 45 app maintenance
- 46 app metrics
- 48 crashes and slowness (retitles `mobile-app-crash-reporting`)
- 53 design handoff
- 54 responsive planning
- 56 inconsistent UI (`design-systems-for-teams-that-move-fast`)
- 59 experiment prioritisation
- 60 mobile ecommerce diagnosis (`shopify-mobile-cro-audit`)

**Minor update or KEEP (4):**
- 50 repeat purchases: a "Buy again" section only
- 51 returns and exchanges: Shopify corrections
- 52 migration testing: post-launch plan. The proposed slug **already exists**.
- 57 landing-page exits: one FAQ and one link

**Factual corrections (9 pages):**
- Shopify "product views" funnel error in 3 more articles
- Play visibility wording
- Returns labels and store credit
- Exchange stock reservation
- Subscription gateway list
- A duplicate ANR FAQ

## Implementation plan (approved and done 15 Oct 2026)

1. **New articles:** six, in new `src/lib/blog-data-founder-3-*.ts` files registered in `blog-data.ts`. Conventions are the same as Batches 1–2:
   - answer first
   - one original asset each
   - Sources section with access date
   - hypothetical examples labelled
   - no prices, no em dashes, no bold-wrapped links
2. **Substantial updates:** ten pages edited in place. URL and `date` are kept, with `updated: "2026-10-15"`.
3. **Minor updates and corrections:** no date change.
4. **Links:** reciprocal links from related existing pages, and links between the new and updated pages.
5. **QA:**
   - tsc, lint and build
   - full sitemap crawl
   - 390 px mobile overflow check
   - raw-markup scan and claims scan
   - CTA targets

## Outstanding issues and human review

**Owner decisions:**
1. ~~Approve Batch 3~~: approved and implemented.
2. ~~Topic 56~~: done as an update to the existing page.
2a. **Review before deploying:** see `05` §4. This covers the new articles, 7 changed H1s (one retitle to confirm) and the time-sensitive facts.
2b. **Sitewide `readingTime` inconsistency:** 565 articles are affected. Decide whether to compute it automatically (`05` §3).
3. **Still open from earlier batches:**
   - review of the Batch 1–2 articles
   - author bylines
   - the `why-is-my-website-not-converting` merge
   - the `best-*` listicle decision, which topic 41 depends on
   - the bulk-publishing pause
   - committing all three batches

**Facts to verify before they appear in an article** (all flagged in `research/`):
- PMI's definition of scope creep and its 2018 figure (pmi.org was blocked)
- PXL weights (CXL returned 403)
- Australian DTA contract limits
- Contracting for Agile paragraph numbers
- ASVS 5.0 launch date
- Magento 1 and Joomla end-of-life dates
- Apple 44pt and Material 48dp touch targets
- Android startup thresholds
- Flutter's support policy
- React Native 0.88 status
- Shopify's ranked-location routing rule and Flow template names
- ACCC returns guidance
- The Figma typed-input limitation (community source)

**Research limits:**
- Reddit and People Also Ask were unreachable, and search results were US-only.
- Demand evidence is weakest for 41, 44 and 56.
- No search-volume claims are made.

**Roadmap housekeeping:**
- Seven low-value KEEP rows were reused for Batch 3 topics; each change is recorded in its row.
- Two slugs were retired (`clickable-prototype-before-building`, `measure-website-lead-quality`) and the references to them repointed.
- The tracker still has 200 rows and no duplicate URLs: 112 CREATE, 65 UPDATE, 18 KEEP, 4 MERGE, 1 RESEARCH MORE.

## Recommended priorities for Batch 4

Once Batches 1–3 are live and Search Console has 60–90 days of data, take the roadmap's P1 rows that complete existing clusters:

- **Working with an agency safely.** With Batch 3's 41–43 and Batch 2's handover update, this cluster needs:
  - WEB-23 code and app ownership
  - SHP-19 Shopify store ownership
  - UX-15 Figma file ownership
  - WEB-24 technical co-founder vs agency vs in-house
- **India-first commerce:**
  - SHP-25 COD/RTO
  - SHP-26 payment gateways
  - WEB-32 DPDP checklist
  - WEB-25 SaaS subscription billing in India
  - UX-27 dark patterns (linked from Batch 2's pricing page)
- **Lead-gen measurement cluster:**
  - CRO-16 GA4 key events
  - CRO-17 offline conversions
  - CRO-18 consent impact

  These sit under the Batch 2 hub and the Batch 3 lead-quality page.
- **Time-sensitive platform pages:**
  - SHP-11 Scripts → Functions
  - MOB-16 Play closed testing
  - MOB-13 in-app purchases vs external payments
  - SHP-12 checkout upgrade broke tracking

No ranking, AI-citation or lead outcome is guaranteed.
