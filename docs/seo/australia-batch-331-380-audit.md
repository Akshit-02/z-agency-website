# Australia Batch 331–380: Audit, Decision Matrix and Briefs

Prepared 2026-10-10 on branch `seo/australia-content-batches`. This document holds the research and the decisions. The implementation and QA results are in [`blogs-331-380-australia-implementation.md`](./blogs-331-380-australia-implementation.md).

No Search Console, analytics or keyword tool data is configured, so every demand judgement below is qualitative. No volumes, difficulty scores, rankings or traffic figures are quoted.

## 1. Baseline audit

**Architecture** (unchanged from the previous batches, re-checked)
- **Stack:** Next.js 16.3.5 App Router. Blog posts are statically generated at `/blogs/[slug]` from TypeScript `BlogPost` arrays in `src/lib/blog-data-*.ts`, registered in `src/lib/blog-data.ts`. There is no CMS, so nothing auto-publishes.
- **Metadata and schema:**
  - `seoTitle` is the `<title>`, `excerpt` the meta description, `title` the single H1.
  - The canonical is `/blogs/{slug}`.
  - Open Graph tags come from the same fields.
  - Structured data: Organization, WebSite, BlogPosting, BreadcrumbList, and FAQPage from visible FAQs only.
- **Sitemap and images:**
  - `src/app/sitemap.ts` sets `lastModified = updated ?? date`.
  - Banners are SVG components with `bannerAlt` as alt text.
- **Checks available:** `tsc`, `eslint`, `next build`, plus scratchpad scripts for links, duplicates, word counts and excerpts. There are no automated tests for blog content.

**Library before this batch:** 976 posts, 0 broken internal links, no duplicate titles, H1s or meta descriptions. No material issues were found on the affected URLs.

**Existing coverage by cluster**
- **AI product engineering (331–340):** every topic has at least one dedicated page:
  - ai-application-development, generative-ai-application-development
  - ai-copilot-development, agentic-workflow-automation, rpa-vs-ai-automation
  - ai-agent-guardrails, llm-structured-outputs, llm-application-reliability
  - multimodal-ai-applications
  - llm-routing, ai-model-evaluation
  - llm-cost-optimization, ai-inference-optimization
  - synthetic-data-generation
  - llm-observability, ai-agent-observability
  - ai-poc-vs-pilot-vs-production, vibe-coded-app-to-production
- **Business systems:**
  - Existing pages: custom-crm-development-australia, booking-system-development-australia, field-service-management-software-australia, inventory-management-software-australia, business-intelligence-dashboards-australia, customer-portal-development-australia, b2b-portal-development-australia, ai-procurement-automation.
  - **Gaps:** supplier portals, internal asset maintenance (CMMS), warranty management and business rules engines. The term "rules engine" appears in only 4 posts, in passing.
- **Product design:**
  - Existing pages: software-product-discovery-australia, user-research-methods, design-systems-for-teams-that-move-fast, usability-testing, design-handoff, product-analytics-implementation-australia (which already has a feature adoption step), website-requirements-document (websites only).
  - **Zero mentions:** "jobs to be done", "UX debt", "product requirements document". "Product-led" appears once.
- **APIs:**
  - Existing pages: api-integration-australia, api-integration-reliability, api-security-best-practices, api-documentation-best-practices, saas-integration-marketplace, ecommerce-webhooks, ecommerce-event-driven-architecture, ecommerce-queue-architecture, customer-data-integration-australia.
  - **Gaps:** API versioning, OAuth vs OIDC (OpenID Connect appears in 4 posts in passing), and integration architecture patterns. "Enterprise integration pattern" has 0 mentions.
- **Modernisation and governance:**
  - Existing pages: legacy-software-modernization-australia (a short strangler fig paragraph), ecommerce-microservices-vs-monolith (ecommerce-specific, with a modular monolith section), software-architecture-review, software-maintenance-contracts-australia, devops-for-growing-businesses, automated-regression-testing, open-source-software-audit.
  - **Gaps:** technical discovery (1 mention) and vendor handover (no dedicated page).

## 2. Research sources (accessed 2026-10-10)

