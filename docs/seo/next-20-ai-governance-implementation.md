# Next 20 AI Governance Topics: Implementation

Implemented 2026-10-08. The audit is in `next-20-ai-governance-content-audit.md` and the plan in `next-20-ai-governance-content-plan.md`. Total articles: **804** (794 before). Changes are uncommitted, as are the earlier batches from 2026-10-07 and 2026-10-08.

## Articles created (10)

| Title | URL | Primary keyword | Intent | Prose words* | File |
|---|---|---|---|---|---|
| AI Agent Governance: What Businesses Need to Control Before Agents Go Autonomous | /blogs/ai-agent-governance | AI agent governance | Framework (hub) | ~1,500 | blog-data-ai-governance-1.ts |
| AI Control Plane: What Organizations Need to Manage Many AI Agents | /blogs/ai-control-plane | AI control plane | Definition + architecture | ~1,000 | -1 |
| Shadow AI Agents: How to Discover and Govern Unapproved AI Automation | /blogs/shadow-ai-agents | shadow AI agents | Problem / solution | ~1,100 | -1 |
| AI Agent Lifecycle Management: From Creation to Retirement | /blogs/ai-agent-lifecycle-management | AI agent lifecycle management | Framework / checklist | ~930 | -1 |
| ISO/IEC 42001: What an AI Management System Means for Your Business | /blogs/iso-42001-ai-management-system | ISO 42001 | Informational / commercial investigation | ~1,070 | -2 |
| How to Assess an AI Agent Vendor: Security, Data and Governance Questions | /blogs/ai-agent-vendor-assessment | AI vendor assessment | Commercial investigation | ~1,070 | -2 |
| AI-Native vs AI-Enabled Software: What Actually Changes in the Architecture | /blogs/ai-native-vs-ai-enabled-software | AI-native vs AI-enabled | Comparison | ~1,010 | -2 |
| How to Turn an Existing SaaS Product Into an AI-Native Product | /blogs/turn-saas-product-into-ai-native-product | turn SaaS into AI-native | Roadmap | ~1,200 | -3 |
| AI Automation Technical Debt: Why AI Workflows Become Hard to Maintain | /blogs/ai-automation-technical-debt | AI automation technical debt | Problem / checklist | ~1,090 | -3 |
| AI Automation Center of Excellence: How to Organize AI Workflows at Scale | /blogs/ai-automation-center-of-excellence | AI center of excellence | Organizational design | ~960 | -3 |

\*Prose, tables and FAQs. Code-block frameworks (governance layers, runtime control path, policy record, version manifest, discovery-to-governed flow, architecture comparison) are excluded from the count. The brief's guideline was about 1,800–3,000 words. After a quality pass that added substantive sections to all ten articles, they sit below that: further additions would have repeated material already covered by linked articles in the cluster, which the brief also asked to avoid.

## Rejected and replaced

12 proposals were rejected as RED because existing articles own the intent: runtime controls, risk assessment, cost management, ROI (identical URL already live), versioning, deployment strategies, control limits, simulation, digital twins, agent-ready APIs, agent-ready websites and AI-native architecture. Runtime controls and risk assessment were merged into the governance hub, and AI-native architecture into the AI-native vs AI-enabled comparison.

Research replacements: ISO/IEC 42001 and AI agent vendor assessment.

## Existing articles updated

| Article | Change | Absorbs |
|---|---|---|
| apis-for-ai-agents | New "Agent-ready API checklist" section (12 items) | Agent-ready APIs |
| how-ai-agents-use-websites | New "AI search discoverability vs agent interaction" section and table | Agent-ready websites |
| ai-agent-sandbox | New section distinguishing simulation, evaluation, staging and digital twins (technically cautious) | Simulation, digital twins |
| ai-application-release-management | Agent version manifest note | Versioning |
| ai-governance-framework | Links to shadow AI agents, vendor assessment, agent governance, ISO/IEC 42001 | — |
| enterprise-ai-implementation | Link to the CoE article | — |
| ai-powered-saas-development | Links to the SaaS migration and AI-native comparison | — |
| ai-platform-engineering | Link to control plane | — |
| ai-automation-architecture, mcp-governance, build-vs-buy-ai-agents, ai-agent-lifecycle-management | Contextual links into the cluster | — |

