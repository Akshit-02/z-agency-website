import type { BlogPost } from "./blog-data";

/**
 * Founder batch 2, insight pair: in-product SaaS dashboards that drive action
 * (topic 35) and measuring lead-gen / B2B / service conversions across several
 * channels (topic 39). No prices, no vendor accuracy figures, no client data.
 * Sources checked 2026-10-14: Stephen Few, "Dashboard Confusion" (2004);
 * NN/g on dashboards and preattentive attributes (Laubheimer, 2017) and on
 * empty states (Kaplan, 2021); W3C WCAG 2.2 Understanding SC 1.4.1 and 1.4.11;
 * Cleveland & McGill (1984), bibliographic details only, cited at a high level;
 * Google Analytics Help: attribution models (10596866), attribution settings and
 * lookback windows (10597962), UTM parameters (10917952), unwanted referrals
 * (10327750), consent mode behavioural modelling (11161109); Google Ads Help:
 * enhanced conversions for leads and the 15 June 2026 Data Manager API change
 * (15713840); Google developers: consent mode overview and GA4 recommended
 * events; Google EU user consent policy.
 */
export const founderInsightPosts2: BlogPost[] = [
  {
    slug: "saas-dashboard-design",
    title: "How to Design a SaaS Dashboard That Helps Users Take Action, Not Just View Data",
    seoTitle: "SaaS Dashboard Design: Help Users Act, Not Just Look",
    excerpt:
      "Design an in-product SaaS dashboard around user decisions: a 12-point scorecard, empty and error states, accessible charts and when not to build one at all.",
    category: "UI/UX",
    banner: "dashboard",
    sceneKind: "analytics",
    bannerAlt: "A SaaS dashboard in which each metric tile shows a target, a change from the prior period and a button for the next action",
    date: "2026-10-14",
    readingTime: "12 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "startups", "b2b-enterprise"],
    relatedSlugs: ["saas-product-design", "marketplace-seller-dashboard", "saas-onboarding-optimization"],
    faqs: [
      {
        q: "What is the difference between an operational and an analytical dashboard?",
        a: "An operational dashboard supports time-sensitive work: it shows what needs attention now and lets the user act on it. An analytical dashboard supports slower analysis and planning, so it can carry more history, comparison and filtering. NN/g draws the same distinction. Many SaaS products need one of each, for different roles, rather than one screen trying to do both.",
      },
      {
        q: "How many metrics should a SaaS dashboard show?",
        a: "There is no reliable magic number. Show the metrics tied to decisions the user makes on this screen, and move the rest to reports. A useful test is to ask, for each tile, what the user would do differently if the number doubled or halved. If the answer is nothing, it probably does not belong on the dashboard.",
      },
      {
        q: "Should we use pie charts or donut charts?",
        a: "Rarely. NN/g advises avoiding them most of the time because people judge angles and areas less accurately than lengths and positions. If you do use one, keep the number of slices small, label each slice with its value, and make sure slices can be told apart without relying on colour alone.",
      },
      {
        q: "What should a brand new account see on the dashboard?",
        a: "Not a grid of zeros. Show what the dashboard will do once data arrives, the one or two steps that make that happen, and optionally clearly labelled sample data. NN/g recommends using empty states to communicate system status, teach, and give a direct path to key tasks.",
      },
      {
        q: "How do we know whether a dashboard redesign worked?",
        a: "Measure what users do after viewing it, not how often it is viewed. Useful signals are clicks from a dashboard item into the action it points to, time from an alert appearing to it being resolved, and whether users return to the dashboard on the cadence you designed it for. Agree the baseline before you ship the change.",
      },
      {
        q: "Do dashboards need to meet accessibility standards?",
        a: "If you aim for WCAG 2.2 AA, yes. Two criteria trip dashboards up most often: 1.4.1 (colour must not be the only way information is shown) and 1.4.11 (chart lines, bars and controls need at least 3:1 contrast against adjacent colours). Filters must also work by keyboard, and key figures should be available as text or a table.",
      },
    ],
    content: [
      {
        heading: "What makes a SaaS dashboard actionable?",
        body: [
          "**An actionable dashboard is built around the decisions a specific user makes repeatedly. Each item shows a number in context (a target, a threshold or the previous period), makes exceptions stand out without relying on colour alone, and puts the next step one click away. If a tile cannot answer \"so what do I do now?\", it belongs in a report, not on the dashboard.**",
          "Most dashboards that get glanced at and closed fail for one of three reasons. They were designed to show everything the product records rather than what one person needs. They show numbers without saying whether those numbers are good or bad. Or they stop at the number, so the user has to go elsewhere to act on it.",
          "This guide is for SaaS founders, product managers and designers building a customer-facing dashboard for a first version or a redesign. It covers in-product dashboards that your customers use, not your own internal analytics. For the wider product design picture, see [[/blogs/saas-product-design|our SaaS product design guide]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Name the user, the job and how often they visit before choosing a single chart.",
          "Decide whether each dashboard is operational (act now) or analytical (understand and plan).",
          "Give every metric context: a target, threshold or comparison period.",
          "Put the next action next to the exception, not on another screen.",
          "Design the empty, loading, partial and error states, not only the full one.",
          "Prefer charts based on position and length; never use colour as the only signal.",
          "Judge success by actions taken from the dashboard, not by page views.",
        ],
      },
      {
        heading: "Start with what a dashboard is for",
        body: [
          "Stephen Few's widely cited definition is still the most useful starting point: a dashboard is \"a visual display of the most important information needed to achieve one or more objectives; consolidated and arranged on a single screen so the information can be monitored at a glance\". In the same 2004 article he notes that a dashboard tells you what is happening but not why, and that it can be the starting point for drilling into the detail ([[https://www.perceptualedge.com/articles/ie/dashboard_confusion.pdf|Few, Dashboard Confusion]]).",
          "Two parts of that definition do most of the work. **\"Most important information\"** means you have to leave things out. **\"Objectives\"** means the dashboard exists to serve a goal the user has, not to prove how much data the product holds.",
          "NN/g separates two kinds of dashboard. Operational dashboards \"impart critical information quickly to users as they are engaged in time-sensitive tasks\". Analytical dashboards give at-a-glance information \"used for analysis and decision making\" ([[https://www.nngroup.com/articles/dashboards-preattentive/|NN/g, Laubheimer, 2017]]). Mixing both on one screen is a common reason a dashboard feels busy and useless at the same time.",
        ],
      },
      {
        heading: "Map users, jobs and cadence first",
        body: [
          "Before any wireframe, write down who opens the dashboard, what they are trying to get done and how often. The table below is a template; replace the example rows with your own roles.",
        ],
        table: {
          headers: ["Role", "Job on this screen", "Visit cadence", "Dashboard type", "What a good visit ends with"],
          rows: [
            ["Account owner", "Check the account is healthy and nothing needs approval", "Weekly", "Analytical, light", "Approved items, or a decision to look deeper"],
            ["Day-to-day operator", "Clear today's exceptions", "Several times a day", "Operational", "Exceptions resolved or assigned"],
            ["Team lead", "Spot who or what is falling behind", "Daily", "Operational with trends", "A reassigned task or a message sent"],
            ["Finance or admin", "Confirm usage and billing", "Monthly", "Often not a dashboard: a report or email", "A downloaded statement"],
          ],
        },
        callout: {
          type: "tip",
          text: "For every proposed tile, ask: \"If this number doubled or halved, what would this user do differently?\" If nobody can answer, drop the tile or move it to a report.",
        },
      },
      {
        heading: "The Dashboard Action Scorecard",
        body: [
          "Use this scorecard to assess an existing dashboard or a design before it is built. Score each criterion 0 (missing), 1 (partly there) or 2 (clearly met), and write down the evidence for the score: a screenshot, a user quote or an analytics figure. Scoring as a group of three or four people (product, design, engineering, someone who talks to customers) tends to surface disagreements that are worth having.",
        ],
        table: {
          headers: ["#", "Criterion", "Scores 2 when…", "Evidence to collect"],
          rows: [
            ["1", "**Named user and job**", "The dashboard has a written primary role and job, and every widget maps to a decision that role makes", "A one-line purpose per widget"],
            ["2", "**Clear type per role**", "Each role's default view is either operational or analytical, not a mix", "Role list with default view"],
            ["3", "**Context on every metric**", "Each number shows a target, threshold or comparison period", "Count of bare numbers"],
            ["4", "**Exceptions stand out**", "Items needing attention are visible at a glance, using position, size, icons or text as well as colour", "Greyscale screenshot test"],
            ["5", "**Next action within one click**", "Every exception has a button or link to the place where it is resolved", "Click path from tile to action"],
            ["6", "**Drill-down to the records**", "Users can see the list of records behind any number", "Test three numbers"],
            ["7", "**Designed states**", "Empty, first-run, loading, partial-data and error states are designed and tested", "Screenshots of each state"],
            ["8", "**Role-based defaults**", "Each role lands on a view that suits its job without configuring anything", "First login per role"],
            ["9", "**Readable charts**", "Charts rely on position and length; no 3D; any pie chart has few slices with labelled values", "Chart inventory"],
            ["10", "**Accessible**", "Meets WCAG 1.4.1 and 1.4.11; filters work by keyboard; figures available as text or table", "Keyboard and contrast check"],
            ["11", "**Freshness and definitions**", "Users can see when data last updated and what each metric means", "Hover or info text per metric"],
            ["12", "**Instrumented for action**", "You track clicks into actions, alert-to-resolution time and return visits", "Event list in analytics"],
          ],
        },
      },
      {
        heading: "Reading your score",
        body: [
          "The maximum is 24. Treat the bands below as a rough guide for prioritising work, not a benchmark: they are ZSpace Labs' suggested thresholds, not industry data.",
          "**0 to 10:** the dashboard is probably decorative. Go back to the user and job mapping before changing any visuals. **11 to 18:** the foundations are there; fix the lowest-scoring criteria first, usually context (3), next action (5) and states (7). **19 to 24:** focus on instrumentation and on testing with real users, because the remaining problems will not show up in a scorecard.",
          "Any 0 on criteria 1, 5 or 10 is worth fixing regardless of the total. Without a named job the rest is guesswork; without a next action the dashboard cannot drive action; and accessibility failures can lock some users out entirely.",
        ],
        callout: {
          type: "note",
          text: "The scorecard tells you where a design is weak. It does not tell you whether users succeed with it. Pair it with a short round of task-based testing, as described in our guide to [[/blogs/how-much-ux-design-before-development|how much UX work to do before development]].",
        },
      },
      {
        heading: "Design every state, not just the full one",
        body: [
          "Design reviews usually show a dashboard full of tidy, realistic data. Real accounts spend a lot of time in other states, and a new customer's first view is almost always the empty one. NN/g recommends using empty states to communicate system status, to provide learning cues and to give direct pathways for key tasks ([[https://www.nngroup.com/articles/empty-state-interface-design/|NN/g, Kaplan, 2021]]).",
        ],
        table: {
          headers: ["State", "What goes wrong", "What to design"],
          rows: [
            ["**First run (new account)**", "A grid of zeros and empty axes", "Explain what will appear, show the one or two setup steps that make it appear, optionally show clearly labelled sample data"],
            ["**Empty (no data in range)**", "Looks identical to a broken chart", "Say why it is empty (\"No orders in the last 7 days\") and offer to widen the range"],
            ["**Loading**", "Layout jumps as tiles arrive", "Reserve space with skeletons; load the most important tile first"],
            ["**Partial data**", "Totals look wrong because a source has not synced", "Mark affected tiles and show the last successful sync time"],
            ["**Error**", "Generic \"Something went wrong\"", "Say which tile failed, whether other numbers are affected and what the user can do"],
            ["**Permission-limited**", "Blank tiles with no explanation", "Hide tiles the role cannot use, or say who can grant access"],
          ],
        },
        callout: {
          type: "tip",
          text: "The first-run state is part of onboarding. If the dashboard is where new users land, design it alongside your activation steps; see [[/blogs/saas-onboarding-optimization|SaaS onboarding optimisation]].",
        },
      },
      {
        heading: "Choose charts people can read quickly and accurately",
        body: [
          "Research on graphical perception, starting with Cleveland and McGill's 1984 paper in the Journal of the American Statistical Association, found that people judge values more accurately from position along a common scale and from length than from angle, area or shading. NN/g's dashboard guidance applies the same idea: use \"length and 2D position\" to communicate quantities, avoid colour for magnitude, avoid pie and donut charts most of the time, and avoid 3D, which makes charts harder to read.",
        ],
        checklist: [
          "Comparing categories: a sorted bar chart.",
          "Change over time: a line chart with the target or prior period shown as a reference line.",
          "Progress to a goal: a bar against a target marker, not a gauge.",
          "Single number: the number, the comparison and a short label saying whether that is good or bad.",
          "Many items needing attention: a ranked list or table with status text, not a chart.",
          "Do not use 3D effects, dual axes that invite false comparisons, or colour shading to encode amounts.",
        ],
      },
      {
        heading: "Make charts accessible",
        body: [
          "Two WCAG 2.2 success criteria catch most dashboard problems. **1.4.1 Use of Color (Level A)** says colour must not be \"the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element\" ([[https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html|W3C, Understanding SC 1.4.1]]). A red tile for \"overdue\" therefore also needs an icon, a label or a pattern.",
          "**1.4.11 Non-text Contrast (Level AA)** asks for a contrast ratio of at least 3:1 against adjacent colours for user interface components and for parts of graphics required to understand the content. W3C's guidance applies this to chart lines and to pie segments that are distinguished only by their edges, and notes that labels and values can remove the need ([[https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html|W3C, Understanding SC 1.4.11]]). Text inside charts follows the normal text contrast rule.",
          "Beyond those two: make date pickers and filters usable by keyboard, give each chart a text summary or a data table, and do not rely on hover tooltips as the only way to read a value. For a wider pre-launch check, see our [[/blogs/website-accessibility-guide|website accessibility guide]]. A shared component library helps keep these rules consistent across screens; our piece on [[/blogs/design-systems-for-teams-that-move-fast|design systems for teams that move fast]] covers how to set one up.",
        ],
      },
      {
        heading: "Hypothetical example: a scheduling product's home screen",
        body: [
          "**This example is hypothetical.** A B2B scheduling SaaS shows clinic managers six tiles: total bookings, revenue, a donut of appointment types, staff utilisation, a map of locations and a bookings-over-time chart. The team scores it 9 out of 24. No tile has a target, the donut has eleven slices, nothing links to an action, and new accounts see six empty charts.",
          "The redesign keeps two analytical tiles (bookings against last month, and utilisation against a target the clinic sets) and adds an operational \"Needs attention\" list at the top: unconfirmed appointments for tomorrow, staff with no availability next week and failed reminder messages. Each item has a single button (Confirm, Ask staff to update, Resend). The donut becomes a sorted bar chart in a report. New accounts see a short checklist to add staff and connect a calendar, with a sample view labelled as sample data. The team re-scores it at 19 and, more importantly, starts tracking how many attention items are resolved from the dashboard each week.",
        ],
      },
      {
        heading: "How to tell whether the dashboard drives action",
        body: [
          "Page views tell you a dashboard was opened, not that it was useful. Measure what happens next. The measures below are ZSpace Labs' recommendation rather than a published standard.",
        ],
        checklist: [
          "Action click-through: the share of dashboard visits that include a click into an action the dashboard points to.",
          "Alert to resolution: the time from an exception appearing to it being cleared.",
          "Return cadence: whether each role returns about as often as you designed for (daily for operators, weekly for owners).",
          "Drill-down use: which numbers people investigate, a hint about what is missing from the surface.",
          "Dead tiles: widgets nobody interacts with over a set period, which are candidates for removal.",
        ],
      },
      {
        heading: "When not to build a dashboard",
        body: [
          "A dashboard is not always the right answer, and it is worth saying so in planning before weeks go into charts.",
        ],
        checklist: [
          "**The user needs to know one thing at one moment.** A notification or email is better than a screen they have to remember to open.",
          "**The user visits monthly or less.** A scheduled summary, digest or downloadable report usually serves them better.",
          "**There is one obvious next task.** Land the user on that task or a to-do list, not on charts about it.",
          "**You have little data yet.** In an early product or a new account, a dashboard mostly shows emptiness. Ship the core workflow first.",
          "**The real need is ad hoc analysis.** Power users exploring data are better served by exports, a report builder or an integration with the BI tool they already use.",
          "**It is mainly for sales demos.** A dashboard built to impress in a demo rarely helps the person who logs in every day.",
        ],
        callout: {
          type: "note",
          text: "For a vertical example of a customer-facing dashboard that puts tasks before charts, see [[/blogs/marketplace-seller-dashboard|how to design a marketplace seller dashboard]]. For a store team's internal analytics, which is a different job, see [[/blogs/ecommerce-dashboard-design|ecommerce dashboard design]].",
        },
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Starting from the data model (\"what can we show?\") instead of the user's decisions.",
          "One dashboard for every role, so nobody's job is served well.",
          "Numbers with no target or comparison, so users cannot tell good from bad.",
          "Red and green as the only status signal.",
          "Exceptions that require navigating elsewhere to fix.",
          "Never designing the empty, loading and error states.",
          "Hiding when data was last updated, so users stop trusting the numbers.",
          "Measuring success by dashboard views.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Start with the people and the jobs, choose an operational or analytical purpose for each view, and give every number context and a next action. Then design the states real accounts actually see, check charts against WCAG 1.4.1 and 1.4.11, and measure what users do after looking. If you already have a dashboard, run the scorecard this week with three or four colleagues, fix the lowest-scoring criteria first and test the result with a handful of real users. If [[/services/ui-ux-design|UI/UX design support]] would help with the redesign, that is the kind of work we do.",
        ],
        cta: {
          title: "Want a second opinion on your dashboard?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|UI/UX design]] and [[/services/website-development|web application development]]. If useful, we can talk through your dashboard against the scorecard above and what to change first.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Dashboard definition and types: [[https://www.perceptualedge.com/articles/ie/dashboard_confusion.pdf|Stephen Few, Dashboard Confusion (Intelligent Enterprise, March 2004)]]; [[https://www.nngroup.com/articles/dashboards-preattentive/|NN/g, Dashboards: Making Charts and Graphs Easier to Understand (Laubheimer, 2017)]]; [[https://www.nngroup.com/articles/empty-state-interface-design/|NN/g, Designing Empty States in Complex Applications (Kaplan, 2021)]].",
          "Perception research: [[https://www.jstor.org/stable/2288400|Cleveland and McGill, Graphical Perception, Journal of the American Statistical Association 79(387), 1984]] (cited at a high level).",
          "Accessibility: [[https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html|W3C, Understanding SC 1.4.1 Use of Color]]; [[https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html|W3C, Understanding SC 1.4.11 Non-text Contrast]].",
          "Accessed 14 October 2026.",
        ],
      },
    ],
  },
  {
    slug: "measure-multi-channel-website-conversions",
    title: "How to Measure Website Conversions When Customers Use Multiple Channels Before Buying",
    seoTitle: "Measuring Conversions Across Channels for Lead-Gen",
    excerpt:
      "A four-part plan for lead-gen, B2B and service businesses: capture sources, connect CRM outcomes to GA4 and Ads, ask buyers, and read each tool's limits.",
    category: "CRO",
    banner: "integration",
    sceneKind: "crm",
    bannerAlt: "Website, ad platforms, CRM and a self-reported source field feeding one measurement plan with four steps: capture, connect, ask and read",
    date: "2026-10-14",
    readingTime: "12 min read",
    relatedServiceSlugs: ["cro-audit", "website-development"],
    relatedIndustrySlugs: ["professional-services", "b2b-enterprise", "saas-technology"],
    relatedSlugs: ["improve-website-enquiry-form-conversions", "website-gets-traffic-but-no-leads", "ecommerce-attribution-models"],
    faqs: [
      {
        q: "Why does GA4 show so many leads as Direct?",
        a: "Usually because the visit that produced the lead carried no campaign information. Common causes are links without UTM tags (email signatures, PDFs, messaging apps), the visitor typing the address after hearing about you elsewhere, and redirects through booking or payment tools that start a new session. Tag every link you control, list third-party domains as unwanted referrals, and use a self-reported field for the rest.",
      },
      {
        q: "Which GA4 attribution model should a lead-gen business use?",
        a: "GA4 offers three: data-driven, paid and organic last click, and Google paid channels last click. Data-driven needs steady volume to be meaningful; with few leads, last click is easier to reason about. Whichever you use, remember that GA4 can only credit touchpoints it saw, inside its lookback window of at most 90 days, so it will not tell you what closed a six-month deal.",
      },
      {
        q: "Is a \"How did you hear about us?\" field reliable?",
        a: "It is reliable for what it measures: what the buyer remembers and chooses to say. It is good at revealing word of mouth, podcasts, communities and private sharing that no tracking sees. It is weak on precise credit because people forget and simplify. Use it alongside tracked data, not instead of it.",
      },
      {
        q: "What changed with offline conversion imports in 2026?",
        a: "Google says that from 15 June 2026 offline conversion imports and enhanced conversions for leads uploads are migrated to the Data Manager API and blocked in the Google Ads API, apart from developer tokens allowlisted for legacy access. If a CRM integration or script uploads conversions through the Google Ads API, check with whoever maintains it that it now uses Data Manager. Google may change these details, so read the current Help page.",
      },
      {
        q: "Does Consent Mode fill the gaps when visitors decline cookies?",
        a: "Only partly, and often not at all for smaller sites. GA4 behavioural modelling needs, among other things, at least 1,000 events a day from users who declined analytics storage for at least 7 days and at least 1,000 daily users who accepted it on at least 7 of the previous 28 days. Even then Google does not guarantee eligibility.",
      },
      {
        q: "Do we need an attribution tool?",
        a: "Most small and mid-sized service businesses do not need one to start. Consistent UTMs, CRM source fields, a self-reported field and conversion imports answer most practical questions. Consider a tool when you have many channels with real spend, a team to act on its output, and clean underlying data, because a tool cannot fix missing capture.",
      },
    ],
    content: [
      {
        heading: "How do you measure conversions across several channels?",
        body: [
          "**Do not look for one tool that tells the whole truth. Build a simple measurement plan in four parts: capture the source of every lead consistently, connect what happens in your CRM back to GA4 and your ad platforms, ask buyers how they found you, and read each data source for the question it can actually answer. Then compare the views monthly and act where they agree.**",
          "This guide is for lead-generation, B2B and service businesses, where a visit becomes an enquiry and the enquiry becomes revenue weeks or months later, often on a call. Online stores have a different problem (the sale happens on the site); for that, see our guides to [[/blogs/ecommerce-attribution|ecommerce attribution]] and [[/blogs/ecommerce-attribution-models|choosing an ecommerce attribution model]].",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "GA4, ad platforms and your CRM will always disagree, because each sees a different part of the journey.",
          "Consistent lowercase UTMs and CRM source fields fix more problems than any attribution model.",
          "Send CRM outcomes (qualified, won) back to Google Ads so bidding learns from revenue, not form fills.",
          "Ask buyers how they heard of you; it reveals channels no tracking can see.",
          "GA4 has three attribution models and a lookback window of at most 90 days.",
          "Consent Mode modelling needs volumes most small sites do not reach.",
        ],
      },
      {
        heading: "Why the numbers never match",
        body: [
          "A typical service buyer might see a LinkedIn post, search your name a week later, read three pages, leave, come back from a colleague's forwarded link, submit a form, and sign a contract after two calls and a proposal. Each system records a slice of that.",
          "**GA4** sees website sessions it was allowed to measure. It credits only touchpoints within its lookback window, and a forwarded link or typed address arrives as Direct. **Ad platforms** see their own ads and claim conversions they can connect to them, so platforms can each claim the same lead. **Your CRM** sees what was captured on the form and what sales recorded, which is often \"Website\" for everything unless you capture more. **The buyer** remembers the colleague's recommendation, which none of the systems saw.",
          "None of these is wrong. They answer different questions, and the plan below is about making each one as accurate as it can be and then reading them together.",
        ],
      },
      {
        heading: "Part 1: Capture the source of every lead",
        body: [
          "Most attribution problems are capture problems. Google's guidance is that you should always use utm_source, utm_medium and utm_campaign, and that parameter values are case sensitive, so utm_source=google and utm_source=Google are reported separately ([[https://support.google.com/analytics/answer/10917952|Google Analytics Help, UTM parameters]]). GA4 also supports utm_id, utm_source_platform, utm_term and utm_content, among others. Write a convention, put it in a shared sheet and use it for every link you control.",
        ],
        table: {
          headers: ["Parameter", "Convention (example)", "Notes"],
          rows: [
            ["utm_source", "linkedin, google, newsletter, partner-name", "Where the click came from. Lowercase, no spaces."],
            ["utm_medium", "paid-social, cpc, email, referral, organic-social", "The type of channel. Keep a fixed list so GA4 channel groups work."],
            ["utm_campaign", "2026-q4-audit-offer", "Date or quarter plus a short name, so campaigns sort and do not collide."],
            ["utm_content", "carousel-a, footer-link", "Which ad or link, for comparing creatives."],
            ["utm_id", "Campaign ID from your sheet", "Lets you join cost or campaign data later."],
          ],
        },
        callout: {
          type: "tip",
          text: "Tag the links people forget: email signatures, proposal PDFs, social bios, partner directories and links you share in messaging apps. Do not add UTMs to internal links on your own site; that overwrites the real source of the session.",
        },
      },
      {
        heading: "CRM fields to add",
        body: [
          "UTMs only help if they reach the CRM with the lead. Store them in hidden form fields on submission (and, for first touch, in first-party storage from the first visit, subject to your consent setup). A minimal field schema:",
        ],
        table: {
          headers: ["CRM field", "How it is filled", "Why you need it"],
          rows: [
            ["First-touch source / medium / campaign", "Captured on first visit, submitted with the form", "What started the relationship"],
            ["Last-touch source / medium / campaign", "Captured on the converting session", "What prompted the enquiry"],
            ["Landing page", "URL of the first page in the converting session", "Which content brings leads"],
            ["Click IDs (gclid and others)", "Read from the URL when present", "Lets you send outcomes back to ad platforms"],
            ["Self-reported source", "Visible form field (see Part 3)", "What the buyer remembers"],
            ["Lead stage and outcome", "Updated by sales", "Qualified, proposal, won or lost, with dates and value"],
          ],
        },
      },
      {
        heading: "Part 2: Connect CRM outcomes back to GA4 and Google Ads",
        body: [
          "If Google Ads only knows about form fills, its bidding optimises for form fills, including spam and poor-fit enquiries. Sending later outcomes back changes what the system learns from.",
          "**In GA4**, Google provides recommended lead events: generate_lead for the enquiry, then qualify_lead, disqualify_lead, working_lead, close_convert_lead and close_unconvert_lead for later stages ([[https://developers.google.com/analytics/devguides/collection/ga4/reference/events|Google, GA4 recommended events]]). Marking generate_lead as a key event is the minimum; sending qualified and won stages from the CRM (usually server side) lets you see which channels produce good leads, not just many.",
          "**In Google Ads**, enhanced conversions for leads is Google's upgraded form of offline conversion import. Your site sends hashed lead information (such as the email address) from the form through the Google tag or Tag Manager. When the lead later qualifies or closes, you upload the conversion with the same hashed data, and Google matches it. Google advises including the GCLID whenever possible, and it is required if you are not using a tag to collect user-provided data ([[https://support.google.com/google-ads/answer/15713840|Google Ads Help, enhanced conversions for leads]]).",
          "**The 2026 change.** Google's Help page says that starting 15 June 2026, offline conversion imports and enhanced conversions for leads uploads are migrated to the Data Manager API and blocked in the Google Ads API, except for developer tokens allowlisted for legacy access. Google's listed routes now include Google Ads Data Manager (in the interface or by API) and supported integrations. If your CRM connector, agency script or custom integration was built on the Google Ads API, ask whoever maintains it to confirm it has moved. This is a recent change and Google may revise it, so check the page before building anything new. Once outcomes flow back, use them to [[/blogs/improve-website-lead-quality|diagnose and improve lead quality]].",
        ],
        callout: {
          type: "note",
          text: "Personal data is involved here. Hashing is not anonymisation, so say in your privacy notice that lead details may be shared with advertising platforms for measurement, and follow the consent rules that apply where your visitors are.",
        },
      },
      {
        heading: "Part 3: Ask buyers how they found you",
        body: [
          "Self-reported attribution means asking the buyer directly, usually on the enquiry form or in the first call. It catches what tracking cannot: a recommendation over dinner, a podcast, a private community, a post forwarded in a messaging app. It also has limits. People forget, compress a long journey into one memorable moment and pick the first plausible option. Treat it as a different lens, not a correction.",
        ],
        checklist: [
          "Use an open text field (\"How did you hear about us?\") or a short list plus \"Other, please tell us\". Open text gives richer answers; a list is easier to report on. Many teams use a list and review the \"Other\" answers monthly.",
          "Keep the list short and in plain words buyers would use (\"Google search\", \"LinkedIn\", \"A colleague or friend\", \"Podcast or event\").",
          "Randomise or alphabetise options so the first one is not over-chosen.",
          "Make it optional if it hurts form completion; test it rather than assume. Our guide to [[/blogs/improve-website-enquiry-form-conversions|improving enquiry form conversions]] covers how to test form changes.",
          "Ask again on the first sales call and record the answer in the CRM. Spoken answers are often more detailed.",
          "Group free-text answers into categories monthly. Do not let the raw text pile up unread.",
        ],
      },
      {
        heading: "Part 4: Read each source for what it can and cannot say",
        body: [
          "GA4 currently offers three attribution models: data-driven, paid and organic last click, and Google paid channels last click. First click, linear, time decay and position-based were removed in November 2023 ([[https://support.google.com/analytics/answer/10596866|Google Analytics Help, attribution models]]). For key events other than first visits, the lookback window defaults to 90 days and can be set to 30 or 60, so 90 days is the maximum ([[https://support.google.com/analytics/answer/10597962|Google Analytics Help, attribution settings]]). If your sales cycle is longer, early touchpoints simply fall outside GA4's view.",
        ],
        table: {
          headers: ["Source", "Good for answering", "Cannot tell you"],
          rows: [
            ["**GA4**", "Which channels and pages precede enquiries; on-site behaviour; trends over time", "Touchpoints older than the lookback window; journeys on devices or browsers it could not link; visitors it could not measure under consent rules; revenue unless you send it"],
            ["**Google Ads, LinkedIn and other ad platforms**", "Which of their own campaigns, keywords and audiences produce leads (and, with imports, good leads)", "Anything outside their platform; they may each claim the same lead"],
            ["**CRM**", "Which sources produce pipeline and revenue; lead quality; time to close", "Anything not captured on the form or entered by sales; it is only as good as Part 1"],
            ["**Self-reported**", "Word of mouth, communities, podcasts, events, private sharing", "Precise credit across many touches; small differences between channels"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Act confidently where at least two views agree. Where they disagree, look for the reason (missing UTMs, a channel invisible to tracking, platform over-claiming) before moving budget.",
        },
      },
      {
        heading: "Consent and the gaps it leaves",
        body: [
          "Where visitors decline analytics or advertising cookies, some or all of their journey is not measured. Google's consent mode passes visitors' choices to Google tags through settings such as analytics_storage and ad_user_data; in basic mode tags do not load until consent is given, while advanced mode sends cookieless pings ([[https://developers.google.com/tag-platform/security/concepts/consent-mode|Google, consent mode overview]]). Google's EU user consent policy applies to end users in the European Economic Area, the UK and Switzerland ([[https://www.google.com/about/company/user-consent-policy/|Google EU user consent policy]]).",
          "Modelling can estimate some of the missing data, but GA4's behavioural modelling has thresholds: at least 1,000 events a day with analytics storage denied for at least 7 days, and at least 1,000 daily users with it granted on at least 7 of the previous 28 days. Google says meeting these does not guarantee eligibility ([[https://support.google.com/analytics/answer/11161109|Google Analytics Help, behavioural modelling]]). Most small lead-generation sites will not reach them, so plan on the CRM and self-reported data carrying more weight. Consent and privacy rules differ by country; take advice for the markets you serve.",
        ],
      },
      {
        heading: "Common leaks that send leads to Direct or the wrong source",
        body: [],
        checklist: [
          "**Third-party booking, scheduling or payment steps.** A visitor who leaves for another domain and returns can start a new session credited to that domain. GA4's unwanted referrals setting tells Analytics not to show listed domains as traffic sources ([[https://support.google.com/analytics/answer/10327750|Google Analytics Help, unwanted referrals]]).",
          "**Untagged links** in email, PDFs, social bios and messaging apps.",
          "**UTMs on internal links**, which overwrite the original source.",
          "**Inconsistent case and spelling** (LinkedIn, linkedin, li) splitting one channel into several.",
          "**Forms that do not pass hidden fields** to the CRM, or a CRM that overwrites the first-touch source on each new form fill.",
          "**Phone and messaging enquiries** with no source recorded. Ask on the call, and log it.",
        ],
      },
      {
        heading: "A monthly reconciliation routine",
        body: [
          "Measurement only helps if someone looks. A one-hour monthly review is enough for most small teams.",
        ],
        checklist: [
          "Pull leads, qualified leads and won deals by first-touch and last-touch source from the CRM.",
          "Pull the same period's key events by channel from GA4, with the attribution model noted.",
          "Pull conversions from each ad platform, noting which are imported qualified or won conversions.",
          "Group self-reported answers into channels and compare with the CRM sources.",
          "Note where the views agree, where they disagree and the likely reason.",
          "Fix one capture problem a month (a missing UTM, a broken hidden field, a referral leak).",
          "Record decisions and what you expect to change, so next month's review can check them.",
        ],
      },
      {
        heading: "Hypothetical example: an accounting firm with four channels",
        body: [
          "**This example is hypothetical.** A small accounting firm runs Google Ads, posts on LinkedIn, gets partner referrals and speaks at local business events. GA4 shows most enquiries as Organic Search or Direct, and Google Ads reports more conversions than the firm's actual qualified leads.",
          "The firm adopts a lowercase UTM sheet, adds hidden first- and last-touch fields and a \"How did you hear about us?\" field to its form, and starts recording the answer again on discovery calls. It sends qualified and won stages back to Google Ads through a supported Data Manager route, and switches bidding to optimise for qualified leads once enough have been imported. After three months the CRM shows paid search producing many enquiries but few qualified ones, while self-reported answers credit events and partners for a large share of won work that GA4 had labelled Direct. The firm moves some budget towards events, keeps search for high-intent terms only, and keeps checking each month whether the pattern holds.",
        ],
      },
      {
        heading: "When this plan is more than you need, or not enough",
        body: [
          "If you get a handful of enquiries a month from one or two channels, start smaller: consistent UTMs, a generate_lead key event and a self-reported field. With low volume, statistical attribution and conversion modelling will not have enough data to learn from, and your time is better spent on the site itself; our guides on [[/blogs/cro-strategy-low-traffic-websites|CRO for low-traffic websites]] and on [[/blogs/website-gets-traffic-but-no-leads|why a website gets traffic but no leads]] cover that.",
          "At the other end, if you have many channels with significant spend, several sales teams and long enterprise cycles, this plan is a foundation rather than the finish. You may need a data warehouse, marketing mix modelling or dedicated attribution software, and a person who owns the data. Those tools still depend on clean capture, so Part 1 comes first either way.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Expecting one tool's report to be the truth.",
          "Switching attribution models to make a favoured channel look better.",
          "Optimising ads for form fills when sales outcomes are available.",
          "Leaving the CRM source as \"Website\" for every lead.",
          "Adding a self-reported field and never reading the answers.",
          "Assuming Consent Mode modelling fills the gaps on a small site.",
          "Building on the Google Ads API for conversion uploads without checking the 2026 Data Manager change.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Multi-channel measurement for a lead-gen business is mostly plumbing and habit, not clever modelling. This month, write a UTM convention and add first-touch, last-touch and self-reported fields to your form and CRM. Next, send qualified and won outcomes back to GA4 and Google Ads through a currently supported route. Then hold a monthly review where the views are read side by side. If you want an outside check of how your site and forms capture sources, a [[/services/cro-audit|CRO audit]] is one way to get it.",
        ],
        cta: {
          title: "Not sure what your data can tell you?",
          description: "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/cro-audit|CRO audits]] and [[/services/website-development|website and CRM integration work]]. If useful, we can talk through how your UTMs, GA4 setup and CRM source fields fit together and what they can and cannot tell you.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Google Analytics: [[https://support.google.com/analytics/answer/10596866|attribution models]]; [[https://support.google.com/analytics/answer/10597962|attribution settings and lookback windows]]; [[https://support.google.com/analytics/answer/10917952|UTM parameters]]; [[https://support.google.com/analytics/answer/10327750|identify unwanted referrals]]; [[https://support.google.com/analytics/answer/11161109|behavioural modelling for consent mode]]; [[https://developers.google.com/analytics/devguides/collection/ga4/reference/events|GA4 recommended events]].",
          "Google Ads and consent: [[https://support.google.com/google-ads/answer/15713840|enhanced conversions for leads and the Data Manager API change]]; [[https://developers.google.com/tag-platform/security/concepts/consent-mode|consent mode overview]]; [[https://www.google.com/about/company/user-consent-policy/|EU user consent policy]].",
          "Accessed 14 October 2026. Google changes these products and policies often; check the current pages before implementing.",
        ],
      },
    ],
  },
];
