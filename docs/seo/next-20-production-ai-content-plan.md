# Next 20: Production AI Content Plan

Prepared 2026-10-08. For the GREEN/YELLOW/RED decision on every candidate, see `next-20-content-decisions.md`. Implementation and validation are in `next-20-production-ai-implementation.md`.

**Final: 13 new articles + 9 targeted updates.** No search-volume, difficulty or traffic data is available to this project, so none is stated. Priority reflects intent strength, commercial fit, freshness and SERP gaps observed on 2026-10-08. Sources are named in the article text; outbound links stay off per the site-wide rule of 2026-10-03.

## Progression this batch covers

TECHNOLOGY → BUSINESS PROBLEM → DECISION → ARCHITECTURE → IMPLEMENTATION → PRODUCTION → MEASUREMENT

| Stage | Articles |
|---|---|
| Business problem / decision | will-ai-agents-replace-websites, ai-agent-autonomy-levels, computer-use-agents, small-language-models |
| Architecture | hybrid-ai-architecture, durable-ai-agents, mcp-governance |
| Implementation | spec-driven-development, ai-coding-policy, ai-native-engineering-team |
| Production | runaway-ai-agents, agent-placed-orders |
| Measurement | measure-ai-coding-impact |

## Final topics

| P | Title | URL | Primary keyword | Secondary / long-tail | Intent | Cluster | Overlap handled | Key internal links | Service | Sources |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Will AI Agents Replace Websites? Why the Interface Layer Is Expanding | /blogs/will-ai-agents-replace-websites | will AI agents replace websites | future of websites, websites for AI agents, AI as interface | Strategic (flagship) | AI as a new user | Hub above how-ai-agents-use-websites and apis-for-ai-agents | how-ai-agents-use-websites, apis-for-ai-agents, ai-search-visibility, ai-agent-traffic-verification | website-development | web.dev (Apr 2026); Google AI optimization guide; Chrome WebMCP; Adobe (Aug 2026) |
| 1 | How Much Autonomy Should You Give an AI Agent? A Five-Level Framework | /blogs/ai-agent-autonomy-levels | AI agent autonomy levels | how autonomous should an AI agent be, agent autonomy framework | Framework/decision | Agents in production | Different from guardrails (controls) and HITL (approval mechanics) | human-in-the-loop-ai, ai-agent-guardrails, ai-agent-accountability | ai-automation | Feng, McDonald & Zhang, "Levels of Autonomy for AI Agents" (arXiv, Jun 2025) |
| 1 | How to Stop AI Agents Looping and Running Up Costs | /blogs/runaway-ai-agents | AI agent loops | AI agent cost control, retry storms, agent step limits, circuit breakers | Implementation | Agent engineering | Agent-specific; llm-cost-optimization stays the general cost guide | llm-cost-optimization, ai-agent-observability, durable-ai-agents | ai-automation | Anthropic multi-agent research system (Jun 2025) |
| 1 | Spec-Driven Development: A Production Workflow for AI Coding Agents | /blogs/spec-driven-development | spec-driven development | Spec Kit, Kiro, AI coding workflow, production AI development | Implementation | AI coding | Replaces candidate 13 | ai-coding-agents, vibe-coding-vs-production-software, ai-code-review | website-development | GitHub blog (2 Sep 2025); AWS Kiro |
| 1 | Local AI vs Cloud AI: How to Design a Hybrid AI Architecture | /blogs/hybrid-ai-architecture | hybrid AI architecture | local AI vs cloud AI, on-premise AI vs cloud, model routing fallback | Architecture/decision | Local + hybrid AI | Merges candidates 15 and 16; self-hosting stays separate | llm-self-hosting, llm-routing, on-device-ai-mobile-apps, small-language-models | ai-automation | Microsoft Foundry Local GA (Apr 2026); Apple PCC; Firebase AI Logic |
| 2 | Durable Execution for AI Agents | /blogs/durable-ai-agents | durable execution AI agents | long-running AI agents, agent state, resume agent after failure | Architecture | Agent engineering | New | ai-agent-orchestration, runaway-ai-agents, why-ai-agents-fail-in-production | ai-automation | Temporal/OpenAI (Jul 2025); Anthropic |
| 2 | Computer-Use Agents for Business | /blogs/computer-use-agents | computer use agents | AI agents operating software, computer use vs API vs RPA | Decision | Agent engineering | New | rpa-vs-ai-automation, apis-for-ai-agents, ai-agent-autonomy-levels | ai-automation | Anthropic, OpenAI, Google computer-use docs |
| 2 | MCP Governance: How Companies Control Which MCP Servers Agents Can Use | /blogs/mcp-governance | MCP governance | MCP allowlist, MCP registry, MCP gateway | Implementation | Agent governance | mcp-security covers server hardening | mcp-security, model-context-protocol, ai-coding-policy | ai-automation | MCP Registry (Sep 2025); GitHub changelog (6 Aug 2026) |
| 2 | AI Coding Policy: What to Decide Before Rolling Out Coding Agents | /blogs/ai-coding-policy | AI coding policy | AI acceptable use policy developers, coding agent governance | Implementation/policy | AI coding | ai-coding-agent-security covers technical controls | ai-coding-agent-security, ai-generated-code-security, mcp-governance | ai-automation | GitHub, vendor docs |
| 2 | What Is an AI-Native Software Team? | /blogs/ai-native-engineering-team | AI-native engineering team | how AI changes developer roles, team structure coding agents | Strategic | AI coding | Extends one section of ai-software-development | ai-software-development, measure-ai-coding-impact, spec-driven-development | website-development | DORA 2025 + AI Capabilities Model |
| 2 | Small Language Models for Business | /blogs/small-language-models | small language models | SLM vs LLM, when to use a small model, cheaper AI models | Decision | Local + hybrid AI | llm-routing chooses among models; this decides model size | llm-routing, hybrid-ai-architecture, llm-quantization | ai-automation | NVIDIA Research (Jun 2025); Foundry Local |
| 3 | How to Measure the Impact of AI Coding Tools | /blogs/measure-ai-coding-impact | measure AI coding productivity | AI developer productivity metrics, DORA AI | Measurement | AI coding | ai-software-development-cost covers external evidence | ai-software-development-cost, ai-native-engineering-team | website-development | DORA 2025; METR |
| 3 | Orders Placed by AI Agents: Fraud, Returns and Customer Service | /blogs/agent-placed-orders | AI agent orders | agentic commerce fraud, returns for agent orders | Operations | AI commerce | New | agentic-commerce, ai-agent-traffic-verification, ecommerce-returns-management | shopify-development | Shopify Help Center; Visa TAP; OpenAI ACP |

## Updates (absorbing RED candidates)

ai-agent-evaluation (#1, #3), single-agent-vs-multi-agent-systems (#2), ai-agent-observability (#4), ai-agent-memory (#8), ai-legacy-code-modernization (#12), ai-commerce-analytics (#18), llm-routing (#17), how-ai-agents-use-websites (#20), ai-software-development-lifecycle (#13).
