# Blogs 121–140 (Australia): Implementation and QA Report

Implemented 2026-10-09. The audit, research and decision rationale are in [`australia-batch-121-140-audit.md`](./australia-batch-121-140-audit.md).

**No Search Console, analytics or keyword-tool data was available.** Every keyword below is a hypothesis, and no volumes, difficulty, traffic or rankings are quoted anywhere.

## 1. Summary

| | Count |
|---|---|
| Topics reviewed | 20 |
| New pages (CREATE) | 14 |
| Existing pages substantially updated (UPDATE) | 6 |
| Merged / redirected / deleted | 0 |
| Deferred as separate URLs | 6 (their intent is served by the updated global owners) |
| Site total | 906 posts. No duplicate slugs, titles, H1s or meta descriptions |

## 2. Final decisions

| # | Topic | Decision | URL |
|---|---|---|---|
| 121 | Mobile app development cost | CREATE | /blogs/mobile-app-development-cost-australia |
| 122 | Choosing an app development company | CREATE | /blogs/mobile-app-development-company-australia |
| 123 | Native vs cross-platform | UPDATE | /blogs/native-vs-cross-platform-app-development |
| 124 | App maintenance and support | UPDATE (Australian specifics covered in 121/122) | /blogs/mobile-app-maintenance |
| 125 | PWA vs mobile app | UPDATE | /blogs/pwa-vs-native-app |
| 126 | Custom CRM vs off-the-shelf | CREATE | /blogs/custom-crm-development-australia |
| 127 | Legacy software modernisation | CREATE | /blogs/legacy-software-modernization-australia |
| 128 | Cloud migration | CREATE | /blogs/cloud-migration-australia |
| 129 | BI dashboards | CREATE | /blogs/business-intelligence-dashboards-australia |
| 130 | Workflow digitisation | CREATE | /blogs/workflow-digitization-australia |
| 131 | Online booking system | CREATE | /blogs/booking-system-development-australia |
| 132 | Customer portal | CREATE | /blogs/customer-portal-development-australia |
| 133 | B2B portal | CREATE (AU decision page linking the generic B2B cluster) | /blogs/b2b-portal-development-australia |
| 134 | Marketplace | CREATE (AU decision page linking the generic marketplace cluster) | /blogs/marketplace-development-australia |
| 135 | Headless commerce | UPDATE | /blogs/headless-ecommerce-architecture |
| 136 | Subscription ecommerce | CREATE (AU decision page linking the generic subscription cluster) | /blogs/subscription-ecommerce-australia |
| 137 | Core Web Vitals | UPDATE | /blogs/website-performance-optimization |
| 138 | UX audit | UPDATE | /blogs/ux-audit |
| 139 | Local SEO (website side) | CREATE | /blogs/local-seo-australia |
| 140 | Secure customer-facing web app | CREATE | /blogs/secure-web-application-development-australia |

**Slug note:** slugs follow the site's existing US-spelling convention, as in `ecommerce-conversion-optimization-australia`. Body copy uses Australian English (modernisation, digitisation, catalogue, prioritise).

## 3. New pages: metadata

The template supplies the following for every page, and all of it was verified in the built HTML for a sample:
- canonical (`/blogs/{slug}`)
- Open Graph
- BlogPosting
- BreadcrumbList
- FAQPage (visible FAQs only)
- exactly one H1
- `index, follow`

