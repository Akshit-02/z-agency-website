# UK Batch 481–530: Audit, Decision Matrix and Briefs

Prepared 2026-10-10 on branch `seo/australia-content-batches`. Research date: 2026-10-10. This document records the audit, research and proposals. Completed work is reported separately in [`blogs-481-530-uk-implementation.md`](./blogs-481-530-uk-implementation.md).

## 1. Executive summary

Before this batch the site had 1,009 posts and **no UK-targeted pages**. HMRC, the NHS, the Data (Use and Access) Act, subject access requests and the FCA were never mentioned. Most generic topics in the backlog already have owner pages from earlier global and Australian batches.

| Outcome | Count | Topics |
|---|---|---|
| CREATE | 7 | 481, 482, 492, 494, 501, 505, 528 |
| MERGE into a new page | 5 | 491 → 492, 495 → 494, 502 → 501, 504 → 505, 514 → 482 (MTD practice workflow only) |
| UPDATE an existing page | 1 | 499 → `ai-governance-framework` (UK section) |
| DEFER | 24 | Regulated finance (483–489), niche or weak-fit operations, public sector, UK variants needing more research |
| REJECT (covered by an existing owner, or too weak) | 13 | 490, 498, 500, 515, 518, 519, 521, 522, 523, 525, 527, 529, 530 |

**Selection principle.** A UK page exists only where UK law, regulators or national systems change what gets built. Examples are MTD and HMRC APIs, FCA open banking models, UK GDPR and DUAA subject access rules, NHS identity and assurance, and gas, electrical and Awaab's Law duties. Two generic gaps with no owner and clear B2B relevance were also approved: joiner-mover-leaver automation and SLOs/error budgets. Both use generic slugs in British English, with no fake UK angle.

No URL changes, redirects or deletions are proposed.

No Search Console, analytics or keyword-tool access is configured in the repository or this session. All demand assessments are qualitative. No volumes, positions, CTRs or forecasts are given.

## 2. Website baseline

- **Stack:** Next.js 16.3.5 App Router. Posts are TypeScript `BlogPost` arrays in `src/lib/blog-data-*.ts`, registered in `src/lib/blog-data.ts` and statically generated at `/blogs/[slug]`. There is no CMS, so the repository is the source of truth.
- **Metadata:**
  - `seoTitle` is the `<title>` (with " — ZSpace Labs" appended), `excerpt` the meta description, `title` the only H1.
  - The canonical is `https://www.zspace.in/blogs/{slug}`.
  - JSON-LD: Organization, WebSite, BlogPosting, BreadcrumbList, and FAQPage built from visible FAQs.
- **Sitemap:** `src/app/sitemap.ts` sets `lastModified = updated ?? date`. Robots: index, follow.
- **Links:** inline `[[/blogs/slug|anchor]]` and `[[https://…|anchor]]` markup, plus `relatedSlugs` and `relatedServiceSlugs`.
- **Services (verified):** website-development, mobile-app-development, ai-automation, ui-ux-design, shopify-development, cro-audit.
- **Company positioning (verified):** `src/lib/site.ts`, `/about` and `public/llms.txt`.
  - Remote-first, serving India and working with clients globally.
  - No published office, case studies, testimonials, logos, awards or certifications.
  - New UK pages therefore state "remote-first … works with clients globally … no UK office".
- **Location pages:** none. Market content lives in articles.
- **Checks available:** `tsc`, `eslint` and `next build`, plus scratchpad scripts for link, duplicate, excerpt and length checks. There is no automated test suite.
- **Baseline QA before changes:** 1,009 posts, 0 broken internal links, no duplicate titles, H1s or meta descriptions. One existing defect was found: the `ai-governance-framework` meta description was 241 characters. It was fixed in this batch.

## 3. Research sources (accessed 2026-10-10)