| Claim | Source | Status |
|---|---|---|
| Warranty against defects mandatory text ("Our goods come with guarantees that cannot be excluded under the Australian Consumer Law…"), reg 90 Competition and Consumer Regulations 2010; must accompany the product | ACCC warranties page (search summary; ACCC blocks automated fetch); NSW Small Business Commissioner | Secondary; hedged and linked to ACCC |
| Payment Times Reporting Scheme: entities with more than $100m consolidated revenue report six-monthly on payment times to small business suppliers; 2024 amendments | paymenttimes.gov.au (200); PwC and KPMG summaries | Verified site exists; details from summaries |
| Deprecation HTTP header, RFC 9745 (Proposed Standard, 2025); works with the Sunset header, RFC 8594 | rfc-editor.org | Verified |
| Stripe date-based API versioning | docs.stripe.com/api/versioning | Verified (200) |
| Google API versioning guidance | cloud.google.com/apis/design/versioning | Verified (200) |
| OAuth 2.0 (RFC 6749), PKCE (RFC 7636), OAuth security BCP (RFC 9700), OAuth 2.1 still a draft | rfc-editor.org, datatracker | Verified |
| OpenID Connect Core 1.0 | openid.net | Verified (200) |
| Strangler fig application; MonolithFirst; microservice prerequisites | martinfowler.com | Verified (200) |
| DMN (Decision Model and Notation) standard | omg.org/dmn | Verified (200) |
| Modern Slavery Act 2018 reporting threshold ($100m consolidated revenue) | Home Affairs (401 to automated fetch) | General knowledge; hedged |
| WHS duties for plant | Safe Work Australia (timeout) | General wording only |

## 3. Decision matrix (all 50)

**Legend:** C = CREATE, U = UPDATE, COV = covered by an existing page (no change), D = DEFER, R = REJECT. Priority is H/M/L. Confidence is qualitative.

**Service codes:** AI = ai-automation, WEB = website-development, UX = ui-ux-design, MOB = mobile-app-development, CRO = cro-audit.

