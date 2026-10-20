import type { BlogPost } from "./blog-data";

/**
 * Founder Batch 1, product validation and design depth: validating a mobile
 * app idea before development, and how much UI/UX design a startup needs
 * before the build starts. No prices or cost ranges are published (owner
 * decision). Hypothetical examples are labelled as such; nothing here is
 * ZSpace client data.
 * Sources checked 2026-10-14: Google Play Console Help (closed-testing
 * requirement for personal accounts created after 13 Nov 2023; store listing
 * experiments; registration fee); Apple TestFlight page; Apple product page
 * optimization page; Apple Developer Program membership; NN/g (Pernice 2016
 * on prototype fidelity; Nielsen 2000 and 2012 on test-user numbers);
 * GOV.UK Service Manual, how the alpha phase works.
 */
export const founderProductPosts: BlogPost[] = [
  {
    slug: "how-to-validate-mobile-app-idea",
    title: "How to Validate a Mobile App Idea Before Spending Money on Development",
    seoTitle: "How to Validate a Mobile App Idea Before You Build",
    excerpt:
      "An evidence ladder for testing a mobile app idea cheaply: interviews, fake doors, concierge tests, prototypes, TestFlight, Play closed tests and kill criteria.",
    category: "Mobile Apps",
    banner: "tiers",
    sceneKind: "mobile",
    bannerAlt:
      "A ladder of validation tests for a mobile app idea, from problem interviews at the bottom to beta testing and store-listing experiments at the top, with evidence strength rising at each step",
    date: "2026-10-14",
    readingTime: "13 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups"],
    relatedSlugs: ["pwa-vs-native-app", "ai-product-idea-validation", "mobile-app-development-process"],
    faqs: [
      {
        q: "Can I validate an app idea without writing any code?",
        a: "Yes, for most of the important questions. Problem interviews, a landing page with a sign-up or fake-door button, a manual concierge version of the service and a clickable prototype tested on a phone can all be done without production code. What they cannot show is whether people keep using a real app over weeks, which needs a working build in testers' hands.",
      },
      {
        q: "How many Google Play testers do I need before launching?",
        a: "If you publish from a personal Play developer account created after 13 November 2023, Google's Play Console Help says you must run a closed test with at least 12 testers who have been opted in continuously for at least 14 days before you can apply for production access. Google then reviews the application, which it says typically takes up to seven days but can take longer. Check the current Help page before planning, as the rule may change.",
      },
      {
        q: "Is TestFlight free to use for beta testing?",
        a: "TestFlight is part of Apple's developer tools, so you need an Apple Developer Program membership, which Apple lists at US$99 per membership year (or the local currency equivalent) as of October 2026. TestFlight allows up to 100 internal testers from your team and up to 10,000 external testers, and the first build you share externally must be approved by App Review.",
      },
      {
        q: "Are landing-page sign-ups good evidence that people will pay?",
        a: "They are evidence of interest, not of payment or retention. A sign-up costs the visitor nothing, so expect far fewer of them to pay later. Treat sign-ups as a reason to run the next, more expensive test, and ask for a stronger commitment (a deposit, a pre-order or a time-boxed pilot) where your model allows it.",
      },
      {
        q: "Can I run store-listing A/B tests before my app exists?",
        a: "Not in the usual way. Google Play's store listing experiments test variants against a published listing, and Apple's product page optimisation runs on an App Store product page or pre-order page. They are best for improving install conversion once you have a listing, not for deciding whether to build. Before that, use a landing page or fake-door test instead.",
      },
    ],
    content: [
      {
        heading: "How do you validate a mobile app idea?",
        body: [
          "**Validate a mobile app idea by climbing an evidence ladder: start with the cheapest test that could kill the idea, and only spend more when the previous test passes. In practice that means problem interviews first, then a landing page or fake-door test, then a manual (concierge) version of the service, then a clickable prototype tested on real phones, and only then a beta build through TestFlight or a Google Play closed test.** Set your kill and continue criteria before each test, not after you see the results.",
          "Mobile has a few things that general validation advice skips. Installing an app is a bigger ask than visiting a web page. Both stores put gates in front of you: Apple reviews the first external TestFlight build, and Google requires some new developers to run a 14-day closed test before they can publish. And many ideas that feel like apps can be tested perfectly well on the web first. This guide covers those mobile-specific steps alongside the general ones.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Test the problem before the product. The cheapest tests are the ones that can stop you early.",
          "Each test proves something specific and leaves something unproven. Know which is which before you run it.",
          "Ask whether the idea needs to be an app at all. A web version often answers the demand question faster.",
          "Plan for the store gates: App Review for the first external TestFlight build, and 12 testers for 14 continuous days on Play for newer personal accounts.",
          "Store-listing experiments optimise installs on an existing listing. They do not tell you whether to build.",
          "Write down kill and continue thresholds in advance, and stick to them.",
        ],
      },
      {
        heading: "First question: does it need to be an app at all?",
        body: [
          "Before testing an app, check whether the thing you are validating is the app or the service behind it. If the value is a booking, a marketplace match, a piece of information or a workflow, a mobile-friendly website or progressive web app can usually test demand without store fees, review queues or install friction. A store app becomes necessary when the core value depends on things the web does poorly or cannot do on every phone: background location, Bluetooth hardware, reliable push notifications on iPhone without asking users to add a site to their Home Screen, offline-first data, or in-app purchases.",
          "If you are unsure, read [[/blogs/pwa-vs-native-app|how PWAs and native apps compare]] before you spend on an app prototype. Validating on the web first is not a compromise; it removes variables so you learn whether people want the outcome, not whether they will install something.",
        ],
        callout: {
          type: "note",
          text: "Building an AI product? The ladder below still applies, but AI ideas carry extra risks around output quality and cost per request. See [[/blogs/ai-product-idea-validation|validating an AI product idea]] for those.",
        },
      },
      {
        heading: "The evidence ladder: what each test can and cannot prove",
        body: [
          "Work from the top of this table down. Each rung costs more time or money than the one before, so only climb when the rung you are on gives you a clear pass. Effort is described relatively because it depends on your team and market; no figures are implied.",
        ],
        table: {
          headers: ["Rung", "Relative effort", "What it can prove", "What it cannot prove"],
          rows: [
            ["**1. Problem interviews** (plus reading 1 and 2 star reviews of competing apps)", "Lowest: time and conversations", "The problem exists, how often it hurts, what people do today and what they dislike about current options", "That people will switch, install or pay. People are polite in interviews"],
            ["**2. Landing page or fake-door test** (a \"Get the app\" or \"Join the beta\" button that leads to a sign-up)", "Low: a page and a small amount of traffic", "That a message attracts clicks and sign-ups from a defined audience; which value proposition pulls hardest", "Payment, retention or whether the app works. Sign-ups are cheap to give"],
            ["**3. Concierge or manual service** (deliver the outcome by hand over WhatsApp, email, phone or a simple web form)", "Low to medium: your own time", "That people will use and come back for the outcome, and sometimes pay for it; what the real workflow looks like", "That an app is the right delivery channel, or that the manual process can be automated economically"],
            ["**4. Clickable prototype tested on a phone**", "Medium: design time and test sessions", "That people understand the flows and can complete the key tasks; where they get stuck", "Demand or retention. A prototype shows usability, not desire"],
            ["**5. Beta build: TestFlight and Google Play closed testing**", "Higher: a working build, store accounts and review", "Real-device behaviour, early retention over days or weeks, crash and performance problems, onboarding drop-off", "Behaviour at scale, organic acquisition and how strangers find you"],
            ["**6. Store-listing experiments** (Play) and **product page optimisation** (App Store)", "Ongoing, once a listing exists", "Which icon, screenshots or (on Play) description wins more install clicks or pre-registration clicks", "Whether the product deserves to exist. These optimise a listing; they are not a build decision"],
          ],
        },
      },
      {
        heading: "Rungs 1 to 3: cheap tests that can stop you early",
        body: [
          "**Problem interviews.** Talk to people who have the problem now, not people who might like your solution. Ask about the last time it happened, what they did, what it cost them and what they tried. Avoid pitching. If you cannot find people with the problem easily, that is itself a finding. Reading the lowest-rated reviews of competing apps is a quick way to see what current options get wrong in users' own words.",
          "**Landing page or fake door.** Describe the outcome, show one or two screens if you have them, and put a single action on the page. A fake door is a button for a feature or app that does not exist yet; clicking it explains that the app is coming and invites a sign-up. Be honest on the follow-up screen. Measure the click rate and sign-up rate from a defined audience, not from friends. Because signing up is free, sign-ups overstate later conversion. Ad-supported apps are especially hard to validate this way, because nobody pays at the door.",
          "**Concierge service.** Deliver the result manually to a handful of users. For a meal-planning app, that might be sending plans by message; for a booking app, taking requests by form and confirming by hand. Messaging apps are a natural channel where they are already how customers talk to businesses. A concierge test shows whether people come back and whether the outcome is worth paying for, which no landing page can.",
          "If a manual version works and people keep returning, you have the strongest early signal on the ladder. If it does not, an app will rarely fix it.",
        ],
      },
      {
        heading: "Rung 4: test a clickable prototype on real phones",
        body: [
          "Once demand looks real, test whether people can actually use your proposed design. Build a clickable prototype of the two or three core flows and put it on a phone in front of target users, asking them to complete tasks without help. A handful of sessions per distinct user group usually exposes the main problems; see [[/blogs/usability-testing|how to run a usability test]] for the method and [[/blogs/how-much-ux-design-before-development|how much design you need before the build]] for the fidelity to aim for.",
          "This rung also gives you something concrete to scope. A prototype that has been tested is a far better brief for a development quote than a written idea.",
        ],
      },
      {
        heading: "Rung 5: beta testing on TestFlight and Google Play",
        body: [
          "A beta build is the first point at which you can watch real behaviour over time: do people open the app on day three, finish onboarding, and do the thing the app is for? The two stores handle testing differently, and the Play requirement in particular affects your timeline.",
        ],
        table: {
          headers: ["Platform", "What the official documentation says (checked 14 October 2026)", "What it means for validation"],
          rows: [
            ["**Apple TestFlight**", "Up to 100 internal testers from your team (with specific App Store Connect roles) and up to 10,000 external testers. The first build shared with external testers must be approved by App Review. Public invite links can set criteria such as device type and OS version. Requires an Apple Developer Program membership, listed at US$99 per membership year.", "A public link lets you recruit from your sign-up list. Allow time for the first external review."],
            ["**Google Play closed testing**", "Personal developer accounts created after 13 November 2023 must run a closed test with at least 12 testers opted in continuously for at least 14 days before applying for production access. Google says it typically reviews the application within seven days, but it can take longer, and may ask for more testing. Play registration is a US$25 one-time fee.", "Treat the 12 testers as your first validation cohort, not a hurdle. Recruit more than 12 so drop-outs do not reset your plan."],
          ],
        },
        callout: {
          type: "tip",
          text: "Plan the Android timeline backwards. If you are on a newer personal Play account, the earliest you can apply for production is 14 continuous days after your 12th tester has opted in, followed by Google's review. Build that into any launch date you promise investors or customers.",
        },
      },
      {
        heading: "Rung 6: store-listing experiments, once you have a listing",
        body: [
          "Both stores let you test how your listing performs, but only once a listing exists. On Google Play, store listing experiments let you run one default graphics experiment or up to five localised experiments at a time, with up to two variants against your current listing. You can test the icon, feature graphic, screenshots and (in localised experiments) descriptions, and measure install clicks, open clicks or pre-registration clicks. Experiments stop automatically after six months.",
          "On the App Store, product page optimisation tests up to three treatments (alternate icons, screenshots and app previews) against your original product page or pre-order page. You can run one test at a time, for up to 90 days, and new metadata must be approved by App Review first. Alternate icons must be included in the published app's binary.",
          "These tools are useful for learning which message or visual earns installs from strangers. They do not tell you whether people keep using the app, so use them alongside retention data from your [[/blogs/mobile-app-analytics|app analytics events]], not instead of it.",
        ],
      },
      {
        heading: "Kill or continue: a criteria template",
        body: [
          "Fill this in before each test. The thresholds are yours to set; they depend on your market, model and what the next rung costs. The point is to decide in advance what result would stop you, so you cannot talk yourself into a pass afterwards.",
        ],
        table: {
          headers: ["Field", "What to write"],
          rows: [
            ["**Assumption being tested**", "One sentence, e.g. \"Parents of under-5s will book a weekend activity through a phone in under two minutes.\""],
            ["**Test and rung**", "Which test, which audience, how many people, how long"],
            ["**Continue if**", "The result that justifies the next rung, written as a number or observable behaviour"],
            ["**Kill or pivot if**", "The result that stops this idea or this version of it"],
            ["**Grey zone**", "The range where you will rerun or change the test rather than decide"],
            ["**What this test cannot tell us**", "Copied from the ladder above, so nobody overreads the result"],
            ["**Next rung and its cost**", "What a pass commits you to spending"],
            ["**Decision and date**", "Filled in after the test, by whoever owns the decision"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a booking app for local tutors",
        body: [
          "Hypothetical example: a founder wants an app that lets parents book short tutoring sessions with vetted local tutors. In interviews, parents describe the problem clearly, mostly about finding someone available at short notice. A landing page with a \"Join the beta\" fake door, shown to a narrow audience of parents, gets enough sign-ups to pass the founder's pre-set threshold.",
          "Rather than build, the founder runs a concierge version for a few weeks: parents send requests by message, and the founder matches tutors by hand. Several families book a second session, which is the result the founder had written down as \"continue\". The manual work also shows that most requests come in the evening and are for the next day, which changes the core flow.",
          "The founder now asks the \"does it need to be an app?\" question. Bookings and payments work fine on the web, so the next step is a mobile-friendly web version, tested with a clickable prototype first. An app is deferred until reminders and repeat booking show that push notifications would materially help retention. If the app is built later, the beta runs on TestFlight and a Play closed test with more than 12 recruited families, using the sign-up list.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "**Treating interest as demand.** Compliments, likes and sign-ups are weak evidence. Repeat use and payment are strong evidence.",
          "**Skipping straight to a build.** A beta build is the most expensive way to learn that the problem is not painful enough.",
          "**Deciding the thresholds afterwards.** If the criteria move to fit the result, the test did not test anything.",
          "**Testing with friends and family.** They are not your market and they are kind.",
          "**Forgetting the Play gate.** A newer personal Play account cannot go straight to production; 14 continuous days with 12 opted-in testers comes first.",
          "**Using store experiments to justify a build.** They improve a listing that already exists.",
          "**Confusing usability with desirability.** A prototype that tests well shows people can use it, not that they want it.",
        ],
      },
      {
        heading: "Limits of this approach",
        body: [
          "The ladder suits consumer and small-business apps where the main risk is demand. It is less suitable where the main risk is technical (a new hardware integration, on-device machine learning, or real-time performance), because cheap tests cannot show feasibility; there, a small technical spike should come early. Regulated products, such as health or financial apps, may need compliance work before any real user data is handled, even in a concierge test. Marketplace ideas need both sides validated, which roughly doubles the work on every rung.",
          "Platform rules also change. The TestFlight limits, the Play closed-testing requirement and the store experiment limits above are as stated on the official pages on 14 October 2026. Check them again before you plan around them.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "Validating a mobile app idea is a sequence of small bets. Prove the problem, prove interest, prove that people use the outcome when you deliver it by hand, prove they can use your design, and only then put a build on real phones. At each step, write down what would stop you. If the answer to \"does it need to be an app?\" is no, test on the web first and come back to the app when specific triggers appear.",
          "Your next step this week: write the kill and continue template for rung 1, book five or more problem interviews, and draft a one-screen landing page. When you are ready to scope a prototype or MVP, our [[/services/mobile-app-development|mobile app development]] page explains how we approach builds, and the [[/blogs/mobile-app-development-process|app development process guide]] covers what happens after validation.",
        ],
        cta: {
          title: "Want to plan the right MVP for what you have validated?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/mobile-app-development|mobile apps]] and [[/services/ui-ux-design|product and UX design]]. If useful, we can talk through your evidence so far and what the smallest testable version of your app should include.",
        },
      },
      {
        heading: "Sources",
        body: [
          "Google: Play Console Help: app testing requirements for new personal developer accounts; Play Console Help: store listing experiments; Play Console Help: registration fee.",
          "Apple: TestFlight; Product page optimization; Apple Developer Program: what's included.",
          "Accessed 14 October 2026. Store rules, limits and fees change; check the official pages before planning a launch.",
        ],
      },
    ],
  },
  {
    slug: "how-much-ux-design-before-development",
    title: "How Much UI/UX Design Does a Startup Need Before Development Begins?",
    seoTitle: "How Much UX Design Do You Need Before Development?",
    excerpt:
      "A decision matrix for how much UI/UX design to finish before the build, based on your riskiest unknown and delivery model, plus a ready-to-build checklist.",
    category: "UI/UX",
    banner: "framework",
    sceneKind: "design",
    bannerAlt:
      "A matrix matching a startup's riskiest unknown (desirability, usability or feasibility) against its delivery model (fixed-scope agency, iterative in-house team or no-code), each cell showing a recommended design depth",
    date: "2026-10-14",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["startups"],
    relatedSlugs: ["wireframing-vs-prototyping", "design-handoff", "product-design-process"],
    faqs: [
      {
        q: "Can developers build from wireframes alone?",
        a: "They can build structure from wireframes, but they will have to guess at visual details, copy, states such as errors and empty screens, and behaviour on different screen sizes. That is workable for an in-house team that can ask questions daily. For a fixed-price quote, guesses become change requests, so the flows and states need to be specified more fully.",
      },
      {
        q: "Do I need high-fidelity designs for every screen before an MVP build?",
        a: "Usually not. You need the core flows designed in enough detail to test and to estimate, every state of those flows defined, and a small component baseline. Secondary screens such as settings, account management and admin views can often follow common patterns and be designed during the build.",
      },
      {
        q: "How many users should test a prototype before we build?",
        a: "Jakob Nielsen's widely cited NN/g guidance is about five users per round for qualitative testing, with several small rounds rather than one large one. It assumes comparable users doing similar tasks: if you have distinct user groups, NN/g suggests three or four users from each. It does not apply to quantitative studies, for which NN/g recommends at least 20 users.",
      },
      {
        q: "Should a startup hire a designer or a developer first?",
        a: "It depends on the riskiest unknown. If you are unsure whether people want the product or can use it, design and research time early is cheaper than code. If the main risk is whether something can be built at all, a developer's technical spike should come first, with design kept light until feasibility is clear.",
      },
      {
        q: "Is a design system needed before the first build?",
        a: "A full design system rarely pays off at the MVP stage. What you do need is a component baseline: a small set of named, reusable elements (buttons, inputs, type styles, colours, spacing) with their states, so the first screens stay consistent and later screens are faster to design and build.",
      },
    ],
    content: [
      {
        heading: "The short answer",
        body: [
          "**Design enough to remove your riskiest unknown and to let developers estimate without guessing. For most MVPs that means the core user flows designed and tested, every state of those flows defined (including empty, error and loading), real content for key screens, a small component baseline and basic accessibility notes. It rarely means a polished, high-fidelity file for every screen.** How far to go depends on two things: what you are least sure about, and how your build will be delivered.",
          "A fixed-scope agency quote needs more detail up front, because anything left undefined becomes a change request later. An in-house team that ships every week can design further ahead by only a sprint or two. A no-code build sits in between: the platform constrains what you can design, so detailed custom visuals are often wasted. The matrix below puts those two factors together.",
          "If you are still deciding what the MVP should include at all, start with [[/blogs/saas-mvp-feature-prioritisation|prioritising MVP features]]; this guide assumes you know roughly what you are building.",
        ],
        callout: {
          type: "takeaway",
          text: "Under-designing shows up as rework, change requests and inconsistent screens. Over-designing shows up as polished screens for features that change after the first user test. Aim for the point where the riskiest question is answered and the estimate stops moving.",
        },
      },
      {
        heading: "Step 1: name your riskiest unknown",
        body: [
          "The UK Government's Service Manual describes its alpha phase as building things \"just complex enough to let you test different ideas\" and calls identifying and testing \"your riskiest assumptions\" a crucial part of it. That is a good rule for startups too. Most early product risk falls into one of three types:",
        ],
        checklist: [
          "**Desirability:** do people want this enough to change what they do today? Design work here is about testing concepts and value, not polish.",
          "**Usability:** can people work out how to use it and complete the key tasks? Design work here is about flows, interaction and testing with users.",
          "**Feasibility:** can it be built, integrated or run reliably at a sensible cost? The first work is technical, and design follows what the spike shows.",
        ],
      },
      {
        heading: "Step 2: read the decision matrix",
        body: [
          "Find the row for your riskiest unknown and the column for your delivery model. Each cell gives the recommended design depth before the build starts. \"Low fidelity\" and \"high fidelity\" follow NN/g's definition below.",
        ],
        table: {
          headers: ["Riskiest unknown", "Fixed-scope agency build", "Iterative in-house team", "No-code build"],
          rows: [
            [
              "**Desirability**",
              "Do not commission the full build yet. Test concepts with low-fidelity sketches, a landing page or a concierge version. Once demand is shown, specify the core flows to the ready-to-build standard before getting quotes.",
              "Low-fidelity concepts and quick tests first. Then design only the first release's core flows at medium fidelity and let the team ship and measure.",
              "Often the best route: build a rough working version on the platform and test it with real users. Keep design to flow sketches and content.",
            ],
            [
              "**Usability**",
              "Highest design depth before build. Core flows as a tested, high-fidelity, interactive prototype, with all states, real content and a component baseline. This is what makes a fixed quote reliable.",
              "Core flows tested as a clickable prototype (medium to high fidelity), then design one or two sprints ahead of development. Secondary screens can be designed during the build.",
              "Test the flow in a prototype, then check it can be built with the platform's components before committing. Avoid custom interactions the tool cannot reproduce.",
            ],
            [
              "**Feasibility**",
              "Pay for a technical spike or discovery first. Keep design at wireframe level until the spike confirms the approach, then specify fully before the fixed-scope build.",
              "Run the spike in parallel with low-fidelity flows. Raise fidelity only for screens whose design depends on what the spike shows.",
              "Check platform limits (data, integrations, performance) before designing anything detailed. If the tool cannot do it, the design does not matter.",
            ],
          ],
        },
        callout: {
          type: "tip",
          text: "If two risks feel equal, deal with desirability first. A usable, buildable product that nobody wants is the most expensive outcome.",
        },
      },
      {
        heading: "What \"fidelity\" means, and why it is not one setting",
        body: [
          "NN/g's Kara Pernice defines a prototype's fidelity as how closely it matches the look and feel of the final system, and notes that it can vary separately in three dimensions: interactivity, visuals, and content and commands. A prototype can have realistic copy and working navigation but plain grey boxes for visuals. For most startup questions, that mix is more useful than pixel-perfect screens.",
          "The same article lists benefits of low-fidelity prototypes: less time preparing and more time designing before a test, easier changes between sessions, less pressure on participants, and less attachment from designers to work that should be thrown away. Stakeholders also recognise that the work is not finished. High fidelity earns its cost when you are testing detailed interactions, specific components or visual qualities such as legibility, or when participants need to behave as they would with live software.",
          "For the definitions of wireframes, mockups and prototypes, see [[/blogs/wireframing-vs-prototyping|wireframing vs prototyping]]. This article is about how much of each you need before code.",
        ],
      },
      {
        heading: "How many users to test with before you build",
        body: [
          "The most quoted guidance is Jakob Nielsen's 2000 NN/g article, which recommends \"testing no more than 5 users and running as many small tests as you can afford\". It is often misquoted, so the caveats matter: For running the test itself, see [[/blogs/test-website-prototype-before-development|how to test a website prototype before development]].",
        ],
        checklist: [
          "The claim that five users find about 85% of usability problems comes from a model that assumes each user finds, on average, 31% of the problems. It is an average across projects, not a guarantee for yours.",
          "It only holds \"for comparable users who will be using the site in fairly similar ways\". With two distinct user groups, NN/g suggests three or four users from each; with three or more groups, three from each.",
          "Finding all the problems takes at least 15 users, but NN/g recommends spending that on three rounds of five, fixing problems between rounds, rather than one round of 15.",
          "It applies to qualitative testing only. Nielsen's 2012 follow-up says quantitative studies need at least 20 users, and more for tight confidence intervals.",
        ],
      },
      {
        heading: "The ready-to-build checklist",
        body: [
          "Use this before you ask for a build quote or start the first sprint. If an item is missing, either complete it or record it as an explicit assumption in the estimate. It works as a shared definition of \"done\" for design, and it overlaps with what a good [[/blogs/design-handoff|design handoff]] includes.",
        ],
        checklist: [
          "**Core flows mapped end to end:** every step a user takes to get the main value, including sign-up and the first successful use.",
          "**Core flows tested** with target users at the fidelity the matrix suggests, with findings fixed or logged.",
          "**Every state of each core screen:** default, empty (no data yet), loading, error, success, partial data, permission denied and offline where relevant.",
          "**Real content:** actual headings, labels, button text, error messages and sample data, not lorem ipsum. Long names and missing data are shown.",
          "**Responsive behaviour decided:** which breakpoints or device sizes are supported and how key screens adapt.",
          "**A component baseline:** named buttons, inputs, type styles, colours and spacing, each with hover, focus, disabled and error states.",
          "**Accessibility annotations:** colour contrast checked, focus order and keyboard behaviour noted, touch target sizes, form labels and error messaging, and alt text for meaningful images.",
          "**Analytics events named:** the actions you will measure (for example sign-up completed or first booking made), agreed with whoever builds the tracking.",
          "**Open questions logged** with an owner, so developers know what is undecided rather than guessing.",
        ],
      },
      {
        heading: "What can safely be designed during the build",
        body: [
          "Not everything has to be finished first. Work can move into the build when it follows established patterns, does not affect the data model and will not change the estimate much.",
        ],
        table: {
          headers: ["Usually safe to design during the build", "Should be settled before the build"],
          rows: [
            ["Settings, profile and account management screens that follow common patterns", "Core flows and anything that decides the data model"],
            ["Visual polish: illustrations, motion, final imagery", "States of core screens, especially errors and empty states"],
            ["Secondary content pages and help text", "Payment, sign-up and permission flows"],
            ["Admin and internal views, if a basic version is agreed", "Integrations users see, such as third-party sign-in or maps"],
            ["Additional components beyond the baseline", "The component baseline itself"],
            ["Later-release features behind the MVP", "Anything a fixed-scope contract will be priced on"],
          ],
        },
      },
      {
        heading: "Hypothetical example: one MVP specified at three depths",
        body: [
          "Hypothetical example: a startup plans a 12-screen web app for small clinics to manage appointment requests. The riskiest unknown is usability, because receptionists must triage requests quickly between phone calls.",
          "**Depth A, wireframes only.** The developer can see the screens and navigation but must guess what happens when a request has missing details, when the list is empty, or when a save fails. A fixed-scope quote either pads for those unknowns or excludes them, and both lead to arguments later.",
          "**Depth B, tested core flows plus the checklist.** The three core flows (receiving, triaging and confirming a request) are tested with five receptionists, then specified at high fidelity with every state, real copy and a component baseline. The other nine screens are wireframed with notes. A developer can estimate the core confidently and flag the rest as following standard patterns.",
          "**Depth C, every screen at high fidelity before build.** Estimates are tight, but weeks go into polishing settings and reporting screens that the first round of clinic feedback is likely to change.",
          "For a usability-led product on a fixed-scope build, Depth B is the sensible choice. If the same team were in-house and shipping weekly, it could start building after the core flows were tested and design the remaining screens a sprint ahead.",
        ],
      },
      {
        heading: "Common mistakes, and when this advice does not fit",
        body: [
          "The common mistakes are predictable: designing every screen at high fidelity before any user has seen the concept; handing over happy-path screens with no error, empty or loading states; using placeholder text, so layouts break with real content; skipping the component baseline, so each screen invents its own buttons; and treating a design system as an MVP requirement. [[/blogs/design-systems-for-teams-that-move-fast|Design systems for fast-moving teams]] explains when a fuller system starts to pay off.",
          "This guidance assumes a typical early-stage product. It fits less well in a few cases. Regulated products (health, finance, public services) may need fuller specification and accessibility review up front for compliance reasons. Hardware-dependent or highly technical products should lead with feasibility work, as the matrix suggests. And if you are rebuilding an existing product with known users and proven flows, you can often specify more fully before the build because the desirability question is already answered.",
        ],
      },
      {
        heading: "Conclusion and next steps",
        body: [
          "The right amount of design before development is the amount that answers your riskiest question and lets a developer estimate without guessing. Name the risk, find your cell in the matrix, test the core flows with a small number of users per group, and work through the ready-to-build checklist. Leave secondary screens and polish for the build.",
          "For the full sequence from research to launch, see the [[/blogs/product-design-process|product design process]]. If you want help shaping the design scope for a first release, our [[/services/ui-ux-design|UI/UX design service]] page explains how we approach MVP design.",
        ],
        cta: {
          title: "Planning the design for an MVP?",
          description:
            "ZSpace Labs is a remote-first technology studio that works with clients globally on [[/services/ui-ux-design|UI/UX design]] and [[/services/website-development|web application development]]. If useful, we can review your current designs against the ready-to-build checklist or talk through how much design your build needs.",
        },
      },
      {
        heading: "Sources",
        body: [
          "NN/g: UX prototypes, low fidelity vs high fidelity (Kara Pernice, 18 December 2016); NN/g: why you only need to test with 5 users (Jakob Nielsen, 18 March 2000); NN/g: how many test users in a usability study? (Jakob Nielsen, 3 June 2012); GOV.UK Service Manual: how the alpha phase works (last updated 8 May 2019).",
          "Accessed 14 October 2026. NN/g is an independent research and training firm; its figures are heuristics based on its own studies.",
        ],
      },
    ],
  },
];
