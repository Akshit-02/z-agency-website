# Service page audit

Pages: `/services` (hub) plus 6 service pages. Source data is in `src/lib/services-data.ts`, rendered by `src/components/detail/ServiceDetail.tsx` and `src/app/services/[slug]/page.tsx`. The per-page detail with quotes is in `appendix-content-eeat-audit.md` §2.4–2.10.

## What ZSpace actually offers

There are six services: Full-Stack Website Development, Mobile App Development, AI Automation, UI/UX Design, Shopify Store Setup & Optimization, and CRO Audit. The brief's list of about 40 service areas (ERP integration, legacy modernisation, SaaS development, vendor portals, BI dashboards and so on) is **not** created as pages. The brief says not to create pages for services that aren't offered, and the owner hasn't confirmed which of these are. Several already appear as use cases inside existing pages (custom web apps, portals, dashboards, integrations), and GSC shows demand for some of them (see below). They are listed for owner confirmation in `human-review-required.md`.

## Overall verdict

The service pages are better than typical agency pages:
- specific trade-offs (React Native vs native, "Wix will cost less than a custom build")
- honest "Not the right fit" sections
- dated regulatory notes
- no invented numbers

The gaps are structural:

| Gap | Pages | Status |
|---|---|---|
| FAQ answers (including cost and timeline) were not in the HTML | all 6 + industries + home | **Fixed**: all answers are server-rendered |
| Social cards showed generic homepage text | all 6 | **Fixed** |
| CTA heading lowercased acronyms ("ai automation", "ui/ux design", "cro audit") | 3 of 6 | **Fixed**: `inSentence()` helper |
| H1 = keyword stub + tagline ("AI automation agency in India: Less repetitive work. More room to move.") | all 6 | Proposed: keyword-only H1, tagline as subheading (copy and design decision) |
| No visible "what affects cost and timeline" section (it was only in collapsed FAQs) | all 6 | Proposed: `costFactors` field drawn from existing FAQ copy |
| No step-by-step engagement process beyond a short `approach` | all 6 | Proposed: 5–6 steps using promises the site already makes (initial view → call → written scope → fixed estimate per phase → demos → handover) |
| No proof: no case studies, people or sample deliverables | all 6 | Owner input needed |
| Titles are India-only ("…in India") for a 5-market business | all 6 + hub | Owner decision (see the international report) |
| Use cases duplicated (the "What we typically build" cards repeat the Across-India cards) | ai-automation | Proposed: replace with named service lines |
| Hub card names differ from page H1s ("CRO Audit" vs "CRO agency") | hub | Proposed: one naming scheme |

## GSC demand not covered by a service page

| Query (3-month impressions, position) | Currently served by | Suggested home (if offered) |
|---|---|---|
| ai automation services (125, 28.0) / agency (68, 46.1) / agency india (66, 22.6) | /services/ai-automation | Same page: expand with named service lines |
| saas website development (57, 21.7) | blog `saas-website-development` | Section on website-development + rewrite the blog's first half |
| legacy software development company (64, 73.2); legacy php modernisation australia (159, 41.5) | AU blog | Owner to confirm a modernisation offering → section or page |
| customer portal development australia (60, 92.7); supplier portal (546 impressions on the blog, pos 7.1) | blogs | "Portals" section on website-development; manufacturing industry page as the funnel |
| b2b ecommerce website development (25, 25.4) | blog | Shopify/website-development B2B section (if offered) |
| custom shopify app development (33, 67.0) | blog | Shopify page section (if offered) |

## Recommended order of work (P1)

1. `/services/ai-automation`: keyword-only H1, a named "AI automation services we offer" block, cost factors, process, dedupe. It is the highest-impression commercial page.
2. Cost-factors and process sections on all six (shared component, content from existing FAQs).
3. `/services/website-development` and `/services/shopify-development` sections for portals, SaaS sites, B2B and custom apps, **after owner confirmation**.
4. Services hub as a decision page.
5. Proof: a named team, sample deliverables, founding year (owner).

Every proposed change uses existing site statements. None requires inventing clients, metrics or credentials.
