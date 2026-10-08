# Next 20: Production AI Implementation Report

Implemented 2026-10-08. The candidate decisions are in `next-20-content-decisions.md` and the plan in `next-20-production-ai-content-plan.md`. Total articles: **786** (773 before this batch). Changes are in the working tree and have not been committed; the new posts are dated 2026-10-08 and should be committed on or after that date.

## New articles (13)

| Title | URL | File | Category | Cover scene | Words* | Reading time |
|---|---|---|---|---|---|---|
| How Much Autonomy Should You Give an AI Agent? A Five-Level Framework | /blogs/ai-agent-autonomy-levels | blog-data-prod-ai-1.ts | AI & Automation | agent | ~990 | 5 min |
| How to Stop AI Agents Looping and Running Up Costs | /blogs/runaway-ai-agents | -1 | AI & Automation | cost | ~1,100 | 5 min |
| Durable Execution for AI Agents | /blogs/durable-ai-agents | -1 | AI & Automation | workflow | ~860 | 4 min |
| Computer-Use Agents for Business | /blogs/computer-use-agents | -1 | AI & Automation | agent | ~880 | 4 min |
| Spec-Driven Development: A Production Workflow for AI Coding Agents | /blogs/spec-driven-development | -2 | Web Development | code | ~920 | 5 min |
| AI Coding Policy: What Companies Should Decide Before Rolling Out Coding Agents | /blogs/ai-coding-policy | -2 | AI & Automation | security | ~800 | 4 min |
| What Is an AI-Native Software Team? | /blogs/ai-native-engineering-team | -2 | Web Development | roadmap | ~850 | 4 min |
| How to Measure the Impact of AI Coding Tools | /blogs/measure-ai-coding-impact | -2 | Web Development | analytics | ~880 | 4 min |
| MCP Governance: How Companies Control Which MCP Servers Agents Can Use | /blogs/mcp-governance | -2 | AI & Automation | security | ~860 | 4 min |
| Local AI vs Cloud AI: How to Design a Hybrid AI Architecture | /blogs/hybrid-ai-architecture | -3 | AI & Automation | pipeline | ~880 | 5 min |
| Small Language Models for Business | /blogs/small-language-models | -3 | AI & Automation | cost | ~900 | 4 min |
| Orders Placed by AI Agents: Fraud, Returns and Customer Service | /blogs/agent-placed-orders | -3 | Shopify & Ecommerce | orders | ~880 | 4 min |
| Will AI Agents Replace Websites? Why the Interface Layer Is Expanding (flagship) | /blogs/will-ai-agents-replace-websites | -3 | Web Development | landing | ~1,040 | 5 min |

\*Body text, tables, callouts and FAQs. Code blocks are excluded. Four articles were extended in a quality pass with a substantive section each: a 90-day transition plan, reading common metric patterns, an illustrative small-model cost comparison and a computer-use pilot checklist.

Each article includes a quick answer, a decision framework or table, implementation steps or a checklist, risks or "what not to do", visible FAQs, and one or two contextual CTAs to the relevant service. No invented clients, statistics or prices; examples are labelled illustrative.

## Sources (named in text; outbound links remain off per the 2026-10-03 rule)

| Claim | Source and date |
|---|---|
| Five autonomy levels by user role | Feng, McDonald & Zhang, "Levels of Autonomy for AI Agents", arXiv 2506.12469 (June 2025) |
| Agents ~4× and multi-agent ~15× chat tokens; resume from errors; multi-agent poor fit for interdependent tasks | Anthropic engineering, "How we built our multi-agent research system" (June 2025) |
| Durable execution for OpenAI Agents SDK | Temporal/OpenAI integration announcement (30 July 2025) |
| Spec Kit phases and supported agents | GitHub blog (2 September 2025) |
| Kiro spec-driven, GA with CLI | AWS announcements (secondary coverage) |
| MCP allowlists GA; matchers; fail-closed; enforced clients | GitHub changelog (6 August 2026) |
| Official MCP Registry preview; namespace verification | MCP blog (8 September 2025) |
| AI as amplifier; throughput up, stability down; seven AI capabilities | DORA 2025 report and AI Capabilities Model (Google Cloud) |
| 19% slower in RCT; perception gap | METR (July 2025; February 2026 update) |
| 84% use AI tools | Stack Overflow Developer Survey 2025 |
| Small models for agentic workloads | NVIDIA Research, arXiv 2506.02153 (June 2025) |
| Foundry Local GA | Microsoft Foundry blog (April 2026) |
| On-device platform models, hybrid routing | Apple WWDC26 iOS guide; Android Developers blog (I/O 2026) |
| AI-channel order attribution | Shopify Help Center |
| Trusted Agent Protocol | Visa (14 October 2025) |
| AI referrals +62%, convert 60% better | Adobe Analytics via Digital Commerce 360 (19 August 2026) |
| Agent-friendly websites; AI features still SEO; WebMCP | web.dev (April 2026); Google Search Central (May/July 2026); Chrome for Developers |

