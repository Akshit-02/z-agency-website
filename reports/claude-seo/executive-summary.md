# Executive summary

**ZSpace Labs has a technically clean website.** Every one of its 1,165 pages returns 200, is self-canonical, has a unique title and description, and is in the sitemap. What holds it back is mostly not code:
- the blog was produced at scale (about 1,000 articles in Sep–Oct 2026) with no named authors or proof
- the service pages are under-built for the commercial demand already showing in Search Console
- the positioning is India-only, although US and Australian impressions are each about 60% of India's

## What was done

- Installed and verified **Claude SEO 2.6.0** through the official plugin marketplace. Its runtime is isolated (Python 3.13 venv, Chromium ready) and nothing was added to the website's dependencies.
- Audited **all 1,165 URLs** (not a 500-page sample) with Claude SEO's checkers, scanned all 1,133 articles from source, analysed the GSC export, ran Lighthouse, and reviewed 21 key pages for E-E-A-T. Researched 10 target markets with primary sources.
- Implemented and validated six fixes (uncommitted, **not deployed**):

| Fix | Before → After |
|---|---|
| FAQ answers rendered in HTML (they existed only in schema) | 1,247 → **9,229 of 9,229** answers, on 1,152 pages |
| Page-specific Open Graph and X/Twitter tags | 32 pages wrong → **0** |
| llms.txt format and coverage | Validator **fail → pass**; 1,101 → 1,133 articles |
| Industry page titles state the offer | "Real Estate — Industries" → "Real Estate: Websites, Apps & Automation" |
| Market regulation notes reworded per primary sources | India and UAE notes updated |
| Service CTA casing | "ai automation" → "AI automation" |

Build, typecheck and lint pass. The sitemap, routes, redirects, robots, forms and analytics are unchanged. No layout-shift or accessibility regression.

## Top 5 next steps (need you)

1. **Review and deploy** this change set (preview first, click through the FAQs on mobile, test the contact form).
2. **Give the site real people:** founder and team names for About, bylines, author schema. This is the biggest E-E-A-T gap.
3. **Expand `/services/ai-automation`** (the top commercial page, ranking 28–46 for "ai automation services/agency") and add cost and process sections to all six services. Confirm which extra services you offer (portals, SaaS, legacy modernisation, B2B, Shopify apps).
4. **Pause mass publishing.** Refresh the ~30 high-impression articles (link their sources, fix 3 unverified facts), and review the 210 zero-impression articles in Feb–Mar 2027.
5. **Decide international positioning:** start with an Australia market hub, then UK/IE and UAE/GCC. Skip Russia (sanctions and data-localisation law). Connect Google APIs so Claude SEO can pull live GSC, CrUX and GA4 data.

Full detail is in `reports/claude-seo/` (17 reports + 2 appendices). Decisions and missing facts are listed in `human-review-required.md`.
