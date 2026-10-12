# Blogs 181–230 (Australia): Implementation and QA Report

Implemented 2026-10-10. The decision rationale is in [`australia-batch-181-230-audit.md`](./australia-batch-181-230-audit.md).

No Search Console, analytics or keyword data was available. Every keyword is a hypothesis, and no volumes or rankings are quoted.

## 1. Summary

| | Count |
|---|---|
| Topics reviewed | 50 |
| New pages | 20 (13 Australian, 7 generic in Australian English), covering 25 topics |
| Updated existing pages | 14, covering 15 topics |
| Covered by existing pages, no change | 8 (183, 185, 188, 194, 205, 213, 225, 226) |
| Deferred | 2 (220 software documentation, 227 website personalisation) |
| Corrected existing pages (payments fact) | 7, plus the new hospitality page |
| Merged / redirected / deleted URLs | 0 |
| Site total | 950 posts. No duplicate slugs, titles, H1s or meta descriptions |

## 2. Factual correction found during research: card surcharging

The RBA's Conclusions Paper FAQs state that American Express and UnionPay also removed surcharging from 1 October 2026, and PayPal from 5 October 2026. These firms acted by their own decision rather than under RBA regulation. ([RBA FAQs](https://www.rba.gov.au/payments-and-infrastructure/review-of-retail-payments-regulation/2026-03/conclusions-paper/faqs/), fetched 2026-10-10.)

Seven existing Australian pages from batches 101–180 still said Amex was "left for further review" or "not covered". All 14 such statements were corrected, and `updated` on those pages is set to 2026-10-10:
- shopify-development-australia
- ecommerce-conversion-optimization-australia
- booking-system-development-australia
- ai-ecommerce-australia
- saas-development-australia
- subscription-ecommerce-australia
- payment-gateway-integration-australia

The new hospitality page uses the corrected wording. Buy now pay later and other methods remain described as under review.

## 3. New URLs

| Topic(s) | URL | Category |
|---|---|---|
| 186 | /blogs/private-ai-development-australia | AI & Automation |
| 187 | /blogs/multilingual-ai-development-australia | AI & Automation |
| 191 + 195 | /blogs/ecommerce-returns-australia | Shopify & Ecommerce |
| 201 + 202 | /blogs/hospitality-software-development-australia | Web Development |
| 204 | /blogs/manufacturing-software-integration | Web Development |
| 206 | /blogs/membership-management-software-australia | Web Development |
| 207 | /blogs/nonprofit-software-development-australia | Web Development |
| 208 | /blogs/recruitment-software-development-australia | Web Development |
| 210 | /blogs/franchise-management-software-australia | Web Development |
| 211 | /blogs/multi-tenant-saas-architecture | Web Development |
| 212 | /blogs/feature-flag-implementation | Web Development |
| 214 + 215 | /blogs/software-architecture-review | Web Development |
| 216 | /blogs/database-performance-optimization | Web Development |
| 217 | /blogs/automated-regression-testing | Web Development |
| 218 | /blogs/software-team-augmentation-australia | Web Development |
| 219 | /blogs/open-source-software-audit | Web Development |
| 221 + 222 | /blogs/privacy-by-design-software-australia | Web Development |
| 224 + 228 | /blogs/digital-forms-development-australia | UI/UX |
| 229 | /blogs/business-continuity-digital-products-australia | Web Development |
| 230 | /blogs/api-integration-reliability | Web Development |

**Page format:**
- Visible length is about 1,050–1,400 words per page, averaging about 1,070 before related-guides sections were added.
- Each page has 5–6 FAQs.
- All meta descriptions are ≤160 characters.

These pages are deliberately concise and link into existing depth. Several of them, especially the industry pages (206–210), are the thinnest in the Australian cluster. Expand them if Search Console shows impressions without clicks.

**Capability honesty:**
- 218 gives no ZSpace staffing terms.
- 219 gives no licence legal opinions.
- 229 makes no uptime promises.
- 207 gives no tax or DGR advice.
- 210 says software supports the franchisor's obligations but does not discharge them.

## 4. Updated URLs

| Topic | URL | Added |
|---|---|---|
| 181 | retrieval-augmented-generation | Australian section (data location, OAIC, APP 8, permissions, ACL), FAQ, trimmed meta description |
| 182 | voice-ai-agent-development | Australian section (DNCR calling hours, state call-recording laws, disclosure, Spam Act), FAQ |
| 184 | ai-poc-vs-pilot-vs-production | PoC design: hypothesis, test cases, acceptance criteria, failure modes; FAQ |
| 189 | ai-automation-roi | Australian measurement notes (AUD, GST, review and maintenance costs) |
| 190 | human-in-the-loop-ai | Where autonomy is inappropriate; Australian ADM transparency (10 Dec 2026); FAQ |
| 192 | ecommerce-loyalty-program-development | Australian section (ACCC 2019 loyalty report context, privacy, Spam Act, UCT, build vs buy) |
| 193 + 196 | retail-ecommerce-integration | Australian omnichannel section (system of record, GST, surcharges, click and collect, reconciliation), FAQ |
| 197 | ecommerce-personalization | Australian privacy section (OAIC pixels, APP 7, no guaranteed uplift) |
| 198 | marketplace-seller-dashboard | Australian seller data (ABN, GST, SERR, payouts, returns) |
| 199 | ecommerce-mobile-app-vs-mobile-website | Australian app costs, maintenance and adoption |
| 200 | ecommerce-analytics | Australian revenue definitions and privacy notes |
| 203 | booking-system-development-australia | Tourism and experience bookings (capacity, cancellations, ATDW, channel managers) |
| 209 | customer-portal-development-australia | Professional services portal section, FAQ |
| 223 | customer-data-integration-australia | Consent management integration section, FAQ |

