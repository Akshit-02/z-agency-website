import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 3 growth set: mobile app retention (topic 47) and website lead
 * quality (topic 58). Global, no regional variants. No prices, no retention
 * benchmarks and no lead response-time statistics are used.
 * Sources checked 2026-10-15:
 * - NN/g, "Mobile Tutorials: Wasted Effort or Efficiency Boost?" (Kendrick, 8 Mar 2020):
 *   70 participants, 4 iOS apps, task success 91% vs 94% (p = 0.443, not significant),
 *   SEQ 4.92 vs 5.49 (p = 0.047).
 * - NN/g, "iPhone Apps Need Low Starting Hurdles" (Nielsen, 9 Feb 2010).
 * - Apple Human Interface Guidelines: Onboarding (read via the developer.apple.com JSON endpoint).
 * - Android Developers: Save UI states; Android vitals (page updated 9 Oct 2026; thresholds
 *   1.09% crash and 0.47% ANR overall, 8% per phone model).
 * - Google Analytics Help 16376749 (Lead acquisition report) and 16374727 (Lead
 *   disqualification and loss report); GA4 recommended events reference (lead events).
 * - Google Ads Help 11459091 (qualified and converted lead goals), 13489421 (best
 *   practices for optimising to high-quality leads), 10518330 (conversion value rules).
 * The habit-loop lever is labelled as inference. No figure here is ZSpace client data.
 */
