# 12. International landing-page recommendations and URL mapping

The owner confirmed clients in all five markets on 17 October 2026. That justifies **one honest page per non-India market**, not country copies of every service. The pages should go live only once the delivery facts below are supplied, because without them the page would just swap the country name, which the brief rules out.

## Recommendation

| Market | Page | Justified now? | Blocking facts (owner) |
| --- | --- | --- | --- |
| India | None: the six service pages are already India pages | — | — |
| UAE | `/work-with-us/uae` | Yes, once facts arrive | Services sold there, invoicing currency (AED/USD), working hours offered in GST, contract jurisdiction, Arabic capability (in-house or partner), one referenceable project |
| United Kingdom | `/work-with-us/uk` | Yes, once facts arrive | Same, plus GBP pricing and UK GDPR processor terms |
| Australia | `/work-with-us/australia` | Yes, once facts arrive | Same, plus AUD pricing and AEST overlap |
| Singapore | `/work-with-us/singapore` | Lowest priority | Same; must state that ZSpace is not an EDGE pre-approved vendor |

Each page would contain: which services are delivered there and how; meeting hours and response times actually offered; currency and contract terms; the rules a build there is designed around (the sourced notes already in `src/lib/site.ts`); the relevant existing articles (73 Australia, 36 UAE/GCC, 12 UK); FAQs from real buyer questions; a contact path that records the market. No office address, local phone number or local testimonial unless real.

## Proposed URL mapping

| Current URL | Proposed URL | Reason | Expected benefit | Backlink and traffic risk | Redirect plan |
| --- | --- | --- | --- | --- | --- |
| — (new) | /work-with-us/uae | Owner confirms UAE clients | A credible landing page for UAE commercial queries and for the 36 UAE articles to link to | None (new URL) | None |
| — (new) | /work-with-us/uk | Owner confirms UK clients | As above for 12 UK articles | None | None |
| — (new) | /work-with-us/australia | Owner confirms AU clients | As above for 73 AU articles | None | None |
| — (new) | /work-with-us/singapore | Owner confirms SG clients | As above | None | None |
| /blogs/web-development-company-dubai | unchanged | Keep; reword as a buyer guide that links to /work-with-us/uae | Removes an implied local presence | None | None |
| /blogs/web-development-company-australia | unchanged | As above | As above | None | None |
| All 1,057 /blogs/* URLs | unchanged | No country folders: there are no regional versions | Preserves every URL and link | None | None |

## International technical rules

- **No hreflang** for these pages: they are not translations or regional versions of another page. Add hreflang only if true alternates are created later (for example an Arabic version of the UAE page, with reciprocal `en` / `ar` annotations and self-references).
- **Self-canonical** on each market page; include in the sitemap.
- **No IP-based redirects** or forced regional routing.
- **Domain**: `.in` signals India to Google. A gTLD migration is a separate, high-risk project to consider only if non-India revenue becomes material (decision Q2).
