import type { BlogPost } from "./blog-data";

/**
 * Australian mobile pair: what an app costs to build and run in Australia, and
 * how to choose an app development company. Differentiated from the generic
 * owners (mobile-app-development-cost, how-to-choose-a-mobile-app-development-company,
 * mobile-app-maintenance) and from the Australian web pair
 * (website-development-cost-australia, web-development-company-australia) by
 * app-specific Australian decisions: GST, Apple and Google account costs and
 * store fees, the Google Play fee change for Australian users, Apple
 * organisation enrolment (legal entity, D-U-N-S), Privacy Act coverage and the
 * NDB scheme, the social media minimum age, the Children's Online Privacy Code
 * (not yet registered), WCAG 2.2 and written IP assignment.
 * Sources checked 2026-10-09: Apple Developer (program enrolment, D-U-N-S,
 * upcoming requirements, Small Business Program); Google Play Console Help
 * (registration, service fees) and Android Developers (target API level);
 * OAIC (small business, NDB statistics 2025, Children's Online Privacy Code);
 * eSafety (social media age restrictions); ATO (GST registration); W3C WCAG
 * 2.2; AustLII (Copyright Act s196). No price here is a market rate and no
 * figure is ZSpace client data.
 */
export const auMobilePosts: BlogPost[] = [
  {
    slug: "mobile-app-development-cost-australia",
    title: "Mobile App Development Cost in Australia: What Businesses Should Budget For",
    seoTitle: "Mobile App Development Cost in Australia: Budget Guide",
    excerpt:
      "What drives mobile app development cost in Australia: scope, platforms, backend, integrations, QA, store fees, GST, privacy work and the cost of running an app.",
    category: "Mobile Apps",
    banner: "costbreakdown",
    sceneKind: "cost",
    bannerAlt: "A mobile app budget broken into discovery, design, app build, backend, integrations, testing, launch and the yearly cost of running the app",
    date: "2026-10-09",
    readingTime: "14 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["startups", "healthcare-healthtech", "retail", "professional-services", "education-edtech"],
    relatedSlugs: ["mobile-app-development-cost", "mobile-app-development-company-australia", "mvp-development-australia"],
    faqs: [
      {
        q: "How much does it cost to build a mobile app in Australia?",
        a: "There is no reliable Australian average, because published figures are mostly vendor marketing and compare very different scopes. Cost is driven by the number of user roles and screens, whether you need iOS and Android, the backend and admin tools, integrations, privacy and security work, testing depth and post-launch support. Ask for a priced discovery phase, then compare build quotes against the same written scope, with GST shown the same way.",
      },
      {
        q: "Is it cheaper to build one cross-platform app than two native apps?",
        a: "Often, but not always. A cross-platform framework such as Flutter or React Native lets one team share most code across iOS and Android, which usually reduces build and maintenance effort. Savings shrink when the app relies on platform-specific features, complex background processing or new OS capabilities, because that work is still written per platform. Compare quotes that list the shared and platform-specific work separately.",
      },
      {
        q: "What does it cost to publish an app on the App Store and Google Play?",
        a: "Apple's Developer Program costs 99 USD a year, charged in local currency where available, and organisations need a legal entity and a D-U-N-S number to enrol. Google Play charges a one-time US$25 registration fee. Both stores also take a service fee on paid apps and in-app digital purchases. Google changed its fee structure for Australian users from 30 September 2026, so check the current Play Console Help page.",
      },
      {
        q: "Do Australian app development quotes include GST?",
        a: "Not always, which is why quotes are hard to compare. A supplier registered for GST charges 10% on taxable supplies, and quotes may be shown including or excluding it. An overseas supplier may not charge Australian GST at all. Ask every supplier to state whether GST applies and how it is shown, and get advice from your accountant on your own GST position.",
      },
      {
        q: "How much should we budget each year to maintain an app?",
        a: "We do not publish a percentage, because maintenance depends on how many integrations, OS versions and third-party SDKs the app depends on, and on whether you are still adding features. Budget separately for hosting and services, store accounts, monitoring tools, mandatory OS and store updates, security patching, bug fixing and support hours. Ask your supplier to price a maintenance plan before you sign the build contract.",
      },
      {
        q: "Does the Privacy Act affect what our app costs?",
        a: "It can. Many businesses with annual turnover of A$3 million or less are exempt from the Privacy Act, but some small businesses, such as health service providers, are covered regardless. Covered businesses need privacy-by-design work, a privacy policy, secure handling of personal information and a data breach response plan under the Notifiable Data Breaches scheme. That work belongs in the budget, not in a later change request.",
      },
      {
        q: "Will our app need age checks under the social media minimum age law?",
        a: "Only if it is an age-restricted social media platform under the rules eSafety administers, which took effect on 10 December 2025 and were amended in March 2026. Most business apps, such as booking, ordering or field service apps, are not social media platforms. If your app lets users post and interact publicly, get advice early, because age assurance and moderation add real cost.",
      },
      {
        q: "What is usually missing from a cheap app quote?",
        a: "Commonly missing items are discovery, UX design, the admin panel, backend hosting, analytics and crash reporting, accessibility work, automated tests, store submission, privacy documentation, handover and post-launch support. Some quotes also assume you supply all content and API documentation. Ask for an inclusions and exclusions list and a statement of what happens, and at what price, when scope changes.",
      },
    ],
    content: [
      {
        heading: "What does a mobile app cost in Australia?",
        body: [
          "**Mobile app development cost in Australia depends on scope, not on a market price.** The main drivers are how many user roles, screens and workflows the app has, whether you need iOS and Android, the backend and admin tools, integrations, privacy and security work, and testing. Then add the cost of running the app every year. A priced discovery phase is the most reliable way to get a comparable estimate.",
          "This guide is for founders, product owners and operations leads who need a realistic budget before they talk to developers, or who are trying to compare quotes that look nothing alike. It explains each cost driver, what Australian businesses need to add (GST, store accounts, privacy obligations and accessibility), how to plan an MVP budget, and the questions that expose an incomplete quote.",
          "We deliberately do not publish price ranges. No neutral Australian survey of app development prices exists, and published figures compare apps of very different scope. Where we use numbers, they are labelled as illustrative arithmetic, not market rates. For the generic cost model, see our guide to [[/blogs/mobile-app-development-cost|what drives mobile app development cost]]. Nothing here is tax or legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Budget the whole lifecycle: discovery, design, build, launch and at least the first year of running costs. Running costs are where most first budgets fall short.",
          "Scope drives cost more than location or framework. Count user roles, screens, integrations and offline or real-time needs before comparing quotes.",
          "Cross-platform frameworks often reduce effort for two platforms, but platform-specific features are still built twice. Ask quotes to split shared and per-platform work.",
          "Apple charges 99 USD a year (in local currency where available) and Google Play a one-time US$25. Both take service fees on digital sales, and Google changed its fee structure for Australian users from 30 September 2026.",
          "Ask every supplier to state whether 10% GST applies and how quotes show it.",
          "If you are covered by the Privacy Act, or handle health or children's data, privacy and security work is a line item, not an afterthought.",
          "Accessibility to WCAG 2.2 AA costs far less when designed in than when retrofitted.",
        ],
      },
      {
        heading: "The seven cost drivers, in order of impact",
        body: [
          "Most of the difference between two app quotes comes from a handful of decisions. In practice, the order below is roughly the order of impact, though every project differs.",
        ],
        table: {
          headers: ["Driver", "What raises cost", "What keeps it contained"],
          rows: [
            ["**1. Scope and workflows**", "Many user roles, complex rules, payments, bookings, chat, real-time tracking", "One primary user journey for launch; a written list of what is out of scope"],
            ["**2. Platforms**", "Separate native iOS and Android apps; tablets, watches or web as well", "One cross-platform codebase where the feature set suits it"],
            ["**3. Backend and admin**", "Custom backend, admin portal, reporting, role-based permissions", "Managed backend services; a simple admin first; reports added later"],
            ["**4. Integrations**", "CRM, ERP, Xero or MYOB, payment gateways, legacy systems with poor APIs", "Well-documented APIs; one source of truth per record"],
            ["**5. Design**", "Custom animation, many unique screens, brand-new design system", "A component library, platform conventions and a limited screen count"],
            ["**6. Quality, security and privacy**", "Sensitive data, health or financial information, high availability", "Risk-based testing; automated tests on core flows; privacy designed in"],
            ["**7. Launch and running**", "Many environments, heavy monitoring, 24/7 support", "Support hours that match real usage; monitoring on the flows that matter"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: before asking for quotes, write down the single journey that must work on launch day, such as 'a customer books and pays for a service'. Everything else is a candidate for a later release.",
        },
      },
      {
        heading: "Native or cross-platform: what it does to the budget",
        body: [
          "You can build two native apps (Swift for iOS, Kotlin for Android), one cross-platform app (commonly Flutter or React Native), or in some cases a progressive web app instead of a store app. Each choice changes both the build cost and the running cost.",
          "Cross-platform development shares most user interface and business logic across iOS and Android, so one team maintains one codebase. That usually lowers effort for a typical business app. It does not remove platform work: push notification set-up, payments, background location, widgets, new OS features and store submissions are still handled per platform, and the framework itself has to be upgraded over time.",
          "Native development costs more for two platforms but can be the better choice when the app depends on the newest platform capabilities, heavy graphics or deep device integration. We compare these trade-offs in [[/blogs/native-vs-cross-platform-app-development|native vs cross-platform app development]] and [[/blogs/flutter-vs-react-native|Flutter vs React Native]]. If you are unsure whether you need a store app at all, read [[/blogs/pwa-vs-native-app|PWA vs native app]] first: a well-built web app can be the cheapest way to test demand.",
        ],
      },
      {
        heading: "What a complete quote should include",
        body: [
          "A quote is only comparable if it covers the same work. Use this list to check inclusions and exclusions line by line. If a supplier leaves an item out, ask whether it is excluded, included elsewhere or assumed to be your responsibility.",
        ],
        checklist: [
          "**Discovery:** user research or stakeholder workshops, user journeys, a feature list with priorities, a data model and an integration map.",
          "**UX and UI design:** wireframes, a clickable prototype, visual design for each screen and state (empty, loading, error), and accessibility annotations.",
          "**App build:** each platform or the shared codebase, with offline behaviour, notifications and deep links if needed.",
          "**Backend:** APIs, database, authentication, file storage, background jobs and the hosting set-up.",
          "**Admin tools:** the portal your staff use to manage users, content, orders or bookings.",
          "**Integrations:** each third-party system named, with who supplies credentials and test environments.",
          "**Testing:** device coverage, automated tests on critical flows, accessibility checks and a user acceptance testing period.",
          "**Security and privacy:** secure storage, encryption in transit, dependency scanning, a privacy policy input and breach response support.",
          "**Launch:** store listings, screenshots, review submission, and handling of rejections.",
          "**Handover:** source code in your repositories, documentation, credentials and a walkthrough.",
          "**Post-launch:** a warranty period for defects, then a priced maintenance plan.",
        ],
      },
      {
        heading: "Australian costs to add to any estimate",
        body: [
          "Several costs are specific to building and running an app for an Australian business. None are large on their own, but leaving them out is a common reason budgets overrun.",
          "**GST.** GST is 10% on most taxable supplies, and businesses must register once GST turnover reaches A$75,000. Quotes may show prices including or excluding GST, and an overseas supplier may not charge Australian GST at all. Normalise every quote before comparing, and ask your accountant how GST affects you.",
          "**Store accounts and fees.** Apple's Developer Program annual fee is \"99 USD ... in local currency where available\", and an organisation must be a legal entity with a D-U-N-S number to enrol. Google Play charges a one-time US$25 registration fee. If you sell digital goods or subscriptions in the app, the stores take a service fee: Apple's Small Business Program charges 15% for developers with up to 1 million USD in proceeds, and Google introduced a new fee structure for users in Australia from 30 September 2026. Physical goods and services, such as a booking or a delivery, are generally paid through your own payment provider instead.",
          "**Privacy.** Many small businesses with turnover of A$3 million or less are exempt from the Privacy Act, but health service providers and some others are covered regardless of turnover. If you are covered, budget for privacy-by-design work, a privacy policy, secure storage and a response plan for the Notifiable Data Breaches scheme. The OAIC received 1,205 breach notifications in 2025, the highest since the scheme began.",
          "**Children and social features.** The social media minimum age rules took effect on 10 December 2025, and the OAIC is developing a Children's Online Privacy Code that must be registered by 10 December 2026. Most business apps are unaffected. If your app has public social features or is likely to be used by children, get advice before scoping, because age assurance, moderation and stricter defaults are significant work.",
          "**Accessibility.** The Australian Human Rights Commission's guidelines on digital access point organisations to WCAG, and WCAG 2.2 adds criteria such as minimum target size and accessible authentication that affect app design. See [[/blogs/website-accessibility-australia|website accessibility in Australia]] for how the Disability Discrimination Act and WCAG fit together.",
        ],
      },
      {
        heading: "A budgeting model you can use before talking to suppliers",
        body: [
          "Rather than starting from a total, build the budget from components. The model below is ours. It will not produce a market price, but it shows which assumptions matter and gives you a structure to compare quotes against.",
        ],
        code: {
          label: "Lifecycle budget model for a mobile app",
          text: `Build budget  = Discovery + Design + App build
              + Backend and admin + Integrations
              + Testing + Launch + Contingency

Year-one run  = Hosting and services + Store accounts
              + Monitoring tools + Maintenance hours
              + Support hours + Security reviews

Two-year view = Build budget + 2 x Year-one run
              + Planned feature releases`,
        },
      },
      {
        heading: "Illustrative example: reading a quote with the model",
        body: [
          "**This example is hypothetical arithmetic, not a market rate.** A Brisbane physiotherapy group wants an app for clients to book sessions, pay a deposit and receive exercise programs. A supplier quotes 150 person-days for the build. To make the arithmetic easy, assume a blended rate of A$1,000 per person-day, excluding GST. That gives A$150,000 excluding GST, or A$165,000 including 10% GST if the supplier charges it.",
          "Now apply the model. The quote covers app build, backend and testing, but lists discovery, the clinic admin portal and post-launch support as exclusions. The group is a health service provider, so it is covered by the Privacy Act regardless of turnover, which means privacy design and breach response planning must be added. Exercise videos need hosting and streaming. Three integrations are named: the practice management system, a payment provider and an SMS service.",
          "The useful output is not a total. It is a list of questions: Who builds the admin portal, and for how many days? Does the practice management system have a documented API and a test environment? What does the supplier charge per month for maintenance after the warranty? Once those answers are in writing, the same model applied to every quote shows which supplier has priced the full job.",
        ],
        callout: {
          type: "note",
          text: "If a supplier will not list exclusions or explain how they reached their estimate, treat the total as unreliable, however attractive it looks.",
        },
      },
      {
        heading: "MVP budget versus full product budget",
        body: [
          "An MVP is the smallest product that tests your riskiest assumption with real users. It is not a cheap version of the full product. For an app, an MVP budget usually funds one platform or one cross-platform codebase, one core journey, a minimal admin, essential analytics and enough testing that early users trust it.",
          "Plan the MVP and the full product as two budgets with a decision point between them. Decide in advance what evidence would justify the next stage: a retention rate, a number of completed bookings or a willingness to pay. Our guide to [[/blogs/mvp-development-australia|MVP development for Australian startups]] covers how to choose that evidence, and [[/blogs/mobile-app-development-timeline|how long an app takes to build]] covers realistic schedules.",
        ],
        table: {
          headers: ["", "MVP budget", "Full product budget"],
          rows: [
            ["**Goal**", "Learn whether the core idea works", "Serve a known market reliably"],
            ["**Platforms**", "Often one codebase, sometimes one platform", "Both platforms; sometimes tablet or web"],
            ["**Features**", "One core journey", "Secondary journeys, personalisation, offline"],
            ["**Admin**", "Minimal, sometimes manual processes behind the scenes", "Full admin, reporting and roles"],
            ["**Testing**", "Core flows on a defined device set", "Broader devices, automation, performance"],
            ["**Run costs**", "Low usage, limited support hours", "Scaled hosting, monitoring and support"],
          ],
        },
      },
      {
        heading: "The cost of running an app after launch",
        body: [
          "An app is never finished. Apple and Google update their operating systems every year, and store rules change on fixed deadlines. For example, apps uploaded to App Store Connect since 28 April 2026 must be built with Xcode 26 and the iOS 26 SDK, and from 31 August 2026 new Android apps and updates must target Android 16, API level 36. An app that is not updated eventually cannot be updated at all without catch-up work.",
          "Running costs include hosting and third-party services, store accounts, monitoring and crash reporting, dependency and security updates, bug fixes, support hours, and the business time spent on content and customer questions. Our guide to [[/blogs/mobile-app-maintenance|mobile app maintenance]] lists what a maintenance plan should cover, and [[/blogs/mobile-app-crash-reporting|crash reporting and monitoring]] explains the tooling.",
          "**Support hours and time zones.** If your supplier is overseas, agree support hours in writing. Sydney and Melbourne are 4.5 hours ahead of India during AEST and 5.5 hours during AEDT, Brisbane is always 4.5 hours ahead, and Perth is 2.5 hours ahead. That gives a useful overlap during the Australian working day, but out-of-hours incident cover has to be explicitly priced, whoever the supplier is.",
        ],
      },
      {
        heading: "How to keep the budget under control",
        body: [],
        checklist: [
          "Pay for discovery as a separate, fixed-price phase, then request build estimates against its outputs.",
          "Prioritise features as must, should and could, and defer every 'could' until after launch data arrives.",
          "Agree a change request process with a day rate and approval step before work starts.",
          "Hold a contingency, commonly 10 to 20% in our practice, and track what consumes it.",
          "Use platform conventions and an existing component library instead of designing every control from scratch.",
          "Confirm integration access early. A missing API or test environment is a frequent cause of delay.",
          "Review progress on working software every one or two weeks, not on status reports.",
          "Keep repositories, store accounts and cloud accounts in your business's name from day one.",
        ],
      },
      {
        heading: "Common budgeting mistakes",
        body: [],
        checklist: [
          "Comparing a fixed-price quote with a time-and-materials estimate as if they carried the same risk.",
          "Budgeting the build and nothing for the first year of running costs.",
          "Assuming a cross-platform app halves every cost line, including testing and store work.",
          "Leaving the admin portal out of scope, then discovering staff need one to operate the app.",
          "Treating privacy, security and accessibility as optional extras.",
          "Letting the supplier hold the Apple or Google developer account in their own name.",
          "Choosing on day rate alone. A lower rate on a longer estimate can cost more.",
        ],
      },
      {
        heading: "Where this fits with your other decisions",
        body: [
          "Cost is one input into a wider set of decisions. If you are choosing a supplier, read [[/blogs/mobile-app-development-company-australia|how to choose a mobile app development company in Australia]]. If the app is part of a broader product, [[/blogs/digital-product-development-australia|digital product development in Australia]] covers stage gates and evidence. For the backend and integrations, see [[/blogs/mobile-app-backend-development|mobile app backend development]] and [[/blogs/api-integration-australia|API integration for Australian businesses]]. And for security, [[/blogs/mobile-app-security|mobile app security best practices]] explains what to require.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**App stores:** Apple, program enrolment; Apple, D-U-N-S Number; Apple, App Store Small Business Program; Apple, upcoming requirements; Google Play Console Help, registration; Google Play service fees; Android Developers, target API level requirements.",
          "**Tax, privacy and safety:** ATO, registering for GST; OAIC, small business; OAIC, NDB statistics 2025; OAIC, Children's Online Privacy Code; eSafety, social media age restrictions.",
          "**Accessibility:** W3C, what's new in WCAG 2.2.",
          "Store fees, deadlines and regulatory status change frequently; re-check them before relying on them. The budgeting model and the example are ours and hypothetical. Nothing here is ZSpace client data, and nothing is tax or legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A realistic mobile app budget in Australia is built from components: discovery, design, build, backend, integrations, testing and launch, plus the cost of running the app every year. Add GST, store accounts and fees, and any privacy, children's safety or accessibility work your app needs. Then compare quotes line by line rather than by total.",
          "The cheapest path to a good app is usually a narrower first release, not a lower day rate.",
        ],
        cta: {
          title: "Need a second opinion on an app budget?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/mobile-app-development|mobile app development]] and [[/services/ui-ux-design|product design]]. If it would help to sanity-check a scope or a quote, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "mobile-app-development-company-australia",
    title: "How to Choose a Mobile App Development Company in Australia",
    seoTitle: "Choosing a Mobile App Development Company in Australia",
    excerpt:
      "How to choose a mobile app development company in Australia: shortlisting, portfolio checks, account and code ownership, QA, privacy, support and a scorecard.",
    category: "Mobile Apps",
    banner: "vendorselect",
    sceneKind: "mobile",
    bannerAlt: "A shortlist of app development companies compared on portfolio, process, ownership, quality assurance, support and cost, narrowing to one choice",
    date: "2026-10-09",
    readingTime: "12 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "retail", "healthcare-healthtech", "logistics-supply-chain", "professional-services"],
    relatedSlugs: ["how-to-choose-a-mobile-app-development-company", "mobile-app-development-cost-australia", "web-development-company-australia"],
    faqs: [
      {
        q: "Should we hire a local Australian app developer or an offshore team?",
        a: "Either can work. What matters more is evidence that the team has shipped and maintained apps like yours, a clear process, strong communication and contracts that give you ownership. Local teams make in-person workshops easier. Offshore or remote teams can offer different cost structures and useful time-zone overlap. Judge each supplier on the same scorecard and ask how they handle meetings, support hours and urgent incidents.",
      },
      {
        q: "Who should own the Apple and Google developer accounts?",
        a: "Your business should. Apple requires an organisation to be a legal entity with a D-U-N-S number to enrol, and the account holder controls agreements, payments and app transfers. Enrol in your own name and invite the developer as a team member with the role they need. If a supplier publishes under their account, moving the app later is slower and depends on their cooperation.",
      },
      {
        q: "Do we automatically own the code we pay for?",
        a: "Not necessarily. Under Australian copyright law, a contractor who writes code generally owns the copyright unless it is assigned, and section 196(3) of the Copyright Act 1968 says an assignment has no effect unless it is in writing and signed. Put a written IP assignment in the contract, keep repositories in your own accounts and get legal advice on the wording, including any licensed third-party components.",
      },
      {
        q: "What questions should we ask an app development company?",
        a: "Ask which comparable apps they have shipped and still maintain, who will work on your project, how discovery works, how they estimate, how they test on real devices, how they handle accessibility and privacy, who holds the store and cloud accounts, what the warranty covers, how support is priced, and what happens to code and credentials if the relationship ends.",
      },
      {
        q: "How many app development companies should we compare?",
        a: "Three to five serious proposals is usually enough. Fewer gives you little comparison; more takes time to evaluate fairly and often produces proposals written against different assumptions. Send every shortlisted supplier the same brief, the same questions and the same deadline, and score them with the same weighted criteria so that the decision is defensible.",
      },
      {
        q: "Is a fixed-price contract safer than time and materials?",
        a: "Fixed price limits your exposure only when the scope is well defined, and suppliers price that risk in. When requirements are still emerging, fixed price tends to produce change requests and disputes about what was included. Many teams use a fixed-price discovery phase followed by time-and-materials delivery with a capped budget, fortnightly reviews and an agreed change process.",
      },
      {
        q: "What should a mobile app warranty cover?",
        a: "A warranty usually covers defects against the agreed specification for a fixed period after launch, at no extra cost. It does not normally cover new features, changes in requirements, third-party outages or OS updates released after launch. Get the period, response times, what counts as a defect and how it is reported in writing, and price ongoing maintenance separately.",
      },
      {
        q: "Can we change app developers after launch?",
        a: "Yes, if you planned for it. You need the source code in your repositories, build and signing credentials, store account access, cloud and third-party accounts in your name, and documentation for set-up and deployment. Ask for a handover rehearsal before final payment: another developer should be able to build and release the app from your accounts using the documentation alone.",
      },
    ],
    content: [
      {
        heading: "How should you choose a mobile app development company in Australia?",
        body: [
          "**Choose the company that has shipped and maintained apps like yours, can show a clear discovery and delivery process, tests on real devices, and agrees in writing that your business owns the code and the store, cloud and signing accounts.** Then compare three to five proposals against the same brief and a weighted scorecard. Price matters, but only once scope, ownership and support are comparable.",
          "This guide is for Australian businesses commissioning an app, whether for customers, staff in the field or partners. It covers how to write a brief that gets comparable proposals, what to check in a portfolio, the app-specific ownership issues that general web guides miss, quality and privacy questions, support terms, and a scorecard you can adapt.",
          "For the generic checklist, see [[/blogs/how-to-choose-a-mobile-app-development-company|how to choose a mobile app development company]]. If you are also choosing a web partner, [[/blogs/web-development-company-australia|choosing a web development company in Australia]] covers contracts, time zones and security questions in more depth. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Write a short brief first: the problem, users, must-have journey, integrations, budget range and timeline. Vague briefs produce incomparable proposals.",
          "Ask for apps the team built and still maintains, and check them in the stores: ratings, update history and how they behave on an older phone.",
          "Enrol your own Apple and Google developer accounts. Apple requires an organisation to be a legal entity with a D-U-N-S number.",
          "Get a written, signed IP assignment. Paying for code does not by itself transfer copyright in Australia.",
          "Ask how the team tests on real devices, handles accessibility and responds to privacy incidents.",
          "Agree support hours, response times and maintenance pricing before signing the build contract.",
          "Score every proposal with the same weighted criteria, and include a handover rehearsal in the contract.",
        ],
      },
      {
        heading: "Step 1: Write a brief that makes proposals comparable",
        body: [
          "Most mismatched quotes come from mismatched briefs. A two-page brief does more for the selection process than a long specification nobody reads. It should state the problem the app solves, who uses it, the one journey that must work at launch, the systems it must connect to, any sensitive data, your target launch window and a budget range.",
          "Sharing a budget range feels risky but helps. It lets suppliers propose the scope that fits, rather than guessing, and it reveals quickly who is a realistic fit. If you are unsure what a sensible range looks like, read [[/blogs/mobile-app-development-cost-australia|mobile app development cost in Australia]] first.",
        ],
        checklist: [
          "Business goal and how you will measure it.",
          "Users and roles, for example customers, staff and administrators.",
          "The launch journey, described step by step.",
          "Integrations, such as a CRM, Xero or MYOB, a booking system or a payment provider.",
          "Data sensitivity: health, financial, children's or location data.",
          "Platforms and devices your users actually have.",
          "Timeline constraints and the reason for them.",
          "Budget range, and whether it includes the first year of running costs.",
        ],
      },
      {
        heading: "Step 2: Build a shortlist",
        body: [
          "Look for evidence before you look for proximity. Good shortlist sources include referrals from businesses with similar apps, the developer credits on apps you admire in the App Store and Google Play, and directories, which are useful for discovery but should not be treated as verification.",
          "Narrow to three to five suppliers whose work is genuinely comparable. A team that builds games is not automatically suited to a field service app, and a team that mostly builds marketing websites may not have shipped a production app with [[/blogs/offline-first-mobile-app-development|offline sync]] or [[/blogs/mobile-app-payments|payments]].",
        ],
      },
      {
        heading: "Step 3: Check the portfolio properly",
        body: [
          "A portfolio page shows design. A shipped app shows engineering, support and longevity. For each app a supplier puts forward, ask what they did, who owns it and whether they still maintain it, then check it yourself.",
        ],
        checklist: [
          "Install it on an older or mid-range phone, not just the newest model.",
          "Check the store update history: is it updated regularly, or abandoned?",
          "Read recent reviews for crashes, login problems and slow support.",
          "Turn on larger text and a screen reader for a minute. Does the app still work?",
          "Try it with a poor connection. Does it fail gracefully or hang?",
          "Ask to speak with that client, and ask them about communication and post-launch support.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: ask each supplier to walk you through one app's architecture and its last three releases. Teams that maintain their work can explain what changed and why. Teams that cannot often handed the app over and moved on.",
        },
      },
      {
        heading: "Step 4: Ask app-specific ownership questions",
        body: [
          "Ownership is where app projects differ most from websites. An app depends on accounts and keys that, if held by the wrong party, can make it hard to update or move the app.",
          "**Developer accounts.** Apple's Developer Program requires an organisation to be a legal entity, not a trading name, with a D-U-N-S number, a domain email address and a functional website, and the person enrolling must have legal authority to bind the organisation. Google Play charges a one-time US$25 fee, and personal accounts created after 13 November 2023 must meet testing requirements before publishing. Enrol both in your business's name and invite the supplier.",
          "**Signing keys and certificates.** Android apps are signed with a key, and iOS apps with certificates and provisioning profiles. Ask how keys are managed and who can access them. Losing control of signing material can complicate updates.",
          "**Code and IP.** Under Australian copyright law, a contractor who writes code generally owns the copyright unless it is assigned, and s196(3) of the Copyright Act 1968 says an assignment of copyright \"does not have effect unless it is in writing signed by or on behalf of the assignor\". Put a written assignment in the contract, ask what pre-existing or open-source components are licensed rather than assigned, and get legal advice.",
          "**Everything else.** Cloud hosting, the backend database, analytics, crash reporting, push notification services, email and SMS providers, domains and the repository should all be in accounts you own.",
        ],
      },
      {
        heading: "Step 5: Assess process, quality and communication",
        body: [
          "Ask each supplier to describe their process from discovery to launch, then ask for an example artefact from each stage: a discovery summary, a prototype, a test plan, a release note. The answers reveal more than any process diagram. For what a sound process looks like, see [[/blogs/mobile-app-development-process|the mobile app development process]] and [[/blogs/mobile-app-testing|mobile app testing before launch]].",
        ],
        table: {
          headers: ["Area", "Good answers sound like", "Warning signs"],
          rows: [
            ["**Discovery**", "A paid, time-boxed phase with user journeys, a data model and a risk list", "A fixed build price before any discovery"],
            ["**Estimating**", "Ranges with assumptions, and what would change them", "One number with no assumptions"],
            ["**Design**", "Prototypes tested with users; accessibility annotated", "Static screens only; accessibility 'at the end'"],
            ["**Testing**", "Real-device testing, automated tests on critical flows, defined device set", "\"We test everything manually before launch\""],
            ["**Releases**", "Staged rollouts, crash monitoring, rollback plan", "Releases straight to 100% of users"],
            ["**Communication**", "Named team, fortnightly demos of working software, shared backlog", "A single account manager relaying messages"],
          ],
        },
      },
      {
        heading: "Step 6: Ask about privacy, security and accessibility",
        body: [
          "A good app supplier helps you meet your obligations rather than leaving you to discover them. Our guides to [[/blogs/mobile-app-security|mobile app security]] and [[/blogs/mobile-app-data-privacy|mobile app data privacy]] explain what to require, and [[/blogs/website-accessibility-australia|website accessibility in Australia]] covers WCAG 2.2 and the Disability Discrimination Act. If your business is covered by the Privacy Act, or you handle health information, you need a supplier who designs for privacy and can support you during a data breach. The OAIC received 1,205 notifiable data breach notifications in 2025.",
        ],
        checklist: [
          "How do you decide what personal information the app collects, and where it is stored?",
          "Which third-party SDKs will the app include, and what data do they collect?",
          "Where are the backend and backups hosted, and does any personal information leave Australia?",
          "How do you store tokens and secrets on the device?",
          "How do you keep dependencies patched, and how quickly can you ship a security fix?",
          "What will you do, and how fast, if we suspect a data breach?",
          "Which WCAG 2.2 criteria do you test, and with which assistive technologies?",
        ],
        callout: {
          type: "note",
          text: "Under APP 8, a business covered by the Privacy Act must take reasonable steps before disclosing personal information overseas, and remains accountable for the overseas recipient. Ask where developers and support staff access production data from, not just where the servers are.",
        },
      },
      {
        heading: "Step 7: Agree support and maintenance before you sign",
        body: [
          "Apple and Google change requirements on fixed deadlines. Since 28 April 2026, apps uploaded to App Store Connect must be built with Xcode 26, and from 31 August 2026 Android apps and updates must target API level 36. Whoever maintains your app must plan for these every year.",
          "Agree in the contract: the warranty period and what it covers; a maintenance plan with a monthly fee or hours bank; response and resolution times by severity; support hours in Australian time; and how emergency fixes outside those hours are handled and priced.",
          "**Time zones, honestly.** India is 4.5 hours behind Sydney and Melbourne during AEST and 5.5 hours during AEDT; Brisbane is always 4.5 hours ahead of India and Perth 2.5 hours. A remote team in India therefore overlaps most of the Australian business day. An onshore team does not automatically provide overnight cover either. Whatever the location, the support terms are what count. Our [[/blogs/mobile-app-maintenance|mobile app maintenance guide]] lists what a plan should include.",
        ],
      },
      {
        heading: "Step 8: Compare proposals with a weighted scorecard",
        body: [
          "Score every proposal on the same criteria, using weights agreed before you read them. The weights below are ours; adjust them to your project, but keep them fixed once scoring starts.",
        ],
        table: {
          headers: ["Criterion", "Weight", "What earns a high score"],
          rows: [
            ["Relevant shipped and maintained apps", "20%", "Comparable apps, verifiable in the stores, with client references"],
            ["Understanding of your problem", "15%", "Proposal reflects your users and risks, not a template"],
            ["Process and quality", "15%", "Discovery, real-device testing, automation, staged releases"],
            ["Ownership and contract terms", "15%", "Your accounts, written IP assignment, handover plan"],
            ["Privacy, security and accessibility", "10%", "Specific answers and evidence, not assurances"],
            ["Support and maintenance terms", "10%", "Clear SLA, support hours, maintenance pricing"],
            ["Team and communication", "5%", "Named people, regular demos, shared tools"],
            ["Price and commercial model", "10%", "Transparent assumptions and change process"],
          ],
        },
      },
      {
        heading: "Hypothetical example: two proposals, one decision",
        body: [
          "**This example is hypothetical.** A Perth-based equipment hire business wants an app for customers to book equipment and for drivers to record deliveries offline. Two suppliers respond. Supplier A quotes a lower total for a fixed price, publishes under its own developer account and offers support 'as needed'. Supplier B proposes a paid two-week discovery followed by a capped time-and-materials build, uses the client's accounts, names the offline sync approach and quotes a monthly maintenance plan.",
          "On the scorecard, Supplier A wins on headline price but loses on ownership, support terms and evidence of offline experience. Supplier B scores higher overall. The business asks Supplier A to revise its terms on account ownership and support; when it declines, the decision is straightforward and documented.",
        ],
      },
      {
        heading: "Red flags",
        body: [],
        checklist: [
          "No discovery, and a fixed price after one call.",
          "Reluctance to let you contact past clients.",
          "Insistence on publishing under the supplier's developer account.",
          "No written IP assignment, or one limited to 'final deliverables'.",
          "Vague answers about testing devices, accessibility or privacy.",
          "Unnamed team members, or a team that changes after signing.",
          "Support described as 'best effort' with no response times.",
          "Pressure to sign quickly for a discount.",
        ],
      },
      {
        heading: "Questions to send every shortlisted company",
        body: [
          "Send these with your brief, ask for written answers and score them. Identical questions are the easiest way to make proposals comparable.",
        ],
        checklist: [
          "Which two apps you built are most similar to ours, and do you still maintain them?",
          "Who exactly will work on our project, and what is their experience?",
          "What will discovery produce, and what does it cost?",
          "Which framework do you recommend for us, and why not the alternatives? (See [[/blogs/native-vs-cross-platform-app-development|native vs cross-platform]] and [[/blogs/flutter-vs-react-native|Flutter vs React Native]] for the trade-offs.)",
          "How do you test, and on which devices?",
          "Which WCAG 2.2 criteria do you design and test for?",
          "How do you handle personal information, third-party SDKs and data location?",
          "Will all accounts, keys and repositories be in our name?",
          "What does the warranty cover, and what does maintenance cost?",
          "How do you handle change requests, and at what rate?",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**App stores:** Apple, program enrolment; Apple, D-U-N-S Number; Apple, upcoming requirements; Google Play Console Help, registration; Android Developers, target API level.",
          "**Law and privacy:** Copyright Act 1968 s196 (AustLII); OAIC, APP guidelines chapter 8; OAIC, NDB statistics 2025.",
          "**Accessibility:** W3C, what's new in WCAG 2.2.",
          "The scorecard weights and the example are ours and hypothetical. Store rules change; re-check them before relying on them. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Choosing a mobile app development company in Australia comes down to evidence and terms. Look for apps the team built and still maintains, a process you can inspect, and specific answers on testing, privacy and accessibility. Then make sure the contract gives your business the accounts, keys and code, and prices support before you need it.",
          "Compare every proposal against the same brief and scorecard, and the right choice is usually clear. If the app is the first step in a bigger product, [[/blogs/mvp-development-australia|MVP development for Australian startups]] and [[/blogs/digital-product-development-australia|digital product development in Australia]] cover how to stage the investment, and [[/blogs/api-integration-australia|API integration for Australian businesses]] covers connecting the app to your other systems.",
        ],
        cta: {
          title: "Shortlisting app partners?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/mobile-app-development|mobile app development]] and [[/services/ui-ux-design|UX and product design]]. We are happy to answer the questions above in writing, including account ownership and support hours.",
        },
      },
    ],
  },
];
