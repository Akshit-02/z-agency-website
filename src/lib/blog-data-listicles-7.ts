import type { BlogPost } from "./blog-data";

/**
 * Listicle batch 6 (2026-10-28): four topics out of candidates 101–120 with no
 * existing article on the same primary intent. Background jobs (103) and
 * phased-rollout signals (106) became updates to
 * durable-workflows-vs-message-queues and mobile-app-release-management; the
 * other fourteen were already covered. No external links (owner rule).
 * Sources checked 2026-10-28:
 * - Apple App Review Guidelines 3.1.1 (restore mechanism for restorable
 *   purchases) and 3.1.2 (auto-renewable subscriptions at least seven days,
 *   ongoing value, all devices; describe what the user gets before asking them
 *   to subscribe; no bait-and-switch). Google Play Console Help, subscriptions
 *   policy (disclose price, billing frequency, auto-renewal and trial terms
 *   without extra steps; easy online cancellation; listed violations).
 * - Shopify Help, discount combinations: product, order and shipping classes;
 *   max 5 product or order codes plus 1 shipping code per order; max 25 active
 *   automatic discounts; same-line product stacking is Plus only; product +
 *   order and order + order need eligibility (no checkout.liquid).
 * - W3C Internationalization, text size in translation (IBM expansion table:
 *   up to 10 characters 200–300%, over 70 characters about 130%).
 * - Google tag platform, consent mode: ad_storage, analytics_storage,
 *   ad_user_data, ad_personalization; default and update commands; choices
 *   must be stored by the site. GA Help: basic mode blocks tags until consent;
 *   advanced mode sends cookieless pings when consent is declined.
 * - Microsoft Clarity docs, consent mode: from 31 October 2025 Clarity enforces
 *   consent signals for visits from the EEA, UK and Switzerland; Consent API.
 */
