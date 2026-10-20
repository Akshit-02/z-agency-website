import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 4, mobile: app monetisation hub (topic 65).
 * Maps each monetisation model to the payment route each store requires, the
 * exact rule (Apple App Review Guidelines 3.1.x, Google Play Payments policy
 * sections) and the store fees in force on the date checked. No revenue
 * benchmarks (ARPU, eCPM, conversion) are given: none was found from a primary
 * source with a stated method. No ZSpace prices or client data.
 * Sources checked 2026-10-15: Apple App Review Guidelines (3.1.1, 3.1.1(a),
 * 3.1.2, 3.1.3(a)-(f), 3.1.4, 3.2.2, 5.1.2); Apple apps in the EU (terms from
 * 1 Oct 2026); Apple App Store Small Business Program; Google Play Payments
 * policy (answer 9858738); Play Console Help service fees (answer 112622) and
 * lower service fees rollout (answer 16954621: KR 31 Dec 2026, Rest of World
 * 30 Sep 2027); Android Developers Blog 24 Jun 2026; Play billing choice
 * programme (answer 17161464, via research file); Play Ads policy (answer
 * 9857753); AdMob behavioural policies (answer 2753860); AdMob consent
 * requirements for the EEA, UK and Switzerland (answer 13554116); MacDailyNews
 * 14 Aug 2026 (press report, US link-out litigation).
 */
