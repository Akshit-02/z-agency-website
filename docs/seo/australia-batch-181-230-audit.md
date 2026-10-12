# Australia Batch 181–230: Audit, Research and Content Decisions

Prepared 2026-10-10, before any content changes. Implementation results are in `blogs-181-230-australia-implementation.md`.

## 1. Access and limitations

- **Repository:** architecture is unchanged since batch 121–140 (see `australia-batch-121-140-audit.md` §2). At audit time the site had 930 posts in `src/lib/blog-data-*.ts` and no external CMS.
- **Data not available:** Search Console, GA4, keyword tools and crawl exports. Australian SERPs could not be observed directly. **Every keyword is a hypothesis.**
- **Government sources:** several gov.au sites block automated fetches. Facts from those sites came from search summaries and are hedged in the text.
- **Services:** the verified service pages are website-development, mobile-app-development, ai-automation, ui-ux-design, shopify-development and cro-audit.
  - There is no testing, DevOps, legal or staffing-agency service page.
  - Topics 217 (regression testing), 218 (team augmentation) and 219 (open-source audit) are written as decision guides. They make no claim of specialist services or staffing terms.
- **Uncommitted work:** batches 121–180 remain uncommitted.

## 2. Overlap summary

Fifty topics were checked against 930 posts. The heaviest existing coverage:

| Area | Existing owner pages |
|---|---|
| RAG and knowledge | `retrieval-augmented-generation`, `enterprise-rag-architecture`, `rag-chunking-strategies`, `rag-reranking`, `hybrid-search-for-rag`, `ai-knowledge-base`, `ai-search-development` |
| Voice | `voice-ai-agent-development`, `ai-voice-agents-customer-service`, `ai-customer-service-australia` (Australian voice and telemarketing section) |
| Orchestration, evaluation, PoC, ROI, HITL | `ai-orchestration`, `ai-agent-orchestration`, `ai-model-evaluation`, `llm-evaluation-pipeline`, `ai-poc-vs-pilot-vs-production`, `ai-automation-roi`, `ai-agent-roi`, `human-in-the-loop-ai` |
| Returns | `ecommerce-returns-management`, `ecommerce-returns-ux`, `ecommerce-reverse-logistics` (generic; **no Australian consumer-law page**) |
| Loyalty, omnichannel, search, personalisation, analytics | 5 loyalty pages, 4 omnichannel/retail integration pages, 10+ site search pages, 15+ personalisation pages, 12+ analytics pages |
| Marketplace seller | `marketplace-seller-dashboard`, `ecommerce-marketplace-seller-onboarding`, `marketplace-development-australia` |
| Retail app | `ecommerce-mobile-app-vs-mobile-website`, `mobile-ecommerce-development`, `mobile-app-development-cost-australia` |
| Industry | AI-agent pages only for hospitality and manufacturing; nothing for membership, non-profit, franchise or general recruitment software (`ai-recruitment-automation` covers the AI angle only) |
| SaaS engineering | `saas-development-australia` (multi-tenancy section), `scaling-saas-applications`, `devops-for-growing-businesses`, `ecommerce-technical-debt`, `ecommerce-architecture-audit`, `ai-software-testing` |
| Privacy, forms, conversion | `product-analytics-implementation-australia`, `customer-data-integration-australia`, `workflow-digitization-australia`, `website-accessibility-australia`, `accessibility-testing-australia`, 12 A/B testing pages, funnel pages, `ecommerce-disaster-recovery`, `cyber-incident-response-plan-australia`, `api-integration-australia` |

## 3. Decisions

Rules applied:
- Create only for a new intent.
- Merge sibling topics into one page where a split would create two thin, competing pages.
- Use an `-australia` slug only where Australian rules or context change the advice. Otherwise use a generic slug written in Australian English.

