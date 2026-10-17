# 16. Validation and test report

Run on 17 October 2026 against a local production build (`next build` then `next start`), after all batch 1 changes.

| Check | Command or method | Result |
| --- | --- | --- |
| Production build | `npx next build` | Pass |
| Type check | `npx tsc --noEmit` | Pass |
| Lint | `npx eslint src` | 0 errors; 9 warnings, all pre-existing unused imports in `app/page.tsx`, `ContactSections.tsx`, `Hero.tsx`, `ProblemSection.tsx` |
| Automated tests | — | None exist in the repository |
| Full crawl (1,089 URLs) | `tools/crawl.py` against localhost | 1,089 × 200; 0 canonical mismatches; 0 pages without exactly one H1; 0 invalid JSON-LD; 0 noindex; 0 broken internal links; 0 duplicate titles or descriptions; 0 orphan articles |
| Sitemap | `/sitemap.xml` | 1,089 URLs, 1,064 with `lastmod` |
| Organization schema | Homepage JSON-LD | `areaServed` lists India, United Arab Emirates, United Kingdom, Australia, Singapore |
| Service-page section | Headless Chrome screenshots at 1440 px and 390 px | Renders in the existing design; no horizontal scroll; links work |
| Homepage H1 | Server HTML text | "Meet ZSpace Labs, your website builder." |
| Contact attribution | Headless Chrome: landing page with UTM → /contact?src=/services/shopify-development | Hidden fields filled (landing page, UTM, source page); service preselected; value kept across navigation |
| Contact API | POST with honeypot | 200 without sending; over-long `utm` → 400 with a field error. **No real email sent** |
| Refreshed article render | /blogs/how-to-choose-a-cro-agency | New sections, table and link present |
| External links added | curl | All return 200, except gov.au and help.shopify.com, which block automated requests (URLs taken from search results or the original articles) |

## Known issues and failures during the batch

- A stale `next start -p 3123` process (since 4 Oct) overwrote 274 article pages in a fresh `.next` build with "not found" output when it received requests. Live was unaffected; the analysis switched to live HTML. Stop the process before local testing.
- The orphan-label cleanup briefly altered `src/lib/inline-content.tsx` (a label matched code). It was reverted from git before the build; the build and crawl above ran on the corrected file.
- PageSpeed Insights quota was exhausted; no new lab or field performance data.

## Still requires access after deploy

Search Console URL Inspection for changed pages, sitemap resubmission, Rich Results Test, GA4 DebugView for `generate_lead` with `landing_page`, and one real test enquiry to confirm the email shows the new fields.
