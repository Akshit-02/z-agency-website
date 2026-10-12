# Australia Batch 121–140: Audit, Research and Content Decisions

Prepared 2026-10-09, before any content change. The implementation results are recorded in `blogs-121-140-australia-implementation.md`.

## 1. Access and limitations

| Source | Status |
|---|---|
| Repository (Next.js 16.3.5, App Router, TypeScript data files) | Inspected in full |
| External CMS | **None exists.** Every article is a `BlogPost` object in `src/lib/blog-data-*.ts`, registered in `src/lib/blog-data.ts`. The repository is the complete library: 892 posts at audit time |
| Google Search Console, GA4, keyword tools (Ahrefs, Semrush, Keyword Planner) | **Not available.** No exports in the repo, and no access from this environment |
| Crawl reports | None in the repo. `docs/seo/site-audit.md` and `technical-seo.md` are earlier manual audits |
| Live SERPs | Web search is US-hosted, so Australian SERPs could not be observed directly. Competitor coverage was judged from search results and known page types, not from AU rank data |

**No search volume, keyword difficulty, traffic or ranking figure appears anywhere in this document.** Every primary keyword below is a **research hypothesis**. Validate it in Search Console (Performance report, country = Australia) and Keyword Planner (location = Australia) before investing further.

## 2. How content is built and published

- **Route:** `/blogs/[slug]` (`src/app/blogs/[slug]/page.tsx`) is statically generated from `posts`.
- **Metadata:** `title` is the H1, `seoTitle` is the `<title>` and OG title, and `excerpt` is the meta description.
- **Canonical:** `alternates.canonical = /blogs/{slug}`.
- **Schema:** the template emits BlogPosting, BreadcrumbList, and FAQPage. FAQPage is emitted only from the visible `faqs`.
- **Sitemap:** `src/app/sitemap.ts` lists every post automatically. `lastModified` = `updated ?? date`.
- **Robots:** `src/app/robots.ts` (unchanged).
- **Category hubs:** `/blogs/category/{slug}` lists posts by `category`. No tag archives or parameter URLs exist, so new posts create no thin pages.
- **AI discovery:** `public/llms.txt` is hand-maintained. It already has an "Australian guides" section from batch 101–120.
- **Services (6):**
  - website-development
  - mobile-app-development
  - ai-automation
  - ui-ux-design
  - shopify-development
  - cro-audit

  **There is no SEO service page and no cloud/DevOps service page.** That affects topics 128 and 139.
- **Conventions from batch 101–120:**
  - `-australia` suffix on US-spelling slugs
  - Australian English in body text
  - an answer-first opening, key takeaways, a Sources section, and one CTA
  - ZSpace described as "an India-based, remote-first technology studio working with Australian and international businesses"
  - no Australian office, staff, clients or awards claimed

## 3. Existing coverage and cannibalisation check

The search covered all 892 slugs, titles and SEO titles, using each topic's keyword families. The main overlaps found:

| Topic | Existing URLs targeting the same or adjacent intent |
|---|---|
| 121 App cost | `mobile-app-development-cost` (generic, ~980 words), `mobile-app-development-timeline`, `website-development-cost-australia`, `ai-automation-cost-australia` |
| 122 App company | `how-to-choose-a-mobile-app-development-company` (generic), `web-development-company-australia` (AU, web), India listicles |
| 123 Native vs cross-platform | **`native-vs-cross-platform-app-development`** (same title and intent, ~820 words), `flutter-vs-react-native`, `native-ios-vs-android-development` |
| 124 App maintenance | **`mobile-app-maintenance`** (~890 words), `mobile-app-crash-reporting`, `website-maintenance-guide` |
| 125 PWA vs app | **`pwa-vs-native-app`** (~780 words), `progressive-web-app-development`, `ecommerce-pwa-vs-native-app` |
| 126 Custom CRM | `crm-website-integration`, `crm-automation-guide`, `custom-software-development-australia`. **No build-vs-buy CRM page** |
| 127 Legacy modernisation | `software-modernization-uae`, `ai-legacy-code-modernization` (AI-led), `legacy-ecommerce-migration`. **No AU or generic page** |
| 128 Cloud migration | `cloud-migration-uae`. **No AU or generic page** |
| 129 BI dashboards | `ecommerce-kpi-dashboard`, `ecommerce-dashboard-design` (ecommerce only). **No general business page** |
| 130 Workflow digitisation | `business-process-automation`, `workflow-automation`, `ai-automation-australia` (AI-led, "what to automate") |
| 131 Booking system | None |
| 132 Customer portal | `b2b-ecommerce-customer-portal` (B2B ordering), `subscription-management-portal` |
| 133 B2B portal | 20+ generic B2B pages: `wholesale-ecommerce-website`, `b2b-ecommerce-customer-portal`, `b2b-ecommerce-erp-integration`, `b2b-ecommerce-pricing`, `b2b-approval-workflows`, … |
| 134 Marketplace | 14 generic pages, with owner `marketplace-website-development` |
| 135 Headless | **`headless-ecommerce-architecture`**, `headless-shopify-explained`, `shopify-hydrogen-vs-traditional-shopify`, plus the headless section in `shopify-development-australia` |
| 136 Subscription | 14 generic pages, with owner `subscription-ecommerce-website` |
| 137 Core Web Vitals | **`website-performance-optimization`** (CWV, lab vs field), `why-page-speed-still-decides-conversion`, `shopify-core-web-vitals-performance-guide` |
| 138 UX audit | **`ux-audit`**, `how-to-conduct-a-ux-audit`, `ux-heuristic-evaluation`, `website-accessibility-australia` |
| 139 Local SEO | None. `seo-friendly-website-development` is technical SEO only |
| 140 Secure web app | `website-security-australia` (operating a small-business website, Essential Eight), `secure-business-website-development` (generic), `mobile-app-security` |