| Claim | Source | Status |
|---|---|---|
| UK Payments Initiative scheme for commercial VRPs announced 2 June 2026; FCA to consult on a long-term framework by end 2026, subject to legislation; supports an independent standards body; open finance roadmap | FCA statement, 2 June 2026 | Verified (primary) |
| Wave 1 sectors (utilities, financial services, government payments); Wave 2 later in 2026 | Open Banking Tracker, trade press | Secondary; stated loosely ("such as") |
| 90-day reauthentication replaced by TPP consent reconfirmation where the bank applies the Article 10A exemption | FCA PS21/19 (Nov 2021) and law-firm summaries | Verified (primary page 200) |
| CMA confirmed Open Banking Roadmap complete (Sept 2024) | Open Banking Limited news | Verified |
| MTD for Income Tax from 6 April 2026 above £50,000; £30,000 April 2027; £20,000 April 2028; first update due 7 Aug 2026; no penalty points for late quarterly updates in year one; £200 at 4 points; 864,000+ in scope | GOV.UK HMRC press release, 23 July 2026 | Verified (primary) |
| Quarterly deadlines 7 Aug / 7 Nov / 7 Feb / 7 May; qualifying income is gross trade plus property income | Accountancy sources, consistent with HMRC | Secondary, consistent |
| Fraud prevention headers legally required for MTD VAT and ITSA APIs; production credentials depend on HMRC requirements, including transaction monitoring | HMRC Commissioners' Directions (draft), Developer Hub | Primary (draft) and Developer Hub (200) |
| Copy and paste is not a digital link | VAT Notice 700/22 | Primary (200); wording from established knowledge |
| DUAA Royal Assent 19 June 2025; main Part 5 data protection changes in force 5 Feb 2026 (Commencement No. 6 Regs, made 29 Jan 2026); reasonable and proportionate search; stop the clock | DLA Piper, Lexology, others | Secondary (consistent). Commencement of the search provision itself differs between sources, so the page says "in force" |
| SAR time limits, clock start, pause and resume, two-month extension, format, refusals | ICO "A guide to subject access", updated 16 July 2026 | Verified (primary) |
| Complaints duty (s.164A DPA 2018) from 19 June 2026; acknowledge within 30 days; outcome without undue delay; any channel | Law-firm summaries of ICO guidance (Lewis Silkin, DLA Piper, Mishcon) | Secondary (legislation.gov.uk not fetchable) |
| ADM reforms commenced 5 Feb 2026; ICO ADM guidance consultation closed 29 May 2026; regulations (SI 2026/425) require an ICO statutory AI/ADM code | DLA Piper, Burges Salmon, bratby.law, info-gov | Secondary; the page says "check the ICO" |
| No AI-specific UK statute as of Oct 2026 | Bird & Bird tracker, others | Secondary; stated as status, not prediction |
| DTAC refreshed (about 25% fewer questions, de-duplicated with the DSPT); full transition by 6 April 2026; CSO training requirement dropped | NHS Innovation Service (Mar 2026), HTN | Verified (primary) |
| DCB0129 / DCB0160 roles; CSO; standards under review | NHS England long-read, AI and Digital Regulations Service | Primary (from search results; one page timed out) |
| PDS FHIR is the recommended interface; digital onboarding; cannot register patients at a GP (use PCRM) | NHS service manual, NHS England pages (403 to automated fetch) | Partly verified |
| IM1 pairing: SCAL, model interface licence, Pairing Integration Pack; GP suppliers | NHS England IM1 pages (mirrors) | Secondary; supplier names omitted because sources conflict |
| Gas: annual check; 10–12 month window keeps the deadline; copy to tenants within 28 days; new tenants before move-in; keep until two further checks | HSE gas safety records page | Verified (primary) |
| Electrical: 5-yearly; England PRS; social rented for new tenancies from 1 Dec 2025, existing by 1 Nov 2026; reports within 28 days; remedial within 28 days | GOV.UK guide (5-yearly confirmed); Ashfords, Browne Jacobson, CIH | Mixed primary and secondary |
| Awaab's Law Phase 1 from 27 Oct 2025 (24h / 10 working days / 3 / 5 working days / 12 weeks); Phase 2 30 Nov 2026 (draft affirmative regulations) | GOV.UK campaign page, Clyde & Co, other law firms | Primary plus secondary; Phase 2 flagged "check GOV.UK" |
| Renters' Rights Act tenancy reforms 1 May 2026; PRS database from Dec 2026 (phased); ombudsman about 2028 | Trowers, Gowling, Forsters | Secondary; hedged on page |
| SCIM RFC 7643/7644; Entra lifecycle workflows; Cyber Essentials | rfc-editor.org, learn.microsoft.com, ncsc.gov.uk | Verified |
| Error budget arithmetic; multiwindow, multi-burn-rate thresholds (14.4 / 6 / 1); error budget policy | sre.google SRE book and workbook | Verified |

