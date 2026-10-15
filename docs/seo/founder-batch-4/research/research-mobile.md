# Batch 4 research: Mobile (topics 65–68)

Checked 15 Oct 2026. Facts reused from earlier batches are marked "(batch N)". Anything time-sensitive was re-verified today on the official page, and the date reflects that.

Tool limits:
- Reddit is unreachable from these tools.
- Web search is US-only.
- Hacker News was searched through the Algolia API (hn.algolia.com). It shows very little demand for these four topics, so demand evidence is mostly the SERP and "people also ask"-style themes. That is noted per topic.
- Several Google Play Help fee tables render as images or garbled tables. Where a figure is ambiguous, I say so rather than guess.

Boundaries with other planned pages:
- MOB-13 `in-app-purchase-vs-external-payments` (fees and rules). This is a roadmap row only and is not built yet.
- MOB-26 / Batch 8 #145 `mobile-app-subscriptions`. Batch 8 decided CREATE, covering entitlement states, StoreKit 2 and Play RTDN.
- MOB-23 (UPI in apps).
- Batch 9 #165 rejected a separate "offline sync" page because `offline-first-mobile-app-development` already covers the mechanics.
- `mobile-app-launch-checklist` (Batch 2) owns submission assets.

---

## Topic 65: How to monetise a mobile app (subscriptions, freemium, ads, one-time payments)

**1. Founder question and business pain.** "How will this app make money, and how much of that do Apple and Google take?" Founders choose a model too late, often after the build. They then find three things:
- The model decides payment plumbing: IAP vs gateway, and a backend for entitlements.
- It decides store-review risk.
- It decides the economics: fees, and whether ads need ATT and consent work.

The specific worries are:
- picking ads and earning almost nothing;
- picking subscriptions for an app that doesn't deliver ongoing value (Apple 3.1.2 rejects these);
- routing a digital purchase through Razorpay or Stripe and getting rejected.

**2. Intent and buyer stage.** Informational to commercial investigation, at the pre-build or MVP-scoping stage. This is an early-funnel hub that feeds the cost, payments and subscriptions pages.

**3. Queries.**
- Primary query: "how to monetise a mobile app" (also the US spelling "monetize").
- Supporting queries:
  - "app monetization models"
  - "freemium vs subscription app"
  - "in-app purchase vs subscription"
  - "do I have to use Apple in-app purchase"
  - "can I use Stripe in my iOS app"
  - "Google Play billing required for physical goods"
  - "reader app external link"
  - "AdMob vs subscription"
  - "one-time purchase app vs subscription"
  - "rewarded ads app store rules"

No volumes are given.

**4. Evidence of demand.** Weak on community sources, strong on the SERP.
- HN Algolia has no on-topic thread with discussion for "monetize app subscription ads". Hits are Show HN posts with 0–5 comments, for example https://news.ycombinator.com/item?id=31751623 (Ask HN, monetising side projects, 3 comments).
- The SERP is saturated with generic guides, which signals commercial interest. Vendors with a stake publish heavily, for example RevenueCat's https://www.revenuecat.com/blog/engineering/how-to-monetize-your-app-without-ads.
- The recurring question themes are:
  - "Do I have to use in-app purchase?"
  - "Can I link to my website?"
  - "Which model makes the most money?"
  - "Ads vs subscriptions for a small app".

Reddit (r/iOSProgramming, r/androiddev, r/startups) could not be checked.

**5. Existing ZSpace coverage.**
- No monetisation page exists. No slug contains "monetis" or "monetiz".
- `mobile-app-payments` (853 words, 0 sources) has a "Three Kinds of Mobile Payments" table and a one-paragraph "Platform Payment Rules". The rules are correct in outline but carry no section numbers, no reader-app or person-to-person exceptions, no regional programmes and no fees.
- `mobile-app-development-cost` (Batch 1) carries the by-region commission table.
- `mobile-app-analytics` (Batch 3) and `improve-mobile-app-retention` cover ATT only in an analytics or retention frame.
- No page covers ads (AdMob, consent, Play Ads policy) at all.
- `subscription-ecommerce-*` pages cover ecommerce subscriptions, not app-store subscriptions.

What's missing is the whole decision layer:
- which model fits which value pattern;
- which payment rail each model forces;
- how the commission differs by model and region;
- what ads require (consent and ATT).

**6. SERP weaknesses.**
- https://bubble.io/blog/mobile-app-monetization/ is current (2026), but it is a vendor guide. It says "check platform policies" without quoting 3.1.x or the Play Payments sections.
- https://wearearch.com/blog/mobile-app-monetisation-strategies is an agency listicle with no regional fee detail.
- https://gridcraft.mediakular.com/blog/monetize-your-mobile-apps-guide is generic, with no rule citations.
- https://www.revenuecat.com/blog/engineering/how-to-monetize-your-app-without-ads is vendor-biased against ads and quotes anecdotal MRR figures.
- Across the SERP:
  - None maps each model to the exact guideline clause.
  - None reflects the 2026 fee changes: Google's June and September 2026 split fees, Apple's EU terms from 1 Oct 2026, and the US link-out status.
  - None covers the GDPR CMP requirement for AdMob, or Play's 15-second interstitial rule.
  - Several cite anecdotal revenue numbers, which we won't do.

**7. Qualified-buyer potential.** Medium-high. Readers are pre-build founders choosing a model that changes scope: IAP, subscriptions backend, ad SDK and consent. That is the same buyer as `/services/mobile-app-development`. The hub also routes to the deep dives (MOB-13 and MOB-26), which are bottom-funnel.

**8. Format and original asset.** A hub guide of about 2,200–2,800 words with two original assets.
- **(a) "Model → rail → rule" matrix.** Rows: paid download, one-time unlock (non-consumable), consumables / virtual currency, auto-renewable subscription, freemium + subscription, ads (banner / interstitial / rewarded), physical goods and services, person-to-person real-time services, reader apps, B2B / enterprise licences. Columns:
  - what the user pays for;
  - required payment rail on iOS (cite the 3.1.x clause);
  - required rail on Google Play (cite the Payments policy section);
  - can you link out, and where;
  - commission exposure (link to the fee table, not restated in full);
  - backend you'll need (receipt and entitlement service, ad mediation, consent).
- **(b) "Which model fits" decision questions:**
  - Is value ongoing or one-off? 3.1.2 requires ongoing value and at least a 7-day period.
  - Is it consumed in the app or outside it?
  - Is it real-time one-to-one?
  - Is session frequency high enough for ads? Frame this qualitatively only, with no eCPM numbers.
  - Do you sell to organisations rather than individuals?

Also add a "Regional exceptions in one box" summary (US, EEA, UK, AU, JP, KR, IN) with an "as of 15 Oct 2026" stamp and a quarterly review date.

No revenue benchmarks: I found none from a primary source with a stated method. Store fees are facts, and conversion rates and ARPU are not.

**9. Service page and CTA.** `/services/mobile-app-development` is primary. `/services/ui-ux-design` is secondary, for paywall and onboarding design. CTA: "Choosing a model before you scope the build? We'll map your model to the payment rails, store rules and backend it needs." Link to `mobile-app-payments`, `mobile-app-development-cost`, `mobile-app-subscriptions` (MOB-26, when live), `in-app-purchase-vs-external-payments` (MOB-13, when live), `mobile-app-analytics` (ATT) and `mobile-app-data-privacy`.

**10. Recommendation: CREATE `/blogs/mobile-app-monetisation-models` as a hub. I agree with the preliminary call.**
- No page holds this intent.
- `mobile-app-payments` is about payment UX and architecture, a different intent.
- The hub should stay at the model and decision level.
- It should push the fee mechanics to MOB-13 and subscription mechanics to MOB-26.
- It should restate only the headline rule for each model.

Keep fees in one place. The detailed by-region fee table lives in `mobile-app-development-cost` (Batch 1) and later MOB-13. The hub links to those and shows only the headline structure, so one source of truth gets updated each quarter.