export const founderMobilePosts4: BlogPost[] = [
  {
    slug: "mobile-app-monetisation-models",
    title: "How to Monetise a Mobile App: Subscriptions, Freemium, Ads and One-Time Payments",
    seoTitle: "How to Monetise a Mobile App: Models, Rules and Fees",
    excerpt:
      "Choose an app monetisation model by what users pay for: the payment route Apple and Google require, the exact rule, store fees as of October 2026, and ad rules.",
    category: "Mobile Apps",
    banner: "framework",
    sceneKind: "mobile",
    bannerAlt: "A framework mapping app monetisation models (paid app, one-time unlock, consumables, subscriptions, freemium, ads, physical goods, reader apps) to store payment routes and fees",
    date: "2026-10-15",
    readingTime: "16 min read",
    relatedServiceSlugs: ["mobile-app-development"],
    relatedIndustrySlugs: ["startups", "saas-technology", "media-entertainment", "gaming"],
    relatedSlugs: ["mobile-app-payments", "mobile-app-development-cost", "improve-mobile-app-retention"],
    faqs: [
      {
        q: "Do I have to use Apple's in-app purchase in my iOS app?",
        a: "For digital features, content or subscriptions used inside the app, yes, under guideline 3.1.1, unless a listed exception applies (reader apps, enterprise sales, one-to-one real-time services, free companions to paid web tools, hardware-dependent features). For physical goods and services used outside the app, Apple requires the opposite: a method other than in-app purchase, such as Apple Pay or card entry (3.1.3(e)). On the US storefront you may also add buttons and links to buy on your website.",
      },
      {
        q: "Can I use Stripe or Razorpay to sell a subscription inside my app?",
        a: "Not as the in-app checkout for digital content in most regions. Both stores require their own billing for digital subscriptions, with exceptions only through enrolled programmes in eligible countries (Google Play Payments policy Sections 8 and 9; Apple's link entitlements in specific storefronts and the US storefront rules). A gateway is the right tool for physical goods, real-world services and, on Apple, one-to-one real-time services.",
      },
      {
        q: "Is freemium or a subscription better for a new app?",
        a: "They are not alternatives: freemium is a free entry point, and the paid part is usually either a one-time unlock or a subscription. Choose a subscription only if the app delivers ongoing value, because Apple requires that for auto-renewable subscriptions (3.1.2). If the value is a one-off tool, a one-time unlock is easier to justify to users and to review.",
      },
      {
        q: "Can an app make money from ads alone?",
        a: "It can, but no store rule or published benchmark tells you it will pay for your app, and we do not quote revenue figures. Ads suit apps that people open often for short sessions. Apple rejects apps designed predominantly to display ads (3.2.2), Google Play bans full-screen ads that cannot be closed after 15 seconds, and personalised ads need consent in the EEA, UK and Switzerland plus ATT permission on iOS.",
      },
      {
        q: "Does Google Play have a reader-app exception like Apple's?",
        a: "Not that we could find. Apple's guideline 3.1.3(a) lets reader apps (magazines, newspapers, books, audio, music, video) give access to content bought elsewhere. Google Play's Payments policy, checked on 15 October 2026, contains no equivalent clause, so an Android reader app that sells digital content inside the app needs Google Play Billing or an enrolled alternative-billing or external-link programme where available.",
      },
      {
        q: "When do Google Play's lower fees apply in India, the UAE and Singapore?",
        a: "Google's rollout page lists \"Rest of World\" for 30 September 2027. India, the UAE and Singapore are not named, but they are not in the earlier groups (US, UK and EEA from 30 June 2026; Australia and Japan from 30 September 2026; South Korea from 31 December 2026). Until then, the existing 15% tier rates apply: 15% on the first US$1M, 30% above it, and 15% on auto-renewing subscriptions.",
      },
      {
        q: "Is it monetize or monetise?",
        a: "Both spellings mean the same thing. \"Monetise\" is British English and \"monetize\" is American. The rules and fees in this guide apply wherever your users are, subject to the regional differences noted.",
      },
    ],
    content: [
      {
        heading: "How should you monetise a mobile app?",
        body: [
          "**Start from what the user is paying for, not from which model sounds most lucrative. Digital value used inside the app (a feature unlock, credits or a subscription) must normally be sold through Apple's in-app purchase and Google Play Billing, and the store takes a commission. Physical goods and real-world services must be sold through your own payment provider. Ads cost the user nothing but bring their own rules on consent, tracking and placement.** Once you know what is being sold and how often people use the app, the model, payment route and fees mostly follow.",
          "Decide this before you scope the build. The model sets the payment plumbing (store billing, a gateway, or both), the backend you need to track who has paid for what, the review risks, and whether you need a consent tool and Apple's App Tracking Transparency prompt. This guide maps each model to the store rule that governs it and the fees as checked on 15 October 2026. For how payments are built, see [[/blogs/mobile-app-payments|mobile app payment integration]]; for the full regional fee table in budget terms, see [[/blogs/mobile-app-development-cost|the cost guide's store commission section]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Digital features, content, credits and subscriptions used in the app: Apple in-app purchase (3.1.1) and Google Play Billing (Payments policy Sections 1 and 2), with limited exceptions.",
          "Physical goods and services used outside the app: you must not use store billing. Use Apple Pay, Google Pay or a card gateway (Apple 3.1.3(e); Play Section 3).",
          "Subscriptions on iOS must give ongoing value and last at least seven days (3.1.2). Do not subscribe-wrap a one-off tool.",
          "Store fees changed in 2026 and differ by the user's region. Google's lower fees reach \"Rest of World\" markets only on 30 September 2027.",
          "Ads need consent for personalised ads in the EEA, UK and Switzerland, and ATT permission for tracking on iOS. Never click your own ads.",
          "We give no revenue benchmarks: none we found has a primary source and a stated method.",
        ],
      },
      {
        heading: "Each model, its payment route and the rule behind it",
        body: [
          "The table below is the core of this guide. Apple's references are to the App Review Guidelines; Google's are to the sections of the Google Play Payments policy. Fees are list rates as published by Apple and Google and checked on 15 October 2026; they change, and the regional detail is in the next section.",
        ],
        table: {
          headers: ["Model", "Apple: required route and rule", "Google Play: required route and policy section", "Store fees (checked 15 Oct 2026)"],
          rows: [
            [
              "**Paid app** (pay to download)",
              "App Store price, charged by Apple. If you later switch to a subscription, 3.1.2 says not to take away primary functionality existing users already paid for.",
              "Google Play Billing is required for paid downloads (Section 1).",
              "Apple: 15% for enrolled Small Business Program members (up to US$1M prior-year proceeds); EU terms below. Google: service fee plus billing fee by region, see next section.",
            ],
            [
              "**One-time IAP or unlock** (full version, premium feature)",
              "In-app purchase required to unlock features or a full version (3.1.1). Licence keys, QR codes and similar unlocks are not allowed. Provide a restore mechanism.",
              "Google Play Billing required for in-app digital features and content, including an ad-free version (Section 2).",
              "As for paid apps. Google: 10% service fee on the first US$1M of annual earnings in rollout regions, plus 5% billing fee when Play Billing is used.",
            ],
            [
              "**Consumables** (credits, coins, extra lives)",
              "In-app purchase (3.1.1). Purchased credits and in-game currencies may not expire.",
              "Google Play Billing (Section 2). Virtual currency may only be used in the app or game where it was bought (Section 5). Disclose loot-box odds before purchase (Section 7).",
              "As for one-time IAP.",
            ],
            [
              "**Subscriptions** (auto-renewing)",
              "In-app purchase (3.1.1). Must give ongoing value, last at least seven days and work across the user's devices (3.1.2).",
              "Google Play Billing (Section 2).",
              "Google: 10% service fee on all auto-renewing subscriptions in rollout regions, plus 5% billing fee with Play Billing; 15% in regions not yet rolled out. Apple EU: 15% after the subscriber's first year on IAP.",
            ],
            [
              "**Freemium** (free app, paid upgrade)",
              "Free download; the paid part follows the one-time IAP or subscription rules above (3.1.1, 3.1.2).",
              "Free download; the paid part needs Play Billing (Section 2).",
              "Commission only on the paid upgrade, at the IAP or subscription rate.",
            ],
            [
              "**Ads** (banner, interstitial, rewarded)",
              "No store billing. Not allowed: apps designed predominantly to display ads, or artificial impressions and clicks (3.2.2(iii)). Rewarded actions such as watching an ad are permitted (3.2.2(x)). Tracking needs ATT permission (5.1.2).",
              "No store billing. Play Ads policy applies: no unexpected or uncloseable full-screen ads, no forced ad clicks.",
              "No store commission on ad revenue. The ad network pays you under its own terms, which are outside this guide.",
            ],
            [
              "**Physical goods and services** (delivery, bookings, tickets, gym access)",
              "Must use a method other than in-app purchase, such as Apple Pay or card entry (3.1.3(e)). Real-time one-to-one services may also use other methods (3.1.3(d)); one-to-few and one-to-many must use IAP.",
              "Play Billing must not be used for physical goods, physical services, bill payments, peer-to-peer payments, auctions or tax-exempt donations (Section 3).",
              "No store commission. Your payment provider's fees apply.",
            ],
            [
              "**Reader apps** (magazines, newspapers, books, audio, music, video)",
              "May give access to content or subscriptions bought elsewhere and offer free-tier sign-up and account management (3.1.3(a)). An informational link to create or manage an account needs the External Link Account Entitlement outside the US storefront.",
              "No reader-app exception in the Payments policy. Selling digital content in the app needs Play Billing, or an enrolled alternative billing or external-link programme where eligible (Sections 8 and 9).",
              "No Apple commission on purchases made outside the app. On Android, normal Play rates for in-app sales.",
            ],
          ],
        },
        callout: {
          type: "note",
          text: "Other Apple exceptions worth knowing: apps sold only to organisations for their employees or students may skip IAP, but \"consumer, single user, or family sales must use in-app purchase\" (3.1.3(c)); content bought on other platforms can be accessed if it is also offered as an in-app purchase (3.1.3(b)); free companions to paid web tools need no IAP if there is no purchasing or call to action in the app (3.1.3(f)); hardware-dependent features may unlock without IAP (3.1.4).",
        },
      },
      {
        heading: "Store fees as of 15 October 2026",
        body: [
          "Commission is charged on purchases through the store, and both stores restructured their fees during 2026. The rate now depends on where the user is. The headline changes, each with its effective date:",
        ],
        table: {
          headers: ["Change", "Effective", "What it means"],
          rows: [
            [
              "Google Play new fee structure: US, UK, EEA",
              "30 June 2026",
              "Service fee of 10% on the first US$1M of annual earnings, whichever billing path you use, and 10% on all auto-renewing subscriptions. A 5% billing fee applies only to purchases through Google Play Billing. Above the first US$1M, other transactions follow Google's rate table.",
            ],
            [
              "Google Play: Australia, Japan",
              "30 September 2026",
              "Same structure, with a 5% billing fee in Australia and Japan.",
            ],
            [
              "Google Play: South Korea",
              "31 December 2026",
              "Listed on Google's rollout schedule. Billing fee details for other regions are still to be announced.",
            ],
            [
              "Google Play: \"Rest of World\" (including India, the UAE and Singapore)",
              "30 September 2027",
              "Until then, the existing 15% tier: 15% on the first US$1M, 30% above it, 15% on auto-renewing subscriptions. Google's page does not name India; it falls under \"Rest of World\". Approved alternative billing in India and South Korea is charged at the Play Billing rate reduced by 4%.",
            ],
            [
              "Apple EU business terms",
              "1 October 2026",
              "App Store apps: 26% via in-app purchase (15% for Small Business Program and other programme members, and for subscriptions after year one); 20% (or 10%) for alternative payment processing in the app; 15% (or 10%) store services commission on out-of-app offers, on sales within 7 days of the link tap. Apps distributed outside the App Store pay a 5% Core Technology Commission.",
            ],
            [
              "Apple US storefront link-outs",
              "Unresolved in court",
              "Apps on the US storefront may include buttons and links to buy elsewhere (3.1.1(a)). Apple currently charges no commission on those purchases, but the district court is still deciding what rate, if any, Apple may charge, and the US Supreme Court is reviewing the contempt ruling. Apple has proposed 15%, 10% and 5% depending on programme; no rate is set (MacDailyNews, 14 August 2026, press report).",
            ],
            [
              "Apple Small Business Program (outside the EU terms above)",
              "Ongoing",
              "15% on paid apps and in-app purchases for developers with up to US$1M proceeds in the prior calendar year; you must enrol. Above the threshold, the standard commission for the storefront applies.",
            ],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Fees change: check the date. Every figure here was checked on 15 October 2026 against Apple's and Google's own pages. Google's rollout continues into 2027, Apple's EU terms changed on 1 October 2026, and the US link-out rate is still before the courts. Before you set prices or approve a business case, re-open the linked pages and note the date you checked them.",
        },
      },
      {
        heading: "Billing choice and link-outs: where you can avoid store billing",
        body: [
          "Outside the exceptions in the table, steering users to pay elsewhere is restricted. Apple prohibits buttons, links and calls to action to other purchase methods in all storefronts except the US, unless you hold a specific entitlement in an eligible storefront (3.1.1(a)). Google prohibits leading users to non-Play payment methods (Section 4) except through its alternative billing and external-link programmes, which require enrolment and are limited to eligible countries (Sections 8 and 9).",
          "Google's billing choice programme lets developers offer alternative billing or external web links alongside Play Billing in the UK and EEA from 30 June 2026, and in Australia and Japan from 30 September 2026. Google says there are no changes to its US programmes at this time. Alternative billing avoids the 5% billing fee, not the service fee, and you take on payment processing, refunds and transaction reporting.",
          "For most new apps the practical answer is to build store billing first and treat link-outs as a later optimisation for specific markets, once you know your volumes and have checked the current terms.",
        ],
      },
      {
        heading: "Ads: the rules that catch new apps",
        body: [
          "Ads look like the simplest model because users pay nothing. The work is in compliance. These rules come straight from Apple's and Google's policy pages:",
        ],
        checklist: [
          "**Never click your own ads.** AdMob says publishers \"may not click their own ads or use any means to inflate impressions and/or clicks artificially\", and testing your own ads by clicking them is not allowed. Use test ads during development.",
          "**No paying users to click or view.** Google ads may not be placed on apps that promise payment or incentives to users who click on or view ads. Rewarded ad units have their own separate policy.",
          "**Full-screen ads must be closeable.** Google Play does not allow \"full screen interstitial ads of all formats that are not closeable after 15 seconds\". Opt-in rewarded ads are excluded. Ads must not appear in unexpected ways, and an app cannot force a user to click an ad.",
          "**Not an ad container.** Apple rejects apps \"designed predominantly for the display of ads\" and artificial impressions or click-throughs (3.2.2(iii)).",
          "**Consent in the EEA, UK and Switzerland.** Google requires a certified consent management platform integrated with the IAB TCF when serving personalised ads to users in the EEA and UK (from 16 January 2024) and Switzerland (from 31 July 2024). Google's own UMP SDK is one option.",
          "**ATT on iOS.** \"You must receive explicit permission from users via the App Tracking Transparency APIs to track their activity\" (5.1.2), and you cannot make functionality or rewards depend on allowing tracking. Personalised ads that use cross-app data need this permission.",
          "**Plan the prompts.** In the EEA and UK, an iOS user may see both a consent form and the ATT prompt. They are separate requirements, so decide their order and wording deliberately. Our [[/blogs/mobile-app-analytics|mobile app analytics guide]] covers ATT and measurement.",
        ],
      },
      {
        heading: "Choosing a model by user job and usage frequency",
        body: [
          "Two questions do most of the work. What job does the user hire the app for, and is that value one-off or ongoing? And how often will they open it? Use the matrix below as a starting point, then check the payment rule for your answer in the table above.",
        ],
        table: {
          headers: ["User job and value pattern", "Usage frequency", "Model that usually fits", "Watch out for"],
          rows: [
            ["A tool that solves one problem well (scanner, calculator, converter)", "Occasional", "Paid app or freemium with a one-time unlock", "A subscription is hard to justify and Apple expects ongoing value (3.1.2)."],
            ["Ongoing content or service that keeps changing (lessons, workouts, news, cloud sync)", "Weekly or daily", "Freemium with a subscription", "You must keep delivering value; churn is the main risk. See retention below."],
            ["Progress or boosts inside a game or community app", "Daily, short sessions", "Consumables, often with rewarded ads", "Credits cannot expire on iOS; disclose loot-box odds on Play."],
            ["Free utility or content with broad reach and short visits", "Frequent, short", "Ads, optionally with a paid ad-free unlock", "Consent and ATT work, ad placement rules, and Apple's 3.2.2 limit on ad-led apps."],
            ["Ordering, booking or buying something in the real world", "Varies", "Your own payment provider (physical goods and services)", "Store billing is not allowed here; you carry the gateway, fraud and refund work."],
            ["Live one-to-one service (tutoring, consultation, personal training)", "Scheduled sessions", "Gateway payments on iOS under 3.1.3(d)", "Group sessions must use IAP on iOS. Google's Section 3 does not list this case, so confirm the Android route before you build."],
            ["Software sold to organisations for their staff or students", "Work hours", "Contract sold outside the app (Apple 3.1.3(c))", "Any consumer or individual sale in the app must use IAP."],
            ["Access to magazines, books, music or video bought on your website", "Frequent", "Reader app on iOS (3.1.3(a)); Play Billing or an enrolled programme on Android", "No reader-app exception on Google Play."],
          ],
        },
      },
      {
        heading: "Hypothetical example: a home workout app",
        body: [
          "Hypothetical example: a founder plans a home workout app with a free set of beginner sessions, a monthly and annual plan for the full library and new programmes each month, and bookable in-person classes at partner studios. No real company or figures are involved; the prices below are invented to show the arithmetic.",
          "**The subscription** delivers ongoing value (new programmes every month), so it meets 3.1.2 and is sold through Apple in-app purchase and Google Play Billing. **The in-person classes** are services consumed outside the app, so they must not go through store billing: Apple 3.1.3(e) requires another method such as Apple Pay or card entry, and Google's Section 3 excludes physical services and gym memberships from Play Billing. The app therefore needs both store billing and a payment gateway, plus a backend that records each user's subscription status from both stores.",
          "**The fee arithmetic** for a hypothetical £10 monthly subscription bought through Google Play Billing by a UK user in October 2026: 10% service fee plus 5% billing fee, so £1.50 to Google and £8.50 before tax and other costs. The same sale by a user in India would carry the 15% subscription rate until the \"Rest of World\" change on 30 September 2027. On iOS, a developer enrolled in the Small Business Program pays 15% outside the EU terms. A £40 class booking paid by card pays no store commission, only the gateway's fees.",
          "**What the founder decides not to do:** no ads, because the paying audience is buying focus and an ad-free experience, and adding ads would bring consent and ATT work for little benefit.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Routing a digital purchase through Stripe, Razorpay or another gateway inside the app and being rejected under Apple 3.1.1 or Play Section 2.",
          "Putting physical goods or real-world services through store billing, which both stores prohibit.",
          "Wrapping a one-off tool in a subscription. Apple's 3.1.2 requires ongoing value, and users notice.",
          "Choosing the model after the build, then adding receipt validation, entitlement tracking and restore flows as rework.",
          "Building a business case on one fee rate when your users are spread across regions with different rates and dates.",
          "Adding an ad SDK without a consent tool for the EEA, UK and Switzerland, or without planning the ATT prompt.",
          "Clicking your own live ads to \"check they work\" instead of using test ads.",
          "Assuming Apple's reader-app or person-to-person exceptions also exist on Google Play.",
        ],
      },
      {
        heading: "Risks and limits",
        body: [
          "**When a subscription is the wrong choice:** the app solves a one-off problem, usage is occasional, or you cannot commit to adding value regularly. Churn will erode the base, and Apple may reject a subscription that does not deliver ongoing value. A one-time unlock is the honest alternative.",
          "**When ads are the wrong choice:** usage is infrequent, the audience is small or niche, the app handles sensitive tasks (health, money, children), or the experience depends on focus. Apps for children also fall under Google Play's separate Families ads requirements.",
          "**When store billing cannot be avoided:** in most regions, for digital goods. Link-outs and alternative billing are real options only in specific markets and programmes, and the US position may change again when the courts rule.",
          "**What this guide does not cover:** tax, consumer law on subscriptions and cancellations, or ad-network revenue terms. It also gives no revenue or conversion benchmarks, because we found none from a primary source with a stated method. Model your own numbers from a small launch instead, and measure them; [[/blogs/improve-mobile-app-retention|improving mobile app retention]] matters for every model that depends on repeat use.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Apple: App Review Guidelines (3.1.1, 3.1.1(a), 3.1.2, 3.1.3, 3.1.4, 3.2.2, 5.1.2); Apps in the EU: business terms from 1 October 2026; App Store Small Business Program.",
          "Google Play: Payments policy; Service fees; Understanding Google Play's lower service fees (rollout schedule); Android Developers Blog: expanded billing choice and lower fees (24 June 2026); Billing choice programme; Ads policy.",
          "AdMob: Behavioural policies; Consent management requirements for the EEA, UK and Switzerland.",
          "US litigation: MacDailyNews, 14 August 2026 (press report).",
          "Accessed 15 October 2026. Store fees, programmes and policies change, and the US link-out commission is still in litigation; check the current pages before you rely on them.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Pick the model from the user's job and how often they use the app, then let the store rules decide the payment route: store billing for digital value, your own provider for the physical world, and ads only where frequent use and the compliance work make sense. Write down the fee rate for each region you will sell in, with the date you checked it, and set a reminder for the changes already scheduled: South Korea on 31 December 2026 and Google's \"Rest of World\" rollout on 30 September 2027.",
          "Next steps: list what users will pay for; place each item in the model table; check the regional fees; then scope the billing, entitlement and consent work with your build team. The [[/blogs/mobile-app-development-cost|mobile app cost guide]] shows where these choices land in the budget, and [[/services/mobile-app-development|our mobile app development service]] page explains how we approach builds.",
        ],
        cta: {
          title: "Choosing a model before you scope the build?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/mobile-app-development|mobile app development]]. If useful, we can talk through your model and map it to the payment routes, store rules and backend it needs.",
        },
      },
    ],
  },
];
