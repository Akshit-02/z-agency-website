import type { BlogPost } from "./blog-data";

/**
 * Founder batch 4, commerce: Shopify analytics and tracking audit (topic 72,
 * absorbing roadmap SHP-29, "why Shopify, GA4 and Meta differ"). No prices, no
 * vendor accuracy figures, no client data. Meta's default attribution setting,
 * Google Ads click-date reporting and a full list of Google & YouTube app
 * events are deliberately not stated (unverified or no single official list).
 * Sources checked 2026-10-15:
 * - Shopify Help: analytics fields (Sessions counted only with cookie consent;
 *   Human filter), session measurement update (21 to 23 Sep 2026; no midnight
 *   UTC split; 30-minute inactivity; bots filtered by default; history not
 *   reprocessed; bot classification from 7 Oct 2025), discrepancies with
 *   third-party tools, pixels overview, custom pixels (unsupported by Shopify),
 *   understanding customer privacy settings, Meta data sharing levels, Meta
 *   pixel (remove theme.liquid code), Google Analytics 4 setup.
 * - Shopify changelog: Shopify analytics session measurement improvements
 *   (21 Sep 2026).
 * - shopify.dev: Web Pixels API (strict vs lax sandbox; custom pixels have no
 *   settings access), pixel privacy (pixel loads only with permission for all
 *   declared settings), Customer Privacy API.
 * - Google: GA4 minimise duplicate key events with transaction IDs (12313109),
 *   GA4 recommended events reference (purchase, refund), GA4 ecommerce
 *   measurement for Shopify (12924131), GA4 attribution settings (10597962),
 *   Google Ads consent mode with Shopify (14563069).
 * - Meta for Developers: deduplicate Pixel and server events (event_id and
 *   event_name; 48-hour window).
 */