Computer-use model versions and benchmark scores were deliberately left out: the figures found in research came only from secondary sources and change monthly.

## Updated articles (16)

| Article | Change | Absorbs candidate |
|---|---|---|
| ai-agent-evaluation | New section "Production Sign-Off: What Must Pass Before Go-Live" (task success, accuracy, tool calls, reliability, latency/cost, security, recovery, escalation, regression) | #1, #3 |
| ai-agent-memory | New section "Memory Governance: What to Keep, What to Forget" (types, scoping, retention, deletion, poisoning, privacy) | #8 |
| ai-commerce-analytics | New section "Direct AI Traffic vs AI-Assisted Journeys" with reporting rules | #18 |
| single-agent-vs-multi-agent-systems | Anthropic token-cost evidence and links | #2 |
| ai-agent-observability | Links to loop controls and durable execution | #4 |
| ai-legacy-code-modernization | Spec-first workflow link | #12 |
| ai-software-development-lifecycle | Links to spec-driven development, policy, measurement | #13 |
| llm-routing | Links to small models and hybrid architecture | #17 |
| llm-self-hosting | Link to hybrid architecture | — |
| agentic-commerce | Link to agent-placed orders | #19 |
| mcp-security | Link to MCP governance | — |
| ai-coding-agent-security | Links to policy and MCP governance (same-week article, date unchanged) | #10, #14 |
| how-ai-agents-use-websites | Links to flagship and computer use (date unchanged) | #20 |
| apis-for-ai-agents | Link to flagship | — |
| ai-search-visibility | Link to flagship | — |
| rpa-vs-ai-automation | Link to computer-use agents | — |

Articles with substantive changes carry `updated: 2026-10-08`. Same-week articles that only gained links keep their dates.

## Internal links

Each new article links to 3–8 other posts in context and to at least one service page. Each has 2–5 inbound contextual links. 0 broken internal links across all 786 posts; all `relatedSlugs` resolve. Anchor text varies by context.

## Metadata, schema and images

- Unique `seoTitle` values (50–65 characters) and excerpts of 160 characters or fewer, used verbatim as meta descriptions.
- The shared template outputs the canonical URL, Open Graph, Twitter card, BlogPosting, BreadcrumbList and FAQPage. All were verified in rendered HTML for all 13.
- Hero images: covers use the existing generated SVG scene system (inline, no image files, so no added weight or layout shift), with `sceneKind` pinned on every article. 13 new diagram specs (9 flows, 4 comparison/column charts) were added to `BlogBanner.tsx`, with `bannerAlt` text matching each spec. **Open issue, unchanged:** article pages render the scene, not the diagram, while the cover's accessible label comes from `bannerAlt`. See the 2026-10-07 implementation report for the suggested one-line template fix.
- llms.txt: new group "Production AI engineering, AI coding and local AI" (13 entries, no duplicates).

## Technical validation

| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | Pass |
| ESLint | 0 errors; 9 pre-existing warnings in unrelated files |
| `next build` | Pass (run twice) |
| Routes | 13 new + 16 updated articles return 200; OG images 200 |
| Canonicals | Unique, self-referencing on www; 786 unique slugs |
| Robots | `index, follow` on all new articles |
| Sitemap | All 13 present; 0 duplicate `<loc>` entries |
| Blog index / hubs | All 13 in `/blogs` data and their category hubs |
| Responsive | 13 new + 3 substantially updated articles at 390, 820 and 1280 px: no horizontal overflow, wide tables scroll in their containers, no broken images |
| Console / hydration | No errors or hydration warnings (production build) |

## Final quality gate

Each article was checked against the brief's ten questions. The changes this prompted:
- Four thin articles were extended.
- Unverifiable model benchmark claims were removed from the computer-use article.
- Two articles with only one inbound link were connected from three more posts each.
- The cost-per-correct-result argument was made explicit in both the runaway-agents and small-models articles, so readers do not equate a cheaper model with a cheaper system.