Fetch problems: legislation.gov.uk returned an empty body or 202, digital.nhs.uk returned 403, the HSE landlord subpages returned 404 (the records page worked), and digitalregulations.innovation.nhs.uk timed out.

## 4. UK search-intent and competitor observations

The search results came from a US-located search tool, so these are qualitative. Rankings were not measured.

- **MTD integration:** results are dominated by HMRC/GOV.UK, accountancy bodies (ICAS, TaxAssist) and software vendors (FreeAgent, TaxCalc, Avalara). Vendor pages describe their own product. **Gap:** a neutral guide for teams with custom operational systems deciding between feeding recognised software and building HMRC submission, covering fraud headers, digital links and per-source quarterly flows.
- **UK open banking:** FCA, Open Banking Limited, trade press (Open Banking Expo) and provider marketing. **Gap:** a product-architecture guide that sets out the regulated-provider, agent and own-permissions decision and treats consent, status, refunds and reconciliation together.
- **SAR automation and DUAA:** law-firm briefings and privacy-platform vendors. **Gap:** an engineering view (data map → connectors → proportionality evidence → redaction review → complaints) that reflects the 2026 ICO guidance.
- **NHS integration:** NHS England developer pages plus consultancies focused on DTAC and DCB0129. **Gap:** one decision table mapping needs to routes and assurance, with patient matching and PAS feeds treated as clinical safety concerns.
- **Property compliance:** compliance SaaS vendors and law firms writing about Awaab's Law. **Gap:** a data model and rules-engine view for organisations building or integrating, with nation differences explicit.
- **JML and SLOs:** mature global topics (identity vendors, Google SRE). Value comes from practical synthesis that links into existing site clusters (SSO, roles, monitoring, deployments).

## 5. Decision matrix (all 50)

**Legend:**
- Actions: C = CREATE, U = UPDATE, M = MERGE (into the named page), D = DEFER, R = REJECT.
- Cannibalisation risk: Lo / Me / Hi. Priority (Pri) and confidence (Conf): H / M / L, both qualitative.
- Service codes: WEB = website-development, MOB = mobile-app-development, AI = ai-automation.
- Effort: S/M/L.

### Cluster A: Fintech and financial operations

