# India Listicle Research

How the six "best agencies in India" articles were researched, structured and constrained. Verified 2026-10-04.

## Format observed in the SERPs

Agency-published listicles are a normal, competitive format for these queries (Octet, ProCreator, upGrowth, ROI Minds, Aureate Labs and others publish their own). Most list the publisher first without a clear disclosure. The ZSpace Labs versions differ by:

- A visible editorial disclosure (callout) using the brief's wording.
- A stated methodology and selection criteria.
- Describing competitors only from their official websites; no scores, ratings or "#1" claims.
- A "where it is not the best fit" paragraph for ZSpace Labs itself.
- A sources section with the verification date.

## Article structure (all six)

1. Quick answer, with a checklist naming the five companies and their best fit
2. Editorial disclosure (note callout)
3. How we chose these companies (criteria, plus excluded companies and why)
4. Comparison table: Agency | Main specialisation | Relevant services | Best fit
5. Five profiles: ZSpace Labs first, then four verified Indian companies, each with official website link and "who might consider it"
6. Services and capabilities compared (based in, published focus, also offers)
7. What to look for
8. Questions to ask before hiring
9. Typical project considerations (links to cost and comparison articles)
10. Conclusion with CTA to the relevant service page
11. Sources and verification
12. FAQs (FAQPage schema), including "Is this an independent ranking?" and "Did any company pay to be included?"

## Shortlists

| Article | Companies after ZSpace Labs | Excluded |
|---|---|---|
| Web development | SparxIT Solutions, GeekyAnts, TatvaSoft, Aalpha Information Systems | Webenza (marketing-led) |
| Mobile apps | Appinventiv, Simform, OpenXcell, Konstant Infosolutions | — |
| Shopify | Aureate Labs, Magneto IT Solutions, Codilar, CartCoders | — |
| AI automation | Fractal, Ksolves, AQe Digital, Rytsense Technologies | — |
| UI/UX | Lollypop Design Studio, Octet Design Studio, ProCreator, Yellow Slice | — |
| CRO | upGrowth, ROI Minds, UnOptimised, Tenet | Convertcart (no Indian office stated) |

Full facts per company: [india-competitor-database.md](india-competitor-database.md).

## Rules applied

- Self-reported figures (client counts, project counts, "#1" claims) on competitor sites were **not repeated**. Years in business and certifications are attributed ("states", "according to its site", "according to public company listings").
- No competitor was described negatively. "Fit" statements follow from each company's own stated focus.
- ZSpace Labs is not described as India's best, award-winning or experienced by years. Its profile states it publishes no case studies, certifications or portfolio.
- External links go to official homepages only and open in a new tab with `rel="noopener noreferrer"`.
- Listicle cover graphics are pinned (`sceneKind`) to service-themed scenes, so no generated comparison graphic shows ✓/✗ marks next to competitor names.

## Maintenance

Re-verify every company every 6 months, or sooner if a company rebrands, closes or changes focus. Update the `VERIFIED` constant in `src/lib/blog-data-india.ts` and the sources text when doing so, and set `updated` on each post.

## Note on external links

An earlier site-wide request removed all external links. The India brief explicitly requires linking each listed company's official website. These articles therefore contain 8 external links each (4 profile links + 4 source links); no other page has external links. Remove them if the earlier rule should take precedence.
