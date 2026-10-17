# 13. Blog refresh and consolidation plan

All 1,057 articles have an inventory record and an A–J class in `03-blog-quality-classification.csv`. Deep rewriting is reserved for pages with the most opportunity or risk. The rest stay as they are until Search Console shows they matter.

## Classification summary (primary class)

| Class | Meaning | Articles |
| --- | --- | --- |
| A | High-performing, to protect | 0 assigned: needs Search Console |
| B | Strong commercial potential | 98 |
| C | Useful; needs quality improvements (mostly: no sources, or statistics without a source in the same sentence) | 480 |
| D | Topic overlap or cannibalisation candidate | 44 |
| E | Needs factual update or sourcing (time-sensitive claims) | 91 |
| F | Thin (< 900 words) or templated | 40 |
| G | Backlinks or historical value | 0 assigned: needs link data (the domain was parked until at least 2025, so few are expected) |
| H | International market potential | 96 |
| I | Useful; minimal or no change | 87 |
| J | Investigate: owner input or data needed (dates, listicles, regulated UK topics) | 121 |

An article can carry several classes (`all_classes`); the primary class follows the order J, D, E, B, H, F, C, I.

## Waves

| Wave | Scope | What changes | Status |
| --- | --- | --- | --- |
| 0. Hygiene (sitewide) | Orphaned citation labels; unrelated boilerplate table; visible research-process notes | Remove labels (202), remove table (29), rewrite notes with sources (4) | **Done in batch 1** |
| A. Hub guides | 48 articles linked from service and category pages | Fact-check, primary sources (except in the 274 link-free articles), one original example or worked calculation, contextual service link | **9 done in batch 1**; 39 to go, starting with the 25 with no sources |
| B. Cost guides | `website-development-cost`, `shopify-development-cost` and ~20 cost articles | Real price bands and what each buys | Blocked: owner pricing |
| C. Listicles | 6 India lists, 5 city lists | Unranked shortlist; city lists 301 to India lists | Blocked: approval Q3 |
| D. Dates | 65 articles added after launch with earlier dates (93 in total before launch) | Set the real first-publish date; don't bump `updated` | Blocked: owner confirms history |
| E. Time-sensitive | 91 primary-class E articles | Verify each fact; cite the primary source beside the sentence; add the check date | Next batches, 10–15 per batch |
| F. Consolidation | 4 pairs + city lists | Merge unique sections, 301, update links | Blocked: Search Console check |
| G. Market articles | 73 AU, 36 UAE/GCC, 12 UK | Link to the market page when it exists; no new country articles | After `12-…` pages exist |
| H. Quality-tier review | Vertical grids, "AI agents in [industry]" series, articles under 900 words | Keep pages with impressions; consolidate the rest into hubs | After 3 months of Search Console data |

## Rules

- No word-count targets. No rewriting to "look new". No `updated` date without a substantive change.
- No invented statistics, clients, quotes or results; illustrative scenarios must be labelled as such.
- Respect the owner's link decision: no external links are added to the 274 articles stripped on 3 Oct 2026 (listed in `link-free-articles.txt`).
- No `noindex` or deletion until Search Console shows no impressions for 3+ months.