| URL | SEO title (`<title>` before suffix) | Meta description chars | Category | Words* / FAQs | Internal blog links |
|---|---|---|---|---|---|
| mobile-app-development-cost-australia | Mobile App Development Cost in Australia: Budget Guide | 160 | Mobile Apps | 3,283 / 8 | 14 |
| mobile-app-development-company-australia | Choosing a Mobile App Development Company in Australia | 158 | Mobile Apps | 2,848 / 8 | 16 |
| custom-crm-development-australia | Custom CRM vs Off-the-Shelf CRM in Australia | 159 | Web Development | 2,570 / 7 | 12 |
| legacy-software-modernization-australia | Legacy Software Modernisation in Australia: A Guide | 157 | Web Development | 2,388 / 7 | 11 |
| cloud-migration-australia | Cloud Migration in Australia: Planning, Risks, Practice | 157 | Web Development | 2,500 / 7 | 9 |
| business-intelligence-dashboards-australia | Business Intelligence Dashboards for Australian Businesses | 154 | Web Development | 2,129 / 7 | 10 |
| workflow-digitization-australia | Workflow Digitisation for Australian SMEs | 154 | Web Development | 2,146 / 7 | 10 |
| booking-system-development-australia | Online Booking System Development in Australia | 159 | Web Development | 2,486 / 7 | 12 |
| customer-portal-development-australia | Customer Portal Development in Australia | 151 | Web Development | 2,139 / 7 | 11 |
| b2b-portal-development-australia | B2B Portal Development in Australia: Wholesale Ordering | 159 | Shopify & Ecommerce | 2,240 / 7 | 12 |
| marketplace-development-australia | Marketplace App Development in Australia: A Guide | 152 | Shopify & Ecommerce | 2,379 / 7 | 17 |
| subscription-ecommerce-australia | Subscription Ecommerce in Australia: Build and Comply | 156 | Shopify & Ecommerce | 2,139 / 7 | 13 |
| local-seo-australia | Local SEO for Australian Service Businesses: The Website | 160 | Web Development | 2,383 / 7 | 13 |
| secure-web-application-development-australia | Secure Web Application Development: Australian Checklist | 156 | Web Development | 2,474 / 7 | 13 |

\* Visible words, including tables, FAQs and code diagrams. Reading time is set at about 230 wpm.

**Structure:** every new page follows the same pattern:
- an answer-first opening and key takeaways
- tables, checklists and an original framework
- a labelled hypothetical example and common mistakes
- a Sources section, and a conclusion with a single CTA

**Positioning:** the CTA describes ZSpace as "an India-based, remote-first technology studio working with Australian and international businesses". The local SEO page also states that ZSpace has no Australian office and no full local SEO service.

**Structured data:** no new schema types were added. The existing BlogPosting, Breadcrumb and FAQPage output is correct for these pages. No review, rating, LocalBusiness or author markup was added, because the site has no verified data for any of them.

**Images:** each page uses an existing coded banner variant with a descriptive `bannerAlt`. No raster images were added.

## 4. Updated pages (URLs, slugs and canonicals unchanged)

| URL | Changes | `updated` |
|---|---|---|
| native-vs-cross-platform-app-development | Added: what is shared vs platform-specific (table), Kotlin/Compose Multiplatform middle path (JetBrains, May 2025), store requirements (Xcode 26, API 36), long-term ownership, weighted decision table, 2 FAQs, AU cross-links. New `seoTitle` (old title was 66 chars) | 2026-10-09 |
| mobile-app-maintenance | Added: current Apple and Google deadlines, hotfix and incident response, backend/backups, maintenance agreement table, budgeting by component, 2 FAQs, checklist items. Meta description rewritten | 2026-10-09 |
| pwa-vs-native-app | Added: current iOS capabilities (web push 16.4, Declarative Web Push 18.4, iOS 26 Home Screen behaviour), capability table, total cost of ownership, accessibility, 2 FAQs, decision items | 2026-10-09 |
| headless-ecommerce-architecture | Added an "Is headless worth it for Australian retailers?" section (CDN/latency, GST-inclusive pricing, surcharging, BNPL widgets, markets, team) and 1 FAQ. Meta description trimmed to ≤160 | 2026-10-09 |
| website-performance-optimization | **Corrected:** CLS threshold ("low, stable" → under 0.1), 75th-percentile assessment added, "confirmed ranking factor" wording replaced with Google's own wording (used by ranking systems; no top-ranking guarantee; relevance first). **Added:** fix prioritisation, INP in practice, a distant-audience (Australia) latency section citing CrUX country data, 2 FAQs | 2026-10-09 |
| ux-audit | Added: findings → implementation plan, UX audit vs full redesign (table), auditing for Australian users (WCAG 2.2/AHRC, surcharging, 2027 drip pricing and subscription rules, reviews), WCAG 2.2 criteria to check, 2 FAQs. Meta description rewritten | 2026-10-09 |

**Spelling:** the six updated owners keep their existing US spelling for consistency within each page. The Australian sections are worded to avoid spelling-variant words where possible.

## 5. Internal links

- **New pages:** 9–17 contextual blog links each, plus 1–3 service links. Every new page links:
  - its generic owner(s)
  - related batch 101–120 pages
  - related pages in this batch
