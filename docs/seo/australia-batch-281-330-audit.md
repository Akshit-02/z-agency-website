# Australia Batch 281–330: Audit, Decision Matrix and Briefs

Prepared 2026-10-10 on branch `seo/australia-content-batches`. This document holds the research and the decisions. The implementation and QA results are in [`blogs-281-330-australia-implementation.md`](./blogs-281-330-australia-implementation.md).

## 1. Baseline audit

**Repository**
- **Stack:** Next.js 16.3.5 App Router. Blog posts are statically generated at `/blogs/[slug]` from TypeScript `BlogPost` arrays in `src/lib/blog-data-*.ts`, registered in `src/lib/blog-data.ts`. There is no CMS, so nothing auto-publishes.
- **Metadata:**
  - `seoTitle` is the `<title>`.
  - `excerpt` is the meta description.
  - `title` is the single H1.
  - The canonical is `/blogs/{slug}`.
  - Open Graph tags come from the same fields plus a generated banner.
- **Structured data:** BlogPosting, BreadcrumbList, and FAQPage from visible FAQs only. There is no review, rating or LocalBusiness schema.
- **Sitemap:** `src/app/sitemap.ts` sets `lastModified = updated ?? date`.
- **Images:** banners are SVG components chosen by key (`src/components/BlogBanner.tsx`), with `bannerAlt` as alt text.
- **Analytics and Search Console:** none configured in the repo for this work, so no first-party demand data is available. All demand conclusions below are qualitative.
- **Deployment:** not part of this task. No deploy has been made.

**Library before this batch:** 963 posts, with 0 broken internal links and no duplicate titles, H1s or meta descriptions (run 2026-10-10).

**Relevant owner pages found** (with the topics they already cover):
- **Automation:** business-process-automation, workflow-automation, when-to-automate-a-business-process, ai-data-entry-automation, ai-invoice-processing, workflow-automation-vs-rpa, rpa-vs-ai-automation, b2b-approval-workflows, workflow-digitization-australia, ai-automation-australia, ai-automation-roi, human-in-the-loop-ai, api-integration-reliability.
- **Mobile:** about 30 dedicated pages, including:
  - mobile-app-development-company-australia
  - mobile-app-development-cost-australia
  - mobile-app-development-process
  - native-vs-cross-platform-app-development and flutter-vs-react-native
  - mvp-development-australia
  - offline-first-mobile-app-development
  - mobile-app-push-notifications, mobile-app-analytics, mobile-app-authentication
  - mobile-app-maintenance
  - software-product-discovery-australia
- **Data:**
  - AI-framed pages: ai-data-engineering, data-pipelines-for-ai, data-quality-for-ai, real-time-data-for-ai
  - Ecommerce-framed: ecommerce-data-warehouse
  - Australian pages: business-intelligence-dashboards-australia, customer-data-integration-australia, data-migration-australia, first-party-data-strategy-australia
- **Ecommerce:** every topic in 311–320 has one or more owners, for example:
  - headless-ecommerce-architecture
  - shopify-plus-development and shopify-plus-vs-shopify
  - b2b-portal-development-australia
  - subscription-management-portal and subscription-billing-architecture
  - ecommerce-product-information-management
  - shopify-checkout-optimization
  - bopis-ecommerce and click-and-collect-ux
  - ecommerce-erp-integration
  - customer-portal-development-australia
  - ecommerce-personalization
- **Cloud and delivery:**
  - cloud-migration-australia, cloud-cost-optimization-australia, cloud-security-posture-review-australia
  - devops-for-growing-businesses, feature-flag-implementation
  - ecommerce-disaster-recovery, business-continuity-digital-products-australia
  - software-architecture-review, application-monitoring-observability
  - multi-region-ecommerce, measure-ai-coding-impact

**Term gaps** (zero or only passing mentions across 963 posts): predictive analytics (0), blue-green (0), Terraform (1), lakehouse (2), FinOps (1), golden record (1). Kubernetes, serverless, low-code and infrastructure as code appear only in passing.

## 2. Research notes and sources (accessed 2026-10-10)

