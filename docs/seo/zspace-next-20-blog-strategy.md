# ZSpace Labs: Next 20 Blog Strategy (October 2026)

Prepared 2026-10-07. Inputs: the full inventory of 744 published articles (`docs/seo/existing-content-inventory.md`), primary-source research on AI search, AI agents, AI coding and mobile AI (October 2026), and a SERP review of each candidate topic.

## Outcome in one paragraph

Of the 20 candidate topics in the brief, **8 already exist with the same search intent** and should not be republished, **4 were merged or reframed**, and **8 survived as proposed**. Research surfaced **9 stronger replacements**, mostly in AI search for general websites and AI-built software, where the site has no coverage today. The final plan is **17 new articles plus 9 targeted updates**, not 20 new URLs: three more new URLs would have competed with existing articles. Quality over count was the brief's explicit rule.

## Research limits (read first)

- **No keyword metrics.** No Search Console export, Google Trends API, DataForSEO, Ahrefs or Semrush access is connected. Search volume and keyword difficulty are therefore **not stated anywhere** in this plan. Priority is based on intent strength, commercial fit, freshness of the topic, and how weak or misleading the current results are.
- **SERP observations** come from US web search results reviewed on 2026-10-07 (a proxy for the Google SERP, not a rank-tracker snapshot).
- **Facts** in the articles come from official documentation where it exists (Google Search Central, web.dev, Chrome for Developers, OpenAI, Anthropic, Apple, Android Developers, IETF, OWASP, Visa) and from named research reports (Veracode, METR, DORA, Stack Overflow, USENIX Security). Fast-moving items are dated in the text.
- **External links:** outbound links were removed site-wide on 2026-10-03 at the owner's request (kept only on the India listicles). New articles follow that rule and **cite sources by name in plain text**. If the owner wants clickable references back, they can be added later as `[[https://…|label]]`, which the renderer already supports.

## Candidate audit: what happened to each of the 20

