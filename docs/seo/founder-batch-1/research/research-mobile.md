# Mobile topic research (topics 5–8) for ZSpace Labs

Checked 14 October 2026. Research method and limits:
- The web search tool is US-based, so the SERP observations below show US results. India, UAE, Australia, UK and Singapore SERPs were not observed and may differ, especially for cost queries, where local agencies usually rank.
- Reddit (reddit.com) cannot be reached by this tool through either search or fetch. That leaves r/startups, r/androiddev and r/iOSProgramming unverified. Forum evidence below comes from Hacker News and Indie Hackers instead. Before publishing, someone should manually confirm Reddit threads.
- Labels: [Official] = platform or vendor documentation for that platform's own product. [Industry] = press, court or third-party reporting. [Vendor] = commercial pricing page. [Inference] = our reasoning, not a sourced fact.
- Some Play fee numbers only appear in image tables. Where a fetch could not read them, I say so. No numbers here were invented.

---

## Topic 5: Mobile app or mobile-friendly website first?

**1. Founder's problem.** The founder has a limited budget and wants users on phones. They're afraid of building "the wrong thing": either an app nobody downloads, or a website that feels second-rate next to competitors' apps. Underneath, the real question is how to reach mobile users with the least sunk cost before demand is proven.

**2. Intent and stage.** Informational and comparative, early consideration (pre-scoping). The founder hasn't committed to a build type yet, which makes this a high-leverage moment to be the advisor.

**3. Queries.** Primary query: "should my startup build an app or a website first". Related queries: "mobile app vs mobile website for startup", "PWA vs native app for MVP", "do I need an app for my startup", "web app first then mobile app", "can a PWA send push notifications on iPhone".

**4. Evidence the question is asked.**
- Ask HN: Should I build a web or a mobile app for my MVP? https://news.ycombinator.com/item?id=34298389
- Ask HN: Should we go with mobile or web app first? https://news.ycombinator.com/item?id=23572572
- Ask HN: React Native or iOS Native and responsive web app? https://news.ycombinator.com/item?id=18355812
- These threads are 2018–2023, so the question is long-running and evergreen. No Reddit threads could be verified (tool blocked).

**5. Current top content (US SERP) and gaps.**
- https://topflightapps.com/ideas/mobile-app-vs-website/
- https://www.creolestudios.com/mobile-app-vs-mobile-website/
- https://www.lowcode.agency/blog/web-app-vs-mobile-app-first
- https://asperbrothers.com/blog/mobile-app-mvp-vs-web-app-mvp/
- https://echai.ventures/startingup/build-mvp/should-my-mvp-be-a-mobile-app-or-a-web-app-my-users-are-mostly-on-phones-in-smaller-indian-cities (an India-specific angle that ranks)

Gaps:
- Pages throw around unsourced cost claims such as "PWA costs 70% less".
- None gives the concrete iOS constraints that decide the question. For example, iOS web push only works for Home Screen web apps (iOS 16.4+).
- None counts the store-side friction. A new personal Google Play account must run a 12-tester, 14-day closed test, and App Review has its own timelines.
- None lays out a staged path (web, then PWA, then app) with explicit triggers for when to move up a stage.

**6. Buyer potential.** Medium to high. These readers are pre-build founders who will need either a web build or an app, and ZSpace sells both. Unlike pure app shops, ZSpace has no incentive to push the app, so neutral advice reads as credible.

**7. Original contribution (no client claims).**
- A "trigger list" decision table. Move to a store app when the core value needs background location or Bluetooth, reliable push on iOS without a Home Screen install, in-app purchases, offline-first data, or store discovery.
- A "store tax" box. It would list Apple's US$99 per year fee, Google's US$25 one-time fee, the Play closed-test gate, and SDK upgrade deadlines. A website carries none of these.
- A "what we would ship in week 1 versus month 3" path, framed as a recommendation rather than a case study.

**8. Service page and CTA.** Primary: /services/mobile-app-development. Secondary: the web development service page. CTA: "Not sure whether you need an app yet? Book a 30-minute scoping call. We'll tell you if a web build is enough."