| Claim | Source | Status |
|---|---|---|
| New Play apps and updates must target Android 16 (API 36) from 31 Aug 2026 (Wear OS 35; TV/XR 34) | developer.android.com/google/play/requirements/target-sdk | Verified |
| App Store Connect uploads must be built with Xcode 26 and 26-generation SDKs from 28 Apr 2026 | developer.apple.com/news/upcoming-requirements/ | Verified |
| Lambda timeout 900 s (15 min); memory 128–10,240 MB | docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html | Verified |
| Kubernetes Deployment rolling updates | kubernetes.io docs | Verified (200) |
| Blue-green and canary definitions | martinfowler.com bliki | Verified (200) |
| Secrets management practices | OWASP Secrets Management Cheat Sheet | Verified (200) |
| GitHub secret scanning | docs.github.com | Verified (200) |
| Terraform and OpenTofu | developer.hashicorp.com, opentofu.org | Verified (200) |
| Iceberg and Delta Lake open table formats | iceberg.apache.org, delta.io | Verified (200) |
| DORA metrics | dora.dev | Verified (200), used only as a reference on the deploy page |
| Shopify Plus pricing | shopify.com/plus/pricing | Localised (INR) and term-dependent. **No price is quoted**; readers are told to check current pricing |
| Australian Privacy Principles | oaic.gov.au | Verified (200) |
| Spam Act, ACMA | acma.gov.au | Blocked to automated fetch; cited generally |
| Essential Eight, ASD | cyber.gov.au | Blocked; cited generally (as in earlier batches) |
| Guidance for AI Adoption, NAIC/DISR | industry.gov.au | Blocked (timeout); cited generally without a URL |
| FinOps Framework | finops.org | 403; not linked |

## 3. Decision matrix (all 50)

**Legend:** C = CREATE, U = UPDATE, COV = covered by an existing page (no change), D = DEFER, R = REJECT. Priority is H/M/L. Confidence is qualitative (no measured demand).

**Service codes:** BPA/AI = ai-automation, MOB = mobile-app-development, WEB = website-development, SHOP = shopify-development, UX = ui-ux-design, CRO = cro-audit.