| # | Topic | Action | Existing overlap | Primary intent / keyword theme | UK relevance evidence | Service | Cannib. | Pri / Conf | Effort | Rationale and next action |
|---|---|---|---|---|---|---|---|---|---|---|
| 481 | Open banking integration UK | **C** `open-banking-integration-uk` | consumer-data-right-integration-australia (different regime), payment-reconciliation-automation | Commercial-informational: "open banking integration UK", "pay by bank API" | PSRs 2017, FCA PS21/19, UKPI cVRP launch June 2026 | WEB/MOB | Lo | H / M | M | Regime differs materially from CDR; strong product-engineering fit |
| 482 | Making Tax Digital integration | **C** `making-tax-digital-software-integration` | accounting-software-integration-australia (AU) | Commercial-informational: "MTD API integration", "Making Tax Digital software" | MTD ITSA from 6 Apr 2026, HMRC APIs | WEB/AI | Lo | H / H | M | UK-only requirement with live deadlines |
| 483 | Regulatory reporting (FS) | D | — | Niche B2B | FCA/PRA data collection; needs specialist research | WEB | Lo | L / L | L | Specialist buyers; weak fit; revisit with evidence |
| 484 | Loan origination | D | ai-agents-in-insurance (underwriting mentions) | Commercial | FCA CONC, Consumer Duty | WEB | Lo | M / L | L | Regulated credit; legal research needed (consistent with AU lending deferral) |
| 485 | Financial crime monitoring | D | ecommerce-fraud-detection | Commercial | MLR 2017, sanctions | WEB/AI | Me | M / L | L | Needs primary AML sources; high error risk |
| 486 | Invoice finance platform | D | ai-invoice-processing | Niche | — | WEB | Lo | L / L | M | Low demand evidence |
| 487 | Insurance broker software | D | ai-agents-for-insurance-brokers-and-agencies, insurance-claims-software-australia | Commercial | FCA ICOBS | WEB | Me | L / L | M | Partly covered; niche |
| 488 | Pension administration | D | — | Niche | Pensions dashboards (dates not verified this session) | WEB | Lo | L / L | L | Specialist vendor market; weak service fit |
| 489 | Mortgage broker CRM | D | custom-crm-development-australia | Commercial | FCA MCOB | WEB | Me | L / L | M | Generic CRM content exists; regulatory detail unverified |
| 490 | Multi-bank reconciliation | R | payment-reconciliation-automation, api-integration-reliability | — | — | WEB | Hi | — | — | Covered; a new page would cannibalise |

### Cluster B: Privacy, cybersecurity and enterprise trust

| # | Topic | Action | Existing overlap | Intent | UK relevance | Service | Cannib. | Pri / Conf | Effort | Rationale |
|---|---|---|---|---|---|---|---|---|---|---|
| 491 | UK GDPR data mapping | **M** → 492 | privacy-by-design-software-australia (retention) | Informational | Art. 30 records | WEB | Me | — | — | A data map is the prerequisite step of SAR automation; one stronger page |
| 492 | SAR automation | **C** `subject-access-request-automation-uk` | none ("subject access" had 0 mentions) | Commercial-informational: "DSAR automation", "subject access request software" | DUAA 2025, ICO guidance July 2026 | WEB/AI | Lo | H / M | M | Clear UK gap with fresh legal change |
| 493 | Third-party cyber risk | D | ai-agent-vendor-assessment, software-supply-chain-security | Commercial | Cyber Security and Resilience Bill (status not verified) | WEB | Me | M / L | M | Revisit when the bill's status is confirmed |
| 494 | JML automation | **C** `joiner-mover-leaver-automation` (generic) | enterprise-sso-implementation (SCIM section) | Informational-commercial: "joiner mover leaver process automation" | Generic; Cyber Essentials pointer | WEB/AI | Me | M / H | M | No owner; links SSO and roles clusters |
| 495 | Identity governance | **M** → 494 | saas-roles-and-permissions | Informational | — | WEB | Me | — | — | Access reviews and SoD fit as sections of 494 |
| 496 | Security incident case management | D | cyber-incident-response-plan-australia, ai-agent-incident-response | Commercial | ICO 72-hour breach reporting, NCSC | WEB | Me | M / M | M | Better as a UK incident response guide (see next 10) |
| 497 | Data classification | D | privacy-by-design-software-australia | Informational | — | WEB | Me | L / M | M | Low demand evidence |
| 498 | CSPM workflows | R | cloud-security-posture-review-australia | — | — | WEB | Hi | — | — | Covered; checks are country-neutral |
| 499 | AI governance software | **U** `ai-governance-framework` | ai-governance-framework, ai-agent-governance, ai-governance-australia | Informational | DUAA ADM reforms, ICO code | AI | Hi if new | H / M | S | Added a UK section rather than a duplicate page |
| 500 | Securing AI agents | R | ai-agent-access-control, ai-agent-guardrails, ai-agent-governance, ai-coding-agent-security | — | — | AI | Hi | — | — | Saturated |

