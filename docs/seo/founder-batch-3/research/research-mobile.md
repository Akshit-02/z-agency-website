# Batch 3 research: mobile (topics 45 to 48)

Checked 15 Oct 2026. Tool limits: Reddit is unreachable from these tools, stackoverflow.com is blocked, and web search is US-only, so demand evidence comes from Hacker News, vendor SERPs and official forums. No search volumes are given. Apple developer documentation renders client-side, so I read it through the `developer.apple.com/tutorials/data/...json` endpoints, as Batch 2 did. Facts reused from Batch 1 and 2 (14 Oct 2026) are marked "(batch 1)" or "(batch 2)". Time-sensitive ones (Xcode, target API, upcoming requirements) were re-checked today.

---

## Topic 45. What does it cost to maintain a mobile app after launch?

**1. Founder question and business pain.** "The app is live. What do I keep paying for, and what happens if I stop?" Founders get a build quote but no picture of the recurring work. They learn about it when an update is rejected, when the app stops being shown to new Android users, or when an agency sends a retainer they can't judge.

**2. Intent and buyer stage.** Commercial-informational. The reader is usually just before or just after launch, often comparing a maintenance retainer, in-house hiring and doing nothing.

**3. Queries.** Primary: "mobile app maintenance cost", "what does app maintenance include". Supporting: "app maintenance after launch", "how often should an app be updated", "what happens if an app isn't updated", "Google Play target API requirement", "Xcode requirement App Store upload", "app maintenance contract", "Apple developer membership expired apps removed".

**4. Evidence of demand.** Moderate.
- HN: "Maintaining an Android app in Google Play Store is a lot of work". Commenters list signing keys, compliance changes and per-country declarations as recurring burdens. https://news.ycombinator.com/item?id=44214835
- HN: "Ask HN: Why mobile software infrastructure never belongs to its owner?" covers platform dependence. https://news.ycombinator.com/item?id=49187820
- Apple Developer Forums have recurring "membership expired" and "can't renew" threads, for example https://developer.apple.com/forums/thread/714212 and https://developer.apple.com/forums/thread/767394
- The SERP is full of cost guides (see 6), which shows commercial demand. I couldn't check PAA (People Also Ask) directly.

**5. Existing ZSpace coverage.** `/blogs/mobile-app-maintenance` (1,241 words, blog-data-mobile-3.ts) is already solid. It covers OS and store updates, with current dates (Xcode 26 from 28 Apr 2026, iOS 13 minimum from 9 Sep 2026, API 36 from 31 Aug 2026 with extension to 1 Nov 2026). It also covers dependencies, monitoring, API changes, hotfixes, backend, an agreement section, a budget section and a checklist. It has 2 external links.

What's missing or outdated:
- **No worksheet.** "Planning the Maintenance Budget" is one paragraph listing components. There is no structure for frequency, owner or effort drivers.
- **No calendar.** It says to "put these dates in your maintenance calendar" but gives no calendar.
- **Missing obligations:**
  - Apple Developer Program renewal. If membership expires, apps become unavailable on every storefront, and TestFlight and certificates are lost.
  - Play policy announcement cadence.
  - Third-party SDK privacy manifests and signatures, and Data safety and App Privacy updates when SDKs change.
  - React Native and Flutter upgrade windows.
  - Android developer verification, which started in Singapore on 30 Sep 2026.
- **One inaccuracy.** The FAQ says Play "limits visibility of apps that don't target recent API levels". That's right in spirit, but the precise rule is that existing apps below API 35 are shown only to users on Android versions at or below their target. State it exactly.
- **Cross-links.** It doesn't link to the crash-reporting or analytics pages from the monitoring section. It does link to release-management, modernisation and the AU maintenance-contract pages.

**6. SERP weaknesses.**
- https://www.spaceotechnologies.com/blog/how-much-does-it-cost-to-maintain-app/
- https://www.cubix.co/blog/cost-of-mobile-app-maintenance/
- https://www.chopdawg.com/post-launch-app-maintenance-what-it-really-costs-and-what-to-expect-year-over-year/
- https://www.perfectiongeeks.com/mobile-app-development/guides/app-maintenance-checklist
- https://www.brilworks.com/blog/mobile-app-maintenance/

Almost all of them repeat an unsourced "15–20% of build cost per year" rule and dollar bands. Hardly any cite Apple's or Google's actual deadlines, the membership-lapse consequence, SDK privacy-manifest duties or framework support windows. None gives a calendar. ZSpace can't quote prices (owner policy), so its edge is to be the page that explains *what* recurs, *when*, and *who* owns it, with dated primary sources.

**7. Qualified-buyer potential.** High. People searching this have, or are about to have, a live app and a budget conversation. It maps directly to a retainer or support engagement.

**8. Format and original asset.** Update the guide and add two assets.

**(a) Maintenance planning worksheet.** Rows are recurring work types. Columns are frequency, owner, effort drivers and evidence of done.

| Work type | Typical frequency | Owner | What makes it bigger | Evidence it's done |
|---|---|---|---|---|
| Store toolchain uplift (Xcode/SDK, target API) | Yearly per platform | Dev lead | Native modules, old dependencies, custom build scripts | Build uploaded on new toolchain before the deadline |
| OS beta compatibility testing | Yearly (June betas, autumn release) [Inference] | QA + dev | Device matrix size, use of background tasks, notifications, permissions | Test report on the new OS |
| Framework upgrade (RN/Flutter) | Each minor release or at least before support ends | Dev lead | Version gap, third-party native packages, the New Architecture | On a supported version |
| Third-party SDK updates and privacy declarations | When an SDK changes, plus quarterly review | Dev + product/legal | Number of SDKs, ad and analytics SDKs, data collected | Privacy manifest, App Privacy and Data safety match the build |
| Policy review (Play announcements, Apple guideline updates) | Quarterly | Product owner | Regulated category (finance, health, kids), payments, UGC | Policy log with actions |
| Accounts and credentials (Apple membership, APNs keys, signing, certificates, domains) | Yearly plus expiry alerts | Account holder | Number of apps and accounts, agency-owned accounts | Renewal dates in calendar |
| Crash/ANR/hang triage | Weekly and after each release | Dev | Release frequency, device spread | Vitals under thresholds, top issues ticketed |
| Security patches (dependencies, backend) | Monthly scan, urgent as needed | Dev/DevOps | Auth, payments, PII | Scan report, patched versions |
| Backend and API changes (payment, maps, login providers) | As announced | Dev | Number of integrations | Deprecation notices tracked |
| Backups and restore test | Quarterly [Inference] | DevOps | Data volume, regions | Restore actually tested |
| Product improvements from analytics | Monthly cycle | Product | Roadmap ambition | Shipped changes tied to metrics |