| # | Candidate | Existing ZSpace article with the same intent | Decision |
|---|---|---|---|
| 1 | What is agentic commerce? | `agentic-commerce` (protocols, merchant of record, what's live) | **Dropped (duplicate).** Updated the existing article instead |
| 2 | Ecommerce ready for AI shopping agents | `ai-shopping-agents` (has a preparation checklist), `shopify-agentic-commerce` | **Merged:** extended `ai-shopping-agents` with an agent-readiness section linking the new agent-web articles |
| 3 | Discoverable in ChatGPT, Gemini and AI search | None for general websites (ecommerce-only `ecommerce-product-data-ai-search`) | **Kept** → `ai-search-visibility` |
| 4 | GEO vs SEO | None | **Kept** → `geo-vs-seo` |
| 5 | How AI agents actually use websites | None | **Kept and merged with #20** → `how-ai-agents-use-websites` |
| 6 | AI agent vs chatbot vs assistant | `ai-agent-vs-ai-chatbot` | **Dropped (duplicate).** Existing article updated with links |
| 7 | Build an agent that takes actions | `ai-agent-development` (hub) covers the build intent | **Reframed** to the uncovered sub-intent: tool design → `ai-agent-tool-design` |
| 8 | AI agent security: control access | `ai-agent-access-control`, `ai-agent-guardrails`, `ai-tool-security` | **Replaced** by `owasp-top-10-agentic-applications` (framework-led, no existing coverage) |
| 9 | AI coding agents vs traditional development | `ai-coding-agents`, `ai-assisted-development-vs-agentic-coding`, `ai-software-development` | **Reframed** to the business question nobody on the site answers: cost → `ai-software-development-cost` |
| 10 | Vibe coding vs production software | None | **Kept** → `vibe-coding-vs-production-software` |
| 11 | Production-ready software with AI coding agents | Partly `ai-coding-agents` | **Reframed** to the rescue intent → `vibe-coded-app-to-production` |
| 12 | AI-generated code security | None (only `ai-code-review`, which is about review tooling) | **Kept** → `ai-generated-code-security` |
| 13 | On-device AI in mobile apps | Partly `ai-powered-mobile-app-development` (one section) | **Kept as a spoke** → `on-device-ai-mobile-apps` |
| 14 | AI-native mobile apps | `ai-powered-mobile-app-development`, #13 | **Replaced** by `mobile-app-ai-assistant-integration` (App Intents / AppFunctions) |
| 15 | AI search is changing product pages | `ecommerce-product-data-ai-search`, product page articles | **Dropped (duplicate).** Existing article updated with Google's May 2026 guide |
| 16 | Product data matters more than keywords | `ecommerce-product-data-ai-search`, `ecommerce-product-feeds`, `ecommerce-product-data-architecture` | **Dropped (duplicate)** |
| 17 | AI product recommendation system | `ecommerce-recommendation-engine`, `ai-recommendation-systems`, `ai-product-recommendations` | **Dropped (triplicate already)** |
| 18 | 15 processes AI agents can automate | 31 industry agent articles + `business-process-automation`, `when-to-automate-a-business-process` | **Dropped:** a generic list would compete with 30+ pages |
| 19 | AI agent vs RPA | `rpa-vs-ai-automation`, `workflow-automation-vs-rpa` | **Dropped (duplicate).** `rpa-vs-ai-automation` updated with the agent angle |
| 20 | The new website in the age of agents | — | **Merged into #5** (same audience and actions) |

Replacements found by research: `ai-crawlers-robots-txt`, `llms-txt`, `ai-search-traffic-tracking`, `ai-agent-traffic-verification`, `ai-coding-agent-security`, `claude-code-vs-codex-vs-cursor`, `owasp-top-10-agentic-applications`, `mobile-app-ai-assistant-integration`, `ai-software-development-cost`.

Considered and rejected: an `AGENTS.md` setup guide (the `ai-coding-agents` article already has a repository-instructions section, which was extended instead), "WebMCP" as a standalone article (too early; covered inside `how-ai-agents-use-websites`), "how to sell on ChatGPT" (covered by `agentic-commerce` and `shopify-agentic-commerce`, and OpenAI's checkout model changed in March 2026).

## Trends that shaped the plan

1. **Google redefined "AI search optimisation" as SEO.** Its *Optimizing your website for generative AI features* guide (May 2026, updated July 2026) says there are no special files, schema or chunking requirements, that Search ignores llms.txt, and that unique, non-commodity content matters most. Many ranking articles still sell the opposite. That gap is the angle for the AI-search cluster.
2. **AI visibility became measurable.** Search Console added Generative AI performance reports (June 2026). GA4 added an "AI Assistant" default channel (May 2026). ChatGPT tags referrals with `utm_source=chatgpt.com`.
3. **Agents now browse and act on websites.** web.dev published *Build agent-friendly websites* (April 2026). WebMCP entered a Chrome origin trial in Chrome 149 (tokens expire 2026-11-17). ChatGPT agent signs requests (RFC 9421), and IETF chartered a Web Bot Auth working group. Visa's Trusted Agent Protocol builds on the same signatures.
4. **AI-built software is moving into production, and the evidence is mixed.** Veracode's 2026 report puts the average security pass rate at 56%, flat on last year. DORA 2025 finds AI improves throughput but still hurts stability. METR's 2026 update could no longer measure a slowdown and found possible speedups, with wide uncertainty. "Vibe coding" was Collins' Word of the Year 2025, and rescue/hardening searches are commercial.
5. **Mobile AI moved into the OS.** Apple's iOS 27 Foundation Models framework accepts any conforming model. App Intents schemas feed Siri. Android's AppFunctions makes apps act as on-device MCP servers, and Firebase AI Logic offers hybrid on-device/cloud routing.
6. **Agent security got a shared vocabulary:** the OWASP Top 10 for Agentic Applications (December 2025).

## Final plan: 17 new articles, in publication order

Priority 1 = strongest mix of business intent, commercial fit and SERP gap. All articles go live together in this batch; the order is the recommended promotion and internal-linking sequence.

### 1. How to Make Your Website Discoverable in ChatGPT, Gemini and AI Search
- **URL:** /blogs/ai-search-visibility · **Priority 1** · Cluster B (AI search)
- **Primary keyword:** make website discoverable in AI search · **Secondary:** get cited by ChatGPT, appear in AI Overviews, AI search visibility, Gemini citations
- **Intent:** how-to (business owners, marketing leads) · **Audience:** owners and marketing leads of service businesses, SaaS and ecommerce
- **Competing ZSpace article:** none (ecommerce-only `ecommerce-product-data-ai-search` is linked as the product-data spoke)
- **Why different:** top results promise "ranking in ChatGPT" through formatting tricks and llms.txt. This article separates what platforms document (crawl access, indexing, snippet eligibility, Merchant Center, Business Profile) from guesswork, and gives a 30-day plan.
- **SERP observations:** agency listicles and tool vendors dominate. Few cite Google's own AI optimization guide or OpenAI's crawler documentation, and some claim blocking GPTBot hides you from ChatGPT search (it doesn't; OAI-SearchBot controls that).
- **Commercial intent:** high (website rebuilds, technical SEO, content) · **Service:** /services/website-development
- **Internal links:** geo-vs-seo, ai-crawlers-robots-txt, llms-txt, ai-search-traffic-tracking, seo-friendly-website-development, ecommerce-product-data-ai-search
- **Sources:** Google Search Central AI optimization guide and AI features doc; OpenAI crawler overview and publisher FAQ; Anthropic crawler article; Bing Webmaster guidance

### 2. GEO vs SEO: What Actually Changes for AI Search (and What Doesn't)
- **URL:** /blogs/geo-vs-seo · **Priority 1** · Cluster B
- **Primary keyword:** GEO vs SEO · **Secondary:** generative engine optimization, AEO vs SEO, is GEO different from SEO
- **Intent:** comparison / decision · **Audience:** founders and marketers deciding whether to hire a "GEO agency" or change content strategy
- **Competing ZSpace article:** none
- **Why different:** most ranking pages argue GEO "replaces" SEO and quote unsourced zero-click figures. This one compares the two on mechanics, with Google's own position and the Princeton GEO paper as context, and lists what genuinely differs (measurement, query fan-out, citation-worthiness, off-site corroboration).
- **SERP observations:** WordStream, agency blogs and vendors. Heavy reliance on unattributed statistics; little mention of Google's "still SEO" stance.
- **Commercial intent:** medium-high · **Service:** /services/website-development
- **Internal links:** ai-search-visibility, ai-search-traffic-tracking, llms-txt, seo-friendly-website-development, ecommerce-seo
- **Sources:** Google AI optimization guide; Aggarwal et al., "GEO: Generative Engine Optimization" (KDD 2024); Search Console AI reports

### 3. AI Crawlers and robots.txt: Which AI Bots to Allow, Block or Limit
- **URL:** /blogs/ai-crawlers-robots-txt · **Priority 1** · Cluster B
- **Primary keyword:** AI crawlers robots.txt · **Secondary:** block GPTBot, OAI-SearchBot vs GPTBot, ClaudeBot, Google-Extended, block AI training
- **Intent:** decision + implementation · **Audience:** site owners, developers, publishers
- **Competing ZSpace article:** none
- **Why different:** a bot-by-bot table of purpose (training, search, user-triggered) from each vendor's own documentation, a decision matrix by business type, and copy-ready robots.txt patterns. It corrects common mistakes, for example that Google-Extended affects Search (Google says it doesn't).
- **SERP observations:** plugin vendors and SEO blogs; several state incorrect consequences of blocking.
- **Commercial intent:** medium · **Service:** /services/website-development
- **Internal links:** ai-search-visibility, llms-txt, ai-agent-traffic-verification, secure-business-website-development
- **Sources:** OpenAI crawler overview; Anthropic support article on crawlers; Google common crawlers (Google-Extended); RFC 9309

### 4. How to Measure AI Search Traffic: GA4, Search Console and ChatGPT Referrals
- **URL:** /blogs/ai-search-traffic-tracking · **Priority 1** · Cluster B
- **Primary keyword:** track AI search traffic · **Secondary:** ChatGPT traffic GA4, AI assistant channel GA4, Search Console AI Overviews report, utm_source=chatgpt.com
- **Intent:** how-to (analytics) · **Audience:** marketing and analytics leads
- **Competing ZSpace article:** none (`ecommerce-analytics`, `ecommerce-attribution` are linked)
- **Why different:** many guides still teach regex custom channel groups and miss GA4's native AI Assistant channel (May 2026) and Search Console's Generative AI reports (June 2026). This guide explains what each tool can and cannot see, including AI Overviews counted as organic.
- **SERP observations:** tutorials from 2025 to early 2026, many now outdated.
- **Commercial intent:** medium · **Service:** /services/cro-audit
- **Internal links:** ai-search-visibility, geo-vs-seo, ecommerce-analytics, ecommerce-attribution
- **Sources:** GA4 traffic-source dimensions doc; Google Search Central blog (June 2026); OpenAI publisher FAQ

### 5. llms.txt: What It Does, What It Doesn't, and Whether Your Site Needs One
- **URL:** /blogs/llms-txt · **Priority 2** · Cluster B
- **Primary keyword:** llms.txt · **Secondary:** do I need llms.txt, llms.txt SEO, llms.txt Google
- **Intent:** informational + decision · **Audience:** developers, SEO leads, documentation owners
- **Competing ZSpace article:** none (mentioned only in two FAQs)
- **Why different:** evidence-based answer. Google Search ignores the file, but coding agents and documentation tools do use it, so it suits developer docs better than marketing sites. Includes a spec-conformant example.
- **SERP observations:** split between hype ("essential for AI SEO") and dismissal; few separate search use from developer-tool use.
- **Commercial intent:** low-medium (authority) · **Service:** /services/website-development
- **Internal links:** ai-search-visibility, ai-crawlers-robots-txt, model-context-protocol
- **Sources:** llmstxt.org proposal (Jeremy Howard, 2024); Google AI optimization guide; Claude Code docs index as a live example

### 6. How AI Agents Actually Use Websites (and How to Make Yours Agent-Ready)
- **URL:** /blogs/how-ai-agents-use-websites · **Priority 1** · Cluster B/A (merges candidates 5 and 20)
- **Primary keyword:** how AI agents use websites · **Secondary:** agent-friendly website, agent-ready website, WebMCP, browser agents
- **Intent:** technical explanation + checklist · **Audience:** product owners, ecommerce and SaaS teams, developers
- **Competing ZSpace article:** none
- **Why different:** explains the three ways agents perceive pages (screenshots, DOM, accessibility tree), the move from browsing to structured tools (WebMCP, MCP, commerce protocols), and an agent-readiness checklist that doubles as accessibility work.
- **SERP observations:** news write-ups of web.dev's guide and early WebMCP tutorials; no business-level synthesis.
- **Commercial intent:** high · **Service:** /services/website-development
- **Internal links:** ai-agent-traffic-verification, ai-search-visibility, agentic-commerce, accessible-ui-ux-design, model-context-protocol
- **Sources:** web.dev "Build agent-friendly websites"; Chrome WebMCP docs and origin trial; Google AI optimization guide (agentic section)

### 7. Vibe Coding vs Production Software Development: What Businesses Should Know
- **URL:** /blogs/vibe-coding-vs-production-software · **Priority 1** · Cluster C
- **Primary keyword:** vibe coding vs production software · **Secondary:** is vibe coding safe for business, vibe coding limitations, vibe coding vs software engineering
- **Intent:** business decision · **Audience:** founders and non-technical owners with an AI-built prototype
- **Competing ZSpace article:** none (`ai-assisted-development-vs-agentic-coding` is about professional team workflows)
- **Why different:** a "where is the line" framework (who uses it, what data it touches, what breaks if it fails) instead of "vibe coding good/bad", using cited security and productivity research.
- **SERP observations:** dev-shop posts with unsourced speed claims ("55% faster").
- **Commercial intent:** high · **Service:** /services/website-development
- **Internal links:** vibe-coded-app-to-production, ai-generated-code-security, ai-software-development, ai-coding-agents
- **Sources:** Karpathy (Feb 2025); Collins Word of the Year 2025; Veracode 2026; CVE-2025-48757

### 8. How to Take a Vibe-Coded App to Production: A Hardening Checklist
- **URL:** /blogs/vibe-coded-app-to-production · **Priority 1** · Cluster C
- **Primary keyword:** vibe coded app to production · **Secondary:** make AI-built app production ready, fix Lovable/Bolt app, AI app rescue
- **Intent:** step-by-step / checklist (high commercial) · **Audience:** founders who outgrew a no-code/AI builder
- **Competing ZSpace article:** none
- **Why different:** an audit-first sequence (inventory → auth/data access → secrets → data model → tests → observability → deploy pipeline) plus a rebuild-vs-harden decision. Competitors are hosting vendors focused on deployment.
- **SERP observations:** hosting/platform vendors (Appwrite, Superblocks) and tool blogs; deployment-centric.
- **Commercial intent:** very high · **Service:** /services/website-development
- **Internal links:** vibe-coding-vs-production-software, ai-generated-code-security, secure-business-website-development, website-redesign-vs-rebuild
- **Sources:** OWASP ASVS; Supabase RLS docs; CVE-2025-48757; USENIX Security 2025 package hallucination study

### 9. AI-Generated Code Security: What to Check Before You Launch
- **URL:** /blogs/ai-generated-code-security · **Priority 1** · Cluster C/D
- **Primary keyword:** AI-generated code security · **Secondary:** is AI generated code secure, slopsquatting, AI code vulnerabilities checklist
- **Intent:** checklist + explanation · **Audience:** engineering leads, CTOs, agencies
- **Competing ZSpace article:** `ai-code-review` (tooling, different intent; linked)
- **Why different:** maps the documented failure patterns (XSS and log injection weakest in Veracode 2026, hallucinated packages, missing authorization) to a pre-launch checklist and CI controls.
- **SERP observations:** security vendors (Veracode, Snyk) with product-led content.
- **Commercial intent:** high · **Service:** /services/website-development
- **Internal links:** ai-code-review, ai-coding-agent-security, ai-software-testing, vibe-coded-app-to-production
- **Sources:** Veracode 2026 GenAI Code Security Report; Spracklen et al. (USENIX Security 2025); OWASP Top 10; Stack Overflow 2025 survey

### 10. Does AI Make Software Development Cheaper? What Changes in Cost and Timelines
- **URL:** /blogs/ai-software-development-cost · **Priority 1** · Cluster C
- **Primary keyword:** does AI make software development cheaper · **Secondary:** AI software development cost, AI coding productivity, will AI reduce development costs
- **Intent:** commercial investigation · **Audience:** buyers of software projects, founders, CFOs
- **Competing ZSpace article:** none (cost guides exist for websites, apps and Shopify; linked)
- **Why different:** honest about the evidence (METR, DORA, Stack Overflow) and breaks a budget into the parts AI compresses (implementation, boilerplate, tests) and the parts it doesn't (discovery, decisions, review, integration, ops).
- **SERP observations:** vendors claiming fixed % savings; few cite RCTs.
- **Commercial intent:** very high · **Service:** /services/website-development
- **Internal links:** website-development-cost, mobile-app-development-cost, ai-software-development, vibe-coding-vs-production-software
- **Sources:** METR (July 2025, Feb 2026 update, May 2026 survey); DORA 2025; Stack Overflow 2025

### 11. Securing AI Coding Agents: Sandboxes, Permissions, Secrets and Prompt Injection
- **URL:** /blogs/ai-coding-agent-security · **Priority 2** · Cluster C/D
- **Primary keyword:** AI coding agent security · **Secondary:** Claude Code security, Cursor security, coding agent sandbox, prompt injection coding agents
- **Intent:** implementation guide · **Audience:** engineering managers, security teams
- **Competing ZSpace article:** `ai-coding-agents` (one section); `prompt-injection-prevention` (general)
- **Why different:** threat model specific to agents with shell and repo access, illustrated by CVE-2025-53773, with a policy template by environment (laptop, CI, cloud agent).
- **SERP observations:** vendor docs and security blogs; few team-policy views.
- **Commercial intent:** medium · **Service:** /services/ai-automation
- **Internal links:** ai-coding-agents, prompt-injection-prevention, indirect-prompt-injection, ai-generated-code-security, owasp-top-10-agentic-applications
- **Sources:** Claude Code sandboxing docs; Codex sandboxing docs; Cursor cloud agent docs; CVE-2025-53773; OWASP agentic Top 10

### 12. Claude Code vs Codex vs Cursor: How to Choose AI Coding Tools for a Team
- **URL:** /blogs/claude-code-vs-codex-vs-cursor · **Priority 2** · Cluster C
- **Primary keyword:** Claude Code vs Codex vs Cursor · **Secondary:** best AI coding agent for teams, Cursor vs Claude Code
- **Intent:** comparison · **Audience:** CTOs, team leads
- **Competing ZSpace article:** `ai-coding-agents` (generic "choosing" section)
- **Why different:** compares on team-relevant criteria (surfaces, where code runs, controls, review integration, repo instructions) rather than benchmark leaderboards. Dated "as of October 2026" and built on official docs. It says what not to decide on (a single benchmark).
- **SERP observations:** many affiliate-style comparisons with conflicting or outdated facts (e.g. calling Claude Code "terminal-only").
- **Commercial intent:** low-medium (authority, developer audience) · **Service:** /services/ai-automation
- **Internal links:** ai-coding-agents, ai-coding-agent-security, ai-software-development-cost, ai-code-review
- **Sources:** official docs for Claude Code, Codex, Cursor; AGENTS.md / Agentic AI Foundation

### 13. OWASP Top 10 for Agentic Applications: A Practical Guide for Teams Building Agents
- **URL:** /blogs/owasp-top-10-agentic-applications · **Priority 2** · Cluster D
- **Primary keyword:** OWASP Top 10 for Agentic Applications · **Secondary:** OWASP agentic AI risks, ASI01 agent goal hijack, agentic AI security checklist
- **Intent:** framework explanation + controls · **Audience:** engineering and security leads building agents
- **Competing ZSpace article:** none (one passing mention); links into existing guardrails, access control, tool security and prompt-injection articles
- **Why different:** each risk explained in plain business terms with a concrete example and the first controls to implement, linked to ZSpace's deeper guides.
- **SERP observations:** security vendors; mostly restating the list.
- **Commercial intent:** medium · **Service:** /services/ai-automation
- **Internal links:** ai-agent-guardrails, ai-agent-access-control, ai-tool-security, prompt-injection-prevention, ai-agent-memory, mcp-security
- **Sources:** OWASP GenAI Security Project (Dec 2025)

### 14. Good Bots, Bad Bots and AI Agents: How to Verify Agent Traffic Without Blocking Customers
- **URL:** /blogs/ai-agent-traffic-verification · **Priority 2** · Cluster A/D
- **Primary keyword:** verify AI agent traffic · **Secondary:** Web Bot Auth, signed agents, Visa Trusted Agent Protocol, AI agents bot protection ecommerce
- **Intent:** technical decision guide · **Audience:** ecommerce and SaaS operators, security and platform teams
- **Competing ZSpace article:** none (`ecommerce-fraud-detection` covers payments fraud; linked)
- **Why different:** links bot management to agentic commerce: why CAPTCHAs and blanket blocking will start costing sales, and how cryptographic agent identity (RFC 9421, Web Bot Auth, ChatGPT agent signatures, Visa TAP) changes the policy.
- **SERP observations:** bot-management vendors and protocol explainers; little merchant-level policy.
- **Commercial intent:** medium-high · **Service:** /services/shopify-development
- **Internal links:** how-ai-agents-use-websites, ai-crawlers-robots-txt, agentic-commerce, ecommerce-fraud-detection, ecommerce-security
- **Sources:** IETF webbotauth charter; OpenAI ChatGPT agent allowlisting help article; Visa TAP announcement (Oct 2025)

### 15. AI Agent Tool Design: How to Build Tools an Agent Can Use Reliably
- **URL:** /blogs/ai-agent-tool-design · **Priority 3** · Cluster D/agents (candidate 7, reframed)
- **Primary keyword:** AI agent tool design · **Secondary:** function calling best practices, how to write tools for agents, MCP tool design
- **Intent:** implementation guide · **Audience:** developers and technical product owners
- **Competing ZSpace article:** `ai-agent-development` (hub, one section), `ai-tool-security` (security angle). This article covers usability for the model: granularity, naming, descriptions, outputs, errors, idempotency, confirmation, evaluation.
- **SERP observations:** provider docs and framework tutorials; little business-level guidance on action design.
- **Commercial intent:** medium · **Service:** /services/ai-automation
- **Internal links:** ai-agent-development, ai-tool-security, ai-agent-evaluation, how-to-build-an-mcp-server, human-in-the-loop-ai
- **Sources:** Anthropic tool-use docs and "Writing effective tools for agents"; OpenAI function-calling docs; MCP specification

### 16. On-Device AI in Mobile Apps: What You Can Build Without Cloud AI (and When You Still Need It)
- **URL:** /blogs/on-device-ai-mobile-apps · **Priority 2** · Cluster E
- **Primary keyword:** on-device AI mobile apps · **Secondary:** Apple Foundation Models framework, Gemini Nano apps, on-device vs cloud AI, offline AI app
- **Intent:** business decision + architecture · **Audience:** product owners and mobile leads
- **Competing ZSpace article:** `ai-powered-mobile-app-development` (pillar; one section) and `ai-edge-deployment` (non-mobile edge)
- **Why different:** a decision guide covering feasible features, device coverage, cost model (no per-call fees) and the hybrid routing patterns now offered by the platforms (iOS 27 Foundation Models, Private Cloud Compute, Firebase AI Logic).
- **SERP observations:** developer tutorials and platform announcements; no product-level guidance.
- **Commercial intent:** high · **Service:** /services/mobile-app-development
- **Internal links:** ai-powered-mobile-app-development, offline-first-mobile-app-development, mobile-app-data-privacy, react-native-app-development, ai-edge-deployment
- **Sources:** Apple WWDC26 iOS guide and Foundation Models docs; Android Developers blog (I/O 2026); ML Kit GenAI docs

### 17. Making Your App Usable by Siri, Gemini and AI Assistants: App Intents and AppFunctions
- **URL:** /blogs/mobile-app-ai-assistant-integration · **Priority 2** · Cluster E (replaces candidate 14)
- **Primary keyword:** App Intents AppFunctions AI assistants · **Secondary:** Siri app integration iOS 27, Android AppFunctions Gemini, agent-ready mobile app
- **Intent:** strategic + implementation · **Audience:** mobile product owners and developers
- **Competing ZSpace article:** none
- **Why different:** the mobile counterpart of agent-ready websites. It covers which actions to expose, platform status, and privacy and confirmation design.
- **SERP observations:** platform docs and individual developer posts.
- **Commercial intent:** medium-high · **Service:** /services/mobile-app-development
- **Internal links:** on-device-ai-mobile-apps, how-ai-agents-use-websites, mobile-app-deep-linking, ai-powered-mobile-app-development
- **Sources:** Apple App Intents docs and WWDC26 guide; Android AppFunctions docs; Android Developers blog

## Updates to existing articles (same batch)

| Article | Change |
|---|---|
| `agentic-commerce` | Links to agent-readiness, agent-traffic verification and AI search articles; note on Google's AI optimization guide (agentic section and UCP) |
| `ai-shopping-agents` | New "Make your store usable by agents" section (absorbs candidate 2) + curated related articles |
| `ecommerce-product-data-ai-search` | Google's May 2026 guide (Merchant Center, no special files), Search Console Generative AI report, links to the AI-search cluster |
| `rpa-vs-ai-automation` | New section "Where AI agents fit" (absorbs candidate 19) with links |
| `ai-agent-vs-ai-chatbot` | Short "and AI assistants?" clarification (absorbs candidate 6) with links |
| `ai-coding-agents` | Repository instructions section updated for AGENTS.md under the Agentic AI Foundation; links to new coding articles |
| `ai-code-review` | Link to AI-generated code security checklist |
| `ai-powered-mobile-app-development` | Links to the two new mobile AI spokes; iOS 27 note |
| `seo-friendly-website-development` | Link to AI search visibility and GEO vs SEO |

## Topic graph after this batch

```
AI SEARCH / GEO                         AGENT-READY WEB
ai-search-visibility (hub) ───────────► how-ai-agents-use-websites ─► ai-agent-traffic-verification
 ├─ geo-vs-seo                            │                               │
 ├─ ai-crawlers-robots-txt ◄──────────────┼───────────────────────────────┘
 ├─ llms-txt                              ▼
 ├─ ai-search-traffic-tracking         agentic-commerce ─► ai-shopping-agents ─► shopify-agentic-commerce
 └─ ecommerce-product-data-ai-search      └─► ecommerce-product-data-ai-search ─► Shopify / CRO services

AI-BUILT SOFTWARE                        AGENT SECURITY
vibe-coding-vs-production-software       owasp-top-10-agentic-applications (framework hub)
 ├─ vibe-coded-app-to-production          ├─ ai-agent-tool-design ─► ai-tool-security
 ├─ ai-generated-code-security ◄──────────┼─ ai-coding-agent-security
 ├─ ai-software-development-cost          └─ existing: guardrails, access control, prompt injection, MCP security
 └─ claude-code-vs-codex-vs-cursor ─► ai-coding-agents (existing hub)

MOBILE + AI
ai-powered-mobile-app-development (existing pillar)
 ├─ on-device-ai-mobile-apps
 └─ mobile-app-ai-assistant-integration ─► how-ai-agents-use-websites
```
