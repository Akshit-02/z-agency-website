# ZSpace Labs: Founder-Focused Content Programme, Batch 1

Prepared 14 October 2026 (research date for every source in this folder). Scope: the 20 Batch 1 topics and a 200-topic roadmap across web/web-app development, mobile apps, Shopify, UI/UX and CRO.

**Status: all phases are complete and validated in the working tree.** The owner approved implementation on 14 Oct 2026: 6 new articles plus 7 updates, and "worksheet, no prices" for cost topics, which also turned topic 2 into a new article. **7 articles were created and 7 updated. Nothing is committed or deployed.** See `05-implementation-and-qa.md`.

This folder builds on `../global-audit-2026-10/` (12–13 Oct 2026). That audit's Google-guidance research is dated and sourced, so it is reused rather than repeated. See `05-market-research.md` there. The main points:
- AI-feature optimisation "is still SEO", and there is no special markup.
- Creating many pages for query variations risks the scaled-content-abuse policy.
- FAQ rich results were retired in 2026.
- Bylines are recommended.

## Deliverables

| # (brief) | Deliverable | File | Status |
|---|---|---|---|
| 1 | Blog inventory and URL map (all 1,030 articles: H1, title tag, category, intent, geography, dates, words, sources, links, inlinks, services, canonical, indexability, nearest article, prior decision, Batch 1 overlap, performance evidence) | `01-blog-inventory.csv` | Done |
| 2 | Overlap and cannibalisation report | `02-overlap-and-cannibalisation.md`, `02-title-similarity-pairs.tsv` | Done |
| 3 | Research notes with source URLs and research date | `research/research-{webdev,mobile,shopify,uiux,cro}.md` | Done |
| 4 | 200-topic editorial roadmap | `04-editorial-roadmap-200.csv` | Done |
| 5, 6 | Batch 1 decision report; list of create/update/keep/defer | `03-batch-1-decisions.md` | Done |
| 7 | Final content for approved articles | `src/lib/blog-data-founder-{web,product,cro}.ts` and 7 updated articles (list in `05`) | Done |
| 8 | Metadata and internal-linking summary | `05-implementation-and-qa.md` §1–2 | Done |
| 9 | QA and validation results | `05-implementation-and-qa.md` §4 | Done |
| 10 | Outstanding issues and human-review items | This README | Done |
| 11 | Batch 2 recommendations | This README | Done |

## Key findings

1. **The library already answers most of the 20 questions.** It has 1,030 articles, and the live sitemap matches the repository exactly.
   - **CREATE (6):** topics 1, 3, 8, 13, 19 and 20.
   - **UPDATE (8 topics, 7 pages):** topics 4, 5, 7, 10, 11, 12, plus 14 and 17, which share one page.
   - **KEEP (5):** topics 6, 9, 15, 16 and 18.
   - **RESEARCH MORE (1):** topic 2, web-app cost, blocked on pricing. *Resolved on 14 Oct: created as a no-prices estimation worksheet.*
   - Six proposed slugs would have duplicated existing pages, including one that already exists (`native-vs-cross-platform-app-development`). Another (`shopify-theme-vs-custom-development`) exists but answers a different question.
2. **No duplicate text was found, but there are intent overlaps.** Body overlap between related articles is 0–6% shared 8-word sequences. The real risk is two URLs answering one question, notably the traffic/no-leads pair, which already has a MERGE proposal pending.
3. **The 200-topic roadmap contains 106 CREATE rows** (105 at planning, plus WEB-02 after the pricing decision). The others are 59 UPDATE, 29 KEEP, 4 MERGE and 2 RESEARCH MORE. Batch 1 rows are marked IMPLEMENTED.
   - CREATE concentrates in lead-generation CRO, B2B/SaaS, India-specific commerce (COD/RTO, gateways, GST, DPDP) and buyer-protection topics (code ownership, handover, contracts). These are areas where the ecommerce-heavy library is thin.
   - Twelve cross-cluster duplicates were merged during consolidation, each recorded in its row's `priority_rationale`.
   - All 13 buyer stages are covered (12–25 rows each).
4. **The CREATE rows are a backlog, not a publishing schedule.** The 13 Oct audit recommended pausing bulk publishing, because about 937 articles appeared in six weeks with no named author. That recommendation still stands. The roadmap assumes a slow cadence, with each article passing the checklist in `../global-audit-2026-10/04-content-audit.md` §6.

## Batch 1 implementation (approved 14 Oct 2026; done)

**A. Create 6 articles** (7 after the pricing decision added topic 2, `custom-web-application-development-cost`, as an estimation worksheet). Use new data file `src/lib/blog-data-founder-1.ts`, spread into `posts` in `blog-data.ts`, following the existing schema:

| Topic | Slug | Category | Service / CTA |
|---|---|---|---|
| 1 | `custom-website-vs-web-application` | Web Development | website-development / Discuss a web application idea |
| 3 | `saas-mvp-feature-prioritisation` | Web Development | website-development, ui-ux-design / Plan an MVP |
| 8 | `how-to-validate-mobile-app-idea` | Mobile Apps | mobile-app-development / Discuss an app project |
| 13 | `how-much-ux-design-before-development` | UI/UX | ui-ux-design / Plan an MVP |
| 19 | `improve-website-enquiry-form-conversions` | CRO | cro-audit / Discuss a CRO audit |
| 20 | `cro-strategy-low-traffic-websites` | CRO | cro-audit / Discuss a CRO audit |

