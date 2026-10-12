# Australia Batch 141–160: Audit, Research and Content Decisions

Prepared 2026-10-09, before any content changes. Implementation results are in `blogs-141-160-australia-implementation.md`.

## 1. Access and limitations

The same conditions as batch 121–140 apply. See `australia-batch-121-140-audit.md` §1–2 for the repository and template description.

- **Content library:** all 906 posts live in `src/lib/blog-data-*.ts`. There is no external CMS.
- **No external data sources:**
  - No Search Console, GA4 or keyword-tool access.
  - No crawl exports.
  - Australian SERPs could not be observed directly; web search is US-hosted.
- **Keywords:** every keyword below is a **hypothesis**. No volumes, difficulty, CPC or rankings are stated anywhere.
- **Government sources:** many gov.au sites block automated fetches. These include ATO, ACCC, cyber.gov.au, NHVR and health.gov.au. Their facts are taken from search summaries of the official pages and are hedged in the text.
- **Uncommitted work:** batch 121–140 is still uncommitted in the working tree. This batch builds on it.

## 2. Overlap found

| # | Topic | Existing coverage |
|---|---|---|
| 141 | Construction management software | `ai-agents-in-construction`, `ai-agents-in-construction-project-controls` (AI-agent angle only). No software build/buy page |
| 142 | Field service management | None. Adjacent: `booking-system-development-australia`, `workflow-digitization-australia` |
| 143 | Inventory software | `ecommerce-inventory-management-integration`, `oms-vs-ims` (ecommerce sync, generic) |
| 144 | Logistics software | `ai-agents-in-logistics-and-supply-chain`, `ai-logistics-uae`, ecommerce shipping pages |
| 145 | Property management software | `ai-agents-in-property-management` (AI angle), `real-estate-website-development` (marketing sites) |
| 146 | LMS | None |
| 147 | Telehealth app | `healthcare-website-development` (generic marketing site) |
| 148 | Healthcare integration | None |
| 149 | AI document processing | `intelligent-document-processing`, `ai-document-extraction`, `ai-invoice-processing`, `ai-document-processing-uae` |
| 150 | AI knowledge base | **`ai-knowledge-base`** (~2,750 words, updated 2026-10-09), `ai-knowledge-base-uae`, `ai-customer-service-australia` |
| 151 | AI recommendations | **`ai-recommendation-systems`**, `ecommerce-recommendation-engine`, `ai-product-recommendations`, `ai-ecommerce-australia` |
| 152 | AI software testing | **`ai-software-testing`** (updated 2026-10-08), `ai-test-generation`, `agentic-qa` |
| 153 | SaaS onboarding | `ai-onboarding-ux` (AI features only), `what-a-good-mobile-app-onboarding-actually-does`. No SaaS activation page |
| 154 | Product analytics | `mobile-app-analytics`, `ecommerce-event-tracking`, `ecommerce-product-analytics`. No SaaS/web-product implementation page |
| 155 | Customer data integration | `ecommerce-crm-integration`, `ecommerce-privacy-customer-data`, `custom-crm-development-australia`, `api-integration-australia` |
| 156 | Payment gateway | `payment-gateway-integration` (generic, ~880 words), `ecommerce-payment-gateway-integration`, plus 10 payment pages |
| 157 | Product discovery | `mvp-development-australia` (evidence ladder, assumption map), `digital-product-development-australia` (stage gates), `ai-product-idea-validation`, `product-design-process` |
| 158 | Scaling SaaS | `saas-development-australia` (one scaling section), `scalable-website-architecture`, `ecommerce-scalability` |
| 159 | Accessibility testing | **`website-accessibility-australia`** (one testing section within a 4,100-word guide), `website-accessibility-guide`, `ecommerce-accessibility-checklist` |
| 160 | Data migration | `ecommerce-data-migration` (ecommerce), plus the migration sections in `legacy-software-modernization-australia` and `cloud-migration-australia` |

## 3. Decisions

**Regional test:** create an Australian URL only where Australian law, tax, payments, platforms or government systems materially change the advice. Two topics, 153 and 158, are not Australian at all. They get **generic** URLs written in Australian English rather than an `-australia` slug, because adding "Australia" to a global engineering topic would be the superficial geo-targeting the brief warns against.