- **No UAE/GCC article is linked** from the new Australian pages.
- **Back-links:** one contextual sentence was added to the conclusion of 18 existing pages:
  - mobile-app-development-cost, how-to-choose-a-mobile-app-development-company
  - crm-website-integration, ai-legacy-code-modernization
  - ecommerce-kpi-dashboard, business-process-automation
  - b2b-ecommerce-customer-portal, wholesale-ecommerce-website
  - marketplace-website-development, subscription-ecommerce-website
  - seo-friendly-website-development, secure-business-website-development
  - website-security-australia, custom-software-development-australia
  - api-integration-australia, shopify-development-australia
  - ai-automation-australia, digital-product-development-australia
- **Link fix in existing content:** the Australia Post report link `auspost.com.au/ecomreport` now returns 404. It was replaced with `auspost.com.au/business/ecommerce/ecommerce-report` in the four batch 101–120 files that used it.
- **Navigation:** no navigation or category changes. The new pages appear automatically on their category hubs (Web Development, Mobile Apps, Shopify & Ecommerce) and in the sitemap.

## 6. Files changed

**New:**
- `src/lib/blog-data-au-mobile.ts` (121, 122)
- `src/lib/blog-data-au-business-software.ts` (126–128)
- `src/lib/blog-data-au-operations.ts` (129, 130)
- `src/lib/blog-data-au-portals.ts` (131–133)
- `src/lib/blog-data-au-platforms.ts` (134, 136)
- `src/lib/blog-data-au-visibility.ts` (139, 140)
- `docs/seo/australia-batch-121-140-audit.md`
- this report

**Modified:**
- `src/lib/blog-data.ts` (registration)
- **Updated owners:** `blog-data-mobile.ts`, `blog-data-mobile-3.ts`, `blog-data-webdev-8.ts`, `blog-data-commerce-32.ts`, `blog-data-webdev-3.ts`, `blog-data-design-2.ts`
- **Back-link targets:**
  - `blog-data-webdev-6.ts`, `-webdev-9.ts`, `-ai-apps-3.ts`, `-ai-core-3.ts`
  - `-commerce-4.ts`, `-commerce-17.ts`, `-commerce-18.ts`, `-commerce-19.ts`, `-commerce-29.ts`
  - `-au-trust.ts`, `-au-software.ts`, `-au-commerce.ts`, `-au-ai-1.ts`, `-au-product.ts`
- **Australia Post link fix:** `-au-web.ts`, `-au-commerce-2.ts` (plus `-au-commerce.ts` and `-au-product.ts`, already listed above)
- `public/llms.txt`: 14 entries added to "Australian guides", and the intro now names the updated global guides.

**Unchanged:** sitemap code, robots, routing, components and dependencies. No packages were installed.

## 7. QA actually run

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | Clean |
| `npx eslint` on all changed `.ts` files | Clean |
| Script: every `[[/blogs/…]]`, `[[/services/…]]` and `relatedSlugs` across all 906 posts resolves | 0 broken |
| Script: duplicate titles / H1s / meta descriptions (906 posts) | None |
| Australian-spelling scan of new pages' visible text | No US variants |
| FAQ answers 40–90 words; meta descriptions ≤160; SEO titles ≤60 (new pages) | Pass |
| `npm run build` | Succeeded; 2,776 static pages |
| Built HTML (sample of new and updated pages) | One H1, correct canonical, `index, follow`, BlogPosting + BreadcrumbList + FAQPage, no visible `[[`/`**` leaks |
| Built sitemap | 14/14 new URLs present; 6 updated pages have lastmod 2026-10-09 |
| Back-links in built HTML | Sample checked |
| External links (83 unique, HTTP) | All non-government URLs return 200 (one pre-existing developers.facebook.com link in an untouched article in a touched file returns 400). ato.gov.au, accc.gov.au, rba.gov.au and AustLII returned 403, and cyber.gov.au, acma.gov.au, esafety.gov.au and hostingcertification.gov.au timed out, for automated requests. Those URLs come from search results or the batch 101–120 research and were not re-verified by HTTP |

**Not performed:**
- live deployment checks
- Rich Results Test / Schema validator runs
- Lighthouse or real-device mobile review
- screen-reader testing
- a human editorial read-through of all 20 pages

## 8. Facts: verified vs secondary