**B. Substantially update 7 existing pages.** Keep the URLs and set `updated`:
- `custom-website-vs-website-builder`
- `pwa-vs-native-app`
- `mobile-app-development-cost`
- `shopify-redesign-vs-rebuild`
- `shopify-core-web-vitals-performance-guide`
- `shopify-business-systems-integration-guide`
- `website-gets-traffic-but-no-leads`

**C. Make minor linking edits only, with no date change.** Add reciprocal links from the existing articles named under "who should link to it" in `03`. Add a lead-gen note in `ecommerce-ab-testing`. Shorten the fidelity section in `wireframing-vs-prototyping` and link it to topic 13.

**Conventions to follow:**
- Answer-first opening, then "Key takeaways".
- Hypothetical examples are labelled as hypothetical.
- A "Sources" H2 with an access date.
- Section `cta` blocks (the button reads "Start a Project" and links to `/contact?src=/blogs/<slug>`).
- `relatedSlugs` curated.
- FAQs visible on the page. Their markup is inert for rich results.

No new dependencies, components or routes are required.

## Outstanding issues and items needing human review

**Owner decisions:**
1. ~~Approve Batch 1 implementation~~: approved and done on 14 Oct 2026.
2. ~~Topic 2 pricing~~: decided on 14 Oct 2026, "worksheet, no prices", applied to topics 2 and 7. Revisit if ZSpace later wants to publish its own ranges.
2a. **Review before deploying:** the 7 new articles and 4 changed H1s. See `05` §5.
3. **Authorship:** articles can only carry the Organization as author until real people agree to a byline (global audit Q4). The content model has no author field; adding one is a small change once there is a real person to credit.
4. **MERGE `why-is-my-website-not-converting` → `website-gets-traffic-but-no-leads`** (301), proposed 13 Oct and still open.
5. **`shopify-theme-vs-custom-development` title/slug mismatch:** recommendation is to fix anchors now and retitle only with Search Console evidence (see `03` §9).
6. **Publishing cadence:** confirm whether the 13 Oct "pause bulk publishing" recommendation is accepted. Batch 1 as proposed adds 6 pages.

**Facts to verify before they appear in any article** (all flagged in `research/`):
- Webflow export limits and plan prices.
- Framer export status.
- Apple's EU fee terms, re-fetched from the primary page.
- Shopify's 1 Oct 2026 script-tag creation cut-off.
- UAE Shopify Payments eligibility.
- Shopify's certified ERP connector list.
- UAE PDPL executive regulations.
- India DPDP Rules phase dates.
- UK DUAA/PECR commencement.
- The date GA4 renamed conversions to "key events".
- Whether Google Play organisation accounts are exempt from the closed-testing rule.
- Accessibility law specifics for the UK, Australia and UAE.
- The MoSCoW origin.

**Research limits:**
- Search was US-only, and no local SERPs were observed.
- Reddit was unreachable from every tool, so founder-question evidence relies on Hacker News, Indie Hackers (titles only), the Shopify Community and vendor forums.
- A manual Reddit and People-Also-Ask pass is recommended before drafting.
- There is no Search Console, GA4 or keyword data, so all priorities are qualitative.

**Word counts differ between sources.** `01-blog-inventory.csv` uses the 13 Oct audit's main-content counts, which include FAQs and CTAs. The counts quoted in `03` and the roadmap come from section text only and are lower. Use them as relative indicators.

## Recommended next steps for Batch 2

Wait until Batch 1 is live and Search Console has 60–90 days of data. Then pick from the roadmap's P1 rows, preferring topics that both fill a real gap and match a service a buyer would enquire about:

- **Buyer protection** (a strong fit for an agency without published case studies):
  - `fixed-price-vs-time-and-materials` (WEB-14)
  - `who-owns-the-code-software-development` (WEB-23, absorbing app accounts)
  - `shopify-store-ownership-handover` (SHP-19)
  - `figma-file-ownership-design-handover` (UX-15)
- **India-first commerce:**
  - `shopify-cod-rto-india` (SHP-25)
  - `shopify-payment-gateways-india` (SHP-26)
  - `dpdp-act-web-application-checklist` (WEB-32, covering websites, web apps and apps; already backlog P4-3)
- **Lead-gen measurement:**
  - `ga4-key-events-lead-generation` (CRO-16)
  - `measure-website-lead-quality` (CRO-15)
  - `good-conversion-rate-lead-generation-website` (CRO-25)
  - `should-you-show-prices-on-your-website` (CRO-29)
- **Time-sensitive platform changes:**
  - `shopify-scripts-to-functions-migration` (SHP-11)
  - `google-play-closed-testing-requirement` (MOB-16)
  - `in-app-purchase-vs-external-payments` (MOB-13, which needs a review date because litigation is ongoing)
- **High-value updates to thin pages:**
  - `how-to-choose-a-cro-agency` (348 words)
  - `how-to-choose-a-ui-ux-design-agency`
  - `how-to-choose-a-mobile-app-development-company`
  - These depend on the global audit's F2 listicle decision.

Watch-item: `mobile-app-mvp-features` (MOB-18) sits close to topic 3. Decide after topic 3 is published whether it stands alone or becomes a section.

No ranking, AI-citation or lead-volume outcome is guaranteed by any of this work.