**(b) Annual compliance calendar.** Dates are anchored to official sources. Where it says "pattern", that's [Inference] from past dates.

| When | What | Source |
|---|---|---|
| Rolling, on the membership anniversary | Apple Developer Program renewal. If membership lapses, apps and IAPs become unavailable in all storefronts | Apple help |
| Jan–Apr | Apple announces the next Xcode/SDK upload minimum. Past minimums took effect 25 Apr 2023, 29 Apr 2024 and 28 Apr 2026, so the pattern is late April | Apple Upcoming Requirements |
| April, July, Oct/Nov (pattern) | Play policy announcements, usually with at least 30 days to comply | Play announcements |
| June | Apple WWDC and iOS betas, so begin compatibility testing [Inference; WWDC timing not verified this batch] | — |
| 31 Aug (pattern: yearly) | Play target API deadline for new apps and updates (API 36 in 2026; extension to 1 Nov 2026) | Android Developers |
| Sep | New iOS release. Re-test, and fix watchdog and launch regressions | — |
| About every 2 months | React Native minor release. Only the latest 3 minor series are maintained | reactnative.dev/releases |
| About quarterly | Flutter stable release. Hotfixes go to latest stable only (unverified on docs.flutter.dev) | Flutter repo docs |
| 30 Sep 2026 onward (SG, BR, ID, TH) and 2027 (global) | Android developer verification for installs on certified devices | developer.android.com/developer-verification |

**9. Service page and CTA.** /services/mobile-app-development, with a CTA like "Get a maintenance plan scoped from your app's SDKs and deadlines". Secondary link to /blogs/software-maintenance-contracts-australia for AU readers.

**10. Recommendation: UPDATE /blogs/mobile-app-maintenance (MOB-32). I agree.** The intent is already right, and it has the closest content and existing links. Changes:
- Add the worksheet and the calendar.
- Add membership renewal, SDK privacy manifests and framework support windows.
- Fix the Play visibility wording.
- Rewrite the budget FAQ so it explains effort drivers without percentages or prices.
- Keep "no reliable percentage fits every app". That's honest, and it sets the page apart from the 15–20% herd.

Target length is about 2,000 to 2,400 words.

Regional note: Android developer verification starts with Singapore (and Brazil, Indonesia, Thailand). That matters to SG readers who sideload or use other stores. Play-distributed apps are mostly auto-registered ("Google Play automatically registers 99% of apps").

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Since 28 Apr 2026, apps uploaded to App Store Connect must be built with Xcode 26 or later using an SDK for iOS 26 / iPadOS 26 / tvOS 26 / visionOS 26 / watchOS 26. From 9 Sep 2026, iOS and iPadOS apps must target iOS 13 or later. The page lists no 2027 requirement yet | https://developer.apple.com/news/upcoming-requirements/ | 15 Oct 2026 | [Official] |
| Earlier Xcode minimums: Xcode 14.1 from 25 Apr 2023, Xcode 15 from 29 Apr 2024. So "late April each year" is a pattern, not a rule. The 2025 entry isn't on the current page | same | 15 Oct 2026 | [Official] for dates, [Inference] for pattern |
| From 31 Aug 2026, new apps and updates must target API 36 (Android 16). Wear OS and Automotive need API 35; TV and XR need API 34. You can request an extension to 1 Nov 2026. Existing apps must target API 35+ to stay available to new users on newer Android versions; apps targeting API 34 or lower are only available on devices at or below their target. The page was updated 1 Oct 2026 | https://developer.android.com/google/play/requirements/target-sdk | 15 Oct 2026 | [Official] |
| "If you have apps and In-App Purchases on the App Store, they'll become unavailable in all storefronts if your membership expires. Apps currently on customer devices will remain installed." Expiry also removes access to TestFlight, Certificates/Identifiers/Profiles, the App Store Connect API and Xcode Cloud. Only the Account Holder can renew | https://developer.apple.com/help/account/access/resolving-access-issues/ | 15 Oct 2026 | [Official] |
| Apple Developer Program is 99 USD per membership year, or local currency | https://developer.apple.com/programs/whats-included/ (batch 1) | 14 Oct 2026 | [Official]. Mention only if the owner allows; policy says no prices, so I'd omit it |
| Play policy announcements in recent years: 5 Apr and 12 Jul 2023; 17 Jul and 30 Oct 2024; 10 Jul, 30 Oct, 19 Nov and 9 Dec 2025; 28 Jan, 15 Apr and 15 Jul 2026. The 15 Jul 2026 announcement gives "at least 30 days" to comply | https://support.google.com/googleplay/android-developer/announcements/13412212 ; https://support.google.com/googleplay/android-developer/answer/17134731 | 15 Oct 2026 | [Official]. The "quarterly-ish" cadence is [Inference] |
| Privacy manifests are required for listed commonly used SDKs (Firebase, Flutter, Alamofire, OneSignal and others) when added in a new app or update. Signatures are required for binary dependencies. "You are responsible for all the code the SDK includes" | https://developer.apple.com/support/third-party-SDK-requirements/ (batch 2) | 14 Oct 2026 | [Official] |
| Required-reason API declarations have been enforced since 1 May 2024, including for third-party SDKs | https://developer.apple.com/news/upcoming-requirements/ | 15 Oct 2026 | [Official] |
| The Play Data safety form covers SDK data. Discrepancies can lead to "blocked updates or removal" | https://support.google.com/googleplay/android-developer/answer/10787469 (batch 2) | 14 Oct 2026 | [Official] |
| React Native commits to maintain "the latest 3 minor series". Statuses are Active, End of Cycle and Unsupported. On the schedule (page updated 27 Jul 2026), 0.87 (10 Aug 2026) and 0.86 (9 Jun 2026) are Active and 0.85 is End of Cycle; 0.84 and older are Unsupported. 0.88 was scheduled for 12 Oct 2026, but reactnative.dev/versions still showed 0.87 as latest on 15 Oct. Minors come out about every 2 months | https://reactnative.dev/releases/overview ; https://reactnative.dev/versions | 15 Oct 2026 | [Official]. **Re-check the version numbers on publish day** |
| React Native: "Critical bug fixes will be shipped in a new patch version". A deprecated API stays available for at least the following stable release | https://reactnative.dev/releases/versioning-policy | 15 Oct 2026 | [Official] |
| Flutter: the docs.flutter.dev compatibility policy covers breaking changes and deprecations only, not support windows. The repo doc "Hotfixes to the Stable Channel" says hotfixes go only to the latest stable release, and stable comes out about quarterly. I saw this only via search snippets of googlesource mirrors; the direct fetches returned 404 | https://docs.flutter.dev/release/compatibility-policy ; mirror: https://flutter.googlesource.com/mirrors/flutter/+/refs/heads/flutter-3.22-candidate.45/docs/releases/Hotfixes-to-the-Stable-Channel.md | 15 Oct 2026 | [Official] for the policy page. **Hotfix claim unverified, so phrase it as "Flutter doesn't publish an LTS window"** |
| Android developer verification: protections start 30 Sep 2026 for installs from participating stores in Brazil, Indonesia, Singapore and Thailand on certified Android 7+ devices, and expand globally in 2027. "Google Play automatically registers 99% of apps" | https://developer.android.com/developer-verification | 15 Oct 2026 | [Official] |
| The Android vitals bad-behaviour thresholds (see Topic 48) give an objective "maintenance health" bar | see Topic 48 | 15 Oct 2026 | [Official] |
| "15–20% of build cost per year" | competitor blogs only | — | **Do not use.** Unsourced [Industry] rule of thumb, and it conflicts with the no-prices policy |