**9. Agree, with a tweak.** Updating /blogs/pwa-vs-native-app (973 words) is right; a new post would cannibalise it and /blogs/ecommerce-mobile-app-vs-mobile-website. Two additions:
- Add a "Should a startup start with the web?" H2, plus an FAQ entry targeting the "app or website first" wording.
- Cross-link the ecommerce post for the commerce-specific angle. Give /blogs/progressive-web-app-development the "how to build" intent, not "whether to build".

**10. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| iOS/iPadOS 16.4 added Web Push for Home Screen web apps. Permission requires a user gesture. (WebKit blog, 16 Feb 2023) | https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/ | 2026-10-14 | [Official] |
| web.dev defines PWAs as "web apps built and enhanced with modern APIs to deliver enhanced capabilities, reliability, and installability" | https://web.dev/learn/pwa/ | 2026-10-14 | [Official] |
| Apple Developer Program costs 99 USD per membership year, or local currency where available. Fee waivers exist for eligible nonprofits, accredited educational institutions and government entities | https://developer.apple.com/programs/whats-included/ | 2026-10-14 | [Official] |
| Google Play developer registration is a US$25 one-time fee | https://support.google.com/googleplay/android-developer/answer/6112435 | 2026-10-14 | [Official] |
| Personal Play accounts created after 13 Nov 2023 need a closed test with at least 12 testers opted in continuously for at least 14 days before applying for production | https://support.google.com/googleplay/android-developer/answer/14151465 | 2026-10-14 | [Official] |
| A website avoids store review, store fees and SDK deadlines | (derived from the rows above) | — | [Inference] |

Regional note: India skews heavily to Android and low-storage devices, so the web-first case is stronger there. This is [Inference]; no share data was verified. Cite StatCounter only after checking it.

---

## Topic 6: Native vs cross-platform, how should founders choose?

**1. Founder's problem.** Agencies are pitching conflicting stacks (Flutter, React Native, native, KMP). The founder can't judge the technical claims and is afraid of a costly rewrite later.

**2. Intent and stage.** Comparative/evaluative, mid-funnel. The founder has usually decided to build an app and is now assessing vendors and stacks.

**3. Queries.** Primary query: "native vs cross-platform app development". Related queries: "React Native vs Flutter 2026", "is React Native good for startups", "Kotlin Multiplatform vs Flutter", "should I build native iOS first", "Expo vs bare React Native".

**4. Evidence the question is asked.**
- Ask HN: Flutter or React Native? https://news.ycombinator.com/item?id=40047056
- Ask HN: Flutter vs. React Native vs. Swift/Kotlin. https://news.ycombinator.com/item?id=37282097
- Ask HN: React Native or Flutter when the back end is Node? https://news.ycombinator.com/item?id=49881846 (recent)
- HN discussion, "why Expo over Flutter?": https://news.ycombinator.com/item?id=42735370
- Reddit: unverified (tool blocked).

**5. Current top content and gaps.**
- https://www.sparkouttech.com/native-vs-cross-platform/
- https://moodup.team/native-vs-cross-platform-in-2026-what-should-you-choose/
- https://forasoft.com/blog/article/native-or-cross-platform-application-213
- https://www.perfectiongeeks.com/blogs/native-vs-cross-app-development
- https://dev.to/devin-rosario/native-vs-cross-platform-mobile-app-development-in-2026-4gbd (low quality)

Gaps:
- Version references are stale. One page cites "React Native 0.76+ and Flutter 3.24+", but RN is at 0.87.
- Statistics are unsourced, for example "SwiftUI in ~65% of new apps".
- Few pages link to the official stability matrices. Almost none explain that store SDK deadlines apply whatever the framework.

**6. Buyer potential.** High. These are vendor-evaluating founders, and the post sits close to the service page.

**7. Original contribution.**
- ZSpace's existing post already has a good shared-vs-platform-specific table.
- Add a dated "framework status" box with official links (below), clearly labelled "as of [date]".
- Add questions founders should ask any agency, e.g. "Which RN/Expo version will you start on, and who handles the annual Xcode/target-SDK upgrade?"

