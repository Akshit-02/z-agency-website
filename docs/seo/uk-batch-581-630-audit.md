# UK Batch 581–630: Baseline, Audit, Decision Matrix and Briefs

Prepared 2026-10-10 on branch `seo/australia-content-batches`. Research date: 2026-10-10.

- Full matrix (CSV): [`uk-batch-581-630-matrix.csv`](./uk-batch-581-630-matrix.csv).
- Completed work: [`blogs-581-630-uk-implementation.md`](./blogs-581-630-uk-implementation.md).
- Earlier UK batches: [481–530](./uk-batch-481-530-audit.md), [531–580](./uk-batch-531-580-audit.md).

## 1. Baseline

- **Stack:** unchanged.
  - Next.js 16.3.5 App Router; posts in `src/lib/blog-data-*.ts`, registered in `src/lib/blog-data.ts`.
  - Static `/blogs/[slug]`.
  - Self-canonicals on `https://www.zspace.in`; robots index, follow; sitemap from `src/app/sitemap.ts`.
  - JSON-LD: Organization, WebSite, BlogPosting, BreadcrumbList, and FAQPage from visible FAQs.
  - No CMS, redirects config, case studies or glossary.
- **Inventory at start:** 1,022 posts.
  - UK content so far: 11 UK pages from batches 481–580, plus 4 UK sections in global guides.
  - About 70 Australian and 20 UAE pages.
  - 6 service pages and the industry pages.
- **Positioning (`site.ts`, `/about`, `llms.txt`):**
  - Remote-first, serving India and working globally.
  - No published office, case studies, testimonials, certifications or framework memberships.
- **Pre-change checks:** `tsc` passed, the link check found 0 broken links, and there were no duplicate titles, H1s or descriptions.
  - One existing defect was found on a page updated in this batch: the `website-accessibility-guide` excerpt was 171 characters (fixed).
- **Data access:** no Search Console, analytics or keyword tool is available. Demand judgements are qualitative and no metrics are given. The Chrome extension was unavailable, so there is no visual browser testing.

## 2. Existing-content overlap

The areas the brief asked me to inspect already have mature owners:

| Area | Existing owners (content checked, not only titles) |
|---|---|
| Testing and release engineering | automated-regression-testing, zero-downtime-deployments (includes expand/contract migrations), feature-flag-implementation, mobile-app-release-management, devops-for-growing-businesses |
| Security | secrets-management (includes rotation), software-supply-chain-security, api-security-best-practices, web-application-threat-modeling |
| Observability | application-monitoring-observability, slos-and-error-budgets, ai-model-monitoring, llm-observability |
| AI agents, RAG, evaluation and governance | which-processes-suit-ai-agents, retrieval-augmented-generation, enterprise-rag-architecture, intelligent-document-processing, llm-evaluation-pipeline (includes dataset building), prompt-injection-prevention, human-in-the-loop-ai, ai-data-privacy (includes retention), small-language-models, ai-governance-framework (with a UK section) |
| Customer platforms | ecommerce-loyalty-program-development, ecommerce-referral-program-development, ecommerce personalisation pages (10), customer-portal-development-australia, ecommerce-product-information-management |
| Onboarding, identity and forms | b2b-customer-onboarding-automation, identity-verification-integration-australia, digital-forms-development-australia, workflow-digitization-australia |
| Accessibility | website-accessibility-guide, accessibility-testing-australia, ecommerce-accessibility (with a UK section) |
| Public sector and digital identity (UK) | **None**: no page on UK procurement, the GDS Service Standard, the UK digital verification services framework or e-signatures |

As a result, all 10 AI topics (621–630) and most engineering topics (613–615, 617–620) are rejected as duplicates.

## 3. Research sources (accessed 2026-10-10)