| # | Topic | Decision | URL / owner | Rationale |
|---|---|---|---|---|
| 181 | RAG development | UPDATE | retrieval-augmented-generation | Generic owner plus four RAG sub-pages already exist. Add Australian data-location, APP 8 and OAIC points. RAG vs fine-tuning is covered by `rag-vs-fine-tuning` |
| 182 | AI voice agents | UPDATE | voice-ai-agent-development | Australian telemarketing and voice coverage is in `ai-customer-service-australia`. Add an Australian section (state-based call-recording laws, DNCR hours, consent) |
| 183 | AI workflow orchestration | COVERED | ai-orchestration, ai-agent-orchestration, ai-workflow-automation | Three pages already serve this intent. No new URL |
| 184 | AI proof of concept | UPDATE | ai-poc-vs-pilot-vs-production | Add acceptance criteria, representative test cases, failure-mode measurement and Australian notes |
| 185 | AI model evaluation | COVERED | ai-model-evaluation, llm-evaluation-pipeline | Same intent fully covered |
| 186 | Private AI | **CREATE** | /blogs/private-ai-development-australia | Australian content: model availability and data residency in Australian cloud regions (Azure Australia East, Bedrock Sydney including cross-Region inference caveats, Vertex AI Sydney), APP 8, plus the self-hosted vs private-cloud trade-offs. `llm-self-hosting` is generic and is linked |
| 187 | Multilingual AI | **CREATE** | /blogs/multilingual-ai-development-australia | Australian content: 2021 Census, where 22.3% spoke a language other than English at home (Mandarin first, Arabic third); interpreters, accessibility, human review. No single-language assumption |
| 188 | AI document search | COVERED | ai-search-development, ai-knowledge-base, enterprise-rag-architecture | No defensible gap |
| 189 | AI automation ROI | UPDATE | ai-automation-roi | Generic owner; the AUD cost model lives in `ai-automation-cost-australia`. Add an Australian measurement note |
| 190 | Human-in-the-loop | UPDATE | human-in-the-loop-ai | Add the Australian ADM transparency obligation (10 Dec 2026) and examples where autonomy is inappropriate |
| 191 + 195 | Returns portal + returns UX | **MERGE → CREATE** | /blogs/ecommerce-returns-australia | One Australian page on ACL consumer guarantees (major vs minor failure, change of mind, "no refunds" signs prohibited), plus portal and UX. Two pages would compete. The generic returns pages are linked |
| 192 | Loyalty software | UPDATE | ecommerce-loyalty-program-development | Add an Australian section: privacy, the ACCC loyalty-scheme data practices context, buy vs build |
| 193 + 196 | Omnichannel + retail integration | MERGE → UPDATE | retail-ecommerce-integration | Owner exists. Add an Australian section covering POS, GST, click and collect, Australia Post, Xero/MYOB and reconciliation |
| 194 | Site search optimisation | COVERED | ecommerce-site-search, ecommerce-search-ranking, ecommerce-search-ux, ecommerce-zero-result-searches | Fully covered |
| 197 | Ecommerce personalisation | UPDATE | ecommerce-personalization | Add an Australian section: OAIC tracking pixel guidance, APP 7 opt-out, no guaranteed uplift |
| 198 | Marketplace seller portal | UPDATE | marketplace-seller-dashboard | Add Australian seller data (ABN, GST, SERR reporting data) and link to the Australian marketplace page |
| 199 | Retail app | UPDATE | ecommerce-mobile-app-vs-mobile-website | Add Australian costs (store fees, Google Play fee change from 30 Sep 2026), maintenance and adoption |
| 200 | Ecommerce analytics | UPDATE | ecommerce-analytics | Add Australian consent and privacy notes (no cookie law, OAIC pixel guidance), refunds and GST in revenue definitions |
| 201 + 202 | Hospitality + restaurant apps | **MERGE → CREATE** | /blogs/hospitality-software-development-australia | Australian content: public holiday surcharge display under the ACL, card surcharging removal from 1 Oct 2026, ordering apps vs platforms, venue and hotel operations |
| 203 | Tourism booking | UPDATE | booking-system-development-australia | Add a tourism section: ATDW listings and API, channel managers and OTAs, minimum numbers, cancellations |
| 204 | Manufacturing integration | **CREATE** (generic) | /blogs/manufacturing-software-integration | A gap; Australia does not materially change it. Says that not every manufacturer needs a custom MES |
| 205 | Field data collection | COVERED | offline-first-mobile-app-development, field-service-management-software-australia, workflow-digitization-australia | Covered |
| 206 | Membership management | **CREATE** | /blogs/membership-management-software-australia | Australian content: state incorporated-association laws (e.g. Vic members register), ACNC reporting, Spam Act, privacy |
| 207 | Non-profit software | **CREATE** | /blogs/nonprofit-software-development-australia | Australian content: ACNC, state fundraising rules, Working with Children Checks (state-based), Privacy Act coverage. No tax or DGR advice |
| 208 | Recruitment software | **CREATE** | /blogs/recruitment-software-development-australia | Australian content: the employee records exemption does not cover job applicants (OAIC); anti-discrimination; automated matching with human review; ADM transparency |
| 209 | Professional services portal | UPDATE | customer-portal-development-australia | Add a professional-services section (document exchange, approvals, e-signatures, retention). A separate URL would cannibalise |
| 210 | Franchise management | **CREATE** | /blogs/franchise-management-software-australia | Australian content: the new Franchising Code (1 Apr 2025; disclosure and specific purpose fund changes from 1 Nov 2025) and Fair Work responsible franchisor liability (2017) |
| 211 | Multi-tenant SaaS | **CREATE** (generic) | /blogs/multi-tenant-saas-architecture | No dedicated page. Says that multi-tenancy is not always best |
| 212 | Feature flags | **CREATE** (generic) | /blogs/feature-flag-implementation | Gap |
| 213 | Release management | COVERED | devops-for-growing-businesses, ai-application-release-management | Covered |
| 214 + 215 | Tech debt + architecture review | **MERGE → CREATE** (generic) | /blogs/software-architecture-review | One page: review vs rebuild, tech debt assessment and prioritisation. `ecommerce-technical-debt` and `ecommerce-architecture-audit` are store-specific and linked |
| 216 | Database performance | **CREATE** (generic) | /blogs/database-performance-optimization | Gap. PostgreSQL and MySQL documentation cited; advice is engine-aware |
| 217 | Regression testing | **CREATE** (generic) | /blogs/automated-regression-testing | Gap beyond AI-testing pages |
| 218 | Team augmentation | **CREATE** | /blogs/software-team-augmentation-australia | Australian content: IP assignment (s196), APP 8 for offshore access, time zones, contract models. No ZSpace staffing terms invented |
| 219 | Open-source audit | **CREATE** (generic) | /blogs/open-source-software-audit | ASD co-sealed SBOM guidance (Sep 2025); no legal opinions on licences |
| 220 | Software documentation | **DEFER** | — | Weak commercial intent; `ai-code-documentation` overlaps. Revisit if Search Console shows demand |
| 221 + 222 | Data retention + privacy by design | **MERGE → CREATE** | /blogs/privacy-by-design-software-australia | Australian content: OAIC PIA guide (10 steps), APP 11.2 destruction or de-identification, ATO retention, legal holds. No universal retention periods |
| 223 | Consent management | UPDATE | customer-data-integration-australia | Consent propagation is already covered. Add a consent-management integration section (preference centre, audit, withdrawal sync) |
| 224 + 228 | Accessible forms + digital forms | **MERGE → CREATE** | /blogs/digital-forms-development-australia | One forms page: validation, conditional logic, WCAG 2.2 form criteria, secure uploads, integrations, e-signatures, ABN and address lookups. Distinct from workflow digitisation |
| 225 | A/B testing | COVERED | 12 experimentation pages | Covered |
| 226 | Funnel analysis | COVERED | ecommerce-conversion-funnel, product-analytics-implementation-australia | Covered |
| 227 | Website personalisation | DEFER | — | Weak differentiation from the personalisation pages; revisit with data |
| 229 | Business continuity | **CREATE** | /blogs/business-continuity-digital-products-australia | Australian content: APRA CPS 230 for regulated entities (from 1 Jul 2025), ASD backups, ransomware reporting. Distinct from incident response (which covers what happens during an incident) |
| 230 | API integration reliability | **CREATE** (generic) | /blogs/api-integration-reliability | Engineering depth (idempotency keys, circuit breakers, reconciliation) beyond the reliability section in `api-integration-australia` |

**Totals:**
- 20 CREATE (13 Australian, 7 generic), from 25 topics
- 14 UPDATE, of which 193 and 196 together update one page
- 8 COVERED
- 2 DEFER

No URL changes, redirects or canonical changes.

## 4. Key sources (new this batch)

Confirmation basis is noted where a source was not fully verified.

- **AI model availability in Australian regions (search summaries):**
  - Microsoft Learn Q&A (Azure Australia East)
  - AWS Bedrock endpoints and the cross-Region inference blog
  - Google Vertex AI data residency
- **ABS Census 2021 language data** (via SBS reporting of ABS data)
- **ACCC and consumer law:**
  - repair, replace, refund guidance
  - restaurant surcharge rules (2013 amendment)
  - Franchising Code changes (ACCC 2025 guidance)
- **Workplace and privacy:**
  - Fair Work responsible franchisor provisions (law-firm summaries)
  - OAIC employee records exemption
  - OAIC PIA guide and privacy by design
- **Regulation and standards:**
  - APRA CPS 230
  - ATDW API (data.gov.au)
  - ASD SBOM joint guidance (4 Sep 2025)
- **Not-for-profit:** ACNC and Consumer Affairs Victoria arrangements