## 4. The regional test

Batch 101–120 established one rule: create an Australian URL only when **Australia materially changes the advice**. Examples of material change are law, tax, payments, platforms, data location or market structure. Where the advice is the same worldwide, improve the existing global owner instead. Ten near-identical city or country pages count as doorway risk under Google's spam policies.

## 5. Decisions

| # | Topic | Decision | URL | Why |
|---|---|---|---|---|
| 121 | Mobile app development cost | **CREATE** | /blogs/mobile-app-development-cost-australia | Strong local, AUD-priced intent. Australian factors include GST, Apple/Google account costs and the change to Google Play fees for Australian users (30 Sep 2026), Privacy Act/NDB, the social media minimum age, and the Children's Online Privacy Code. Complements the generic owner, which gets a back-link |
| 122 | Mobile app development company | **CREATE** | /blogs/mobile-app-development-company-australia | Distinct from the AU web-company guide, because app-specific ownership matters: Apple org enrolment needs a legal entity and D-U-N-S, plus signing keys and store listings. Kept separate from the generic owner by the AU contract, IP, time-zone and privacy angle |
| 123 | Native vs cross-platform | **UPDATE** | /blogs/native-vs-cross-platform-app-development | The existing page targets the identical query. Australia does not change the trade-offs, so an AU URL would be a near-duplicate. Expanded with current toolchains, a weighted decision framework and maintenance detail |
| 124 | App maintenance services | **UPDATE** (+ AU coverage inside 121/122) | /blogs/mobile-app-maintenance | Store and OS rules are global. Australian maintenance factors (NDB, support hours, AUD budgeting) fit inside the cost and vendor articles. The generic page is expanded with current store deadlines, a maintenance agreement checklist and incident steps |
| 125 | PWA vs mobile app | **UPDATE** | /blogs/pwa-vs-native-app | Browser capabilities are global. The page is refreshed with verified current iOS behaviour: web push for Home Screen apps, Declarative Web Push in 18.4, and iOS 26 opening Home Screen sites as web apps |
| 126 | Custom CRM vs off-the-shelf | **CREATE** | /blogs/custom-crm-development-australia | Genuine gap. AU factors: Spam Act consent records, DNCR, APP 11/12/8, Xero/MYOB sync and ABN/GST fields. Kept distinct from custom-software-development-australia by being a CRM-specific build/buy/extend checklist |
| 127 | Legacy software modernisation | **CREATE** | /blogs/legacy-software-modernization-australia | No AU or generic page exists. AU factors: unsupported software under the Essential Eight, STP/Payday Super, Peppol, ATO record retention, NDB. The UAE page is not linked as a substitute |
| 128 | Cloud migration | **CREATE** | /blogs/cloud-migration-australia | AU regions (AWS Sydney/Melbourne, Azure, GCP), APP 8 vs hosting location, ACSC shared responsibility, IRAP/HCF context. There is no cloud service page, so links go to website-development (web apps) |
| 129 | BI dashboards | **CREATE** | /blogs/business-intelligence-dashboards-australia | Gap outside ecommerce. AU angle: Xero/MYOB/STP data sources, GST and financial-year definitions, ATO small business benchmarks as external context, APP 11 access control |
| 130 | Workflow digitisation | **CREATE** | /blogs/workflow-digitization-australia | Kept distinct from AI automation and generic BPA by focusing on paper-to-digital: forms, approvals, e-signatures (Electronic Transactions Act), ATO record keeping, Peppol eInvoicing. Positioned as non-AI first |
| 131 | Online booking system | **CREATE** | /blogs/booking-system-development-australia | No existing page. AU factors: multiple time zones and daylight-saving differences by state, ACL/UCT cancellation terms, the surcharging change, Spam Act factual-message reminders, health-provider privacy |
| 132 | Customer portal | **CREATE** | /blogs/customer-portal-development-australia | Service and account portals (documents, requests, billing), distinct from B2B ordering. AU: APP 12 access, NDB, WCAG 2.2 accessible authentication, DDA/AHRC |
| 133 | B2B portal | **CREATE** (AU pillar for the B2B cluster) | /blogs/b2b-portal-development-australia | Generic depth already exists, so this is an AU decision page that links into it. AU-material factors: ATO tax invoice rules (ABN, $82.50 and $1,000 thresholds), Peppol, GST-inclusive vs exclusive trade pricing, freight and remote delivery, UCT in standard trade terms. ERP claims limited to documented APIs |
| 134 | Marketplace app | **CREATE** | /blogs/marketplace-development-australia | AU-material: the sharing economy reporting regime for EDP operators (and its goods exclusion), GST and EDP rules, ACL obligations, fake-review law, the Scams Prevention Framework status. Links the 14 generic marketplace pages |
| 135 | Headless commerce AU | **UPDATE** | /blogs/headless-ecommerce-architecture | Architecture trade-offs are global, and shopify-development-australia already has the AU headless decision. A new URL would compete with both. An "Australian retailers" decision section has been added to the owner |
| 136 | Subscription ecommerce | **CREATE** | /blogs/subscription-ecommerce-australia | AU-material: the unfair trading practices subscription rules (commencing 1 Jul 2027), surcharging removal from 1 Oct 2026, PayTo vs card vs BECS direct debit, ACL guarantees, Spam Act. Links the 14 generic subscription pages |
| 137 | Core Web Vitals AU | **UPDATE** | /blogs/website-performance-optimization | CWV is a global standard. The only AU angle (origin distance and CDN, CrUX country data, mobile networks) is a section, not a page. The update refreshes INP, the ranking wording from Google's docs and the prioritisation method |
| 138 | UX audit services AU | **UPDATE** | /blogs/ux-audit | Audit method is global. The page gains an "audit vs redesign" section and an Australian section covering WCAG 2.2/DDA, ACL-sensitive patterns and the 2027 drip-pricing/subscription rules |
| 139 | Local SEO for service businesses | **CREATE** | /blogs/local-seo-australia | No local SEO page exists. Framed as the website side of local SEO (architecture, GBP accuracy, reviews under ACL, LocalBusiness markup, no doorway pages). It states that ZSpace offers web development, not a full local SEO service |
| 140 | Secure customer-facing web app | **CREATE** | /blogs/secure-web-application-development-australia | Distinct from website-security-australia, which covers operating a site (patching, backups, E8 mapping). This is a build-time checklist covering threat modelling, OWASP Top 10:2025/ASVS 5.0, authorisation and secrets, aligned to ASD Secure by Design and the NDB |