export const founderCommercePosts4: BlogPost[] = [
  {
    slug: "shopify-analytics-tracking-audit",
    title: "Shopify Analytics and Tracking Audit: Are Your Ecommerce Numbers Reliable?",
    seoTitle: "Shopify Tracking Audit: Are Your Numbers Reliable?",
    excerpt:
      "A 14-step Shopify tracking audit with a test for each step: test orders, transaction IDs, consent, pixels, GA4 and Meta deduplication, and session changes.",
    category: "Shopify & Ecommerce",
    banner: "auditgrid",
    sceneKind: "analytics",
    bannerAlt:
      "An audit grid comparing one Shopify test order across Shopify Analytics, GA4 and Meta Events Manager, with a pass or fail mark for transaction ID, value, consent and deduplication",
    date: "2026-10-15",
    readingTime: "14 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer"],
    relatedSlugs: ["shopify-analytics-guide", "ecommerce-event-tracking", "ecommerce-attribution"],
    faqs: [
      {
        q: "Which number should I trust for sales: Shopify, GA4 or Meta?",
        a: "Use Shopify for orders and revenue, because it is built from the order records themselves. GA4 and Meta are measurement tools that depend on browser scripts, consent and their own attribution rules, so they are useful for comparing channels and journeys, not for counting sales.",
      },
      {
        q: "How big a gap between Shopify and GA4 is acceptable?",
        a: "There is no official acceptable percentage, and any figure quoted as a standard is a rule of thumb. Measure your own match rate with the transaction ID reconciliation in step 12, then watch whether it stays stable. A sudden change after a theme, app or consent change matters more than the size of a steady gap.",
      },
      {
        q: "Why did my Shopify sessions and conversion rate change in late September 2026?",
        a: "Shopify rolled out a session measurement update from 21 to 23 September 2026. Sessions no longer end at midnight UTC, some sessions without a pageview are counted, and identified bot sessions are filtered out by default. Shopify says conversion rate can change even when orders and sales have not, and advises treating the change as a new baseline.",
      },
      {
        q: "Can I fix duplicate purchases by adding the Meta Pixel to my theme as well as the app?",
        a: "No, that usually causes them. Shopify warns that leaving manually added Meta pixel code in theme.liquid while using the Facebook and Instagram app means more than one pixel on the store, which can produce duplicate or incorrect data. Use one source per tool.",
      },
      {
        q: "Does a cookie banner reduce my Shopify sessions?",
        a: "It can. Shopify counts Sessions only when visitors consent to cookies through the cookie banner, and its customer privacy documentation says a banner can lead to lower session counts and lower metrics based on sessions, including conversion rate. Orders are still recorded.",
      },
      {
        q: "Are custom pixels a safe way to add tracking?",
        a: "They work for many cases, but Shopify states that adding and using custom pixels is unsupported, and that compliance, consent, code security, troubleshooting and updates are your responsibility. Prefer an app pixel where a maintained one exists, and document every custom pixel you keep.",
      },
    ],
    content: [
      {
        heading: "Are your Shopify, GA4 and Meta numbers reliable?",
        body: [
          "**Shopify's order records are reliable for orders and revenue. GA4 and Meta numbers are reliable only after you have tested them: one purchase event per order, the right transaction ID, value and currency, consent respected, and no duplicate tags. Even then they will not match Shopify exactly, because they count different things under different rules.** The useful question is not \"why don't they match?\" but \"is each gap explained, stable and small enough to make decisions with?\"",
          "This guide is a test procedure for founders and marketers who spend on ads and no longer trust their dashboards. It assumes a Shopify online store with GA4 connected through the Google & YouTube app and Meta through the Facebook and Instagram app. If you are still deciding which metrics to track in the first place, start with the [[/blogs/shopify-analytics-guide|guide to Shopify analytics metrics]] and come back here to test them.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Treat Shopify as the record of orders; treat GA4 and Meta as measurement that must be tested.",
          "One test order, followed through every tool, finds most problems.",
          "Reconcile GA4 transaction IDs against Shopify orders to get a real match rate.",
          "GA4 deduplicates repeated purchases by transaction ID only for the same user and only on web streams.",
          "Meta deduplicates Pixel and Conversions API events only when event ID and name match and they arrive within 48 hours.",
          "Shopify counts sessions only from visitors who accept cookies, and its session measurement changed on 21 to 23 September 2026.",
        ],
      },
      {
        heading: "Why Shopify, GA4 and Meta never show the same sales",
        body: [
          "Each tool answers a different question. Shopify records what was ordered and paid. GA4 records the purchase events that reached it from a browser and allocates credit to traffic sources. Meta reports conversions it can connect to its ads under the ad set's attribution setting. Shopify's own list of reasons for differences with third-party tools includes bot handling, visitors who block scripts or cookies, browser extensions, and different reporting time zones ([[https://help.shopify.com/en/manual/reports-and-analytics/discrepancies|Shopify Help]]). The table adds the causes that matter most when comparing sales.",
        ],
        table: {
          headers: ["Cause", "Shopify", "GA4", "Meta", "What to check"],
          rows: [
            ["**Attribution**", "Orders are counted once; marketing reports apply Shopify's own attribution", "Credit depends on the attribution model and lookback window in GA4's attribution settings", "Counts conversions linked to its ads under the ad set's attribution setting, which can include view-through", "Write down each tool's settings. Never add ad platform conversions together: Google and Meta can both claim the same order"],
            ["**Time zones**", "Store time zone", "Property time zone", "Ad account time zone", "Orders near midnight land on different days. Compare whole weeks or months, not single days"],
            ["**Refunds**", "Returns reduce net sales", "Revenue falls only if a refund event with the transaction ID is received", "Check what your setup sends; do not assume refunds are reflected", "Refund a test order and see what each tool shows (step 11)"],
            ["**Bots**", "Identified bot sessions filtered out of session reports by default since the September 2026 update", "Applies its own filtering", "Not comparable on sessions", "Compare sessions and conversion rate only within one tool"],
            ["**Consent**", "Sessions counted only with cookie consent; orders always recorded", "Tags respect consent state; declined visitors are not tracked as normal", "Pixel respects consent; server events depend on the data-sharing level and consent", "Test both consent states (step 7)"],
            ["**Ad blockers and browsers**", "Unaffected for orders", "Blocked scripts mean missing purchases", "Browser pixel can be blocked; server-to-server events cannot be blocked by browser ad blockers", "Test with an ad blocker (step 9)"],
            ["**Deduplication**", "Not applicable: one order record", "Same transaction ID from the same user on a web stream is deduplicated", "Pixel and server events deduplicated on matching event ID and name within 48 hours", "Check for duplicate tags and missing or reused IDs (steps 3, 5, 6 and 12)"],
          ],
        },
        callout: {
          type: "note",
          text: "A steady gap between Shopify and GA4 is normal. A gap that jumps after a theme release, app install or consent change is a tracking fault until proven otherwise.",
        },
      },
      {
        heading: "The audit checklist: 14 steps, each with a test",
        body: [
          "Work through the steps in order. Steps 1 to 3 prepare the ground, steps 4 to 11 follow one test order through every tool, and steps 12 to 14 check the data at scale and keep it honest. Use a low-cost real product, pay with a real method, and refund it afterwards, so the order follows the same path as a customer's. Record the Shopify order number and order ID before you look anywhere else.",
        ],
        table: {
          headers: ["Step", "Test", "Pass if", "If it fails"],
          rows: [
            ["**1. Freeze the period and time zones**", "Pick a closed date range. Record the time zone of the Shopify store, the GA4 property and the Meta ad account", "All three are written down and comparisons use whole weeks or months", "Align where you can, or accept and note the edge-of-day difference"],
            ["**2. Build the Shopify baseline**", "Export orders for the period. Separate online store orders from POS sales, orders created by staff, other sales channels and subscription renewals, which may not involve a browser checkout on your store", "You have a count and a list of order IDs that should have fired a browser purchase event", "Do not compare GA4 with total orders; compare it with this list"],
            ["**3. Inventory every tracking source**", "List app pixels and custom pixels in the Customer events section of the Shopify admin, code in theme.liquid and other theme files, any Google Tag Manager container, and apps that inject tags", "Each tool (GA4, Google Ads, Meta, others) has exactly one source for each event", "Remove the duplicate. Shopify warns that a Meta pixel left in theme.liquid alongside the app gives duplicate or incorrect data"],
            ["**4. Place the test order**", "Add a cheap product, apply a discount code, check out and pay. Note the order number, order ID, total and currency", "The order appears in Shopify with the expected total", "Fix checkout first; tracking tests mean nothing until the order is right"],
            ["**5. Check the GA4 purchase**", "Watch GA4 DebugView or the Realtime report while you buy", "Exactly one purchase event, with a transaction ID matching the Shopify order identifier your setup uses, plus value, currency and items", "Zero events: check consent and tag loading. Two or more: back to step 3. Blank ID: fix before anything else"],
            ["**6. Check the Meta Purchase**", "In Events Manager, look at the Purchase from the test order, including Test events if you use it", "Browser and server events share the same event ID and name and Meta shows them as deduplicated", "Missing server event: check the data-sharing level. Two counted purchases: event IDs differ or a second pixel exists"],
            ["**7. Test consent states**", "In a region where your banner shows, decline cookies, then repeat in a fresh browser and accept. In the browser console, run window.Shopify.customerPrivacy.currentVisitorConsent() and window.Shopify.customerPrivacy.analyticsProcessingAllowed() (available when the banner or the API is loaded)", "Declined: the API reports no consent and pixels that need analytics or marketing permission do not run. Accepted: they run and events fire", "Pixels firing after a decline, or a third-party banner whose choice the API does not reflect, is a consent fault to fix urgently"],
            ["**8. Review custom pixels**", "Open each custom pixel in Customer events. Check its permission settings, who maintains it, and, if it loads Google tags, the Consent Mode v2 snippet Shopify says custom pixels need", "Every custom pixel has an owner, a reason, correct permissions and consent handling", "Replace it with an app pixel where a maintained one exists, or document and fix it"],
            ["**9. Test with an ad blocker**", "Repeat a purchase with a common ad blocker on", "You understand the gap: GA4 and the Meta Pixel are likely missing; a Meta server event still arrives if you use Enhanced or Maximum data sharing", "No server event at all: review the Meta data-sharing level"],
            ["**10. Test each accelerated checkout**", "If you offer Shop Pay, PayPal or other express options, place a test order through each", "Each produces one GA4 purchase and one deduplicated Meta Purchase", "Note which path loses events and raise it with the app's support"],
            ["**11. Refund the test order**", "Refund in Shopify, then check each tool over the next day", "You know how each tool reflects refunds and write it down", "If GA4 revenue never reflects refunds, report net revenue from Shopify, not GA4"],
            ["**12. Reconcile transaction IDs at scale**", "Export 30 days of GA4 transaction IDs (an Exploration with the transaction ID dimension) and match them against the Shopify list from step 2", "Match rate is stable week to week, with no repeated IDs and no blank or \"(not set)\" IDs", "Repeated IDs point to duplicate tags; blanks point to a broken purchase event; a falling match rate points to consent or blocking changes"],
            ["**13. Re-baseline sessions**", "Mark 21 to 23 September 2026 on every session-based report and chart. Use the Human filter where available", "Before-and-after comparisons of sessions and conversion rate are flagged, not read as performance changes", "Rebuild targets for conversion rate from post-update data"],
            ["**14. Record settings and keep a change log**", "Write down GA4's attribution model and lookback window, each Meta ad set's attribution setting, and every theme, app, pixel and consent change with its date", "Anyone can explain a jump in the numbers from the log", "Re-run steps 4 to 7 after every relevant change"],
          ],
        },
      },
      {
        heading: "Consent: how Shopify decides what runs",
        body: [
          "Consent is where most silent tracking faults live, because it fails in both directions: pixels that run without permission, or pixels that never run because the banner's choice never reaches them. On Shopify, the [[https://shopify.dev/docs/api/customer-privacy|Customer Privacy API]] holds the visitor's choice. Its currentVisitorConsent() method returns the recorded answers, and methods such as analyticsProcessingAllowed() and marketingAllowed() combine those answers with your settings and the visitor's region. Shopify's own cookie banner passes the visitor's choice to the API. If you use a third-party banner, Shopify says to integrate it with Shopify's customer privacy settings ([[https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/understanding-customer-privacy-settings|Shopify Help]]).",
          "Pixels then follow that choice. In regions that require consent, Shopify says web pixels run only when visitors have given the permissions the pixel needs. An app pixel declares which permissions it needs, and Shopify's pixel manager loads it only if the visitor has granted all of them. For Google, Shopify's documentation says data from visitors in the EEA won't be used for personalised advertising unless Google Consent Mode v2 is active and valid consent is obtained. Google says that with the Google & YouTube app and a consent tool that integrates with the Customer Privacy API, consent mode \"should work automatically\" ([[https://support.google.com/google-ads/answer/14563069|Google Ads Help]]). \"Should\" is the reason step 7 exists: test it on your store rather than assuming it.",
          "Two side effects surprise people. First, Shopify counts Sessions only from visitors who consent to cookies through your cookie banner ([[https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/analytics-fields|Shopify Help]]), so turning a banner on can lower session counts and lift or lower conversion rate with no change in sales. Second, declined visitors still place orders, which is one reason Shopify orders exceed GA4 purchases. For lead-generation and multi-channel sites, the same consent logic is covered in [[/blogs/measure-multi-channel-website-conversions|measuring conversions across several channels]].",
        ],
      },
      {
        heading: "App pixels vs custom pixels",
        body: [
          "Shopify pixels load on the storefront, checkout, Thank you page and Order status page, and run in a sandbox, an isolated environment that keeps scripts away from the rest of the store ([[https://help.shopify.com/en/manual/promoting-marketing/pixels/overview|Shopify Help]]). There are two kinds, and they behave differently.",
        ],
        table: {
          headers: ["", "App pixel", "Custom pixel"],
          rows: [
            ["**Added by**", "A marketing or analytics app you install", "A developer, pasted into Customer events"],
            ["**Sandbox**", "Strict sandbox", "Lax sandbox"],
            ["**Settings from the app**", "Yes, through the pixel's settings object", "No access to settings"],
            ["**Consent**", "Declares the permissions it needs; loads only when all are granted", "Permissions set in Customer events; Google Consent Mode v2 needs a manual snippet"],
            ["**Support**", "The app developer maintains it", "Unsupported by Shopify; compliance, consent, security, troubleshooting and updates are your responsibility"],
          ],
        },
        callout: {
          type: "tip",
          text: "Shopify also notes that not all pixel functionality works in the sandbox. If a vendor's snippet behaves oddly as a custom pixel, check whether the vendor offers an app pixel before spending time debugging it.",
        },
      },
      {
        heading: "GA4 through the Google & YouTube app",
        body: [
          "Shopify's documented route for GA4 is to install the Google & YouTube sales channel, create a GA4 property with a web data stream, and connect the stream's Tag ID through the app; Merchant Center is not required for the GA4 tag setup ([[https://help.shopify.com/en/manual/reports-and-analytics/google-analytics/google-analytics-4|Shopify Help]]). Google says some ecommerce events are collected for you, including add_to_cart, begin_checkout and purchase ([[https://support.google.com/analytics/answer/12924131|Google Analytics Help]]). Neither company publishes one complete list of the events the app sends, so confirm what your store sends in DebugView rather than relying on a list from a blog.",
          "For the purchase event, Google lists transaction_id and items as required, and says that if you set value, currency is required for revenue to be computed accurately ([[https://developers.google.com/analytics/devguides/collection/ga4/reference/events|GA4 events reference]]). The transaction ID matters twice over. GA4 uses it to deduplicate repeated purchase events from the same user, but only for web streams, not app streams. Sending an empty string is worse than sending nothing useful, because GA4 then deduplicates every purchase with a blank ID together, and reusing one ID for different orders undercounts ([[https://support.google.com/analytics/answer/12313109|Google Analytics Help]]). That is why steps 5 and 12 look at IDs, not just counts.",
          "Older stores often carry a second GA4 tag from before the app: gtag code in the theme, a Tag Manager container, or code left over from earlier checkout customisations. If you are unsure what still runs at checkout, the [[/blogs/shopify-checkout-customisation-guide|Shopify checkout customisation guide]] explains what moved to checkout extensibility and pixels.",
        ],
      },
      {
        heading: "Meta Pixel and Conversions API deduplication",
        body: [
          "The Facebook and Instagram app has data-sharing levels. Standard uses the Meta pixel in the browser. Enhanced uses the Conversions API as well as the pixel, and Maximum adds more on top. Shopify explains that the Conversions API sends the purchase event between Shopify's and Facebook's servers, and that browser ad blockers can stop the pixel but cannot block data sent server to server ([[https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing|Shopify Help]]).",
          "Sending both is what Meta recommends, but it creates a deduplication job. Meta treats a browser event and a server event as the same when their event ID and event name match, and it only deduplicates events received within 48 hours of each other ([[https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/|Meta for Developers]]). Two things break this. A second pixel, usually old code in theme.liquid, sends purchases with different IDs, which Shopify warns causes duplicate or incorrect data ([[https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel|Shopify Help]]). And a custom server integration that sends late or with its own IDs falls outside the match. Step 6 checks both.",
          "Meta's attribution setting is a separate question from deduplication. It decides which conversions Meta credits to an ad, and it is set per ad set. Check the setting on the ad sets you are comparing instead of assuming a default.",
        ],
      },
      {
        heading: "Sessions: consent and the September 2026 change",
        body: [
          "Shopify rolled out a session measurement update from 21 to 23 September 2026 ([[https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements|Shopify changelog]]). Sessions are now based on continued activity instead of ending at midnight UTC, and a session ends after 30 minutes of inactivity. Some sessions without a pageview are now counted, such as a shopper going straight to checkout from a cart link. Identified bot sessions are filtered out of session reports by default. Historical data is not reprocessed, and bot classification applies only to sessions from 7 October 2025 onwards ([[https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/session-measurement-update|Shopify Help]]).",
          "The practical effect is in Shopify's own words: when your session count changes, your conversion rate can also change, even when your orders or sales haven't. Orders, sales and customer counts are not changed by the update, and Shopify advises treating it as a new baseline for session-based metrics such as sessions, conversion rate, add-to-cart rate and bounce rate. If your conversion rate moved in the last week of September 2026 and orders did not, this is the first explanation to rule out, before any theme or campaign change.",
        ],
      },
      {
        heading: "Hypothetical example: 120, 85 and 140",
        body: [
          "Hypothetical example: for one week, Shopify shows 120 orders, GA4 shows 85 purchases and Meta shows 140 purchases. The audit starts with step 2. Of the 120 orders, 12 are POS sales and subscription renewals that never touch a browser checkout, so the comparable baseline is 108. Step 12 finds 85 GA4 transaction IDs, all matching Shopify orders, with no duplicates or blanks: a 79% match against 108, and the same as the previous four weeks. That gap is consistent with consent declines and blocking, so GA4 is usable for comparing channels.",
          "Meta's 140 cannot be explained by duplicates alone. Step 3 finds a Meta pixel in theme.liquid as well as the app, and step 6 shows the test order counted twice. Removing the theme code fixes the duplicate. The remaining Meta figure can still include view-through conversions, if the ad set's attribution setting counts them, and some orders that Google Ads also claims, so it will stay above Shopify's figure for Meta traffic. The numbers are illustrative only; your own gaps will differ.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Comparing GA4 purchases with all Shopify orders, including POS and renewals.",
          "Adding Google Ads and Meta conversions together and calling it revenue from ads.",
          "Fixing missing purchases by adding a second tag, which creates duplicates instead.",
          "Turning on a cookie banner, then reading the drop in sessions as a traffic problem.",
          "Reading the late-September 2026 conversion rate change as a performance change.",
          "Keeping custom pixels nobody owns or remembers adding.",
          "Testing once at launch and never again after theme or app changes.",
        ],
      },
      {
        heading: "Limits of this audit, and when it is not enough",
        body: [
          "This audit tests whether events are collected correctly. It does not tell you which channel caused a sale. For that you need an attribution approach and, for large budget decisions, incrementality tests; see [[/blogs/ecommerce-attribution|ecommerce attribution models and incrementality]]. It also assumes a standard online store. A headless storefront, a custom checkout integration, server-side tagging or a data warehouse feeding reports all add layers that need their own tests; the [[/blogs/ecommerce-analytics-architecture|ecommerce analytics architecture guide]] covers how those pieces fit together.",
          "It is not a legal review. Whether your banner, regions and pixel permissions meet privacy law where you sell is a question for qualified advice. And if your store has very low order volume, a weekly match rate will swing for statistical reasons alone; use longer periods before you act on a change.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Reliable ecommerce numbers come from a tested setup, not from finding the one tool that is right. Use Shopify for orders and revenue, prove that GA4 and Meta receive one correct purchase per order under each consent state, measure the match rate with transaction IDs, and re-baseline sessions for the September 2026 change. Then keep a change log and repeat the test order after every theme, app or consent change.",
          "Start with steps 3 to 6 this week: they need only one test order and catch the most damaging faults. If the result points to deeper issues in tracking or the funnel, a structured [[/services/cro-audit|CRO and analytics audit]] can be the next step.",
        ],
        cta: {
          title: "Want a second pair of eyes on your tracking?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/cro-audit|CRO and analytics audits]] and [[/services/shopify-development|Shopify development]], including pixels, consent and Conversions API setup. If useful, we can talk through your audit results and what to fix first.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Shopify: [[https://help.shopify.com/en/manual/reports-and-analytics/shopify-reports/report-types/analytics-fields|Analytics fields]]; [[https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/session-measurement-update|Session measurement update]]; [[https://changelog.shopify.com/posts/shopify-analytics-session-measurement-improvements|Changelog: session measurement improvements (21 September 2026)]]; [[https://help.shopify.com/en/manual/reports-and-analytics/discrepancies|Discrepancies with third-party tools]]; [[https://help.shopify.com/en/manual/promoting-marketing/pixels/overview|Pixels overview]]; [[https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels|Custom pixels]]; [[https://help.shopify.com/en/manual/privacy-and-security/privacy/customer-privacy-settings/understanding-customer-privacy-settings|Understanding customer privacy settings]]; [[https://help.shopify.com/en/manual/reports-and-analytics/google-analytics/google-analytics-4|Google Analytics 4]]; [[https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-data-sharing|Meta data sharing]]; [[https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel|Meta pixel]].",
          "Shopify developer documentation: [[https://shopify.dev/docs/api/web-pixels-api|Web Pixels API]]; [[https://shopify.dev/docs/api/web-pixels-api/pixel-privacy|Pixel privacy]]; [[https://shopify.dev/docs/api/customer-privacy|Customer Privacy API]].",
          "Google: [[https://support.google.com/analytics/answer/12313109|Minimise duplicate key events with transaction IDs]]; [[https://developers.google.com/analytics/devguides/collection/ga4/reference/events|GA4 recommended events reference]]; [[https://support.google.com/analytics/answer/12924131|Measure ecommerce]]; [[https://support.google.com/analytics/answer/10597962|GA4 attribution settings]]; [[https://support.google.com/google-ads/answer/14563069|Consent mode with Shopify]].",
          "Meta: [[https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events/|Deduplicate Pixel and server events]].",
          "Accessed 15 October 2026. Platform behaviour, app features and consent requirements change; check the current documentation before relying on any detail.",
        ],
      },
    ],
  },
];