| # | Topic | Intent / audience | Existing overlap | Service | Action | Target | Rationale | Pri / conf |
|---|---|---|---|---|---|---|---|---|
| 331 | AI product development | Founders, product leads | ai-application-development, generative-ai-application-development, ai-software-development | AI | COV | ai-application-development | "From Problem to Product" section already exists | — / H |
| 332 | AI copilot development | Product, CTOs | ai-copilot-development, ai-copilot-ux | AI | COV | ai-copilot-development | Same intent | — / H |
| 333 | Agentic AI vs workflow automation | Ops | agentic-workflow-automation, rpa-vs-ai-automation | AI | COV | rpa-vs-ai-automation | Same intent | — / H |
| 334 | Guardrails and output validation | Engineers | ai-agent-guardrails (output validation section), llm-structured-outputs, llm-application-reliability | AI | COV | ai-agent-guardrails | Same intent | — / H |
| 335 | Multimodal AI | Product | multimodal-ai-applications, multimodal-ai-product-design | AI | COV | multimodal-ai-applications | Same intent | — / H |
| 336 | AI model selection | CTOs | llm-routing ("What should drive model choice?"), ai-model-evaluation ("Comparing models"), ai-application-development | AI | COV | llm-routing | Same intent | — / H |
| 337 | Inference cost optimisation | Engineers | llm-cost-optimization, ai-inference-optimization | AI | COV | llm-cost-optimization | Same intent | — / H |
| 338 | Synthetic test data | Engineers | synthetic-data-generation | AI | COV | same | Same intent | — / H |
| 339 | AI observability | Engineers | llm-observability, ai-agent-observability | AI | COV | llm-observability | Same intent | — / H |
| 340 | Prototype to production | CTOs | ai-poc-vs-pilot-vs-production, vibe-coded-app-to-production, llm-application-deployment | AI | COV | ai-poc-vs-pilot-vs-production | Same intent | — / H |
| 341 | Supplier portal development | Procurement, ops | ai-procurement-automation (AI), b2b-portal-development-australia (customer side) | WEB | **C** | /blogs/supplier-portal-development | Gap: supplier onboarding, POs, ASNs, invoices, payment status. Australian notes on Payment Times Reporting, Peppol and modern slavery due diligence | H / M |
| 342 | CRM customisation vs custom CRM | SMEs | custom-crm-development-australia ("The middle path: extend instead of replacing") | WEB | COV | same | Same intent | — / H |
| 343 | Booking software | Service businesses | booking-system-development-australia | WEB | COV | same | Same intent | — / H |
| 344 | Work order management | Ops, maintenance | field-service-management-software-australia (customer-site work), new 345 page | WEB | COV (in 345) | asset-maintenance-management-software | Internal work orders belong with asset maintenance; field work with FSM | — / M |
| 345 | Asset management software | Maintenance managers | field-service-management-software-australia (customer assets section) | WEB | **C** (absorbs 344) | /blogs/asset-maintenance-management-software | Gap: internal equipment register, preventive maintenance, work orders (CMMS) | M / M |
| 346 | Document management system | Ops | intelligent-document-processing, ai-knowledge-base | WEB | D | — | Usually bought (SharePoint and others); low custom-build fit; revisit with demand | L / M |
| 347 | Digital warranty management | Manufacturers, retailers | ecommerce-returns-australia (returns and guarantees) | WEB | **C** | /blogs/warranty-management-software-australia | Gap. Australian law changes the advice (consumer guarantees vs warranties against defects, mandatory text) | H / M |
| 348 | Inventory forecasting | Ops | inventory-management-software-australia, predictive-analytics-vs-generative-ai (forecast example) | WEB/AI | **U** | inventory-management-software-australia | Add a demand forecasting section rather than a competing page | M / H |
| 349 | Business rules engines | CTOs, architects | Passing mentions in 4 posts | WEB | **C** | /blogs/business-rules-engine | Gap. Balanced: when not to use one | M / M |
| 350 | Custom reporting portals | B2B services | business-intelligence-dashboards-australia, customer-portal-development-australia | WEB | **U** | business-intelligence-dashboards-australia | Add a "client and partner reporting portals" section (embedded analytics, row-level security) | M / H |
| 351 | Product discovery workshops | Founders | software-product-discovery-australia | UX | COV | same | Same intent | — / H |
| 352 | UX research for B2B software | Product, UX | user-research-methods | UX | **U** | user-research-methods | Add a B2B section: multiple roles, recruiting through customers, contextual inquiry, NDAs | M / H |
| 353 | Design systems | Design leads | design-systems-for-teams-that-move-fast | UX | COV | same | Same intent | — / H |
| 354 | Usability testing | UX | usability-testing | UX | COV | same | Same intent | — / H |
| 355 | Product requirements documents | Founders, PMs | website-requirements-document (websites only) | UX/WEB | **C** | /blogs/product-requirements-document | Gap for software products; links to the website RD for site projects | H / M |
| 356 | Jobs to be done | Product | none | UX | D | — | Framework topic; weaker link to enquiries; revisit | L / M |
| 357 | Feature adoption analytics | Product | product-analytics-implementation-australia (Step 3 covers feature adoption) | UX | COV | same | Same intent | — / H |
| 358 | Product-led growth for B2B SaaS | SaaS founders | saas-onboarding-optimization, reducing-saas-churn, saas-pricing-page-optimization | UX/CRO | **C** | /blogs/product-led-growth-b2b-saas | Gap: the PLG model and its trade-offs; links into existing activation, churn and pricing pages | M / M |
| 359 | UX debt | Product, UX | ux-heuristic-evaluation, ux-audit | UX | **C** | /blogs/ux-debt | Gap: identifying, logging and prioritising experience debt over time (audits are point-in-time) | M / M |
| 360 | Design-to-development handoff | Teams | design-handoff | UX | COV | same | Same intent | — / H |
| 361 | API integration strategy | Ops, IT | api-integration-australia | WEB | COV | same | Same intent | — / H |
| 362 | API versioning | Engineers, API owners | api-documentation-best-practices (versioning bullet) | WEB | **C** | /blogs/api-versioning | Gap. Verified RFC 9745 / 8594 headers; Stripe and Google patterns | M / M |
| 363 | Webhooks vs polling | Engineers | ecommerce-webhooks (webhooks only), api-integration-reliability | WEB | **U** | api-integration-reliability | Add a "Webhooks, polling or both" section | M / H |
| 364 | Partner API platform | SaaS | saas-integration-marketplace, api-documentation-best-practices, api-security-best-practices | WEB | COV | saas-integration-marketplace | Same intent | — / H |
| 365 | Integration patterns: APIs, events, queues | Architects | ecommerce-event-driven-architecture, ecommerce-queue-architecture (ecommerce) | WEB | **C** (absorbs 370) | /blogs/integration-architecture-patterns | Gap for generic business systems; covers replacing point-to-point | H / M |
| 366 | SaaS data synchronisation | Ops, engineers | customer-data-integration-australia (sync patterns), api-integration-reliability, master-data-management | WEB | COV | customer-data-integration-australia | Covered | — / H |
| 367 | OAuth 2.0 vs OpenID Connect | Engineers | api-security-best-practices, mobile-app-authentication (passing) | WEB | **C** | /blogs/oauth-vs-openid-connect | Gap; verified specs | M / M |
| 368 | Rate limiting and quotas | Engineers | api-security-best-practices, ecommerce-api-gateway, api-integration-reliability | WEB | COV | api-security-best-practices | Covered across three pages | — / M |
| 369 | Integration testing with third parties | Engineers | api-integration-reliability, automated-regression-testing | WEB | **U** | api-integration-reliability | Add "Testing integrations with third-party services" (sandboxes, contract tests, mocks, synthetic checks) | M / H |
| 370 | Replacing point-to-point integrations | IT | api-integration-australia | WEB | COV (in 365) | integration-architecture-patterns | Merged into 365 | — / M |
| 371 | Strangler fig pattern | CTOs | legacy-software-modernization-australia (one paragraph) | WEB | **C** | /blogs/strangler-fig-pattern | Engineering how-to distinct from the business-level modernisation guide | M / M |
| 372 | Modular monolith vs microservices | CTOs | ecommerce-microservices-vs-monolith (ecommerce) | WEB | **C** | /blogs/modular-monolith-vs-microservices | Generic SaaS and business apps; ecommerce page stays the ecommerce owner | M / M |
| 373 | Architecture decision records | Engineers | 7 passing mentions | WEB | D | — | Low commercial intent | L / M |
| 374 | Engineering quality gates | Engineers | devops-for-growing-businesses, automated-regression-testing, ai-code-review | WEB | COV | devops-for-growing-businesses | CI gates covered | — / M |
| 375 | Maintenance planning and budget | Owners | software-maintenance-contracts-australia, mobile-app-maintenance, website-maintenance-guide | WEB | COV | software-maintenance-contracts-australia | Same intent | — / H |
| 376 | Technical discovery before estimating | Buyers, CTOs | software-product-discovery-australia (business), software-architecture-review (existing systems) | WEB | **C** | /blogs/technical-discovery-software-projects | Gap: technical assessment that precedes an estimate. Strong buyer intent | H / M |
| 377 | Vendor handover checklist | Owners switching vendors | software-maintenance-contracts-australia, software-team-augmentation-australia | WEB | **C** | /blogs/software-vendor-handover-checklist | Gap; practical checklist; legal points flagged as needing advice | H / M |
| 378 | Dependency upgrade strategy | Engineers | open-source-software-audit, software-maintenance-contracts-australia, mobile-app-maintenance | WEB | D | — | Partly covered; revisit | L / M |
| 379 | Engineering risk registers | Delivery leads | none | WEB | D | — | Low demand evidence | L / L |
| 380 | Delivery performance metrics | Engineering managers | measure-ai-coding-impact, devops-for-growing-businesses | WEB | D | — | Same reasoning as deferred 330 | L / M |