---

## Topic 46. Which mobile app metrics should founders track after launch?

**1. Founder question and business pain.** "We launched. Downloads look fine, but I can't tell whether the app is working." Founders end up with dashboards full of totals (downloads, sessions) and no answer to "are new users getting value and coming back?" They also get conflicting numbers: the store consoles, Firebase/GA4 and Crashlytics all disagree.

**2. Intent and buyer stage.** Informational, post-launch, with strong commercial adjacency. The reader is about to set up analytics, run a review, or brief an agency.

**3. Queries.** Primary: "mobile app metrics to track", "app KPIs after launch". Supporting:
- "app retention rate how to calculate"
- "day 1 day 7 day 30 retention"
- "what is a good retention rate for an app"
- "crash-free users"
- "Android vitals thresholds"
- "App Store Connect analytics retention"
- "DAU/MAU"
- "activation rate app"

**4. Evidence of demand.** Moderate. HN threads ask how to count active users and what retention means:
- https://news.ycombinator.com/item?id=2501585 (old)
- https://news.ycombinator.com/item?id=26734079 ("I built it, nobody came, now what?"). Commenters recommend weekly signup cohorts.

There's a heavy vendor SERP (see 6). Apple Developer Forums have threads on blank retention graphs and the "Opt-in rate", for example https://developer.apple.com/forums/thread/18359. That's a real confusion an article can answer.

**5. Existing ZSpace coverage.** `/blogs/mobile-app-analytics` (827 words, blog-data-mobile-5.ts) has 0 external sources. Its structure is good: core metrics table, activation, cohorts, funnels, revenue, quality, attribution, push and privacy. It already says the honest thing on benchmarks ("varies too much ... compare against your own history").

What's missing:
- **No founder framework.** There's no single ordered model (acquisition → activation → retention → revenue → quality) with a definition, formula, caveat and "decision it informs" for each metric.
- **No source definitions.** It doesn't explain that each tool defines terms differently:
  - Apple retention counts only opted-in devices that opened the app.
  - GA4's retention chart covers the first 42 days.
  - Crashlytics counts installations, not people.
  - Android vitals normalises by daily users.
- **No thresholds.** It doesn't give the Android vitals bad-behaviour thresholds, which are the only official, numeric "quality bar".
- **ATT is thin.** The attribution section is short and doesn't quote Apple's definition of tracking.

**6. SERP weaknesses.**
- https://userpilot.com/blog/mobile-app-metrics/
- https://supermetrics.com/blog/mobile-app-metrics
- https://themindstudios.com/blog/18-user-engagement-metrics-for-mobile-app/
- https://www.wildnetedge.com/blogs/key-metrics-to-track-after-your-app-launch

They are long lists of 15–25 metrics with no prioritisation and no tool-specific definitions. Several quote retention or stickiness "benchmarks" with no method. None explains Apple's opt-in limit or why Crashlytics and Play numbers differ.

**7. Qualified-buyer potential.** Medium-high. Founders who ask this are often ready for an analytics setup, a product or CRO review, or a retention sprint. It feeds Topic 47.

**8. Format and original asset.** Update the guide and add a **founder measurement framework** table:

