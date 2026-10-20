import type { BlogPost } from "./blog-data";

/**
 * Founder batch 2, build topics: scoping the cost of third-party API
 * integrations (topic 22) and a first mobile app launch checklist (topic 27).
 * No prices or cost ranges are published (owner policy); only verified fixed
 * platform fees are quoted, with the date checked.
 * Sources checked 2026-10-14: Shopify API versioning; Stripe rate limits and
 * webhooks docs; Meta Graph API versioning guide; Xero developer pricing FAQ;
 * HubSpot API usage guidelines; Apple App Store Connect screenshot
 * specifications, platform version information, phased release, App Review
 * page and App Review Guidelines; Apple Developer Program and TestFlight
 * pages; Apple upcoming requirements; Google Play Console help on testing
 * requirements for new personal accounts, review times, preview assets,
 * pre-launch reports, staged rollouts, Data safety and account deletion;
 * Android target API level requirements. No figure here is ZSpace client data.
 */
export const founderBuildPosts2: BlogPost[] = [
  {
    slug: "api-integration-development-cost",
    title: "How Much Does It Cost to Integrate a Third-Party API? A Scoping Worksheet for Founders",
    seoTitle: "API Integration Cost: A Scoping Worksheet",
    excerpt:
      "Why one API integration costs far more than another: score each one on 10 cost drivers, list the recurring costs, and compare supplier quotes on equal terms.",
    category: "Web Development",
    banner: "costbreakdown",
    sceneKind: "cost",
    bannerAlt: "A cost breakdown for three integrations, payments, accounting and CRM, each scored low, medium or high across drivers such as authentication, data mapping, sync direction and versioning",
    date: "2026-10-14",
    readingTime: "13 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["startups", "saas-technology", "ecommerce", "professional-services"],
    relatedSlugs: ["custom-web-application-development-cost", "website-api-integration", "api-integration-reliability"],
    faqs: [
      {
        q: "Why won't a developer give me a fixed figure for an API integration?",
        a: "Because the effort depends on things neither of you can see until someone reads the vendor's documentation and your data: how authentication works, how many fields need mapping, whether the sync runs both ways, and how the vendor handles limits, webhooks and version changes. A supplier who quotes before checking those is guessing. Ask them to score the ten drivers first, then price.",
      },
      {
        q: "Is a two-way sync much harder than a one-way sync?",
        a: "Usually, yes. A one-way push has one source of truth. A two-way sync needs rules for which system wins when both change the same record, protection against loops where each update triggers the other, and a way to reconcile records that drift apart. Score it high unless you can make one system the clear owner of each field.",
      },
      {
        q: "What does an integration cost after launch?",
        a: "The recurring lines are vendor API access or tier fees where they apply, upgrade work when the vendor retires an API version, credential and secret rotation, monitoring and alerting, and someone's time to investigate failed syncs. The recurring cost register in this guide lists each one with a trigger and an owner so none is forgotten.",
      },
      {
        q: "Should we use an iPaaS tool instead of a custom integration?",
        a: "An iPaaS or no-code connector is often enough when a ready connector exists, the mapping is simple and volumes are modest. It still carries a licence, its own limits and the same vendor version changes underneath. Score the integration on the worksheet either way: the drivers decide whether a connector will cope or whether you need custom code.",
      },
      {
        q: "Can I use the worksheet if I'm not technical?",
        a: "Yes. You can answer most of the business questions yourself: which records move, in which direction, how often, and what breaks if a record is lost. Leave the technical columns for your developer or supplier, and ask them to link each high score to the vendor page that justifies it.",
      },
    ],
    content: [
      {
        heading: "Why does one API integration cost so much more than another?",
        body: [
          "**There is no honest single figure for \"an API integration\". Two integrations that sound alike, such as \"connect Stripe\" and \"connect Xero\", can differ several times over in effort because the cost is set by ten drivers: authentication, data mapping, sync direction, volume against rate limits, webhooks, error handling and reconciliation, sandbox quality, vendor API fees, version changes and monitoring. Score each integration on those ten before anyone prices it, and keep a separate list of what it will cost to keep running.**",
          "Published cost guides tend to lead with dollar ranges that contradict each other and do not explain where the money goes. This guide gives you no prices. It gives you a worksheet that shows *why* an integration is cheap or expensive, with links to the vendor pages where the cost actually comes from, so you can challenge a quote line by line.",
          "It sits between two other guides. [[/blogs/custom-web-application-development-cost|Estimating the cost of a whole web application]] treats integrations as one line in a wider worksheet; this page breaks that line down per integration. [[/blogs/website-api-integration|How website API integrations work]] explains REST, webhooks and authentication; this page assumes those basics and turns them into cost questions.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Score every integration separately. \"Integrations\" as one quote line hides the expensive one.",
          "Two-way sync, per-customer OAuth and unreliable webhooks are the usual reasons an integration scores high.",
          "Vendor documentation is where the cost lives: rate limits, version cadence, sandbox limits and API pricing tiers.",
          "Some vendors now charge for API access by tier, so the API itself can be a recurring line.",
          "Every integration has a running cost. Version upgrades alone mean at least one review a year for some vendors.",
          "Ask suppliers to justify each high score with a vendor link before you compare their prices.",
        ],
      },
      {
        heading: "The worksheet: ten cost drivers per integration",
        body: [
          "Use one copy of this table for each integration. For every driver, decide whether the integration is low, medium or high, write one line on why, and note the vendor page that supports the score. The descriptions below are the signals to look for, not fixed rules.",
        ],
        table: {
          headers: ["Driver", "Low", "Medium", "High", "What to check"],
          rows: [
            ["**1. Authentication**", "One API key held on your server", "OAuth for a single company account, with token refresh", "OAuth per customer: each of your users connects their own account, and tokens must be stored, refreshed and revoked per user", "The vendor's auth guide; whether tokens expire; how disconnection works"],
            ["**2. Data mapping**", "A handful of fields with the same meaning on both sides", "Dozens of fields, some transforms (dates, currencies, tax codes)", "Custom fields that differ per customer, nested records, line items, units or tax rules that do not line up", "Field list for each entity; who maintains the mapping when fields change"],
            ["**3. Sync direction**", "One way, one system is the source of truth", "One way, with occasional corrections flowing back", "Two-way, with conflict rules for records edited in both places", "Which system owns each field; what happens when both change"],
            ["**4. Volume against rate limits**", "Low volume, well inside documented limits", "Peaks (month end, sales) that approach limits; batching needed", "Bulk imports, backfills or high-frequency polling that will hit limits; limits that depend on the customer's plan", "The vendor's rate-limit page and whether limits vary by plan or tier"],
            ["**5. Webhooks and ordering**", "No webhooks, or simple events where order does not matter", "Webhooks with retries; duplicates must be ignored", "Events that can arrive late, twice or out of order and change money, stock or status", "Retry policy, ordering guarantees, signature verification"],
            ["**6. Error handling and reconciliation**", "A failed call can be retried later with no harm", "Failures need a queue and a person to review them", "Failures affect money or compliance, so a daily reconciliation between systems is needed", "Idempotency support; whether you can list records changed since a date"],
            ["**7. Sandbox fidelity**", "Full sandbox that behaves like live", "Sandbox exists but with lower limits or missing features", "No sandbox, or tests must run against a live account with real data", "The vendor's testing docs; what is mocked; sandbox limits"],
            ["**8. Vendor API fees and tiers**", "API included at no extra charge", "Access depends on the subscription plan your business is on", "Separate developer pricing based on connections or data usage, or a paid add-on for higher limits", "The vendor's developer pricing page (check, do not assume)"],
            ["**9. Versioning and deprecation**", "Stable API, long support windows", "Versions retired on a published schedule you can plan for", "Frequent versions, short windows, or breaking changes with little notice", "Versioning policy and changelog; how expired versions behave"],
            ["**10. Monitoring and alerting**", "Failures are visible in an existing dashboard", "Alerts needed; someone checks them in business hours", "Failures must page someone quickly because orders, payments or bookings stop", "Who is alerted, how fast, and what they do first"],
          ],
        },
        callout: {
          type: "tip",
          text: "If you only have time to check three drivers, check sync direction, authentication and webhooks. They change the shape of the work, while the others mostly change its size.",
        },
      },
      {
        heading: "How to fill it in",
        body: [
          "**Step 1: write the flow, not the system name.** \"Xero integration\" is not scoped. \"When an order is paid, create a sales invoice in Xero with line items, tax codes and the payment, and mark it paid\" is. One system often needs two or three flows, and each can score differently.",
          "**Step 2: answer the business columns yourself.** You know which records move, which direction, how often, and what breaks if one goes missing. That covers drivers 2, 3, 4 and 6 in rough form.",
          "**Step 3: ask your developer to score the technical drivers from the vendor's documentation.** Drivers 1, 5, 7, 8 and 9 come straight from vendor pages. Each high score should come with a link.",
          "**Step 4: mark the unknowns.** If nobody can score a driver yet, write \"unknown\" rather than guessing medium. Unknowns are what a short [[/blogs/technical-discovery-software-projects|technical discovery phase]] or a one-day spike against the hardest endpoint should resolve before a fixed quote.",
          "**Step 5: count the highs.** An integration with no highs is usually a contained piece of work. Two or more highs, or any high on sync direction plus webhooks, signals an integration that deserves its own design, its own tests and its own line in the quote.",
        ],
      },
      {
        heading: "Where the cost hides in vendor documentation",
        body: [
          "These are real examples of the vendor statements that move an integration from low to high. They are vendor documentation, current when checked on 14 October 2026, and they change, so re-read the pages for the APIs you use.",
        ],
        table: {
          headers: ["Vendor statement", "Driver it affects", "What it means for the budget"],
          rows: [
            ["Shopify releases a new API version every quarter and supports each stable version for at least 12 months", "9. Versioning", "Plan at least one upgrade review a year for each Shopify integration"],
            ["Shopify rate limits vary by API and by plan", "4. Volume", "Limits that hold on one store plan may not hold on another"],
            ["Each Meta Graph API version is guaranteed to operate for at least two years, and calls to an expired version default to the next oldest usable one", "9. Versioning", "Silent fallback means behaviour can change without an error; schedule upgrades"],
            ["Stripe's sandbox has lower rate limits than live mode, and Stripe discourages load testing against the sandbox", "7. Sandbox, 4. Volume", "Load testing needs a mocking layer, which is extra work"],
            ["Stripe does not guarantee webhook events arrive in order, and endpoints may receive the same event more than once; live-mode delivery is retried for up to three days", "5. Webhooks, 6. Reconciliation", "Duplicate detection and order-independent handling must be built and tested"],
            ["Xero moved to tiered developer pricing on 2 March 2026, with tiers based on connections and API data usage, and its terms restrict using API data to train AI models", "8. Vendor fees", "API access itself can be a recurring cost that grows with the number of connected organisations"],
            ["HubSpot API limits for private apps depend on the account's subscription tier; exceeding them returns a 429 error", "4. Volume, 8. Vendor fees", "The CRM plan you are on can decide whether a sync design works"],
          ],
        },
      },
      {
        heading: "Hypothetical example: scoring payments, accounting and CRM",
        body: [
          "**This example is hypothetical.** A founder is building a subscription web app for small firms. They need card payments through Stripe, invoices and payments posted to the company's own Xero account, and new sign-ups pushed to the sales team's HubSpot. Scored on the worksheet, the three look like this.",
        ],
        table: {
          headers: ["Driver", "Payments (Stripe)", "Accounting (Xero, company's own account)", "CRM (HubSpot, one-way)"],
          rows: [
            ["1. Authentication", "Low: server-side keys", "Medium: OAuth with token refresh for one organisation", "Low: private app token"],
            ["2. Data mapping", "Medium: plans, prices, invoices, refunds", "High: invoice lines, tax codes, payments, fees, refunds", "Low: contact and company fields"],
            ["3. Sync direction", "Medium: Stripe is the source for payments; app state follows", "Medium: one way into Xero, but corrections made in Xero must not be overwritten", "Low: one way into HubSpot"],
            ["4. Volume", "Low at launch", "Low at launch; check month-end backfills", "Low"],
            ["5. Webhooks", "High: subscription events can arrive out of order or twice", "Low: app pushes on its own schedule", "Low: no webhooks needed"],
            ["6. Reconciliation", "High: money", "High: books must match bank and Stripe payouts", "Low: a missed contact is annoying, not costly"],
            ["7. Sandbox", "Medium: good sandbox, lower limits", "Medium: demo company available; confirm features match", "Low: test account"],
            ["8. Vendor fees", "Check: payment fees, no separate API charge to confirm", "Check: developer pricing tier for one connection", "Check: limits on the current HubSpot tier"],
            ["9. Versioning", "Medium: pinned API version, planned upgrades", "Medium: follow Xero changelog", "Medium: follow HubSpot changelog"],
            ["10. Monitoring", "High: failed renewals must alert quickly", "Medium: daily check of failed postings", "Low: weekly check"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Reading the example: the CRM push is the small job. Payments and accounting each carry three highs, all around money moving correctly. A quote that prices the three as equal \"integrations\" has not been scoped. Note too that if the app later let each customer connect their own Xero, authentication would jump to high and the vendor-fee line would need re-checking.",
        },
      },
      {
        heading: "The recurring cost register",
        body: [
          "Build cost is a one-off. These lines continue for as long as the integration runs. List them per integration, give each an owner, and put them in the budget alongside hosting. Where a vendor charges, link its pricing page rather than copying a figure that may change.",
        ],
        table: {
          headers: ["Recurring item", "Trigger or frequency", "Owner", "Source to check"],
          rows: [
            ["**Vendor API access or tier**", "Monthly or yearly; rises with connections, usage or plan", "Founder or finance", "The vendor's developer pricing and plan pages"],
            ["**Version upgrades**", "On the vendor's published schedule (quarterly releases at Shopify, for example)", "Developer or supplier", "Versioning policy and changelog"],
            ["**Breaking-change fixes outside the schedule**", "When the vendor announces a change or deprecation", "Developer or supplier", "Vendor changelog or developer newsletter"],
            ["**Credential and secret rotation**", "On a set schedule and after any staff or supplier change", "Developer, with the account owner", "Vendor auth docs; your access register"],
            ["**Monitoring and alerting tools**", "Ongoing", "Developer", "Your monitoring provider"],
            ["**Failed-sync investigation**", "Each alert, plus a regular reconciliation check", "Operations, escalating to developer", "Your runbook"],
            ["**Limit increases**", "When volume grows; some vendors ask for notice (Stripe asks for at least six weeks for large increases)", "Developer", "Vendor rate-limit page"],
            ["**Re-testing after either side changes**", "Each release of your app and each vendor change", "Developer or QA", "Your integration test suite"],
          ],
        },
        callout: {
          type: "note",
          text: "Put the register into the support agreement. If a supplier builds the integration and then leaves, someone still has to apply version upgrades and answer alerts. The [[/blogs/software-vendor-handover-checklist|handover checklist]] covers what to collect so that work can move to someone else.",
        },
      },
      {
        heading: "Custom code, an iPaaS tool or a unified API?",
        body: [
          "Score the integration first, then choose how to build it. A no-code connector or iPaaS platform suits integrations that score mostly low: a ready connector exists, mapping is simple and a failed record is not costly. Custom code suits integrations with highs on sync direction, reconciliation or monitoring, where you need control over retries and audit trails. A unified API (one interface over many vendors in a category) can help when you must support many accounting or CRM systems for different customers, but it adds its own fees and limits and may not expose every field you need.",
          "Whichever you choose, the vendor's limits, webhooks and version changes still apply underneath, and connector platforms carry their own licence. Two existing guides cover the trade-off in more depth: the [[/blogs/api-integration-australia|Australian API integration guide's decision framework]] and the [[/blogs/api-integration-uae|UAE guide's comparison of point-to-point, iPaaS and integration services]]. Their reasoning is not specific to those markets. For simpler internal flows, [[/blogs/workflow-automation|workflow automation]] explains where no-code tools fit.",
        ],
      },
      {
        heading: "Using the worksheet to compare supplier quotes",
        body: [
          "Send the same filled-in worksheet to every supplier and ask them to price against it. Then check each quote against these questions.",
        ],
        checklist: [
          "Is each integration priced separately, or bundled under one \"integrations\" line?",
          "Did they change any of your scores? If so, did they explain why with a vendor link?",
          "How do they handle duplicate and out-of-order webhooks for the payment flow?",
          "What reconciliation do they propose for money-related flows, and who runs it?",
          "Is load or volume testing included, and how, given sandbox limits?",
          "Which recurring items from the register are in their support terms, and which are excluded?",
          "Who owns the vendor accounts, API keys and webhook endpoints at the end of the project?",
          "What happens to the quote if an \"unknown\" driver turns out to be high?",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Treating every integration as equal size because each \"just calls an API\".",
          "Agreeing to two-way sync without deciding which system owns each field.",
          "Testing only in a sandbox and discovering live limits, latency or data shapes after launch.",
          "Leaving API keys and OAuth apps registered under a supplier's personal account.",
          "Budgeting the build and nothing for version upgrades or failed-sync handling.",
          "Assuming API access is free because the vendor's product is already paid for.",
          "Building integrations before customers agree which ones they need.",
        ],
      },
      {
        heading: "Limits of this approach",
        body: [
          "The worksheet ranks effort and risk; it does not convert scores into money, and it should not be used as if a \"high\" were a fixed number of days. Two highs on different integrations can mean very different amounts of work.",
          "It is also not enough on its own for regulated flows. Card data, health records or payroll may bring compliance work (scope reduction, security reviews, data processing agreements) that sits outside these ten drivers. Check those requirements separately.",
          "Finally, regional systems matter. Founders in India commonly integrate gateways and accounting tools such as Razorpay, Cashfree, Tally or Zoho, while Xero and MYOB are common in Australia. The drivers are the same, but each vendor's documentation must be read afresh: do not assume one gateway's retry or limit behaviour applies to another.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Vendor documentation: Shopify: API versioning; Shopify: API rate limits; Meta: Graph API versioning; Stripe: rate limits; Stripe: receive events in your webhook endpoint; Xero: developer pricing and policy updates; HubSpot: API usage guidelines.",
          "Accessed 14 October 2026. These are vendor pages; limits, pricing tiers and version schedules change, so check the current versions before relying on them.",
        ],
      },
      {
        heading: "Conclusion: score first, then price",
        body: [
          "The question \"how much does an API integration cost?\" only has an answer once each integration is described as a flow and scored on the ten drivers. Do that before asking for quotes, keep the recurring cost register beside the build budget, and ask every supplier to justify their high scores from the vendor's own documentation. If the scoring shows several high-risk integrations, a short discovery phase to test the hardest endpoint is usually cheaper than a fixed quote padded for the unknowns.",
          "When integrations are part of a larger product, bring the scores into your [[/services/website-development|web application build]] plan so the integration lines in the overall estimate rest on something firmer than a guess.",
        ],
        cta: {
          title: "Scope your integrations",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/website-development|web applications and integrations]] and [[/services/ai-automation|automation]]. If useful, send us your list of integrations and we can talk through how each one scores before you request quotes.",
        },
      },
    ],
  },
  {
    slug: "mobile-app-launch-checklist",
    title: "Your First App Launch: A Checklist for Testing, Store Submission and Release",
    seoTitle: "First App Launch Checklist: Testing to Release",
    excerpt:
      "First app launch checklist for iOS and Android: accounts, store assets, privacy labels, TestFlight, Play closed testing, review times and release choices.",
    category: "Mobile Apps",
    banner: "appshelf",
    sceneKind: "mobile",
    bannerAlt: "An app moving through launch stages from developer accounts and store listing to testing, store review, release and post-launch monitoring",
    date: "2026-10-14",
    readingTime: "13 min read",
    relatedServiceSlugs: ["mobile-app-development"],
    relatedIndustrySlugs: ["startups", "d2c-consumer", "saas-technology"],
    relatedSlugs: ["mobile-app-release-management", "mobile-app-testing", "how-to-validate-mobile-app-idea"],
    faqs: [
      {
        q: "Do I really need 12 testers before launching on Google Play?",
        a: "If your Play developer account is a personal account created after 13 November 2023, yes. Google requires a closed test with at least 12 testers who have been opted in continuously for at least 14 days before you can apply for production access. Organisation accounts are not described in that requirement, so check the current Play Console help page for your account type.",
      },
      {
        q: "How long does App Store review take for a new app?",
        a: "Apple says App Review typically reviews at least 50% of submissions in under 24 hours and 90% in under 48 hours. A rejection restarts the clock once you resubmit, so leave room for at least one round of fixes before a fixed launch date.",
      },
      {
        q: "Can I use a staged rollout for my first Play Store release?",
        a: "No. Google states that staged rollouts can only be used for app updates, not when publishing an app for the first time. Your first production release goes to everyone in the countries you choose. Staged rollout becomes available from your first update.",
      },
      {
        q: "What screenshots does Apple require?",
        a: "When checked on 14 October 2026, Apple required at least one screenshot for iPhone with Dynamic Island (medium display) and, if the app runs on iPad, at least one for the iPad 13-inch display, with up to 10 per size in JPEG or PNG without transparency. Apple changes these sizes, so re-check its screenshot specifications page before you produce assets.",
      },
      {
        q: "Should we launch on iOS and Android on the same day?",
        a: "Only if both stores have approved the builds in advance. Use Apple's manual release option and Google's managed publishing so approved versions wait until you choose to publish. Otherwise launch on whichever store is ready first rather than holding one back for the other's review.",
      },
    ],
    content: [
      {
        heading: "What has to happen between \"the build works\" and \"live in both stores\"?",
        body: [
          "**Seven things, in this order: developer accounts and agreements, store listing assets, privacy declarations, testing tracks, store review, your release choice, and monitoring in the first days. The one that most often moves a launch date is Google Play's closed test: a new personal Play account must run at least 12 opted-in testers for 14 consecutive days before it can even apply for production. Work backwards from your launch date with that in mind, and remember that the gradual rollout tools both stores offer are for updates, not for a first release.**",
          "This is a sequencing guide for a first release. It does not repeat QA practice, which is covered in [[/blogs/mobile-app-testing|mobile app testing]], or the mechanics of shipping updates safely, covered in [[/blogs/mobile-app-release-management|release management for live apps]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Open both developer accounts early; enrolment and verification are on your critical path.",
          "On a new personal Play account, the 14-day closed test is the longest fixed wait. Start it as soon as a stable build exists.",
          "Produce screenshots from the store's current specification page, not last year's template.",
          "Give reviewers a working demo account and keep the backend switched on during review.",
          "Your first Play release cannot be staged, and Apple documents phased release for version updates. Plan for everyone getting v1 at once.",
          "Decide who watches crashes, reviews and support in the first 48 hours before you press release.",
        ],
      },
      {
        heading: "The launch checklist",
        body: [
          "Each item has a suggested owner and a lead time counted back from the day you want to be live. The lead times are planning assumptions for a small team, not store guarantees, except where a store states a figure. Roles can be the same person; the point is that every item has a name next to it.",
        ],
        table: {
          headers: ["#", "Item", "Owner", "Start by", "Notes"],
          rows: [
            ["**Accounts and agreements**", "", "", "", ""],
            ["1", "Enrol in the Apple Developer Program under the right legal entity", "Founder (account holder)", "6+ weeks before", "US$99 per membership year or local equivalent"],
            ["2", "Create the Google Play developer account (personal or organisation)", "Founder", "6+ weeks before", "US$25 one-time registration fee; account type decides whether the closed-test rule applies"],
            ["3", "Accept agreements; add tax and banking details if the app sells anything", "Founder or finance", "4+ weeks before", "Needed before you can sell or receive payouts; check each console for what is outstanding"],
            ["4", "Invite the team with the least access each person needs", "Founder", "4+ weeks before", "Keep the account holder role with the business, not a contractor"],
            ["**Builds and compliance**", "", "", "", ""],
            ["5", "Confirm build requirements: Xcode 26 / iOS 26 SDK for App Store uploads; target API 36 for new Play apps", "Developer", "4+ weeks before", "Current since 28 Apr 2026 (Apple) and 31 Aug 2026 (Google); both change yearly"],
            ["**Store listing assets**", "", "", "", ""],
            ["6", "Write name, subtitle or short description, full description, keywords and support URL", "Founder or marketing", "3 weeks before", "Apple requires a support URL that leads to real contact information"],
            ["7", "Produce screenshots, icon and Play feature graphic to current specs", "Designer", "3 weeks before", "See the asset table below; re-check specs the week you upload"],
            ["8", "Publish a privacy policy page", "Founder with legal input", "3 weeks before", "Both stores ask for a link"],
            ["**Privacy declarations**", "", "", "", ""],
            ["9", "Complete Apple's App Privacy details and Google's Data safety form, including SDK data", "Developer with founder", "3 weeks before", "Play requires Data safety before closed testing, so do it early"],
            ["10", "Confirm in-app account deletion if users can create accounts", "Developer", "3 weeks before", "Required by both stores"],
            ["**Testing tracks**", "", "", "", ""],
            ["11", "Run internal testing: TestFlight internal group, Play internal testing", "Developer and QA", "4 weeks before", "Catch crashes before reviewers or testers see them"],
            ["12", "Start the Play closed test with 12+ opted-in testers (new personal accounts)", "Founder recruits; developer uploads", "5 weeks before", "14 consecutive days, then apply for production; Google says that review usually takes seven days or less"],
            ["13", "Send a TestFlight build to external testers", "Developer", "3 weeks before", "The first external build needs App Review approval"],
            ["**Review**", "", "", "", ""],
            ["14", "Fill in review notes and a non-expiring demo account; keep the backend running", "Developer", "Submission day", "Missing logins and placeholder content are common rejection causes"],
            ["15", "Submit to App Review and Play production", "Developer", "7–10 days before", "Leave room for one rejection and resubmission"],
            ["**Release choice**", "", "", "", ""],
            ["16", "Set Apple to manual release and turn on Play managed publishing", "Developer", "Before submission", "Approved builds then wait for you; manual release on Apple must also be released per platform"],
            ["**Day-1 monitoring**", "", "", "", ""],
            ["17", "Set up crash reporting, analytics events and alert routing", "Developer", "Before external testing", "So test data proves the tools work"],
            ["18", "Name who watches crashes, store reviews and support inboxes for the first 48 hours", "Founder", "Launch week", "Agree in advance what triggers a hotfix"],
          ],
        },
      },
      {
        heading: "Work backwards from the launch date",
        body: [
          "The fixed waits are what make a launch slip, so put them on a calendar first. On Android, for a new personal account, the closed test runs for at least 14 consecutive days, and only then can you apply for production access; Google says that application review usually takes seven days or less, but can occasionally take longer. Production review comes on top, and Google notes that for some accounts it can take up to seven days or longer in exceptional cases.",
          "On iOS, Apple says it typically reviews at least 50% of submissions in under 24 hours and 90% in under 48 hours. That is quick, but a rejection means fixing, resubmitting and waiting again, and the first external TestFlight build also goes through review.",
          "**Hypothetical example: planning a launch for a two-person team.** A founder and one developer want a consumer app live on both stores. They have a stable build five weeks before the target date and a new personal Play account. Week 1: listing copy, privacy declarations and internal testing on both platforms. End of week 1: the Play closed test starts with 15 recruited testers, a few more than the minimum in case some drop out, and the first external TestFlight build goes to review. Weeks 2 and 3: testers report bugs and the developer ships fixes to both tracks. Day 15 of the test: they apply for Play production access. Week 4: they submit to App Review with manual release set. Week 5: with both approvals in hand, they publish on the same morning. If any step had slipped, the plan was to launch on iOS first rather than move the date.",
        ],
        callout: {
          type: "tip",
          text: "Recruit closed testers from the people who already said they want the product. If you validated the idea with a waitlist, as described in [[/blogs/how-to-validate-mobile-app-idea|validating a mobile app idea]], those sign-ups are your test group, and their feedback is useful rather than a formality.",
        },
      },
      {
        heading: "Store listing assets to current specifications",
        body: [
          "These are the requirements as published when checked on 14 October 2026. Apple in particular has changed which screenshot size is mandatory over time, so open the linked pages before the designer starts.",
        ],
        table: {
          headers: ["Asset", "App Store (Apple)", "Google Play"],
          rows: [
            ["**Phone screenshots**", "At least one for iPhone with Dynamic Island (medium display): 1206 × 2622 or 1179 × 2556 px portrait. Up to 10 per size. JPEG or PNG, no transparency. Smaller sizes scale down from the highest required resolution", "At least 2 to publish, up to 8 per device type; 320 to 3,840 px per side with an aspect ratio no more than 2:1. At least 4 at 1,080 px or more for recommendation eligibility"],
            ["**Tablet screenshots**", "If the app runs on iPad: at least one for iPad 13-inch, 2064 × 2752 or 2048 × 2732 px portrait", "Added per device type in Play Console; check the preview assets page for tablet rules"],
            ["**Icon**", "Supplied with the app build rather than uploaded as a listing image", "512 × 512 px, 32-bit PNG with alpha, up to 1,024 KB"],
            ["**Feature graphic**", "Not used", "1024 × 500 px, JPEG or 24-bit PNG without alpha"],
            ["**Text**", "Description up to 4,000 characters; keywords up to 100 bytes; promotional text up to 170 characters (optional); support URL and copyright required", "Short description up to 80 characters, plus app name and full description"],
            ["**Reviewer information**", "Review notes up to 4,000 bytes; a demo account that does not expire if the app needs sign-in", "Instructions and credentials in Play Console if parts of the app need sign-in"],
          ],
        },
      },
      {
        heading: "Privacy declarations, briefly",
        body: [
          "Both stores ask you to declare what data the app and its SDKs collect. Apple's App Privacy details are required for new apps and include data collected by third-party partners. Google requires the Data safety form for every app published on closed, open or production tracks, even apps that collect nothing, which is why it sits before testing in the checklist. If users can create an account, both stores require a way to delete it: Apple's guideline 5.1.1(v) asks for deletion inside the app, and Google requires an in-app path and a web link where deletion can be requested.",
          "Get an inventory of every SDK before filling in either form. The detail, including privacy manifests and regional law, is in [[/blogs/mobile-app-data-privacy|privacy and security before launch]].",
        ],
      },
      {
        heading: "Testing tracks: TestFlight and Play closed testing",
        body: [
          "TestFlight supports up to 100 internal testers from your team and up to 10,000 external testers through email invitations or public links. Internal testers must hold a role on your developer team. Before you can invite external testers, your first build must be approved by App Review for TestFlight.",
          "On Google Play, internal testing is the quick loop for your team. Closed testing is the track that matters for launch on a new personal account: at least 12 testers opted in continuously for at least 14 days, then a production access application where you answer questions about the test and your readiness. If Google judges the testing insufficient, for example because fewer than 12 testers stayed opted in, the closed test may need to continue. When you upload a build, Play's pre-launch report also runs automated checks on real devices for stability, compatibility, performance and accessibility, which is a free second opinion worth reading.",
        ],
        callout: {
          type: "note",
          text: "\"Opted in continuously\" is the part people miss. Testers who join and then leave do not count towards the 14 days. Recruit more than 12 and ask them to stay in the test until you have production access.",
        },
      },
      {
        heading: "What reviewers need from you",
        body: [
          "Apple's guideline 2.1 asks that submissions be final, with no placeholder content, tested on-device, and with demo account details included and the back-end service switched on. Apps that crash are rejected. In practice that means four things: a reviewer login that will still work days later, review notes that explain any feature that needs hardware, a location or a paid plan to see, servers that stay up and unchanged while the review is pending, and no \"coming soon\" screens. If your app needs a custom backend, the [[/blogs/mobile-app-backend-development|mobile backend guide]] explains what has to be running for reviewers to get past sign-in.",
          "If Apple rejects the build, read the cited guideline, fix that issue and resubmit, and use the review notes to explain anything the reviewer may have missed. Apple also offers an expedited review for critical bug fixes or an event you are directly associated with, which is worth knowing about for a launch tied to a date.",
        ],
      },
      {
        heading: "Release choices for a first launch",
        body: [
          "The gradual rollout tools you may have read about are update tools. Google states that staged rollouts can only be used for app updates, not when publishing an app for the first time. Apple's phased release is documented for version updates, rolling out over seven days to users with automatic updates on. So v1 reaches everyone in your chosen countries at once.",
        ],
        table: {
          headers: ["Choice", "What it does on a first release", "When to use it"],
          rows: [
            ["**Apple: release automatically**", "Goes live as soon as review approves", "You have no fixed date and want it live quickly"],
            ["**Apple: release manually**", "Waits as Pending Developer Release until you release it; Apple says it may take up to 24 hours to appear on the App Store", "You want to coordinate with Android, marketing or press"],
            ["**Apple: release after approval, no earlier than a date**", "Goes live automatically after review, but not before the date and time you set", "A fixed date with no one available to press the button"],
            ["**Google: managed publishing**", "Approved changes wait until you publish them", "Same-day launch on both stores, or launch timed to an event"],
            ["**Google: country selection**", "Limits which countries can see the app", "A soft launch in a smaller market before a wider release"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Because v1 cannot be staged, your safety net on launch day is the testing you did before it, plus a fast hotfix path. From version 1.1 onwards, use staged and phased rollouts as described in [[/blogs/mobile-app-release-management|release management]].",
        },
      },
      {
        heading: "Monitoring from day one to day fourteen",
        body: [
          "Launch day is when real devices, networks and user behaviour meet your app for the first time. Have these in place before you release.",
        ],
        checklist: [
          "Crash reporting on both platforms, with alerts to a named person; see [[/blogs/mobile-app-crash-reporting|crash reporting for mobile apps]] for setup.",
          "Analytics events for the first-run journey: install, sign-up, first key action. Check they fire in production, not just in test builds.",
          "Backend dashboards for error rates, latency and sign-ups, so you can tell an app bug from a server problem.",
          "A daily read of store reviews and the support inbox for the first two weeks, with replies to early reviewers.",
          "A written hotfix rule: what severity of bug justifies an immediate update, and who decides.",
          "A plan for the first update, using phased release on iOS and staged rollout on Play.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Opening the Play account a fortnight before launch and then discovering the 14-day closed test.",
          "Recruiting exactly 12 testers, then losing two mid-test.",
          "Registering developer accounts under a freelancer's name instead of the business.",
          "Making screenshots from an out-of-date size list.",
          "Giving reviewers a demo account that expires, or switching off the staging server they were using.",
          "Leaving Data safety and App Privacy forms until the end, then finding an SDK nobody declared.",
          "Promising a launch date publicly before either store has approved a build.",
        ],
      },
      {
        heading: "When this checklist is not enough",
        body: [
          "It covers a typical consumer or business app on the public stores. Apps in regulated categories such as health, finance or children's apps face extra review rules and documentation. Apps distributed privately to employees use different programmes. Games, apps with in-app purchases or subscriptions, and apps that rely on location, health data or background activity need extra review preparation that this guide does not cover.",
          "Store rules also move. Build requirements change each year, screenshot requirements change with new devices, and Google's testing requirements for new accounts may change. Check every linked source in the week you submit, and if you are a founder whose developer has left before submission, start with item 1: make sure the accounts are yours.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Apple: Apple Developer Program; Screenshot specifications; Platform version information; App Review Guidelines; App Review; TestFlight; App Privacy details; Release a version update in phases; Upcoming requirements.",
          "Google: Testing requirements for new personal developer accounts; Review times and managed publishing; Preview assets; Pre-launch reports; Staged rollouts; Data safety section; Account deletion requirements; Target API level requirements.",
          "Accessed 14 October 2026. Store fees, asset specifications, review times and policy deadlines change; check the current pages before you submit.",
        ],
      },
      {
        heading: "Conclusion: put the fixed waits on the calendar first",
        body: [
          "A first launch is mostly a sequencing problem. Secure the accounts in the business's name, start the Play closed test as soon as a stable build exists, prepare assets and privacy declarations from the stores' current pages, give reviewers everything they need, and hold approved builds for a release you control. Then watch the first fortnight closely, because v1 goes to everyone at once. If creators or press need the app before release, [[/blogs/app-beta-testing-creators-early-access|pre-launch access through TestFlight and Google Play testing]] covers invites, build expiry and embargoes.",
          "If the build itself is still in progress, the launch steps above belong in the plan from the start of [[/services/mobile-app-development|mobile app development]], not in the final week.",
        ],
        cta: {
          title: "Want a second pair of eyes before you submit?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/mobile-app-development|mobile app development]]. If useful, we can talk through your build, store listing and privacy declarations against this checklist before you submit.",
        },
      },
    ],
  },
];
