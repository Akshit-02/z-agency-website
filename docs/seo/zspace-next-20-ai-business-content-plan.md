# ZSpace Labs: AI-Ready Business Content Plan (October 2026, batch 2)

Prepared 2026-10-07. Inventory audited: 761 published articles (744 earlier + 17 from the "next 20" batch earlier today). Companion report: `zspace-next-20-ai-business-implementation.md`.

## Outcome

The brief proposed 20 topics. **12 new articles** are justified. **6 candidates duplicate existing ZSpace articles** and were handled as updates. **8 candidates collapse into 4 articles** because they target the same intent in pairs. **2 replacements** came from research. Publishing 20 URLs would have created at least six pairs of competing pages.

## Research limits

No keyword-volume, difficulty, CPC or Search Console data source is connected, so none is stated. SERP observations come from web search results reviewed on 2026-10-07. Statistics in the articles come only from named sources: Gartner (June 2025), McKinsey State of AI 2025, Adobe Analytics (July 2026, via Digital Commerce 360), Shopify earnings (Q3 2025 via TechCrunch; Q2 2026 via Retail TouchPoints), and Microsoft, Anthropic, OpenAI and MCP documentation. Outbound links remain off per the site-wide rule, so sources are named in plain text.

## Candidate audit

| # | Candidate | Existing overlap | Decision |
|---|---|---|---|
| 1 | ROI of an AI agent before you build | `ai-implementation-strategy` has a business-case step; no dedicated ROI/cost article | **Kept** → `ai-agent-roi` (absorbs agent cost) |
| 2 | Agent pilot vs production | `ai-poc-vs-pilot-vs-production` (same decision) | **Dropped**; existing article gets an agent-specific note and links to #8 |
| 3 | Choosing the right process for agent automation | Partly `when-to-automate-a-business-process` (whether to automate at all) | **Merged with #17** → `which-processes-suit-ai-agents` |
| 4 | Agent governance: who is responsible | `ai-governance-framework` (organisation-wide) | **Kept, narrowed** to agent accountability → `ai-agent-accountability` |
| 5 | Human approval workflows | `human-in-the-loop-ai` (approval modes, queues, review UI, metrics) | **Dropped**; existing article updated with links |
| 6 | Agent identity | `ai-agent-access-control` covers authorisation and identity models | **Kept, narrowed** to authentication and delegation mechanics → `ai-agent-authentication` |
| 7 | What data an agent needs | `ai-data-readiness`, `data-quality-for-ai` | **Reframed** to context engineering (runtime information supply) → `context-engineering-ai-agents` |
| 8 | Why agents fail in production | `llm-application-reliability` covers LLM apps generally | **Kept** (absorbs #2) → `why-ai-agents-fail-in-production` |
| 9 | Make your website agent-ready | `how-ai-agents-use-websites` (published earlier today) | **Dropped (duplicate)** |
| 10 | Build APIs for AI agents | Partly `mcp-vs-api`, `how-to-build-an-mcp-server` (technical) | **Kept as business decision, merged with #11** → `apis-for-ai-agents` |
| 11 | From websites to agent interfaces | `how-ai-agents-use-websites` + #10 | **Merged into #10** |
| 12 | AI-ready product data architecture | `ecommerce-product-data-architecture`, `ecommerce-product-data-ai-search` | **Dropped**; architecture article updated |
| 13 | AI agents change ecommerce funnels | Partly `agentic-commerce` ("what changes for merchants") | **Merged with #14** → `ai-agents-ecommerce-funnel` |
| 14 | Product pages when agents are the buyer | Same audience and decision as #13 | **Merged into #13** |
| 15 | AI shopping traffic vs organic: what to measure | `ai-search-traffic-tracking` (site-wide setup) | **Merged with #16**, repositioned to ecommerce revenue → `ai-commerce-analytics` |
| 16 | Track AI-referred customers and sales | As #15 | **Merged into #15** |
| 17 | AI automation vs AI agents | `rpa-vs-ai-automation` (now with agent section), `agentic-workflow-automation` | **Merged into #3** |
| 18 | AI automation roadmap | `ai-implementation-strategy` (90-day plan), `ai-readiness-assessment` (gaps→roadmap), `enterprise-ai-implementation` | **Dropped (triplicate)** |
| 19 | AI transformation is a systems problem | Partly `enterprise-ai-implementation` (operating model) | **Merged with #20** → `ai-ready-business-stack` |
| 20 | The AI-native business stack | `ai-platform-engineering` (internal platform for AI teams) is a different audience | **Merged into #19** |

**Replacements from research:** `build-vs-buy-ai-agents`. Platform choices (Agentforce, Copilot Studio, Gemini Enterprise, Bedrock AgentCore, OpenAI AgentKit) are a live commercial-investigation question, and the site has nothing on it. `ai-agent-incident-response`: production agents need a response plan and kill switch, and the site has observability but no incident article.

**Considered and rejected:** an EU AI Act transparency article (covered in `ai-governance-framework`, and it risks reading as legal advice); a "ChatGPT plugin for your business" article (folded into `apis-for-ai-agents`, since it is the same decision about exposing capabilities); "agentic AI vs generative AI" (definitional, against the brief's shift away from explainers).

## Final 12 articles (publication order)

| P | Title | URL | Primary keyword | Secondary / long-tail | Intent · stage | Cluster | Audience | Service | Internal links (key) | Sources | AEO questions |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | How to Calculate the ROI of an AI Agent Before You Build One | /blogs/ai-agent-roi | AI agent ROI | AI agent cost, AI agent business case, cost to run an AI agent | Commercial investigation · consideration | Agents in production | Founders, COOs, CFOs | ai-automation | which-processes-suit-ai-agents, ai-implementation-strategy, llm-cost-optimization, build-vs-buy-ai-agents | Gartner (Jun 2025); McKinsey 2025 | How do you calculate AI agent ROI? What does an AI agent cost to run? |
| 1 | Which Business Processes Suit AI Agents? | /blogs/which-processes-suit-ai-agents | which processes suit AI agents | AI agent vs automation, when to use an AI agent, agent use case selection | Decision · consideration | Agents in production | Ops leaders, product managers | ai-automation | when-to-automate-a-business-process, agentic-workflow-automation, rpa-vs-ai-automation, ai-agent-roi | Anthropic "Building effective agents" | When should a business use an AI agent? When is plain automation better? |
| 1 | Why AI Agents Fail in Production: 12 Problems Teams Discover Too Late | /blogs/why-ai-agents-fail-in-production | why AI agents fail | AI agent production problems, agent pilot to production | Problem/solution · evaluation | Agents in production | CTOs, eng leads | ai-automation | ai-poc-vs-pilot-vs-production, ai-agent-evaluation, ai-agent-observability, context-engineering-ai-agents | Gartner (Jun 2025); McKinsey 2025 | Why do AI agent projects fail? What changes from pilot to production? |
| 1 | AI Adoption Is a Systems Problem: The AI-Ready Business Stack | /blogs/ai-ready-business-stack | AI-ready business | AI-native business stack, AI infrastructure for business, AI transformation systems | Strategic · awareness/consideration | AI-ready business | Founders, CIOs | ai-automation | ai-readiness-assessment, enterprise-ai-implementation, ai-data-readiness, apis-for-ai-agents | McKinsey 2025 | What does a business need beyond an AI model? |
| 2 | Context Engineering: What Information an AI Agent Needs to Work Reliably | /blogs/context-engineering-ai-agents | context engineering AI agents | what data does an AI agent need, agent context, context rot | Technical explanation · consideration | Agent infrastructure | CTOs, product managers | ai-automation | ai-data-readiness, retrieval-augmented-generation, ai-agent-memory, ai-agent-tool-design | Anthropic context engineering (Sep 2025) | What is context engineering? What data does an agent need? |
| 2 | Should Your Business Build APIs for AI Agents? | /blogs/apis-for-ai-agents | APIs for AI agents | MCP server for business, ChatGPT plugin for business, Claude connector, agent interface | Business decision · consideration | AI as a new user | CTOs, product leaders | website-development | how-ai-agents-use-websites, mcp-vs-api, how-to-build-an-mcp-server, ai-agent-authentication | MCP spec 2026-07-28; OpenAI plugin docs; Anthropic connectors | Should we offer an MCP server? Website, API or ChatGPT plugin? |
| 2 | AI Agent Identity and Authentication: How Agents Should Prove Who They Are and Act for Users | /blogs/ai-agent-authentication | AI agent authentication | AI agent identity, on-behalf-of agents, OAuth for AI agents, Entra Agent ID | Implementation · evaluation | Agent governance | CTOs, security/IAM teams | ai-automation | ai-agent-access-control, mcp-security, ai-agent-traffic-verification | MCP authorization spec; RFC 8693; Microsoft Entra Agent ID docs | How should AI agents authenticate? Should an agent use a user's credentials? |
| 2 | Who Is Responsible When an AI Agent Makes a Mistake? | /blogs/ai-agent-accountability | AI agent accountability | who is liable for AI agent mistakes, AI agent governance, agent ownership | Strategic + practical · consideration | Agent governance | Founders, legal/ops leads | ai-automation | ai-governance-framework, human-in-the-loop-ai, ai-agent-incident-response | Moffatt v. Air Canada (2024 BCCRT 149); EU PLD 2024/2853 | Is a company liable for its AI agent? Who owns an agent? |
| 2 | AI Agent Incident Response: What to Do When an Agent Gets It Wrong | /blogs/ai-agent-incident-response | AI agent incident response | AI agent kill switch, agent rollback, AI incident playbook | Implementation · post-launch | Agent governance | Eng/ops leads | ai-automation | ai-agent-observability, owasp-top-10-agentic-applications, ai-agent-accountability | OWASP agentic Top 10 | What should you do when an AI agent makes a mistake? |
| 2 | Build vs Buy AI Agents: Platforms vs Custom Development | /blogs/build-vs-buy-ai-agents | build vs buy AI agents | Agentforce vs custom, Copilot Studio vs custom agent, AI agent platforms | Commercial investigation · decision | Agents in production | CIOs, founders | ai-automation | ai-agent-development, ai-agent-roi, ai-agent-authentication | Vendor documentation | Should we build or buy an AI agent? |
| 3 | How AI Agents Change the Ecommerce Funnel (and What It Means for Product Pages) | /blogs/ai-agents-ecommerce-funnel | AI agents ecommerce funnel | product pages for AI agents, agentic commerce conversion, AI shopping funnel | Strategic · awareness | AI commerce | Ecommerce leaders | shopify-development, cro-audit | agentic-commerce, ecommerce-product-data-ai-search, ecommerce-product-page-design, ai-commerce-analytics | Adobe (Jul 2026); Shopify earnings | How do AI agents change the ecommerce funnel? What do product pages need now? |
| 3 | How to Track AI-Referred Ecommerce Sales: Traffic, Orders and Agent-Placed Purchases | /blogs/ai-commerce-analytics | track AI-referred sales | AI shopping traffic vs organic, ChatGPT orders Shopify, AI commerce analytics | How-to · post-launch | AI commerce | Ecommerce/analytics leads | cro-audit | ai-search-traffic-tracking, ecommerce-attribution, shopify-analytics-guide | Adobe; Shopify; GA4 docs | How do I measure sales from ChatGPT? Is AI traffic better than organic? |

## Updates planned

`ai-poc-vs-pilot-vs-production`, `human-in-the-loop-ai`, `ai-agent-access-control`, `ai-implementation-strategy`, `ai-readiness-assessment`, `ecommerce-product-data-architecture` (AI-ready product data section, absorbing candidate 12), `ecommerce-attribution`, `ai-agent-development`, `how-ai-agents-use-websites`, `ai-data-readiness`.

## Cluster graph

```
AGENTS IN PRODUCTION                    AGENT GOVERNANCE
which-processes-suit-ai-agents          ai-agent-accountability
 → ai-agent-roi → build-vs-buy-ai-agents  → ai-agent-authentication → ai-agent-access-control (existing)
 → why-ai-agents-fail-in-production       → human-in-the-loop-ai (existing)
 → context-engineering-ai-agents          → ai-agent-incident-response → ai-agent-observability (existing)

AI-READY BUSINESS / AI AS A USER        AI COMMERCE
ai-ready-business-stack                 ai-agents-ecommerce-funnel
 → apis-for-ai-agents                     → ecommerce-product-data-ai-search / -architecture (existing)
 → how-ai-agents-use-websites (existing)  → ai-commerce-analytics → ai-search-traffic-tracking (existing)
 → ai-agent-traffic-verification          → agentic-commerce / shopify-agentic-commerce (existing)
```