| Stage | Question | Metric (definition) | Where to get it | Caveat |
|---|---|---|---|---|
| Acquisition | Are the right people arriving? | Store listing visitors → installs (conversion); installs by source | App Store Connect Analytics; Play Console store analysis | Attribution on iOS is limited without ATT consent; use AdAttributionKit or aggregate data |
| Activation | Do new users reach the value moment? | % of new users who complete the defined activation event within N days of first open | Firebase/GA4 events, product analytics | Activation has to be defined per product. Install isn't activation |
| Retention | Do they come back? | Cohort retention on day 1, 7 and 30, or weekly. GA4's "user retention" is "the percentage of users who return each day in their first 42 days" | GA4 Retention overview; App Store Connect (opted-in only) | Apple counts devices that installed and opened, opted-in only. GA4 "returning user" is cookie/ID-based. Choose a window that matches the natural usage frequency |
| Revenue | Does retained use turn into money? | Trial → paid, renewal, ARPU per cohort, refunds | Store subscription reports, server-side events | Verify on the server; client events get lost |
| Quality | Is the app stable enough not to lose users? | Crash-free users (Crashlytics); user-perceived crash and ANR rate (Play); hangs and launch time (Xcode Organizer) | Crashlytics, Play Console vitals, Xcode Organizer, MetricKit | Each tool uses a different denominator. Play thresholds: 1.09% crash, 0.47% ANR overall; 8% per phone model |

Also add a short "which tool will disagree with which, and why" box, plus a monthly founder review ritual (5 numbers, 1 decision).

**9. Service page and CTA.** /services/mobile-app-development, with a CTA like "Get an analytics and tracking plan for your app". Secondary: /services/cro-audit (already linked from the page).

**10. Recommendation: UPDATE /blogs/mobile-app-analytics (MOB-35). I agree.**
- Add the framework, official definitions, the Android vitals thresholds, Apple's opt-in caveat and the ATT definition.
- Add 6–8 primary sources.
- Keep the "no universal benchmark" position. I found no primary source that publishes app retention benchmarks with a stated method, and the vendor figures in the SERP (for example "25–40% re-launch after week 1") have no methodology. So say plainly that there is no reliable public benchmark and that founders should compare cohorts against their own history.
- Lighten the cluster: retention levers go to Topic 47, and crash diagnosis goes to Topic 48.

Target length is about 1,800 to 2,200 words.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Android vitals core vitals: user-perceived crash rate and user-perceived ANR rate (stability), excessive partial wake locks (battery), memory usage. Bad-behaviour thresholds: user-perceived crash rate 1.09% overall, 8% per phone model, 4% per watch model; user-perceived ANR rate 0.47% overall, 8% per phone model, 5% per watch model. Excessive partial wake locks: 5% overall. Page updated 9 Oct 2026 | https://developer.android.com/topic/performance/vitals | 15 Oct 2026 | [Official] |
| User-perceived crash rate is "the percentage of your daily active users who experienced at least one crash while they were actively using your app". Active use means displaying any activity or running a foreground service | https://developer.android.com/google/play/vitals/crash | 15 Oct 2026 | [Official] |
| Rates are normalised by daily users (one user on one device in one day). Play generally evaluates the last 28 days but "may act sooner in the event of a spike". The console shows 90 days of vitals | https://support.google.com/googleplay/android-developer/answer/9844486 | 15 Oct 2026 | [Official] |
| App Store Connect: "Usage data is based on users who have opted in to share their analytics with you." A session is use "for at least two seconds", and returning from the background counts as a new session. Active Devices are devices with at least one session in the period | https://developer.apple.com/help/app-store-connect-analytics/reference/metrics-definitions | 15 Oct 2026 | [Official] |
| Apple retention: "the percentage of active devices that installed the app on the selected day and opened the app a certain number of days later". Installs never opened are excluded. "Retention is based on usage data, which is collected only from users who have agreed to share diagnostics and usage information." Cells may be blank if privacy thresholds aren't met | https://developer.apple.com/help/app-store-connect-analytics/engagement/app-retention | 15 Oct 2026 | [Official] |
| GA4 Retention overview: "User retention shows the percentage of users who return each day in their first 42 days." It has user retention by cohort (Day 1, 7, 30 lines). "Average 120d value" is average revenue from new users over their first 120 days. New users are first-time visitors; returning users have "visited ... at least once before" | https://support.google.com/analytics/answer/9355855 | 15 Oct 2026 | [Official] |
| GA4 cohort exploration lets you set an inclusion criterion and a return criterion (for example, any event) | https://support.google.com/analytics/answer/9670133 | 15 Oct 2026 (search snippet only) | [Official], re-open before citing |
| Crashlytics: crash-free users = 1 − (crashed users / all users). A "user" is "an individual installation of your app on a device". Only fatal events count (plus uncaught exceptions reported as fatal for Unity and Flutter). It is "an aggregation over time, not an average". Page updated 13 Oct 2026 | https://firebase.google.com/docs/crashlytics/crash-free-metrics | 15 Oct 2026 | [Vendor] (Google product docs) |
| ATT: on iOS/iPadOS/tvOS 14.5+, you need the user's permission through ATT "in order to track them or access their device's advertising identifier". Tracking is defined as linking your app's user/device data with other companies' data for targeted ads or ad measurement, or sharing it with data brokers. AdAttributionKit is Apple's privacy-preserving attribution | https://developer.apple.com/app-store/user-privacy-and-data-use/ | 15 Oct 2026 | [Official] |
| NN/g: the customer-retention rate is "the percentage of users who return within a given time frame". Time to value should be minimised (Sara Paul, 21 May 2023) | https://www.nngroup.com/articles/product-led-growth-ux/ | 15 Oct 2026 | [Industry] |
| Play's legacy "retained installers" (30-day) metric is no longer in the current console | https://support.google.com/googleplay/android-developer/answer/9419939 (search snippet) | 15 Oct 2026 | [Official], unverified detail. Don't recommend it |
| Retention benchmarks | none found with a published method from a primary source | 15 Oct 2026 | **State that no reliable benchmark exists.** Don't cite vendor percentages |