| # | Topic | Intent / audience | Existing overlap | Service | Action | Target | Rationale | Pri / conf |
|---|---|---|---|---|---|---|---|---|
| 281 | BPA in Australia roadmap | Ops leads, SMEs | business-process-automation, ai-automation-australia, workflow-digitization-australia | AI | COV | ai-automation-australia | Three owners already cover the roadmap; a fourth page would cannibalise | — / H |
| 282 | Workflow vs RPA vs AI agents | Evaluators | rpa-vs-ai-automation (includes agents), workflow-automation-vs-rpa | AI | COV | rpa-vs-ai-automation | Exact three-way comparison exists | — / H |
| 283 | Automate manual data entry | Ops, finance | ai-data-entry-automation | AI | COV | same | Same intent | — / H |
| 284 | Approval workflow software | Ops, finance | workflow-digitization-australia (approvals step), b2b-approval-workflows, business-process-automation | AI/WEB | COV | workflow-digitization-australia | Approvals are covered inside existing owners; low distinct demand | — / M |
| 285 | B2B customer onboarding automation | B2B ops, account managers | saas-onboarding-optimization (in-product), ecommerce-marketplace-seller-onboarding (sellers) | AI/WEB | **C** | /blogs/b2b-customer-onboarding-automation | Gap: account opening, KYC/credit checks, contracts, provisioning and handoffs for B2B customers. Distinct from SaaS activation | H / M |
| 286 | Automated invoice processing | AP teams | ai-invoice-processing, accounting-software-integration-australia | AI | COV | ai-invoice-processing | Covers capture through ERP posting; Australian Peppol is on the accounting page | — / H |
| 287 | Process mapping before automation | Ops | business-process-automation (Step 1), workflow-digitization-australia (Step 1), when-to-automate | AI | COV | business-process-automation | Covered in depth | — / H |
| 288 | Low-code vs custom software | Founders, ops, IT | build-vs-buy-ai-agents (agents only), wordpress-vs-custom (websites) | WEB/AI | **C** | /blogs/low-code-vs-custom-software | Gap. Balanced comparison; does not default to custom | H / M |
| 289 | Exception handling in workflows | Engineers, ops | workflow-automation (error handling), api-integration-reliability, ai-data-entry-automation (exceptions), human-in-the-loop-ai | AI | COV | workflow-automation | Four owners cover retries, queues and human review | — / M |
| 290 | Measuring automation success | Ops, finance | ai-automation-roi (4,200 words, Australian section) | AI | COV | ai-automation-roi | Same intent | — / H |
| 291 | Mobile app development in Australia | Buyers | mobile-app-development-company-australia, mobile-app-development-process | MOB | COV | mobile-app-development-company-australia | Same intent | — / H |
| 292 | Flutter vs React Native vs native | Buyers, CTOs | native-vs-cross-platform-app-development, flutter-vs-react-native | MOB | COV | native-vs-cross-platform-app-development | Same intent | — / H |
| 293 | Mobile app cost | Buyers | mobile-app-development-cost-australia, mobile-app-development-cost | MOB | COV | mobile-app-development-cost-australia | Same intent | — / H |
| 294 | Mobile app MVP | Founders | mvp-development-australia | MOB | COV | same | Same intent | — / H |
| 295 | Offline-first field apps | Field ops | offline-first-mobile-app-development | MOB | COV | same | Same intent | — / H |
| 296 | Push notification strategy | Product | mobile-app-push-notifications | MOB | COV | same | Same intent | — / H |
| 297 | Mobile app analytics | Product | mobile-app-analytics | MOB | COV | same | Same intent | — / H |
| 298 | Secure mobile authentication | Engineers | mobile-app-authentication, mobile-app-security | MOB | COV | mobile-app-authentication | Same intent | — / H |
| 299 | Mobile app modernisation | App owners | mobile-app-maintenance (upkeep), legacy-software-modernization-australia (general systems) | MOB | **C** | /blogs/mobile-app-modernization | Gap: refactor, rebuild or replace decisions for apps (store SDK deadlines, framework upgrades, re-platforming between native and cross-platform) | H / M |
| 300 | Idea to product discovery | Founders | software-product-discovery-australia, ai-product-idea-validation | UX | COV | software-product-discovery-australia | Same intent | — / H |
| 301 | Data engineering for growing businesses | Founders, finance, ops | ai-data-engineering and data-pipelines-for-ai (AI-framed), ecommerce-data-warehouse | WEB | **C** (absorbs 303 and 306) | /blogs/data-engineering-for-growing-businesses | Gap for non-AI business reporting. Covers ELT pipelines (303) and data quality monitoring (306) as sections to avoid three thin pages | H / M |
| 302 | Warehouse vs lake vs lakehouse | Tech leads | ecommerce-data-warehouse (when to have one) | WEB | **C** | /blogs/data-warehouse-vs-data-lake-vs-lakehouse | Gap: architecture comparison; "lakehouse" barely mentioned on site | M / M |
| 303 | Reliable ETL/ELT pipelines | Data engineers | data-pipelines-for-ai | WEB | COV (section in 301) | data-engineering-for-growing-businesses | Merged into 301 | — / M |
| 304 | Master data management | Ops, data | customer-data-integration-australia (identity resolution), ecommerce-product-information-management | WEB | **C** | /blogs/master-data-management | Gap: cross-domain MDM (customers, products, suppliers, locations) and golden records | M / M |
| 305 | Real-time vs batch | Tech leads | real-time-data-for-ai ("Do you need streaming?"), ai-data-engineering | WEB | COV (section in 301) | data-engineering-for-growing-businesses | Short decision section in 301 plus the existing streaming page | — / M |
| 306 | Data quality monitoring | Data | data-quality-for-ai | WEB | COV (section in 301) | data-engineering-for-growing-businesses | Merged into 301 | — / M |
| 307 | BI dashboard development | Managers | business-intelligence-dashboards-australia | WEB | COV | same | Same intent | — / H |
| 308 | CDP vs CRM | Marketing, ops | customer-data-integration-australia (short section), ecommerce-data-warehouse ("Warehouse, CDP or both") | WEB | **C** | /blogs/cdp-vs-crm | Distinct comparison query; existing pages only touch it | M / M |
| 309 | Predictive analytics vs generative AI | Leaders | none (0 mentions of "predictive analytics") | AI | **C** | /blogs/predictive-analytics-vs-generative-ai | Gap. Helps buyers pick the right tool | M / M |
| 310 | Legacy data migration validation | IT | data-migration-australia (validation and reconciliation, engine section added in batch 277) | WEB | COV | data-migration-australia | Same intent | — / H |
| 311 | Headless vs traditional | Ecommerce leads | headless-ecommerce-architecture, monolithic-vs-headless-architecture | SHOP | COV | headless-ecommerce-architecture | Same intent | — / H |
| 312 | Shopify Plus vs custom ecommerce | Ecommerce leads | shopify-plus-development, shopify-plus-vs-shopify, ecommerce-replatforming | SHOP/WEB | **C** | /blogs/shopify-plus-vs-custom-ecommerce | Gap: no page compares a SaaS platform with custom builds. Balanced; no pricing quoted | H / M |
| 313 | B2B ecommerce portal | B2B sellers | b2b-portal-development-australia, b2b-ecommerce-* (10+) | WEB | COV | b2b-portal-development-australia | Same intent | — / H |
| 314 | Subscription management | Ecommerce | subscription-management-portal, subscription-billing-architecture | SHOP | COV | subscription-management-portal | Same intent | — / H |
| 315 | PIM | Ecommerce | ecommerce-product-information-management, pim-vs-cms | SHOP | COV | ecommerce-product-information-management | Same intent | — / H |
| 316 | Checkout optimisation | Ecommerce | shopify-checkout-optimization, ecommerce-checkout-ux, ecommerce-conversion-optimization-australia | CRO | COV | ecommerce-checkout-ux | Same intent | — / H |
| 317 | Click and collect integration | Retail | bopis-ecommerce, click-and-collect-ux, retail-ecommerce-integration | SHOP | COV | bopis-ecommerce | Same intent | — / H |
| 318 | Ecommerce ERP integration | Ecommerce, finance | ecommerce-erp-integration, b2b-ecommerce-erp-integration | WEB | COV | ecommerce-erp-integration | Same intent | — / H |
| 319 | Customer self-service portals | Service leads | customer-portal-development-australia | WEB | COV | same | Same intent | — / H |
| 320 | Commerce personalisation | Ecommerce | ecommerce-personalization (Australian privacy section) | SHOP | COV | same | Same intent | — / H |
| 321 | Cloud migration strategy, Australia | IT leads | cloud-migration-australia | WEB | COV | same | Same intent | — / H |
| 322 | Kubernetes vs serverless vs VMs | CTOs | devops-for-growing-businesses (passing) | WEB | **C** | /blogs/kubernetes-vs-serverless-vs-virtual-machines | Gap. Balanced; managed PaaS included as a fourth option | M / M |
| 323 | Infrastructure as code | Engineers | devops-for-growing-businesses (short section) | WEB | **C** | /blogs/infrastructure-as-code | Gap: tools, state, drift, reviews and risks | M / M |
| 324 | Disaster recovery planning | IT | business-continuity-digital-products-australia, ecommerce-disaster-recovery | WEB | COV | business-continuity-digital-products-australia | Same intent | — / H |
| 325 | Cloud cost allocation and FinOps | Finance, engineering | cloud-cost-optimization-australia (tagging only) | WEB | **U** | cloud-cost-optimization-australia | Add a cost allocation, showback and unit-cost section rather than a competing page | M / H |
| 326 | Multi-region architecture | Architects | multi-region-ecommerce, business-continuity-digital-products-australia | WEB | D | — | Relevant to few ZSpace buyers; revisit with demand data | L / M |
| 327 | Secrets management | Engineers | Passing mentions in 27 posts | WEB | **C** | /blogs/secrets-management | Gap: no dedicated page. Educational; no security service offered | H / M |
| 328 | Zero-downtime deployments | Engineers | devops-for-growing-businesses (release safety), feature-flag-implementation | WEB | **C** | /blogs/zero-downtime-deployments | Gap: blue-green (0 mentions), canary and rolling, plus database migrations | M / M |
| 329 | Reliability reviews and SPOFs | CTOs | software-architecture-review, business-continuity-digital-products-australia | WEB | **U** | software-architecture-review | Add a single-point-of-failure review section | M / H |
| 330 | Engineering productivity metrics | Engineering managers | measure-ai-coding-impact, devops-for-growing-businesses ("Measuring progress") | WEB | D | — | Overlaps existing pages; weak link to ZSpace buyer intent | L / M |