## SEO changes

- Unique `seoTitle` values (55–68 characters) and excerpts of 155 characters or fewer, used verbatim as meta and Open Graph descriptions. Twitter cards come from the template.
- Self-referencing canonicals on www; descriptive slugs matching the brief's URLs.
- One H1 per article, with an H2 hierarchy rendered from section headings.
- Evergreen: a script confirmed no years in titles, headings, FAQs or body text of the new files (only the `date` metadata).

## AEO changes

- Every article opens with a "Quick answer" that defines the concept and gives the recommendation in 3–5 sentences.
- Direct definitions in FAQs: AI control plane, shadow AI, ISO/IEC 42001, AI-native vs AI-enabled.
- Comparison tables (control vs data plane, AI-enabled vs AI-native, ISO vs NIST vs EU AI Act, operating models by company size), checklists (discovery, lifecycle, vendor questions, technical debt) and numbered roadmaps.

## GEO changes

- Consistent terms across the cluster (agent governance layers, risk tiers, control plane, version manifest) and explicit relationships between them: hub → spokes → existing articles.
- Original frameworks: eight-layer governance model, runtime control path, risk-tier control mapping, shadow-agent decision flow, ten-stage SaaS roadmap, debt prioritization, CoE operating models.
- Claims tied to primary sources named in text: Microsoft (Agent 365 described as a control plane; Entra Agent ID sponsors and lifecycle; Work Trend Index on employees bringing their own AI), ISO (42001, 42005, 42006, 23894), OWASP Top 10 for Agentic Applications, and Sculley et al. on hidden technical debt (Google, NeurIPS). No invented clients, statistics or results.

## Schema and images

- **Schema:** BlogPosting, BreadcrumbList and FAQPage, verified in rendered HTML. No QAPage or LocalBusiness, and no invented authors, reviews or ratings.
- **Images:** generated SVG cover scenes (no image requests, no layout shift), with `sceneKind` pinned on all 10. Ten diagram specs were added to `BlogBanner.tsx`: three flows (shadow AI governance, agent lifecycle, ISO/IEC 42001 cycle) and seven column or comparison charts (governance layers, control vs data plane, vendor assessment areas, AI-enabled vs AI-native, SaaS roadmap, technical debt map, CoE operating models). Long sequences use column layouts so labels fit, and `bannerAlt` matches each spec.
- **Open issue (site-wide, pre-existing):** article pages render the cover scene, not the diagram, while the cover's accessible label uses `bannerAlt`. See `zspace-next-20-blog-implementation.md` for the one-line template fix.

## Internal linking

Each new article links to 3–14 posts in context (the hub links all eight governance layers to their detailed articles), and each receives 2–6 inbound contextual links. 0 broken internal links across all 804 posts. Services linked: AI Automation (all 10); Website Development (AI-native comparison, SaaS migration); UI/UX Design (SaaS migration).

## Technical validation

| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | Pass |
| Lint (`npm run lint`) | 0 errors; 9 pre-existing warnings in unrelated files |
| Build (`npm run build`) | Pass |
| Routes | 10 new + 8 updated articles return 200; OG images 200; category hub 200 |
| Canonicals | Correct; 804 unique slugs |
| Robots | `index, follow`; robots.txt allows all |
| Sitemap | All 10 present; 0 duplicate `<loc>` entries |
| Blog index | All 10 present |
| Responsive | 10 new articles at 390 / 820 / 1280 px and 3 updated articles at 390 px: no overflow, no broken images |
| Console / hydration | No errors |
| llms.txt | New group "AI agent governance, AI-native products and enterprise automation" (10 entries) |