---

## Topic 47. How to improve mobile app retention without relying on discounts or constant notifications

**1. Founder question and business pain.** "People install, try it once or twice, and disappear. Marketing wants more push and more coupons." Discounts train users to wait for offers, and push fatigue drives opt-outs. Founders need to find *where* retention breaks and fix the product cause.

**2. Intent and buyer stage.** Problem-aware, post-launch. It's a strong fit for a product, UX or engineering engagement because the fixes are product changes.

**3. Queries.** Primary: "how to improve mobile app retention", "increase app retention". Supporting:
- "why users stop using my app"
- "app users don't come back after first day"
- "day 1 retention low"
- "retention without push notifications"
- "habit loop app"
- "re-engage inactive app users"

**4. Evidence of demand.** Moderate.
- HN: https://news.ycombinator.com/item?id=26734079 (a founder reports 2% week-1 cohort retention before fixing onboarding; anecdotal)
- HN: https://news.ycombinator.com/item?id=48942096 ("I built it and nobody came")
- HN: https://news.ycombinator.com/item?id=47317677 (Show HN: "A retention mechanic for learning that isn't Duolingo manipulation?"). This shows founders actively looking for non-manipulative retention.
- HN: https://news.ycombinator.com/item?id=19798849 ("Don't waste time on user onboarding" debate)
- The vendor SERP is crowded (see 6). Reddit couldn't be checked.

**5. Existing ZSpace coverage. Is the intent distinct?** Yes.
- `/blogs/what-a-good-mobile-app-onboarding-actually-does` (720 words): first-session design (value moment, signup friction, permissions, measure activation). It covers **day 0**, not weeks 1–8.
- `/blogs/mobile-app-push-notifications` (2,523 words, Batch 2 strategy layer): when to send, policy template, opt-outs. It's one channel. The new page should link to it as the "re-engagement" lever and not repeat it.
- `/blogs/reducing-saas-churn` (777 words): B2B subscription churn, customer success and payments. That's a different model (accounts and contracts, not app sessions).
- Ecommerce retention pages (`ecommerce-customer-retention`, `subscription-ecommerce-retention`, `ecommerce-retention-analytics`, `ecommerce-customer-retention-technology`): repeat purchase, loyalty, discounts and the CRM stack. They're about commerce, not app usage.
- `/blogs/mobile-app-analytics`: measuring retention (Topic 46). The new page diagnoses and fixes. It should link out for definitions and not redefine them.

Cannibalisation risk is low if the new page owns "levers and diagnosis" and the analytics page owns "measurement". There's no gap to update on an existing page; a new page is justified.

**6. SERP weaknesses.**
- https://www.adjust.com/blog/how-to-increase-app-retention/
- https://www.plotline.so/blog/strategies-to-increase-mobile-app-retention-rates
- https://www.nudgenow.com/blogs/retain-customers-mobile-app
- https://ebpearls.com.au/blog/improve-mobile-apps-user-retention (an AU competitor)
- https://hackernoon.com/8-mobile-app-retention-strategies

They are mostly tactic lists (push, in-app messages, gamification, rewards and discounts). They open with unsourced stats ("25% abandon after one use", "up to 3× engagement") and have no diagnostic step. None separates the retention problem by cohort, week and job, and none treats stability or saved state as a retention lever.

**7. Qualified-buyer potential.** High. A founder with a live app and a retention problem has budget at stake. It maps to UX research and redesign, onboarding work, and performance work.

**8. Format and original asset.** A how-to guide with two assets.

**(a) Retention diagnosis: which cohort, which week, which job.**
1. **Which cohort?** Split by acquisition source, platform, device class, app version and country. A drop confined to one cohort is a targeting or quality problem, not a product problem.
2. **Which week?**
   - Week 0/day 1 loss means the value moment wasn't reached, which is an onboarding problem.
   - Weeks 1–4 loss means there's no reason to return; look at the habit loop and saved progress.
   - Later decay means the job is done, or competitors are winning. That may be the natural frequency, not a problem.
3. **Which job?** What did retained users do in their first session or week that churned users didn't? Treat this as correlation to test, not cause. Does the natural use frequency of the job (daily, weekly, monthly) match the retention window you're measuring?
4. **Rule out quality.** Compare crash, ANR and hang rates and launch time for churned and retained cohorts, and by device (see Topic 48).

**(b) Lever table.**

| Lever | What it fixes | Examples | Evidence to watch | Source anchor |
|---|---|---|---|---|
| Value moment | Day-0/day-1 loss | Defer signup, sensible defaults, teach in context, skip tutorials | Activation rate, time to value | NN/g on low starting hurdles and tutorials; Apple HIG onboarding |
| Habit loop | Weeks 1–4 loss | A trigger tied to the user's own schedule (reminders they set), visible progress, content that changes | Return frequency vs the job's natural cadence | [Inference]; no primary study verified |
| Saved state and continuity | People who return but feel lost | Restore where they left off, drafts, offline caching | Resume-to-action rate | Android "Save UI states"; link `/blogs/offline-first-mobile-app-development` |
| Re-engagement | Lapsed users | Transactional or user-requested notifications, email and deep links back to the exact screen. Not blanket promos | Opt-out and uninstall rate vs return rate | Apple HIG notifications; link the push page; link `/blogs/mobile-app-deep-linking` |
| Quality | Silent churn | Fix the top crashes, ANRs and slow launch on common devices | Vitals by cohort | Android vitals; Xcode Organizer |
| Respectful monetisation | Churn caused by paywalls | Let people experience the app before asking for ratings or purchases | Paywall-to-churn correlation | Apple HIG onboarding: "Prefer letting people experience your app ... before prompting them for ratings or purchases" |

Include a short "what not to do" box covering discount dependence, notification spam, and dark patterns that make cancelling hard. Link the subscription churn page for fair cancellation.