**Totals**

| Action | Count |
|---|---|
| CREATE | 13 |
| UPDATE | 2 |
| Covered by existing pages | 33 (including 303, 305 and 306, absorbed into the new 301 page) |
| DEFER | 2 |
| REJECT | 0 |

No MERGE of existing URLs, no URL changes, no redirects and no deletions.

## 4. Cannibalisation notes

| New page | Neighbour | How they differ |
|---|---|---|
| low-code-vs-custom-software | build-vs-buy-ai-agents, wordpress-vs-custom-development-cost-of-ownership | Business applications and workflows, not AI agents or websites |
| b2b-customer-onboarding-automation | saas-onboarding-optimization | Commercial account onboarding (credit, contracts, provisioning), not in-product activation |
| mobile-app-modernization | mobile-app-maintenance | Upkeep vs the refactor, rebuild or replace decision |
| data-engineering-for-growing-businesses | ai-data-engineering, data-pipelines-for-ai | Business reporting foundations vs AI-specific data |
| data-warehouse-vs-data-lake-vs-lakehouse | ecommerce-data-warehouse | Architecture choice vs "does a store need a warehouse" |
| master-data-management | customer-data-integration-australia, ecommerce-product-information-management | Cross-domain governance vs customer-only or product-only |
| cdp-vs-crm | customer-data-integration-australia, first-party-data-strategy-australia | Tool comparison vs integration how-to and strategy |
| shopify-plus-vs-custom-ecommerce | shopify-plus-vs-shopify, ecommerce-replatforming | Platform vs custom, not plan vs plan or migration process |
| infrastructure-as-code, zero-downtime-deployments | devops-for-growing-businesses | Deep dives linked from the DevOps overview |