| Claim | Source | Status |
|---|---|---|
| Procurement Act 2023 applies to procurements from 24 Feb 2025 in England, Wales and NI; devolved Scottish authorities use Scottish regulations; MAT replaces MEAT, and price need not take precedence; Central Digital Platform registration | Cabinet Office guidance collection, "Assessing competitive tenders" guidance, Welsh Government guidance, Burness Paull | Primary plus secondary |
| PPN 014 (17 Feb 2025): in-scope central government, agencies, NDPBs and NHS bodies require Cyber Essentials or CE+ (or equivalent) before award for contracts with certain characteristics; renewed annually | GOV.UK PPN 014 | Primary |
| Public sector accessibility regulations: WCAG 2.2 AA, accessibility statement, GDS monitoring, EHRC/ECNI enforcement | GOV.UK (updated 30 Sep 2024) | Primary |
| Service Standard 14 points; phases discovery, alpha, beta, live | GOV.UK Service Manual | Primary |
| DUAA Part 2 largely commenced 1 Dec 2025; trust framework gamma 0.4, then v1.0 published 9 Jun 2026 and effective 1 Sep 2026 subject to UKAS accreditation; 46 providers and 64 services (July 2026); UK CertifID trust mark; information gateway not commenced | OfDIA 2026 annual report (14 Jul 2026) | Primary |
| RTW: employer guidance effective 1 Oct 2026 directs use of a RtW DVSP from the OfDIA register; digital checks for British and Irish passports; Home Office online check and manual routes remain | GOV.UK RTW collection and draft employer's guide (11 Sep 2026) | Primary (draft wording; hedged on page) |
| GPG 45 levels of confidence | GOV.UK GPG 45 | Primary |
| E-signatures valid in England and Wales with intent and formalities (Law Commission 2019; government endorsed 2020); HMLR witnessed e-signatures since 27 Jul 2020 with witness physically present; Wills Act formalities apply | Law Commission project page, HMLR blog, law-firm summaries | Primary plus secondary |
| DVSA: walkaround check every 24h in service; inspections 4–13 weeks (12+ years: at least every 6 weeks); brake assessment at every inspection, laden RBT preferred, 4 laden tests a year without EBPMS; records 15 months; electronic records acceptable if tamper-proof and auditable; covers GB | DVSA Guide to maintaining roadworthiness (updated 28 Apr 2025) | Primary |
| Companies House IDV: legal requirement from 18 Nov 2025 with a 12-month transition by due dates; verification routes | GOV.UK (updated 30 Apr 2026) | Primary |
| Companies House API; HMRC VAT registered companies API | Developer portals | Primary (200) |
| hreflang and multi-regional guidance | Google Search Central | Primary |
| File upload controls | OWASP File Upload Cheat Sheet; AWS S3 presigned URLs | Primary |

**Not used (unverified):**
- G-Cloud iteration numbers.
- Whether the Companies House API exposes per-person verification status.
- The number of IDVT-eligible documents beyond British and Irish passports.

## 4. UK search-intent and competitor observations (qualitative)

- **Procurement Act / public sector delivery:** law firms, councils and bid consultancies explain the Act. Few pages connect procurement requirements to delivery practice (discovery, the Service Standard, accessibility and Cyber Essentials) for software specifically.
- **GDS Service Standard:** GOV.UK itself plus agency blogs aimed at public sector suppliers. Few pages translate it for commercial teams.
- **UK identity verification / right to work:** IDV vendors and HR compliance firms, often with outdated "IDSP" terminology. **Gap:** an integration-focused page reflecting DUAA Part 2, the OfDIA register and the October 2026 guidance.
- **E-signatures UK:** e-signature vendors' legality pages. **Gap:** a neutral integration and evidence workflow alongside the legal position.
- **Fleet maintenance UK:** fleet SaaS vendors and the DVSA guide. **Gap:** a software-design view mapped to DVSA expectations.
- **Multi-brand architecture, UAT, secure uploads:** mature global topics, mostly CMS vendors, testing tool vendors and OWASP. Value comes from practical synthesis linked to the site's clusters.

## 5. Decision summary

| Decision | Count | Topics |
|---|---|---|
| CREATE | 8 | 582, 583, 584, 586, 598, 605, 612, 616 |
| MERGE (into a new page) | 3 | 581 → 582, 595 → 584, 611 → 612 |
| UPDATE | 2 | 585 → `b2b-customer-onboarding-automation` (UK section); 587 → `website-accessibility-guide` (UK requirements and audit section) |
| DEFER | 12 | 589, 591–594, 596, 597, 599, 600, 602, 608, 610 |
| REJECT | 25 | 588, 590, 601, 603, 604, 606, 607, 609, 613–615, 617–630 |

Field-level detail for all 50 topics (intent, keyword, buyer, service, UK research needs, priority, reasoning) is in the CSV.

**Clusters:**
- **UK public digital:** procurement → Service Standard → accessibility guide UK section.
- **UK trust and identity:** identity verification UK → onboarding UK section → e-signatures → SaaS audit logging.
- **Delivery quality:** acceptance testing → automated regression testing → custom software UK contracts.
- **Web platforms:** multi-brand architecture → design systems → how to choose a CMS → international ecommerce SEO.

## 6. Briefs (approved pages)

Common to all briefs:
- **Schema:** template BlogPosting, BreadcrumbList and FAQPage from visible FAQs. Self-canonical.
- **CTA:** the verified service, framed as a discussion. No office, framework or certification claims.
- **Review triggers:** listed per page.

