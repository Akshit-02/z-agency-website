# Batch 6 research notes (checked 15 Oct 2026 IST)

Searches were US-only. "Verify" means the claim must be confirmed on the official page before it appears in an article.

## Official or first-party (seen in results; read in full at writing)

- **Shopify, "B2B for all"** (April 2026), https://shopify.com/news/b2b-for-all. Core B2B features are on the Basic, Grow and Advanced plans:
  - company profiles
  - up to 3 catalogues
  - volume pricing and quantity rules
  - vaulted cards
  - payment terms

  Unlimited catalogues remain Plus-only (per secondary sources; verify).
- **shopify.dev changelog, "Legacy customer accounts are deprecated"**, https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated.md:
  - February 2026 (exact day to confirm)
  - not offered to new stores
  - no feature updates
  - sunset date "later in 2026"

  The community post at https://community.shopify.dev/t/legacy-customer-accounts-availability-update/31724 says the same. The 30-day revert and the one-time-code sign-in come from secondary sources (verify).
- **Play Console Help 14151465**, https://support.google.com/googleplay/android-developer/answer/14151465:
  - new personal developer accounts need a closed test with at least 12 testers opted in for the last 14 continuous days before applying for production
  - organisation accounts are exempt
  - cutoff date: 13 Nov 2023 per most sources (verify)
- **Repo check:** `mobile-app-deep-linking` already says Firebase Dynamic Links has shut down (correct direction; confirm the date on Firebase's FAQ when updating).

## Secondary (verify or do not use)

- **Shopify POS in India.** A community post says the POS software works with third-party hardware, and a 2025 guide says Shopify Payments is not available in India. POS Pro pricing comes from a competitor page, so **do not use it**.
- **Shopify B2B gaps below Plus** (Magebit, SparkLayer, wholesalehelper): bulk order forms, registration approval and MOQ rules. These are vendor claims; check Shopify Help.

## To read at writing

| Topic | Sources |
|---|---|
| 101 | PostgreSQL (isolation, JSONB); MongoDB (transactions, data modelling); DynamoDB (access patterns); Firestore (query limitations) |
| 102 | PostgreSQL logical replication; MySQL online DDL; AWS DMS / Google Database Migration Service docs |
| 103, 105 | MDN `Intl`; Unicode CLDR plural rules; ICU MessageFormat; Apple String Catalogs; Android per-app language preferences; App Store Connect and Play Console localisation |
| 104 | OWASP Logging Cheat Sheet; OWASP ASVS logging chapter; NIST SP 800-92 (dated) |
| 107 | Apple and Android version-number docs; App Store phased release; Play staged rollouts and halting |
| 108 | Apple Universal Links / AASA; Android App Links verification; Firebase Dynamic Links FAQ |
| 110 | Shopify Help (POS Lite vs Pro, offline mode, supported countries, hardware) |
| 111 | shopify.dev (metafield types, definitions, limits, access); metaobjects; Standard Product Taxonomy |
| 112 | Shopify Help (customer accounts); customer account UI extensions; Customer Account API |
| 113 | NN/g data tables; GOV.UK Design System table and filter patterns |
| 115 | GOV.UK Design System error messages; NN/g error-message guidelines |
| 116 | W3C WCAG 2.2 Understanding docs (2.1.1, 2.1.2, 2.4.3, 2.4.7, 2.4.11, 2.4.13); WAI-ARIA APG dialog and keyboard interface practices |
| 117, 120 | GA4 help (annotations, comparisons, funnel exploration); Google Search Central (site moves and redesigns, CWV report) |

## Search-intent observations (qualitative, no volumes)

- **101, 116:** results are dominated by vendor and education content; there is room for a neutral, decision-focused page.
- **111, 112:** app vendors and agencies dominate, some content is out of date (legacy accounts), and there is a gap for accurate, dated pages.
- **119:** no distinct services-package intent was observed apart from pricing-page queries, so it is deferred into CRO-29.