**8. Service page and CTA.** /services/mobile-app-development. CTA: "Get a stack recommendation, with shared vs platform-specific work estimated separately."

**9. Agree, keep it, and do a citation pass.** I read the live source (src/lib/blog-data-mobile.ts, around line 665). It is current on several points:
- Xcode 26 since 28 Apr 2026
- API 36 from 31 Aug 2026
- Compose Multiplatform iOS stable since May 2025
- RN renders native components

What the citation pass should do:
- Link the claims above to their official sources.
- Add the RN New Architecture status: default since 0.76, and 0.82 is the first release running entirely on it.
- Add the RN docs' recommendation of a framework (Expo).
- Add Flutter Impeller as the only renderer on iOS.
- Mention the API 36 extension option to 1 Nov 2026.
- Note that Kotlin/Wasm web is still Beta.

Don't change the slug. Also confirm that /blogs/flutter-vs-react-native carries the same version facts.

**10. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| New Architecture enabled by default from RN 0.76 (23 Oct 2024). Legacy Architecture frozen in 0.80 (12 Jun 2025). 0.82 (8 Oct 2025) is "the first release that runs entirely on the New Architecture". Legacy components being removed in 0.84 (11 Feb 2026, Hermes V1 default) | https://reactnative.dev/blog | 2026-10-14 | [Official] |
| Latest RN: 0.87 (11 Aug 2026), with Node 22, AGP 9 and Kotlin 2.0+ minimums and experimental SwiftPM. Full removal of legacy code is not confirmed | https://reactnative.dev/blog | 2026-10-14 | [Official] |
| "If you're building a new app with React Native, we recommend using a Framework" (Expo is named) | https://reactnative.dev/docs/environment-setup | 2026-10-14 | [Official] |
| Expo SDK 57 released 30 Jun 2026. SDK 58 beta out 15 Sep 2026. The RN version mapping was not verified on the changelog page | https://expo.dev/changelog | 2026-10-14 | [Official] |
| Impeller is "the only supported rendering engine on iOS with no ability to switch to Skia". Default on Android API 29+ since Flutter 3.27 | https://docs.flutter.dev/perf/impeller | 2026-10-14 | [Official] |
| KMP core: Android, iOS, desktop and server are Stable, Kotlin/Wasm web is Beta. Compose Multiplatform UI: Android, iOS and desktop are Stable, web (Wasm) is Beta | https://kotlinlang.org/docs/multiplatform/supported-platforms.html | 2026-10-14 | [Official] |
| Compose Multiplatform 1.8.0 (May 2025) declared iOS "Stable and Production-Ready" | https://blog.jetbrains.com/kotlin/2025/05/compose-multiplatform-1-8-0-released-compose-multiplatform-for-ios-is-stable-and-production-ready/ | 2026-10-14 (via search snippet) | [Official] |
| Since 28 Apr 2026, uploads must be built with Xcode 26 / iOS 26 SDK. From 9 Sep 2026, iOS/iPadOS apps must target iOS 13 or later | https://developer.apple.com/news/upcoming-requirements/ | 2026-10-14 | [Official] |
| From 31 Aug 2026, new apps and updates must target API 36 (Android 16). Extensions can be requested to 1 Nov 2026. Existing apps below API 35 stop being shown to new users on newer OS versions | https://developer.android.com/google/play/requirements/target-sdk | 2026-10-14 | [Official] |
| "Most business apps are well served by cross-platform" | (existing post's opinion) | — | [Inference] |

Not verified, so don't use: SwiftUI adoption percentages and Flutter/RN "market share" figures seen on competitor pages.

---

## Topic 7: How much does it cost to build an iOS and Android app in 2026?

**1. Founder's problem.** The founder needs a number to raise, budget or approve against. Online ranges vary 10x, which makes them distrust every quote. They also don't know which costs recur.

**2. Intent and stage.** Commercial investigation, mid-to-late funnel. Often the founder is comparing quotes in hand.

**3. Queries.** Primary query: "how much does it cost to build an app in 2026". Related queries: "app development cost India", "iOS and Android app cost", "app maintenance cost per year", "Apple developer account fee", "Google Play fee 2026", "App Store commission 15%".

**4. Evidence the question is asked.**
- Indie Hackers, "How much does it cost to build an app?": https://www.indiehackers.com/post/how-much-does-it-cost-to-build-an-app-5bad73eaec
- Indie Hackers, "Cost to develop an app?": https://www.indiehackers.com/post/cost-to-develop-an-app-d77dbdbcee
- Ask HN: How much does it cost to outsource iPhone app development? https://news.ycombinator.com/item?id=1251155
- Recent HN complaint about store fees and review delays: https://news.ycombinator.com/item?id=49857980
- Reddit: unverified.

**5. Current top content (US SERP) and gaps.**
- https://lovable.dev/guides/how-much-does-it-cost-to-make-an-app (AI-builder vendor, nudges toward its own tool)
- https://engineerbabu.com/blog/how-much-does-it-cost-to-build-an-app/ (India agency, with ranges)
- https://morsoftware.com/blog/how-much-does-it-cost-to-build-a-mobile-app
- https://sticklight.com/learn/cost-to-make-an-app-2026
- https://www.alexcloudstar.com/blog/how-much-does-it-cost-to-build-an-app-2026

Gaps:
- Every page offers ranges with no methodology. The often-cited "Clutch $50k–$500k" figure is secondhand.
- Almost none reflects the 2026 fee changes: the Google Play split fee from 30 Jun 2026, Apple's new EU terms from 1 Oct 2026, and US link-out rules.
- None ties maintenance cost to the actual annual Xcode and target-SDK deadlines.

**6. Buyer potential.** Highest of the four topics, since these are budget-holding founders. The risk is tyre-kickers looking for a number. Answering with a cost model rather than a number helps qualify leads.

**7. Original contribution (no invented averages).**
- Build a "cost drivers you can verify" structure:
  1. One-off store and account costs (exact official fees).
  2. Revenue-share costs, using a by-region table of commission rules. Few competitors have this.
  3. Mandatory yearly upgrade work, with a calendar: Apple's April Xcode deadline and Google's 31 August target-API deadline.
  4. Backend running costs, with free-tier boundaries from Firebase and Supabase pricing pages, labelled [Vendor].
  5. A scope worksheet (screens, roles, integrations, payments, offline) the founder fills in before asking for quotes.
- ZSpace could publish its own pricing approach (e.g. "we quote shared and platform-specific work separately"). Only do this if the business approves, and never as market averages.

**8. Service page and CTA.** /services/mobile-app-development. CTA: "Send us your filled-in scope sheet and we'll return an itemised estimate." A downloadable worksheet would be a good lead magnet.

**9. Agree, update it.** At 710 words with no numbers it is thin. Rewrite around verifiable fee and maintenance facts plus the worksheet. Do not add market averages. If ranges are ever wanted, quote a named third-party source with attribution and date, labelled [Industry], or use ZSpace's own approved pricing.

**10. Facts an article would need.**

Accounts and fees:

| Claim | Source | Checked | Label |
|---|---|---|---|
| Apple Developer Program: 99 USD per membership year, or local currency where available. Waivers for eligible nonprofits, education and government | https://developer.apple.com/programs/whats-included/ | 2026-10-14 | [Official] |
| Google Play: US$25 one-time registration fee, and prepaid cards are not accepted | https://support.google.com/googleplay/android-developer/answer/6112435 | 2026-10-14 | [Official] |

Apple commissions:

| Claim | Source | Checked | Label |
|---|---|---|---|
| Apple Small Business Program: 15% on paid apps and IAP for developers with 1M USD proceeds or less in the prior calendar year, and for new developers. Developers must enrol (accept the Paid Apps agreement and list Associated Developer Accounts). The page's 10% wording ("for developers on the alternative terms in the EU in the … Program and for subscriptions after their first year") is ambiguous, so quote it verbatim or skip it | https://developer.apple.com/app-store/small-business-program/ | 2026-10-14 | [Official] |
| Apple EU (from 1 Oct 2026, new single EU terms in Attachment 14 of the DPLA): IAP 26%. 15% for auto-renewing subscriptions after year one and for most developers per Apple's wording. Alternative payment processing 20% (10% for SBP/partner programs). Link-out 15% (10%). Core Technology Fee replaced by a 5% Core Technology Commission for apps distributed outside the App Store. Announced 18 Aug 2026 | https://developer.apple.com/support/apps-in-the-eu/ ; https://www.apple.com/newsroom/2026/08/apple-announces-changes-for-apps-in-the-european-union/ | 2026-10-14 (via search snippets; fetch these two pages before publishing) | [Official] |
| Apple US: after the Epic injunction, Apple revised guidelines 3.1.1/3.1.3 (May 2025) to allow external purchase links on the US storefront. The Ninth Circuit (11 Dec 2025) affirmed contempt but reversed the blanket ban on any commission and remanded to set a permissible rate. Mandate issued 6 May 2026. The Supreme Court agreed (30 Jun 2026) to review the contempt finding. The final commission is still unresolved | https://digitalpolicyalert.org/event/39719-us-court-of-appeals-for-the-ninth-circuit-affirmed-contempt-finding-and-remanded-on-commission-rate-in-epic-games-v-apple ; https://courthousenews.com/apples-fight-over-commissions-for-linked-out-app-store-purchases-continues-in-federal-court/ | 2026-10-14 | [Industry]. Write "in flux" and link the guideline page https://developer.apple.com/app-store/review/guidelines/ |
| Japan: Apple changes for the Mobile Software Competition Act took effect 17 Dec 2025 (alternative marketplaces, alternative payment, link-out). Exact fee rates were reported by press only and are unverified | https://www.apple.com/newsroom/2025/12/apple-announces-changes-to-ios-in-japan/ | 2026-10-14 | [Official] for the existence of the changes, [Industry] for the rates |

Google Play commissions:

| Claim | Source | Checked | Label |
|---|---|---|---|
| Google Play (24 Jun 2026 announcement): service fee is now separate from billing fee from 30 Jun 2026 in the US, EEA and UK. Service fee is 10% on the first US$1M of annual earnings and 10% on all auto-renewing subscriptions, regardless of billing path. Billing fee is 5% in the US/UK/EEA, only when Google Play Billing is used. Other transactions follow a new-vs-existing-install rate table (image only, not text-verified). Reduced-rate program cards from 30 Sep 2026 | https://developer.android.com/blog/posts/expanded-billing-choice-and-lower-fees-on-google-play | 2026-10-14 | [Official] |
| Play Help: the new structure applies in Australia and Japan from 30 Sep 2026. All other markets (India, UAE, Singapore) keep 15% on the first $1M, 30% above it and 15% on subscriptions "until updated fees roll out". India and South Korea alternative billing is the standard fee "reduced by 4%" | https://support.google.com/googleplay/android-developer/answer/112622 | 2026-10-14 | [Official]. Re-check: the help-page table was only partly parsed |

Maintenance cost drivers:

| Claim | Source | Checked | Label |
|---|---|---|---|
| Xcode 26 / iOS 26 SDK required for uploads since 28 Apr 2026. Apple's pattern is a new Xcode requirement each spring | https://developer.apple.com/news/upcoming-requirements/ | 2026-10-14 | [Official] for the date, [Inference] for the yearly pattern |
| Target API 36 for new apps and updates from 31 Aug 2026, with extension to 1 Nov 2026 | https://developer.android.com/google/play/requirements/target-sdk | 2026-10-14 | [Official] |
| Apple age-rating questionnaire answers were required by 31 Jan 2026 to avoid interruption to updates. EU trader status has been required since Feb 2025. Privacy-manifest required-reason APIs since 1 May 2024 | https://developer.apple.com/news/upcoming-requirements/ | 2026-10-14 | [Official] |

Backend costs:

| Claim | Source | Checked | Label |
|---|---|---|---|
| Supabase Free: 2 active projects, 500 MB DB, 50,000 MAU, 1 GB storage, 5 GB egress. Pro "from $25/month" | https://supabase.com/pricing | 2026-10-14 | [Vendor] |
| Firebase Spark is no-cost and Blaze is pay-as-you-go. FCM, Crashlytics, Analytics and App Distribution are listed as no-cost. Auth is no-cost up to 50K MAU, but phone auth (SMS) is billed | https://firebase.google.com/pricing | 2026-10-14 | [Vendor] |

Regional notes, which genuinely differ:
- **India:** Google Play alternative billing, and the CCI (2022), NCLAT (Mar 2025) and Supreme Court appeals (filed Jul 2025) on Play billing. I could not confirm a 2026 Supreme Court outcome, so flag it as unverified and don't state it. UPI is common for web or physical-goods payments. Digital goods inside apps remain subject to store billing rules [Inference].
- **UK and Australia:** UK on the new Play fees since 30 Jun 2026, Australia since 30 Sep 2026.
- **UAE and Singapore:** legacy Play rates still apply. Singapore is one of the first four markets for Android developer verification (30 Sep 2026; see topic 8).
- I did not verify any DPDP (India) or UAE PDPL detail in this pass. Leave them out or research them separately.

---

## Topic 8: How to validate a mobile app idea before spending on development

**1. Founder's problem.** The founder wants evidence of demand before paying an agency. Generic validation advice (landing pages, interviews) doesn't tell them what is different about apps: store gates, install friction, and how to test on real phones cheaply.

**2. Intent and stage.** Informational, early (pre-build). It is a top-of-funnel topic but leads naturally to an MVP or prototype engagement.

**3. Queries.** Primary query: "how to validate a mobile app idea". Related queries: "validate app idea before building", "test app idea without coding", "TestFlight beta before launch", "Google Play 12 testers 14 days", "app store listing A/B test", "fake door test app".

**4. Evidence the question is asked.**
- Indie Hackers, "Google made me find 12 strangers willing to test my app for 14 days": https://www.indiehackers.com/post/google-made-me-find-12-strangers-willing-to-test-my-app-for-14-days-nobody-warned-me-how-hard-that-actually-is-de14e6d90e
- Indie Hackers, "How do you get your first 12 Android beta testers?": https://www.indiehackers.com/post/how-do-you-get-your-first-12-android-beta-testers-heres-what-i-m-trying-7438958d66
- HN, "Google Console closed testing requirements are awful": https://news.ycombinator.com/item?id=40520051
- HN, "Need 12 testers for my first Android app launch": https://news.ycombinator.com/item?id=45468010
- HN, the original 2023 "20 testers" thread: https://news.ycombinator.com/item?id=38258101
- Indie Hackers, "Validate your idea with a landing page before you validate your product": https://www.indiehackers.com/post/validate-your-idea-with-a-landing-page-before-you-validate-your-product-917cce77e0
- Reddit: there appears to be a dedicated tester-swap subreddit (r/AndroidClosedTesting), seen only through mirror sites, so unverified.

**5. Current top content and gaps.**
- https://www.dogtownmedia.com/ (2025 "Validate your mobile app idea before spending a dime"; exact post URL not resolved, ?p=22141)
- https://canopas.com/how-to-validate-your-mobile-app-idea-before-development-6952215079
- https://www.unifiedinfotech.net/blog/guide-to-validating-mobile-app-idea/
- https://ebpearls.com.au/blog/5-steps-to-validate-your-idea-before-development (Australian competitor)
- https://www.godaddy.com/resources/skills/how-to-validate-an-app-idea

Gaps:
- Advice is generic (market research, surveys, landing page).
- I found almost none that cover the store-native validation tools:
  - TestFlight public links
  - Play closed testing as a mandatory gate
  - Play store listing experiments
  - Apple product page optimization
  - Play pre-registration
- None plans validation timelines around the 14-day Play gate.

**6. Buyer potential.** Medium to high. These readers are early but serious. The natural next step is a clickable prototype or MVP sprint, which ZSpace sells (UI/UX plus mobile).

**7. Original contribution.** A mobile-specific validation ladder, ordered by cost:
1. Problem interviews and mining 1–2-star competitor reviews.
2. Landing page or fake-door test with a "Get the app" button that measures intent.
3. Clickable Figma prototype tested on a phone.
4. Concierge or "Wizard of Oz" MVP run over WhatsApp or the web. WhatsApp is particularly natural for India and UAE [Inference].
5. A web/PWA version (link to topic 5).
6. TestFlight external beta via public link, plus a Play closed test. On Android this is mandatory anyway for new personal accounts, so turn the 12-tester requirement into a validation exercise.
7. Store-listing experiments once live.

Also include a "Play gate planner": the earliest date production access can be requested, and the organisation-account consideration. I could not confirm on an official page whether organisation accounts are exempt, though community posts say so. Phrase it as "the requirement applies to personal accounts created after 13 Nov 2023".

**8. Service page and CTA.** /services/mobile-app-development, with the UI/UX service page secondary. CTA: "Validate before you build: we can turn your idea into a tappable prototype you can put in front of 12 real testers."

**9. Agree, create it.** The angle is genuinely distinct from /blogs/ai-product-idea-validation (AI-specific) and /blogs/mvp-development-australia (regional MVP build). Store-native testing mechanics are concrete, verifiable and under-covered by competitors. Link both existing posts and topic 5's updated post. Suggested slug: /blogs/validate-mobile-app-idea.

**10. Facts an article would need.**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Personal Play accounts created after 13 Nov 2023 must run a closed test with at least 12 testers "opted in continuously for at least 14 days" before applying for production. The 14 days must be consecutive | https://support.google.com/googleplay/android-developer/answer/14151465 | 2026-10-14 | [Official] |
| The requirement was earlier 20 testers and later lowered to 12 | https://news.ycombinator.com/item?id=38258101 (and community posts) | 2026-10-14 | [Industry]. The reduction date is unverified |
| Testers' engagement can be cited when Google denies production access | Indie Hackers anecdote | 2026-10-14 | [Industry]. Anecdotal only |
| TestFlight: up to 100 internal testers with team roles. Up to 10,000 external testers. The first external build needs App Review approval. Public invite links can be filtered by device and OS | https://developer.apple.com/testflight/ | 2026-10-14 | [Official] |
| Play store listing experiments: one default graphics experiment or up to five localized experiments at a time, up to 2 variants, metrics include install clicks and pre-registration clicks, auto-stop after 6 months | https://support.google.com/googleplay/android-developer/answer/6227309 | 2026-10-14 | [Official] |
| Apple product page optimization: up to three treatments (icon, screenshots, previews) against the original. One test at a time, up to 90 days | https://developer.apple.com/app-store/product-page-optimization/ | 2026-10-14 | [Official] |
| Android developer verification: protections begin 30 Sep 2026 for installs from participating stores in Brazil, Indonesia, Singapore and Thailand on certified Android 7+ devices, expanding globally in 2027. Applies to apps outside Google Play too. A "limited distribution" account allows sharing with up to 20 devices without ID or fee | https://developer.android.com/developer-verification | 2026-10-14 | [Official]. Relevant to Singapore founders who sideload test builds |
| Firebase App Distribution is listed as no-cost (useful for pre-store Android/iOS test builds) | https://firebase.google.com/pricing | 2026-10-14 | [Vendor] |
| Landing-page signups don't reliably convert to paying users, and ad-supported apps are hard to validate with a landing page | Indie Hackers threads above | 2026-10-14 | [Industry]. Practitioner opinion |

Not verified, so don't state: Google Play pre-registration rules and limits, TestFlight build expiry (commonly said to be 90 days, but not confirmed on the fetched page), and whether organisation accounts are formally exempt from the 12/14 rule.

---

## Cross-topic cautions
1. **Fee tables are moving targets.** Google's new rates apply by region and by new-vs-existing install. Apple's EU terms changed on 1 Oct 2026, and US link-out commission is before the courts. Every fee statement should carry an "as of [date]" and a link, and the cost post should get a scheduled re-check, roughly quarterly.
2. **Market averages.** Don't publish cost ranges without a named, dated source. Competitor ranges ($8k–$500k) are unsourced agency figures.
3. **Reddit evidence.** Replace with or add verified Reddit URLs after a manual check, since this tool cannot reach reddit.com.