**Totals:** 14 CREATE, 6 UPDATE, 0 MERGE, 0 DEFER. No URL is removed, renamed or redirected. No canonical changes.

**Deferred as separate URLs:** Australian versions of 123, 124, 125, 135, 137 and 138. Their intent is served by updating the global owners. If Search Console later shows significant Australian impressions with poor CTR on those owners, revisit.

## 6. Keyword hypotheses and intent

| # | Primary (hypothesis) | Secondary (hypothesis) | Intent |
|---|---|---|---|
| 121 | mobile app development cost Australia | app development cost AUD, how much does an app cost in Australia | Commercial investigation |
| 122 | mobile app development company Australia | app developers Australia, how to choose an app developer | Commercial investigation (SERP likely dominated by agencies and directories) |
| 123 | native vs cross platform app development | Flutter vs native, React Native vs native | Informational |
| 124 | mobile app maintenance services | app support and maintenance, app maintenance cost | Commercial investigation |
| 125 | progressive web app vs mobile app | PWA vs native app, PWA iOS limitations | Informational |
| 126 | custom CRM development Australia | custom CRM vs Salesforce/HubSpot, build vs buy CRM | Commercial investigation |
| 127 | legacy software modernisation Australia | application modernisation, replace legacy system | Commercial investigation |
| 128 | cloud migration services Australia | cloud migration strategy, AWS Sydney migration | Commercial investigation |
| 129 | business intelligence dashboard development Australia | Power BI dashboard, KPI dashboard for small business | Commercial investigation |
| 130 | business process automation software Australia | digitise paper forms, workflow software for SMEs | Commercial investigation |
| 131 | online booking system development Australia | custom booking system, appointment booking software | Commercial investigation / transactional |
| 132 | customer portal development Australia | client portal, self-service portal | Commercial investigation |
| 133 | B2B portal development Australia | wholesale ordering portal, B2B ecommerce Australia | Commercial investigation |
| 134 | marketplace app development Australia | build a marketplace platform, two-sided marketplace | Commercial investigation |
| 135 | headless commerce development Australia | headless ecommerce, is headless worth it | Informational / commercial |
| 136 | subscription ecommerce development Australia | subscription box website, recurring billing Australia | Commercial investigation |
| 137 | Core Web Vitals optimisation | improve INP, LCP optimisation | Informational |
| 138 | UX audit services | website UX audit, UX audit checklist | Commercial investigation |
| 139 | local SEO services Australia | local SEO for tradies, Google Business Profile, service area pages | Commercial investigation (strong local-pack intent; a blog cannot rank in the map pack) |
| 140 | secure web application development Australia | web application security checklist, OWASP | Informational / commercial |