**Spelling:** generic owner pages keep their existing US spelling. Australian pages use Australian English.

## 5. Internal links

- **New pages:** 6–13 contextual links each. Thin pages got a "Related guides" section linking only to verified URLs.
- **Back-links:** one sentence was added to the conclusion of 14 existing pages:
  - llm-self-hosting
  - ecommerce-returns-management
  - ai-agents-in-travel-and-hospitality
  - ai-agents-in-manufacturing
  - ai-recruitment-automation
  - saas-development-australia
  - ecommerce-technical-debt
  - ai-software-testing
  - website-development-company-vs-freelancer
  - ai-supply-chain-security
  - workflow-digitization-australia
  - ecommerce-disaster-recovery
  - api-integration-australia
  - customer-portal-development-australia
- **`public/llms.txt`:** 12 Australian entries were added, and 8 generic guides were added to the section intro.

## 6. Files

**New:**
- `src/lib/blog-data-au-ai-engineering.ts`
- `src/lib/blog-data-au-retail-hospitality.ts`
- `src/lib/blog-data-au-sector-platforms.ts`
- `src/lib/blog-data-au-saas-engineering.ts`
- `src/lib/blog-data-au-delivery-governance.ts`
- the audit document and this report

**Modified:**
- `src/lib/blog-data.ts` (registration)
- 14 owner pages across these files:
  - `ai-core-*`, `ai-apps-10`, `uae-ai-economics` (generic ROI article)
  - `commerce-4/5/33/69/76/90`
  - `au-portals`, `au-data-payments`
- Surcharge corrections in:
  - `au-commerce`, `au-commerce-2`, `au-portals`, `au-platforms`
  - `au-product`, `au-data-payments`, `au-retail-hospitality`
- Back-link files
- `public/llms.txt`

## 7. QA actually run

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | Clean |
| `npx eslint` on changed and new files | Clean |
| Internal links across 950 posts | 0 broken |
| Duplicate titles, H1s and meta descriptions | None |
| Australian-spelling scan of new Australian files | Clean. Only "ANALYZE", a SQL keyword, was flagged |
| Duplicate section headings | None |
| `npm run build` | Succeeded; 2,908 static pages |
| Built HTML for all 20 new pages | Each has one H1, the correct canonical, `index, follow`, and a sitemap entry |
| Sitemap lastmod on corrected and updated pages | 2026-10-10 |
| Corrected surcharge wording in built HTML | Present (UnionPay mentioned on shopify-development-australia) |
| External URLs (spot checks) | Returned 200: AWS, Google Cloud, SBS, OAIC, APRA PDF, Stripe, martinfowler.com, PostgreSQL, SPDX, OSV, OpenFeature, C4, data.gov.au, WA Consumer Protection, Mondaq. Blocked or timed out: ACCC, AustLII, ACNC, cyber.gov.au and the MySQL docs. One dead law-firm link (Sprintlaw, 404) was replaced |

**Not performed:**
- Rich Results Test
- Lighthouse
- screen-reader and real-device testing
- live deployment checks
- human editorial review

## 8. Verified vs secondary

**Verified on primary pages:**
- RBA FAQ on Amex, UnionPay and PayPal surcharging
- OAIC employee records exemption and PIA guide
- AWS Bedrock cross-Region inference blog
- Google Vertex AI data residency page
- APRA CPS 230 PDF
- Stripe idempotency documentation
- PostgreSQL EXPLAIN documentation
- martinfowler.com articles

**Secondary or search summaries:**
- ACCC consumer guarantees and restaurant surcharge rules
- Franchising Code dates
- Fair Work responsible franchisor provisions
- ACNC and Victorian association rules
- Azure model availability
- 2021 Census language figures (as reported by SBS)
- ATDW
- ASD SBOM guidance
- ACCC 2019 loyalty schemes report (cited from general knowledge, so hedged)

## 9. Remaining manual steps

1. **Legal review** before promotion:
   - 191+195 returns (ACL)
   - 201+202 hospitality (surcharges)
   - 210 franchise (Code, Fair Work)
   - 208 recruitment (privacy, anti-discrimination)
   - 206/207 associations and non-profits
2. Re-check model availability in Australian regions before promoting 186; it changes monthly.
3. Consider expanding the thin industry pages (206–210) once demand is visible in Search Console.
4. Batches 121–230 are all uncommitted.

## 10. Publication order and monitoring

**Publication order:** ship as one deploy, starting with the surcharge corrections. If staging is needed:
1. Surcharge corrections, 191+195 returns and 201+202 hospitality
2. 221+222 privacy, 224+228 forms and 229 continuity
3. 230, 211, 212, 214+215, 216, 217 and 219 (engineering)
4. 186, 187 and the AI updates
5. 206, 207, 208, 210 and 218
6. 204

**Cannibalisation pairs to watch** in Search Console (country = Australia):
- `ecommerce-returns-management` vs `ecommerce-returns-australia`
- `api-integration-australia` vs `api-integration-reliability`
- `workflow-digitization-australia` vs `digital-forms-development-australia`
- `cyber-incident-response-plan-australia` vs `business-continuity-digital-products-australia`
- `saas-development-australia` vs `multi-tenant-saas-architecture`

Track impressions, clicks, CTR, queries and indexing monthly, and judge results after 8–12 weeks.