| # | Decision | URL | Australian material / differentiation |
|---|---|---|---|
| 141 | CREATE | /blogs/construction-management-software-australia | Covers WHS SWMS for high-risk construction work, state-by-state security of payment timeframes, and Xero/MYOB. Build vs buy vs extend. Distinct from the AI-agent pages |
| 142 | CREATE | /blogs/field-service-management-software-australia | Covers dispatch, technician apps, offline work in low-coverage areas, quoting/invoicing with GST and Xero/MYOB, and WHS records. Scheduling of crews is distinct from customer self-booking (131) and from generic digitisation (130) |
| 143 | CREATE | /blogs/inventory-management-software-australia | Covers ATO trading stock valuation and the simplified rules, GS1 Australia barcodes and multi-warehouse distance. It is the build/buy decision page; ecommerce sync depth stays with the generic pages |
| 144 | CREATE | /blogs/logistics-software-development-australia | Covers HVNL scope (not WA/NT), NHVR-approved EWDs, Chain of Responsibility record-keeping, and Australia Post/StarTrack APIs. No invented savings |
| 145 | CREATE | /blogs/property-management-software-australia | State-based bonds, entry rules and trust accounting mean software must be configurable per jurisdiction. Product requirements only; no tenancy advice |
| 146 | CREATE | /blogs/lms-development-australia | Covers the USI, AVETMISS/NCVER and the Standards for RTOs 2025 for VET providers, plus accessibility. LMS vs LXP vs portal. No accreditation claims |
| 147 | CREATE | /blogs/telehealth-app-development-australia | Covers MBS telehealth rules (as a business constraint), TGA software exclusions/CDSS, health-provider Privacy Act coverage, ePrescribing conformance and the HI Service. Software ≠ compliance |
| 148 | CREATE | /blogs/healthcare-software-integration-australia | Covers the HI Service (IHI/HPI-I/HPI-O), conformance, My Health Record CIS conformance, AU Core FHIR (HL7 Australia/Sparked), HL7 v2 messaging and audit trails. Specialist review flagged |
| 149 | CREATE | /blogs/ai-document-processing-australia | Covers the Privacy Act ADM transparency obligations from 10 Dec 2026, OAIC AI guidance, APP 8 for AI vendors, Peppol (sometimes removing the need for OCR), ABN validation and ATO record keeping. Generic IDP depth linked |
| 150 | **UPDATE** | /blogs/ai-knowledge-base | The generic page already satisfies the intent and was updated today. An Australian section was added: OAIC guidance, APP 8, ADM transparency, ACL for customer-facing answers, and a link to ai-customer-service-australia. No AU URL |
| 151 | **UPDATE** | /blogs/ai-recommendation-systems | Recommendation mechanics are global. An Australian section was added: Privacy Act, OAIC tracking guidance, ACL and pricing personalisation. No AU URL |
| 152 | **UPDATE** | /blogs/ai-software-testing | Testing practice is global and the page is current. Added: AI-assisted vs traditional QA, what AI tests cannot prove, and questions for a testing partner. No AU URL |
| 153 | CREATE (generic) | /blogs/saas-onboarding-optimization | A genuine gap: defining activation, first session, checklists and experiments. Australia does not change the advice |
| 154 | CREATE | /blogs/product-analytics-implementation-australia | Australia has no GDPR-style cookie-consent rule, but the Privacy Act and OAIC tracking-pixel guidance apply. That materially changes consent and tooling design. Covers SaaS/web-product event taxonomy, distinct from the ecommerce/mobile pages |
| 155 | CREATE | /blogs/customer-data-integration-australia | Covers identity resolution, golden record, integration vs CDP, and how APP 3/6/7, Spam Act consent propagation and breach scope apply. Integrating data does not make processing lawful. Distinct from the CRM (126) and API (119) pages |
| 156 | CREATE | /blogs/payment-gateway-integration-australia | Strong Australian material: surcharging removal (1 Oct 2026), dual-network debit and least-cost routing, PayTo, BNPL licensing, AUD/GST. The generic owner gets a back-link |
| 157 | CREATE (scoped) | /blogs/software-product-discovery-australia | Scoped to the **discovery phase as an engagement**: inputs, activities, deliverables, decision gate and how to buy and judge one. The MVP and digital-product pages own validation and stage gates and are linked rather than repeated |
| 158 | CREATE (generic) | /blogs/scaling-saas-applications | A gap for a dedicated technical page. Australia only appears as a hosting-region note. Microservices are not the default |
| 159 | CREATE | /blogs/accessibility-testing-australia | Testing method, tools, the screen-reader matrix, reporting and conformance claims, plus AS EN 301 549 in Australian ICT procurement. The broader guidance page keeps legal background and design guidance and is cross-linked. Cannibalisation risk is noted and will be monitored |
| 160 | CREATE | /blogs/data-migration-australia | General business data migration (non-ecommerce). Australian points: APP 11.2 destruction/de-identification, ATO retention, APP 8 for offshore migration vendors, NDB during cutover |

