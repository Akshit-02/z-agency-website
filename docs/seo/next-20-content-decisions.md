# Next 20: Content Decisions (Production AI batch)

Prepared 2026-10-08 against the full inventory of 773 published articles, including the 29 published on 2026-10-07. Method: each candidate was checked by exact title, URL, keyword, semantic topic and search intent. **GREEN** means a clearly different intent, so it was kept. **YELLOW** means some overlap, so it was repositioned. **RED** means it essentially duplicates an existing article, so it was rejected and a replacement researched.

## Result

- **Candidates kept:** 6 articles (2 GREEN; 4 YELLOW repositioned, two of them formed by merging candidate pairs).
- **Candidates rejected:** 11 RED. 7 of them became updates to the existing article that already owns the intent.
- **Replacements:** 7 new topics from research.
- **Published:** **13 articles**. Publishing all 20 would have created at least 9 pages competing with existing ZSpace URLs, several of them only a day old.

## Candidate decisions

| # | Candidate | Existing ZSpace content | Decision | Outcome |
|---|---|---|---|---|
| 1 | How to Evaluate an AI Agent Before Putting It Into Production | `ai-agent-evaluation` (accuracy, reliability, performance), `why-ai-agents-fail-in-production` (readiness gate), `llm-evaluation-pipeline` | **RED** | Updated `ai-agent-evaluation` with a production sign-off section |
| 2 | Multi-Agent vs Single AI Agents | `single-agent-vs-multi-agent-systems` (same title intent), `ai-agent-orchestration` | **RED** | Updated `single-agent-vs-multi-agent-systems` with Anthropic's token-cost evidence |
| 3 | Agent Evaluation Framework for Business Workflows | `ai-agent-evaluation`, `ai-agent-roi` (business metrics) | **RED** | Covered by the update for #1 |
| 4 | AI Agent Observability: What to Monitor | `ai-agent-observability` ("How to Monitor and Debug Agentic Systems"), `llm-observability` | **RED** | Updated with links to the new loop and durable-execution articles |
| 5 | How Much Autonomy Should You Give an AI Agent? | Mentions in `ai-agent-guardrails`, `human-in-the-loop-ai`; coding-only autonomy ladder in `ai-assisted-development-vs-agentic-coding` | **GREEN** | `ai-agent-autonomy-levels` |
| 6 | AI Agent Cost Optimization | `llm-cost-optimization` (LLM apps), `ai-agent-roi` (cost model) | **YELLOW** | Merged with #7, repositioned on agent-specific runaway cost → `runaway-ai-agents` |
| 7 | Prevent AI Agents Getting Stuck in Loops | None dedicated | **GREEN** | Merged into `runaway-ai-agents` |
| 8 | AI Agent Memory: Remember vs Forget | `ai-agent-memory` (same topic) | **RED** | Updated `ai-agent-memory` with a memory governance section (retention, deletion, poisoning, privacy) |
| 9 | How Engineering Teams Should Review AI-Generated Code | `ai-code-review` ("Reviewing AI-Generated Pull Requests" section), `ai-generated-code-security` (pre-launch checklist) | **RED** | Already covered twice; linked from the new policy and team articles |
| 10 | AI Coding Agent Governance | `ai-coding-agent-security` (sandbox, permissions, secrets, team policy by environment) | **YELLOW** | Repositioned to the company policy decision → `ai-coding-policy` |
| 11 | What Is an AI-Native Software Development Team? | One section ("What Changes for Each Role") in `ai-software-development` | **YELLOW** | Repositioned to team design and roles → `ai-native-engineering-team` |
| 12 | AI Coding Agents and Legacy Code | `ai-legacy-code-modernization` | **RED** | Updated with links to spec-driven development |
| 13 | AI Software Development Without Vibe Coding | `ai-software-development-lifecycle`, `vibe-coding-vs-production-software`, `vibe-coded-app-to-production` | **RED** | Replaced by the more specific, rising intent "spec-driven development" |
| 14 | Secure AI Coding Workflow | `ai-coding-agent-security`, `ai-generated-code-security` | **RED** | No new URL |
| 15 | Local AI vs Cloud AI | `llm-self-hosting` (self-hosted vs API), `ai-edge-deployment`, `on-device-ai-mobile-apps` | **YELLOW** | Merged with #16 → `hybrid-ai-architecture` (the local vs cloud decision is its opening section) |
| 16 | Hybrid AI Architecture | None for business applications | **GREEN** | Merged into `hybrid-ai-architecture` |
| 17 | AI Inference Cost: Choosing Models per Task | `llm-routing` ("How to Choose the Right AI Model for Each Task"), `llm-cost-optimization` | **RED** | Replaced by `small-language-models` (when a smaller model is enough), which `llm-routing` lacks |
| 18 | Ecommerce Analytics in the Age of AI Shopping | `ai-commerce-analytics` (published 2026-10-07) | **RED** | Updated with the direct-AI-traffic vs AI-assisted-journey distinction |
| 19 | AI Shopping Changes SEO, CRO and Product Strategy | `ai-agents-ecommerce-funnel` (2026-10-07), `ecommerce-product-data-ai-search`, `ai-search-visibility` | **RED** | Replaced by `agent-placed-orders` (operations after an agent buys) |
| 20 | What Will Happen to Websites When AI Agents Become the Interface? | Practical coverage in `how-ai-agents-use-websites` and `apis-for-ai-agents` | **YELLOW** | Repositioned to the strategic question → `will-ai-agents-replace-websites` (flagship hub that links the practical pieces) |

## Replacements and why each was chosen

| Replacement | Why it is a real gap | Evidence of current interest |
|---|---|---|
| `durable-ai-agents`: durable execution for long-running agents | No ZSpace coverage of how agents survive crashes, rate limits and restarts | Temporal + OpenAI Agents SDK integration (July 2025); Anthropic's multi-agent write-up stresses resuming from errors |
| `computer-use-agents`: when AI should operate screens | No ZSpace article on computer use as a business decision (vs API vs RPA) | Computer-use tools from Anthropic, OpenAI and Google; agents operating browsers |
| `mcp-governance`: controlling which MCP servers agents use | `mcp-security` covers securing a server, not organizational control of many servers | Official MCP Registry (preview Sep 2025); GitHub enterprise MCP allowlists (GA 6 Aug 2026) |
| `spec-driven-development`: a production workflow for coding agents | Replaces candidate 13 with a specific, searched workflow | GitHub Spec Kit (2 Sep 2025); AWS Kiro (spec-driven, GA) |
| `measure-ai-coding-impact`: measuring AI coding tools in a team | `ai-software-development-cost` covers external evidence, not how to measure your own team | DORA 2025 AI Capabilities Model; METR 2026 updates |
| `small-language-models`: when a smaller model is better | Missing decision between model size, cost and deployment | NVIDIA Research position paper (June 2025); Microsoft Foundry Local GA (April 2026) |
| `agent-placed-orders`: fraud, returns and service for agent orders | Commerce cluster covers discovery and analytics, not post-purchase operations | Shopify Agentic Storefronts; Visa TAP; ACP/UCP merchant-of-record model |