**Totals**

| Action | Count |
|---|---|
| CREATE | 14 (covering 16 topics; 344 and 370 absorbed) |
| UPDATE | 5 topics on 4 pages (348, 350, 352, 363 + 369) |
| Covered by existing pages | 23 (including 344 and 370) |
| DEFER | 6 (346, 356, 373, 378, 379, 380) |
| REJECT | 0 |

No MERGE of existing URLs, no URL changes, no redirects and no deletions.

## 4. Cannibalisation notes

| New page | Neighbour | How they differ |
|---|---|---|
| supplier-portal-development | b2b-portal-development-australia, ai-procurement-automation | Buy side (suppliers) vs sell side (customers); portal vs AI procurement |
| asset-maintenance-management-software | field-service-management-software-australia | Internal plant and equipment vs technicians at customer sites |
| warranty-management-software-australia | ecommerce-returns-australia | Registration, claims and service network vs online returns |
| strangler-fig-pattern | legacy-software-modernization-australia | Engineering pattern vs business modernisation options |
| modular-monolith-vs-microservices | ecommerce-microservices-vs-monolith | Generic business apps and SaaS vs ecommerce platforms |
| integration-architecture-patterns | api-integration-australia, ecommerce-event-driven-architecture | Architecture styles vs how to integrate in Australia; generic vs ecommerce |
| technical-discovery-software-projects | software-product-discovery-australia, software-architecture-review | Pre-estimate technical assessment vs product validation vs review of an existing system |
| product-requirements-document | website-requirements-document | Software product vs website project |
| ux-debt | ux-heuristic-evaluation | Ongoing debt management vs a one-off evaluation method |
| product-led-growth-b2b-saas | saas-onboarding-optimization, reducing-saas-churn | Growth model overview vs specific stages |