**Totals:**
- 17 CREATE: 15 Australian, 2 generic
- 3 UPDATE
- 0 MERGE
- 0 DEFER of whole topics. Australian URLs were deferred for 150, 151 and 152.

No URL changes, redirects or canonical changes.

## 4. Keyword hypotheses and intent

| # | Primary (hypothesis) | Secondary | Intent |
|---|---|---|---|
| 141 | construction management software Australia | construction project management software, custom construction software | Commercial investigation |
| 142 | field service management software Australia | job management software tradies, dispatch software | Commercial investigation |
| 143 | inventory management software development Australia | custom inventory system, stock management software | Commercial investigation |
| 144 | logistics software development Australia | transport management software, proof of delivery app | Commercial investigation |
| 145 | property management software development Australia | custom property management system, tenant portal | Commercial investigation |
| 146 | LMS development Australia | custom LMS, RTO LMS, training portal | Commercial investigation |
| 147 | telehealth app development Australia | telehealth platform, video consultation app | Commercial investigation |
| 148 | healthcare software integration Australia | HL7 FHIR integration, practice management integration | Commercial investigation |
| 149 | AI document processing Australia | invoice automation, document extraction | Commercial investigation |
| 153 | SaaS onboarding optimisation | user activation, onboarding checklist | Informational |
| 154 | product analytics implementation Australia | event tracking plan, activation and retention metrics | Informational / commercial |
| 155 | customer data integration services Australia | single customer view, identity resolution, CDP vs integration | Commercial investigation |
| 156 | payment gateway integration Australia | Stripe/Adyen integration, least-cost routing, PayTo | Commercial investigation |
| 157 | software product discovery Australia | discovery phase, product discovery workshop | Commercial investigation |
| 158 | scaling SaaS applications | SaaS scalability, multi-tenant performance | Informational |
| 159 | digital accessibility testing Australia | WCAG audit, accessibility testing services | Commercial investigation |
| 160 | data migration services Australia | data migration plan, data migration checklist | Commercial investigation |

**Confidence:** Medium for 141–149, 156 and 159, where Australian-specific rules exist. Lower for 155 and 157, where demand and differentiation are uncertain. Validate all of these in Search Console.

## 5. Clusters

| Cluster | Pages | Main services |
|---|---|---|
| Industry operations | 141, 142, 143, 144, 145 | website-development, mobile-app-development |
| Education and healthcare | 146, 147, 148 | website-development, mobile-app-development, ui-ux-design |
| Applied AI | 149, plus updates 150, 151, 152 | ai-automation |
| SaaS product | 153, 154, 157, 158, linked to saas-development-australia | ui-ux-design, website-development |
| Data, payments, migration | 155, 156, 160, linked to api-integration-australia and the batch 121–140 software pages | website-development, shopify-development |
| Quality | 159, linked to website-accessibility-australia | ui-ux-design |

## 6. Key sources

- **Workplace and construction:** Safe Work Australia (SWMS); law-firm comparisons of security of payment Acts.
- **Transport:** NTC (HVNL scope); NHVR (EWD framework).
- **Property:** state bond authorities.
- **Training:** ASQA and DEWR (USI, Standards for RTOs 2025); NCVER.
- **Health:**
  - MBS Online telehealth factsheet
  - TGA (excluded software, CDSS exemption)
  - Services Australia and ADHA (HI Service, conformance, ePrescribing)
  - HL7 Australia (AU Core)
- **Privacy:** OAIC (tracking pixels, APP guidelines, NDB, AI guidance).
- **Payments:** RBA (surcharging conclusions, least-cost routing).
- **Accessibility:** Standards Australia (AS EN 301 549) and W3C WCAG 2.2.
- **Tax and products:** ATO (trading stock, tax invoices, record keeping); GS1 Australia.
- **Technical:** Google Search Central and platform documentation where cited.
- **Research notes:** `research-141-160.md` in the session scratchpad.
