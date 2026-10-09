import type { BlogPost } from "./blog-data";

/**
 * UAE CRO cluster: website conversion rate optimisation for UAE lead
 * generation, and UAE ecommerce checkout optimisation (published 2026-10-08).
 * Sources checked 2026-10-08: Zbooni/YouGov WhatsApp survey (2024);
 * DataReportal Digital 2026 UAE; Deloitte Digital Consumer Trends 2025 (via
 * Consultancy-ME); Microsoft AI Economy Institute (2026); NN/g (forms, errors,
 * scrolling, trust, mobile UX); Baymard Institute (cart abandonment, guest
 * checkout, address lookup, inline validation; US survey data, labelled);
 * web.dev Core Web Vitals; Google Search Central page experience; W3C WCAG
 * 2.2; Evan Miller "How Not To Run an A/B Test"; Google Analytics help
 * (Optimize sunset); 6sense 2025 Buyer Experience Report; LinkedIn B2B
 * Institute 95:5; u.ae consumer protection, digital invoicing and data
 * protection pages; EZDubai and Euromonitor (via Gulf Today); Checkout.com
 * (BNPL, MENA 2025); Visa Where Cash Hides; DHL 2026 E-Commerce Trends
 * (via Khaleej Times); Abu Dhabi DMT Onwani; Shopify help and shopify.dev
 * (Shopify Payments UAE, manual payments, checkout.liquid sunset); Tabby and
 * Tamara Shopify docs; Meta WhatsApp opt-in and template docs; Dubai Media
 * Office (Dubai Traders).
 * No figure here is ZSpace client data. Scores and examples are illustrative.
 */

