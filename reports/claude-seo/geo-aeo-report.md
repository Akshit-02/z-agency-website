# GEO / AEO report (AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini)

Method: Claude SEO `agentic_check.py` (production), the plugin's llms.txt validator (before and after), server-rendered content checks, and the content scan of all 1,133 articles. No AI rankings or citations are promised. Google states that no special files or markup are needed for its AI features.

## Strengths already in place

- **Content is server-rendered.** AI crawlers that don't run JavaScript get the full text (1,206 words on the homepage without JS).
- robots.txt allows every AI search and user agent: OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot and others.
- Answer-first structure: 856 articles open with "Quick answer" or "The short answer", followed by tables, checklists and dated regulatory facts. These are highly extractable.
- Consistent entity description in `site.ts` (intro), Organization schema and llms.txt, including explicit instructions not to attribute awards, offices or case studies to ZSpace.
- Honest disclosures (self-published agency lists, "illustrative scenario, not a client case") reduce the risk of being misrepresented.

## Gaps and status

| Gap | Impact on answer engines | Status |
|---|---|---|
| FAQ answers missing from the HTML (only 13.5% present) | Engines that read the page saw questions without answers. Cost and timeline answers were invisible. | **Fixed: 100% present** |
| llms.txt failed the format check (no Markdown links, 1,077 bare URLs, 32 articles missing) | Tools following the llms.txt proposal couldn't parse the links | **Fixed: Lighthouse llms.txt check passes; 1,133/1,133 articles listed** |
| Sources named but not linked (226 articles), only 6 articles with any external link | Lower verifiability. Engines and readers can't follow the claims. | Proposed: link sources, starting with the P1 articles |
| No people or authors | Weak entity and E-E-A-T signals. Answers can't attribute expertise. | Owner input |
| No visible published/updated dates on articles | Freshness is unclear to readers and to engines that parse visible text | Proposed (small template change, but it exposes the Sep–Oct mass-publication pattern, so the owner should decide alongside the author work) |
| Homepage H1 "your website builder" | Entity confusion with DIY builders | Owner decision |
| llms.txt size 180 KB | Info only | Optional: move per-article lists into `llms-full.txt` |
| No Markdown alternates or Content-Signal | Optional | Not done |

## Recommendations

1. Link sources in the Sources sections of the P1 articles (the 30 or so with ≥100 impressions or flagged facts), then the rest during refreshes.
2. Name real authors and reviewers, and add `Person` schema with `sameAs` LinkedIn.
3. Keep entity facts consistent across site.ts, schema, llms.txt, LinkedIn and Instagram (the same description and the same markets).
4. Earn third-party mentions (directories with real profiles, partner listings, conference talks). Answer engines lean on corroboration from other sites, which on-site changes can't provide.
5. Track AI referrals in GA4 (referrers such as chatgpt.com, perplexity.ai, gemini.google.com) to measure results instead of assuming them.
