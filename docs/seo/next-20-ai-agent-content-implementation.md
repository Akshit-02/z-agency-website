# Next 20 AI Agent Topics: Implementation

Implemented 2026-10-08. The decision for every proposal is in `next-20-ai-agent-content-audit.md`. Total articles: **794** (786 before). Changes are uncommitted.

**Summary:** 8 articles published, 12 proposals rejected as duplicates, 2 merged into one, 1 research replacement. 12 existing articles updated, two of them with substantial new sections.

## Final articles

| # | Title | URL | Primary keyword | Secondary keywords | Intent | Cluster |
|---|---|---|---|---|---|---|
| 1 | How to Build an Audit Trail for AI Agent Actions | /blogs/ai-agent-audit-trail | AI agent audit trail | agent audit logs, trace ID, correlation ID, tamper-resistant logs | How-to / implementation | Agent governance |
| 2 | AI Agent Rollback: How to Safely Undo Autonomous Actions | /blogs/ai-agent-rollback | AI agent rollback | compensating transactions, undo agent actions, idempotency | How-to / framework | Agent governance |
| 3 | AI Agent Sandbox: How to Isolate Agents Before They Get Production Access | /blogs/ai-agent-sandbox | AI agent sandbox | sandbox vs staging, agent test environment, mock tools | Implementation / comparison | Agent governance |
| 4 | AI Agent Tool Selection: Why Too Many Tools Make Agents Worse | /blogs/ai-agent-tool-selection | AI agent tool selection | too many tools, tool search, tool routing, MCP tools | Technical explanation | Agent reliability |
| 5 | How to Reduce Hallucinations in AI Agents Without Making Them Useless | /blogs/reduce-ai-agent-hallucinations | reduce AI agent hallucinations | grounding, hallucinated tool arguments, wrong actions | Problem / solution | Agent reliability |
| 6 | Structured Outputs: How to Get Reliable, Machine-Readable Results From AI Models | /blogs/llm-structured-outputs | structured outputs | JSON schema LLM, strict tool calling, JSON mode | Technical / how-to | Agent reliability |
| 7 | AI Automation Architecture: How Agents, Workflows, APIs and People Fit Together | /blogs/ai-automation-architecture | AI automation architecture | AI automation with existing systems, event-driven automation, workflow layer | Architecture | Automation architecture |
| 8 | AI Automation Integration: APIs, Webhooks, MCP or RPA? | /blogs/ai-automation-integration-options | APIs vs webhooks vs MCP vs RPA | AI integration options, webhook vs API, MCP vs RPA | Comparison / decision | Automation architecture |

## Questions each article answers (AEO and AI-answer targets)

- **Audit trail:** What is an AI agent audit trail? How is it different from observability? Should prompts be logged? How long should logs be kept?
- **Rollback:** What is AI agent rollback? Can every action be undone? What is a compensating action?
- **Sandbox:** What is an AI agent sandbox? How is a sandbox different from staging? What data should it use?
- **Tool selection:** How do agents decide which tool to use? Why do too many tools reduce reliability? What is tool search?
- **Hallucinations:** What is the difference between a hallucination and a wrong action? Does RAG stop hallucinations?
- **Structured outputs:** What are structured outputs? Do they guarantee correct answers? How do they differ from JSON mode?
- **Architecture:** What is AI automation architecture? Do we need to replace existing systems? Where should the AI sit?
- **Integration:** API vs webhook? Does MCP replace APIs? When is RPA right?

## Internal links and service connections

| Article | Key outbound links | Inbound links added from | Service |
|---|---|---|---|
| Audit trail | access control, authentication, accountability, observability, rollback | access control, rollback, incident response, architecture | AI Automation |
| Rollback | audit trail, autonomy levels, durable execution, incident response | audit trail, access control, incident response, sandbox | AI Automation |
| Sandbox | runaway agents, rollback, evaluation, coding-agent security | runaway agents, evaluation | AI Automation |
| Tool selection | tool design, context engineering, evaluation, MCP governance, structured outputs, tool security | tool design, structured outputs | AI Automation |
| Hallucinations | RAG, context engineering, structured outputs, tool design, evaluation | RAG, structured outputs, evaluation | AI Automation |
| Structured outputs | hallucinations, document extraction, tool design, tool selection | tool design, tool selection, hallucinations, document extraction | AI Automation |
| Architecture | integration options, HITL, access control, audit trail, runaway agents, AI-ready stack, agentic workflows | integration options, orchestration, build vs buy | AI Automation |
| Integration options | API integration, MCP vs API, MCP security/governance, RPA vs AI, computer use, architecture | architecture, MCP vs API, RPA vs AI, build vs buy | AI Automation |

