# Blogs 161–180 (Australia): Implementation and QA Report

Implemented 2026-10-09. The decision rationale is in [`australia-batch-161-180-audit.md`](./australia-batch-161-180-audit.md). No Search Console, analytics or keyword data was available, so every keyword is a hypothesis.

## 1. Summary

| | Count |
|---|---|
| New pages | 7 (3 Australian, 4 generic in Australian English) |
| Updated existing pages | 12, including **one factual correction** |
| Covered with no change | 1: topic 166 is already served by `secure-web-application-development-australia` |
| Merged / redirected / deleted | 0 |
| Site total | 930 posts. No duplicate slugs, titles, H1s or meta descriptions |

## 2. Factual correction

`ai-ecommerce-australia`, published in batch 101–120, said Google's UCP-powered agentic checkout was "announced, not confirmed live" in Australia. Trade press reported that it went live on 19 June 2026 with launch retailers for single-item purchases in Search, AI Mode and Gemini ([Ragtrader](https://www.ragtrader.com.au/news/the-iconic-kogan-test-google-s-agentic-ai-checkout)). Google's [Merchant Center help](https://support.google.com/merchants/answer/16992327) says self-serve onboarding reaches Australia "next year".

The following were updated:
- the article's FAQ, key takeaways, capability table and status table
- the article's meta description
- `public/llms.txt`

A visible dated correction note was added, and a "Do you need to act on agentic commerce now?" readiness section.

## 3. New URLs

| # | URL | SEO title | Category | Words* | FAQs |
|---|---|---|---|---|---|
| 167 | /blogs/web-application-penetration-testing-australia | Web Application Penetration Testing in Australia | Web Development | 1,556 | 6 |
| 168 | /blogs/cyber-incident-response-plan-australia | Cyber Incident Response Planning in Australia | Web Development | 1,630 | 6 |
| 169 | /blogs/api-security-best-practices | API Security Best Practices: A Practical Checklist | Web Development | 1,599 | 6 |
| 170 | /blogs/cloud-cost-optimization-australia | Cloud Cost Optimisation for Australian Businesses | Web Development | 1,482 | 6 |
| 171 | /blogs/devops-for-growing-businesses | DevOps for Growing Businesses: A Practical Guide | Web Development | 1,314 | 6 |
| 172 | /blogs/application-monitoring-observability | Application Monitoring and Observability Explained | Web Development | 1,305 | 6 |
| 173 | /blogs/software-maintenance-contracts-australia | Software Maintenance Contracts in Australia: What to Ask | Web Development | 1,542 | 6 |

\* Visible words, including tables and FAQs. All meta descriptions are ≤160 characters and all SEO titles ≤60.

**Capability honesty:**
- 167 states plainly that ZSpace does not provide penetration testing.
- 168 states that ZSpace is not an incident response provider.
- 170, 171 and 172 make no claim of managed cloud, DevOps or 24/7 operations services. Their CTAs are limited to building and shipping web and mobile applications.
- 173 describes what to ask a provider and gives no ZSpace pricing or SLA.

## 4. Updated URLs

URLs and canonicals are unchanged; `updated` is set to 2026-10-09 on each.

| # | URL | Added |
|---|---|---|
| 161 | ai-ecommerce-australia | UCP correction (§2), readiness checklist, and that not every retailer needs to act now |
| 162 | ai-product-discovery | Evaluation on your own store: relevance judgements, zero-result queries, metadata, oversight, experiments. Plus 1 FAQ and a trimmed meta description |
| 163 | ai-customer-service-australia | Rule-based vs LLM table, non-support uses, cost drivers, pre-launch testing, plus 1 FAQ |
| 164 | ai-governance-australia | A one-page minimum mapped to the AI6 practices, a note on the DTA agency policy, plus 1 FAQ |
| 165 | ai-readiness-assessment | Australian checks: AI6, Privacy Act coverage, ADM transparency, APP 8, ACL. Plus 1 FAQ and a trimmed meta description (206 → ≤160) |
| 174 | design-systems-for-teams-that-move-fast | Component library vs design system, governance, versioning, WCAG 2.2, handover, plus 1 FAQ |
| 175 | api-integration-australia | Enterprise integration architecture: point-to-point vs iPaaS vs custom, ownership, phasing, compatibility. Plus 1 FAQ |
| 176 | b2b-portal-development-australia | Public catalogue vs logged-in portal vs hybrid store, plus 1 FAQ |
| 177 | customer-portal-development-australia | Portal vs contact form vs knowledge base vs support platform, plus 1 FAQ |
| 178 | website-replatforming | Cutover checklist based on Google's site-move guidance (301/308; keep redirects generally ≥1 year), plus 1 FAQ |
| 179 | ecommerce-product-feeds | Australian section: GST-inclusive prices, GS1 GTINs, shipping and returns, surcharging, UCP status. Plus 1 FAQ and a trimmed meta description |
| 180 | custom-software-development-australia | Proposal evaluation table and handover checklist, plus 1 FAQ |

Generic pages keep their existing US spelling; Australian pages use Australian English.

## 5. Internal links

- **New pages:** 7–9 contextual blog links each, plus service links.
- **Back-links:** one sentence was added to the conclusion of each of these 10 pages:
  - secure-business-website-development, secure-web-application-development-australia
  - ecommerce-observability, ecommerce-api-gateway
  - website-maintenance-guide, mobile-app-maintenance
  - llm-cost-optimization, ai-agent-incident-response
  - scaling-saas-applications, cloud-migration-australia
- **llms.txt:**
  - 4 Australian entries added.
  - 3 generic guides added to the intro list.
  - The `ai-ecommerce-australia` line was corrected.

## 6. Files

**New:**
- `src/lib/blog-data-au-security-ops.ts` (167–169)
- `src/lib/blog-data-au-engineering-ops.ts` (170–173)
- this report and the audit

**Modified:**
- `src/lib/blog-data.ts`: registration, plus the design-systems update
- **Updates:**
  - `blog-data-au-commerce-2.ts`, `-commerce-13.ts`, `-au-ai-2.ts`, `-au-ai-3.ts`
  - `-ai-apps-9.ts`, `-au-trust.ts`, `-au-portals.ts`, `-webdev-9.ts`, `-au-software.ts`
- **Back-links:** `-webdev-*.ts`, `-commerce-*.ts`, `-mobile-3.ts`, `-ai-core-*.ts`, `-agent-ops-*.ts`, `-au-saas-product.ts`, `-au-business-software.ts`, `-au-visibility.ts`
- `public/llms.txt`

## 7. QA actually run

| Check | Result |
|---|---|
| `npx tsc --noEmit -p .` | Clean |
| `npx eslint` on all changed `.ts` files | Clean |
| Internal links (930 posts) | 0 broken |
| Duplicate titles / H1s / descriptions | None |
| Australian-spelling scan | Clean, except OWASP's official risk names, which are kept verbatim |
| `npm run build` | Succeeded; 2,848 static pages |
| Built HTML (7 new) | 1 H1, correct canonical, `index, follow`; all present in the sitemap |
| Sitemap lastmod (12 updated) | 2026-10-09 |
| Correction visible in built `ai-ecommerce-australia` | Yes |
| External URLs | OWASP (WSTG, API Top 10 2023, verified list text), DORA, OpenTelemetry, Google site-move doc, OAIC NDB, CISC and Russell Kennedy returned 200. FinOps returned 403 and cyber.gov.au timed out for automated requests |

**Not performed:** Rich Results Test, Lighthouse, real-device and screen-reader testing, live deployment checks, human editorial review.

## 8. Verified vs secondary

- **Verified on primary pages:**
  - OWASP API Security Top 10 2023 list
  - Google Merchant Center UCP timing
  - Google site-move guidance
  - OAIC pages
- **Secondary:**
  - Ragtrader (UCP Australia launch)
  - ASD incident response guidance and hotline (search summary of cyber.gov.au pages)
  - SOCI 12/72-hour timeframes
  - ACL $100,000 threshold (law-firm summaries)
  - National AI Plan, AI6 and DTA policy (secondary summaries)
- **Assumptions:** all examples are hypothetical. No savings, uptime, prices or SLAs are quoted.

## 9. Remaining manual steps

1. Check UCP onboarding status for Australian merchants before promoting the corrected `ai-ecommerce-australia`.
2. Have a lawyer review 173 (ACL and unfair contract terms) and 168 (reporting obligations).
3. Optionally build a dedicated Australian page for agentic commerce once Merchant Center onboarding opens, if Search Console shows demand. For now, the updated page serves the intent.
4. **Commit:** batches 121–140, 141–160 and 161–180 are all uncommitted.

## 10. Publication order and monitoring

**Publication order:** ship as one deploy. If you need to stage it:
1. The `ai-ecommerce-australia` correction (ship first)
2. 168, 169, 167 (security)
3. 173, 172, 171, 170 (operations)
4. The remaining updates

**Cannibalisation pairs to monitor in Search Console (Australia):**
- secure-web-application-development-australia vs api-security-best-practices
- website-security-australia vs cyber-incident-response-plan-australia
- mobile-app-maintenance vs software-maintenance-contracts-australia
- cloud-migration-australia vs cloud-cost-optimization-australia

Review impressions, clicks, CTR, queries and indexing monthly, and judge results after 8–12 weeks.