export const listiclePosts7: BlogPost[] = [
  // --------------------------------------------- MOBILE APP PAYWALL
  {
    slug: "mobile-app-paywall-checklist",
    title: "12 Subscription Paywall Details to Review Before Launching a Mobile App",
    seoTitle: "12 Mobile App Paywall Details to Check Before Launch",
    excerpt:
      "Twelve paywall details for subscription apps, from price and trial disclosure to restore purchases and cancellation, with what Apple and Google require.",
    category: "Mobile Apps",
    banner: "subcheckoutflow",
    sceneKind: "mobile",
    bannerAlt: "A mobile subscription paywall showing plan options, the full billed price, trial terms, a restore purchases link and a clear way to continue without subscribing",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "sports-fitness", "education-edtech"],
    relatedSlugs: ["mobile-app-monetisation-models", "mobile-app-mvp-features", "subscription-ecommerce-cancellation-flow"],
    faqs: [
      {
        q: "Does an iOS app need a Restore Purchases button?",
        a: "Apple's App Review Guidelines say you should make sure you have a restore mechanism for any restorable in-app purchases, which includes subscriptions. A visible Restore Purchases option on the paywall or in settings is the usual way to meet that.",
      },
      {
        q: "Can I show the monthly equivalent of an annual price?",
        a: "You can show it as extra information, but the amount actually charged must be clear. Google Play lists annual subscriptions that prominently show a monthly price instead of the actual charge as a policy violation.",
      },
      {
        q: "How short can an auto-renewable subscription be on iOS?",
        a: "Apple's guidelines say the subscription period must last at least seven days, and the subscription must be available across all of the user's devices.",
      },
    ],
    content: [
      {
        heading: "What should a mobile app paywall get right?",
        body: [
          "**A compliant, trustworthy paywall states what the subscriber gets, the full price actually charged and how often, that it renews automatically, the trial length and what happens when it ends, and how to cancel. It offers a visible way to restore purchases and to continue without paying where the app allows, avoids designs that cause accidental purchases, and is fully localised.** Apple and Google both review paywalls against their own rules, and unclear paywalls are a common reason for rejection, refunds and complaints.",
          "This list is for founders, product managers and mobile developers preparing a subscription app for launch. It distinguishes binding store requirements from good practice. Store rules were checked against Apple's App Review Guidelines and Google Play's subscriptions policy on 28 October 2026; they change, so re-check before submitting. For choosing a business model in the first place, see [[/blogs/mobile-app-monetisation-models|how to monetise a mobile app]].",
        ],
      },
      {
        heading: "What the subscriber gets",
        body: [
          "**1. A clear description of the value.** Apple's guideline 3.1.2(c) says that before asking a customer to subscribe, you should clearly describe what the user will get for the price: how much storage, which features, what kind of access. Name the specific features unlocked, not \"Go Premium\".",
          "**2. Ongoing value for a recurring charge.** Apple requires auto-renewable subscriptions to provide ongoing value, last at least seven days and work across the user's devices. If the value is a one-off unlock, a one-time purchase may suit better.",
          "**3. No extra tasks to get what was paid for.** Apple's guidelines say subscribers should get what they paid for without extra tasks such as posting on social media or uploading contacts.",
        ],
      },
      {
        heading: "Price and terms",
        body: [
          "**4. The actual amount charged, prominently.** Show the price billed and the billing period (\"₹2,999 per year\"). A per-month equivalent can appear as secondary information. Google Play lists annual plans that prominently show a monthly price instead of the actual charge as a violation.",
          "**5. Auto-renewal stated plainly.** Say that the subscription renews automatically until cancelled. Google Play cites monthly subscriptions that do not tell users they will renew and be charged each month as a violation.",
          "**6. Trial terms in full.** Google Play requires the trial length, what it unlocks, when it converts to a paid subscription, the price after the trial and how to cancel before it ends. Do not label a product \"Free Trial\" if it renews into a paid charge; Google lists that as a violation too.",
          "**7. Localised prices and text.** Google Play requires subscription pricing and terms to be fully localised, including language and currency. Use the store's localised price strings rather than converting prices yourself.",
        ],
      },
      {
        heading: "Controls the user needs",
        body: [
          "**8. Restore purchases.** Apple says you should have a restore mechanism for restorable in-app purchases. Put \"Restore purchases\" on the paywall or in settings so people who reinstall or change devices can regain access.",
          "**9. Manage and cancel.** Google Play requires an easy online way to cancel or manage the subscription from the app's account settings or an equivalent page, such as a link to the Play subscription centre. On iOS, link to the system subscription management screen. See [[/blogs/subscription-ecommerce-cancellation-flow|cancellation flow design]] for the same principles on the web.",
          "**10. A visible way to continue without subscribing.** If the app has free features, make the close or \"continue with free\" option clear. Hidden close buttons frustrate users and invite review complaints; Apple's guidelines prohibit tricking users into subscribing.",
        ],
      },
      {
        heading: "Design and operations",
        body: [
          "**11. No accidental purchases.** Google lists purchase flows where repeated taps in the same area lead to accidental subscriptions as a violation. Do not put the purchase button where the onboarding \"Next\" button was, and make the selected plan obvious.",
          "**12. Entitlements that match the store.** Your backend must know who is subscribed, including renewals, cancellations, refunds, billing retries and grace periods, using the stores' server notifications and purchase verification. A paywall that unlocks features based only on what the device says can be bypassed and drifts out of sync. Plan this with the rest of the [[/blogs/mobile-app-mvp-features|first release]].",
        ],
        cta: {
          title: "Launching a subscription app?",
          description: "ZSpace Labs designs and builds iOS and Android apps with store billing, entitlement handling and paywall flows that follow store rules. See our [[/services/mobile-app-development|mobile app development service]].",
        },
      },
      {
        heading: "Pre-submission checklist",
        body: [
          "\"Required\" means the store's own rules ask for it; \"good practice\" is our recommendation.",
        ],
        table: {
          headers: ["Detail", "Apple", "Google Play"],
          rows: [
            ["1. What the user gets, described", "Required (3.1.2(c))", "Required (offer terms)"],
            ["2. Ongoing value; period of at least 7 days", "Required (3.1.2(a))", "Good practice"],
            ["3. No extra tasks to unlock paid features", "Required (3.1.2(a))", "Good practice"],
            ["4. Actual charged price prominent", "Good practice; no misleading terms", "Required (listed violation)"],
            ["5. Auto-renewal stated", "Required by store terms", "Required"],
            ["6. Full trial terms", "Trial set up in App Store Connect; describe clearly", "Required"],
            ["7. Localised price and text", "Use store price strings", "Required"],
            ["8. Restore purchases", "Required for restorable purchases (3.1.1)", "Good practice"],
            ["9. Manage and cancel link", "Good practice", "Required"],
            ["10. Continue without subscribing (if free tier)", "No tricks (3.1.2(a))", "Good practice"],
            ["11. No accidental purchase layouts", "No bait-and-switch", "Required (listed violation)"],
            ["12. Server-side entitlements", "Good practice", "Good practice"],
          ],
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Showing a paywall before the user has seen any value, then measuring only conversion rate rather than refunds and retention.",
          "Small, low-contrast text for the price and renewal terms.",
          "Testing only one country and currency.",
          "Forgetting to handle refunds and revoked purchases on the backend.",
          "Changing paywall copy without re-checking store rules, especially for trials.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A good paywall is clear about value, price, renewal, trial and cancellation, gives people a way to restore and to leave, and is backed by reliable server-side entitlements. That keeps you within store rules and reduces refunds and complaints. For the privacy disclosures that go alongside, see [[/blogs/mobile-app-data-privacy|mobile app privacy before launch]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Apple App Review Guidelines, 3.1.1 In-App Purchase and 3.1.2 Subscriptions. Google Play Console Help, subscriptions policy. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // --------------------------------------------- ECOMMERCE DISCOUNT RULES
  {
    slug: "ecommerce-discount-rules",
    title: "12 Ecommerce Discount Rules to Define Before Running Complex Promotions",
    seoTitle: "12 Discount Rules to Define Before Complex Promotions",
    excerpt:
      "Twelve discount rules to settle before a big promotion, from stacking and eligibility to returns and minimum spend, including Shopify's combination limits.",
    category: "Shopify & Ecommerce",
    banner: "merchlevers",
    sceneKind: "checkout",
    bannerAlt: "A promotion plan showing product, order and shipping discounts with rules for stacking, eligibility, limits and returns",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel"],
    relatedSlugs: ["shopify-bundles-volume-discounts", "shopify-checkout-optimization", "checkout-error-messages"],
    faqs: [
      {
        q: "How many discount codes can a Shopify order use?",
        a: "Shopify Help states that customers can use a maximum of five product or order discount codes and one shipping discount code on the same order, provided each discount's combination settings allow it.",
      },
      {
        q: "Can two product discounts apply to the same item on Shopify?",
        a: "Only on Shopify Plus, according to Shopify Help. On other plans, product discounts can combine across different items but not stack on the same line item.",
      },
      {
        q: "Should discounts be refunded proportionally on returns?",
        a: "Usually, yes, for order-level discounts: allocate the discount across items so a partial return refunds what the customer actually paid for that item. Write the rule down before the promotion so support and finance apply it consistently.",
      },
    ],
    content: [
      {
        heading: "Which discount rules should you define before a promotion?",
        body: [
          "**Before a complex promotion, decide which discounts can combine, who is eligible, what products are excluded, the minimum spend and how it is calculated, usage limits, the order discounts apply in, how they appear in the cart, how returns and refunds treat them, how they interact with currencies and taxes, and who can create or change them.** Write these down and test them with real baskets before launch. Most promotion problems come from undefined interactions, not from the discount itself.",
          "This list is for ecommerce managers and Shopify merchants planning sales, bundles and loyalty offers. It notes what Shopify supports natively, checked in Shopify Help on 28 October 2026, and where apps or custom work come in. For bundle and volume offers specifically, see [[/blogs/shopify-bundles-volume-discounts|Shopify bundles and volume discounts]].",
        ],
      },
      {
        heading: "Combining and stacking",
        body: [
          "**1. Which discounts can combine.** Shopify groups discounts into product, order and shipping classes; discounts combine only when each one's combination settings allow it. Shopify Help says all merchants can combine order with shipping, product with shipping, and product discounts on separate items; product with order and order with order need an eligible store (for example, no checkout.liquid customisations). Decide your stacking policy first, then set each discount to match.",
          "**2. Limits on codes per order.** Shopify allows at most five product or order discount codes and one shipping code on the same order. Decide whether you want customers to stack codes at all; many promotions are simpler with one code plus automatic discounts.",
          "**3. Same-item stacking.** Shopify Help states that multiple product discounts on the same line item are available only on Shopify Plus. If your promotion assumes \"20% off plus a further 10% for members\" on one item, check your plan first.",
          "**4. Automatic versus code discounts.** Automatic discounts apply without a code; Shopify allows a maximum of 25 active automatic discounts, including app-based ones. Automatic discounts suit site-wide sales; codes suit targeted campaigns and partner offers.",
        ],
      },
      {
        heading: "Eligibility",
        body: [
          "**5. Who qualifies.** Everyone, new customers only, a customer segment, members, staff or wholesale accounts. \"New customers only\" needs a rule for what counts as new and how you stop repeat sign-ups with new emails.",
          "**6. What qualifies and what is excluded.** List included collections and explicit exclusions: gift cards, already-discounted items, new launches, subscriptions or items with thin margins. Exclusions should be visible to customers before checkout.",
          "**7. Minimum spend or quantity, precisely defined.** Is the threshold before or after other discounts, before or after tax, in which currency, and does it include excluded items? Ambiguity here causes most \"my code doesn't work\" complaints. Show progress towards the threshold in the cart.",
          "**8. Usage limits and dates.** Total uses, uses per customer, start and end times with the time zone, and what happens to baskets open when the promotion ends.",
        ],
      },
      {
        heading: "Display, money and operations",
        body: [
          "**9. How discounts are shown.** Show the original price, the discount and the final price in the cart and checkout, and name which discount applied. When a code is rejected, say why. See [[/blogs/checkout-error-messages|checkout error messages]].",
          "**10. Returns, refunds and exchanges.** Decide how order-level discounts are allocated across items for partial refunds, whether a return that drops the order below the minimum spend affects the refund, and how free gifts are handled when the qualifying item is returned.",
          "**11. Currencies, taxes and rounding.** For stores selling in several currencies, decide whether fixed-amount discounts are converted or set per market, and check how rounding and tax-inclusive pricing affect the final amount. See [[/blogs/multi-currency-ecommerce|multi-currency ecommerce]].",
          "**12. Who can create and change discounts.** Limit permissions, require a second check for large or site-wide discounts, name discounts consistently, and keep a calendar of active promotions so codes do not leak or overlap by accident.",
        ],
        cta: {
          title: "Planning a complex promotion on Shopify?",
          description: "ZSpace Labs sets up Shopify discounts, bundles and the cart and checkout messaging around them, including custom logic where native rules are not enough. See our [[/services/shopify-development|Shopify development service]].",
        },
      },
      {
        heading: "Promotion rule sheet",
        body: [
          "Fill one in for every significant promotion and share it with marketing, support and finance.",
        ],
        table: {
          headers: ["Rule", "Decision to record", "Shopify note"],
          rows: [
            ["1. Combining", "Which classes and offers combine", "Set per discount; some combinations need eligibility"],
            ["2. Codes per order", "Allow stacking or one code", "Max 5 product/order codes + 1 shipping code"],
            ["3. Same-item stacking", "Allowed or not", "Plus only"],
            ["4. Automatic vs code", "Which mechanism", "Max 25 active automatic discounts"],
            ["5. Customer eligibility", "Segments, new customers, members", "Customer segments and eligibility settings"],
            ["6. Products and exclusions", "Collections in and out", "Collection or product selection"],
            ["7. Minimum spend", "Before or after other discounts, tax, currency", "Minimum purchase requirements"],
            ["8. Limits and dates", "Total, per customer, start and end with time zone", "Usage limits and active dates"],
            ["9. Display", "Where and how savings show", "Theme cart and checkout settings"],
            ["10. Returns", "Allocation and threshold rules", "Refund handling is a process decision"],
            ["11. Currency and tax", "Per-market amounts, rounding", "Check Markets settings"],
            ["12. Permissions", "Who creates and approves", "Staff permissions"],
          ],
        },
      },
      {
        heading: "Test before launch",
        body: [],
        checklist: [
          "Build test baskets for each rule: just under and just over the threshold, excluded items, mixed currencies, stacked codes.",
          "Check the discounted price shown in the cart, checkout, confirmation email and invoice match.",
          "Process a partial return on a discounted order and confirm the refund amount.",
          "Check that apps, such as bundle, loyalty and subscription apps, behave as expected alongside the new discount.",
          "Brief support with the rule sheet and the most likely customer questions.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Promotions go wrong in the gaps between rules: unexpected stacking, unclear thresholds, excluded items customers did not know about and refunds nobody planned for. Write the twelve rules down, check them against your platform's limits, test real baskets, and show customers exactly what they are getting. For discounts' wider role in conversion, see [[/blogs/shopify-checkout-optimization|Shopify checkout optimisation]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Shopify Help Center, discount combinations (classes, code limits, automatic discount limit, same-line stacking on Plus). Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ---------------------------------------- LOCALISATION LAYOUT PROBLEMS
  {
    slug: "localisation-layout-issues",
    title: "15 Interface Layout Problems to Check Before Localising a Digital Product",
    seoTitle: "15 Layout Problems to Check Before Localising a Product",
    excerpt:
      "Fifteen layout problems that break interfaces in other languages, from text expansion and truncation to right-to-left mirroring, fonts, plurals and formats.",
    category: "UI/UX",
    banner: "i18nlayers",
    sceneKind: "design",
    bannerAlt: "The same interface in English, German and Arabic, showing longer labels, wrapped buttons and a mirrored right-to-left layout",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development", "mobile-app-development"],
    relatedIndustrySlugs: ["saas-technology", "ecommerce", "travel-hospitality"],
    relatedSlugs: ["ecommerce-localization-vs-translation", "multilingual-website-development-uae", "design-token-categories"],
    faqs: [
      {
        q: "How much space should I allow for translated text?",
        a: "More for short strings than long ones. The W3C cites IBM figures showing that English strings of up to 10 characters can grow by 200–300% in European languages, while strings over 70 characters grow by about 130%. Design flexible layouts rather than fixed widths.",
      },
      {
        q: "What is pseudo-localisation?",
        a: "A testing technique that replaces interface text with longer, accented versions of the original (for example \"[Šéţţîñĝš ___]\") before real translation. It quickly shows truncation, hard-coded strings and layout breaks.",
      },
      {
        q: "Is localisation just translation?",
        a: "No. Localisation also covers layout, formats for dates, numbers and currency, images, examples, legal content and sometimes features. Translation is one part of it.",
      },
    ],
    content: [
      {
        heading: "Which layout problems should you check before localising?",
        body: [
          "**Check for text that grows and gets cut off, fixed-width buttons and labels, text inside images, strings built by joining fragments, right-to-left mirroring, fonts and line heights for other scripts, date, number, currency, name and address formats, plurals, sorting, icons that imply direction, and hard-coded text.** Test early with pseudo-localisation and at least one long language and one right-to-left language, before paying for full translations.",
          "This list is for product designers and front-end developers preparing a website, app or SaaS product for new languages. It focuses on interface layout; for wider market adaptation, see [[/blogs/ecommerce-localization-vs-translation|localisation vs translation]]. Expansion figures come from the W3C Internationalization Activity's guidance on text size in translation.",
        ],
      },
      {
        heading: "Text length",
        body: [
          "**1. Text expansion.** Translated text is usually longer than English, and short strings grow most. The W3C cites IBM averages of 200–300% expansion for English strings up to 10 characters and about 130% for strings over 70 characters. Buttons, tabs and table headers are the usual casualties.",
          "**2. Truncation that hides meaning.** Ellipses that cut \"Delete account\" to \"Delete acc...\" in another language create confusion or risk. Allow wrapping where possible, and show full text in a tooltip only as a last resort.",
          "**3. Fixed widths and heights.** Fixed-size buttons, cards and navigation items break with longer text. Use flexible layouts that grow and wrap, and test the navigation at its longest translation.",
          "**4. Text in images.** Text baked into images cannot be translated without new artwork and is invisible to screen readers. Keep text as live text over images.",
        ],
      },
      {
        heading: "Strings and grammar",
        body: [
          "**5. Concatenated strings.** Building sentences from fragments (\"You have \" + count + \" new messages\") fails in languages with different word order or grammar. Use full sentences with placeholders, so translators can reorder them.",
          "**6. Plurals.** Many languages have more than two plural forms, and some change by number in complex ways. Use an internationalisation library that supports plural rules (based on the Unicode CLDR data) instead of \"if count is 1\".",
          "**7. Hard-coded text.** Labels, error messages, emails and alt text left in code will appear in English in every language. Search the codebase and templates for literal strings before translation starts.",
        ],
      },
      {
        heading: "Direction and scripts",
        body: [
          "**8. Right-to-left mirroring.** Arabic, Hebrew, Persian and Urdu read right to left, so the layout mirrors: navigation, progress steps and back arrows flip. Use CSS logical properties (start and end rather than left and right) and the dir attribute so mirroring happens automatically. See [[/blogs/multilingual-website-development-uae|multilingual and RTL website development]].",
          "**9. Icons that imply direction.** Back, forward, reply and progress icons usually mirror in RTL; icons such as a clock, a play button or brand logos usually do not. Decide per icon.",
          "**10. Fonts and line height.** Your brand font may not include Arabic, Devanagari, Thai or Chinese characters, and fallbacks can look out of place or be taller. Choose fonts per script and allow extra line height for scripts with tall marks.",
          "**11. Mixed-direction text.** Product codes, email addresses, numbers and English brand names inside RTL text can display in a confusing order. Isolate them correctly in markup and test real examples.",
        ],
      },
      {
        heading: "Formats and data",
        body: [
          "**12. Dates, times and numbers.** Day and month order, 12- or 24-hour time, decimal separators and digit grouping (including India's lakh and crore grouping) differ. Format with locale-aware functions rather than fixed patterns.",
          "**13. Currency.** Symbol position, spacing and decimals vary by locale and currency. Use locale-aware currency formatting and allow longer price strings in product cards.",
          "**14. Names, addresses and phone numbers.** Forms with fixed first and last name fields, a required state field or a five-digit postcode exclude many countries. Adapt fields per market.",
          "**15. Sorting and search.** Alphabetical order differs between languages, and search must handle accents and other scripts. Use locale-aware sorting and test search with real non-English queries.",
        ],
        cta: {
          title: "Preparing a product for new languages?",
          description: "ZSpace Labs designs and builds multilingual websites, apps and SaaS interfaces, including right-to-left layouts. See our [[/services/ui-ux-design|UI/UX design service]].",
        },
      },
      {
        heading: "Pre-localisation checklist",
        body: [],
        table: {
          headers: ["Problem", "How to catch it", "Fix"],
          rows: [
            ["1. Text expansion", "Pseudo-localisation; German or Finnish test", "Flexible layouts"],
            ["2. Truncation", "Review longest strings per screen", "Wrap; rewrite; tooltips as last resort"],
            ["3. Fixed sizes", "Resize text to 200% in tests", "Flexible components"],
            ["4. Text in images", "Image audit", "Live text over images"],
            ["5. Concatenated strings", "Code review of string building", "Full sentences with placeholders"],
            ["6. Plurals", "Test counts 0, 1, 2, 5, 11, 21", "CLDR-based plural rules"],
            ["7. Hard-coded text", "Pseudo-localisation shows untranslated text", "Move strings to resource files"],
            ["8. RTL mirroring", "Arabic test build", "Logical properties; dir attribute"],
            ["9. Directional icons", "Icon inventory", "Mirror only where meaning is directional"],
            ["10. Fonts and line height", "Render each script", "Per-script fonts; extra line height"],
            ["11. Mixed direction", "Real RTL content with codes and numbers", "Isolate embedded text"],
            ["12. Dates and numbers", "Locale switch tests", "Locale-aware formatting"],
            ["13. Currency", "Price display per market", "Locale-aware currency formatting"],
            ["14. Names and addresses", "Form review per market", "Market-specific fields"],
            ["15. Sorting and search", "Search tests with real queries", "Locale-aware collation and search"],
          ],
        },
      },
      {
        heading: "Making it easier next time",
        body: [],
        checklist: [
          "Run pseudo-localisation in development builds so problems appear before translation.",
          "Use design tokens and components that allow text to grow; see [[/blogs/design-token-categories|design token categories]].",
          "Give translators context: screenshots, maximum lengths where they are real, and notes on placeholders.",
          "Write source text in plain, short sentences; it translates more reliably. See [[/blogs/ux-writing|UX writing]].",
          "Budget design review time for each new language, especially the first right-to-left one.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Most localisation bugs are layout and string-handling problems that exist before a single word is translated. Test with pseudo-localisation, a long language and a right-to-left language early, fix fixed widths, concatenated strings and hard-coded text, and use locale-aware formatting. For a market-specific example, see [[/blogs/saudi-website-localization|Saudi website localisation]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "W3C Internationalization Activity, text size in translation. Unicode CLDR, language plural rules. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ---------------------------------------------- ANALYTICS CONSENT CHECKS
  {
    slug: "analytics-consent-checks",
    title: "10 Analytics Implementation Checks for Websites With Consent Requirements",
    seoTitle: "10 Analytics Checks for Websites That Need Consent",
    excerpt:
      "Ten checks for running analytics with a consent banner: default states, Google consent mode, Clarity's consent signal, tags that fire too early and data gaps.",
    category: "CRO",
    banner: "privacyflow",
    sceneKind: "analytics",
    bannerAlt: "A consent banner passing visitors' choices to analytics tags, with tags waiting for consent and reports showing the resulting data gaps",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "website-development"],
    relatedIndustrySlugs: ["ecommerce", "saas-technology", "professional-services"],
    relatedSlugs: ["measure-multi-channel-website-conversions", "ecommerce-privacy-customer-data", "lead-form-tracking-events"],
    faqs: [
      {
        q: "Do I need consent for Google Analytics?",
        a: "It depends on where your visitors are and how you configure analytics. In the EU and UK, cookie rules generally require consent before non-essential cookies such as analytics are set; other countries have different rules. Take legal advice for your markets and configure tags to follow the choice visitors make.",
      },
      {
        q: "What is Google consent mode?",
        a: "A way for your site to tell Google tags whether a visitor has consented to analytics and advertising storage. Version 2 added ad_user_data and ad_personalization to the original ad_storage and analytics_storage parameters. Tags then adjust how they behave.",
      },
      {
        q: "Does Microsoft Clarity need consent?",
        a: "Microsoft's documentation says that from 31 October 2025 Clarity enforces consent signals for visits from the European Economic Area, the UK and Switzerland, and that a valid signal is needed for full functionality for those visitors. Clarity provides a consent API and integrations with some consent platforms.",
      },
    ],
    content: [
      {
        heading: "What should you check when analytics depends on consent?",
        body: [
          "**Check that tags do not set cookies or send identifiable data before a choice is made, that default consent states are set before any tag runs, that the visitor's choice is passed to every tool (Google tags through consent mode, Microsoft Clarity through its consent API, others through your consent platform), that choices are remembered and can be changed, that no personal data leaks into analytics, and that your reports account for the data you will not collect.** Then verify all of it in a browser, not just in the tag manager.",
          "This list is for marketers, developers and site owners in markets where analytics needs consent, and for anyone serving visitors from the EU or UK. It is technical guidance, not legal advice: which rules apply depends on where your visitors are and what you collect. Google and Microsoft documentation was checked on 28 October 2026. For tracking lead sources and outcomes, see [[/blogs/measure-multi-channel-website-conversions|measuring conversions across channels]].",
        ],
      },
      {
        heading: "Before consent",
        body: [
          "**1. Nothing non-essential fires before a choice.** Load the page with cleared cookies, do not interact with the banner, and check the browser's network and cookie panels. Analytics, advertising and session-recording cookies should not appear unless your legal basis allows it.",
          "**2. Default consent states are set first.** For Google tags, the consent mode default command must run before any measurement data is sent, on every page. Google's documentation says to call the default command on every page of the site. If the default runs after the tag, the first hit is sent without consent information.",
          "**3. Regional defaults are deliberate.** If you apply consent only in some regions, set region-specific defaults and confirm visitors from those regions are actually covered. Location detection is approximate, so err on the side of asking.",
        ],
      },
      {
        heading: "Passing the choice to every tool",
        body: [
          "**4. Google consent mode v2 parameters.** Send all four: ad_storage, analytics_storage, ad_user_data and ad_personalization. Google added the last two in its consent mode update; sending only the original two leaves advertising features without a valid signal.",
          "**5. Basic or advanced mode, chosen on purpose.** Google describes basic mode as blocking Google tags until consent is granted, and advanced mode as loading tags that send cookieless pings when consent is declined, which Google uses for modelling. Decide which fits your legal advice; do not leave it to defaults.",
          "**6. Session recording and heatmap tools.** Tools such as Microsoft Clarity need their own consent signal. Microsoft's documentation says Clarity has enforced consent signals for visits from the EEA, UK and Switzerland since 31 October 2025, and provides a consent API and consent mode setting so cookies are set only after consent.",
          "**7. Every other tag.** Chat widgets, advertising pixels, embedded videos and A/B testing tools may set cookies too. List every third-party script on the site and confirm each one respects the visitor's choice.",
        ],
      },
      {
        heading: "After consent",
        body: [
          "**8. Choices are stored, applied and changeable.** Google notes that consent mode does not store choices; your banner or consent platform must remember them and resend them on each page. Provide a visible way to change consent later, such as a footer link, and make sure withdrawing consent stops collection.",
          "**9. No personal data in analytics.** Consent to analytics is not consent to send names, emails or phone numbers. Google requires that no personally identifiable information is sent to Analytics. Check URLs, page titles, event parameters and form tracking. See [[/blogs/lead-form-tracking-events|lead form tracking events]].",
          "**10. Reports account for the gaps.** With consent required, some visitors will not be measured, and the share varies by market, device and banner design. Compare analytics counts with your CRM or order system, note the consent rate when comparing periods, and avoid treating analytics totals as complete.",
        ],
        cta: {
          title: "Not sure your tracking respects consent?",
          description: "A [[/services/cro-audit|ZSpace Labs analytics and conversion audit]] checks consent behaviour, tag firing and data quality, and explains what your reports can and cannot tell you.",
        },
      },
      {
        heading: "Verification table",
        body: [],
        table: {
          headers: ["Check", "How to verify", "Pass looks like"],
          rows: [
            ["1. Nothing fires before choice", "Clear cookies; inspect network and cookies", "No non-essential cookies or hits"],
            ["2. Defaults set first", "Tag Assistant or debug view order", "Default consent before first measurement"],
            ["3. Regional defaults", "Test from target regions or with overrides", "Correct defaults per region"],
            ["4. All four Google parameters", "Inspect consent state in debug tools", "ad_storage, analytics_storage, ad_user_data, ad_personalization"],
            ["5. Basic vs advanced", "Behaviour when declined", "Matches the documented decision"],
            ["6. Clarity and similar tools", "Clarity consent status check; no _clck cookie before consent", "Cookies only after consent"],
            ["7. Other tags", "Script inventory against cookie list", "Every tag gated or justified"],
            ["8. Stored and changeable", "Reload, navigate, then withdraw", "Choice persists; withdrawal stops collection"],
            ["9. No personal data", "Inspect URLs and event parameters", "No names, emails or phone numbers"],
            ["10. Gaps understood", "Compare with CRM or orders", "Known measurement rate per market"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Consent-aware analytics is mostly about order and plumbing: set defaults first, pass the visitor's choice to every tool, keep personal data out, and verify in the browser. Then read reports knowing some visitors are not measured. For the wider customer-data picture, see [[/blogs/ecommerce-privacy-customer-data|ecommerce privacy and customer data]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google Tag Platform, set up consent mode (parameters, default and update commands). Google Analytics Help, consent mode overview (basic and advanced, cookieless pings). Google Analytics Help, PII policy. Microsoft Clarity documentation, consent mode (enforcement from 31 October 2025 for EEA, UK and Switzerland). Accessed 28 October 2026.",
        ],
      },
    ],
  },
];