## 5. Briefs (CREATE topics)

All briefs share these conventions:
- Australian English.
- Answer-first opening, then key takeaways.
- Decision or comparison tables and a labelled hypothetical example.
- Common mistakes, related guides and a conclusion.
- A single CTA using only existing service pages, describing ZSpace Labs as an India-based, remote-first studio.
- FAQPage schema only from visible FAQs.

No word-count targets. Metadata stays within limits: `<title>` ≤60 characters, meta description ≤158.

**341: Supplier portal development**
- **H1:** "Supplier Portal Development: Purchase Orders, Approvals and Supplier Onboarding"
- **Outline:**
  - Answer
  - Who uses it and why
  - Core workflows (onboarding and verification, POs and acknowledgements, ASNs and delivery, invoices and matching, payment status, documents and compliance)
  - Build vs buy (ERP supplier modules, procurement suites, custom)
  - Integrations (ERP, accounting, Peppol)
  - Australian considerations: ABN Lookup; the Payment Times Reporting Scheme for entities over $100m, which makes payment status visible; modern slavery reporting for large entities (supplier questionnaires); privacy of supplier contacts
  - Security (supplier user roles, MFA, bank detail change controls against invoice fraud)
  - Example, mistakes
- **Services:** WEB, AI.

**345: Asset maintenance management software**
- **Outline:**
  - Answer
  - Asset register and hierarchy
  - Preventive vs reactive vs condition-based maintenance
  - Work orders (lifecycle, roles, mobile, offline)
  - Parts and inventory
  - Inspections and compliance records (WHS duties for plant, phrased generally)
  - Sensors and IoT
  - Build vs buy (CMMS and EAM products)
  - Integrations (ERP, accounting, FSM)
  - Metrics (planned vs reactive share, MTBF and MTTR defined, backlog)
  - Example, mistakes

**347: Warranty management software (Australia)**
- **Outline:**
  - Answer
  - Consumer guarantees vs warranties against defects vs extended warranties
  - The mandatory text (ACCC)
  - Product registration (optional, never a condition of guarantee rights)
  - Claims workflow (intake, proof of purchase, triage, repair, replace, refund)
  - Service agents and parts
  - Supplier recovery (manufacturer indemnity)
  - Data and privacy
  - Reporting
  - Example, mistakes
- **Not legal advice.**

**349: Business rules engine**
- **Outline:**
  - Answer
  - What rules engines and decision tables are
  - When to separate rules (frequent changes by business owners, regulated logic, many products) and when not to (simple logic, developer-owned)
  - Options (code with configuration tables, DMN-based engines, workflow tool rules, feature flags)
  - Governance (versioning, testing, audit, approvals)
  - Performance and explainability
  - Example, mistakes

**355: Product requirements document**
- **Outline:**
  - Answer
  - PRD vs specification vs user stories
  - Template (problem, users, outcomes and metrics, scope and non-goals, user journeys, functional requirements, non-functional requirements, data and integrations, risks and assumptions, open questions)
  - Acceptance criteria
  - Keeping it alive
  - Who writes it
  - AI-assisted drafting caveats
  - Example, mistakes

**358: Product-led growth for B2B SaaS**
- **Outline:**
  - Answer
  - What PLG is (free trial vs freemium vs reverse trial)
  - When it fits and when sales-led fits better
  - Activation and the product-qualified lead
  - Pricing and packaging
  - Expansion
  - Product-led sales hybrid
  - Instrumentation
  - Australian notes (GST display, online cancellation rules from 1 July 2027)
  - Example, mistakes