### Cluster C: Healthcare, property and public services

| # | Topic | Action | Existing overlap | Intent | UK relevance | Service | Cannib. | Pri / Conf | Effort | Rationale |
|---|---|---|---|---|---|---|---|---|---|---|
| 501 | NHS integration | **C** `nhs-integration-digital-health-products` | healthcare-software-integration-australia (AU) | Commercial-informational: "NHS API integration", "NHS login integration", "DTAC" | NHS login, PDS FHIR, DTAC 2026 | WEB/MOB | Lo | H / M | L | Nationally specific systems and assurance |
| 502 | PAS integration | **M** → 501 | — | Informational | Trust integration engines | WEB | Me | — | — | Covered as a section; too thin alone |
| 503 | Social care case management | D | — | Commercial | DSCR assured supplier list, CQC | WEB | Lo | L / L | L | Specialist procurement; research needed |
| 504 | Tenant self-service portal | **M** → 505 | customer-portal-development-australia, property-management-software-australia | Commercial | Awaab's Law reporting | WEB/MOB | Me | — | — | Repairs portal section in 505 |
| 505 | Property compliance | **C** `property-compliance-management-software-uk` | property-management-software-australia, asset-maintenance-management-software | Commercial-informational: "property compliance software", "gas safety certificate tracking" | Gas/EICR rules, Awaab's Law, Renters' Rights Act | WEB/MOB | Lo | H / M | M | Strongly UK-specific obligations |
| 506 | Estate agency CRM integration | D | real-estate-website-development, ai-agents-in-real-estate | Commercial | Portal feeds, material information | WEB | Me | M / L | M | Portal feed specs partner-gated; next 10 |
| 507 | Student services case management | D | lms-development-australia | Niche | — | WEB | Lo | L / L | M | Weak fit |
| 508 | Citizen service requests | D | ai-agents-in-government | Commercial | Council procurement | WEB | Lo | L / L | M | Buyers procure via frameworks; weak fit |
| 509 | Public sector supplier portal | D | supplier-portal-development | Niche | Procurement Act 2023 (not verified this session) | WEB | Me | L / L | M | Generic owner exists |
| 510 | Charity grant management | D | nonprofit-software-development-australia | Commercial | Charity Commission | WEB | Me | M / L | M | Possible UK update later |

### Cluster D: B2B operations and professional services

| # | Topic | Action | Existing overlap | Intent | UK relevance | Service | Cannib. | Pri / Conf | Effort | Rationale |
|---|---|---|---|---|---|---|---|---|---|---|
| 511 | Recruitment agency software | D | recruitment-software-development-australia, ai-recruitment-automation | Commercial | Right-to-work digital checks | WEB | Hi | M / L | M | Owner exists; UK right-to-work update candidate |
| 512 | PSA software | D | ai-agents-for-professional-services | Commercial | — | WEB | Me | L / L | M | Low evidence |
| 513 | Legal matter management | D | ai-automation-legal | Commercial | SRA rules | WEB/AI | Me | M / L | M | Research needed |
| 514 | Accountancy practice portals | **M** → 482 (MTD agent workflow) | customer-portal-development-australia | Commercial | MTD agents | WEB | Me | — | — | Agent workflow section in 482; generic portal covered |
| 515 | Proof of delivery | R | logistics-software-development-australia, ecommerce-delivery-tracking | — | — | MOB | Hi | — | — | Covered |
| 516 | Yard management | D | logistics-software-development-australia | Niche | — | WEB | Lo | L / L | M | Niche |
| 517 | Manufacturing traceability | D | manufacturing-software-integration, quality-management-software | Commercial | — | WEB | Me | M / M | M | Possible update to the owners |
| 518 | Field service scheduling | R | field-service-management-software-australia, route-optimization-software | — | — | MOB | Hi | — | — | Covered |
| 519 | Contract cleaning operations | R | field service, quality management | — | — | — | Me | — | — | Niche; weak commercial relevance |
| 520 | FM helpdesk | D | asset-maintenance-management-software | Commercial | — | WEB | Me | L / M | M | Low priority |