## 5. Briefs (for the 13 CREATE topics)

All briefs share these conventions:
- Australian English.
- Answer-first bold opening, then key takeaways.
- Decision tables and a labelled hypothetical example.
- Common mistakes, related guides and a conclusion.
- One CTA describing ZSpace Labs as an India-based, remote-first studio, using only existing service pages.
- FAQPage schema only from visible FAQs.

No word-count targets. Metadata is kept within limits: `<title>` ≤60 characters, meta description ≤158.

### 285: B2B customer onboarding automation
- **H1:** "B2B Customer Onboarding Automation: From Signed Deal to Active Account".
- **Intent:** how to automate B2B account opening and handover.
- **Outline:**
  - Answer
  - Stages (application, verification, credit, contract, setup in ERP/CRM, portal access, training, first order)
  - What to automate vs keep human
  - Integrations
  - Australian checks (ABN Lookup, credit application consent under the Privacy Act's credit provisions as general information, Spam Act for onboarding emails)
  - Measurement (time to first order, drop-off)
  - Example, mistakes
- **Services:** ai-automation, website-development.
- **Links:** b2b-portal-development-australia, crm-automation-guide, digital-forms-development-australia, workflow-digitization-australia, accounting-software-integration-australia.
- **Verify:** ABN Lookup exists as a free government service. Keep credit reporting statements general.

### 288: Low-code vs custom software
- **Outline:**
  - Answer
  - Definitions (no-code, low-code, custom; plus a "configure packaged SaaS" option)
  - Comparison table: speed, cost profile, flexibility, scale, lock-in, governance, skills
  - When each fits
  - Hybrid patterns
  - Risks (citizen-developer sprawl, licence costs, data location)
  - Decision checklist, example
- **Must not:** default to custom.
- **Links:** workflow-automation, build-vs-buy-ai-agents, legacy-software-modernization-australia, custom-software-development-australia.

### 299: Mobile app modernisation
- **Outline:**
  - Answer
  - Triggers (store SDK deadlines: Play API 36 from 31 Aug 2026; Xcode 26 SDK since 28 Apr 2026)
  - Framework end of life, crash rates, slow delivery
  - Options: refactor, incremental rewrite (module by module), rebuild, replace with web or PWA
  - Assessment checklist
  - Migration risks (store listing, ratings, user data, deep links, push tokens)
  - Phased plan, example
- **Links:** mobile-app-maintenance, native-vs-cross-platform-app-development, pwa-vs-native-app, mobile-app-architecture, legacy-software-modernization-australia.

### 301: Data engineering for growing businesses (absorbs 303, 305, 306)
- **Outline:**
  - Answer
  - Signs you need it
  - Reference stack (sources, ingestion, warehouse, transformation, BI)
  - ETL vs ELT
  - Pipeline reliability (idempotency, scheduling, backfills)
  - Data quality monitoring (freshness, volume, schema, nulls, duplicates, reconciliation)
  - Batch vs real-time
  - Governance and privacy (APP 11)
  - Phased plan, example
- **Links:** data-pipelines-for-ai, data-quality-for-ai, real-time-data-for-ai, business-intelligence-dashboards-australia, ecommerce-data-warehouse.

### 302: Warehouse vs lake vs lakehouse
- **Outline:**
  - Answer
  - Definitions
  - Comparison table
  - Open table formats (Iceberg, Delta Lake)
  - When each fits; most SMEs start with a warehouse
  - Cost and skills
  - Data location in Australian regions
  - Example
- No vendor pricing.

### 304: Master data management
- **Outline:**
  - Answer
  - Domains
  - Styles (registry, consolidation, coexistence, centralised)
  - Golden record, match and merge rules
  - Stewardship and ownership
  - Tools vs lightweight approaches
  - Privacy (APP 10 data quality, APP 13 correction)
  - Phased plan, example

### 308: CDP vs CRM
- **Outline:**
  - Answer
  - Definitions
  - Comparison table (users, data, identity, real-time, activation)
  - Where a data warehouse fits ("composable CDP")
  - When you need which
  - Integration patterns
  - Privacy and consent
  - Example
- **Links:** customer-data-integration-australia, first-party-data-strategy-australia, custom-crm-development-australia, crm-automation-guide.

### 309: Predictive analytics vs generative AI
- **Outline:**
  - Answer
  - What each does (predict a number or class from structured data vs generate text, images or code)
  - Comparison table
  - Use cases
  - Data requirements
  - Evaluation (accuracy and calibration vs task evals)
  - Combining them
  - Risks (bias, hallucination, explainability; ADM transparency from 10 Dec 2026 as general information)
  - Example
- **Links:** ai-readiness-assessment, ai-governance-australia, human-in-the-loop-ai, data-quality-for-ai.

### 312: Shopify Plus vs custom ecommerce
- **Outline:**
  - Answer
  - What each means
  - Comparison table (time to launch, cost profile, flexibility, checkout control, B2B, integrations, maintenance, security and PCI scope)
  - When Plus fits / when custom fits
  - Headless middle ground
  - Total cost of ownership questions
  - Example
- **Must not:** quote prices (pricing is term- and region-dependent).
- **Links:** shopify-plus-development, shopify-plus-vs-shopify, headless-ecommerce-architecture, ecommerce-replatforming, shopify-development-australia.

### 322: Kubernetes vs serverless vs VMs
- **Outline:**
  - Answer
  - Options, including managed PaaS and containers-as-a-service
  - Comparison table
  - Constraints (Lambda 15-minute limit, cold starts, Kubernetes operational load)
  - When each fits
  - Cost behaviour
  - Example
- **Links:** devops-for-growing-businesses, scaling-saas-applications, cloud-cost-optimization-australia, cloud-migration-australia.

### 323: Infrastructure as code
- **Outline:**
  - Answer
  - Benefits
  - Tools (Terraform, OpenTofu, CloudFormation, Bicep, Pulumi, CDK)
  - State management
  - Modules
  - Reviews and plans in CI
  - Drift
  - Secrets
  - Risks (destroy plans, state leaks)
  - Adoption steps, example

### 327: Secrets management
- **Outline:**
  - Answer
  - What counts as a secret
  - Where secrets leak
  - Secret stores
  - Short-lived credentials and workload identity (OIDC from CI)
  - Rotation
  - Scanning (GitHub secret scanning)
  - Incident response when a key leaks
  - Example
- **Educational; no security service offered.**
- **Source:** OWASP cheat sheet.

### 328: Zero-downtime deployments
- **Outline:**
  - Answer
  - Rolling, blue-green, canary, feature flags
  - Comparison table
  - Database migrations (expand and contract)
  - Health checks and connection draining
  - Rollback
  - Mobile and API compatibility
  - Example
- **Sources:** Kubernetes docs, martinfowler.com.

## 6. Updates

- **325 cloud-cost-optimization-australia:** add a section "Cost allocation and showback by product and team" covering tagging policy, shared costs, showback vs chargeback, unit costs and GST/AUD reporting, plus an FAQ.
- **329 software-architecture-review:** add a section "Finding single points of failure" with a checklist covering people, vendors, infrastructure, data, DNS and certificates, plus an FAQ.

## 7. Roadmap

1. 288, 312, 285 and 299 (commercial decision guides closest to ZSpace services)
2. 301, 302, 304, 308 and 309 (data)
3. 322, 323, 327 and 328 (engineering)
4. The two updates

Revisit the deferred topics 326 and 330 when Search Console data exists.