- **No benchmarks.**

**359: UX debt**
- **Outline:**
  - Answer
  - Definition and causes
  - Types (inconsistency, workflow friction, accessibility debt, content debt, outdated patterns)
  - How to find it (support tickets, analytics, heuristic reviews, accessibility audits, usability tests)
  - UX debt log template
  - Prioritisation (impact × frequency × effort)
  - Fitting it into roadmaps
  - Preventing it (design system, definition of done)
  - Example

**362: API versioning**
- **Outline:**
  - Answer
  - What counts as breaking
  - Strategies (URL path, header or media type, date-based as in Stripe, no versions with additive evolution)
  - Deprecation process with Deprecation (RFC 9745) and Sunset (RFC 8594) headers
  - Changelogs
  - Supporting old mobile app versions
  - Testing compatibility (contract tests)
  - Example, mistakes

**365: Integration architecture patterns**
- **Outline:**
  - Answer
  - The point-to-point problem
  - Patterns: direct API calls, webhooks and events, message queues, publish/subscribe, integration platform (iPaaS), hub or ESB, batch file transfers, shared database as an anti-pattern
  - Comparison table
  - Choosing per flow
  - Migration path away from point-to-point
  - Governance (catalogue, owners, monitoring)
  - Example

**367: OAuth 2.0 vs OpenID Connect**
- **Outline:**
  - Answer: OAuth for authorisation (access tokens), OIDC for authentication (ID tokens)
  - Comparison table
  - Flows: authorisation code with PKCE for web, mobile and SPA; client credentials for machine-to-machine; implicit and password flows deprecated (RFC 9700)
  - Tokens (access, refresh, ID; JWT validation)
  - SAML for enterprise SSO
  - Common mistakes (using access tokens as proof of identity)
  - Choosing an identity provider vs building
  - Example

**371: Strangler fig pattern**
- **Outline:**
  - Answer
  - How it works (facade or proxy, route by route, retire)
  - Prerequisites
  - Steps
  - Data strategies (shared database temporarily, sync, CDC)
  - Anti-corruption layer
  - Testing and parallel runs
  - When it does not fit
  - Example

**372: Modular monolith vs microservices**
- **Outline:**
  - Answer
  - Definitions
  - Comparison table
  - Prerequisites for microservices (Fowler)
  - Designing module boundaries
  - Extracting a service later
  - Team size and Conway's law
  - Example

**376: Technical discovery for software projects**
- **Outline:**
  - Answer
  - Why estimates fail without it
  - What it assesses: existing systems and code, integrations and APIs, data (volume, quality, migration), non-functional requirements, security and compliance, hosting, technical risks and spikes
  - Outputs (architecture outline, risk list, estimate ranges with assumptions, phased plan)
  - Duration and participants (no prices)
  - Questions to prepare
  - Example

**377: Software vendor handover checklist**
- **Outline:**
  - Answer
  - When to use it (changing vendors, insourcing, end of contract)
  - Checklist by area: code and repositories, IP and licences (legal advice), environments and infrastructure access, credentials and secrets rotation, domains, DNS and certificates, third-party accounts and billing, app store accounts, data and backups, documentation and runbooks, CI/CD, monitoring, open issues
  - Knowledge transfer sessions
  - Verifying the handover (build from scratch, deploy, restore)
  - Example

## 6. Updates

| Topic | Page | Change |
|---|---|---|
| 348 | inventory-management-software-australia | Section "Demand forecasting and replenishment" plus an FAQ |
| 350 | business-intelligence-dashboards-australia | Section "Client and partner reporting portals" plus an FAQ |
| 352 | user-research-methods | Section "Research for B2B and complex workflow software" plus an FAQ. Keeps the page's US spelling |
| 363 + 369 | api-integration-reliability | Sections "Webhooks, polling or both" and "Testing integrations with third-party services", plus an FAQ |

## 7. Roadmap

1. 376, 377, 341, 347 (buyer and commercial intent closest to services)
2. 365, 362, 367, 371, 372 (engineering)
3. 345, 349, 355, 358, 359
4. The four updates

Revisit the deferred topics with Search Console data.