### Cluster E: AI, cloud engineering and digital products

| # | Topic | Action | Existing overlap | Intent | UK relevance | Service | Cannib. | Pri / Conf | Effort | Rationale |
|---|---|---|---|---|---|---|---|---|---|---|
| 521 | AI workflow automation UK | R | when-to-automate-a-business-process, which-processes-suit-ai-agents, ai-workflow-automation | — | No UK-specific purpose | AI | Hi | — | — | Covered |
| 522 | AI document automation | R | intelligent-document-processing, ai-document-extraction, ai-automation-legal | — | — | AI | Hi | — | — | Covered |
| 523 | AI-assisted development metrics | R | ai-native-engineering-team, ai-generated-code-technical-debt, ai-coding-policy | — | — | AI | Hi | — | — | Covered |
| 524 | Choosing an AI model | D | llm-routing, ai-model-evaluation, small-language-models, llm-self-hosting, private-ai-development-australia | Informational | — | AI | Hi | M / M | M | No single hub, but five overlapping pages; consider a consolidating hub later |
| 525 | Human approval in AI | R | human-in-the-loop-ai, ai-agent-guardrails | — | — | AI | Hi | — | — | Covered |
| 526 | Cloud cost allocation | D | cloud-cost-optimization-australia | Informational | — | WEB | Me | M / M | S | Better as an update to the owner |
| 527 | Dependency mapping | R | cloud-migration-australia, technical-discovery-software-projects | — | — | WEB | Hi | — | — | Covered |
| 528 | SLOs and error budgets | **C** `slos-and-error-budgets` (generic) | application-monitoring-observability (mentions SLOs) | Informational: "SLO error budget", "burn rate alerting" | Generic | WEB | Me | M / H | M | No owner; supports SaaS engineering cluster |
| 529 | Integration platform for SaaS | R | saas-integration-marketplace, integration-architecture-patterns | — | — | WEB | Hi | — | — | Covered |
| 530 | Product discovery UK | R | software-product-discovery-australia, technical-discovery-software-projects, product-requirements-document | — | No UK-specific purpose | WEB | Hi | — | — | Covered |

## 6. Cannibalisation, merge and update recommendations

- **No existing URLs merged or redirected.** All merges fold proposed topics into new pages.
- **AU/UK pairs are differentiated by regime, not by name swap:**
  - CDR vs UK open banking: accreditation vs FCA models.
  - AU accounting integration vs MTD.
  - AU healthcare integration vs NHS.
  - AU property management vs UK statutory compliance.
  - Each AU page links to its UK counterpart and vice versa, so search engines and readers see distinct purposes.
- **`ai-governance-framework`** remains the single generic owner. UK specifics were added as a section rather than a new `ai-governance-uk` page.
- **Future updates rather than new pages:**
  - Cloud cost allocation (526) → `cloud-cost-optimization-australia`.
  - Traceability (517) → `manufacturing-software-integration`.
  - Grant management (510) → `nonprofit-software-development-australia`.
  - UK right-to-work checks (511) → `recruitment-software-development-australia`.

## 7. Briefs for approved items

Each brief lists the essentials. The pages implement them. Title tags are `seoTitle` with the site suffix. Canonical is the self URL for all pages. Structured data: BlogPosting + BreadcrumbList + FAQPage from visible FAQs (site template).

