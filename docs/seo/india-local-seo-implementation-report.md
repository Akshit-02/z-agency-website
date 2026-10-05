# India Local SEO Implementation Report

Date: 2026-10-04. Nothing committed; all changes are in the working tree.

## 1. States researched
SERPs checked and companies verified for: Maharashtra (Mumbai, Pune), Karnataka (Bengaluru), Delhi NCR (Delhi, Noida, Gurugram), Gujarat (Ahmedabad, Surat). All 20 priority states plus Chandigarh and Jharkhand are triaged in the [content plan](india-state-city-content-plan.md) expansion matrix, but without SERP research yet.

## 2. Cities researched
Mumbai, Pune, Bengaluru, Delhi, Noida, Gurugram, Ahmedabad, Surat. The other 26 priority cities are listed with status R (research needed), Hold or Skip, each with a reason.

## 3. Keywords mapped
5 primary keywords with 4 secondary and 3–4 supporting keywords each ([keyword map](india-state-city-keyword-map.md)). No volumes or difficulty scores are claimed: no keyword tool was available, and the search tool is US-localised.

## 4–5. Articles written and published (batch 1)
| Article | URL |
|---|---|
| 5 Best UI/UX Design Agencies in Mumbai | /blogs/best-ui-ux-design-agencies-in-mumbai |
| 5 Best Mobile App Development Companies in Delhi NCR | /blogs/best-mobile-app-development-companies-in-delhi-ncr |
| 5 Best Shopify Development Agencies in Gujarat | /blogs/best-shopify-development-agencies-in-gujarat |
| 5 Best Web Development Companies in Bengaluru | /blogs/best-web-development-companies-in-bengaluru |
| 5 Best AI Automation Companies in Ahmedabad | /blogs/best-ai-automation-companies-in-ahmedabad |

Each article has: ZSpace Labs first as the disclosed publisher entry, with an explicit "no office in [location]" note; 2 location-specific sections; local criteria; 4 companies with a verified local office and links to their official sites; 2 comparison tables; what to look for; questions to ask; project considerations; conclusion with a service-page CTA; dated sources; and 6 FAQs, including "Does ZSpace Labs have an office in [location]?".

New companies verified for this batch: Ungrammary (Mumbai), Techugo (Noida), Mobiloitte (New Delhi), Elsner Technologies (Ahmedabad), Codewave (Bengaluru), Carmatec (Bengaluru), Agile Infoways (Ahmedabad). Recorded in the content plan; India-wide companies are in [india-competitor-database.md](india-competitor-database.md).

## 6. Held back
- **Pune web development:** four Pune companies not yet verified.
- **City CRO articles:** few local CRO specialists; national intent dominates.
- **City service pages:** ZSpace has no local presence, so these would be doorway pages.
- **Small cities:** no evidence yet of distinct demand; state articles serve them better.
- **Batch 2:** waiting on batch 1 Search Console data.

## 7. New URLs
The 5 above. Sitemap: 776 URLs (771 + 5).

## 8. Internal links added
- Each local article links to its service page (CTA, profile, conclusion), the India-wide shortlist, the how-to-choose guide and 2–3 educational guides.
- Gujarat Shopify ↔ Ahmedabad AI link to each other.
- India-wide shortlists (web, mobile, Shopify, AI, UI/UX) link down to the matching local shortlist in their conclusions.
- Category hubs list the new articles automatically.
- `llms.txt` has a "State and city shortlists" section with the remote-only disclosure.

## 9. SEO and schema
- **Metadata:** unique titles (57–69 characters including the brand suffix where it fits) and descriptions (140–156 characters).
- **Canonicals and headings:** self-canonical on every page, one H1 each.
- **Schema:** BlogPosting (author and publisher are the Organization), BreadcrumbList, FAQPage and Service. No LocalBusiness, Rating, Review or QAPage schema.
- **Template:** `listicle()` in `src/lib/blog-data-india.ts` gained `where`, `context` and `sourcesNote`. The local articles live in `src/lib/blog-data-india-local.ts`.

## 10. Build and validation
- **Code checks:** `tsc` passes; ESLint shows 0 errors (9 older warnings); `npm run build` passes (2,290 static pages).
- **Crawl:** all 776 sitemap URLs return 200, with 0 broken internal links.
- **New pages:** no unrendered markup; external links use `noopener noreferrer`.
- **Mobile:** no horizontal overflow at 390px.

## 11. Remaining opportunities
1. **Search Console:** connect it (Country = India) and log batch 1 at 4, 8 and 12 weeks.
2. **Batch 2:** P1 candidates are Pune web, Hyderabad mobile, Chennai AI and Mumbai web. Verify four local companies for each first.
3. **Directories:** list ZSpace on the directories that rank for city queries (DesignRush, GoodFirms, Clutch), with owner approval.
4. **Case studies:** real case studies, especially any with businesses in these cities (with permission), would strengthen local relevance more than any new article.
5. **Re-verification:** re-check all listed companies by 2027-04.
