# Next 20 AI Agent Topics: Content Audit

Audited 2026-10-08 against all 786 published articles (source: `src/lib/blog-data*.ts`, dumped by script). Each proposal was checked for exact title, URL, keyword, semantic topic and search intent. Many of the overlapping articles were published in the three batches immediately before this one.

**Outcome:** 4 GREEN, 3 YELLOW (one formed by merging two proposals), 12 RED, 1 research replacement. **8 articles published.** Twelve proposals would have competed directly with existing URLs. Two more replacement ideas (agentic UX, AI feature pricing) were researched and rejected because `ai-ux-design`, `ai-copilot-ux`, `ai-error-handling-ux` and `ai-powered-saas-development` already cover them.

| # | Proposed Topic | Existing Overlap | Decision | Reason | Final Topic |
|---|---|---|---|---|---|
| 1 | AI Agent Permissions (/blogs/ai-agent-permissions) | `ai-agent-access-control` (identity models, authorization path, scoped credentials, RBAC/ABAC, approval boundaries, example policy) | RED | Same query and decision ("what can an agent do") | Not published; access control is the canonical page. New articles link to it |
| 2 | AI Agent Identity (/blogs/ai-agent-identity) | `ai-agent-authentication` (agent identities, delegation, OAuth, token exchange, MCP authorization) | RED | Same intent; identity vs permissions distinction already drawn there | Not published |
| 3 | AI Agent Audit Trail (/blogs/ai-agent-audit-trail) | Sections only: "Audit Logs" in `ai-agent-access-control`, evidence list in `ai-agent-accountability` | GREEN | No article on designing the audit record, correlation IDs, tamper resistance and retention | **How to Build an Audit Trail for AI Agent Actions** |
| 4 | AI Agent Rollback (/blogs/ai-agent-rollback) | One paragraph in `ai-agent-incident-response` ("reverse and remediate") | GREEN | No article on reversibility, compensation, idempotency and what cannot be undone | **AI Agent Rollback: How to Safely Undo Autonomous Actions** |
| 5 | AI Agent Failure Recovery (/blogs/ai-agent-failure-recovery) | `runaway-ai-agents` (retries, budgets, breakers, escalation), `durable-ai-agents` (resume after failure), `ai-agent-incident-response`, `llm-application-reliability`, `why-ai-agents-fail-in-production` | RED | Five existing articles answer it from almost the same angle | Not published; rollback covers the remaining compensation angle |
| 6 | AI Agent Sandbox (/blogs/ai-agent-sandbox) | `ai-coding-agent-security` (coding agents only), `computer-use-agents` (isolation section) | YELLOW | Distinct if positioned on business agents: sandbox vs staging vs production, mock tools, disposable environments | **AI Agent Sandbox: How to Isolate Agents Before They Get Production Access** |
| 7 | AI Agent Approval Gates (/blogs/ai-agent-approval-gates) | `human-in-the-loop-ai` (modes, routing thresholds, review UI, queues), `ai-agent-autonomy-levels` (risk-based levels) | RED | Same decision and framework | Not published |
| 8 | AI Agent Rate Limits (/blogs/ai-agent-rate-limits) | `runaway-ai-agents` (step, token, cost, time, concurrency limits, circuit breakers) | RED | Published one day earlier with the same scope | Not published |
| 9 | AI Agent Tool Selection (/blogs/ai-agent-tool-selection) | `ai-agent-tool-design` covers designing a tool, not choosing among many | YELLOW | Distinct angle: tool overload, routing, deferred loading and tool search | **AI Agent Tool Selection: Why Too Many Tools Make Agents Worse** |
| 10 | Reliable Tool Calling (/blogs/reliable-ai-agent-tool-calling) | `ai-agent-tool-design` (schemas, errors, idempotency, confirmations), `ai-tool-security` (validation, authorization, execution, outputs) | RED | Two articles already cover the workflow | Replaced by **Structured Outputs** (#R1), the uncovered piece |
| 11 | AI Agent Context Engineering (/blogs/ai-agent-context-engineering) | `context-engineering-ai-agents` | RED | Exact duplicate intent | Not published |
| 12 | Context vs Prompt Engineering (/blogs/context-engineering-vs-prompt-engineering) | "From prompt engineering to context engineering" section in `context-engineering-ai-agents` | RED | A separate page would compete for "context engineering" | Existing article updated with a comparison table |
| 13 | Reduce AI Agent Hallucinations (/blogs/reduce-ai-agent-hallucinations) | No dedicated article (grounding appears inside RAG articles) | GREEN | Clear gap; system-level angle and the hallucination vs wrong-action distinction are new | **How to Reduce Hallucinations in AI Agents Without Making Them Useless** |
| 14 | AI Agent Data Access Security (/blogs/ai-agent-data-access-security) | `ai-data-leakage`, `ai-data-privacy`, `ai-agent-access-control`, `ai-agent-memory` (governance) | RED | Same intent split across four existing articles | Not published |
| 15 | AI Agent Testing (/blogs/ai-agent-testing) | `ai-agent-evaluation` (tool use and trajectories, regression gates, production sign-off), `llm-regression-testing`, `ai-security-testing` | RED | Covered; the environment side moves to the sandbox article | Not published |
| 16 | Prototype to Production (/blogs/ai-agent-prototype-to-production) | `ai-poc-vs-pilot-vs-production`, `why-ai-agents-fail-in-production` (readiness gate, staged rollout) | RED | Same decision and checklist | Not published |
| 17 | AI Automation Architecture (/blogs/ai-automation-architecture) | `ai-orchestration` (short, model/tool flow), `ai-ready-business-stack` (layers, not runtime architecture) | YELLOW | Distinct as a runtime reference architecture: interface, agent, workflow, events, APIs, humans, monitoring | **AI Automation Architecture: How Agents, Workflows, APIs and People Fit Together** (merged with #18) |
| 18 | AI Automation Around Existing Systems (/blogs/ai-automation-existing-systems) | Same audience and decision as #17 and #19 | YELLOW → merged | Splitting would create two pages for one question | Merged into #17 |
| 19 | APIs vs Webhooks vs MCP vs RPA (/blogs/ai-automation-integration-options) | `mcp-vs-api`, `rpa-vs-ai-automation`, `workflow-automation-vs-rpa` (pairwise only) | GREEN | No four-way integration decision guide exists | **AI Automation Integration: APIs, Webhooks, MCP or RPA?** |
| 20 | Build vs Buy AI Agent (/blogs/build-vs-buy-ai-agent) | `build-vs-buy-ai-agents` (published 2026-10-07) | RED | Near-identical URL and intent | Not published; existing article updated with an "integrate / customize" note |
| R1 | Replacement: Structured Outputs | No dedicated article; mentioned in passing across many | GREEN (replacement) | Reliability layer between model and tools; strong developer and decision-maker intent | **Structured Outputs: How to Get Reliable, Machine-Readable Results From AI Models** |

## Updates instead of duplicates

| Existing article | Change | Replaces proposal |
|---|---|---|
| context-engineering-ai-agents | Context vs prompt engineering comparison table | #12 |
| build-vs-buy-ai-agents | Four-option view (build, buy, integrate, customize) | #20 |
| ai-agent-access-control | Permission matrix example linked to the new audit and rollback articles | #1 |
| ai-agent-incident-response, runaway-ai-agents, ai-agent-tool-design, ai-agent-evaluation, mcp-vs-api, rpa-vs-ai-automation, ai-orchestration | Contextual links to the new cluster | #5, #8, #10, #15 |