### 481 Open banking integration in the UK
- **Slug, H1, title:** `open-banking-integration-uk`. H1 "Open Banking Integration in the UK: APIs, Consent Flows and Product Architecture". Title "Open Banking Integration in the UK: A Product Guide".
- **Intent and audience:** commercial-informational, for product and engineering leads at fintechs, SaaS, lenders and utilities.
- **Central answer:** consent → bank redirect → data or payment via a regulated provider, and decide the FCA model first.
- **Outline:**
  - AIS/PIS/VRP/cVRP table.
  - FCA operating models table.
  - Consent journey checklist, including 90-day reconfirmation.
  - Reference architecture with an illustrative consent record.
  - Status, refunds and reconciliation.
  - Reliability.
  - Hypothetical B2B invoice example.
  - UK vs CDR.
  - What is changing.
  - Mistakes, sources.
- **UK facts needing verification:** UKPI wave scope; FCA end-2026 consultation; Consumer Duty applicability, which depends on the firm.
- **Internal links:**
  - Out: payment-reconciliation-automation, api-integration-reliability, consumer-data-right-integration-australia.
  - In: CDR and payment reconciliation pages.
- **CTA:** web and mobile services, framed with "work alongside your regulated provider".
- **Risks:** regulatory overstatement. The page avoids saying when permissions are needed and refers readers to legal advice.
- **Acceptance:** no licence claims for ZSpace; dates sourced.

### 482 Making Tax Digital software integration
- **Slug, title:** `making-tax-digital-software-integration`. Title "Making Tax Digital Software Integration: A Guide".
- **Intent and audience:** commercial-informational, for finance leads, accounting and property platforms, and practices.
- **Central answer:** most organisations should feed recognised software. Building direct HMRC submission means OAuth, fraud headers and production approval.
- **Outline:**
  - Scope table (VAT; ITSA £50k/£30k/£20k).
  - Three integration approaches.
  - Direct API checklist.
  - Digital links.
  - Quarterly workflow table.
  - Agents and practice portals (absorbs 514).
  - Hypothetical lettings platform.
  - Mistakes, sources.
- **Internal links:**
  - Out: accounting-software-integration-australia, ai-agents-in-accounting-and-tax.
  - In: both of those pages.
- **Risks:** tax advice. Disclaimer added; no tax treatment discussed.

### 492 Subject access request automation in the UK (absorbs 491)
- **Slug, title:** `subject-access-request-automation-uk`. Title "Subject Access Request Automation in the UK: A Guide".
- **Intent and audience:** commercial-informational, for DPOs, operations and engineering.
- **Central answer:** data map → clock → connectors → proportionality evidence → reviewed redaction → secure response → complaints.
- **Outline:**
  - DUAA changes.
  - Data map table.
  - Workflow and clock table, plus an illustrative clock-event type.
  - Search evidence.
  - Redaction.
  - Delivery.
  - Complaints (s.164A).
  - Build vs buy.
  - Hypothetical dental group.
  - Mistakes, sources.
- **Facts:** DUAA commencement dates (some secondary); ICO guide dated 16 July 2026.
- **Internal links:**
  - Out: ai-data-privacy, privacy-by-design-software-australia.
  - In: both, plus ai-governance-framework.
- **Risks:** legal advice. Hedged, and people retain all decisions.

### 494 Joiner-mover-leaver automation (absorbs 495)
- **Slug, title:** `joiner-mover-leaver-automation`. Title "Joiner-Mover-Leaver Automation: Access Across Systems".
- **Outline:**
  - Event table.
  - Architecture (HR → IdP → SCIM).
  - Role model.
  - Leaver checklist.
  - Access reviews and SoD table.
  - Framework evidence.
  - Hypothetical example.
  - Mistakes.
- **Internal links:**
  - Out: enterprise-sso-implementation, saas-roles-and-permissions.
  - In: both.

### 501 NHS integration for digital health products (absorbs 502)
- **Slug, title:** `nhs-integration-digital-health-products`. Title "NHS Integration for Digital Health Products: A Guide".
- **Outline:**
  - Needs-to-routes table (NHS login, PDS FHIR, IM1/GP Connect, e-RS, trust engines, CIS2).
  - Assurance table (onboarding, DTAC, DSPT, DCB0129/0160, MHRA, data protection).
  - Patient matching.
  - PAS workflows.
  - Clinical safety.
  - Devolved nations.
  - Hypothetical physio app.
  - Mistakes.