**9. Service page and CTA.** Primary: /services/ui-ux-design ("Book a retention UX review"). Secondary: /services/mobile-app-development for quality and saved-state engineering.

**10. Recommendation: CREATE /blogs/improve-mobile-app-retention. I agree.** The intent (levers and diagnosis for app usage retention) isn't owned by any existing page.
- Keep it to about 2,000 to 2,500 words.
- Link out to the onboarding, push, analytics, deep-linking and offline-first pages, and link back from each.
- Don't use any retention benchmark percentage; none has a verifiable method.

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| "Most mobile applications are used only intermittently, so they must be especially easy during initial use." Upfront registration shouldn't be required before users experience the app's benefits (Jakob Nielsen, 9 Feb 2010) | https://www.nngroup.com/articles/mobile-apps-initial-use/ | 15 Oct 2026 | [Industry] (old; frame it as a long-standing principle) |
| NN/g tutorial study (Alita Kendrick, 8 Mar 2020): 70 participants, 4 iPhone apps, between-subjects. Task success was 91% with the tutorial and 94% when skipped (not significant, p = 0.443). Perceived difficulty was higher with the tutorial (SEQ 4.92 vs 5.49, p = 0.047) | https://www.nngroup.com/articles/mobile-tutorials/ | 15 Oct 2026 | [Industry]. A primary study with a stated method |
| NN/g: the customer-retention rate is "the percentage of users who return within a given time frame" | https://www.nngroup.com/articles/product-led-growth-ux/ | 15 Oct 2026 | [Industry] |
| Apple HIG onboarding: "Teach through interactivity"; "Postpone nonessential setup flows or customization steps"; optional tutorials, and if skipped "don't present it again"; "Prefer letting people experience your app or game before prompting them for ratings or purchases"; onboarding should be "fast, fun, and optional" | https://developer.apple.com/design/human-interface-guidelines/onboarding (read via the JSON endpoint) | 15 Oct 2026 | [Official] |
| Android: users expect UI state to persist when they switch away and return. The system may kill the process, leaving "the screen ... unexpectedly in a clean state". "Most apps should implement [saved state] to handle system-initiated process death" | https://developer.android.com/topic/libraries/architecture/saving-states | 15 Oct 2026 | [Official] |
| Apple HIG notifications: "Avoid sending multiple notifications for the same thing". Marketing notifications need explicit permission and an in-app settings screen. "Never use the Time Sensitive interruption level to send a marketing notification" | https://developer.apple.com/design/human-interface-guidelines/notifications ; .../managing-notifications (batch 2) | 14 Oct 2026 | [Official] |
| Android 13+: POST_NOTIFICATIONS is off by default for new installs. Ask in context, from a user action | https://developer.android.com/develop/ui/views/notifications/notification-permission (batch 2) | 14 Oct 2026 | [Official] |
| App Store guideline 4.5.4: push must not be required for the app to function, and marketing push needs explicit opt-in | https://developer.apple.com/app-store/review/guidelines/ (batch 2 push research) | 14 Oct 2026 | [Official]. Re-quote the exact text from the guideline before publishing |
| Poor stability lowers Play discoverability (thresholds in Topic 48), so quality is a retention *and* acquisition lever | https://developer.android.com/topic/performance/vitals | 15 Oct 2026 | [Official] |
| NN/g response-time limits of 0.1 s, 1 s and 10 s (Nielsen, *Usability Engineering*, 1993) for "feels instant / flow / attention" | https://www.nngroup.com/articles/response-times-3-important-limits/ | 15 Oct 2026 | [Industry] |
| Habit-loop and "reason to return" mechanics | no primary study verified | — | **[Inference]**. Present as practice, not evidence |
| "25% of users abandon after one use" and similar | vendor blogs only | — | **Do not use** |

---

## Topic 48. Why is your mobile app crashing or running slowly? A founder's diagnostic guide

**1. Founder question and business pain.** "Reviews say the app crashes and is slow. My developers say it works on their phones. Who's right, and how bad is it?" Founders can't read stack traces, but they do own the consequences: one-star reviews, churn, and (on Play) reduced discoverability once the vitals thresholds are crossed. They need a way to turn symptoms into evidence, likely causes and the right person to fix it.

**2. Intent and buyer stage.** Problem-aware and often urgent. The reader is typically after a bad release or a run of poor reviews, and may be weighing whether to bring in a new team or a rescue engagement.

**3. Queries.** Primary: "why does my app keep crashing", "app is slow how to fix" (founder framing). Supporting:
- "what is an ANR"
- "Android vitals bad behavior threshold"
- "crash-free users good rate"
- "iOS app killed in background / watchdog"
- "app hangs iOS"
- "Xcode Organizer hangs"
- "app slow on older Android phones"