| Page | H1 / title tag | Reader and stage | Problem and angle | Outline highlights | Links (out / in) | Risks and review |
|---|---|---|---|---|---|---|
| `uk-public-sector-software-procurement` (582+581) | "UK Public Sector Software Projects: From Procurement Requirements to a Deliverable Product" / "UK Public Sector Software Procurement: A Delivery Guide" | Suppliers and public product owners; consideration | Linking procurement rules to delivery practice | What changed under the Act (table); pre-bid requirements; evaluation criteria table; phase table; hypothetical council example | Out: Service Standard page, technical discovery, custom software UK. In: technical-discovery-software-projects, custom-software-development-uk | Legal advice (hedged); Scotland separate. Review on new PPNs or Act amendments |
| `gds-service-standard-for-product-teams` (583) | "The GDS Service Standard: What Commercial Software Teams Can Learn From It" | Product teams; awareness | Translating the 14 points for commercial products | Grouped points table; phases table; review checklist; where commercial differs | Out: user-research-methods, procurement page. In: user-research-methods, software-product-discovery-australia | Low; review if the Service Manual changes |
| `identity-verification-integration-uk` (584+595) | "Identity Verification Integration in the UK: Digital Verification Services, Right to Work Checks and UX" | Employers, platforms; consideration | The new statutory DVS framework and RTW routes | Framework status table; RTW routes and checklist; architecture table; inclusion | Out: AU IDV, workforce credentials, secure account recovery. In: AU IDV page, recruitment-software-development-australia, b2b onboarding | Draft RTW guidance, changing register counts. Review on final guidance and v1.0 certification progress |
| `electronic-signature-integration-uk` (586) | "Electronic Signature Integration for UK Business Applications: Workflows, Evidence and Auditability" | Product teams; consideration | Legal position plus workflow and evidence | Legal table; integration steps; evidence; lettings example | Out: CLM, SaaS audit logging. In: contract-lifecycle-management-software, digital-forms-development-australia | Legal advice (hedged); Scotland and NI separate. Review on any deeds-law reform |
| `fleet-maintenance-software-uk` (598) | "Fleet Maintenance Software in the UK: Walkaround Checks, Safety Inspections and Defect Records" | Transport managers; consideration | Software mapped to DVSA expectations | DVSA expectations table; software design checklist; distributor example | Out: asset maintenance, route optimisation. In: route-optimization-software, asset-maintenance-management-software | NI excluded. Review when the DVSA guide is updated |
| `multi-brand-website-architecture` (605) | "Multi-Brand Website Architecture: Running Several Brands and Markets Without Duplicating Everything" | Digital leads; consideration | Shared foundations, separate identities, correct hreflang | Options table; tokens; CMS spaces; domains and hreflang; governance | Out: design systems, CMS choice, international ecommerce SEO. In: design-systems-for-teams-that-move-fast, how-to-choose-a-cms | Low |
| `user-acceptance-testing-business-software` (612+611) | "User Acceptance Testing for Business Software: Acceptance Criteria and a Practical Sign-Off Framework" | Product owners; decision and delivery | Preventing scope disputes | Given/When/Then example; UAT plan table; severity vs change table; contract link | Out: regression testing, PRD, custom software UK. In: automated-regression-testing, product-requirements-document | Low |
| `secure-file-uploads` (616) | "Secure File Uploads in Business Applications: Validation, Storage and Access Controls" | Engineers; implementation | Layered upload controls | Threat and control table; recommended flow; claims portal example | Out: API security, threat modelling. In: api-security-best-practices, web-application-threat-modeling | Low |

**Update plans:**
- **585:** add "UK considerations" to `b2b-customer-onboarding-automation`: Companies House API, IDV transition, HMRC VAT API, MLR responsibility, plus one FAQ. Done.
- **587:** add "UK Requirements and Accessibility Audits" to `website-accessibility-guide`: Equality Act/DDA, public sector regulations, audit-to-remediation method. Also fix its excerpt. Done.

## 7. Recommended next 10 (based on gaps found)

1. **Internal search for business portals (608):** permission-aware enterprise search. No owner exists.
2. **Customer feedback and complaints workflows (602):** generic, with sector rules flagged.
3. **DXP vs custom website (610):** comparison; check overlap with CMS and headless pages first.
4. **Construction software UK:** CIS and Building Safety Act (carried over).
5. **Membership software UK update:** Direct Debit and Gift Aid (carried over).
6. **UK cyber incident response and breach reporting** (carried over).
7. **Document management and approvals (589):** only if a version-control and records-retention angle differs from CLM and QMS.
8. **Equipment rental software** (carried over).
9. **Selling to the UK public sector via frameworks:** G-Cloud and Digital Outcomes, once current iterations are verified on CCS pages.
10. **LIMS (600):** only with ISO/IEC 17025 and UKAS primary sources and a clear build case.

Connecting Search Console remains the highest-value next step for prioritisation.
