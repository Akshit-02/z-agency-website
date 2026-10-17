# 09. Duplicate content and cannibalisation report

Method: TF-IDF cosine similarity of every article's body text against every other article (live HTML, 17 Oct 2026), plus primary-keyword collisions derived from titles (`08-keyword-url-map.csv`). Cannibalisation can only be confirmed with Search Console (two URLs earning impressions for the same queries); this report lists candidates.

## Result

There are **no near-duplicates**: only 5 pairs exceed 0.6 similarity, and none exceeds 0.7. The risk is templated *patterns* across many distinct pages, not copied text.

## Confirmed same-intent pairs (act after a Search Console check)

| Merge from | Into | Similarity | Reason | Action |
| --- | --- | --- | --- | --- |
| website-development-for-consulting-firms | website-development-for-professional-services | 0.68 | Consulting is a subset | Merge unique sections, 301, update links |
| why-is-my-website-not-converting | website-gets-traffic-but-no-leads | 0.62* | Same problem, same reader | As above; keep the URL with more impressions |
| shopify-skincare-store | shopify-beauty-store | 0.62 | Skincare is a subset of beauty | As above |
| shopify-cro-tips | shopify-cro-testing-ideas | 0.38–0.52* | Same intent, 2 inlinks | As above |
| best-…-in-{mumbai, delhi-ncr, gujarat, bengaluru, ahmedabad} | the matching India list | 0.51–0.69 | Self-ranked city lists, no local office | 301 after the India lists are reframed (approval Q3) |

\* From the 12 Oct analysis; method differences explain small score changes.

## Watch list (check query overlap before doing anything)

grocery CRO vs grocery UX; jewelry filters vs jewelry search; jewelry CRO vs jewelry UX; migrating-to-shopify-guide vs woocommerce-to-shopify checklist; grocery redesign vs grocery UX; ecommerce category page SEO vs ecommerce SEO; food website development vs food website design; ecommerce localization vs localization-vs-translation; wholesale UX vs wholesale website; ecommerce attribution vs attribution models; Shopify homepage audit vs homepage CRO; furniture CRO vs furniture UX; sports redesign vs sports UX; REST vs GraphQL vs the mobile variant; ecommerce accessibility vs its checklist; modular monolith vs ecommerce microservices; ecommerce microservices architecture vs microservices-vs-monolith; grocery mobile UX vs grocery UX; ecommerce subscription UX vs subscription portal; Hydrogen vs traditional Shopify vs Shopify Hydrogen; website API integration vs the integrations list; UI/UX design guide vs UI vs UX design.

Each pair is listed in `08-keyword-url-map.csv` (`conflicts_with`) and `03-…` (`recommended_actions`).

## Templated patterns (quality-tier review, not merges)

| Pattern | Pages | Note |
| --- | --- | --- |
| Vertical × topic grids (furniture, jewelry, fashion, sports, beauty, electronics ecommerce) | 6–10 per vertical | Siblings at 0.53–0.56 similarity: distinct today; keep variants that earn impressions |
| "AI agents in/for [industry]" | 31 | Same implementation table in 30; 2–3 inlinks each |
| "The ZSpace Labs Shopify CRO Framework" section | 17 | Same table; relevant to each article but repetitive |
| Country-suffixed families (`-australia`, `-uae`, `-uk`, `-gcc`) | 15 families, 30 pages | Not location-swapped (similarity < 0.6). Create no more |
| Generic 10-stage website table | was 32 | **Removed from 29 in batch 1**; kept in 3 process and timeline articles |