Anchor text is descriptive and varied ("AI agent rollback", "how to safely undo autonomous actions", "AI automation integration options"). No generic anchors are used.

## Existing articles updated

| Article | Change | Absorbs proposal |
|---|---|---|
| context-engineering-ai-agents | New section and table: context engineering vs prompt engineering | #12 |
| build-vs-buy-ai-agents | New section "Four Options, Not Two" (buy, integrate, customize, build) with decision matrix | #20 |
| ai-agent-access-control | Links to audit trail and rollback in "Audit Logs" | #1 |
| ai-agent-incident-response, runaway-ai-agents, ai-agent-tool-design | Contextual links (dates unchanged: same-week articles) | #5, #8, #10 |
| ai-agent-evaluation | Links to sandbox and hallucination checks | #15 |
| mcp-vs-api, rpa-vs-ai-automation, ai-orchestration, retrieval-augmented-generation, ai-document-extraction | Contextual links to the new cluster | #17–#19 |

## Metadata and schema

- Unique `seoTitle` values (48–65 characters) and excerpts of 155 characters or fewer, used verbatim as meta and Open Graph descriptions. Canonical URLs are self-referencing on www.
- Rendered pages carry BlogPosting, BreadcrumbList and FAQPage, plus the site-wide Organization and WebSite graph. Verified in HTML for all 8. No QAPage schema, and no reviews, ratings, fake authors or awards.
- Evergreen copy: no specific years in titles, H1s, URLs, meta descriptions, headings, FAQs or body text. A script confirmed the only years in the new files are the `date` metadata fields; the audit-event example uses placeholders instead of real timestamps.

## Images

- Hero: the existing generated SVG scene system (inline, no image requests, no layout shift), with `sceneKind` pinned on each article. Hero alt text comes from `bannerAlt`.
- 8 new diagram specs were added to `BlogBanner.tsx`: audit flow, rollback path, sandbox vs staging vs production, tool selection flow, hallucination layers, structured output pipeline, automation architecture, and the API/webhook/MCP/RPA comparison. Article bodies also include code-block diagrams for the audit event, the rollback decision tree, the automation reference architecture and the integration decision tree.
- **Open issue (site-wide, pre-existing):** article pages render the scene, not the `banner` diagram, while the cover's accessible label comes from `bannerAlt`. The diagram specs are ready; the template fix is documented in `zspace-next-20-blog-implementation.md`.

## Validation

| Check | Result |
|---|---|
| `tsc --noEmit` | Pass |
| ESLint (`npm run lint`) | 0 errors; 9 pre-existing warnings in unrelated files |
| `npm run build` | Pass; all 794 article routes generated |
| Routes | 8 new articles 200; OG images 200; category breadcrumb `/blogs/category/ai-automation` 200 |
| Broken links | 0 across all 794 posts; all `relatedSlugs` resolve |
| Sitemap | All 8 present; 0 duplicate `<loc>` entries |
| robots.txt | `Allow: /`; pages carry `index, follow` |
| Blog index | All 8 present in `/blogs` |
| Responsive | 8 new + 3 updated articles at 390 / 820 / 1280 px: no horizontal overflow, tables scroll in containers, no broken images |
| Console / hydration | No errors or warnings |
| llms.txt | New group "AI agent operations and automation architecture" (8 entries) |

## Implementation status

All 8 articles are published in `src/lib/blog-data-agent-ops-1.ts` and `-2.ts` and merged into `blog-data.ts`. Nothing is committed: this batch and the three earlier ones (2026-10-07 and 2026-10-08) are all in the working tree.