- **Risks:**
  - The page states that ZSpace does not provide CSO services.
  - DCB standards are under review.
  - Third-party DTAC v2 claims are flagged as unconfirmed.
- **Internal links:**
  - Out: integration-architecture-patterns, healthcare and telehealth AU pages (via relatedSlugs).
  - In: healthcare-software-integration-australia, telehealth-app-development-australia.

### 505 Property compliance management software in the UK (absorbs 504)
- **Slug, title:** `property-compliance-management-software-uk`. Title "Property Compliance Software in the UK: A Build Guide".
- **Outline:**
  - England streams table.
  - Awaab's Law timescales table, with a Phase 2 note.
  - Repairs portals (504).
  - PRS changes.
  - Data model.
  - Contractor capture (EICR codes).
  - Nations.
  - Hypothetical housing association.
  - Mistakes.
- **Internal links:**
  - Out: asset-maintenance-management-software, intelligent-document-processing.
  - In: property-management-software-australia, asset-maintenance-management-software.
- **Risks:** legal and building safety advice. Disclaimers; nation differences stated without detailed claims.

### 528 SLOs and error budgets
- **Slug, title:** `slos-and-error-budgets`. Title "SLOs and Error Budgets for SaaS Teams: A Practical Guide".
- **Outline:**
  - Definitions table.
  - SLI selection.
  - Budget arithmetic table and illustrative PromQL.
  - Burn-rate alert table (SRE workbook).
  - Policy.
  - Multi-tenant.
  - Releases.
  - Hypothetical example.
  - Mistakes.
- **Internal links:**
  - Out: application-monitoring-observability, zero-downtime-deployments, feature-flag-implementation, scaling-saas-applications, multi-tenant-saas-architecture.
  - In: application-monitoring-observability, zero-downtime-deployments.

### 499 Update: `ai-governance-framework`
- Add "UK Context: Data Protection Law and Sector Regulators":
  - No AI statute.
  - DUAA ADM reforms from 5 Feb 2026, with safeguards.
  - ICO ADM guidance consultation and statutory code.
  - Inventory implications, with a link to the SAR page.
- Bump `updated`; shorten the 241-character excerpt to 160.

## 8. Recommended next 10 opportunities (proposals, not done)

1. **UK cyber incident response and breach reporting.** ICO 72-hour reporting and NCSC. Distinct from the AU page because of the different regulator and thresholds. Verify the Cyber Security and Resilience Bill's status first.
2. **UK right-to-work checks in recruitment software.** Certified IDSPs and digital checks, as an update to `recruitment-software-development-australia` or a UK section.
3. **Estate agency portal feeds and material information.** Needs Rightmove/Zoopla feed documentation access and the NTSELAT guidance.
4. **UK cookie and analytics consent after DUAA.** Statistical-cookie exemption with opt-out. Check overlap with `first-party-data-strategy-australia` and analytics pages first.
5. **Choosing an AI model (524).** A consolidating hub linking five existing pages, but only if internal linking shows readers missing a decision entry point.
6. **Cloud cost allocation by tenant (526).** As an update to `cloud-cost-optimization-australia`.
7. **Selling software to the UK public sector.** Procurement Act 2023, the Central Digital Platform and G-Cloud, verified against GOV.UK. Relevant to the studio's own UK go-to-market as well as to buyers.
8. **Charity grant management UK (510).** As a section in `nonprofit-software-development-australia`, or a UK page if Charity Commission reporting materially changes the build.
9. **Manufacturing traceability (517).** As an update to `manufacturing-software-integration`.
10. **UK web accessibility.** Public Sector Bodies Accessibility Regulations 2018 and the Equality Act. Check overlap with `website-accessibility-australia` and `website-accessibility-guide` first.

Before any of these: connect Search Console for zspace.in so decisions can use real query data.
