# Batch 5 research notes (checked 15 Oct 2026 IST)

Searches were run from the US only. "Primary" means the source was fetched and read directly; "secondary" means it is only a search-result summary and must be verified before it appears in an article.

## Primary (fetched)

- **Firebase, "Best practices for FCM registration token management"** (page updated 2026-10-13): https://firebase.google.com/docs/cloud-messaging/manage-tokens
  - 270-day Android expiry
  - no iOS inactivity expiry
  - 30-day staleness window
  - monthly refresh
  - daily cleanup
  - delete the token on `UNREGISTERED` (404), or on `INVALID_ARGUMENT` (400) when the payload is valid
  - resubscribe to topics when the FID changes
- **Google Search Central, mobile-first indexing best practices** (page updated 2025-12-10): https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
  - three configurations: responsive, dynamic serving, separate URLs
  - "Google recommends Responsive Web Design because it's the easiest design pattern to implement and maintain."
- **Shopify Help, "Holding fulfillments" and the Flow trigger "Fulfillment order is put on hold"** (search-result extracts from help.shopify.com; re-read in full at writing):
  - holds reserve inventory and block fulfilment
  - held orders are excluded from the Unfulfilled list
  - Flow templates hold by risk level or order value (default 1,000 USD)
  - the trigger applies to third-party fulfilment

## Secondary (verify before use)

- **Shopify catalogue limits** (Craftshift, letstalkshop, Ralawise; none of these is Shopify's own documentation, and they disagree on CSV overflow behaviour):
  - 2,048 variants per product
  - 15 MB CSV limit
  - 1,000 new variants per day for stores with 50,000+ variants
- **Mobile accessibility testing** (Kobiton, BrowserStack, Quash, Netguru and others):
  - XCTest `performAccessibilityAudit()` (iOS 17+)
  - Espresso `AccessibilityChecks`
  - "automated tools catch ~30%" (unsourced, so do not use)
  - 44pt / 48dp targets (verify on Apple HIG and Material)
- **Staging environments** (ServerMania, Statsig, WorkOS docs, itsupplychain):
  - isolate outbound email, SMS and payments
  - scheduled jobs are a risk in restored datasets
  - match feature flags across environments
  - distinct labels
- **Technical debt** (Sourcegraph, vendor blogs):
  - characterization tests first (Feathers, *Working Effectively with Legacy Code*)
  - hot spots
  - strangler fig and branch by abstraction
  - McKinsey and Stripe statistics are secondhand, so do not use them
- **Empty states**:
  - NN/g "Designing Empty States in Complex Applications: 3 Guidelines" (https://www.nngroup.com/articles/empty-state-interface-design/; the full text has not yet been read)
  - Salesforce Lightning: what the space is for, why it is empty, what to do next
  - SAP Fiori: the headline explains the reason
  - PatternFly: no toolbars or filters on full-page empty states

## Search-intent observations (qualitative; no volumes)

- 82, 86, 90, 91: vendor and app-seller content dominates and is often promotional or inconsistent, so there is a gap for neutral, sourced guides.
- 94: the results page is dominated by the comparison format; terminology conflicts across top results.
- 96: design-system documentation and UX blogs; the NN/g article is the authority.
- 92, 97, 99, 100: intents already served on site (see decisions).

## To verify at writing (not yet checked)

**Shopify:**
- inventory mutations and their idempotency/compare requirements (current API version)
- bulk operation limits
- combined listings plan
- smart-collection condition limit
- Flow plan availability
- Standard Product Taxonomy

**Apple / Google:**
- current Xcode SDK minimum
- Play target API deadline
- `POST_NOTIFICATIONS`
- APNs token-based auth
- FCM HTTP v1 auth

**GA4 / Firebase:** event name length, parameter limits and reserved prefixes.

**Privacy and accessibility law:**
- UK DUAA analytics-cookie exemption commencement
- India DPDP Rules phasing
- UAE PDPL
- EU EAA date (28 Jun 2025)
- EN 301 549 version

**Engineering references:** OWASP ASVS current version and secrets chapter; DORA metric names.
