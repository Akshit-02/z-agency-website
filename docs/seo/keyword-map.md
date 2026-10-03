# Keyword Map

Prepared 2026-10-03. **Data sources:** live Google autocomplete (India and US) and Bing autosuggest for 38 seed queries across the six services (raw data: Google suggest and Bing osjson endpoints, collected 2026-10-03), live search results for the main commercial queries, and the site's own content inventory.

**Not available:** search volumes, keyword difficulty, CPC and Search Console queries. No keyword tool (DataForSEO, Ahrefs, Semrush) or Search Console access was connected. Priorities below are **qualitative** (commercial value × relevance × competitiveness), not measured volumes.

## Commercial pages

| Page | Primary keyword | Secondary keywords | Intent | Funnel | Key questions answered on page | Conversion action |
|---|---|---|---|---|---|---|
| / | technology and digital product studio | website, app, Shopify and AI automation studio | Navigational / commercial | Top–middle | What services does ZSpace Labs offer? How much does a website or app cost? | Start a Project |
| /services | digital product development services | web, mobile, Shopify, UI/UX, AI automation, CRO services | Commercial investigation | Middle | Which service fits my problem? | Service pages |
| /services/website-development | website development services | Next.js development company, custom website development, React development services, website redesign services, website maintenance services | Commercial | Middle–bottom | What is website development? Cost? Next.js? SEO-ready? Maintenance? | Start a Project |
| /services/mobile-app-development | mobile app development services | iOS and Android app development, React Native app development company, cross-platform app development, app development for startups | Commercial | Middle–bottom | What is mobile app development? Cost? Timeline? Backend? | Start a Project |
| /services/shopify-development | Shopify development services | Shopify development company, Shopify store development, Shopify theme development, Shopify store redesign, Shopify speed optimization | Commercial | Middle–bottom | What does Shopify development involve? Theme vs custom? Speed? Plus? | Start a Project |
| /services/ui-ux-design | UI/UX design services | UI UX design agency, product design agency, UX audit, design systems, SaaS product design | Commercial | Middle–bottom | What is UI/UX design? Research? Deliverables? UX audit? | Start a Project |
| /services/ai-automation | AI automation services | AI automation agency, AI workflow automation, business process automation services, AI agents for business, AI customer support automation | Commercial | Middle–bottom | What is AI automation? Worth automating? Data safety? Measuring results? | Talk about automation needs |
| /services/cro-audit | conversion rate optimisation services | CRO audit, Shopify conversion rate optimization, landing page optimization, checkout optimization, A/B testing | Commercial | Middle–bottom | What is a CRO audit? Good conversion rate? Traffic needed? CRO vs UX audit? | Start a Project |
| /industries | technology for [industry] | websites, apps and automation by sector | Commercial investigation | Middle | Which industries? | Industry pages |
| /about | ZSpace Labs | technology and digital product studio | Navigational / trust | Middle | Who is ZSpace Labs? How do they work? | Contact |
| /contact | contact ZSpace Labs | start a project | Transactional | Bottom | How to start? Response time? | Form |
| /blogs | technology guides | web, app, Shopify, UX, AI, CRO guides | Informational hub | Top | — | Topic hubs |
| /blogs/category/* | [topic] guides | see hub descriptions | Informational hub | Top | Where do I start? | Related service |

Keyword decisions recorded during research:

- **"CRO audit" is ambiguous.** Google India autocomplete for "cro audit" mixes in "cro audit exemption" and "cro auditor search" (Ireland's Companies Registration Office). The page title therefore leads with "Conversion Rate Optimisation" and the H1/definition spell the term out.
- **"Web application development" is dominated by academic intent** (syllabus, notes PDF, university papers). Commercial targeting uses "custom web application development" and lives inside the website development page rather than a separate page.
- **Learner intent to avoid:** "AI automation agency course", "ai automation services to sell", "shopify theme development course/certification", "react native app development course". These are people learning to *become* agencies; content should not be written for them.
- **Tax/accounting intent to avoid:** "website development services HSN code / GST rate / TDS rate", "website development costs capitalize or expense". These are accountant queries.
- **Strong city-level intent** across every service in India ("… company in ahmedabad / surat / bangalore / delhi …"). See geographic strategy below.

## Geographic strategy

The site states ZSpace Labs is "remote-first, working globally"; no office address, registered business location or city presence is published anywhere in the codebase. The domain is `.in`.

Decision: **no city or country landing pages were created.** Autocomplete shows heavy city-level demand in India, but publishing city pages without a genuine presence there would be doorway content. Recommended next step for the owner: if ZSpace Labs has a real base (for example a registered office city) or a meaningful client base in India, create **one** genuine "India" page (and at most one page for an actual office city) with real details: how engagements work for Indian clients, GST invoicing if applicable, time zones, and local case evidence. International English terminology is already used site-wide.

## Blog clusters

Every article's primary keyword, intent and quality rating is in [blog-audit.md](blog-audit.md). Clusters and their hubs:

| Cluster | Hub URL | Pillar articles | Service |
|---|---|---|---|
| Web development | /blogs/category/web-development | website-development-guide, website-development-cost, website-development-process, nextjs-website-development | /services/website-development |
| Mobile apps | /blogs/category/mobile-apps | mobile-app-development-guide, mobile-app-development-cost, native-vs-cross-platform-app-development | /services/mobile-app-development |
| Shopify & ecommerce | /blogs/category/shopify-ecommerce | shopify-store-development, shopify-theme-development, shopify-development-cost | /services/shopify-development |
| UI/UX & product design | /blogs/category/ui-ux | ui-ux-design-guide, product-design-process, ux-audit, ai-product-design | /services/ui-ux-design |
| AI & automation | /blogs/category/ai-automation | ai-workflow-automation, business-process-automation, ai-agent-development, llmops | /services/ai-automation |
| CRO | /blogs/category/cro | shopify-cro-guide, ecommerce-cro-audit, ecommerce-cro-testing-roadmap | /services/cro-audit |

## Cannibalisation check

- 5-word-shingle similarity across all article pairs sharing slug terms: only one pair above 4% overlap (website-development-for-professional-services / website-development-for-consulting-firms). They serve different intents (all professional services vs consulting specifically); kept and cross-linked.
- Normalised primary-keyword collisions: one pair (website-api-integration / website-api-integrations-list): a how-to guide vs a reference list; kept.
- In earlier batches, 8 proposed articles were not created because they duplicated existing intents (documented in those batch reports), and two existing articles (`prompt-injection-prevention`, `llm-routing`) were extended instead of publishing competing pages.
- No URLs were removed or redirected for consolidation.