export const uaeCroPosts: BlogPost[] = [
  // ---------------------------------------------------------- WEBSITE CRO UAE
  // Differentiated from website-gets-traffic-but-no-leads (diagnosis),
  // website-lead-generation (system), ecommerce-ab-testing-framework (test
  // standard) by UAE context (WhatsApp, Arabic, bilingual UX, mobile), a
  // per-change test card for 20 changes and an ICE matrix.
  {
    slug: "website-cro-uae",
    title: "Website Conversion Rate Optimization UAE: 20 Changes That Can Increase Leads",
    seoTitle: "Website CRO UAE: 20 Changes That Can Increase Leads",
    excerpt:
      "20 website CRO changes for UAE businesses, each with the problem, how to test it, the metric to watch and the downside, plus an ICE matrix and testing rules.",
    category: "CRO",
    banner: "ctahierarchy",
    sceneKind: "funnel",
    bannerAlt: "A conversion funnel from visit to qualified lead, with WhatsApp, form and call routes feeding one pipeline",
    date: "2026-10-08",
    readingTime: "19 min read",
    relatedServiceSlugs: ["cro-audit", "ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["professional-services", "real-estate", "b2b-enterprise", "healthcare-healthtech"],
    relatedSlugs: ["website-gets-traffic-but-no-leads", "website-lead-generation", "ecommerce-ab-testing-framework"],
    faqs: [
      { q: "What is website conversion rate optimisation?", a: "Website conversion rate optimisation (CRO) is the practice of increasing the share of visitors who take a valuable action, such as submitting an enquiry, starting a WhatsApp chat or booking a call, by finding where people drop off, changing the page or flow, and measuring whether the change helped. It works from evidence, not from opinions about design." },
      { q: "Will these 20 changes definitely increase my leads?", a: "No. Each change addresses a common cause of lost enquiries, but whether it helps depends on your audience, traffic and offer. Some changes will do nothing on your site and a few may hurt. That is why every change in this guide comes with a way to test it, a metric to monitor and a potential downside. Treat them as hypotheses to validate, not guaranteed wins." },
      { q: "Should a UAE website use WhatsApp instead of a contact form?", a: "Usually both. In a 2024 YouGov survey of 1,000 UAE residents commissioned by Zbooni, 85% wanted businesses to offer WhatsApp for support and 65% had used it to ask a business about a product. Forms still suit detailed or after-hours requests. Offer WhatsApp as a visible route, connect it to a shared team inbox or CRM, and track both channels." },
      { q: "How much traffic do I need to run an A/B test?", a: "It depends on your baseline conversion rate and the smallest effect you want to detect. Calculate the sample size before starting with a power calculator, using your real baseline and a realistic minimum detectable effect. Many UAE B2B sites with a few hundred enquiries a month cannot detect small changes in a reasonable time, so they should rely on qualitative research and carefully documented sequential changes instead." },
      { q: "Do I need an Arabic version of my website to convert UAE visitors?", a: "Not always. We found no general UAE legal requirement for a business website to be in Arabic, although UAE-registered ecommerce businesses must provide product or service information in Arabic under consumer protection rules. Whether Arabic improves conversion depends on your buyers. If Emirati, government or GCC customers matter, properly written Arabic pages for key journeys are worth testing." },
      { q: "What is an ICE score in CRO?", a: "ICE is a simple prioritisation method that scores each idea for Impact (how much it could move the main metric), Confidence (how strong the evidence is) and Ease (how little effort it needs), each from 1 to 5. Multiplying or averaging the three gives a rough ranking. It is a planning aid that forces a conversation about evidence, not a precise forecast." },
      { q: "What replaced Google Optimize for A/B testing?", a: "Google says Optimize and Optimize 360 stopped being available on 30 September 2023, and experiments still running then were ended. Teams now use third-party testing platforms that integrate with Google Analytics 4, feature-flag tools, or server-side testing built into their own stack. Choose based on traffic, page speed impact, consent handling and whether you need server-side tests." },
      { q: "How long should a CRO test run?", a: "Run it until it reaches the sample size you calculated before launch, and for at least one full weekly cycle, ideally two, so weekday and weekend behaviour are both represented. Do not stop early because the result looks significant. Evan Miller shows that repeatedly checking significance and stopping at the first good result inflates the false-positive rate well above the level you think you are using." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**Website conversion rate optimisation (CRO) in the UAE** means systematically increasing the share of visitors who become qualified enquiries, by fixing what stops them: unclear messaging, weak trust, long forms, slow mobile pages and missing WhatsApp or Arabic routes. It works by changing one thing, measuring it properly and keeping only what the evidence supports.",
          "This guide lists 20 changes across eleven areas: messaging, UX, forms, trust, performance, mobile, CTAs, lead qualification, personalisation, analytics and AI. For each one we give the problem, the change, why it can help, how to test it, the metric to monitor and the potential downside. None is a guaranteed win. They are hypotheses, ranked with an illustrative ICE matrix and followed by the rules for testing them honestly.",
          "Figures labelled **UAE facts** or **research** come from the named sources. Everything else is **our recommendation**, based on practice rather than a published benchmark.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "CRO is a measurement discipline: no change in this list should be shipped site-wide on belief alone.",
          "UAE visitors expect WhatsApp: 85% of UAE residents surveyed want businesses to offer it, and 87% prefer a human to a chatbot (Zbooni/YouGov, 2024).",
          "Mobile comes first: DataReportal counts 23.0 million mobile connections in the UAE, 202% of the population.",
          "Arabic is a buyer decision, not a blanket rule, but UAE-registered ecommerce businesses must give product or service information in Arabic (u.ae).",
          "Prioritise with Impact, Confidence and Ease scores, then test the top items first.",
          "Fix the sample size before an A/B test and do not stop at the first significant result; peeking inflates false positives (Evan Miller).",
          "Low-traffic sites should use qualitative research and documented sequential changes, and report results with their limits.",
        ],
      },
      {
        heading: "What CRO means for a UAE lead-generation website",
        body: [
          "**Definition:** a **conversion** is any valuable action you can count: a form submission, a WhatsApp chat started, a tracked call, a booking or a quote request. The **conversion rate** is conversions divided by sessions or users over a period. **CRO** is the repeatable process of finding where visitors drop off, forming a hypothesis about why, changing something and measuring the result.",
          "For a lead-generation site the conversion that matters is not the raw enquiry but the **qualified** enquiry: one your team would want to call back. A change that doubles form fills by attracting unqualified leads can lower revenue. Throughout this guide the primary metric is therefore qualified leads per visitor, with raw conversion rate as a secondary signal.",
          "If you have not yet worked out why a site with traffic produces few enquiries, start with our diagnostic guide, [[/blogs/website-gets-traffic-but-no-leads|why a website gets traffic but no leads]], and the system view in [[/blogs/website-lead-generation|website lead generation]]. This article assumes the diagnosis is done and focuses on what to change, how to test it in a UAE context, and in what order.",
        ],
      },
      {
        heading: "UAE context that changes your CRO priorities",
        body: [
          "**UAE facts.** Almost everyone is online: DataReportal reports 99% internet penetration, 11.3 million internet users and 23.0 million mobile connections, equal to 202% of the population ([[https://datareportal.com/reports/digital-2026-united-arab-emirates|Digital 2026: UAE]]). In a YouGov survey of 1,000 UAE residents commissioned by Zbooni (February 2024), 85% wanted businesses to offer WhatsApp for support, 88% saw it as the easiest route to quick answers, 87% preferred a real person over a chatbot or AI, and 65% had used WhatsApp to ask a business about a product in the past year, compared with 55% for call centres and 48% for email ([[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Communicate]]). The survey is vendor-commissioned, so treat it as directional.",
          "Deloitte's 2025 Digital Consumer Trends survey of 2,000 consumers in the UAE and Saudi Arabia combined found 73% had bought through social media in the past year ([[https://www.consultancy-me.com/news/11592/deloitte-consumers-in-uae-and-ksa-driving-surge-in-ai-adoption-and-social-commerce|Consultancy-ME]]). Many of your visitors arrive from Instagram, TikTok or a WhatsApp forward, on a phone, with little context.",
          "**Arabic.** u.ae states that consumer invoices must be in Arabic and that UAE-registered ecommerce businesses must give product or service information in Arabic ([[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]]). We found no general legal requirement that every business website be in Arabic. For lead generation, Arabic is mostly a conversion question: does your buyer prefer it? Check obligations for your sector with the authority or an adviser.",
          "**Our recommendation.** For UAE sites, put four things near the top of any CRO backlog: a visible, tracked WhatsApp route staffed by people; a mobile experience tested on real phones; honest trust signals that answer ‘is this company real and local enough to serve me?’; and a deliberate language decision per key page. For the regional SEO side of bilingual sites, see [[/blogs/arabic-seo-uae|Arabic SEO in the UAE]].",
        ],
      },
      {
        heading: "Before you change anything: baseline and diagnosis",
        body: [
          "**The answer first:** you cannot tell whether a change helped unless you recorded the before state. Spend one to two weeks making sure every conversion route is tracked and tied to lead quality before running any of the 20 changes.",
          "A structured review of analytics, recordings, forms and page speed is what a [[/services/cro-audit|CRO audit]] provides. If you want to do it in-house, the ecommerce-focused [[/blogs/ecommerce-cro-audit|CRO audit guide]] covers the method, and most of it applies to lead-generation sites.",
        ],
        checklist: [
          "Form submissions, WhatsApp clicks, call clicks and bookings each tracked as separate conversions",
          "Every lead tagged with source, landing page, language and device in the CRM",
          "A definition of a ‘qualified lead’ agreed with sales",
          "At least four weeks of baseline data, split by mobile and desktop",
          "Session recordings or heatmaps on the top five landing pages, with consent handled",
          "A list of the ten most common questions sales hears before people buy",
        ],
      },
      {
        heading: "Messaging: changes 1 and 2",
        body: [
          "**The answer first:** most lost enquiries start with a visitor who cannot tell within a few seconds what you do, who it is for and where you operate. Fix that before anything cosmetic.",
          "**Research.** Nielsen Norman Group's eye-tracking work found 57% of page-viewing time was spent above the fold and 74% in the first two screenfuls ([[https://www.nngroup.com/articles/scrolling-and-attention/|NN/g]]). People do scroll, but attention falls, so the opening screen carries the most weight.",
        ],
        table: {
          headers: ["", "1. Answer-first hero", "2. Specific service-page scope"],
          rows: [
            ["**Problem**", "Hero says ‘Innovative solutions for your business’; visitors cannot tell what you sell or whether you serve their emirate", "Service pages list capabilities but not scope, process, timelines or what a typical engagement includes"],
            ["**Change**", "Headline states the service, the buyer and the location; subline names the outcome; one primary CTA", "Add ‘what’s included’, ‘how it works’, typical timeline, price guidance or ‘what affects price’, and FAQs"],
            ["**Why it can help**", "Reduces the effort to decide whether to keep reading, which matters most on mobile", "Answers the questions sales hears repeatedly, so ready buyers can act without a call"],
            ["**How to test**", "A/B test headline variants if traffic allows; otherwise a five-second test with 10–15 target users", "A/B test the page or compare before/after, controlling for traffic source"],
            ["**Metric to monitor**", "Scroll depth past the hero, CTA clicks, qualified leads per visitor", "Qualified leads from the page, time-to-close, share of ‘how much?’ first questions"],
            ["**Potential downside**", "A narrower headline can deter adjacent segments you also want", "Showing price guidance can reduce raw enquiries, sometimes a good trade if quality rises"],
          ],
        },
        code: {
          label: "Illustrative homepage hero, before and after (hypothetical firm)",
          text: "BEFORE\n  H1:  Innovative digital solutions\n  Sub: We help businesses grow\n  CTA: Learn more\n\nAFTER\n  H1:  Commercial fit-out for offices in Dubai\n       and Abu Dhabi\n  Sub: Design, approvals and build managed by one\n       team. Typical office projects: 8-14 weeks.\n  CTA: Get a fit-out estimate   (primary)\n       Ask on WhatsApp           (secondary)\n  Proof strip: licence no. | named projects |\n               review rating from a third party",
        },
      },
      {
        heading: "UX: changes 3 and 4",
        body: [
          "**The answer first:** every page should make one next step obvious. Visitors who have to hunt through menus or past competing buttons often leave rather than decide.",
          "For page-type detail, our guides to [[/blogs/landing-page-design-uae|landing page design for the UAE]] and [[/blogs/landing-page-development|landing page development]] go deeper on layout and build.",
        ],
        table: {
          headers: ["", "3. One primary path per page", "4. Proof and next step above the fold"],
          rows: [
            ["**Problem**", "Mega-menus, five CTAs and pop-ups compete; paid traffic lands on a homepage built for everyone", "The first screen is a stock photo and slogan; proof and the CTA sit far below"],
            ["**Change**", "Simplify navigation on landing pages, keep one primary CTA and one secondary, send campaigns to matched pages", "Place a short proof strip and the primary CTA in the first screen on mobile"],
            ["**Why it can help**", "Fewer choices reduce hesitation and keep attention on the action you want", "Most viewing time is near the top (NN/g), so proof there is seen by more visitors"],
            ["**How to test**", "A/B test a reduced-navigation landing page against the current one for one campaign", "A/B test hero layouts; check with recordings that the proof is actually seen"],
            ["**Metric to monitor**", "Bounce rate on landing pages, primary CTA click rate, qualified leads", "First-screen CTA clicks, scroll behaviour, qualified leads per visitor"],
            ["**Potential downside**", "Removing navigation can frustrate researchers who want to explore", "A crowded first screen can push the message below the fold on small phones"],
          ],
        },
      },
      {
        heading: "Forms: changes 5 and 6",
        body: [
          "**The answer first:** ask only what you need to respond well, in a single column with visible labels, and help people fix errors in place.",
          "**Research.** NN/g advises labels close to fields, avoiding placeholder text as a label, distinguishing optional from required fields and using a single-column layout because ‘multiple columns interrupt the vertical momentum’ ([[https://www.nngroup.com/articles/web-form-design/|NN/g form design]]). It also recommends placing error messages next to the field and not showing an error until the user has finished with it ([[https://www.nngroup.com/articles/errors-forms-design-guidelines/|NN/g errors]]). Baymard's review found about 31% of sites have no inline validation at all ([[https://baymard.com/blog/inline-form-validation|Baymard]]); that figure is from ecommerce sites, but the principle carries over.",
        ],
        table: {
          headers: ["", "5. Fewer, clearer fields", "6. Inline validation and UAE phone handling"],
          rows: [
            ["**Problem**", "Ten fields including company size, job title and ‘how did you hear about us’, two-column layout, placeholders as labels", "Errors appear only after submit; the phone field rejects +971, spaces or a leading 0"],
            ["**Change**", "Cut to name, contact, one free-text field and at most one or two qualifying questions; single column, visible labels", "Validate on blur, clear errors as the user types, accept common UAE phone formats and normalise them server-side"],
            ["**Why it can help**", "Less effort per enquiry, especially on phones", "Prevents people giving up after a rejected submission they cannot understand"],
            ["**How to test**", "A/B test short versus current form; watch field-level drop-off in form analytics", "Review failed submissions and error events before and after"],
            ["**Metric to monitor**", "Form start-to-submit rate, qualified leads, sales follow-up effort", "Error events per submission, form completion rate"],
            ["**Potential downside**", "Fewer fields can mean more unqualified leads and more triage work", "Over-lenient validation lets bad numbers through; confirm via a callback or WhatsApp check"],
          ],
        },
        code: {
          label: "Illustrative enquiry form, before and after",
          text: "BEFORE (10 fields, 2 columns)\n  First name | Last name\n  Email      | Phone (digits only, 10 max)\n  Company    | Job title\n  Company size | Budget\n  How did you hear about us?\n  Message\n  [Submit]\n\nAFTER (5 fields, 1 column)\n  Full name\n  Mobile or WhatsApp number   (+971 50 123 4567 ok)\n  Email (optional)\n  What do you need help with?  [free text]\n  Timeline: [This month] [1-3 months] [Exploring]\n  [Send my enquiry]\n  We reply within one business day. Prefer chat?\n  -> Message us on WhatsApp",
        },
      },
      {
        heading: "Trust: changes 7 and 8",
        body: [
          "**The answer first:** UAE buyers, like buyers anywhere, need to believe you are real, competent and accountable before they share a phone number. Make the evidence specific and verifiable.",
          "**Research.** NN/g groups trust into design quality, upfront disclosure, comprehensive and current content, and connection to the rest of the web, noting that third-party reviews and external sources are trusted more than a company's own claims ([[https://www.nngroup.com/articles/trustworthy-design/|NN/g trustworthy design]]). Our generic guide to [[/blogs/website-trust-and-credibility|website trust and credibility]] covers the full set of signals.",
          "**Our recommendation for the UAE.** Show your legal entity name and trade licence number, which buyers can check through the relevant licensing authority, and say plainly which emirates you serve and from where. If your team is remote or overseas, say so; misleading location claims destroy trust when discovered.",
        ],
        table: {
          headers: ["", "7. Verifiable business identity", "8. Specific, external proof"],
          rows: [
            ["**Problem**", "No licence number, a generic address, a mobile number only; buyers wonder if the firm is real", "Testimonials are anonymous first names; ‘trusted by leading brands’ with no names"],
            ["**Change**", "Add legal name, licence number and issuing authority, service areas, office hours and a response-time promise you can keep", "Use named, permissioned reviews, links to third-party review profiles, project specifics and team bios"],
            ["**Why it can help**", "Removes a reason to hesitate for buyers comparing several unknown providers", "External proof carries more weight than self-description (NN/g)"],
            ["**How to test**", "A/B test a trust block near the CTA; ask sales whether ‘are you legitimate?’ questions drop", "Test proof placement next to the form versus lower down"],
            ["**Metric to monitor**", "CTA click-through, form completion, qualified lead rate", "Qualified leads per visitor, time on proof sections"],
            ["**Potential downside**", "Clutter near the CTA if overdone", "Weak or old reviews shown prominently can hurt more than help"],
          ],
        },
      },
      {
        heading: "Performance: changes 9 and 10",
        body: [
          "**The answer first:** a slow or unstable mobile page loses visitors before your message is read. Aim for Google's ‘good’ Core Web Vitals on mobile and treat every third-party script as a cost.",
          "**Research.** web.dev defines ‘good’ as Largest Contentful Paint at or under 2.5 seconds, Interaction to Next Paint at or under 200 milliseconds and Cumulative Layout Shift at or under 0.1, measured at the 75th percentile of page loads and split by mobile and desktop ([[https://web.dev/articles/vitals|web.dev]]). Google says Core Web Vitals are used by its ranking systems but that relevance still comes first, so do not chase perfect scores for SEO alone ([[https://developers.google.com/search/docs/appearance/page-experience|Google Search Central]]). The case for speed here is conversion, explained in [[/blogs/why-page-speed-still-decides-conversion|why page speed still decides conversion]] and handled technically in [[/blogs/website-performance-optimization|website performance optimisation]].",
        ],
        table: {
          headers: ["", "9. Pass Core Web Vitals on mobile", "10. Cut third-party script weight"],
          rows: [
            ["**Problem**", "Hero video and uncompressed images; LCP well above 2.5 s on mid-range phones", "Chat widget, three analytics tags, heatmaps and ad pixels all load before the page is usable"],
            ["**Change**", "Compress and size images, preload the hero image, reserve space to stop layout shift", "Remove unused tags, delay non-essential scripts until interaction or after load, use a server-side tag setup where sensible"],
            ["**Why it can help**", "Visitors see the offer sooner and pages respond to taps quickly", "Improves INP and LCP without redesigning anything"],
            ["**How to test**", "Before/after field data (CrUX or real-user monitoring), compared on the same traffic mix", "Before/after in field data; A/B test only if your tool can split server-side"],
            ["**Metric to monitor**", "p75 LCP, INP and CLS on mobile, bounce rate, conversion rate", "p75 INP and LCP, tag-dependent reports still working"],
            ["**Potential downside**", "Developer time; gains may not show as more leads if speed was not the bottleneck", "Delaying tags can under-count some conversions; validate tracking after changes"],
          ],
        },
      },
      {
        heading: "Mobile: changes 11 and 12",
        body: [
          "**The answer first:** on mobile, the contact routes must be one thumb-tap away and work first time: call, WhatsApp and a short form.",
          "**Research.** WCAG 2.2 success criterion 2.5.8 (Level AA) requires pointer targets of at least 24 by 24 CSS pixels, with listed exceptions ([[https://www.w3.org/TR/WCAG22/|W3C WCAG 2.2]]). NN/g's mobile guidance recommends reducing typing by using device features and saving state in case people are interrupted ([[https://www.nngroup.com/articles/mobile-ux/|NN/g mobile UX]]).",
          "**WhatsApp links.** WhatsApp's click-to-chat format is wa.me followed by the full number in international format without the plus sign, zeros, brackets or dashes, for example wa.me/9715XXXXXXXX, with an optional pre-filled message. Route it to a WhatsApp Business Platform number shared by the team rather than one salesperson's phone.",
        ],
        table: {
          headers: ["", "11. Sticky mobile contact bar", "12. Inputs that suit phones"],
          rows: [
            ["**Problem**", "The only CTA is at the top; after scrolling, visitors must scroll back to act", "Email field opens the default keyboard, phone field has no numeric keypad, autofill is blocked"],
            ["**Change**", "A slim bottom bar with ‘Call’, ‘WhatsApp’ and ‘Enquire’, each at least 24 × 24 CSS px with spacing", "Use correct input types and autocomplete attributes, numeric keypad for phone, allow paste"],
            ["**Why it can help**", "Puts the action where the thumb is at the moment intent appears", "Less typing and fewer mistakes on small screens"],
            ["**How to test**", "A/B test with and without the bar on mobile only", "Before/after on mobile form completion; usability test on two or three real devices"],
            ["**Metric to monitor**", "Mobile WhatsApp and call clicks, qualified leads, accidental-tap rate", "Mobile form completion, field errors"],
            ["**Potential downside**", "Covers content and can feel pushy; may shift leads from form to WhatsApp rather than add new ones", "Minimal, apart from QA time across browsers"],
          ],
        },
      },
      {
        heading: "CTA: changes 13 and 14",
        body: [
          "**The answer first:** a call to action should say what happens next and suit the visitor's stage. ‘Submit’ and ‘Learn more’ tell the visitor nothing.",
          "**Research.** LinkedIn's B2B Institute, drawing on Ehrenberg-Bass research, says ‘95% of your potential buyers aren't ready to buy today’ ([[https://business.linkedin.com/advertise/resources/b2b-institute/b2b-research/trends/95-5-rule|LinkedIn B2B Institute]]). The researchers present the percentage as a heuristic, but the implication holds: most visitors need a lower-commitment step than ‘Book a call’.",
        ],
        table: {
          headers: ["", "13. Specific, outcome-led CTA copy", "14. A low-commitment secondary CTA"],
          rows: [
            ["**Problem**", "Buttons read ‘Submit’, ‘Contact us’ or ‘Learn more’", "The only option is a sales call; researchers leave without a trace"],
            ["**Change**", "Name the outcome and the next step: ‘Get my fit-out estimate’", "Add one secondary route: a price guide, a checklist, or ‘Ask a quick question on WhatsApp’"],
            ["**Why it can help**", "Sets expectations and lowers the perceived risk of clicking", "Captures earlier-stage visitors who would otherwise leave"],
            ["**How to test**", "A/B test button copy; one variable at a time", "A/B test presence of the secondary CTA; track both routes"],
            ["**Metric to monitor**", "CTA click rate and downstream qualified leads (not clicks alone)", "Total qualified leads, primary CTA rate (watch for cannibalisation)"],
            ["**Potential downside**", "Clever copy can obscure meaning; test plain versions too", "Can divert ready buyers into a slower route"],
          ],
        },
        code: {
          label: "Illustrative CTA copy pairs (weak -> stronger)",
          text: "Submit            -> Send my enquiry\nContact us        -> Get a quote within one business day\nLearn more        -> See what's included and timelines\nBook a demo       -> Book a 20-minute walkthrough\nClick here        -> Download the Dubai price guide (PDF)\nChat with us      -> Ask a question on WhatsApp\nGet started       -> Check availability for your date\nSign up           -> Get the checklist by email",
        },
      },
      {
        heading: "Lead qualification: changes 15 and 16",
        body: [
          "**The answer first:** CRO for lead generation should raise the number of leads your team wants, not just the number of form fills. Light qualification and fast, routed follow-up do that.",
          "**Research.** 6sense's 2025 Buyer Experience Report found buyers first contacted vendors at about 61% of the way through their journey, initiated 79% of first contacts and chose from their day-one shortlist 95% of the time ([[https://6sense.com/report/buyer-experience/|6sense]]). Its sample covers North America, Europe and APAC, with no Middle East breakdown. The practical point: by the time someone enquires, they have usually decided a lot, so a slow reply wastes a shortlisted position.",
          "For automated scoring and routing, see [[/blogs/ai-lead-qualification-uae|AI lead qualification in the UAE]], and for B2B sites [[/blogs/b2b-lead-generation-website-uae|B2B lead generation websites in the UAE]].",
        ],
        table: {
          headers: ["", "15. One or two qualifying questions", "16. Instant acknowledgement and routing"],
          rows: [
            ["**Problem**", "Sales spends hours on enquiries outside your service area, budget or timeline", "Enquiries land in a shared inbox; replies take a day or more; WhatsApp chats sit on one phone"],
            ["**Change**", "Add a timeline or service-area choice as buttons, not free text", "Send an immediate confirmation saying who will reply and when; route by service and language to an owner"],
            ["**Why it can help**", "Lets you prioritise follow-up and tailor the first reply", "Shortlisted buyers hear back while they are still deciding"],
            ["**How to test**", "A/B test the extra question; compare completion and qualified rate", "Before/after on response time and lead-to-meeting rate"],
            ["**Metric to monitor**", "Form completion rate, qualified leads, sales hours per qualified lead", "Median first-response time, lead-to-meeting rate"],
            ["**Potential downside**", "Each extra question can reduce completions; do not ask budget if buyers cannot know it", "Automated replies that promise times you miss damage trust"],
          ],
        },
      },
      {
        heading: "Personalisation and bilingual UX: changes 17 and 18",
        body: [
          "**The answer first:** in the UAE the most useful ‘personalisation’ is usually simple: the right language, and a landing page that matches the ad or search that brought the visitor.",
          "**Our recommendation.** A language switch should keep the visitor on the equivalent page, not dump them on the Arabic homepage. Arabic pages need right-to-left layout, mirrored navigation and icons where direction matters, Arabic-appropriate fonts and copy written or reviewed by a fluent writer, not raw machine translation. Our guide to [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]] covers the build side.",
        ],
        table: {
          headers: ["", "17. Bilingual key journeys", "18. Message-matched landing pages"],
          rows: [
            ["**Problem**", "Arabic is a machine-translated copy; the switcher resets to the homepage; forms and errors stay in English", "Ads for ‘villa maintenance Abu Dhabi’ land on a generic homepage about ‘property services’"],
            ["**Change**", "Write Arabic versions of the highest-value pages, forms, confirmation messages and WhatsApp greetings; preserve page on switch", "Create landing pages that repeat the ad's promise, service and emirate in the headline"],
            ["**Why it can help**", "Arabic-preferring buyers can complete the whole journey in their language", "Confirms to the visitor they are in the right place"],
            ["**How to test**", "Compare Arabic-page conversion before and after; usability sessions with Arabic-speaking users", "A/B test matched page versus generic page per campaign"],
            ["**Metric to monitor**", "Qualified leads from Arabic sessions, language switch usage", "Campaign cost per qualified lead, landing-page bounce"],
            ["**Potential downside**", "Ongoing translation and maintenance cost; inconsistent content if one language lags", "More pages to maintain; thin duplicates can hurt SEO if not managed"],
          ],
        },
      },
      {
        heading: "Analytics: change 19",
        body: [
          "**The answer first:** if WhatsApp chats and calls are not tracked as conversions and joined to CRM outcomes, you are optimising a fraction of your leads and probably the wrong fraction.",
          "**Our recommendation.** Treat analytics as a CRO change in its own right. Record which landing page, language and device produced each WhatsApp chat, call and form, and pass that into the CRM so you can report qualified leads and won deals by page. Handle consent properly: under the UAE PDPL (Federal Decree-Law 45 of 2021) consent is required unless an exception applies, and the DIFC regime treats analytics and advertising cookies as behavioural advertising requiring real consent ([[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae data protection]]). Take advice on which regime applies to you.",
        ],
        table: {
          headers: ["", "19. Track every route to a qualified outcome"],
          rows: [
            ["**Problem**", "Only form submits are tracked; WhatsApp and calls are invisible; nobody knows which pages produce revenue"],
            ["**Change**", "Track WhatsApp, call and form events with page, language and source; pass them into the CRM; report qualified leads by page weekly"],
            ["**Why it can help**", "It does not raise conversion directly; it makes every other change measurable and stops you cutting pages that actually sell"],
            ["**How to test**", "Reconcile tracked events against CRM leads for two weeks; fix gaps above about 10%"],
            ["**Metric to monitor**", "Match rate between tracked conversions and CRM leads; qualified leads by page"],
            ["**Potential downside**", "Implementation time and consent complexity; WhatsApp clicks are intent, not confirmed chats"],
          ],
        },
      },
      {
        heading: "AI: change 20",
        body: [
          "**The answer first:** AI can help by answering routine pre-sales questions out of hours and triaging enquiries, but UAE buyers strongly prefer people, so design it as an assistant that hands over, not a gatekeeper.",
          "**UAE facts.** Microsoft's AI Economy Institute estimates 70.1% of the UAE working-age population used generative AI in Q1 2026, the highest share globally ([[https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/|Microsoft]]). Yet 87% of UAE residents in the Zbooni/YouGov survey preferred a human to a chatbot or AI. Both can be true: people use AI tools themselves but still want a person from the business.",
        ],
        table: {
          headers: ["", "20. AI-assisted triage with human handover"],
          rows: [
            ["**Problem**", "Out-of-hours chats and forms wait until morning; sales re-asks the same basic questions"],
            ["**Change**", "An assistant answers from approved content, collects need, timeline and contact, and hands over to a named person with a clear time"],
            ["**Why it can help**", "Keeps the conversation alive out of hours and gives sales context before the first call"],
            ["**How to test**", "Pilot on a share of traffic or on out-of-hours only; review transcripts weekly"],
            ["**Metric to monitor**", "Qualified leads, handover rate, complaints, answer accuracy on reviewed transcripts"],
            ["**Potential downside**", "Wrong answers, frustrated users who wanted a person, data protection obligations for what is collected"],
          ],
        },
        callout: {
          type: "tip",
          text: "Show a ‘Talk to a person’ option in the first message, not after three failed answers. Our guide to [[/blogs/ai-customer-support-uae|AI customer support in the UAE]] covers handover design.",
        },
      },
      {
        heading: "Example: a UAE service page rebuilt for conversion",
        body: [
          "The structure below is illustrative, for a hypothetical Dubai clinic offering a single treatment. It combines several of the 20 changes on one page. Any regulated claims on a real healthcare page need checking against the relevant authority's advertising rules.",
        ],
        code: {
          label: "Illustrative service-page structure (hypothetical clinic)",
          text: "1. H1: Physiotherapy for sports injuries in Dubai\n   Sub: Assessment and treatment plan in one visit\n   CTAs: [Book an assessment] [Ask on WhatsApp]\n   Proof: licence no. | named physios | reviews link\n2. Who it's for / not for (3 bullets each)\n3. What happens at the first visit (4 steps)\n4. Price guidance: what affects the cost,\n   insurance questions answered\n5. Team: names, qualifications, languages spoken\n6. FAQs (6, from real patient questions)\n7. Short form: name, mobile, preferred time,\n   language [English] [Arabic]\n8. Location, parking, hours; sticky mobile bar",
        },
      },
      {
        heading: "How to prioritise: an Impact × Confidence × Ease matrix",
        body: [
          "**The answer first:** score each change from 1 to 5 for **Impact** (how much it could move qualified leads), **Confidence** (how strong your evidence is: analytics, recordings, sales feedback, research) and **Ease** (the inverse of effort: 5 is a copy change, 1 is a rebuild). Multiply them for a score out of 125 and start at the top.",
          "ICE is crude. Its value is the conversation it forces: why do we believe this will help, and what evidence do we have? Re-score after each test, because results change your confidence in related ideas. The table below is **illustrative** for a hypothetical UAE B2B services site with heavy mobile and WhatsApp traffic; your scores will differ.",
        ],
        table: {
          headers: ["#", "Change", "Impact", "Confidence", "Ease", "ICE"],
          rows: [
            ["19", "Track every route to qualified outcome", "4", "5", "4", "80"],
            ["13", "Specific CTA copy", "3", "4", "5", "60"],
            ["16", "Instant acknowledgement and routing", "4", "4", "4", "64"],
            ["1", "Answer-first hero", "4", "4", "4", "64"],
            ["11", "Sticky mobile contact bar", "4", "3", "4", "48"],
            ["5", "Fewer, clearer fields", "4", "4", "4", "64"],
            ["6", "Inline validation, UAE phone formats", "3", "4", "4", "48"],
            ["7", "Verifiable business identity", "3", "4", "5", "60"],
            ["18", "Message-matched landing pages", "4", "4", "3", "48"],
            ["12", "Phone-friendly inputs", "2", "4", "5", "40"],
            ["4", "Proof and CTA above the fold", "3", "3", "4", "36"],
            ["2", "Service-page scope and price guidance", "4", "3", "3", "36"],
            ["14", "Low-commitment secondary CTA", "3", "3", "4", "36"],
            ["10", "Cut third-party scripts", "3", "3", "4", "36"],
            ["15", "One or two qualifying questions", "3", "3", "4", "36"],
            ["8", "Specific, external proof", "3", "3", "3", "27"],
            ["3", "One primary path per page", "3", "3", "3", "27"],
            ["9", "Pass Core Web Vitals on mobile", "3", "3", "2", "18"],
            ["17", "Bilingual key journeys", "4", "2", "2", "16"],
            ["20", "AI triage with human handover", "3", "2", "2", "12"],
          ],
        },
        callout: {
          type: "note",
          text: "Illustrative scores only. Bilingual journeys score low here because the hypothetical site's buyers are mostly English-speaking; for a business selling to Emirati consumers or government, Impact and Confidence would be higher.",
        },
      },
      {
        heading: "How to A/B test a CRO change properly",
        body: [
          "**The answer first:** an A/B test randomly splits visitors between the current version (control) and a change (variant), and compares one pre-chosen metric after a sample size you fixed in advance. Most bad CRO decisions come from skipping one of those steps.",
          "**1. Write a hypothesis.** ‘Because recordings show mobile visitors scrolling back up to find the WhatsApp button, adding a sticky contact bar will increase qualified mobile leads.’ It names the evidence, the change and the expected effect.",
          "**2. Choose one primary metric.** For lead generation, qualified leads per visitor, or form-plus-WhatsApp conversions if qualification data is too slow. Add guardrail metrics you must not harm, such as lead quality or page speed.",
          "**3. Set the minimum detectable effect (MDE).** The smallest relative change worth detecting. Smaller MDEs need much larger samples, so be realistic about what your traffic can show.",
          "**4. Fix the sample size in advance.** Use a power calculator with your baseline rate, MDE, significance level and power. Evan Miller warns that if you run a test ‘until we see a significant difference’, ‘all the reported significance levels become meaningless’; in his example, stopping at the first p < 0.05 inflated the false-positive rate to 26.1% ([[https://www.evanmiller.org/how-not-to-run-an-ab-test.html|Evan Miller]]). His fix: ‘Decide on a sample size in advance and wait until the experiment is over.’ If you must monitor, use a sequential method designed for it.",
          "**5. Cover full weekly cycles.** Run for whole weeks, at least one and ideally two, so weekday and weekend behaviour, campaign flights and payday patterns are represented.",
          "**6. Check the split.** If the traffic split is noticeably off the planned ratio (a sample ratio mismatch), the result is suspect. Kohavi, Tang and Xu's Trustworthy Online Controlled Experiments (Cambridge University Press, 2020) covers this and other trust checks.",
          "**7. Pick a tool.** Google Optimize and Optimize 360 ‘are no longer available as of September 30, 2023’ ([[https://support.google.com/analytics/answer/12979939|Google Analytics Help]]). Use a third-party testing tool, feature flags or server-side testing, and check its effect on page speed and consent. Our [[/blogs/ecommerce-ab-testing-framework|A/B testing framework]] has the full per-test standard; it is written for ecommerce but applies to lead generation.",
        ],
        code: {
          label: "Test plan template (one per test)",
          text: "Test name:        Sticky mobile contact bar\nHypothesis:       Because <evidence>, <change> will\n                  <effect> for <audience>\nPrimary metric:   Qualified mobile leads / mobile users\nGuardrails:       Lead quality, LCP, complaint rate\nBaseline rate:    <from 4+ weeks of data>\nMDE:              <relative %, agreed in advance>\nSample size:      <per variant, from calculator>\nDuration:         <whole weeks, min 2>\nAudience:         Mobile, all languages\nStop rule:        Only at planned sample size\nDecision:         Ship / iterate / discard, logged",
        },
      },
      {
        heading: "What if you do not have enough traffic to test?",
        body: [
          "**The answer first:** many UAE service businesses cannot run statistically sound A/B tests on enquiry volumes. That does not mean guessing; it means using different evidence and being honest about its limits.",
          "**Qualitative research first.** Five to eight usability sessions with people who match your buyers, including Arabic speakers if relevant, often reveal the biggest problems. Add session recordings, on-page polls (‘What stopped you contacting us today?’), sales-call notes and WhatsApp chat reviews. See [[/blogs/usability-testing|usability testing]] for method.",
          "**Sequential changes with before/after caveats.** Make one meaningful change at a time, hold it for at least four weeks, and compare with the previous period and the same period last year. Before/after comparisons are vulnerable to seasonality, campaign changes, Ramadan and other calendar effects, and competitor activity, so record what else changed and present results as ‘consistent with’ an improvement, not proof.",
          "**Test bigger changes.** A low-traffic site can sometimes detect a large effect from a whole-page redesign when it cannot detect a button-colour change. Use the MDE to decide what is worth testing.",
          "**Test higher up the funnel.** CTA clicks occur more often than qualified leads and can reach sample size faster, but always check downstream lead quality before declaring a win.",
        ],
      },
      {
        heading: "Common CRO mistakes on UAE websites",
        body: [
          "**Optimising for form fills, not qualified leads.** Raw conversion can rise while sales outcomes fall.",
          "**Leaving WhatsApp untracked.** If most conversations start on WhatsApp, your analytics describe a minority of buyers.",
          "**Copying a test result from another site.** A published uplift from a different audience, offer and traffic mix tells you little about yours.",
          "**Stopping tests early.** Peeking until something looks significant produces false winners.",
          "**Machine-translated Arabic.** Poor Arabic signals carelessness to the very buyers it was meant to win.",
          "**Pop-ups and chat widgets everywhere.** They add script weight and interrupt mobile visitors; test whether they help.",
          "**Changing five things at once.** You will not know what worked, or what hurt.",
          "**Choosing a CRO partner on promised uplifts.** Nobody can promise a result before testing. Our guide to [[/blogs/how-to-choose-a-cro-agency|choosing a CRO agency]] lists better questions.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "UAE data and official pages: [[https://datareportal.com/reports/digital-2026-united-arab-emirates|DataReportal, Digital 2026: UAE]]; [[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Zbooni/YouGov WhatsApp survey (via Communicate, 2024)]]; [[https://www.consultancy-me.com/news/11592/deloitte-consumers-in-uae-and-ksa-driving-surge-in-ai-adoption-and-social-commerce|Deloitte Digital Consumer Trends 2025 (via Consultancy-ME)]]; [[https://blogs.microsoft.com/on-the-issues/2026/05/07/the-state-of-global-ai-diffusion-in-2026/|Microsoft AI Economy Institute, 2026]]; [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]]; [[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae data protection laws]].",
          "UX and performance research: [[https://www.nngroup.com/articles/scrolling-and-attention/|NN/g, scrolling and attention]]; [[https://www.nngroup.com/articles/web-form-design/|NN/g, web form design]]; [[https://www.nngroup.com/articles/errors-forms-design-guidelines/|NN/g, form errors]]; [[https://www.nngroup.com/articles/trustworthy-design/|NN/g, trustworthy design]]; [[https://www.nngroup.com/articles/mobile-ux/|NN/g, mobile UX]]; [[https://baymard.com/blog/inline-form-validation|Baymard, inline validation]]; [[https://web.dev/articles/vitals|web.dev, Core Web Vitals]]; [[https://developers.google.com/search/docs/appearance/page-experience|Google Search Central, page experience]]; [[https://www.w3.org/TR/WCAG22/|W3C, WCAG 2.2]].",
          "Testing and buyer behaviour: [[https://www.evanmiller.org/how-not-to-run-an-ab-test.html|Evan Miller, How Not To Run an A/B Test]]; [[https://support.google.com/analytics/answer/12979939|Google Analytics Help, Optimize sunset]]; Kohavi, Tang and Xu, Trustworthy Online Controlled Experiments (Cambridge University Press, 2020); [[https://6sense.com/report/buyer-experience/|6sense, 2025 Buyer Experience Report]]; [[https://business.linkedin.com/advertise/resources/b2b-institute/b2b-research/trends/95-5-rule|LinkedIn B2B Institute, 95:5 rule]].",
          "Survey figures come from the named organisations; several are vendor-commissioned or not UAE-specific, as noted in the text. None is ZSpace client data. ICE scores and examples are illustrative.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Website CRO in the UAE is less about clever tricks than about removing friction for a mobile, WhatsApp-first, often bilingual audience, and proving each change with evidence. Start by tracking every conversion route against lead quality, score the 20 changes with your own data, test the strongest candidates properly, and accept that some will not work on your site. For ecommerce stores, the checkout is usually the larger leak; our guide to [[/blogs/uae-ecommerce-checkout-optimization|UAE ecommerce checkout optimisation]] covers it in the same way.",
        ],
        cta: {
          title: "Want a second opinion on where your site loses enquiries?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with UAE and global businesses. We run [[/services/cro-audit|CRO audits]] and [[/services/ui-ux-design|UI/UX design]] work that turns findings into testable changes, including bilingual journeys and WhatsApp routing.",
        },
      },
    ],
  },

  // ------------------------------------------- UAE ECOMMERCE CHECKOUT OPTIMIZATION
  // UAE-specific layer over the generic checkout cluster
  // (why-customers-abandon-checkout, ecommerce-checkout-ux,
  // shopify-checkout-optimization, mobile-ecommerce-checkout): UAE payment mix,
  // COD, BNPL, addressing, Arabic, WhatsApp recovery, a 20-item scorecard and
  // Shopify / custom / marketplace recommendations.
  {
    slug: "uae-ecommerce-checkout-optimization",
    title: "UAE Ecommerce Checkout Optimization: How to Reduce Abandoned Carts",
    seoTitle: "UAE Checkout Optimization: Reduce Abandoned Carts",
    excerpt:
      "Reduce abandoned carts in the UAE: payment options, BNPL, cash on delivery, address fields, Arabic checkout, WhatsApp recovery and a 20-point scorecard.",
    category: "CRO",
    banner: "checkoutflow",
    sceneKind: "checkout",
    bannerAlt: "A checkout flow from cart to payment with UAE payment options, address details and delivery choices at each step",
    date: "2026-10-08",
    readingTime: "20 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "fashion-apparel", "retail"],
    relatedSlugs: ["why-customers-abandon-checkout", "shopify-checkout-optimization", "ecommerce-checkout-ux"],
    faqs: [
      { q: "What is a good cart abandonment rate in the UAE?", a: "There is no reliable published UAE benchmark. Baymard Institute's average of documented cart abandonment rates is 70.22%, calculated across 50 studies from many countries, mostly not UAE-specific. Rather than compare with a benchmark, measure your own abandonment by step, device, payment method and language, and track whether it falls after each change." },
      { q: "Should a UAE online store offer cash on delivery?", a: "It depends on your category, margins and customers. Cash on delivery can reassure first-time buyers, but it adds failed-delivery, cash-handling and reconciliation costs. Checkout.com reports COD use in the UAE has fallen 53% since 2020, and we found no reliable current share figure. Many stores offer it with limits, such as an order cap or a fee, and test the effect." },
      { q: "Is Apple Pay available on Shopify in the UAE?", a: "Yes, through Shopify Payments for the UAE. Shopify's UAE payment-methods page lists Apple Pay, Google Pay and Shop Pay as accelerated checkouts turned on automatically, alongside Visa, Mastercard and Maestro cards. Shopify Payments in the UAE requires an eligible registered entity, such as an LLC or free zone company, and an AED account with a UAE bank. Check current requirements before applying." },
      { q: "Do UAE checkouts need a postcode field?", a: "Most UAE deliveries rely on area, building, street, landmark and phone details rather than a widely used street-level postcode, although Abu Dhabi's Onwani system lists a postal code component. Avoid making a postcode required. Test your checkout with your courier, ask for area and building details, consider a map pin, and make the mobile number required for delivery contact." },
      { q: "Can I send abandoned cart reminders on WhatsApp in the UAE?", a: "Only with permission. Meta requires businesses to obtain opt-in before messaging people on WhatsApp, and messages sent outside an open customer service window must use approved templates. Under the UAE PDPL, consent is required for processing personal data unless an exception applies. Collect a clear, unticked WhatsApp opt-in at checkout and take legal advice on your marketing consent." },
      { q: "Does my UAE checkout need to be in Arabic?", a: "u.ae states that consumer invoices must be in Arabic, with other languages optional, and that UAE-registered ecommerce businesses must provide product or service information in Arabic. We found no rule requiring every checkout screen to be in Arabic, but an Arabic checkout with proper right-to-left layout helps Arabic-preferring shoppers. Confirm your obligations with the relevant authority or an adviser." },
      { q: "Which payment gateways work for UAE ecommerce?", a: "Options for UAE merchants include Network International's N-Genius Online, Checkout.com, which holds a CBUAE acquiring licence, Stripe, Telr and PayTabs, plus Shopify Payments on Shopify. Tabby and Tamara offer buy now, pay later. Compare supported methods, settlement currency and timing, fees, 3-D Secure handling, platform plugins and dispute support with each provider directly." },
      { q: "How do marketplace sellers on noon or Amazon.ae reduce abandonment?", a: "Marketplace sellers cannot change the checkout, which the marketplace controls. They can control listing quality, accurate pricing including delivery, stock accuracy, fulfilment option, delivery promise, reviews and answers to customer questions. Improve those, and use your own store for the checkout experience you can control." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "**UAE ecommerce checkout optimisation** means removing the reasons UAE shoppers leave between cart and order: unclear delivery cost and timing, missing payment methods such as Apple Pay or buy now, pay later, forced account creation, address forms built for postcodes, English-only flows and slow mobile pages. Fix these, test each change, and recover the rest with consented reminders.",
          "This guide separates **UAE research** (market size, payments, delivery expectations) from **our recommendations**. It covers mobile and guest checkout, payment options including cash on delivery, payment failures, UAE address entry, Arabic and right-to-left checkout, WhatsApp support and cart recovery. It ends with a detailed audit checklist, a 20-item **UAE Checkout UX Scorecard** and separate advice for Shopify stores, custom builds and marketplace sellers.",
          "We do not give abandonment percentages for the UAE because we found no reliable published figure. Where we cite global or US data, we say so.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "UAE ecommerce reached AED 42.2 billion in 2025, about 15.7% of retail (EZDubai and Euromonitor).",
          "Payment choice matters: 39% of UAE online shoppers used BNPL in the past year (Checkout.com), and cash is still about 23% of UAE consumer transactions (Visa).",
          "COD is declining, down 53% in the UAE since 2020 per Checkout.com, but no reliable current share exists; decide COD by category and test it.",
          "Delivery and returns options drive abandonment: in DHL's 2026 survey, 83% of UAE shoppers said they would abandon a cart if their preferred delivery option was missing.",
          "Do not force a postcode; ask for area, building, landmark and mobile number, and test address formats with your courier.",
          "Consumer invoices must be in Arabic (u.ae); plan Arabic and right-to-left checkout deliberately.",
          "WhatsApp cart recovery requires opt-in and approved templates (Meta).",
          "Score your checkout with the 20-item scorecard below, then fix the lowest-scoring, highest-traffic steps first.",
        ],
      },
      {
        heading: "UAE ecommerce behaviour: what the research says",
        body: [
          "**Research, not recommendations.** The figures below come from named sources. Some are regional or vendor-commissioned, as labelled.",
        ],
        table: {
          headers: ["Finding", "Source", "Scope and caveats"],
          rows: [
            ["UAE ecommerce reached AED 42.2bn in 2025, about 15.7% of retail; 19% CAGR 2020–25; forecast about AED 67.2bn by 2030", "EZDubai and Euromonitor, via [[https://www.gulftoday.ae/business/2026/09/28/uae-e-commerce-market-size-reaches-dhs422-billion-in-2025|Gulf Today]]", "UAE; market estimate"],
            ["39% of UAE online shoppers used BNPL in the past 12 months (42% in KSA)", "[[https://www.checkout.com/newsroom/checkout-com-and-tabby-partner-to-expand-bnpl-solutions-for-retailers-in-the-uae-and-saudi-arabia|Checkout.com, March 2025]]", "UAE; payments-provider data"],
            ["About 23% of UAE consumer transactions are still cash", "[[https://ae.visamiddleeast.com/about-visa/newsroom/press-releases/prl-27012025.html|Visa, Where Cash Hides, Jan 2025]]", "All consumer transactions, not ecommerce only"],
            ["Cash-on-delivery use down 53% in the UAE since 2020; daily online shopping rose from 5% to 21% of UAE consumers", "Checkout.com State of Digital Commerce in MENA 2025, via Consultancy-ME ([[https://www.checkout.com/guides-and-reports/digital-commerce-mena-2025|report page]])", "Decline only; no current COD share"],
            ["92% of UAE shoppers prioritise fast, free delivery and easy returns; 83% would abandon a cart if their preferred delivery option was unavailable, 81% if their preferred returns option was unavailable", "DHL 2026 E-Commerce Trends Report, reported by Khaleej Times (4 Oct 2026)", "29,000 shoppers in 29 countries; UAE sample size not given"],
            ["84% receive deliveries at home, a neighbour or a safe place; 12% use parcel lockers; 73% return mainly via home collection", "DHL 2026, via Khaleej Times", "As above"],
            ["99% internet penetration; 23.0m mobile connections (202% of population)", "[[https://datareportal.com/reports/digital-2026-united-arab-emirates|DataReportal, Digital 2026: UAE]]", "UAE"],
            ["85% of UAE residents want businesses to offer WhatsApp for support", "[[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Zbooni/YouGov, 2024]]", "1,000 UAE residents; vendor-commissioned"],
          ],
        },
        callout: {
          type: "note",
          text: "What we could not find: a reliable UAE cart abandonment rate, a current cash-on-delivery share of UAE online orders, or UAE-specific reasons for abandonment. Treat any article quoting these without a primary source with caution.",
        },
      },
      {
        heading: "Why shoppers abandon checkout (and what the data does not tell you)",
        body: [
          "**Research.** Baymard Institute's average of documented online cart abandonment rates is **70.22%**, across 50 studies from 2006 to 2025 ([[https://baymard.com/lists/cart-abandonment-rate|Baymard]]). That is a cross-study global average, not a UAE figure. Baymard's survey of **US** online shoppers, excluding those ‘just browsing’, lists the reasons below.",
          "These are US results. We include them because the categories (cost, delivery, trust, accounts, complexity, errors, payment) are useful for structuring an audit, not because the percentages apply to UAE shoppers. For the generic picture, read [[/blogs/why-customers-abandon-checkout|why customers abandon checkout]]; this article adds the UAE layer.",
        ],
        table: {
          headers: ["Reason for abandoning during checkout (US shoppers)", "Share (Baymard)"],
          rows: [
            ["Extra costs too high (shipping, tax, fees)", "40%"],
            ["Delivery was too slow", "20%"],
            ["Didn't trust the site with card information", "19%"],
            ["Site wanted me to create an account", "18%"],
            ["Too long or complicated checkout", "17%"],
            ["Website had errors or crashed", "17%"],
            ["Returns policy wasn't satisfactory", "13%"],
            ["Couldn't see or calculate total order cost up front", "12%"],
            ["Credit card was declined", "10%"],
            ["Not enough payment methods", "9%"],
          ],
        },
      },
      {
        heading: "Mobile checkout",
        body: [
          "**The answer first:** design and test the UAE checkout on a phone first. With 202% mobile connections per head (DataReportal) and much traffic arriving from social apps, a checkout that works on desktop but stumbles on mobile is failing most shoppers.",
          "**Our recommendations.** Put express wallets (Apple Pay, Google Pay) at the top of the first checkout step; use the right keyboard for each field (numeric for phone, email for email); keep tap targets at least 24 by 24 CSS pixels per WCAG 2.2 criterion 2.5.8; avoid hover-dependent help; and save progress so an interrupted shopper does not lose their entries. Shoppers arriving from Instagram or TikTok open the store in an in-app browser, so test there too; some wallets and sign-ins behave differently inside in-app browsers.",
          "For a full mobile-specific treatment, see [[/blogs/mobile-ecommerce-checkout|mobile ecommerce checkout]].",
        ],
      },
      {
        heading: "Guest checkout and account creation",
        body: [
          "**Research.** Baymard found that 24% of US shoppers had abandoned a cart in the previous quarter solely because a site forced them to create an account, and that 47% of sites offering guest checkout failed to make it the most prominent option. Its advice: put ‘Guest’ in the label, show it as a button rather than a text link, place it at the top, and offer account creation on the confirmation step ([[https://baymard.com/research-articles/make-guest-checkout-prominent|Baymard]]). Again, these are US data.",
          "**Our recommendation.** Offer guest checkout prominently, ask for an email or mobile number up front so you can recover abandoned carts with consent, and invite account creation after payment with the details already filled. If you use one-time passcodes, follow WCAG 2.2 criterion 3.3.8: do not block paste or password managers. The [[/blogs/ecommerce-checkout-ux|checkout UX guide]] covers account flows in depth.",
        ],
      },
      {
        heading: "Payment options for UAE shoppers",
        body: [
          "**UAE facts.** Shopify Payments is available in the UAE; its UAE payment-methods page lists Visa, Mastercard and Maestro cards, and Apple Pay, Google Pay and Shop Pay as accelerated checkouts turned on automatically. It is for online payments only, not point of sale ([[https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries|Shopify Help]]). Eligible entities are LLC, Free Zone LLC, Sole Establishment and Free Zone Sole Establishment, with an AED account at a UAE bank ([[https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/united-arab-emirates/requirements|Shopify requirements]]). Tabby and Tamara both offer BNPL and say they are CBUAE-licensed. 39% of UAE online shoppers used BNPL in the past year (Checkout.com).",
          "**Cash on delivery.** Checkout.com reports COD use in the UAE has fallen 53% since 2020, but we found no reliable figure for its current share. On Shopify, COD is a **manual payment method**: Shopify lists ‘cash on delivery (COD), money orders, and bank transfers’ as common manual payments, set up under Settings > Payments; orders show as unpaid until marked paid ([[https://help.shopify.com/en/manual/payments/manual-payments|Shopify manual payments]]).",
          "For gateway architecture, see [[/blogs/ecommerce-payment-gateway-integration|ecommerce payment gateway integration]] and [[/blogs/payment-gateway-integration|payment gateway integration]].",
        ],
        table: {
          headers: ["Method", "Why offer it", "Watch out for", "Our recommendation"],
          rows: [
            ["Cards (Visa, Mastercard)", "Baseline expectation", "3-D Secure friction, declines", "Always; monitor approval rate by issuer"],
            ["Apple Pay / Google Pay", "Fast on mobile, no card typing", "Placement; in-app browser support", "Show at the top of checkout and on cart"],
            ["BNPL (Tabby, Tamara)", "Splits cost for higher baskets", "Fees, eligibility limits, refund handling", "Test for baskets where instalments matter; show instalments on product pages"],
            ["Cash on delivery", "Reassures first-time or wary buyers", "Failed deliveries, cash handling, reconciliation, no upfront commitment", "Offer selectively (order cap, category, fee or verified mobile); test the effect on net delivered revenue"],
            ["Bank transfer", "Some B2B or high-value orders", "Slow confirmation, manual matching", "Only where buyers expect it"],
          ],
        },
      },
      {
        heading: "Payment failures: 3-D Secure, declines and retries",
        body: [
          "**The answer first:** a failed payment is the most expensive kind of abandonment, because the shopper has already decided to buy. Measure it separately and design the recovery path.",
          "**Our recommendations.** Track authorisation rate by gateway, card scheme, issuing bank and device. When 3-D Secure authentication (often an OTP from the shopper's bank) fails or times out, keep the basket and entered details, explain plainly what happened and offer another method, such as a wallet or BNPL, on the same screen. Avoid generic messages like ‘Transaction failed’; say whether to retry, use another card or contact the bank, without exposing sensitive decline reasons. Prevent duplicate charges on retry with idempotent payment requests. Review false declines with your gateway, since fraud rules tuned too tightly reject good customers.",
          "Payment failure handling is covered in depth in [[/blogs/ecommerce-payment-failure-handling|ecommerce payment failure handling]]; cost estimates for slow or failing checkouts are in [[/blogs/the-real-cost-of-a-slow-checkout|the real cost of a slow checkout]].",
        ],
        code: {
          label: "Illustrative payment-failure recovery flow",
          text: "Pay with card\n  -> 3-D Secure challenge\n     |-- success -> order confirmed\n     |-- timeout/fail\n          -> keep basket + details\n          -> message: 'Your bank didn't confirm the\n             payment. You haven't been charged.'\n          -> options: [Try again] [Apple Pay]\n                      [Pay in instalments] [WhatsApp us]\n          -> log: gateway, issuer, device, reason code",
        },
      },
      {
        heading: "Shipping transparency and delivery expectations",
        body: [
          "**UAE research.** In DHL's 2026 E-Commerce Trends Report, as reported by Khaleej Times, 92% of UAE shoppers said they prioritise fast, free delivery and easy returns, 83% would abandon a cart if their preferred delivery option was unavailable and 81% if their preferred returns option was unavailable. The UAE sample size was not given.",
          "**Research (US).** In Baymard's US survey, extra costs were the most common reason to abandon (40%), and 12% could not see or calculate the total cost up front.",
          "**Our recommendations.** Show delivery cost and an estimated delivery date on the product page and cart, before checkout, ideally by emirate. State the free-delivery threshold and how far the shopper is from it. Offer the delivery choices your couriers support (standard, express, scheduled slot) and say what happens if nobody is home. If COD carries a fee, show it before the payment step, not at the end. Make sure the delivery promise matches what your courier actually achieves; a broken promise costs more than a modest one.",
        ],
      },
      {
        heading: "Address forms for UAE deliveries",
        body: [
          "**The answer first:** UAE delivery depends more on area, building, landmark and a reachable mobile number than on a postcode. Do not make a postcode field required; design the address form around how your courier actually finds people.",
          "**UAE facts.** Abu Dhabi's Onwani addressing system works by ‘naming streets and numbering buildings and facilities in Abu Dhabi’, and the Department of Municipalities and Transport lists address parts as building number, street name, city name, area and postal code ([[https://pages.dmt.gov.ae/en/onwani|DMT Onwani]]). Dubai Municipality's Makani system, as described on its official materials, gives building entrances a 10-digit number and complements rather than replaces traditional building addresses; we could not load the Makani site directly to confirm details. We found no primary source for the common claim that ‘the UAE has no postcodes’, so we describe it as having no widely used street-level postcode for deliveries.",
          "**Research.** Baymard found 55% of sites do not offer fully automatic address lookup, and in testing 69% of participants entered the address manually when it did not appear in suggestions, so manual fields must stay visible ([[https://baymard.com/blog/automatic-address-lookup|Baymard]]). The article does not cover UAE addresses.",
          "**Our recommendations.** Ask for emirate (dropdown), area or community, street, building or villa name/number, apartment or unit, and an optional landmark or delivery note. Make mobile number required and explain it is for the courier. Offer an optional map pin or ‘use my location’, and an optional Makani number field for Dubai if your courier uses it. Before launch, run test orders with your courier and compare the fields they need with the fields your checkout collects.",
        ],
        code: {
          label: "Illustrative UAE address form",
          text: "Emirate          [Dubai v]          (required)\nArea/community   [Dubai Marina]     (required, search)\nStreet           [..............]   (optional)\nBuilding/villa   [Marina Tower 2]   (required)\nApartment/unit   [1204]             (optional)\nLandmark / note  [Near metro exit]  (optional)\nMobile           [+971 5_ ___ ____] (required:\n                  'for the courier only')\n[ Pin my location on the map ]      (optional)\nMakani no.       [..........]       (optional, Dubai)\nPostcode         not shown / not required",
        },
      },
      {
        heading: "Arabic, English and right-to-left checkout",
        body: [
          "**UAE facts.** u.ae states that under Federal Law 15 of 2020, amended by Decree-Law 5 of 2023, the consumer invoice ‘must be in Arabic and the provider may add any other language’, and that UAE-registered ecommerce businesses must give licensing details, product or service information in Arabic, and terms of contract, payment and warranty ([[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]]). Confirm the precise obligations for your business with the authority or an adviser.",
          "**Our recommendations.** If you offer Arabic, the whole checkout should switch: labels, errors, delivery messages, payment pages where the provider supports Arabic, confirmation emails and WhatsApp messages. Right-to-left layout should mirror the flow, while phone numbers, card numbers and prices stay left-to-right. Allow Arabic and Latin characters in name and address fields. Keep the language choice through redirects to hosted payment pages and back. The build side is covered in [[/blogs/multilingual-website-development-uae|multilingual website development in the UAE]] and [[/blogs/ecommerce-localization|ecommerce localisation]].",
        ],
      },
      {
        heading: "Trust, returns and invoices",
        body: [
          "**UAE facts.** Under Federal Decree-Law 14 of 2023, digital traders must provide detailed digital invoices for online purchases ([[https://u.ae/en/information-and-services/business/important-digital-services/digital-invoicing|u.ae digital invoicing]]). Consumer invoices must be in Arabic (u.ae).",
          "**Research (US).** In Baymard's US survey, 19% abandoned because they did not trust the site with card details and 13% because the returns policy was unsatisfactory.",
          "**Our recommendations.** Show a short returns summary (window, condition, who pays, how collection works) next to the pay button, with a link to the full policy in Arabic and English. Display the legal entity and trade licence details in the footer and on the policy pages. Use recognisable payment marks only for methods you actually accept. Send a detailed bilingual invoice and order confirmation immediately. Given DHL's finding that 73% of UAE shoppers return mainly via home collection, say clearly whether you offer collection.",
        ],
      },
      {
        heading: "WhatsApp support during checkout",
        body: [
          "**The answer first:** a visible ‘Questions? WhatsApp us’ link on cart and checkout can save orders that would otherwise stall on a delivery or sizing question, provided a person answers quickly.",
          "**UAE facts.** In the Zbooni/YouGov survey, 85% of UAE residents wanted businesses to offer WhatsApp support and 87% preferred a human over a chatbot or AI.",
          "**Our recommendations.** Use a team WhatsApp Business Platform number connected to your helpdesk, publish the hours it is staffed, and pre-fill the chat with the cart or order reference. Measure orders completed after a checkout chat. If you add an AI assistant, let it answer delivery, returns and stock questions from approved content and hand over to a person on request; see [[/blogs/ai-customer-support-uae|AI customer support in the UAE]].",
        ],
      },
      {
        heading: "Cart recovery with consent",
        body: [
          "**The answer first:** cart recovery works only for shoppers you can lawfully contact. Capture contact details early, record consent, and send a small number of useful reminders.",
          "**Facts.** Meta states that ‘businesses are required to obtain opt-in before messaging people on WhatsApp’ ([[https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in|Meta]]), and that ‘template messages are the only type of message that can be sent to WhatsApp users outside of a customer service window’; templates are categorised as authentication, marketing or utility ([[https://developers.facebook.com/docs/whatsapp/message-templates/guidelines|Meta template guidelines]]). Under the UAE PDPL, consent is required unless an exception applies, and the DIFC and ADGM regimes say pre-ticked boxes are not consent ([[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae]]). This is not legal advice; check which rules apply to you.",
          "**Our recommendations.** Add an unticked opt-in at the contact step (‘Send me order updates and reminders on WhatsApp’). Send at most two or three reminders, the first within a few hours, each with the cart contents, the total including delivery, and a link that restores the cart. Lead with service (‘Your cart is saved; questions about delivery?’) before discounts, so you do not train shoppers to abandon for a code. Make opting out one tap.",
        ],
        checklist: [
          "Email or mobile captured at the first checkout step",
          "Separate, unticked consent for marketing messages, stored with timestamp and wording",
          "Approved WhatsApp templates in Arabic and English",
          "Reminder links restore the exact cart, including variant and delivery choice",
          "Reminders stop as soon as the order is placed or the person opts out",
          "Recovered revenue measured against a holdout group, not just credited to the reminder",
        ],
      },
      {
        heading: "Error handling and form validation",
        body: [
          "**Research.** Baymard found about 31% of sites have no inline validation; it recommends validating when a field is left or reaches its correct length, removing errors live as soon as they are fixed and using positive confirmation ([[https://baymard.com/blog/inline-form-validation|Baymard]]). NN/g advises showing error messages next to the field in error ([[https://www.nngroup.com/articles/errors-forms-design-guidelines/|NN/g]]). WCAG 2.2 criterion 3.3.7 (Redundant Entry) requires that information already entered is auto-populated or selectable rather than typed again, for example ‘billing same as delivery’ ([[https://www.w3.org/TR/WCAG22/|W3C]]).",
          "**Our recommendations.** Accept UAE mobile numbers with or without +971, a leading zero or spaces, and normalise them. Never clear the form after an error. Write errors that say how to fix the problem (‘Enter the building name or number’), in the shopper's language. Log every validation error and payment error event so you can see which fields cause the most trouble.",
        ],
      },
      {
        heading: "Checkout speed",
        body: [
          "**The answer first:** every second of waiting after ‘Pay’ invites doubt. Keep checkout pages light and measure them like any other key page.",
          "**Research.** web.dev's ‘good’ thresholds are LCP at or under 2.5 s, INP at or under 200 ms and CLS at or under 0.1, at the 75th percentile ([[https://web.dev/articles/vitals|web.dev]]).",
          "**Our recommendations.** Remove non-essential scripts from checkout, such as review widgets, pop-ups and duplicate pixels. Show a clear processing state after payment submission and disable double-submits. Monitor real-user timings for checkout steps, payment redirects and 3-D Secure returns, separately for mobile. See [[/blogs/why-page-speed-still-decides-conversion|why page speed still decides conversion]].",
        ],
      },
      {
        heading: "Detailed UAE checkout audit checklist",
        body: [
          "Use this as a working list for an internal review. Run it on a mid-range Android phone and an iPhone, in English and Arabic, inside the Instagram in-app browser, and with each payment method, including a deliberately declined card in test mode.",
        ],
        checklist: [
          "Delivery cost and estimated date shown on product page and cart, by emirate",
          "Free-delivery threshold and progress shown in cart",
          "Total including delivery and any COD fee visible before the payment step",
          "Guest checkout is the most prominent option",
          "Apple Pay and Google Pay offered at the top of checkout on supported devices",
          "BNPL shown where basket size suits it, with instalment amount on product pages",
          "COD policy (availability, limits, fees) stated before payment",
          "No required postcode; emirate, area, building and mobile collected",
          "Optional map pin or landmark field; address tested with your courier",
          "Phone field accepts +971, 05x and spaced formats",
          "Arabic checkout complete: labels, errors, emails, WhatsApp, invoice",
          "RTL layout correct; numbers and prices stay left-to-right",
          "Inline validation on blur; errors next to fields; form never cleared",
          "Billing address defaults to delivery address",
          "Paste allowed in OTP and password fields",
          "Payment failure keeps basket and offers alternative methods",
          "Returns summary and collection option near the pay button",
          "Legal entity and licence details on policy pages",
          "WhatsApp help link with staffed hours on cart and checkout",
          "Unticked consent for WhatsApp and email reminders",
          "Checkout p75 LCP, INP and CLS within ‘good’ on mobile",
          "Funnel tracked step by step, by device, language and payment method",
        ],
      },
      {
        heading: "The UAE Checkout UX Scorecard",
        body: [
          "**The answer first:** score each item 0 (missing or broken), 1 (present but weak) or 2 (done well), for a maximum of 40. Score from real devices, not from the admin panel. This is our framework, not an industry standard; use it to compare your checkout against itself over time.",
        ],
        table: {
          headers: ["#", "Item", "2 = done well looks like"],
          rows: [
            ["1", "Cost transparency", "Delivery cost, COD fee and total visible before checkout"],
            ["2", "Delivery promise", "Estimated date by emirate, matching courier performance"],
            ["3", "Guest checkout", "Most prominent option; account offered after payment"],
            ["4", "Express wallets", "Apple Pay / Google Pay at the top, working in-app"],
            ["5", "BNPL", "Offered where relevant; instalments shown early"],
            ["6", "COD policy", "Clear rules and fees; deliberate, tested decision"],
            ["7", "Card payment UX", "Card type detected, numeric keypad, no surprise redirects"],
            ["8", "Payment failure recovery", "Basket kept, clear message, alternative methods offered"],
            ["9", "Address form", "No forced postcode; area, building, landmark, mobile"],
            ["10", "Location help", "Map pin or area search; tested with courier"],
            ["11", "Phone handling", "All UAE formats accepted and normalised"],
            ["12", "Arabic language", "Full checkout, emails and invoice in Arabic"],
            ["13", "RTL quality", "Mirrored layout, correct numbers, Arabic fonts"],
            ["14", "Validation and errors", "Inline, specific, in the shopper's language"],
            ["15", "Mobile ergonomics", "Large targets, correct keyboards, saved progress"],
            ["16", "Trust and returns", "Returns summary near pay button; entity details"],
            ["17", "WhatsApp help", "Staffed, linked from cart and checkout, context pre-filled"],
            ["18", "Consent and recovery", "Unticked opt-in; restorable carts; holdout measured"],
            ["19", "Checkout speed", "Good Core Web Vitals on mobile; no double-submit"],
            ["20", "Measurement", "Step funnel by device, language and payment method"],
          ],
        },
        callout: {
          type: "takeaway",
          text: "Interpretation (our guidance): 34–40, a strong checkout; test refinements. 24–33, solid but leaking; fix every 0 first, then 1s on high-traffic steps. 14–23, significant friction; prioritise cost transparency, payments, address and mobile. Under 14, rebuild the flow before testing details.",
        },
      },
      {
        heading: "Recommendations for Shopify stores",
        body: [
          "**Facts.** Shopify announced that checkout.liquid customisations would stop working for in-checkout pages from 13 August 2024; on shopify.dev it states that ‘checkout.liquid and additional scripts were sunset for the Thank you and Order status pages on August 28, 2025’, with script tags on those pages sunset on 28 August 2025 for Plus stores and 26 August 2026 for non-Plus stores ([[https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid|shopify.dev]]). Customisation now runs through Checkout Extensibility (checkout UI extensions, Functions and apps). Tabby's Shopify docs say Shopify Scripts stopped running on 30 June 2026.",
          "**Facts.** Tabby's Shopify payment app accepts billing addresses in the UAE and Saudi Arabia only, in AED and SAR; shoppers elsewhere see an error, so hide it for them, and add its hosted page domain to your analytics referral exclusions ([[https://docs.tabby.ai/e-commerce-platforms/shopify|Tabby docs]]). Tamara provides a Shopify payment gateway plugin ([[https://docs.tamara.co/docs/shopify|Tamara docs]]). COD is set up as a manual payment method.",
          "**Our recommendations.** Turn on Shopify Payments if eligible so Apple Pay and Google Pay appear; check your checkout and thank-you customisations have moved to extensions; review the UAE address fields Shopify shows in a live test checkout before relying on them; add BNPL through the providers' apps and test refunds; use Shopify's checkout language settings and test Arabic end to end. Deeper guides: [[/blogs/shopify-checkout-optimization|Shopify checkout optimisation]], [[/blogs/shopify-checkout-audit|Shopify checkout audit]] and [[/blogs/shopify-store-development|Shopify store development]].",
        ],
      },
      {
        heading: "Recommendations for custom ecommerce builds",
        body: [
          "**Facts.** Payment providers available to UAE merchants include Network International (N-Genius Online), Checkout.com (which holds a CBUAE acquiring licence), Stripe, Telr (which says it is CBUAE-licensed) and PayTabs. Apple Pay is available in the UAE. Tabby and Tamara offer BNPL and both say they are CBUAE-licensed. We have not compared fees or approval rates; ask each provider directly.",
          "**Our recommendations.** Choose a gateway on supported methods (cards, wallets, BNPL), AED settlement and timing, 3-D Secure handling, hosted versus embedded fields and PCI scope, dispute tools, Arabic support on hosted pages, and reporting detail on decline reasons. Build the address model around emirate, area and building rather than postcode. Implement idempotent payment calls and webhooks, so a retry or a dropped redirect never creates duplicate charges or lost orders. For selling across borders later, see [[/blogs/global-ecommerce-checkout|global ecommerce checkout]], [[/blogs/international-ecommerce-payments|international ecommerce payments]] and [[/blogs/uae-to-saudi-ecommerce-expansion|UAE to Saudi ecommerce expansion]].",
        ],
      },
      {
        heading: "Recommendations for marketplace sellers (noon, Amazon.ae)",
        body: [
          "**The answer first:** on a marketplace you do not control the checkout, payment options or address form. You control what the shopper sees before checkout and whether you deliver on the promise.",
          "**UAE facts.** Dubai's Dubai Traders initiative has supported more than 3,400 sellers (February 2026), and Dubai's SME digital trade initiative with Amazon reached more than 105,000 companies by May 2026 ([[https://www.mediaoffice.ae/en/news/2026/june/11-06/hamdan-bin-mohammed-chairs-meeting-of-the-higher-committee|Dubai Media Office]]). Check eligibility with the programme directly.",
        ],
        table: {
          headers: ["You can control", "You cannot control"],
          rows: [
            ["Titles, images and specifications in Arabic and English", "Checkout steps and design"],
            ["Price competitiveness including delivery", "Which payment methods are offered"],
            ["Stock accuracy and fulfilment option", "Address form and validation"],
            ["Delivery promise you can meet", "Cart recovery messages to shoppers"],
            ["Answers to customer questions and review responses", "Platform fees and rules"],
            ["Returns handling and defect rate", "Shopper data beyond what the platform shares"],
          ],
        },
      },
      {
        heading: "How to test checkout changes",
        body: [
          "**The answer first:** test checkout changes with the same discipline as any experiment: one hypothesis, one primary metric (completed orders per checkout start, or net delivered revenue where COD is involved), a sample size set in advance and full weekly cycles.",
          "Checkout is where testing tools are most restricted, especially on Shopify, so some changes will be released with a before/after comparison instead. Document what else changed, avoid launching during sales events, and account for seasonal swings such as Ramadan and major sale periods. Our [[/blogs/ecommerce-ab-testing-checkout|checkout A/B testing guide]] and the testing rules in [[/blogs/website-cro-uae|website conversion rate optimisation in the UAE]] cover method and pitfalls.",
        ],
      },
      {
        heading: "Common mistakes in UAE checkouts",
        body: [
          "**Requiring a postcode.** Shoppers type random digits or leave.",
          "**Surprise COD or delivery fees at the last step.** Cost surprises are the top abandonment reason in Baymard's US data.",
          "**Hiding guest checkout.** If shoppers do not see it, it is as if it was not offered (Baymard).",
          "**Half-Arabic checkouts.** Arabic labels with English errors and emails look unfinished.",
          "**Offering COD everywhere without measuring.** Gross orders rise while failed deliveries erase the gain.",
          "**WhatsApp reminders without opt-in.** It breaches Meta's policy and risks your number and your reputation.",
          "**Showing BNPL to shoppers who cannot use it.** Errors at payment are worse than not offering it.",
          "**Copying global benchmarks.** Measure your own funnel by step, device, language and payment method.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "UAE market and payments: [[https://www.gulftoday.ae/business/2026/09/28/uae-e-commerce-market-size-reaches-dhs422-billion-in-2025|EZDubai and Euromonitor (via Gulf Today)]]; [[https://www.checkout.com/newsroom/checkout-com-and-tabby-partner-to-expand-bnpl-solutions-for-retailers-in-the-uae-and-saudi-arabia|Checkout.com, BNPL in the UAE and KSA]]; [[https://www.checkout.com/guides-and-reports/digital-commerce-mena-2025|Checkout.com, State of Digital Commerce in MENA 2025]] (COD figures via Consultancy-ME); [[https://ae.visamiddleeast.com/about-visa/newsroom/press-releases/prl-27012025.html|Visa, Where Cash Hides]]; DHL 2026 E-Commerce Trends Report (via Khaleej Times, 4 October 2026); [[https://datareportal.com/reports/digital-2026-united-arab-emirates|DataReportal, Digital 2026: UAE]]; [[https://communicateonline.me/news/85-percent-of-uae-residents-want-businesses-to-use-whatsapp/|Zbooni/YouGov WhatsApp survey]]; [[https://www.mediaoffice.ae/en/news/2026/june/11-06/hamdan-bin-mohammed-chairs-meeting-of-the-higher-committee|Dubai Media Office, Dubai Traders]].",
          "UAE official pages: [[https://u.ae/en/information-and-services/justice-safety-and-the-law/consumer-protection|u.ae consumer protection]]; [[https://u.ae/en/information-and-services/business/important-digital-services/digital-invoicing|u.ae digital invoicing]]; [[https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws|u.ae data protection laws]]; [[https://pages.dmt.gov.ae/en/onwani|Abu Dhabi DMT, Onwani]].",
          "Platforms and providers: [[https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries|Shopify Payments supported countries]]; [[https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries/united-arab-emirates/requirements|Shopify Payments UAE requirements]]; [[https://help.shopify.com/en/manual/payments/manual-payments|Shopify manual payments]]; [[https://shopify.dev/docs/storefronts/themes/architecture/layouts/checkout-liquid|shopify.dev, checkout.liquid]]; [[https://docs.tabby.ai/e-commerce-platforms/shopify|Tabby Shopify docs]]; [[https://docs.tamara.co/docs/shopify|Tamara Shopify docs]]; [[https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in|Meta, WhatsApp opt-in]]; [[https://developers.facebook.com/docs/whatsapp/message-templates/guidelines|Meta, WhatsApp template guidelines]].",
          "UX research: [[https://baymard.com/lists/cart-abandonment-rate|Baymard, cart abandonment rate]]; [[https://baymard.com/research-articles/make-guest-checkout-prominent|Baymard, guest checkout]]; [[https://baymard.com/blog/automatic-address-lookup|Baymard, address lookup]]; [[https://baymard.com/blog/inline-form-validation|Baymard, inline validation]]; [[https://www.nngroup.com/articles/errors-forms-design-guidelines/|NN/g, form errors]]; [[https://web.dev/articles/vitals|web.dev, Core Web Vitals]]; [[https://www.w3.org/TR/WCAG22/|W3C, WCAG 2.2]].",
          "Baymard reasons are US survey data. Survey figures come from the named organisations, several vendor-run; none is ZSpace client data. Regulations change: confirm consumer protection, invoicing and data protection obligations with the relevant authority or an adviser.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A UAE checkout loses orders for familiar reasons, such as surprise costs, forced accounts and slow mobile pages, plus local ones: missing wallets or BNPL, postcode-shaped address forms, half-Arabic flows and no human to ask on WhatsApp. Score your checkout honestly, fix the zeros on your busiest steps, test what you can, and recover the rest with consented, useful reminders. No single change guarantees fewer abandoned carts, but a checkout that matches how UAE shoppers pay, receive parcels and ask questions gives every order a better chance.",
        ],
        cta: {
          title: "Want your checkout reviewed against this scorecard?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with UAE and global ecommerce brands. We help with [[/services/shopify-development|Shopify development]], checkout extensions and [[/services/cro-audit|CRO audits]], including Arabic checkout and UAE payment set-up.",
        },
      },
    ],
  },
];
