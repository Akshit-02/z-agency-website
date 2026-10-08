# Next 20: AI Interfaces and Agentic Commerce — Implementation

Implemented 2026-10-08. Overlap decisions: `docs/seo/next-20-ai-interfaces-agentic-commerce-audit.md`.

**Result:** 15 new articles (13 proposals, of which #6 absorbs #4, plus 2 replacements). 7 proposals were not published as new URLs because existing pages own the intent; those 7 owner pages were extended instead. 16 contextual back-links were added to 15 existing articles, and an outdated AP2 row in `agentic-commerce` was corrected. Site total: 837 articles.

Files: `src/lib/blog-data-ai-interfaces-1..3.ts` (Cluster A, category UI/UX) and `src/lib/blog-data-agentic-commerce-1..2.ts` (Cluster B), registered in `src/lib/blog-data.ts`.

## Article inventory and keyword map

| Article | URL | Primary keyword | Search intent | Existing competing URLs | Overlap decision | Canonical owner | Internal-link role | Status |
|---|---|---|---|---|---|---|---|---|
| AI Interface Patterns | /blogs/ai-interface-patterns | AI interface patterns | Reference | ai-ux-design, ai-copilot-ux | YELLOW, publish | New | **Cluster A hub** | Live |
| Generative UI | /blogs/generative-ui | generative UI | Informational | ai-ux-design | GREEN | New | Spoke | Live |
| AI Assistant App UX (R1) | /blogs/ai-assistant-app-ux | AI assistant app UX / MCP Apps | How-to | none | GREEN, replaces #2 | New | Spoke | Live |
| Agent UX | /blogs/agent-ux-design | agent UX | Informational / how-to | how-ai-agents-use-websites, ai-agent-tool-design | YELLOW | New (interaction design) | Spoke; links to website and tool owners | Live |
| AI Agent Handoffs | /blogs/ai-agent-handoffs | AI agent handoff | How-to | ai-chat-interface-design, agent-to-agent-communication | YELLOW | New | Spoke | Live |
| AI Action Confirmation UX | /blogs/ai-action-confirmation-ux | AI action confirmation | Decision framework | ai-agent-autonomy-levels, human-in-the-loop-ai | YELLOW (absorbs #4) | New | Spoke | Live |
| AI Agent Trust UX | /blogs/ai-agent-trust-ux | AI agent trust UX | How-to | ai-transparency-ux | YELLOW | New (action lifecycle) | Spoke | Live |
| Multimodal AI Product Design | /blogs/multimodal-ai-product-design | multimodal AI product design | Design decision | multimodal-ai-applications | YELLOW | New (product design) | Spoke | Live |
| Background AI Agent UX (R2) | /blogs/background-ai-agent-ux | background agent UX | How-to | ai-ux-design (progress section) | GREEN, replaces #8 | New | Spoke | Live |
| Agentic Commerce Stack | /blogs/agentic-commerce-stack | agentic commerce stack | Architecture pillar | agentic-commerce | YELLOW | New (technical) | **Cluster B hub** | Live |
| ACP vs UCP vs MCP | /blogs/acp-vs-ucp-vs-mcp | ACP vs UCP | Comparison | agentic-commerce (protocol table) | YELLOW | New | Spoke | Live |
| AI Product Feeds | /blogs/ai-product-feeds | AI product feed | Technical how-to | ecommerce-product-feeds, ecommerce-product-data-ai-search | YELLOW | New (agent feeds) | Spoke | Live |
| Agentic Checkout | /blogs/agentic-checkout | agentic checkout | Technical explainer | agentic-commerce (6 bullets) | GREEN | New | Spoke | Live |
| Agent-Ready Ecommerce API | /blogs/agent-ready-ecommerce-api | agent-ready ecommerce API | Technical design | apis-for-ai-agents | YELLOW | New (ecommerce-specific) | Spoke | Live |
| AI Commerce Payments | /blogs/ai-agent-commerce-payments | agentic payments | Technical / risk | ecommerce-payment-security, agent-placed-orders | YELLOW | New | Spoke | Live |
| (#2) AI-Native UX | — | AI-native UX | — | ai-native-vs-ai-enabled-software | RED | **Existing** | — | Owner extended |
| (#4) Human-in-the-Loop UX | — | human in the loop UX | — | human-in-the-loop-ai | RED | **Existing** + merged into #6 | — | Merged |
| (#8) AI Error UX | — | AI error UX | — | ai-error-handling-ux | RED | **Existing** | — | Owner extended |
| (#11) AI Shopping Agents vs Traditional Ecommerce | — | AI shopping agents vs traditional ecommerce | — | ai-agents-ecommerce-funnel | RED | **Existing** | — | Owner extended |
| (#13) Shopify Store Ready for AI Agents | — | Shopify AI shopping agents | — | shopify-agentic-commerce | RED | **Existing** | — | Owner extended |
| (#18) Agentic Commerce Attribution | — | agentic commerce attribution | — | ai-commerce-analytics | RED | **Existing** | — | Owner extended |
| (#19) Agentic Commerce Post-Purchase | — | agentic commerce post-purchase | — | agent-placed-orders | RED | **Existing** | — | Owner extended |

No search volumes are listed: no keyword-volume tool is configured and none were invented.

## Extensions to owner pages (RED intents)

| Owner page | New section | Content added |
|---|---|---|
| ai-native-vs-ai-enabled-software | What AI-native UX looks like | Interaction model, generated workflows, control, state, memory, permissions, evaluation; comparison table |
| ai-error-handling-ux | Agent Errors and the Recovery Loop | 8 agent error types with user-facing state and recovery; detect→explain→correct→retry→undo→escalate diagram |
| ai-agents-ecommerce-funnel | Architectural implications for ecommerce businesses | Traditional vs agentic path by stage, what to build |
| shopify-agentic-commerce | Detailed Readiness Checklist | 13-area Shopify checklist (data, variants, identifiers, pricing, inventory, media, shipping, policies, structured data, feeds, APIs, checkout, order status) + Shopify CTA |
| ai-commerce-analytics | Attribution When an Agent Is in the Journey | Agent touchpoint as a dimension; order-level, referral, affiliate, survey; journey table |
| agent-placed-orders | Post-purchase through the agent | Customer ↕ agent ↕ merchant ↕ fulfillment/support flow; UCP order capability and ACP order/fulfillment events; API checklist |
| human-in-the-loop-ai | (paragraph) | Link to approval-card anatomy in #6 |

`agentic-commerce`: AP2 row corrected (standardization continuing at the FIDO Alliance; checkout and payment mandates; v0.2; AP2 mandates extension in UCP).

## Internal links

- **Cluster A hub** `ai-interface-patterns` links to generative-ui, ai-assistant-app-ux, agent-ux-design, ai-native-vs-ai-enabled-software, ai-agent-trust-ux, ai-error-handling-ux, ai-action-confirmation-ux, ai-agent-handoffs, background-ai-agent-ux, multimodal-ai-product-design.
- **Cluster B hub** `agentic-commerce-stack` links to ai-agents-ecommerce-funnel, agentic-commerce, ai-shopping-agents, acp-vs-ucp-vs-mcp, ai-product-feeds, shopify-agentic-commerce, agentic-checkout, agent-ready-ecommerce-api, ai-agent-commerce-payments, ai-commerce-analytics, agent-placed-orders, ecommerce-post-purchase-experience.
- Every new article has 2–10 links to existing articles, 1–5 links within its cluster and at least one subtle service link (UI/UX design, AI automation, website/full-stack development, Shopify development, mobile app development or CRO).
- **New back-links from existing articles:** agentic-commerce, ai-shopping-agents, ecommerce-product-feeds, apis-for-ai-agents, model-context-protocol, ai-ux-design, ai-copilot-ux, ai-transparency-ux, human-in-the-loop-ai, ai-agent-autonomy-levels, multimodal-ai-applications, ai-chat-interface-design (2), how-ai-agents-use-websites, ecommerce-payment-security, durable-ai-agents.
- `public/llms.txt`: two new groups, no new duplicate URLs.

## Schema and metadata

Unchanged shared template: BlogPosting (headline, description, dates, OG image, publisher, mainEntityOfPage, related services), BreadcrumbList and FAQPage from each article's five FAQs. No QAPage. Each article has an H1 title, a `seoTitle` of 61 characters or fewer, an excerpt of 160 characters or fewer used for meta and Open Graph descriptions, canonical `https://www.zspace.in/blogs/<slug>`, `og:type=article`, a generated Open Graph image and `twitter:card=summary_large_image`. No years in URLs, H1s, titles or descriptions. Protocol versions appear in body copy with the date they were checked, as the brief requires for fast-moving specifications.

## Visuals

In-article SVG diagram rendering is not part of the current template (removed in commit `7161356`), so diagrams use the existing code-block component, as in the previous batch: generative UI architecture; assistant app architecture; agent UX flow; handoff record and architecture; human approval flow; approval card anatomy; activity timeline; modality decision; background task lifecycle; AI interface pattern map; protocol layer map (ACP/UCP/MCP); AI product feed; agentic checkout sequence; agent-ready ecommerce API; agent payment flow; agentic commerce stack; plus, in extended pages, the error recovery loop and post-purchase agent flow. Covers use pinned `sceneKind` values (design, chat, agent, checkout, pdp, code, security); their accessible label is "Illustration for <title>".

## Sources (checked 2026-10-08)

ACP repository (OpenAI and Stripe; latest stable 2026-04-17; checkout OpenAPI for endpoints, required headers and statuses); OpenAI commerce key concepts, product feed spec and Delegated Payment Spec; UCP (ucp.dev) overview and checkout specification, version 2026-08-25; Google Merchant Center UCP guides; AP2 (ap2-protocol.org); MCP Apps announcement (2026-01-26); OpenAI Apps SDK UI guidelines; Anthropic's MCP donation to the Agentic AI Foundation; CNBC (2026-03-24) on ChatGPT shopping changes; Microsoft Guidelines for Human-AI Interaction; W3C WCAG 2.2. Card-network programs (Mastercard Agent Pay, Visa Trusted Agent Protocol) are mentioned without operational details because only secondary sources were available. Adoption, transaction or conversion figures were not used.

## Validation results

| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | Pass |
| ESLint | 0 errors; 9 pre-existing warnings in untouched files |
| Production build | Pass; 2,569 static pages |
| Routes | 22/22 (15 new + 7 extended) return 200 |
| Canonicals | All correct (www) |
| Sitemap | All present |
| robots.txt | Unchanged |
| Metadata / OG | Title, description, og:title, og:image (200, image), twitter card on all |
| Schema | All JSON-LD parses; BlogPosting + BreadcrumbList + FAQPage; no QAPage |
| H1 | One per page |
| Internal links | 93 unique links on these pages, 0 broken; corpus-wide 0 broken links, 0 bad relatedSlugs |
| External links | 12 unique; 11 return 200, Microsoft Research returns 403 to scripts but loads normally (verified) |
| Images / alt | 0 `<img>` without alt |
| Mobile (390px) | No horizontal overflow on all 17 checked pages |
| Console / hydration | No errors observed |
| Copy | No banned phrases; one em dash (inside a diagram); excerpts ≤160 |

Known pre-existing issue left as is: `ai-error-handling-ux` has a 245-character excerpt that `metaDescription()` shortens at a sentence boundary.