- **Verified on primary pages (fetched):**
  - Apple enrolment (99 USD in local currency; legal entity and D-U-N-S)
  - Apple upcoming requirements (Xcode 26 from 28 Apr 2026; iOS 13+ from 9 Sep 2026)
  - Apple Small Business Program (15%, ≤1M USD)
  - Google Play registration (US$25) and target API 36 from 31 Aug 2026; Google Play fee change for Australian users from 30 Sep 2026
  - WebKit Declarative Web Push (iOS 18.4)
  - Google Core Web Vitals thresholds and page experience wording; web.dev 75th percentile
  - Google spam policies (doorway abuse); Google Business Profile guidelines; LocalBusiness structured data
  - OWASP Top 10:2025 list
- **Reused from batch 101–120 research:** the facts that research marked as verified:
  - AWS/Azure/GCP Australian regions
  - APP 8
  - NDB 2025 statistics
  - ransomware payment reporting
  - RBA surcharging decision
  - Allens summary of the 2027 regime
  - Australia Post eCommerce Report 2026
- **Secondary / search summaries only (attributed or hedged in the text):**
  - ATO: tax invoices, SERR, record keeping, small business benchmarks
  - ACCC: unfair contract terms, online reviews
  - Spam Act factual messages
  - Electronic Transactions Act test
  - PayTo features
  - OWASP ASVS 5.0; ASD Secure by Design
  - Scams Prevention Framework designation and dates
  - Children's Online Privacy Code status; social media minimum age list
  - iOS 26 Home Screen web-app default (WebKit post linked, not fully read)
- **Assumptions:** the "unfair trading practices" commencement date (1 Jul 2027) comes from law-firm summaries, so it is presented as reported. All examples are labelled hypothetical. The one AUD figure (A$1,000/day in the app cost example) is explicitly labelled illustrative arithmetic, not a market rate.

## 9. Remaining manual steps

1. **Re-verify fast-moving items before or at publish:**
   - Children's Online Privacy Code registration (due 10 Dec 2026)
   - Scams Prevention Framework obligations (reported 31 Mar 2027)
   - Unfair Trading Practices commencement and any ACCC guidance
   - Google Play fee structure for Australia
   - eSafety platform list
   - Payday Super
2. Have a human editor read all 20 pages, especially the legal and tax passages.
3. Run Google's Rich Results Test on two or three new URLs after deployment.
4. Optional: the long-standing `developers.facebook.com/docs/whatsapp/pricing` link, used in 11 existing files (mostly UAE and AI articles), returned 400 to an automated request. Check it in a browser, because Meta may block bots.
5. **Commit:** this batch is uncommitted.

## 10. Recommended publication order

Ship as one deploy so cross-links resolve. If you stage it:
1. 121, 122 and the 123/124/125 updates (mobile cluster)
2. 126, 127, 128, 130, 129 (business software)
3. 132, 131, 133 (portals)
4. 134, 136 and the 135 update (platforms and commerce)
5. 140, 139 and the 137/138 updates (trust and visibility)

## 11. Search Console monitoring plan

Do not judge results before 8–12 weeks.

- **Week 0:**
  - Submit the sitemap.
  - Use URL Inspection to request indexing for the 14 new URLs and the 6 updated ones.
  - Annotate the deploy date.
- **Weekly, weeks 1–4 (Pages report):** check indexing status of the new URLs ("Discovered/Crawled – not indexed" signals quality or crawl-priority issues).
- **Monthly (Performance report, filtered to Country = Australia, Page = each URL):**
  - impressions, clicks, CTR and average position
  - which queries actually trigger each page (test the keyword hypotheses in the audit's section 6)
- **Cannibalisation watch:** compare the queries of each AU page with its generic owner. Pairs to watch:
  - mobile-app-development-cost vs mobile-app-development-cost-australia
  - website-security-australia vs secure-web-application-development-australia
  - wholesale-ecommerce-website vs b2b-portal-development-australia

  If both URLs of a pair rank for the same queries and swap positions, strengthen the differentiation or consolidate.
- **Updated owners:** compare 28-day Australian impressions and CTR before vs after 2026-10-09 for the six updated pages.
- **Conversions:** track contact form submissions and CTA clicks by landing page in GA4. Treat assisted conversions as directional.
- **Quarterly:** refresh dated facts (store deadlines, regulatory status) and update `updated` only when content materially changes.