Spelling: the site uses "monetisation" (British) in its other slugs, so keep the British slug. Use "monetize" once in the body or FAQ for US queries.

**11. Facts an article would need**

Apple App Review Guidelines (https://developer.apple.com/app-store/review/guidelines/, checked 15 Oct 2026; the page shows no last-updated date in the fetched text):

| Claim | Source | Checked | Label |
|---|---|---|---|
| 3.1.1: "If you want to unlock features or functionality within your app, (by way of example: subscriptions, in-game currencies, game levels, access to premium content, or unlocking a full version), you must use in-app purchase." No license keys, QR codes, crypto etc. to unlock | Apple guidelines | 15 Oct 2026 | [Official] |
| 3.1.1: purchased credits or in-game currencies "may not expire". A restore mechanism is required for restorable IAPs. Digital gift cards redeemable for digital goods can only be sold via IAP | same | 15 Oct 2026 | [Official] |
| 3.1.1 / 3.1.3: on the **United States storefront**, apps are not prohibited from "buttons, external links, or other calls to action". Outside the US, such steering is prohibited unless a specific entitlement applies (3.1.1(a) StoreKit External Purchase Link Entitlement in specific storefronts; Music Streaming Services Entitlement) | same | 15 Oct 2026 | [Official] |
| 3.1.2: auto-renewable subscriptions "must provide ongoing value", the period "must last at least seven days and be available across all of the user's devices". Don't take away primary functionality existing users already paid for when switching to subscriptions | same | 15 Oct 2026 | [Official] |
| 3.1.3(a) Reader apps: magazines, newspapers, books, audio, music, video. May let users access previously purchased content and offer free-tier account creation and account management (external link entitlement for reader apps exists; quote only what's on the page) | same | 15 Oct 2026 | [Official] |
| 3.1.3(b) Multiplatform: content bought elsewhere can be accessed, "provided those items are also available as in-app purchases within the app" | same | 15 Oct 2026 | [Official] |
| 3.1.3(c) Enterprise: sold directly to organisations for employees or students may skip IAP. "Consumer, single user, or family sales must use in-app purchase" | same | 15 Oct 2026 | [Official] |
| 3.1.3(d) Person-to-person: real-time one-to-one services (tutoring, medical consultations, real estate tours, fitness training) may use other methods. "One-to-few and one-to-many real-time services must use in-app purchase" | same | 15 Oct 2026 | [Official] |
| 3.1.3(e): physical goods or services consumed outside the app "must use purchase methods other than in-app purchase … such as Apple Pay or traditional credit card entry" | same | 15 Oct 2026 | [Official] |
| 3.1.3(f): free stand-alone companions to paid web tools (VoIP, cloud storage, email, web hosting) don't need IAP if there's no purchasing in the app and no calls to action to buy outside | same | 15 Oct 2026 | [Official] |
| 3.1.4: hardware-dependent features may unlock without IAP | same | 15 Oct 2026 | [Official] |
| 3.2.2(iii): unacceptable: "apps that are designed predominantly for the display of ads" and artificial ad impressions or clicks. 3.2.2(x): can't force ratings, reviews or downloads to unlock functionality, but "may otherwise incentivize users to take specific actions within apps (e.g. completing a level, watching an ad)", which is the basis for rewarded ads | same | 15 Oct 2026 | [Official] |
| 5.1.2: "You must receive explicit permission from users via the App Tracking Transparency APIs to track their activity", and apps can't require enabling tracking to get functionality or compensation | same | 15 Oct 2026 | [Official] |
| ATT definition of tracking (linking with other companies' data for targeted ads or measurement, or sharing with data brokers); AdAttributionKit | https://developer.apple.com/app-store/user-privacy-and-data-use/ | (batch 3) | [Official] |

Google Play Payments policy (https://support.google.com/googleplay/android-developer/answer/9858738, checked 15 Oct 2026; no effective date shown):

| Claim | Source | Checked | Label |
|---|---|---|---|
| Play billing is required for paid downloads and for in-app digital features or services: virtual items, subscriptions, app functionality or content (e.g. ad-free version), cloud software and services, except as Sections 3, 8 and 9 allow | Play Payments policy | 15 Oct 2026 | [Official] |
| Section 3: Play billing **must not** be used for physical goods or rentals, physical services (transport, food delivery, gym memberships, live-event tickets), credit-card or utility bill remittance, peer-to-peer payments, online auctions, tax-exempt donations, gambling | same | 15 Oct 2026 | [Official] |
| Section 4: no steering to non-Play payment methods (listings, promotions, webviews, buttons, sign-up flows) except under Sections 3, 8, 9. Section 5: virtual currency only usable in the app where bought. Section 7: loot-box odds disclosed | same | 15 Oct 2026 | [Official] |
| Sections 8 and 9: alternative in-app billing, and leading users outside the app, only in eligible countries and only after enrolling in the programme | same | 15 Oct 2026 | [Official] |
| The Play policy has **no reader-app exception** equivalent to Apple 3.1.3(a) in the fetched text. Don't claim one for Android | same | 15 Oct 2026 | [Official] (absence) — re-check the "Policy timelines/FAQ" page answer/10281818 at writing |
| User choice billing eligibility includes the EEA, UK, Australia, Japan, Brazil, Indonesia, South Africa and others (35+); separate programmes for South Korea, India (APIs from 14 Nov 2023) and the US. Alternative billing *only* (without user choice) is EEA-only | https://support.google.com/googleplay/android-developer/answer/13821247 | 15 Oct 2026 | [Official] |
| Billing choice programme (alternative billing or external web links, alongside Play Billing, own choice screen allowed): UK and EEA from 30 Jun 2026, Australia and Japan from 30 Sep 2026. "There are no changes to the US programs at this time." US developers use the separate alternative-billing and external-content-links programmes. Must report transactions within 24 hours and provide refunds and support | https://support.google.com/googleplay/android-developer/answer/17161464 | 15 Oct 2026 | [Official] |

Fees (re-verified today; these move):

| Claim | Source | Checked | Label |
|---|---|---|---|
| Google (24 Jun 2026): service fee "starts at 10% on your first $1M (USD) in annual earnings" regardless of billing path. 10% on all auto-renewing subscriptions. Billing fee 5% in the US, UK and EEA, only when Play Billing is used | https://developer.android.com/blog/posts/expanded-billing-choice-and-lower-fees-on-google-play | 15 Oct 2026 | [Official] |
| Rollout: 30 Jun 2026 EEA, UK, US; 30 Sep 2026 Australia, Japan (5% billing fee also in AU and JP); **31 Dec 2026 South Korea; 30 Sep 2027 "Rest of World"** (covers India, UAE and Singapore by implication; India not named). New vs existing install matters: for non-recurring transactions above the first $1M, roughly 20% (new installs) vs 25% (existing installs) plus billing fee, with 20% for existing-install external web links. Programme rates are 15% / 20% | https://support.google.com/googleplay/android-developer/answer/16954621 ; https://support.google.com/googleplay/android-developer/answer/112622 | 15 Oct 2026 | [Official]. **The rate tables parse inconsistently. Quote only the blog's 10% / 10% / 5% lines plus the dates, and link the table rather than restating the above-$1M rates** |
| Remaining markets (India, UAE, Singapore until rollout): 15% on the first $1M, 30% above, 15% on auto-renewing subscriptions. India and South Korea alternative billing = standard fee "reduced by 4%" | answer/112622 | 15 Oct 2026 | [Official] |
| Apple Small Business Program 15% (≤US$1M prior-year proceeds, must enrol) | https://developer.apple.com/app-store/small-business-program/ | (batch 1) | [Official] |
| Apple EU (DPLA updated 18 Aug 2026; Attachment 14 effective **1 Oct 2026**): IAP 26%, or 15% for SBP, Mini Apps and Video Partner participants and for auto-renewable subscriptions after year one. Alternative in-app payment processing 20% / 10%. Store services commission on out-of-app offers (link-outs) 15% / 10%, applied to sales within 7 days of the link tap. Core Technology Commission 5% for alternative marketplaces and Web Distribution | https://developer.apple.com/support/apps-in-the-eu/ | 15 Oct 2026 (page fetched; supersedes the batch 1 snippet-only check) | [Official] |
| US link-outs on iOS: Apple charges **zero commission** on US external purchase links since the April 2025 contempt order. The Ninth Circuit (Dec 2025) allowed some cost-based commission, on remand. Justice Kagan denied Apple's stay request (reported 13–14 Aug 2026), so the district court rate proceedings continue. Apple proposed 15% / 10% / 5% (SBP). The Supreme Court is reviewing the contempt finding (argument expected in the October 2026 term). No final rate has been set | https://macdailynews.com/2026/08/14/u-s-supreme-court-clears-path-for-app-store-commission-showdown-as-apple-must-defend-its-rates-in-lower-court/amp/ ; batch 1 sources | 15 Oct 2026 | [Industry]. Write "currently no commission; under litigation, check before launch". Re-verify at publication. Nothing newer than August 2026 was found |
| Japan: MSCA changes effective 17 Dec 2025 | https://www.apple.com/newsroom/2025/12/apple-announces-changes-to-ios-in-japan/ | (batch 1) | [Official]; rates unverified |

Ads:

| Claim | Source | Checked | Label |
|---|---|---|---|
| AdMob: publishers "may not click their own ads or use any means to inflate impressions and/or clicks artificially". "Testing your own ads by clicking on them is not allowed" (use test ads). Google ads may not be placed on apps that "promise payment or incentives to users who click on or view ads" (rewarded ad units are governed separately; see answer/7313578) | https://support.google.com/admob/answer/2753860 | 15 Oct 2026 | [Official] |
| AdMob/Google: "a certified CMP integrated with the TCF is required when serving personalized ads to users in the EEA and UK" (from 16 Jan 2024) and Switzerland (from 31 Jul 2024). Google's UMP SDK is one such CMP | https://support.google.com/admob/answer/13554116 ; https://support.google.com/admob/answer/14189727 | 15 Oct 2026 | [Official] |
| Google Play Ads policy: no ads "displayed to users in unexpected ways"; full-screen interstitials that appear unexpectedly or are "not closeable after 15 seconds" are not allowed (opt-in rewarded ads excluded); can't require clicking an ad to use the app; no lockscreen monetisation unless that's the app's purpose. Families apps follow separate ads requirements | https://support.google.com/googleplay/android-developer/answer/9857753 | 15 Oct 2026 | [Official] |
| On iOS, personalised ads that use IDFA or cross-app data need ATT consent (5.1.2). On the EEA and UK side, the CMP prompt is separate from ATT, so plan for two prompts and their order | Apple 5.1.2 + AdMob CMP page | 15 Oct 2026 | [Official] for each rule; [Inference] for the "two prompts" planning note |

Revenue benchmarks: none found from a primary source with a stated method. **Don't include ARPU, eCPM, conversion-to-paid or MRR figures.** The vendor and anecdote figures in the SERP, such as "$0.23 per DAU", are unsuitable.

Regional notes where rules genuinely differ:
- **US:** iOS link-outs are allowed with no commission at present, in litigation. Play keeps its US-specific programmes ("no changes to the US programs at this time").
- **EU/EEA:** Apple's new Attachment 14 terms. Play billing choice since 30 Jun 2026.
- **UK:** Play billing choice and new fees since 30 Jun 2026. Apple: no UK-specific terms verified, so don't claim any.
- **Australia:** Play billing choice and new fees since 30 Sep 2026.
- **India:** Play alternative billing (4% reduction). New Play fees not before the "Rest of World" date of 30 Sep 2027. The CCI and Supreme Court matter is unverified (batch 1), so don't state an outcome. Physical goods and services use gateways (UPI, cards); see topic 68.
- **UAE and Singapore:** legacy Play rates. No alternative billing programme listed.

---

## Topic 66: App store optimisation checklist before launch

**1. Founder question and business pain.** "We're about to submit. What do we put in the listing so people find the app and install it?" Founders treat the listing as paperwork at the last minute. They waste the 30-character title, leave the iOS keyword field half-empty or repeat words, upload settings-screen screenshots, ship in one language, and ask for ratings on first launch. Some of this costs discoverability, and some of it, such as rank claims or emoji in a Play title, risks policy action.

**2. Intent and buyer stage.** Informational and practical. Readers are late pre-launch, building the listing, and come back after launch to iterate.

**3. Queries.**
- Primary query: "app store optimization checklist" or "ASO checklist before launch".
- Supporting queries:
  - "app store subtitle character limit"
  - "app store keywords 100 characters"
  - "google play short description limit"
  - "app preview video length"
  - "custom product pages"
  - "google play custom store listing keywords"
  - "product page optimization"
  - "store listing experiments"
  - "when to ask for app rating"
  - "SKStoreReviewController limit"
  - "in-app review API quota"

**4. Evidence of demand.** Moderate. Ten or more vendor and agency checklists rank, many dated 2026, which shows competitive commercial interest:
- https://passion.io/blog/pre-launch-aso-checklist-optimize-before-you-publish (updated 12 Mar 2026)
- https://appdrift.co/blog/aso-checklist-2026
- https://trysonar.app/blog/aso-launch-checklist
- https://appsprint.app/blog/aso-checklist-before-launch
- https://netpeak.net/blog/successful-app-aso-launch-before-and-after-a-step-by-step-guide/

HN has only old (2011–2017) ASO stories with almost no comments, for example https://news.ycombinator.com/item?id=11797719, so community evidence is weak. Reddit (r/iOSProgramming, r/androiddev, r/AppStoreOptimization) was not checked.

**5. Existing ZSpace coverage.** `/blogs/app-store-optimization` is 552 words in `blog-data-au-ops-mobile.ts`, dated 10 Oct 2026. It has two sources (Apple product page optimisation and custom product pages).

What it does well:
- correct high-level framing (listing as funnel, measure to retention);
- Apple product page optimisation at 3 treatments and 90 days;
- custom product pages at 70, with keyword assignment;
- review-incentive warning.

What's missing:
- no character limits at all (name, subtitle, keywords, promo text, Play title, short and full description);
- no keyword-field rules (commas, no spaces, no plurals or duplicates, category names, the word "app");
- no Play metadata policy (no emoji, rank claims or promo text in the title or icon);
- no screenshot or preview video specs relevant to conversion (counts, 15–30 s, first 30 s autoplays on Play);
- Play custom store listings are mentioned without the 50 limit or the targeting options. Search-keyword targeting in particular is a new discoverability lever;
- Play store listing experiments are mentioned without limits;
- ratings prompts have no API limits: Apple 3 in 365 days, Play quota, "no button" rules;
- not framed as a pre-launch checklist.

The page is Australia-framed (FAQ "Should we create an Australian listing?", AU CTA copy). Keep the AU FAQ but generalise localisation to all ZSpace markets.

Boundary: `mobile-app-launch-checklist` (Batch 2) owns submission assets (screenshot sizes, required fields, review notes, privacy labels). This update should cite those only by link, and keep to discoverability and conversion.

**6. SERP weaknesses.**
- passion.io: has the limits, but makes an unsourced "65% of downloads follow search" claim attributed to Apple.
- trysonar.app: "70% of apps get under 1,000 downloads" from "industry estimates", unsourced.
- appdrift.co: a 30-step list with no official citations, and it mixes submission and ASO.
- netpeak.net: agency process content, with thin platform-rule detail.
- Common gaps across the set:
  - no one notes that Apple's two official pages state the keyword limit differently (characters vs bytes);
  - few cover Play custom store listings with search-keyword targeting, or the 50 cap;
  - few quote the review-prompt rules (no button, no pre-question on Play);
  - none cover Play's title metadata policy in detail.

**7. Qualified-buyer potential.** Medium-low on its own, since ZSpace doesn't sell ASO retainers, as the page already says. It is valuable as a support page in the mobile cluster: launch checklist, analytics, retention. It catches founders right at launch who may need build or design help (screenshots and onboarding are UI/UX work).

**8. Format and original asset.**
- **(a) "Pre-launch ASO checklist" table.** One row per field: field, platform, verified limit, what it affects (search, conversion, or both), and the rule or pitfall, each with a source link. This is the core asset.
- **(b) A short "keyword field worked example".** Hypothetical. Show how to fill 100 characters without repeating words already in the title or subtitle. Label it hypothetical.
- **(c) "Ratings prompt rules side by side"** (Apple vs Play).
- **(d) A timeline strip:**
  - T–4 weeks: keyword research and localisation plan;
  - T–2 weeks: screenshots and preview;
  - at launch: default page;
  - after enough traffic: product page optimisation, store listing experiments and custom pages.

Do not repeat the submission-asset tables in `mobile-app-launch-checklist`.

**9. Service page and CTA.** `/services/mobile-app-development` is primary. `/services/ui-ux-design` is secondary, for screenshots and first-run experience. Keep the existing honest line "We do not sell ASO services". The CTA moves from "talk it through" to "Getting the app and its first-run experience launch-ready".

**10. Recommendation: UPDATE `app-store-optimization` (substantial, to about 1,500–1,900 words). I agree with the preliminary call.**
- Retitle along the lines of "App Store Optimisation Checklist Before Launch: Metadata Limits, Screenshots, Experiments and Ratings". Keep the URL.
- Keep the existing measurement section and hypothetical example.
- Add a "Sources" section, as Batch 2 pages have.
- Remove "AU-only" framing from the H1 answer. Localisation should cover IN (English plus Hindi or regional), UAE (Arabic, RTL screenshots), AU, UK and SG. These are framing notes [Inference], not claims.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Apple app name: at least 2 and no more than 30 characters, and localised. Subtitle: "can't be longer than 30 characters" | https://developer.apple.com/help/app-store-connect/reference/app-information/app-information | 15 Oct 2026 | [Official] |
| Apple keywords: "limited to 100 characters total, with terms separated by commas and no spaces" (spaces allowed within phrases). Avoid plurals of words already included, category names or the word "app", duplicate words, and special characters. Promotional text "doesn't affect your app's search ranking" | https://developer.apple.com/app-store/product-page/ | 15 Oct 2026 | [Official] |
| App Store Connect states the keyword limit as **100 bytes** | https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information | (batch 2) | [Official]. **Discrepancy:** write "100 characters (App Store Connect counts bytes, so non-Latin scripts such as Hindi or Arabic fit fewer characters)". The second half is [Inference] from bytes vs characters |
| Apple promotional text: up to 170 characters, updatable anytime without a new version. Description: the first sentence matters most; don't stuff keywords or put specific prices in the description | https://developer.apple.com/app-store/product-page/ | 15 Oct 2026 | [Official] |
| Apple: up to 10 screenshots; up to 3 app previews per device size and language; preview length 15–30 seconds; formats .mov/.m4v/.mp4 (H.264) or ProRes 422 HQ; poster frame selectable (default 5 s) | https://developer.apple.com/app-store/product-page/ ; https://developer.apple.com/help/app-store-connect/reference/app-preview-specifications | 15 Oct 2026 | [Official] |
| Apple localisation: localise description, keywords, previews and screenshots per market; the name can be translated and keywords tailored | https://developer.apple.com/app-store/product-page/ | 15 Oct 2026 | [Official] |
| Apple custom product pages: up to 70; vary screenshots, promotional text and app previews; assign keywords so the page appears in search for them (each keyword combination unique to one page); deep links per page (iOS 18+); metadata needs review but can be submitted independently of an app update | https://developer.apple.com/app-store/custom-product-pages/ | 15 Oct 2026 | [Official] |
| Apple product page optimisation: up to 3 treatments (icon, screenshots, previews), one test at a time, up to 90 days, localisable; new metadata needs App Review; alternate icons must be in the binary | https://developer.apple.com/app-store/product-page-optimization/ | 15 Oct 2026 | [Official] |
| Play: app name 30, short description 80, full description 4,000 characters. "Character limits apply to both full-width and half-width characters." Repetitive or irrelevant keywords can lead to suspension | https://support.google.com/googleplay/android-developer/answer/9859152 | 15 Oct 2026 | [Official] (closes the batch 2 gap on name and full description) |
| Play metadata policy: no emojis, emoticons or repeated special characters in title, icon or developer name; avoid ALL CAPS unless brand; no store performance or ranking claims ("App of the year", "#1", "Best of Play 20XX", "Popular"); no price or promotional info ("10% off", "free for limited time only"); no implying Play programmes ("Editor's choice", "New"); no unattributed testimonials in the description | https://support.google.com/googleplay/android-developer/answer/9898842 | 15 Oct 2026 | [Official] |
| Play screenshots: at least 2 to publish, up to 8 per device type, 320–3840 px, aspect ≤2:1. Recommended ≥4 at ≥1080 px (9:16 or 16:9). Preview video: YouTube URL, public or unlisted, ads off, not age-restricted, embeddable; "only the first 30 seconds autoplays" | https://support.google.com/googleplay/android-developer/answer/9866151 | 15 Oct 2026 | [Official] |
| Play custom store listings: up to 50. Target by country or region, pre-registration, ads traffic or a unique URL (`&listing=` parameter) or Google Ads campaign, **search keywords**, lapsed (no opens in 28 days) or churned users, buyer segments, custom audiences. You can customise name, icon, descriptions and graphics; contact details, privacy policy and category are shared | https://support.google.com/googleplay/android-developer/answer/9867158 | 15 Oct 2026 | [Official] |
| Play store listing experiments: one default-graphics experiment **or** up to five localised experiments at a time; up to 2 variants vs current; default = icon, feature graphic, screenshots; localised can include descriptions; metrics = install, open and pre-registration clicks; auto-stop after 6 months | https://support.google.com/googleplay/android-developer/answer/6227309 | 15 Oct 2026 | [Official] (batch 1 re-verified; adds "open clicks") |
| Apple ratings prompt: "the system displays the review prompt to a user a maximum of three times within a 365-day period". "Avoid requesting a review as the result of a user action"; don't ask at launch. For a user-initiated review, deep-link to `?action=write-review`. `SKStoreReviewController` is marked deprecated in favour of `RequestReviewAction` (SwiftUI `requestReview`) | https://developer.apple.com/documentation/storekit/requesting-app-store-reviews (read via the tutorials/data JSON) | 15 Oct 2026 | [Official]. The brief names SKStoreReviewController, so the article should say it is deprecated |
| Apple HIG: ask "only after people have demonstrated engagement", not at first launch or during onboarding. You can reset the summary rating on a new version, but that "tends to result in having fewer ratings overall" | https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews | 15 Oct 2026 | [Official] |
| Play In-App Review API: time-bound quota, so calling more than once in a short period (e.g. under a month) may not show a dialog. The quota value is undisclosed and can change. Don't trigger it from a button (link to the Play Store instead). Don't modify or overlay the card. Don't ask questions before or during it ("Do you like the app?") | https://developer.android.com/guide/playcore/in-app-review | 15 Oct 2026 | [Official] |
| Apple: manipulating reviews with paid, incentivised, filtered or fake feedback can lead to expulsion; can't force ratings to unlock functionality (3.2.2(x)) | https://developer.apple.com/app-store/review/guidelines/ | 15 Oct 2026 | [Official] |
| "X% of downloads come from search" and similar ASO statistics | none from a primary source with method | 15 Oct 2026 | **Don't include** |

Regional notes:
- Play's character limits apply equally to full- and half-width characters.
- Apple's byte-based keyword count makes Hindi and Arabic metadata tighter [Inference].
- UAE Arabic listings need RTL-aware screenshots. That is a design note, [Inference].
- No market-specific store rules differ for IN, UAE, AU, UK or SG in this scope.

---

## Topic 67: Should your mobile app work offline? A product planning guide

**1. Founder question and business pain.** "Does our app need to work offline, and how much will that add?" Founders hear "offline-first" from developers as a yes-or-no architecture choice, but it is really a per-job product decision. They get it wrong in one of two ways:
- Over-scoping: full offline sync for an app whose jobs need live data (payments, stock, bookings). This means months of sync and conflict work.
- Under-scoping: field staff lose a form at a site with no signal, and the app gets abandoned.

The pain is cost uncertainty plus the risk of data loss or double-booking.

**2. Intent and buyer stage.** Commercial investigation and planning, at the scoping or discovery stage. It is often asked by operations-heavy businesses: field service, logistics, inspections, healthcare visits, retail stock-taking, education in low-connectivity regions.

**3. Queries.**
- Primary query: "should my app work offline", or "offline-first app" as the established head term the existing URL targets.
- Supporting queries:
  - "offline mode mobile app cost"
  - "offline-first vs online-first"
  - "how does offline sync work in mobile apps"
  - "conflict resolution offline app"
  - "Realm Device Sync alternative"
  - "Firestore offline"
  - "SQLite vs Room vs SwiftData"
  - "app works without internet India"

**4. Evidence of demand.** Moderate and technical.
- HN:
  - "Ask HN: Best architecture for offline-first, cloud-synced mobile app?" https://news.ycombinator.com/item?id=18986066 (7 comments, 2019)
  - "Ask HN: How do you design offline-first flows in large React Native apps?" https://news.ycombinator.com/item?id=46360277 (3 comments, Dec 2025)
  - "Data-Sync Resources for Offline-First Mobile Apps" https://news.ycombinator.com/item?id=33278827
- The MongoDB community forum thread "Device Sync and Edge Server are Deprecated" has three or more pages of developer concern. That URL is known from search; it returned 403 to fetch.
- RxDB publishes a "MongoDB Realm alternative" page, showing migration demand: https://rxdb.info/articles/alternatives/mongodb-realm-alternative.html.

Founder-language (product, not engineering) demand is weak in the sources I could reach. Reddit was not checked.

**5. Existing ZSpace coverage.** `/blogs/offline-first-mobile-app-development` is 859 words in `blog-data-mobile-4.ts`, dated 25 Sep 2026, with **0 external sources**.

It is technically sound and complete on mechanics:
- offline-first vs offline-capable table;
- architecture;
- local DBs (SQLite, Room, Core Data / SwiftData);
- caching;
- sync with WorkManager or background tasks;
- queue and retries with idempotency;
- conflict strategies table;
- optimistic updates;
- connectivity detection;
- local security;
- offline UX;
- testing;
- use cases.

Batch 9 (#165) rejected a separate offline-sync page for this reason.

What's missing for the planning intent:
- **No decision framework.** "When Offline Functionality Matters" is one paragraph.
- No per-job analysis (which user jobs need offline read, offline write, or neither).
- No data-freshness tolerance or conflict-risk scoring.
- No cost-driver breakdown in effort terms (no prices).
- No Android write-strategy vocabulary (online-only, queued, lazy) or pull vs push sync.
- No mention of managed sync options and their lifecycle risk. Atlas Device Sync was deprecated with end of life 30 Sep 2025. This is a real vendor-risk example.
- No iOS network-condition signals (Low Data Mode, expensive paths).
- No sources.

The architecture page (`mobile-app-architecture`) covers caching as a baseline, so link it rather than repeat it.

**6. SERP weaknesses.**
- https://www.netguru.com/blog/offline-first-mobile is agency content, generic, without a decision method.
- https://agilie.com/blog/offline-first-apps-what-you-need-to-know-about-them is an agency explainer focused on benefits.
- https://blog.flipr.ai/offline-first-mobile-app-development-why-it-matters-more-than-ever is advocacy, with "it matters more than ever" framing.
- https://www.promaticsindia.com/blog/the-nuts-and-bolts-of-offline-mobile-apps is an Indian agency page with no sources.
- https://alistapart.com/article/offline-first/ is the classic web-focused piece, and dated.

Gaps across the set:
- Few are per-job: most treat offline as app-wide.
- None ties the decision to Android's official write strategies.
- Several still recommend Realm Sync or Atlas Device Sync without noting its end of life [Inference from typical SERP content; spot-check at writing].

**7. Qualified-buyer potential.** High. Readers who ask this are scoping operational apps where offline is a major cost driver: field service, logistics, healthcare, construction, agriculture. These fit `/services/mobile-app-development` and the industries the post already lists. Offline requirements also come up in India and in remote parts of Australia. That is a market observation, [Inference]; don't cite coverage stats without a source.

**8. Format and original asset.** Add a planning layer of about 700–1,000 words on top of the existing mechanics.
- **(a) "Job-by-job offline worksheet".** One row per user job. Columns:
  - job;
  - where it happens (connectivity reality);
  - offline need: none / read / read+write;
  - freshness tolerance: seconds / minutes / hours / days;
  - conflict risk: single-owner record / shared record / scarce resource (stock, slot, money);
  - write strategy, using Android's online-only / queued / lazy vocabulary;
  - verdict: online-only with good errors / cached read / full offline-first.
- **(b) "Never offline-commit" rule.** Scarce-resource and money jobs (payment capture, booking a slot, decrementing stock) should be online-only or reconcile server-side with a clear pending state. This maps to Android's "online-only" strategy example ("a bank transfer").
- **(c) Cost drivers list (effort, not prices):**
  - number of offline-write entities;
  - shared-record conflicts;
  - attachments and media;
  - data volume per user;
  - how long users stay offline (pull vs push sync);
  - auth and token expiry offline;
  - schema migrations on devices;
  - testing matrix;
  - managed-sync vendor dependency.
- **(d) Vendor-risk box.** MongoDB deprecated Atlas Device SDKs and Device Sync in September 2024, with end of life and removal on 30 Sep 2025. The on-device Realm database continues as open source, in community branches without Sync. Lesson: keep a sync layer you can replace, or own the protocol.

**9. Service page and CTA.** `/services/mobile-app-development`. CTA: "Scoping an app for field teams? We'll map which jobs need offline and what that adds to the build before you commit." Link `mobile-app-architecture`, `mobile-app-backend-development`, `mobile-app-security`, `mobile-app-development-cost` and `mobile-app-performance-optimization` (Batch 8 #146 links back here).

**10. Recommendation: UPDATE `offline-first-mobile-app-development` (substantial). I agree with the preliminary call.**
- The planning question and the build guide are the same topic. Search results mix them, and Batch 9 already ruled out another offline URL.
- Retitle to something like "Should Your App Work Offline? Offline-First Planning and Development Guide". Keep the URL.
- Put the decision framework near the top, before "The Architecture".
- Add a Sources section.
- Fix one nuance in the current FAQ "What databases are used…": add Firestore's built-in offline persistence and note Realm's status.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Android: "An offline-first app is an app that is able to perform all, or a critical subset of its core functionality without access to the internet." The local data source is "the canonical source of truth" and UI and domain layers "must never communicate directly with the network layer" | https://developer.android.com/topic/architecture/data-layer/offline-first | 15 Oct 2026 | [Official] |
| Android write strategies: **online-only** (write to network first; suited to time-sensitive ops such as "a bank transfer"), **queued** (queue and drain with exponential backoff; for non-critical data such as analytics), and **lazy** (write locally first, then queue; "the correct choice when the data is critical to the app") | same | 15 Oct 2026 | [Official] |
| Android sync: **pull-based** "works best when the app expects brief to intermediate periods of no network connectivity". **Push-based** keeps a local replica and "can work without it for extended periods". Conflicts: "For mobile apps, a common approach is 'last write wins'" using timestamps. The queue can be a Room table drained with WorkManager | same | 15 Oct 2026 | [Official] |
| Room "provides an abstraction layer over SQLite". The most common use case is to cache data so users can browse offline. For multi-device sync or real-time collaboration, pair Room with WorkManager and a custom backend, or use managed options such as Cloud Firestore or Firebase SQL Connect | https://developer.android.com/training/data-storage/room | 15 Oct 2026 | [Official] |
| SQLite: "thrives at the edge of the network … providing fast and reliable data services to applications that would otherwise have dodgy connectivity". Used as a cache of enterprise data, so the app "can continue operating during network outages". "SQLite competes with fopen()" | https://www.sqlite.org/whentouse.html | 15 Oct 2026 | [Official] (project docs) |
| SwiftData (iOS 17+) combines "Core Data's proven persistence technology" with Swift concurrency. It can "optionally" sync across a person's devices via iCloud. An app fetching from a web service "might use SwiftData to implement a lightweight caching mechanism and provide limited offline functionality" | https://developer.apple.com/documentation/swiftdata | 15 Oct 2026 | [Official] |
| Core Data / NSPersistentCloudKitContainer for iCloud sync | https://developer.apple.com/documentation/coredata | not fetched today | [Official], **verify at writing**. Note that iCloud sync is per Apple ID (a person's devices), not a multi-user business backend [Inference] |
| Apple network conditions: `NWPathMonitor` "monitor[s] and react[s] to network changes". `NWPath.isExpensive` (cellular or Personal Hotspot) and `isConstrained` ("Low Data Mode") let apps defer large syncs | https://developer.apple.com/documentation/network/nwpathmonitor ; https://developer.apple.com/documentation/network/nwpath | 15 Oct 2026 | [Official] |
| Apple guidance that reachability shouldn't gate requests (try the request; use `waitsForConnectivity`) | not verified today | — | **Unverified.** Fetch the URLSessionConfiguration.waitsForConnectivity doc before citing. The existing article's "treat request success as the real signal" can stay as [Inference] |
| Firestore: offline persistence "enabled by default" on Android and Apple platforms, disabled by default on web; default cache threshold 100 MB; offline writes sync on reconnect, with last write winning for the same document | https://firebase.google.com/docs/firestore/manage-data/enable-offline | 15 Oct 2026 | [Vendor] (Google product docs). "Transactions fail offline" was **not** confirmed on the fetched portion |
| **MongoDB Atlas Device SDKs / Device Sync:** "As of September 2024, Atlas Device SDKs are deprecated. Atlas Device SDKs will reach end-of-life and be removed on September 30, 2025." "The on-device database will continue to exist as an open source project." Apps using Sync "need to move to an alternative solution or remove Sync". App Services Authentication, Wire Protocol and Data Access Permissions are also deprecated. Community branches of the SDKs remove Sync code | https://www.mongodb.com/docs/atlas/device-sdks/deprecation/ | 15 Oct 2026 | [Official] (vendor's own notice). **Confirmed** |
| Extensions past 30 Sep 2025 for individual customers | MongoDB community forum reply (search snippet only) | 15 Oct 2026 | **Unverified.** Don't state |
| Industry or coverage statistics (e.g. "% of users offline", rural connectivity) | none sourced | — | **Don't include** without a primary source (e.g. TRAI, ACMA) fetched at writing |

Regional notes: none needed on rules. Connectivity examples (rural India, remote Australia, basements and lifts in UAE towers) are illustrative only, [Inference].

---

## Topic 68: How to choose a payment gateway for a mobile app

**1. Founder question and business pain.** "Which payment gateway should our app use, and can we even use one?" Founders get stuck on four things:
- whether store rules force IAP (topic 65);
- which provider supports their market's methods (UPI in India, cards and wallets everywhere) and has decent iOS, Android, React Native and Flutter SDKs;
- onboarding paperwork and licensing (RBI-authorised PA, CBUAE-licensed, MAS-licensed);
- recurring-payment rules (RBI e-mandate, SCA).

The pain is picking a provider that can't onboard them, can't settle in their currency, or forces a rebuild when they expand to a second market.

**2. Intent and buyer stage.** Commercial investigation, at the build-planning stage. The buyer is close to scoping integration work.

**3. Queries.**
- Primary query: "how to choose a payment gateway for a mobile app".
- Supporting queries:
  - "best payment gateway for app India"
  - "Stripe vs Razorpay for app"
  - "payment gateway SDK Flutter / React Native"
  - "can I use Stripe for in-app purchases"
  - "payment gateway UAE app"
  - "recurring payments UPI autopay app"
  - "SCA mobile app payments"
  - "PCI compliance mobile app SDK"

**4. Evidence of demand.** Moderate on the SERP, weak in community sources.
- The SERP is full of "choose and integrate" agency and vendor pages:
  - https://stormotion.io/blog/how-to-choose-and-integrate-a-mobile-app-payment-gateway
  - https://agilie.com/blog/how-to-choose-and-integrate-a-payment-gateway-in-mobile-apps
  - https://www.vervelogic.com/blog/how-to-choose-the-right-payment-gateway-for-your-mobile-application/
  - PayU India's step-by-step guide
- HN Algolia returns nothing relevant for India gateways (one 2018 Razorpay funding story).
- Reddit was not checked.

The combined "choose and integrate" framing in the titles matters for the verdict.

**5. Existing ZSpace coverage.**
- `mobile-app-payments` (853 words, `blog-data-mobile-5.ts`, 0 sources) covers payment UX and architecture: kinds of payments, platform rules, SDK and wallets, IAP, transaction states, webhooks, failures, fraud, PCI and testing. It has **no "how to choose a gateway" section**. Its "Platform Payment Rules" section is unsourced and generic, with no clause numbers and no US, EU or Play programmes. There are no market notes.
- `ecommerce-payment-gateway-integration` has a "Choosing Providers" criteria table and the FAQ "How do I choose a payment gateway for ecommerce?".
- `international-ecommerce-payments` has "Choosing Payment Providers" plus "Strong Authentication" (0 sources).
- `payment-gateway-integration-australia` has "Choosing a provider: questions to ask" with 6 official AU sources (RBA, NPP PayTo, ASIC, PCI SSC).
- `payment-gateway-integration` is the web server-side guide.

So generic selection criteria already exist in three places. What's missing everywhere is the mobile-specific layer:
- IAP vs gateway decision;
- native SDK and framework support;
- Apple Pay and Google Pay setup;
- UPI intent flows on Android vs iOS (MOB-23);
- India RBI PA and e-mandate rules;
- UAE CBUAE licensing;
- Singapore MAS licensing.

**6. SERP weaknesses.**
- stormotion.io: agency, broad, few regional rules.
- agilie.com: agency, generic criteria.
- vervelogic.com: listicle, no sources.
- https://www.tvisha.com/blog/how-to-choose-the-perfect-payment-gateway-for-ecommerce-mobile-app: Indian agency, no RBI references.
- payu.in: vendor guide with bias.

Common gaps:
- None cites the RBI PA Directions 2025 or the E-mandate Framework 2026.
- None explains that IAP rules decide whether a gateway is even allowed.
- None covers CBUAE or MAS licence checks.
- Several invent "typical fees".

**7. Qualified-buyer potential.** High. This is integration-ready intent from founders of commerce, booking, services, marketplace and B2C subscription apps, especially in India and the UAE. It maps directly to `/services/mobile-app-development`, plus `/services/website-development` for the web checkout used in link-out flows.

**8. Format and original asset.**
- **(a) "Gateway selection scorecard" for apps.** Criteria rows:
  1. Is a gateway allowed for what you sell (link topic 65 or MOB-13)?
  2. Markets and onboarding eligibility: entity country, regulator licence.
  3. Payment methods by market.
  4. Native SDKs: iOS, Android, React Native, Flutter. Prebuilt sheet vs custom UI.
  5. Apple Pay and Google Pay support.
  6. Recurring: cards on file, UPI AutoPay / e-mandate, SCA merchant-initiated handling.
  7. Settlement currency and payout account country.
  8. Fee structure **type**: per-transaction, international surcharge, FX, chargeback, payout. Ask for the schedule; no invented rates.
  9. PCI scope of the integration pattern.
  10. 3DS/SCA handling inside the SDK.
  11. Webhooks, reconciliation and reporting.
  12. Test mode and sandbox quality.
- **(b) "Market notes" box.** India, UAE, UK/EU, Australia, Singapore. Verified facts only, below.
- **(c) A "Questions to ask a provider" checklist.** It can reuse and extend the AU page's list.

Name providers only as examples, with official docs: Stripe availability, Razorpay methods and international pages, and Adyen's CBUAE licence disclosure as an example of how to check a licence.

**9. Service page and CTA.** `/services/mobile-app-development`. CTA: "Choosing a payment stack for your app? We'll check what store rules allow, shortlist providers for your markets and build the integration with server-side verification."

**10. Recommendation: UPDATE `mobile-app-payments` (substantial, to about 1,800–2,200 words). Of the two preliminary options I choose UPDATE and do not CREATE `mobile-app-payment-gateway-selection`.** Reasons:
- **Same searcher, same moment.** The ranking pages combine "choose and integrate" in one URL (stormotion, agilie, PayU). That suggests Google treats selection and integration for mobile as one intent, which is what `mobile-app-payments` already covers.
- **Cannibalisation.** Three existing pages already carry "choosing a provider" sections. A fourth, standalone selection page would compete with `ecommerce-payment-gateway-integration` for "how to choose a payment gateway" and add little beyond the mobile-specific layer, which fits in 600–900 words.
- **Boundaries stay clean.** MOB-13 takes IAP vs external fees in depth, MOB-23 takes UPI implementation, and topic 65 takes model choice. A separate gateway-selection page would be squeezed between all of them.
- **The existing page needs sourcing anyway.** It has 0 sources, and its "Platform Payment Rules" section must be upgraded with 3.1.x and Play section references. Adding the selection framework there fixes two weaknesses at once.

Changes:
- Retitle to something like "Mobile App Payments: Choosing a Gateway and Designing a Secure Payment Flow". Keep the URL.
- Insert "Can you use a gateway at all?" right after the quick answer, then "How to choose a payment gateway for your app" (scorecard), then "Market notes", before "Mobile Payment Architecture".
- Add a Sources section.

Re-assess for CREATE only if Search Console later shows `mobile-app-payments` getting selection impressions but low CTR. That is a monitoring suggestion.

**11. Facts an article would need**

Platform rules: reuse topic 65 rows (Apple 3.1.1, 3.1.3(d)(e)(f), Play Payments Sections 3, 4, 8, 9).

| Claim | Source | Checked | Label |
|---|---|---|---|
| Apple 3.1.3(e): physical goods and services consumed outside the app "must use purchase methods other than in-app purchase … such as Apple Pay or traditional credit card entry" | https://developer.apple.com/app-store/review/guidelines/ | 15 Oct 2026 | [Official] |
| Play Payments Section 3: Play billing must not be used for physical goods and services, bill remittance, P2P payments etc. | https://support.google.com/googleplay/android-developer/answer/9858738 | 15 Oct 2026 | [Official] |
| Stripe: businesses can sign up in Australia, UAE, UK and Singapore. India is labelled "India Preview", and its link goes to the sales contact page | https://stripe.com/global | 15 Oct 2026 | [Vendor] |
| Stripe iOS: prebuilt `PaymentSheet`. "For security reasons, your app can't create these objects" (PaymentIntent etc.), so a server endpoint creates them and returns a client secret. Apple Pay can be added to PaymentSheet with a merchant ID and capability. Webhooks such as `payment_intent.succeeded` / `processing` | https://docs.stripe.com/payments/accept-a-payment?payment-ui=mobile&platform=ios | 15 Oct 2026 | [Vendor] |
| Stripe security guide: businesses accepting payments "must do so in a PCI-compliant manner, and annually attest". Handling raw card data may mean "more than 300 security controls". Low-risk integrations send data directly to Stripe "without it passing through your servers, reducing your PCI obligations". Card brand, last 4 and expiry are safe to store | https://docs.stripe.com/security/guide | 15 Oct 2026 | [Vendor] |
| PCI DSS applies to anyone who stores, processes or transmits cardholder data | https://www.pcisecuritystandards.org/ | 15 Oct 2026 (via Stripe guide wording; PCI SSC FAQ page didn't render) | [Official] for the standard's existence; scope wording [Vendor]. Don't name an SAQ type unless you fetch the PCI SSC SAQ guidance at writing |
| Razorpay Checkout methods: cards, UPI (e.g. Google Pay, BHIM, PhonePe), netbanking, wallets and EMI by default. Pay Later, cardless EMI, COD, bank transfer and **Emandate** need approval (and integration for some). Available in India, Singapore and US per page | https://razorpay.com/docs/payments/payment-methods/ | 15 Oct 2026 | [Vendor] |
| Razorpay international: "more than 160+ foreign currencies". Indian businesses settle in INR. Activation needs extra documents (PAN, address proof, signatory, video KYC). A "valid website" is required. Overseas businesses request it on demand | https://razorpay.com/docs/payments/international-payments/ | 15 Oct 2026 | [Vendor] |
| Razorpay Android Standard SDK: from v1.6.40 it auto-updates; TLS 1.1/1.2 required | https://razorpay.com/docs/payments/payment-gateway/android-integration/ | 15 Oct 2026 | [Vendor] (minor; optional) |

India:

| Claim | Source | Checked | Label |
|---|---|---|---|
| RBI Master Direction on Regulation of Payment Aggregators, 15 Sep 2025 (press release title "Reserve Bank of India (Regulation of Payment Aggregators) Directions, 2025"), "effective immediately" unless stated otherwise. Consolidates the 2020/2021 PA-PG guidelines and the 2023 cross-border directions. Three categories: **PA-Physical, PA-Cross Border, PA-Online**. "A non-bank entity shall seek authorisation for operating as a PA"; banks don't need authorisation. Non-bank PAs keep merchant funds in an escrow account with a scheduled commercial bank. Simplified merchant KYC where annual turnover ≤ ₹40 lakh (or export turnover ≤ ₹5 lakh). Annex: "The customer card credentials shall not be stored within the database or the server accessed by the merchant" | https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=12896 ; press release https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=61218 | 15 Oct 2026 | [Official] |
| Non-bank PA application and wind-down deadlines (31 Dec 2025 / 28 Feb 2026), net worth ₹15 cr → ₹25 cr, cross-border cap ₹25 lakh per transaction | Secondary: Outlook Business, AZB & Partners, IndiaCorpLaw | 15 Oct 2026 | [Industry]. **Not verified in the primary text fetched.** For founders, write only "check that your provider is an RBI-authorised PA (or a bank)" |
| RBI "Digital Payments – E-mandate Framework, 2026" (21 Apr 2026): applies to recurring transactions "using cards / PPI / UPI". Mandate registered only after AFA. Recurring transactions up to **₹15,000 per transaction** without AFA; **₹1,00,000** for insurance premiums, mutual fund subscriptions and credit-card bill payments. Pre-transaction notification "at least 24 hours prior to the actual charge / debit". Customer can modify or withdraw anytime. "No charges shall be levied to the customer" for the facility | https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13374 | 15 Oct 2026 | [Official] |
| UPI AutoPay product details (frequencies, PIN-less limits) | NPCI page didn't render | — | Rely on the RBI framework above (covers UPI). UPI implementation detail goes to MOB-23 |
| Digital goods in Indian apps still go through store billing or Play alternative billing (4% reduction). A gateway alone is not permitted for digital goods | Topic 65 rows | 15 Oct 2026 | [Official] |

UAE:

| Claim | Source | Checked | Label |
|---|---|---|---|
| The CBUAE Retail Payment Services and Card Schemes (RPSCS) Regulation (2021) licenses retail payment services, including merchant acquiring and payment aggregation. Licence Categories I–IV (I and II cover acquiring and aggregation plus payment tokens or cross-border transfers respectively; IV is payment initiation and account information only) | https://rulebook.centralbank.ae/node/1589 (403 to fetcher); secondary: https://www.pinsentmasons.com/out-law/analysis/uae-introduces-licensing-regime-for-payment-service-providers | 15 Oct 2026 | [Industry] until the CBUAE Rulebook is read at writing. **The category detail is unverified on the primary page** |
| Example of a licence disclosure: Adyen states it holds "a Retail Payment Services Licence (Category II)" from the CBUAE under the RPSCS Regulation, licence no. 08.01.02.035.2026.02 | https://www.adyen.com/en_AE/licenses/emea | 15 Oct 2026 | [Vendor]. Use only as "how to check", not as an endorsement |
| CBUAE register of licensed entities: location not verified (centralbank.ae returned 403) | — | 15 Oct 2026 | **Unverified.** Write "ask the provider for its CBUAE licence number and category and confirm it on the CBUAE website" |
| UAE capital thresholds for PSP licences | commercial blog only | — | **Don't include** |
| Stripe available to UAE businesses | https://stripe.com/global | 15 Oct 2026 | [Vendor] |

UK and EU (SCA):

| Claim | Source | Checked | Label |
|---|---|---|---|
| FCA: SCA rules "check that the person requesting access to an account or trying to make a payment is permitted to do so" and apply when a payer "initiates an electronic payment transaction" or accesses an account online, "unless an exemption applies". In force "since 14 September 2019"; the FCA page was updated 15 Feb 2023 | https://www.fca.org.uk/firms/strong-customer-authentication | 15 Oct 2026 | [Official] |
| EU RTS on SCA, Delegated Regulation (EU) 2018/389: exemptions include recurring transactions (Art. 14, SCA on the first in a series of the same amount to the same payee) and low-value remote transactions (Art. 16) | https://eur-lex.europa.eu/eli/reg_del/2018/389/oj | **EUR-Lex did not render for the fetcher today** | [Official] in substance, but **re-verify article numbers and thresholds (commonly cited as EUR 30 / EUR 100 / 5 transactions) before citing** |
| Practical: provider SDKs run the 3DS challenge in-app. Stripe's test card 4000002500003155 "requires authentication" | Stripe iOS doc | 15 Oct 2026 | [Vendor] |

Australia (reuse the existing ZSpace AU page; don't repeat it):
- RBA retail payments review conclusions (2026-03): surcharging, least-cost routing, and NPP PayTo. These are already cited on `/blogs/payment-gateway-integration-australia` with official RBA and NPPA URLs.
- Link to that page rather than restating it. Re-check the RBA surcharge-ban implementation date at writing, because the AU page FAQ "Can Australian businesses still add a card surcharge?" depends on it. [Official] via that page's sources.

Singapore:

| Claim | Source | Checked | Label |
|---|---|---|---|
| MAS Financial Institutions Directory lets you look up payment institutions by licence type. It currently shows Standard Payment Institution (13) and Major Payment Institution (245) entries | https://eservices.mas.gov.sg/fid | 15 Oct 2026 | [Official]. The counts change, so don't publish them; publish the lookup step |
| Merchant acquisition is a regulated payment service under the Payment Services Act. MPI thresholds are S$3m monthly for one service or S$6m for two or more | https://www.gobusiness.gov.sg/browse-all-licences/Monetary-Authority-of-Singapore-(MAS)/Major-Payment-Institution-Licence (search snippet) | 15 Oct 2026 | [Official], **snippet only; open before citing** |
| Stripe available to Singapore businesses; Razorpay lists Singapore availability | stripe.com/global ; Razorpay methods page | 15 Oct 2026 | [Vendor] |

Fees: **no rates.** Describe fee *components* to ask about (domestic and international card, UPI, wallets, FX conversion, chargebacks, refunds, payout or settlement, platform fees). Vendor list prices may be cited only with date, currency and billing basis from the official pricing page, and I didn't collect any. Note that India's UPI merchant pricing is a policy matter: don't state "UPI is free for merchants" without a current official source [Unverified].

---

## Cross-topic linking and sequencing
- 65 (hub) → 68 (`mobile-app-payments`) for physical goods and gateway choice, → MOB-13 for fees and link-outs, → MOB-26 for subscription mechanics, → `mobile-app-development-cost` for the fee table, → `mobile-app-analytics` for ATT.
- 68 → 65 for "can I use a gateway at all", → MOB-23 for UPI implementation, → `payment-gateway-integration-australia`, `international-ecommerce-payments` and `payment-gateway-integration` (server side).
- 66 → `mobile-app-launch-checklist` (assets), `mobile-app-analytics` (store funnel), `improve-mobile-app-retention`.
- 67 → `mobile-app-architecture`, `mobile-app-performance-optimization` (Batch 8 #146), `mobile-app-security`.
- One fee source of truth: `mobile-app-development-cost` (and MOB-13 once live). Pages 65 and 68 link there instead of restating the full table. Schedule a quarterly review: Play "Rest of World" rollout on 30 Sep 2027, South Korea on 31 Dec 2026, the US Epic v Apple rate, and the Supreme Court decision.

## Summary
1. **65 CREATE `/blogs/mobile-app-monetisation-models` (hub). Agree.** No page holds this intent. MOB-13 and MOB-26 stay as deep dives. The hub maps each model to its payment rail and the exact 3.1.x or Play clause, plus ads rules (AdMob, Play 15-second interstitials, EEA/UK/CH CMP, ATT). No revenue benchmarks: none exist from a primary source with a stated method.
2. Fees re-verified today:
   - Google: 10% service fee on the first $1M and on subscriptions; 5% billing fee in the US, UK, EEA, AU and JP; South Korea from 31 Dec 2026; **Rest of World (India, UAE, SG) from 30 Sep 2027**, legacy 15/30 until then.
   - Apple EU Attachment 14 (from 1 Oct 2026): 26% / 20% / 15% link-out / 5% CTC, now confirmed on Apple's page.
   - US iOS link-outs: currently zero commission. The rate is still in remand litigation (Kagan denied Apple's stay in Aug 2026), so treat it as unresolved.
3. Play billing choice (UK and EEA from 30 Jun 2026, AU and JP from 30 Sep 2026). The US is unchanged. Google Play's policy has no reader-app exception.
4. **66 UPDATE `app-store-optimization`. Agree.** All limits were verified on official pages: Apple name and subtitle 30, keywords 100 (characters per the product-page guide, bytes per App Store Connect, so flag it), promo text 170, 10 screenshots, 3 previews of 15–30 s, 70 custom product pages; Play title 30, short 80, full 4,000, up to 50 custom listings with search-keyword targeting.
5. Ratings prompts: Apple allows 3 in 365 days, and `SKStoreReviewController` is now deprecated in favour of `RequestReviewAction`. Play has an undisclosed quota, and you must not trigger it from a button or ask questions first.
6. **67 UPDATE `offline-first-mobile-app-development`. Agree.** Add a job-by-job decision worksheet built on Android's official online-only, queued and lazy write strategies and pull vs push sync, plus cost drivers and a vendor-risk box.
7. **MongoDB Atlas Device Sync deprecation confirmed** on MongoDB's own page: deprecated September 2024, end of life and removal 30 Sep 2025. The on-device Realm database continues as open source.
8. **68 UPDATE `mobile-app-payments` (do not CREATE a separate gateway-selection page).** The SERP combines "choose and integrate", three pages already have provider-choice sections, and MOB-13 and MOB-23 take the depth. Add a gateway scorecard and market notes.
9. India verified on rbi.org.in:
   - PA Directions (15 Sep 2025): PA-O, PA-P and PA-CB categories; non-banks need authorisation; escrow.
   - E-mandate Framework 2026 (21 Apr 2026): ₹15,000 no-AFA limit, ₹1 lakh for insurance, mutual funds and card bills, 24-hour pre-debit notice.
10. Unverified and to re-check at writing:
    - UAE CBUAE categories (Rulebook returned 403; Adyen's Category II disclosure used as a how-to-check example);
    - EU SCA article thresholds (EUR-Lex didn't render);
    - Singapore MPI thresholds (snippet only);
    - Apple `waitsForConnectivity`;
    - Firestore offline transactions.
    
    Demand evidence is weak in community sources (HN sparse, Reddit unreachable) and rests mainly on the SERP.