export const founderGrowthPosts3: BlogPost[] = [
  {
    slug: "improve-mobile-app-retention",
    title: "How to Improve Mobile App Retention Without Relying on Discounts or Constant Notifications",
    seoTitle: "How to Improve Mobile App Retention Without Discounts",
    excerpt:
      "Find where your app loses people (which cohort, which week, which job), then fix the product cause with six levers that don't depend on coupons or push spam.",
    category: "Mobile Apps",
    banner: "retentionloop",
    sceneKind: "mobile",
    bannerAlt: "A retention loop for a mobile app: first value moment, a reason to return, saved progress and a stable experience leading back into repeat use",
    date: "2026-10-15",
    readingTime: "12 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "saas-technology", "healthcare-healthtech", "education-edtech", "sports-fitness"],
    relatedSlugs: ["mobile-app-analytics", "what-a-good-mobile-app-onboarding-actually-does", "mobile-app-push-notifications"],
    faqs: [
      {
        q: "What is a good retention rate for a mobile app?",
        a: "There is no reliable universal figure. Published benchmarks rarely state their sample, definitions or app categories, and retention depends heavily on how often the job your app does naturally recurs. A meditation app and a tax app should not be held to the same curve. Compare each new cohort against your own earlier cohorts, measured the same way.",
      },
      {
        q: "Should we remove our onboarding tutorial?",
        a: "Not automatically. In NN/g's 2020 study of four simple iPhone apps, people who skipped the tutorial did no worse on tasks and rated them easier. That supports making tutorials optional and teaching in context, as Apple's guidelines suggest. For a complex or unfamiliar product, test a shorter, interactive version against your current one rather than deleting it outright.",
      },
      {
        q: "Are push notifications bad for retention?",
        a: "Notifications the user asked for, or that carry something they need (an order update, a reply, a reminder they set), can bring people back usefully. Blanket promotional pushes tend to raise opt-outs and uninstalls. Track opt-out and uninstall rates next to return rates, so you can see the cost as well as the clicks.",
      },
      {
        q: "Can crashes really affect retention?",
        a: "Yes. A user who hits a crash or a frozen screen may simply not come back, and they rarely tell you why. On Google Play there is also an acquisition effect: if an app exceeds Android vitals bad-behaviour thresholds, Google says Play may reduce its visibility and may show a warning on the store listing.",
      },
      {
        q: "How long before we know whether a retention change worked?",
        a: "At least as long as the window you are trying to move, plus enough new installs to form a comparable cohort. A change aimed at week-one return needs a few weekly cohorts after release before you can compare them with the cohorts before it. Avoid releasing several changes at once if you want to know which one helped.",
      },
    ],
    content: [
      {
        heading: "How do you improve app retention without discounts or constant notifications?",
        body: [
          "**Find out where retention breaks before choosing a fix. Split the drop by cohort (who), by week (when) and by job (what retained users did that others did not). Then use the lever that matches: a faster first value moment for day-one loss, a genuine reason to return for weeks one to four, saved state for people who come back and feel lost, requested or transactional re-engagement for lapsed users, stability fixes for silent churn, and monetisation that asks for money after people have seen value.** Discounts and promotional pushes can lift a chart for a week, but they do not repair the product cause, and they can teach people to wait for the next offer.",
          "This guide is for founders and product owners with a live app whose users install it, try it once or twice and drift away. It covers diagnosis and fixes. Definitions and dashboards live in [[/blogs/mobile-app-analytics|our guide to the app metrics worth tracking]], and the first session is covered in depth in [[/blogs/what-a-good-mobile-app-onboarding-actually-does|what good onboarding actually does]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Diagnose first: which cohort, which week, which job.",
          "A drop confined to one acquisition source or device group is usually a targeting or quality problem, not a product problem.",
          "Day-one loss points to the first value moment; weeks one to four point to the reason to return.",
          "Stability is a retention lever, and on Google Play it also affects visibility.",
          "Ignore published retention benchmarks. Compare cohorts against your own history.",
          "Do not make cancelling hard or bury notification settings. Short-term retention bought that way costs trust.",
        ],
      },
      {
        heading: "Step one: work out where retention actually breaks",
        body: [
          "\"Retention is low\" is not a diagnosis. Retention is the share of users who come back within a given time frame, and a single average hides almost everything useful. Work through these four questions in order, using cohort reports from your analytics tool and the store consoles. If you have not set up cohort retention yet, start with [[/blogs/mobile-app-analytics|the analytics setup]] and come back.",
          "**1. Which cohort?** Split the drop by acquisition source, platform, device class, app version and country. If one paid campaign or one cheap device range retains far worse than the rest, the problem is who you are acquiring or how the app behaves on those devices. Changing the product for everyone will not fix it.",
          "**2. Which week?** Look at when people stop returning. The pattern tells you which kind of problem you have:",
        ],
        table: {
          headers: ["When the drop happens", "What it usually means", "Where to look first"],
          rows: [
            ["**Day 0 to day 1**", "People did not reach the moment the app is useful", "Signup, permissions, empty states, the first task"],
            ["**Weeks 1 to 4**", "People got value once but had no reason or prompt to come back, or lost their place when they did", "The reason to return, saved progress, reminders the user controls"],
            ["**After a month or more**", "The job is done, the need is seasonal, or a competitor is winning", "Whether this is the natural cadence of the job rather than a fault"],
            ["**Sudden drop after a release**", "A regression: crashes, a slow launch, a broken flow or a confusing change", "Crash and ANR rates, launch time and support tickets for that version"],
          ],
        },
      },
      {
        heading: "Which job, and is it a quality problem?",
        body: [
          "**3. Which job?** Compare what retained users did in their first session or first week with what churned users did. Did they finish a profile, save something, invite someone, complete a first task? Treat any difference as a hypothesis to test, not a cause. People who were already keen do more of everything, so forcing everyone through the same step will not necessarily copy their behaviour.",
          "Then check the natural frequency of the job. A budgeting app might be used weekly, a travel app a few times a year, a habit tracker daily. If you measure day-7 retention for a product people need monthly, you will see a \"problem\" that is just the shape of the need. Pick the retention window that matches the job and judge against that.",
          "**4. Rule out quality.** Before redesigning anything, compare crash, ANR (\"app not responding\") and hang rates, and launch time, between retained and churned cohorts and across device models. Users who hit a crash on their second visit rarely file a bug report; they leave. [[/blogs/mobile-app-crash-reporting|Our guide to diagnosing a crashing or slow app]] covers the triage in detail.",
        ],
        callout: {
          type: "note",
          text: "**Why there is no target retention figure here.** We have not found a published retention benchmark with a clear sample, definitions and category split that we would rely on. Most circulate on vendor blogs without a method. Your own cohorts, measured consistently, are a better baseline than any industry average.",
        },
      },
      {
        heading: "The six retention levers, matched to the problem",
        body: [
          "Once you know which cohort, week and job is failing, choose the lever that addresses that cause. This table is the core of the guide: use the \"What it fixes\" column to shortlist one or two levers, not all six.",
        ],
        table: {
          headers: ["Lever", "What it fixes", "What it looks like", "Evidence to watch", "Basis"],
          rows: [
            ["**Value moment**", "Day-0 and day-1 loss", "Defer signup, sensible defaults, teach in context, make tutorials optional", "Activation rate; time to first value", "NN/g research; Apple onboarding guidelines"],
            ["**Habit loop (inference)**", "Weeks 1 to 4 loss", "A prompt tied to the user's own schedule, visible progress, content that changes between visits", "Return frequency against the job's natural cadence", "Common practice; no primary study verified"],
            ["**Saved state and continuity**", "People who return but feel lost or have to start again", "Restore the last screen, keep drafts, cache content for offline use", "Share of returning sessions that continue where they left off", "Android saved-state guidance"],
            ["**Re-engagement**", "Lapsed users", "Notifications the user asked for or needs, email, deep links to the exact screen", "Opt-out and uninstall rate alongside return rate", "Platform notification guidance"],
            ["**Quality**", "Silent churn", "Fix the top crashes, ANRs and slow launches on common devices", "Crash and ANR rates by cohort and device", "Android vitals thresholds"],
            ["**Respectful monetisation**", "Churn triggered by early paywalls or rating prompts", "Let people experience the app before asking for money or ratings", "Churn rate after a paywall or prompt is shown", "Apple onboarding guidelines"],
          ],
        },
      },
      {
        heading: "Getting people to value faster",
        body: [
          "The evidence here is the strongest of the six levers. Jakob Nielsen argued in 2010 that because \"most mobile applications are used only intermittently\", they \"must be especially easy during initial use\", and advised against making registration the first step. It is an old article, but the principle has held.",
          "A more recent study tested tutorials directly. In NN/g's 2020 study, 70 participants used four simple iPhone apps, with half reading the tutorial and half skipping it. Task success was 91% with the tutorial and 94% without, a difference that was not statistically significant. People who saw the tutorial rated the tasks as harder (4.92 against 5.49 on a seven-point ease scale, which was significant). The study covered only four simple apps, so it does not prove tutorials never help. It does suggest a front-loaded tour is not a reliable retention fix.",
          "Apple's guidelines point the same way: make onboarding \"fast, fun, and optional\", teach through interactivity, postpone nonessential setup, and if someone skips a tutorial, do not show it again on later launches. In practice that means asking what the smallest useful thing is that a new user can do in the first minute, and removing whatever stands in front of it. Redesigning that first-session flow is [[/services/ui-ux-design|UX design work]] that is worth testing with real users before it is built.",
        ],
      },
      {
        heading: "A reason to come back, and somewhere to come back to",
        body: [
          "**The habit loop is inference, not established evidence.** We have not verified a primary study showing that a particular loop design improves app retention, so treat this lever as practice to test. The idea is simple: give people a prompt they chose (a reminder at the time they set, a weekly summary they opted into), an action that is quick to complete, and visible progress or new content that makes the next visit worthwhile. If the job only recurs monthly, do not try to manufacture a daily habit. Streaks and fake urgency can feel manipulative and may backfire.",
          "Continuity matters as much as the prompt. Android's documentation notes that users expect a screen to look the same when they switch away and return, but the system may kill the app's process in the background, and \"when the user relaunches the app, the screen is unexpectedly in a clean state\". Google advises that \"most apps should implement\" saved state to handle this. Someone who returns to a half-finished form or a lost basket has a good reason not to return again. Drafts, restored screens and cached content are unglamorous engineering work that directly affects whether a return visit succeeds. For apps used with patchy connectivity, see [[/blogs/offline-first-mobile-app-development|offline-first app development]].",
        ],
      },
      {
        heading: "Re-engagement that people do not resent",
        body: [
          "Notifications are one channel, not a strategy. The ones that tend to earn their place are transactional (an order shipped, a booking confirmed), social (a reply to something the user posted) or explicitly requested (a reminder the user set). Each should open the exact screen it refers to, not the home screen; [[/blogs/mobile-app-deep-linking|deep linking]] is what makes that possible.",
          "Blanket promotional pushes are where retention efforts often go wrong. Each one costs a little goodwill, and a user who turns notifications off, or uninstalls, is harder to reach afterwards. When you test re-engagement, measure the downside as well: opt-out rate and uninstall rate next to the return rate. The [[/blogs/mobile-app-push-notifications|push notification strategy guide]] covers permission timing, platform rules and a sending policy template, so we do not repeat them here.",
        ],
      },
      {
        heading: "Quality and monetisation: the silent levers",
        body: [
          "Stability rarely shows up in a retention discussion, but it should. Google publishes \"bad behaviour\" thresholds for Android apps: a user-perceived crash rate of 1.09% and a user-perceived ANR rate of 0.47% overall, and 8% for either on a single phone model. Google states that if an app exceeds a bad behaviour threshold, \"Play may reduce the visibility of your title\" and may show users a warning on the store listing (Android vitals, page updated 9 October 2026; thresholds can change). Poor quality therefore loses users you already have and makes new ones harder to find. Look at vitals by device model, because a problem confined to popular low-memory phones can be invisible in the overall average.",
          "Monetisation can also cause churn. Apple's guidance is to \"prefer letting people experience your app or game before prompting them for ratings or purchases\". A hard paywall before the first value moment, or a rating prompt on the second launch, asks for commitment before the app has earned it. If you run a subscription, make cancelling as easy as subscribing. Retention held by friction is not retention you can build on, and it invites complaints and refund requests. For choosing a model in the first place, see [[/blogs/mobile-app-monetisation-models|how to monetise a mobile app]].",
        ],
        callout: {
          type: "takeaway",
          text: "**What not to do.** Do not train users to wait for discounts. Do not send promotional pushes to everyone because the weekly numbers dipped. Do not hide notification settings, make cancelling difficult or invent countdowns. Each can move a short-term metric while damaging the trust that long-term retention depends on.",
        },
      },
      {
        heading: "Hypothetical example: a fitness booking app",
        body: [
          "Hypothetical example: a studio-booking app sees weekly retention fall. Split by cohort, the drop is concentrated in users from one social campaign and on Android. Split by week, those users mostly never return after day one. Comparing jobs, retained users booked a class in their first session; most churned users browsed the timetable and left.",
          "Checking quality first, the team finds the timetable screen is slow on a common budget phone and the booking flow loses its state if the user switches to their banking app to pay. They fix the slow screen, add saved state to the booking flow, and move account creation from the first screen to the point of booking. They leave the campaign running but track it as its own cohort. Then they compare the next four weekly cohorts with the four before the release, rather than with an industry benchmark.",
          "The example is illustrative. The point is the order: cohort, week, job, quality, then lever.",
        ],
      },
      {
        heading: "When these levers will not fix retention",
        body: [
          "Some retention problems are not product problems you can design your way out of:",
        ],
        checklist: [
          "**The job is genuinely infrequent.** A moving-house app will not retain weekly. Measure against the right window, and focus on referrals and repeat need instead.",
          "**The product does not solve the problem well enough.** If retained users are a tiny, unusual group, you may have a positioning or product-market fit question, not a retention one.",
          "**Acquisition is bringing the wrong people.** If one channel retains far worse, fix targeting or pause it before redesigning the app for everyone.",
          "**You have too few users to read cohorts.** With a handful of installs a week, cohort curves are noise. Talk to users directly and watch session recordings or usability tests until volume grows.",
          "**The cause is outside the app.** Service quality, delivery, pricing or support often show up as app churn. Check reviews and support tickets for these before changing the interface.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Research: NN/g, Mobile Tutorials: Wasted Effort or Efficiency Boost? (Alita Kendrick, 2020); NN/g, iPhone Apps Need Low Starting Hurdles (Jakob Nielsen, 2010).",
          "Platform guidance: Apple Human Interface Guidelines: Onboarding; Android Developers: Save UI states; Android Developers: Android vitals.",
          "Accessed 15 October 2026. Platform thresholds and guidelines change; check the current pages before relying on them.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Retention improves when you fix the specific cause, not when you add more incentives. This week, pull cohort retention split by source, platform and app version; note which week the drop happens; compare first-session behaviour of retained and churned users; and check crash and ANR rates for the worst cohorts. Then pick one lever from the table, ship it, and compare the following cohorts with your own earlier ones.",
          "If the diagnosis points to the first session, start with [[/blogs/what-a-good-mobile-app-onboarding-actually-does|onboarding]]. If it points to stability, go to [[/blogs/mobile-app-crash-reporting|crash and performance diagnosis]]. If it points to measurement gaps, fix [[/blogs/mobile-app-analytics|your analytics]] before anything else.",
        ],
        cta: {
          title: "Not sure which lever your app needs?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|product and UX design]] and [[/services/mobile-app-development|mobile app development]], including onboarding redesigns, saved-state and offline work, and stability fixes. If useful, we can talk through your cohort data and where retention is breaking.",
        },
      },
    ],
  },
  {
    slug: "improve-website-lead-quality",
    title: "How to Improve Lead Quality When Your Website Enquiries Never Convert",
    seoTitle: "How to Improve Website Lead Quality",
    excerpt:
      "Enquiries that never close? Agree a qualified-lead definition with sales, find where quality is lost, and feed real outcomes back into GA4 and Google Ads.",
    category: "CRO",
    banner: "diagnostictree",
    sceneKind: "crm",
    bannerAlt: "A diagnosis tree for poor website leads, branching into wrong people arriving, right people mishandled, and measurement pointed at the wrong target",
    date: "2026-10-15",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "website-development"],
    relatedIndustrySlugs: ["professional-services", "real-estate", "education-edtech", "healthcare-healthtech", "b2b-enterprise"],
    relatedSlugs: ["improve-website-enquiry-form-conversions", "measure-multi-channel-website-conversions", "website-gets-traffic-but-no-leads"],
    faqs: [
      {
        q: "What is the difference between a lead and a qualified lead?",
        a: "A lead is anyone who submits an enquiry. A qualified lead is one that meets criteria your sales and marketing teams have agreed in writing, such as being in your service area, needing something you offer and having a realistic budget and timeframe. Without a written definition, \"qualified\" means whatever the person reviewing the lead feels that day.",
      },
      {
        q: "Should we add more form fields to filter out bad leads?",
        a: "Sometimes, but cautiously. One or two well-chosen questions (service needed, location, timeframe) can help route and qualify leads. Each extra field also deters some good prospects. Test the change and judge it on qualified leads and closed deals, not on form submissions alone.",
      },
      {
        q: "Can Google Ads optimise for qualified leads instead of form fills?",
        a: "Yes, if you send it the outcomes. Google Ads has qualified lead and converted lead goals for leads from Google Ads that are later vetted or closed offline. Google's guidance for optimising to them includes at least 15 conversions in the last 30 days at account level, regular (ideally daily) uploads, and ideally an action that happens within 7 days of the ad interaction.",
      },
      {
        q: "Do we need a CRM to measure lead quality?",
        a: "You need somewhere that records what happened to each lead, with a status and a reason when it is disqualified or lost. A CRM makes this easier and can send the events onward. A carefully kept spreadsheet can work at low volume, but it is harder to connect to GA4 and Google Ads.",
      },
      {
        q: "How quickly should we respond to website enquiries?",
        a: "As quickly as you can reliably manage, and consistently. Rather than relying on old published statistics, measure your own median time to first response by channel and time of day, and compare qualification rates across response-time bands. That tells you whether speed is your bottleneck.",
      },
    ],
    content: [
      {
        heading: "How do you improve lead quality from your website?",
        body: [
          "**Start by agreeing with sales, in writing, what a qualified lead is. Then record an outcome and a reason for every enquiry, so you can see where quality is lost: wrong people arriving (targeting, messaging, pricing signals), right people mishandled (qualification, routing, speed, follow-up), or measurement pointed at the wrong target (ads optimised to raw form fills). Fix the biggest leak, and send qualified and converted outcomes back to GA4 and Google Ads so reporting and bidding stop rewarding junk.** More enquiries will not help if the system keeps attracting and rewarding the wrong ones.",
          "This guide is for founders and marketing leads in service and B2B businesses whose sales team says the website leads are \"rubbish\". If your problem is the opposite (traffic but almost no enquiries), start with [[/blogs/website-gets-traffic-but-no-leads|why a site gets traffic but no leads]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Lead quality is decided by sales outcomes, so marketing and sales must share one written definition.",
          "Record a disqualification or loss reason for every lead. Those reasons are your best diagnostic data.",
          "Most problems sit in one of three places: who arrives, how they are handled, or what you optimise for.",
          "GA4 has Lead acquisition and Lead disqualification and loss reports, populated by recommended lead events.",
          "Google Ads can optimise to qualified or converted leads, but needs enough volume and regular uploads.",
          "Conversion value rules adjust value by audience, location or device. They cannot score a lead by its answers.",
        ],
      },
      {
        heading: "Agree what a qualified lead is, together",
        body: [
          "Most lead-quality arguments are really definition arguments. Marketing counts form submissions; sales counts people worth calling; neither has written down what separates them. Fix this first, because every later step depends on it.",
          "Fill in this template in one meeting with whoever owns marketing and whoever owns sales. Keep it to a page, and review it every quarter.",
        ],
        table: {
          headers: ["Field", "What to write", "Example (hypothetical)"],
          rows: [
            ["**Must-have fit criteria**", "The facts that make someone a possible customer", "In a region we serve; needs a service we offer; a business, not an individual"],
            ["**Intent signals**", "Evidence they want to act soon", "Named a timeframe within three months; asked for a proposal or site visit"],
            ["**Disqualifiers**", "Facts that rule a lead out regardless of anything else", "Job seeker, student project, supplier pitch, outside service area, budget below minimum engagement"],
            ["**Evidence used**", "Where each criterion comes from", "Form answers, first call, company website, email domain"],
            ["**Who decides**", "The role that marks a lead qualified or disqualified", "The salesperson who makes first contact"],
            ["**Decision deadline**", "Days from enquiry by which status must be set", "Within 5 working days; unreachable after 3 attempts counts as \"no response\""],
            ["**Converted means**", "The outcome that counts as a win", "Signed proposal or first paid invoice"],
          ],
        },
        callout: {
          type: "tip",
          text: "Write the disqualifiers as a fixed picklist in your CRM, not free text. Free-text reasons are impossible to count, and counting them is the point.",
        },
      },
      {
        heading: "Diagnose where quality is lost",
        body: [
          "With a definition and a month or two of outcomes, look at the reasons and patterns. Each row below is a failure point, with what it looks like in your CRM, the likely cause and where to look. Work down the table and stop at the first row that clearly matches your data.",
        ],
        table: {
          headers: ["Failure point", "Symptom in the CRM", "Likely cause", "Where to check", "Fix"],
          rows: [
            ["**Targeting**", "Many \"outside service area\" or \"wrong service\" reasons", "Broad keywords, wide location settings, loosely defined audiences", "Search terms report; location report; outcomes by source", "Tighten targeting; add negative keywords; split campaigns by service"],
            ["**Messaging and pricing signals**", "Many \"budget too low\" or \"just wanted a price\" reasons", "The page does not say who it is for, what it involves or that there is a minimum engagement", "Landing page copy against the definition", "State who the service suits and who it does not; explain how pricing works, even without numbers"],
            ["**Form qualification**", "Sales cannot tell good from bad without a call", "The form collects nothing that helps route or qualify", "Form fields against the definition", "Add one or two qualifying questions and test them"],
            ["**Spam vs low intent**", "Gibberish, bots, repeated junk", "No bot protection, or protection that also blocks people", "Submission timestamps, patterns, IP spread", "Bot protection and validation; keep spam out of lead counts"],
            ["**Routing**", "Leads sit unassigned, or go to the wrong person", "No owner rules, or one shared inbox", "Time from enquiry to assignment", "Assign by service and region automatically; name a fallback owner"],
            ["**Speed to lead**", "\"No response\" reasons are common, especially for evening or weekend enquiries", "Slow or inconsistent first contact", "Median time to first response by hour and day", "Set a response target; cover out-of-hours enquiries"],
            ["**Follow-up**", "Good-fit leads go quiet after one attempt", "No cadence, no reminders", "Number of contact attempts per lost lead", "Agree a multi-attempt cadence across channels the lead consented to"],
            ["**Measurement**", "Ads report plenty of conversions but sales sees few deals", "Bidding optimised to raw form fills", "Which conversion action your campaigns bid on", "Send qualified and converted outcomes back, and optimise towards them"],
          ],
        },
      },
      {
        heading: "The first three rows: who arrives and what they are told",
        body: [
          "If the reasons cluster around fit (wrong area, wrong service, wrong size of customer), the website and ads are attracting people the definition already excludes. The fix is rarely on the form. It is in targeting and in what the landing page signals. Saying plainly who the service is for, what a typical engagement involves and how pricing works (a minimum engagement, a starting point, or \"priced per project after a call\") lets the wrong people rule themselves out before they enquire. This does reduce enquiry volume, which is the intention. A [[/services/cro-audit|conversion audit]] can review page messaging and targeting against your written definition.",
          "If the problem is that sales cannot tell good from bad without a call, a qualifying question can help. Keep that change small and test it, because every field costs some completions. The trade-offs, field by field, are covered in [[/blogs/improve-website-enquiry-form-conversions|our guide to enquiry form conversions]], so we do not repeat them here. Price signals do much of this filtering; [[/blogs/should-you-show-prices-on-your-website|showing prices on your website]] covers the options.",
        ],
      },
      {
        heading: "Routing, speed and follow-up",
        body: [
          "A good-fit lead can still be lost after it arrives. Routing is the simplest to check: how long does a new enquiry sit before someone owns it? Automatic assignment by service and region, with a named fallback, removes most of this delay.",
          "Speed to lead is widely discussed, and the most quoted research is old. In \"The Short Life of Online Sales Leads\" (Harvard Business Review, March 2011), the authors concluded that most companies \"are not responding nearly fast enough\" to web leads. It is US data from 2011 and the full method is behind a paywall, so treat it as directional, not as a benchmark. Our [[/blogs/ai-lead-qualification-uae|AI lead qualification guide]] discusses the study and its limits in more detail. The useful step is to measure your own baseline: median time to first response by channel and by hour of day, and qualification rate by response-time band. If evening enquiries wait until the next morning and qualify less often, you have found a fix worth testing.",
          "Follow-up is the last leak. Agree how many attempts, over how many days and on which channels, before a lead is closed as \"no response\". Only use channels the person has agreed to; consent rules for calls, messages and email differ by country, and the [[/blogs/improve-website-enquiry-form-conversions|enquiry form guide]] includes a regional consent summary. If you want to automate scoring and routing, [[/blogs/ai-lead-qualification|AI lead qualification]] covers fit and intent scoring and where automation helps.",
        ],
      },
      {
        heading: "Measure lead quality in GA4",
        body: [
          "GA4 has a set of recommended events for the lead lifecycle. Sending them lets you see quality by source in standard reports instead of a spreadsheet:",
        ],
        table: {
          headers: ["Event", "When to send it", "Useful parameter"],
          rows: [
            ["`generate_lead`", "An enquiry is submitted", "`lead_source`"],
            ["`qualify_lead`", "The lead meets your written definition", "`value` and `currency`"],
            ["`working_lead`", "Someone has contacted, or been contacted by, a representative", "`lead_status`"],
            ["`disqualify_lead`", "The lead is ruled out", "`disqualified_lead_reason`"],
            ["`close_convert_lead`", "The lead becomes a customer", "`value` and `currency`"],
            ["`close_unconvert_lead`", "The lead is closed without converting", "`unconvert_lead_reason`"],
          ],
        },
      },
      {
        heading: "The two GA4 lead reports",
        body: [
          "Once these events arrive, two reports fill in. The **Lead acquisition** report (Reports, then Acquisition, then Lead acquisition; or Business objectives, then Generate leads) shows new leads, qualified leads and converted leads, each counted as unique users with the matching event, by channel. If it is missing from the menu, an Editor or Administrator can add it back to the navigation.",
          "The **Lead disqualification and loss** report filters for `disqualify_lead` and `close_unconvert_lead`, and gives you two dimensions: Disqualified lead reason and Lost lead reason, taken from those parameters. This is where your picklist pays off. Use the same values in the CRM and in the events, for example: outside service area, wrong service, budget below minimum, job seeker or student, supplier pitch, spam, no response.",
          "In plain terms, the qualification events usually happen in your CRM days after the visit, not in the browser, so they have to be sent from the CRM or a server and tied back to the original visitor. That integration is the hard part. [[/blogs/measure-multi-channel-website-conversions|Our guide to measuring conversions across channels]] covers source capture, CRM fields and offline imports.",
        ],
      },
      {
        heading: "Make Google Ads bid for outcomes, not form fills",
        body: [
          "If your campaigns optimise towards form submissions, Smart Bidding will find more people who submit forms, including the ones sales rejects. Google Ads has two goals for later-stage outcomes. A **qualified lead** tracks Google-generated leads \"that have also been further qualified offline\", for example in a CRM, and a **converted lead** tracks leads \"that have completed a chosen step\" in your process, such as a closed deal. The lead funnel report then shows volumes from interactions through leads, qualified leads and converted leads.",
          "Google's best practices for optimising to high-quality leads set some practical requirements:",
        ],
        checklist: [
          "The conversion action should have at least 15 conversions in the last 30 days at account level.",
          "Upload conversion data regularly, ideally daily.",
          "Ideally choose an action that happens within 7 days of the ad interaction.",
          "If leads have different values, use value-based bidding (Maximize conversion value with target ROAS); otherwise use target CPA on qualified or converted leads.",
          "Consider upgrading to enhanced conversions for leads, and tools such as reCAPTCHA, double opt-in or server-side validation for lead authenticity.",
        ],
        callout: {
          type: "note",
          text: "**A small-business reading of these rules (our inference).** Many businesses will not close 15 deals from Google Ads in 30 days, and deals often take longer than 7 days. In that case, optimising to qualified leads, which happen sooner and more often, is usually the realistic step, with converted leads used for reporting until volume grows.",
        },
      },
      {
        heading: "What conversion value rules can and cannot do",
        body: [
          "Conversion value rules let you adjust the conversion values that Google Ads reports and that Smart Bidding uses. The conditions are audiences, geographic locations and device, with a \"no condition\" option for some goals. They are used by target ROAS and Maximize conversion value, and some conditions may be unavailable for housing, employment or credit ads.",
          "So they **can** say \"leads from this region, or from this customer list, are worth more to us\". They **cannot** read what someone typed in your form or score a lead by budget, service or company size, because those are not among the conditions. To give bidding that information, send different values with the qualified or converted lead itself, based on what your CRM knows.",
        ],
      },
      {
        heading: "Hypothetical example: a consultancy drowning in price checks",
        body: [
          "Hypothetical example: a small accounting firm gets plenty of enquiries from search ads, but sales closes very few. After agreeing a definition and adding a reason picklist, a month of data shows most rejections are \"individual, not a business\" and \"just wanted a price\". Few are spam, and response times are fine.",
          "The diagnosis points to targeting and messaging, not the form or follow-up. The firm adds negative keywords for personal tax terms, rewrites the landing page to say it works with limited companies and explains how fees are agreed, and starts sending `qualify_lead` and `disqualify_lead` events with reasons. With too few closed deals for Google's guidance, it switches bidding to qualified leads and watches the Lead disqualification and loss report for the next two months. Enquiry volume is expected to fall; the measure of success is qualified leads and closed work.",
        ],
      },
      {
        heading: "Common mistakes, and when this approach is not enough",
        body: [
          "The most common mistakes are judging campaigns on form submissions, letting \"lead quality\" stay a feeling instead of a definition, recording outcomes as free text, adding long qualifying forms that cut good leads along with bad ones, and switching bidding to a goal with too little data. Another is changing targeting, page, form and bidding all at once, which makes it impossible to tell what helped.",
          "This approach has limits. If you get only a handful of enquiries a month, the reports and bidding signals will be too thin to read, and talking to each lead and reading their reasons is more useful than any dashboard. If the real problem is your offer, price or market fit, better qualification will show that more clearly but will not fix it. And if sales does not record outcomes consistently, nothing downstream works, so start there.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google Analytics: GA4 recommended events reference; Lead acquisition report; Lead disqualification and loss report.",
          "Google Ads: qualified and converted lead goals; best practices for optimising to high-quality leads; conversion value rules.",
          "Research: Oldroyd, McElheran and Elkington, The Short Life of Online Sales Leads, Harvard Business Review, March 2011 (abstract only; full article paywalled).",
          "Accessed 15 October 2026. Google changes its reports, goals and bidding guidance; check the current Help pages before configuring anything.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Better lead quality comes from a shared definition, a recorded reason for every outcome, and a feedback loop that tells your ads what a good lead is. This month: agree the definition with sales, add a disqualification and loss picklist to your CRM, and review a few weeks of reasons against the diagnosis table. Fix the first row that clearly matches, then start sending lead lifecycle events to GA4 and qualified or converted outcomes to Google Ads.",
        ],
        cta: {
          title: "Want a second pair of eyes on where your leads go wrong?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/cro-audit|conversion audits]] and [[/services/website-development|website builds with forms, CRM and tracking integrations]]. If useful, share a month of anonymised lead outcomes and we can talk through where quality is being lost: targeting, page, form or follow-up.",
        },
      },
    ],
  },
];