**4. Evidence of demand.** Moderate to strong, but end-user "my app keeps crashing" queries dominate the SERP. Several results were spammy domains or end-user troubleshooting, so the founder or developer framing needs care in the title. Developer interest is visible in vendor content: the Embrace ANR survival guide and Sentry ANR docs, plus a dev.to piece titled "0.47% ANR, 1.09% crashes: the Play Store limits that quietly hide your Android app" (https://dev.to/mr_manushukla/047-anr-109-crashes-the-play-store-limits-that-quietly-hide-your-android-app-36p). Apple Developer Forums have background-termination threads, for example https://developer.apple.com/forums/thread/79891. Reddit couldn't be checked.

**5. Existing ZSpace coverage. Which page should be the target?**
- `/blogs/mobile-app-crash-reporting` (891 words, blog-data-mobile-5.ts; 0.74 match).
  - Covers: why apps crash, crash reporting vs monitoring, workflow, fatal and non-fatal errors, symbolication, crash-free users, prioritising, Android vs iOS (it mentions watchdog kills, Organizer and MetricKit), staged rollouts, alerting, and "Beyond crashes: performance and failed user journeys".
  - Gaps:
    - It has 0 external sources.
    - It says Android vitals thresholds "can affect store visibility" but gives no numbers.
    - It doesn't say what user-perceived crash or ANR means.
    - It doesn't explain why Crashlytics and Play numbers differ (installations vs daily users).
    - It has no symptom-first triage.
    - It doesn't define hangs (iOS: the 250 ms hang rate and 1 s hang reports).
- `/blogs/mobile-app-performance-optimization` (568 words, blog-data-mobile-3.ts): engineering "how to make it faster" by area (startup, rendering, images, network, memory, size).
  - It's thin, with 0 external links.
  - It already states the 1.09% and 0.47% thresholds ("which can affect store visibility"). That's correct per Google, but unsourced.

**Recommendation on target: make `/blogs/mobile-app-crash-reporting` the target.** I agree with MOB-28 choosing a single target, and I'd pick this one. Reasons:
- It has the higher match and more content.
- Its scope already spans crashes, ANRs, hangs and "beyond crashes" monitoring. A founder diagnostic is fundamentally "read the evidence, then triage".
- The performance page's intent ("how to build faster apps", "performance optimization") is an engineering how-to. Stretching it to "crashing" would mix intents.

Retitle the crash page along the lines of "Why Is Your Mobile App Crashing or Slow? Crash Reporting, Vitals and a Founder's Diagnostic Guide", keeping the slug to preserve equity. Add a symptom-first triage at the top, then keep the tooling sections below.

How the other page should link: `/blogs/mobile-app-performance-optimization` stays as the engineering fix page.
- Its "How to Diagnose Performance Problems" and "Monitoring in Production" sections should link to the crash page as "the diagnostic guide".
- The crash page links to the performance page from the "slow" branches of the triage (startup, rendering, memory) for fixes.
- Remove the duplicated ANR definition FAQ from one page. Keep the canonical definition on the crash page and give the performance page a one-line definition plus a link.
- Expand the performance page later (it's thin), but that's separate work.

**6. SERP weaknesses.**
- https://embrace.io/blog/anr-survival-guide/ (vendor, Android only)
- https://www.luciq.ai/blog/what-are-anrs-and-how-to-avoid-them (vendor)
- https://docs.sentry.io/platforms/android/configuration/app-not-respond/ (product docs)
- https://www.dogtownmedia.com/?p=26105 ("The Mobile App is Slow: A Triage Guide"; agency)
- https://dev.to/mr_manushukla/047-anr-109-crashes-the-play-store-limits-that-quietly-hide-your-android-app-36p

The vendor content is single-platform and tool-promotional, and is written for engineers. Some of it quotes unsourced "table stakes" figures (for example "99.95% crash-free sessions"). End-user troubleshooting pages crowd the generic query. Nothing gives founders a cross-platform symptom → evidence → owner map, or explains why the dashboards disagree.

**7. Qualified-buyer potential.** High. Founders here have a live app with a measurable problem and often a strained relationship with their current developer. It maps to audit, rescue and maintenance retainers.

**8. Format and original asset.** A diagnostic guide with a **symptom triage table**:

| Symptom (what users or reviews say) | Where to look | What it likely is | Typical owner |
|---|---|---|---|
| "It closes by itself" | Crashlytics fatal issues; Play vitals crashes; Xcode Organizer Crashes | Unhandled exception or signal | App dev |
| "It freezes, then Android asks to close it" | Play vitals ANRs (only "Input dispatching timed out" counts as user-perceived) | Main thread blocked 5 s or more by I/O, network, locks or heavy work | App dev |
| "It freezes for a moment" (iOS) | Organizer Hangs (hang rate counts unresponsiveness over 250 ms; reports at 1 s or more); MetricKit | Main-thread work | App dev |
| "It takes ages to open" / "killed on launch" (iOS) | Organizer Launch Time (p50/p90); termination reason 0x8badf00d | Heavy launch work; watchdog | App dev |
| "It restarts when I come back" | Organizer Terminations (memory limit); Android process death | Memory pressure; state not saved | App dev |
| "Only on my phone" | Vitals per device model; Crashlytics by device/OS | OEM or OS-specific bug; low-RAM devices | App dev + QA |
| "Started after the update" | Crash-free users by version; staged rollout data | Regression; SDK update | Release owner |
| "Loads forever" | API latency and error rates by endpoint | Backend, network or timeouts | Backend dev |

Also include:
- A box on why the numbers disagree (Crashlytics counts installations over the period; Play counts per daily user over about 28 days; Apple data comes only from users who consent to share).
- A "how bad is it?" section that gives Play's official thresholds and Apple's lack of a published threshold.
- A first-week rescue checklist.

**9. Service page and CTA.** /services/mobile-app-development, with a CTA like "Get a stability and performance audit". Secondary: the maintenance page.

**10. Recommendation: UPDATE /blogs/mobile-app-crash-reporting (target), with link and dedupe edits to /blogs/mobile-app-performance-optimization.** This agrees with MOB-28 and resolves the "both pages" ambiguity in favour of the crash page.
- Target length is about 2,000 to 2,500 words.
- Store-visibility wording should follow Google exactly: "Play may reduce the visibility of your title" and "may also show users a warning on your store listing".
- Apple publishes no equivalent ranking-penalty statement for crashes or hangs. Don't imply one. The only Apple-side statement found is that App Review will reject binaries that crash (guideline 2.1, batch 2).

**11. Facts an article would need**

| Claim | Source | Checked | Label |
|---|---|---|---|
| Core vitals and bad-behaviour thresholds: crash 1.09% overall / 8% per phone model; ANR 0.47% overall / 8% per phone model (watch: crash 4%, ANR 5%). "If your app or game exceeds a bad behavior threshold, Play may reduce the visibility of your title. Play may also show users a warning on your store listing." Page updated 9 Oct 2026 | https://developer.android.com/topic/performance/vitals | 15 Oct 2026 | [Official] |
| Exceeding the per-device threshold steers users on those devices toward other apps and may show a listing warning. Play evaluates about the last 28 days and "may act sooner in the event of a spike" | https://support.google.com/googleplay/android-developer/answer/9844486 | 15 Oct 2026 | [Official] |
| The per-model store listing warning (above 8%) was introduced from 30 Nov 2022; the overall thresholds were unchanged at 1.09% and 0.47% | https://android-developers.googleblog.com/2022/10/raising-bar-on-technical-quality-on-google-play.html | 15 Oct 2026 (search snippet; blog not opened) | [Official]. Re-open before citing the date |
| ANR: "When the UI thread of an Android app is blocked for too long ... (ANR) error is triggered." Triggers: no response to an input event "within 5 seconds"; a service not finishing onCreate/onStartCommand "within a few seconds"; startForeground not called within 5 s; a BroadcastReceiver not finishing (5 s if the app has a foreground activity); JobService callbacks | https://developer.android.com/topic/performance/vitals/anr | 15 Oct 2026 | [Official] |
| "Currently only ANRs of type `Input dispatching timed out` are considered user-perceived." Play also reports ANR rate (any type) and multiple ANR rate | https://developer.android.com/google/play/vitals/anr | 15 Oct 2026 | [Official] |
| User-perceived crash = a crash while the app is "in active use" (displaying any activity or running a foreground service). Wear OS includes background crashes | https://developer.android.com/google/play/vitals/crash | 15 Oct 2026 | [Official] |
| Rendering: frames must render in under 16 ms for 60 fps (11 ms at 90 fps, 8 ms at 120 fps). Slow frames are 16–700 ms; frozen frames are 700 ms–5 s; above 5 s is an ANR. "No frames in your app should ever take longer than 700ms to render" | https://developer.android.com/topic/performance/vitals/render | 15 Oct 2026 | [Official] |
| Cold, warm and hot start definitions | https://developer.android.com/topic/performance/vitals/launch-time | 15 Oct 2026 | [Official]. **The vitals "excessive startup" thresholds (5 s / 2 s / 1.5 s) are unverified.** Check https://developer.android.com/google/play/vitals/launch-time before using |
| iOS watchdog: "The operating system employs a watchdog that monitors launch times and app responsiveness, and terminates unresponsive apps. Watchdog terminations use the code `0x8badf00d` ... in the Termination Reason of a crash report." No general time limit is published; examples include a 19.97 s scene-create allowance | https://developer.apple.com/documentation/xcode/addressing-watchdog-terminations (read via the JSON endpoint) | 15 Oct 2026 | [Official]. Don't state a fixed launch limit |
| "On iOS, the watchdog will terminate [the app] if it takes too long [to launch]." Organizer's Launch Time is milliseconds from tap to first screen after the splash, shown as p50 and p90. MetricKit TimeToFirstDrawMetric and ApplicationResumeTimeMetric are histograms for the previous day | https://developer.apple.com/documentation/xcode/reducing-your-app-s-launch-time | 15 Oct 2026 | [Official] |
| Hangs: a delay over 100 ms in discrete interaction "starts to become noticeable and causes a hang" | https://developer.apple.com/documentation/xcode/improving-app-responsiveness | 15 Oct 2026 | [Official] |
| Organizer hang rate = "seconds per hour that the app is unresponsive, while only counting periods of unresponsiveness of more than 250 ms" (median and p90). Backtraces are sampled when the main thread is unresponsive for 1 s or more. Reports come only "for users who consent to share data with app developers". Hang reports are available for iOS and iPadOS only. "All of this data is also available in MetricKit" | https://developer.apple.com/documentation/xcode/analyzing-responsiveness-issues-in-your-shipping-app | 15 Oct 2026 | [Official] |
| Organizer shows anonymised performance data (launch, memory, responsiveness, battery, disk writes). It may say "Insufficient usage data available" for low-volume apps | https://developer.apple.com/documentation/xcode/analyzing-the-performance-of-your-shipping-app | 15 Oct 2026 | [Official] |
| The Organizer Terminations pane groups terminations by reason (launch timeout, memory limit), including background terminations | WWDC21 session https://developer.apple.com/videos/play/wwdc2021/10181/ (search snippet) | 15 Oct 2026 | [Official], unverified wording. Re-watch or re-check before quoting |
| MetricKit: "The system delivers metric reports about the previous 24 hours to your app at most once per day. Diagnostic reports arrive immediately in iOS 15 and later." Diagnostic classes include crash, hang, app launch, disk-write, CPU and memory exception | https://developer.apple.com/documentation/metrickit | 15 Oct 2026 | [Official] |
| Crashlytics crash-free users = 1 − crashed users / all users. User = installation. Fatal only. Aggregated over time, not averaged | https://firebase.google.com/docs/crashlytics/crash-free-metrics | 15 Oct 2026 | [Vendor] |
| Apple App Review guideline 2.1: Apple will reject binaries that crash | https://developer.apple.com/app-store/review/guidelines/ (batch 2) | 14 Oct 2026 | [Official] |
| Apple ranking or visibility penalty for crashes or hangs | none found | 15 Oct 2026 | **Not stated by Apple. Don't claim it** |
| "99.95% crash-free sessions is table stakes" and similar targets | vendor/agency blogs | — | **Do not use** |

---

## Cross-topic notes
- **Linking.** Maintenance (45) links to analytics (46) for the monthly review and to the crash page (48) for triage. Analytics (46) links to retention (47) for levers. Retention (47) links to the crash page (48) for the "rule out quality" step, and to the onboarding, push, deep-linking and offline-first pages.
- **Thresholds.** Keep the Android vitals thresholds in one canonical place (the crash page). Other pages quote them with the same date and source.
- **Re-check on publish day.** The React Native version table (0.88 was due 12 Oct 2026 and not yet shown as latest), Apple Upcoming Requirements (no 2027 item yet), and the Play target API extension status.
