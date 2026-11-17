# Keyword cannibalisation report

## 1. Service pages vs the "best X in India" listicles (main risk)

The site publishes disclosed shortlists such as `/blogs/best-ui-ux-design-agencies-in-india`, `/blogs/best-shopify-development-agencies-in-india` and four others, plus city versions (Mumbai, Delhi NCR, Bengaluru, Gujarat, Ahmedabad). In the GSC export these listicles, not the service pages, collect the "best/top X agency in India" impressions:

| Page | Impr. (3 mo) | Avg. pos. |
|---|---|---|
| /blogs/best-ai-automation-agencies-in-india | 245 | 30.8 |
| /blogs/best-ui-ux-design-agencies-in-india | 196 | 15.3 |
| /blogs/best-ui-ux-design-agencies-in-mumbai | 144 | 38.4 |
| /blogs/best-web-development-agencies-in-india | 29 | 51.2 |
| /services/ai-automation | 289 | 32.2 |
| /services/ui-ux-design | not in export | — |

**Why it happens:** searches like "best UI/UX design agency in India" mostly return list articles and directories, so Google treats a list page as the better match. Plural "agencies/companies" queries are list intent. Singular "company/agency" plus "hire/services" leans towards provider pages.

**How the mapping was resolved:**

- **Service pages** own the singular commercial phrase: "Best Shopify Development Company in India", etc. (title + H1 keyword line + opening paragraph).
- **Listicles** keep the plural list phrase: "6 Best Shopify Development Agencies in India (Shortlist)". Their titles were not changed.
- The listicles pass relevance to the service pages: the ZSpace entry in each India listicle now links with a descriptive anchor ("Shopify development services in India" etc.), and each service page already links back to its listicle in its Guides block.
- Nothing was noindexed or redirected. The listicles are the site's best-placed commercial pages today, and the earlier 2027 audit recommended against removals while GSC data is this young.

**Watch:** if, after 6–8 weeks, GSC shows the service page and listicle swapping positions for the same singular query, consolidate signals towards the service page (e.g. shorten the listicle's ZSpace entry and point its "Quick answer" at the service page).

## 2. Homepage vs Shopify service page

Both now target Shopify development in India, as requested. Mitigations:

- Different titles: homepage "Best Shopify **& Web** Development Company in India"; service page "Best Shopify Development Company in India".
- The homepage covers six services and links to all of them; the Shopify page is the specific, deep page. Internal anchors about Shopify point to `/services/shopify-development`, not `/`.
- The H1 phrase overlaps ("Best Shopify Development Company in India…"). This was the owner's explicit preference; monitor in GSC whether `/` starts ranking for "shopify development company in india" instead of the service page. If it does, soften the homepage H1 to "Shopify & web development company in India for growing businesses".

## 3. Shopify vs CRO

Both mention Shopify CRO. Resolution: Shopify page = build, redesign, theme, integrations, speed; CRO page = audit and optimisation of an existing store or site ("Shopify CRO audit" as a secondary keyword). The CRO page's new opening and FAQ make that split explicit.

## 4. Website development vs ecommerce

"Ecommerce development company in India" has no page of its own. It is a secondary keyword shared deliberately: Shopify builds → Shopify page; custom/headless ecommerce → website development page (the existing `ecommerce-website-development-cost-india` post already links both that way).

## 5. AI automation vs "AI development"

The AI page is about automation, agents and integration. "AI development company" is kept as a secondary theme only, because the page does not describe model or product AI development, and claiming it would mismatch intent.