## 7. Internal linking plan

| Cluster | Pages | Main service |
|---|---|---|
| Mobile | 121 ↔ 122, both → 123/124/125 owners | mobile-app-development |
| Business software | 126, 127, 128, 129, 130, linked to custom-software-development-australia and api-integration-australia | website-development, ai-automation |
| Portals and platforms | 131, 132, 133, 134. 132 ↔ 133 are cross-referenced to keep them separate | website-development, ui-ux-design, shopify-development (133) |
| Commerce | 133, 134, 136, linked to shopify-development-australia and ecommerce-conversion-optimization-australia | shopify-development |
| Trust | 139, 140, linked to website-security-australia, website-accessibility-australia and the updated owners 137/138 | website-development, cro-audit, ui-ux-design |

**Rules:**
- Link only slugs that exist, checked by script.
- Use 12–25 contextual links per new article.
- Do not link UAE articles from Australian pages.
- Add a back-link sentence to each generic owner, where it is contextual.

## 8. Sources consulted (primary unless noted)

- **Apple and Google developer requirements:**
  - Apple Developer program enrolment, D-U-N-S, Upcoming requirements and the Small Business Program
  - Google Play target API level, Play service fees, and developer account registration
- **Web platform:**
  - WebKit: Safari 18.4 features; the WWDC25 web app change, via secondary coverage
  - Google Search Central: Core Web Vitals, page experience, spam policies and LocalBusiness structured data
  - web.dev Web Vitals
  - Google Business Profile guidelines
- **Security:** OWASP Top 10:2025 (top10.owasp.org); OWASP ASVS 5.0 [secondary]; ASD Secure by Design [secondary]
- **ATO and payments:**
  - ATO tax invoices, SERR, record keeping and small business benchmarks [search summaries; ato.gov.au returns 403 to the fetcher]
  - PayTo [vendor/secondary]
- **Regulation:**
  - eSafety social media minimum age; OAIC Children's Online Privacy Code status [secondary]
  - Scams Prevention Framework [statute plus secondary]
  - ACCC unfair contract terms [secondary]
  - Spam Act factual messages [secondary]
- **Reused from batch 101–120 research (verified 2026-10-09):**
  - RBA surcharging decision
  - Unfair Trading Practices Act commencement (1 Jul 2027)
  - APP 8; NDB statistics
  - AWS, Azure and GCP Australian regions
  - Essential Eight; Peppol
  - Copyright Act s196(3); WCAG 2.2 and AHRC guidelines
  - Australia Post eCommerce Report 2026
  - ACCC online reviews guidance
