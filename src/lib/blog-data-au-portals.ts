import type { BlogPost } from "./blog-data";

/**
 * Australian portals trio: online booking systems, customer self-service
 * portals and B2B wholesale ordering portals. The booking article has no
 * existing owner. The customer portal article covers service and account
 * self-service (documents, requests, billing) and is kept separate from B2B
 * ordering (b2b-ecommerce-customer-portal). The B2B article is an
 * Australian decision page that links into the generic B2B cluster
 * (wholesale-ecommerce-website, b2b-ecommerce-pricing, b2b-ecommerce-erp-integration,
 * b2b-approval-workflows and others) rather than repeating it.
 * Australian decisions covered: multiple time zones and state-by-state
 * daylight saving; ACL consumer guarantees and unfair contract terms in
 * cancellation and trade terms; the RBA surcharging change from 1 October
 * 2026; Spam Act factual messages; Privacy Act coverage of health providers,
 * APP 11 and APP 12; WCAG 2.2 accessible authentication; ATO tax invoice
 * rules (ABN, $82.50 and $1,000 thresholds); Peppol; GST-inclusive versus
 * exclusive trade pricing; Australia Post and StarTrack APIs.
 * Sources checked 2026-10-09 (ATO, ACCC and ACMA pages via search summaries
 * where the fetcher was blocked): RBA conclusions paper (surcharging);
 * ACCC unfair contract terms; ACMA spam guidance; OAIC (small business,
 * APP 12, NDB 2025); W3C WCAG 2.2; ATO tax invoices and Peppol; Australia
 * Post developer centre; IANA time zone database. No figure here is ZSpace
 * client data.
 */
export const auPortalPosts: BlogPost[] = [
  {
    slug: "booking-system-development-australia",
    title: "Online Booking System Development: Features, Integrations and Planning for Australian Businesses",
    seoTitle: "Online Booking System Development in Australia",
    excerpt:
      "Planning an online booking system in Australia: availability, time zones, reminders, cancellation rules, deposits, calendar and CRM integrations, build vs buy.",
    category: "Web Development",
    banner: "journeymap",
    sceneKind: "workflow",
    bannerAlt: "A customer choosing a service, time slot and staff member, paying a deposit and receiving reminders, while the booking syncs to staff calendars and the CRM",
    date: "2026-10-09",
    updated: "2026-10-10",
    readingTime: "12 min read",
    relatedServiceSlugs: ["website-development", "mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["healthcare-healthtech", "travel-hospitality", "sports-fitness", "professional-services", "education-edtech"],
    relatedSlugs: ["customer-portal-development-australia", "api-integration-australia", "mobile-app-payments"],
    faqs: [
      {
        q: "Should we build a custom booking system or use booking software?",
        a: "Use existing booking software when your services, scheduling rules and payments are typical for your industry, which is true for many clinics, salons, gyms and consultants. Consider custom development, or a custom layer around a booking platform, when scheduling depends on complex resources, travel time, equipment or multi-step services, when booking is part of a larger customer portal, or when integrations are central to operations.",
      },
      {
        q: "How should a booking system handle Australian time zones?",
        a: "Store every booking in UTC with the relevant IANA time zone, such as Australia/Sydney or Australia/Brisbane, and display times in the customer's or venue's local zone. Australia has several standard time zones, and daylight saving applies in New South Wales, Victoria, the ACT, Tasmania and South Australia but not in Queensland, the Northern Territory or Western Australia. Test bookings across daylight saving changes.",
      },
      {
        q: "Can we charge a cancellation fee?",
        a: "Often, if the fee and conditions are clearly disclosed before booking and are reasonable. Under the Australian Consumer Law, unfair terms in standard form consumer contracts can be void and, since 9 November 2023, can attract penalties. A fee that is far higher than your actual loss is a risk. Show the policy at booking, in confirmations and in reminders, and get advice on your terms.",
      },
      {
        q: "Can we add a surcharge to card deposits?",
        a: "Under the Reserve Bank's March 2026 decision, surcharges on eftpos, Mastercard and Visa debit, prepaid and credit cards were removed from 1 October 2026. American Express and UnionPay also removed surcharging from 1 October 2026, and PayPal from 5 October 2026, by their own decision rather than RBA regulation; buy now pay later and other methods remain under review. Build card costs into your prices and check current RBA guidance for other methods.",
      },
      {
        q: "Do appointment reminder SMS messages need consent?",
        a: "Purely factual messages, such as a reminder of an existing appointment with no promotional content, are treated differently from marketing under the Spam Act and do not need the same consent and unsubscribe facility, though they must still identify the sender. If a reminder also promotes other services or offers, it is likely a commercial message and the full rules apply. Keep reminders factual.",
      },
      {
        q: "What integrations does a booking system usually need?",
        a: "Common integrations are staff calendars such as Google Calendar or Microsoft 365, a payment provider for deposits, SMS and email for confirmations and reminders, a CRM or practice management system for customer records, accounting software such as Xero or MYOB for invoices, and video conferencing for online appointments. Decide which system owns each record before integrating.",
      },
      {
        q: "Is a health clinic's booking system covered by the Privacy Act?",
        a: "Generally yes. Health service providers are covered by the Privacy Act regardless of turnover, and booking details can reveal health information. Collect only what you need, protect it, control staff access, choose where data is hosted carefully and have a data breach response plan. Health providers were the sector reporting the most notifiable data breaches to the OAIC in 2025.",
      },
    ],
    content: [
      {
        heading: "What does an Australian booking system need to do?",
        body: [
          "**A good online booking system shows real availability, lets customers book, reschedule or cancel without calling, takes a deposit where appropriate, sends clear reminders and keeps staff calendars and customer records in sync.** For Australian businesses it must also handle multiple time zones and daylight saving, display fair cancellation terms, follow the new card surcharging rules, keep reminders within the Spam Act and protect personal information. Many businesses can buy this; some need a custom build.",
          "This guide is for clinics, studios, trades, consultants, tour operators, schools and any business that sells time. It covers scheduling and availability, notifications, rescheduling and cancellation rules, payments and deposits, staff administration, integrations, security, accessibility and mobile usability, and how to decide between booking software and custom development.",
          "If booking is one part of a wider self-service experience, read [[/blogs/customer-portal-development-australia|customer portal development]] too. If customers book through an app, [[/blogs/mobile-app-development-cost-australia|mobile app development cost in Australia]] covers budgeting. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Most businesses with standard services should start with booking software. Build when scheduling rules, resources or integrations are genuinely distinctive.",
          "Model availability from real constraints: staff, rooms, equipment, travel time and buffers.",
          "Store times in UTC with an IANA time zone. Australian daylight saving differs by state.",
          "Show cancellation and no-show terms before booking. Unfair terms in standard form consumer contracts can attract penalties.",
          "Card surcharges on eftpos, Visa and Mastercard were removed from 1 October 2026.",
          "Keep reminders factual; add marketing only with consent.",
          "Health and other sensitive bookings need stronger privacy and access controls.",
        ],
      },
      {
        heading: "Do you need custom booking software at all?",
        body: [
          "Many booking needs are well served by existing products, and they absorb a lot of work: calendar sync, reminders, payments and mobile apps. Before scoping a build, check whether a product handles at least the core of your scheduling rules.",
        ],
        table: {
          headers: ["Situation", "Usually best"],
          rows: [
            ["Single service type, staff calendars, simple deposits", "Booking software, configured"],
            ["Industry-specific needs such as clinical notes or class passes", "Industry software with booking built in"],
            ["Bookings depend on equipment, vehicles, travel time or multi-step services", "Custom scheduling engine or a custom layer"],
            ["Booking is one part of a customer portal or app you are building", "Custom booking module integrated with the portal"],
            ["Complex integrations with operations, ERP or field service", "Custom, or software with a strong API plus integration work"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: write down your ten most awkward real booking scenarios (a double-length appointment that needs a specific room, a tour that needs a minimum number of guests) and test shortlisted software against them. The scenarios that fail decide whether you need custom work.",
        },
      },
      {
        heading: "Scheduling and availability",
        body: [
          "Availability is the heart of a booking system, and it is more than a calendar. Model the real constraints:",
        ],
        checklist: [
          "**Services:** duration, buffer time before and after, preparation steps, and which staff or resources can deliver them.",
          "**Staff:** working hours, breaks, leave, qualifications and locations.",
          "**Resources:** rooms, chairs, vehicles, equipment, with capacity.",
          "**Travel time** for mobile services, using real addresses.",
          "**Booking windows:** how far ahead and how close to the start customers can book.",
          "**Capacity rules:** group classes, minimum numbers for tours, waitlists.",
          "**Holds:** temporarily reserve a slot while the customer pays, then release it if they do not.",
          "**Concurrency:** prevent two customers booking the last slot at the same moment.",
        ],
      },
      {
        heading: "Time zones and daylight saving in Australia",
        body: [
          "Time handling is a common source of booking errors in Australia. Mainland Australia uses three standard time zones: AEST (UTC+10) in Queensland, New South Wales, Victoria, Tasmania and the ACT; ACST (UTC+9:30) in South Australia and the Northern Territory; and AWST (UTC+8) in Western Australia. Daylight saving applies in New South Wales, Victoria, the ACT, Tasmania and South Australia, from the first Sunday in October to the first Sunday in April, but not in Queensland, the Northern Territory or Western Australia. Lord Howe Island has its own rules.",
          "So for half the year Brisbane and Sydney are an hour apart, and for the other half they are the same. Online services, telehealth and tours that sell interstate are especially exposed.",
        ],
        checklist: [
          "Store each booking as a UTC timestamp plus the IANA time zone of the venue or service, such as Australia/Sydney, Australia/Brisbane, Australia/Adelaide or Australia/Perth.",
          "Display times in the venue's zone for in-person services, and in the customer's zone for online services, with the zone shown.",
          "Recalculate reminders from stored times, not from text.",
          "Test bookings that cross the daylight saving changes in April and October.",
          "Show the time zone in confirmations and calendar invitations.",
        ],
      },
      {
        heading: "Confirmations, reminders and notifications",
        body: [
          "Clear communication reduces no-shows and calls. For channel and timing patterns, see [[/blogs/mobile-app-push-notifications|push notification design]]. Send a confirmation immediately, with the service, time, location or link, what to bring, the cancellation policy and how to change the booking. Send reminders at intervals that suit the service, and notify staff of new, changed and cancelled bookings.",
          "**Spam Act.** Under the Spam Act, purely factual messages, such as a reminder of an existing appointment with no promotional content, are treated differently from commercial messages: they do not need consent or an unsubscribe facility, but must identify the sender. Add a promotion to the reminder and it is likely to become a commercial message that needs consent and an unsubscribe facility. Keep reminders factual and send marketing separately to people who have agreed to it.",
        ],
      },
      {
        heading: "Rescheduling, cancellation and no-show rules",
        body: [
          "Self-service rescheduling and cancellation reduce admin, but the rules need care. If you also take subscriptions or memberships, the cancellation rules in [[/blogs/subscription-ecommerce-australia|subscription ecommerce in Australia]] apply as well.",
        ],
        checklist: [
          "Let customers reschedule or cancel online up to a cut-off, with the cut-off shown clearly.",
          "State any cancellation or no-show fee before the customer books, in the confirmation and in reminders.",
          "Make the fee proportionate to the real cost of a late cancellation, and get advice on the wording.",
          "Offer the released slot to a waitlist automatically.",
          "Handle your own cancellations: refunds, rebooking and notifications.",
          "Log every change, with who made it and when.",
        ],
        callout: {
          type: "note",
          text: "Since 9 November 2023, unfair terms in standard form consumer and small business contracts can attract penalties, not just be declared void. Booking terms are usually standard form contracts. Consumer guarantees under the Australian Consumer Law also apply to services, so a cancellation policy cannot remove a customer's rights if you fail to deliver.",
        },
      },
      {
        heading: "Payments and deposits",
        body: [
          "Not every booking needs payment up front. Deposits suit high-value or high no-show services; full prepayment suits classes, tours and events; pay-on-the-day suits many clinics and trades. Where you take money, integrate with an established payment provider so card details never touch your servers.",
          "**Surcharging.** The Reserve Bank decided in March 2026 to remove surcharges on eftpos, Mastercard and Visa debit, prepaid and credit cards from 1 October 2026, and the RBA reports that American Express and UnionPay also removed surcharging from 1 October 2026, and PayPal from 5 October 2026, by their own decision rather than RBA regulation; buy now pay later and other methods remain under review. Remove card surcharge lines for those networks and build costs into your prices.",
          "Design refunds and partial refunds into the system, and reconcile payments with bookings and with your accounting software. For payment UX and security, see [[/blogs/mobile-app-payments|designing a secure payment experience]].",
        ],
      },
      {
        heading: "Staff calendars and administration",
        body: [
          "Staff need an admin view as much as customers need a booking page, and the same [[/blogs/business-intelligence-dashboards-australia|dashboard principles]] apply to utilisation and no-show reports.",
        ],
        checklist: [
          "Day, week and resource views, filtered by location and staff member.",
          "Manual bookings and blocks for phone bookings, leave and meetings.",
          "Two-way sync with staff calendars such as Google Calendar or Microsoft 365, so personal commitments block availability.",
          "Role-based access: reception sees bookings; practitioners see their own notes; managers see reports.",
          "Reports on utilisation, no-shows, cancellations and revenue by service.",
          "An audit log of changes.",
        ],
      },
      {
        heading: "CRM, calendar and accounting integrations",
        body: [
          "Most of a booking system's value comes from what it connects to. Decide which system owns customer records: the booking system, a CRM or a practice management system. Then integrate calendars, payments, SMS and email, accounting (Xero or MYOB for invoices and payments), and video for online sessions. Use webhooks for real-time updates and design for retries when a connected system is down. Our guides to [[/blogs/api-integration-australia|API integration for Australian businesses]] and [[/blogs/custom-crm-development-australia|custom vs off-the-shelf CRM]] cover the details.",
        ],
      },
      {
        heading: "Security, privacy and accessibility",
        body: [
          "**Privacy.** Health service providers are covered by the Privacy Act regardless of turnover, and many other businesses are covered by turnover or activity. Booking data can reveal sensitive information. Collect the minimum, restrict staff access by role, keep notes out of notifications, and have a breach response plan. Health service providers reported the most notifiable data breaches of any sector in 2025.",
          "**Security.** Use MFA for staff accounts, rate-limit booking and login endpoints to stop abuse, validate every input on the server and keep dependencies patched. See [[/blogs/secure-web-application-development-australia|building a secure customer-facing web application]].",
          "**Accessibility and mobile.** Most bookings happen on phones. Make the date and time picker usable with a keyboard and screen reader, provide a list alternative to calendar grids, keep targets large enough (WCAG 2.2 adds a minimum target size criterion) and avoid time limits that rush people. See [[/blogs/website-accessibility-australia|website accessibility in Australia]].",
        ],
      },
      {
        heading: "MVP scope for a custom booking system",
        body: [
          "If you build, launch with the smallest system that handles your real bookings well, then extend. Our guide to [[/blogs/mvp-development-australia|MVP development]] covers how to choose what to leave out, and [[/blogs/workflow-digitization-australia|workflow digitisation]] covers mapping the admin process behind the bookings.",
        ],
        table: {
          headers: ["Release", "Scope"],
          rows: [
            ["**MVP**", "Services, staff availability, booking with time zone handling, confirmation and reminder emails or SMS, self-service cancel and reschedule, admin calendar, basic reports"],
            ["**Next**", "Deposits and refunds, calendar sync, waitlists, CRM or accounting integration"],
            ["**Later**", "Resource and travel-time scheduling, packages and memberships, customer portal, mobile app"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a multi-site physiotherapy group",
        body: [
          "**This example is hypothetical.** A physiotherapy group with clinics in Brisbane and on the Gold Coast, plus telehealth sessions for clients in New South Wales, uses booking software that cannot handle shared treatment rooms or telehealth across time zones.",
          "Testing ten awkward scenarios shows the software handles standard appointments but fails on room allocation and telehealth times during daylight saving. The group keeps its practice management system as the record of clients and clinical notes, and builds a custom booking front end that reads availability through the system's API, allocates rooms, stores times with IANA zones and shows telehealth times in the client's zone. Reminders stay factual, and the cancellation policy is shown at booking and in every reminder.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Building a scheduling engine for needs that standard software already covers.",
          "Storing local times without time zones.",
          "Hiding cancellation fees in terms and conditions.",
          "Adding promotions to reminder messages without consent.",
          "Letting the booking system and the CRM both claim to own customer records.",
          "Calendar grids that are unusable on phones or with assistive technology.",
        ],
      },
      {
        heading: "Tourism and experience bookings",
        body: [
          "Tours, attractions and accommodation add requirements beyond appointments.",
        ],
        checklist: [
          "**Availability and capacity:** departures, seats, minimum numbers to run, and resource limits such as guides and vehicles.",
          "**Pricing:** seasonal and group pricing, child and concession rates, packages, and clear total prices.",
          "**Cancellations and weather:** clear rules for customer cancellations and operator cancellations, consistent with consumer law.",
          "**Distribution:** connect to channel managers and online travel agents so availability stays in sync; the Australian Tourism Data Warehouse distributes operator listings to state tourism websites and other distributors.",
          "**Customer communication:** itinerary details, meeting points and changes sent in factual messages, in the customer's time zone.",
          "See also [[/blogs/hospitality-software-development-australia|hospitality software development]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Consumer law and payments:** ACCC, businesses urged to remove unfair contract terms; RBA, review of merchant card payment costs and surcharging: conclusions; ACMA, avoid sending spam.",
          "**Privacy and accessibility:** OAIC, small business; OAIC, NDB statistics 2025; W3C, what's new in WCAG 2.2.",
          "**Time:** IANA time zone database.",
          "The scenarios, release plan and example are ours. ACCC and ACMA points are summarised from official guidance and may change; check the current position before relying on them. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "An online booking system succeeds when availability is accurate, changes are easy, communication is clear and the system fits the tools your team already uses. For Australian businesses that also means getting time zones right, being upfront about cancellation terms, following the new surcharging rules, keeping reminders factual and protecting personal information. Buy where you can; build where your scheduling is genuinely yours. If your team travels to customers, the operational side is covered in [[/blogs/field-service-management-software-australia|field service management software]].",
        ],
        cta: {
          title: "Bookings outgrowing your software?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|custom booking and scheduling systems]], [[/services/mobile-app-development|mobile apps]] and [[/services/ui-ux-design|booking UX]]. If it would help to test your scenarios against build or buy, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "customer-portal-development-australia",
    title: "Customer Portal Development: Building a Better Self-Service Experience for Australian Customers",
    seoTitle: "Customer Portal Development in Australia",
    excerpt:
      "Planning a customer self-service portal in Australia: sign-in, documents, service requests, billing, permissions, privacy, accessibility and MVP scope.",
    category: "Web Development",
    banner: "accountmap",
    sceneKind: "crm",
    bannerAlt: "A customer portal where a signed-in customer views documents, raises a service request, pays an invoice and manages users, connected to CRM and billing systems",
    date: "2026-10-09",
    updated: "2026-10-10",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "ui-ux-design", "mobile-app-development"],
    relatedIndustrySlugs: ["professional-services", "insurtech", "energy-cleantech", "telecommunications", "real-estate"],
    relatedSlugs: ["b2b-portal-development-australia", "booking-system-development-australia", "custom-crm-development-australia"],
    faqs: [
      {
        q: "What is a customer portal?",
        a: "A customer portal is a secure, signed-in area of a website or app where customers can serve themselves: view their account, documents and service history, raise and track requests, pay invoices, update details and manage other users. It reduces routine calls and emails and gives customers answers when they want them, provided the information is accurate and the portal is easy to use.",
      },
      {
        q: "How is a customer portal different from a B2B ordering portal?",
        a: "A customer portal focuses on service and account self-service: documents, requests, billing and account details. A B2B ordering portal focuses on buying: account-specific catalogues and prices, bulk orders, approvals and reorders. Some businesses need both, often in one signed-in experience, but the requirements, integrations and success measures differ, so plan them separately.",
      },
      {
        q: "Should we build a portal or use the one in our CRM or billing system?",
        a: "Start by checking the portal features of the systems you already use. Many CRMs, help desks and billing platforms include configurable portals that cover standard needs. Build a custom portal when customers need information from several systems in one place, when workflows are specific to your service, when branding and experience matter commercially, or when the built-in portal cannot meet your security or accessibility requirements.",
      },
      {
        q: "What sign-in options should a customer portal offer?",
        a: "Offer secure sign-in that customers can actually use: email and password with multi-factor authentication, passkeys where supported, and single sign-on for business customers whose organisations require it. WCAG 2.2 includes an accessible authentication criterion, so avoid relying on puzzles or memorising codes without alternatives. Provide safe account recovery, because recovery is a common attack route.",
      },
      {
        q: "Can customers use the portal to access their personal information?",
        a: "Yes, and it can help. If your business is covered by the Privacy Act, APP 12 gives individuals a right to access the personal information you hold about them, subject to exceptions, and APP 13 covers correction. A portal that shows customers their details and lets them update them can make routine requests easier, though you still need a process for requests the portal does not cover.",
      },
      {
        q: "What should be in the first version of a customer portal?",
        a: "Start with the tasks that generate the most calls and emails, typically viewing account details and documents, checking the status of a request or order, and paying an invoice. Add secure sign-in, basic notifications and a way to contact support with context. Leave complex features such as multi-user administration, analytics and integrations with secondary systems for later releases.",
      },
      {
        q: "How do we measure whether a customer portal works?",
        a: "Track how many customers activate accounts and return, which tasks they complete, how many contacts the portal deflects from phone and email, how long requests take to resolve, and customer satisfaction with portal tasks. Compare contact volumes for the tasks the portal supports before and after launch. Low activation usually points to onboarding or sign-in problems.",
      },
          {
        q: "Should we build a customer portal or use our help desk's customer view?",
        a: "Use the help desk's customer view if most contacts are support tickets and customers mainly need to submit and track them. Build a portal when customers need account-specific information from several systems, such as documents, invoices, service history and requests, in one secure place. Start with the cheaper option and add a portal when contact data shows the need.",
      },
      {
        q: "Do professional services firms need a different kind of portal?",
        a: "Usually a document-centred one: secure exchange, approvals and signatures, engagement status and strict per-matter permissions, integrated with practice management and billing. The general portal principles in this guide still apply, but retention, confidentiality and audit requirements are stricter.",
      },
],
    content: [
      {
        heading: "What should an Australian customer portal do?",
        body: [
          "**A customer portal should let customers complete their most common tasks without contacting you: see their account and documents, raise and track service requests, pay bills, update details and manage authorised users.** For Australian businesses it must also meet privacy obligations, including access and correction rights where the Privacy Act applies, support a data breach response, and be accessible under WCAG 2.2. The first version should target the tasks that generate the most calls.",
          "This guide is for service businesses, utilities, insurers, property managers, professional firms and manufacturers that want to give customers a self-service experience. It covers authentication and account management, documents and service requests, permissions, CRM and billing integrations, notifications, security, accessibility and how to prioritise an MVP.",
          "If your customers mainly need to place orders, read [[/blogs/b2b-portal-development-australia|B2B portal development]] instead, or as well. Nothing here is legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Prioritise by contact volume: build the self-service tasks that customers call and email about most.",
          "Check the portal features of your CRM, help desk or billing system before building.",
          "Design sign-in and account recovery carefully: MFA, passkeys where supported, SSO for business customers.",
          "Model organisations, users and roles from day one if business customers have several people.",
          "A portal is only as good as the data behind it. Integrate with the systems of record rather than copying data.",
          "Support privacy rights, such as access and correction, and plan for data breach response.",
          "Make every task accessible and usable on a phone.",
        ],
      },
      {
        heading: "Start from customer tasks, not features",
        body: [
          "Pull three months of call, email and chat reasons from your support team and CRM (the [[/blogs/user-research-methods|user research methods]] guide covers how to supplement this with interviews). Group them into tasks and count them. That list, not a feature wishlist, is your portal backlog.",
        ],
        table: {
          headers: ["Common task", "Portal feature", "Data source"],
          rows: [
            ["\"Where is my request or order?\"", "Status tracking with timeline", "Service desk, job or order system"],
            ["\"Can you resend my invoice or statement?\"", "Documents and billing history", "Billing or accounting system"],
            ["\"I need to pay\"", "Online payment, saved methods, payment plans", "Payment provider, billing"],
            ["\"I need to report a problem\"", "Service request form with attachments", "Service desk or CRM"],
            ["\"I need a certificate, report or contract\"", "Document library with search", "Document management system"],
            ["\"Please update my details\"", "Profile and contact management", "CRM"],
            ["\"Add my colleague\"", "User management for organisations", "Portal identity system"],
          ],
        },
        callout: {
          type: "tip",
          text: "Our recommendation: launch with three to five tasks that together account for most routine contacts, done well. A portal with twenty half-working features trains customers to call instead.",
        },
      },
      {
        heading: "Authentication and account management",
        body: [
          "Sign-in is the front door, and the most common source of portal frustration and attacks.",
        ],
        checklist: [
          "**Registration and activation:** invite customers from your CRM with a secure link, or verify them against an account number and a second factor.",
          "**Sign-in:** email and password with multi-factor authentication, and passkeys where your identity platform supports them.",
          "**Business customers:** single sign-on through their identity provider when they require it.",
          "**Account recovery:** as strong as sign-in. Recovery flows are a common route to account takeover.",
          "**Sessions:** sensible time-outs, sign-out everywhere, and alerts for new devices or changed details.",
          "**Accessible authentication:** WCAG 2.2 success criterion 3.3.8 asks that sign-in not depend on a cognitive function test, such as remembering or transcribing, without an alternative; allowing password managers and paste helps.",
        ],
      },
      {
        heading: "Organisations, users and permissions",
        body: [
          "If your customers are businesses, model organisations from the start. One organisation may have several sites and many users with different rights: an accounts officer who pays invoices, a site manager who raises requests, an administrator who adds and removes users.",
          "Use role-based permissions, with record-level rules where users should only see their own sites or requests. Let customer administrators manage their own users, and log every permission change. Retrofitting multi-user organisations onto a single-user portal is expensive. The [[/blogs/b2b-ecommerce-account-management|B2B account management guide]] covers organisation and role models in depth.",
        ],
      },
      {
        heading: "Documents, requests and billing",
        body: [
          "**Documents.** Provide a searchable library of invoices, statements, contracts, certificates and reports, with clear names and dates. If customers also book appointments, see [[/blogs/booking-system-development-australia|online booking system development]]. Serve files through authorised, expiring links rather than public URLs.",
          "**Service requests.** Use structured forms with categories, attachments and the right questions for each request type, so requests arrive complete. Show status, expected timeframes and updates, and let customers reply in the same thread. Route requests into your service desk or CRM rather than a separate inbox.",
          "**Billing and payments.** Show outstanding invoices, payment history and statements, and let customers pay through an established payment provider. If you invoice businesses, keep tax invoice details correct (see [[/blogs/b2b-portal-development-australia|B2B portal development]] for ATO tax invoice requirements). Remove card surcharges on eftpos, Visa and Mastercard, which were removed from 1 October 2026 under the RBA's decision.",
        ],
      },
      {
        heading: "Integrations with CRM, billing and operations",
        body: [
          "The portal is a window onto other systems. Decide which system owns each record, then integrate rather than duplicating data:",
        ],
        checklist: [
          "**CRM:** customer details, contacts and organisation structure. See [[/blogs/custom-crm-development-australia|custom vs off-the-shelf CRM]].",
          "**Billing or accounting:** invoices, payments and statements, for example Xero or MYOB.",
          "**Service desk or job system:** requests, status and history.",
          "**Document management:** contracts, certificates and reports.",
          "**Identity platform:** sign-in, MFA and SSO.",
          "**Notifications:** email and SMS providers.",
        ],
        callout: {
          type: "note",
          text: "Show customers when information was last updated, and handle a connected system being unavailable gracefully. A portal that shows stale balances causes more calls than it prevents. Our guide to [[/blogs/api-integration-australia|API integration for Australian businesses]] covers retries, webhooks and monitoring.",
        },
      },
      {
        heading: "Notifications and support workflows",
        body: [
          "Notify customers when something changes that they care about: a request updated, a document ready, an invoice due, a payment received. Let them choose channels and frequency for non-essential messages. Keep service notifications factual; marketing messages need consent under the Spam Act.",
          "Make contacting a person easy from any page, and pass context (the customer, the page, the request) to your support team so customers do not repeat themselves. If you plan AI assistance in the portal, see [[/blogs/ai-customer-service-australia|AI customer service in Australia]] for handoff design and the privacy checks it needs.",
        ],
      },
      {
        heading: "Privacy and security",
        body: [
          "A portal concentrates personal and commercial information behind one sign-in, so it needs a higher security bar than a brochure website.",
          "**Privacy rights.** If your business is covered by the Privacy Act, APP 12 requires giving individuals access to the personal information you hold about them, subject to exceptions, and APP 13 covers correction. A portal that shows and lets customers update their details can handle many routine requests. You still need a process for the rest.",
          "**Data breaches.** The Notifiable Data Breaches scheme requires notifying the OAIC and affected individuals of eligible data breaches. The OAIC received 1,205 notifications in 2025. Logging, alerting and an incident plan make it possible to assess a suspected breach quickly.",
          "**Security baseline.** Authorisation checks on every request (the most common web application weakness is broken access control), secure file delivery, rate limiting, input validation, encryption in transit and patched dependencies. See [[/blogs/secure-web-application-development-australia|building a secure customer-facing web application]].",
        ],
      },
      {
        heading: "Accessibility and mobile usability",
        body: [
          "Many customers will use the portal on a phone, and some will use assistive technology. If a native app is on the roadmap, [[/blogs/pwa-vs-native-app|PWA vs native app]] helps decide whether the portal itself can serve mobile users first. Design for both from the start: logical headings, labelled forms, keyboard access, visible focus, sufficient contrast, readable PDFs or HTML alternatives for key documents, and targets large enough to tap. The Australian Human Rights Commission's guidelines on equal access to digital goods and services point organisations to WCAG; see [[/blogs/website-accessibility-australia|website accessibility in Australia]] for detail.",
        ],
      },
      {
        heading: "MVP prioritisation",
        body: [],
        table: {
          headers: ["Release", "Scope"],
          rows: [
            ["**MVP**", "Secure sign-in with MFA, account overview, documents and invoices, request submission and status, online payment, contact support with context"],
            ["**Next**", "Organisation user management, notifications preferences, profile updates synced to CRM, saved payment methods"],
            ["**Later**", "SSO for business customers, bookings, usage dashboards, AI-assisted help, mobile app"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a commercial cleaning company",
        body: [
          "**This example is hypothetical.** A commercial cleaning company serving offices across Victoria handles hundreds of emails a month asking for invoices, site reports and changes to cleaning schedules. Each client has several sites and contacts.",
          "Analysis of support emails shows four tasks account for most contacts: invoice copies, site inspection reports, ad hoc service requests and contact changes. The MVP covers those four, with organisation and site-level permissions, MFA and invoice payment. Data stays in the existing systems: invoices from the accounting software, reports from the job system, contacts from the CRM. Activation and repeat use are tracked, along with the volume of emails for those four tasks before and after launch.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Building features nobody asked for while the top contact reasons remain unsolved.",
          "Single-user accounts for business customers who have teams.",
          "Weak account recovery that undermines strong sign-in.",
          "Copying data into the portal instead of integrating, so it goes stale.",
          "Public or guessable document links.",
          "No onboarding, so customers never activate their accounts.",
        ],
      },
      {
        heading: "Portal, contact form, knowledge base or support platform?",
        body: [
          "A portal is not always the right first step. Compare it with simpler options against the tasks customers actually need to complete.",
        ],
        checklist: [
          "Choose a knowledge base when most contacts are general questions; see [[/blogs/ai-knowledge-base|AI knowledge base]].",
          "Choose a support platform's customer view when most contacts are tickets and their status.",
          "Choose a portal when customers need their own documents, account data and history from several systems in one place.",
          "Many organisations combine them: knowledge base and support platform first, portal for account-specific tasks.",
        ],
        table: {
          headers: ["Option", "Good for", "Limits"],
          rows: [
            ["**Contact form**", "Occasional, varied enquiries", "No status visibility; every request needs a person"],
            ["**Knowledge base**", "Common questions with standard answers", "Cannot show account-specific information"],
            ["**Support platform with customer view**", "Ticket submission and status, standard help desk workflows", "Limited to support data; little account or billing information"],
            ["**Customer portal**", "Account-specific documents, requests, billing and status from several systems", "Higher build and maintenance cost; needs integrations"],
          ],
        },
      },
      {
        heading: "Portals for professional services firms",
        body: [
          "Law firms, accountants, engineers and consultants need portals built around documents, approvals and engagement status rather than orders.",
        ],
        checklist: [
          "Secure document exchange with versioning, expiring links and audit trails.",
          "Approvals and electronic signatures, checked against the Electronic Transactions Act and your document types; see [[/blogs/digital-forms-development-australia|digital forms development]].",
          "Matter or engagement status, milestones and requests for information.",
          "Strict permissions by matter or engagement, including client-side users with different roles.",
          "Retention and legal holds that match professional obligations; see [[/blogs/privacy-by-design-software-australia|privacy by design]].",
          "Integration with practice management, billing and trust accounting systems where relevant.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "**Privacy:** OAIC, APP guidelines chapter 12; OAIC, NDB statistics 2025.",
          "**Accessibility and security:** W3C, what's new in WCAG 2.2; OWASP Top 10:2025.",
          "**Payments:** RBA, surcharging conclusions.",
          "The task-first method, release plan and example are ours. Nothing here is legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A customer portal earns its keep when it answers the questions customers already ask (often the same questions a [[/blogs/legacy-software-modernization-australia|legacy system]] makes hard to answer), with accurate data from your systems of record, behind sign-in that is both secure and usable. Start with the tasks that drive the most contacts, model organisations and permissions properly, support privacy rights, design for accessibility and phones, and measure contact deflection and satisfaction after launch. Member-based organisations should also see [[/blogs/membership-management-software-australia|membership management software]]; franchise networks, [[/blogs/franchise-management-software-australia|franchise management software]]; and charities, [[/blogs/nonprofit-software-development-australia|non-profit software]].",
        ],
        cta: {
          title: "Planning a customer portal?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/website-development|customer portals and integrations]] and [[/services/ui-ux-design|self-service UX]]. If it would help to prioritise your first release, we are happy to talk it through.",
        },
      },
    ],
  },
  {
    slug: "b2b-portal-development-australia",
    title: "B2B Portal Development in Australia: Simplify Wholesale Ordering and Account Management",
    seoTitle: "B2B Portal Development in Australia: Wholesale Ordering",
    excerpt:
      "Planning a B2B ordering portal in Australia: account pricing, GST and tax invoices, Peppol, bulk orders, approvals, ERP and freight integration, and MVP scope.",
    category: "Shopify & Ecommerce",
    banner: "b2bportal",
    sceneKind: "orders",
    bannerAlt: "A trade customer signing in to a wholesale portal, seeing account pricing, placing a bulk order, routing it for approval and receiving a tax invoice synced from the ERP",
    date: "2026-10-09",
    updated: "2026-10-09",
    readingTime: "11 min read",
    relatedServiceSlugs: ["shopify-development", "website-development", "ui-ux-design"],
    relatedIndustrySlugs: ["b2b-enterprise", "manufacturing", "food-beverage", "retail", "logistics-supply-chain"],
    relatedSlugs: ["wholesale-ecommerce-website", "b2b-ecommerce-erp-integration", "customer-portal-development-australia"],
    faqs: [
      {
        q: "What is a B2B portal?",
        a: "A B2B portal is a signed-in website or app where trade customers order from you and manage their account: they see their own catalogue and prices, place bulk or repeat orders, route orders for approval, track deliveries, and view invoices and statements. It replaces orders by email, phone and spreadsheet with structured orders that flow into your ERP or accounting system.",
      },
      {
        q: "Should we use Shopify, a B2B platform or a custom portal?",
        a: "Use an ecommerce platform with B2B features when your needs are mostly catalogue, account pricing, payment terms and reorders, and its integrations fit your ERP. Consider a dedicated B2B platform for complex catalogues, quoting and procurement integration. Build custom, or a custom layer, when ordering rules, configuration or integrations are unusual. Check current plan features, because B2B capabilities vary by platform and plan.",
      },
      {
        q: "What must an Australian tax invoice show?",
        a: "According to the ATO, a tax invoice generally needs to show that it is a tax invoice, the seller's identity and ABN, the issue date, a description of what was sold with quantity and price, the GST amount or a statement that the price includes GST, and the extent to which each sale is taxable. For sales of $1,000 or more it must also show the buyer's identity or ABN. Confirm with the ATO.",
      },
      {
        q: "Should a B2B portal show prices including or excluding GST?",
        a: "Trade buyers usually expect prices excluding GST, because most can claim GST credits, but the portal should make the basis obvious on every page, in the cart and on the invoice. Whatever you choose, show GST clearly at checkout, make totals match the tax invoice exactly and check how your ERP calculates GST and rounding so the two do not disagree.",
      },
      {
        q: "Can a B2B portal send invoices through Peppol?",
        a: "It can, usually through your accounting software or ERP rather than the portal itself. Peppol eInvoicing in Australia uses the ABN as the business identifier, and you connect through an accredited access point provider. Many accounting platforms support Peppol. For government customers, Commonwealth agencies apply faster payment terms to Peppol invoices, which can be a practical reason to adopt it.",
      },
      {
        q: "Can the portal integrate with our ERP?",
        a: "Usually, but confirm the technical capability before promising features. Check whether your ERP version exposes APIs or integration tools for products, customer-specific prices, stock, orders, invoices and statements, and what limits apply. Some older ERPs only support file exports or need middleware. A short technical discovery with your ERP partner avoids designing portal features the ERP cannot support.",
      },
      {
        q: "Do unfair contract terms rules apply to our trade terms?",
        a: "They can. Since 9 November 2023, unfair terms in standard form contracts with small businesses, as well as consumers, can attract penalties. If your trade account terms and conditions are standard form and some customers are small businesses, terms such as one-sided variation rights or broad indemnities are worth reviewing with a lawyer before you put them behind a portal checkbox.",
      },
          {
        q: "Do we need a B2B ecommerce site or a B2B portal?",
        a: "If most revenue comes from existing trade accounts reordering, a logged-in portal with account-specific prices is the priority. If you need to win new business customers, a public catalogue with quote requests and account applications helps, and can earn search traffic. Many Australian wholesalers combine a public catalogue with a logged-in ordering portal.",
      },
],
    content: [
      {
        heading: "What should an Australian B2B portal do?",
        body: [
          "**A B2B portal should let each trade customer see their own catalogue and prices, order in bulk or repeat past orders, route orders through their approvals, track delivery and access correct tax invoices and statements, with orders flowing straight into your ERP or accounting system.** In Australia that also means clear GST treatment, invoices that meet ATO requirements, optional Peppol eInvoicing, freight options that reach regional customers and trade terms that survive unfair contract terms rules.",
          "This guide is an Australian decision page for wholesalers, manufacturers and distributors. It covers account-specific pricing, catalogues and bulk orders, approvals, ERP and inventory integration, customer-specific terms, reordering and tracking, permissions and reporting, and MVP scope. For depth on each area, it links into our generic B2B guides, starting with [[/blogs/wholesale-ecommerce-website|wholesale ecommerce websites]].",
          "If your customers mostly need service self-service rather than ordering, read [[/blogs/customer-portal-development-australia|customer portal development]]. Nothing here is tax or legal advice.",
        ],
      },
      {
        heading: "Key takeaways",
        body: [],
        checklist: [
          "Start from how your best customers order today: email, phone, spreadsheet or rep visits.",
          "Account-specific catalogues and prices are the core feature; get the data model right first.",
          "Make GST treatment explicit everywhere, and ensure invoices meet ATO tax invoice requirements.",
          "Treat the ERP as the source of truth for prices, stock and invoices. Confirm its integration capabilities before promising portal features.",
          "Design for approvals and multiple users per customer from the start.",
          "Plan freight for metro and regional delivery, including carrier integration where you have contracts.",
          "Review standard trade terms for unfair contract terms risk with small business customers.",
        ],
      },
      {
        heading: "Account-specific pricing and catalogues",
        body: [
          "Most wholesale complexity lives in pricing: price lists by customer group, contract prices for key accounts, quantity breaks, promotional pricing and customer-specific product ranges. The portal must show each signed-in buyer exactly their prices and products, calculated the same way as your ERP, or trust collapses quickly.",
          "Decide where pricing rules are calculated. Usually the ERP is the source of truth and the portal either syncs price lists or asks the ERP for prices in real time. Each approach has trade-offs in speed and accuracy. Our guides to [[/blogs/b2b-ecommerce-pricing|B2B pricing display]] and [[/blogs/b2b-customer-specific-catalogs|customer-specific catalogues]] cover patterns in depth.",
        ],
        callout: {
          type: "tip",
          text: "Our recommendation: before any design work, export ten real customers' price lists from your ERP and have someone recreate their prices by hand from the rules. If that is hard, the portal will be too. Simplify pricing rules first where you can.",
        },
      },
      {
        heading: "GST, tax invoices and Peppol",
        body: [
          "**GST display.** Trade buyers usually expect prices excluding GST, but the basis must be obvious on product pages, in the cart and at checkout, and totals must match the tax invoice to the cent. Check how your ERP rounds GST (per line or per invoice) and make the portal match.",
          "**Tax invoices.** The ATO's tax invoice requirements include that the document is intended to be a tax invoice, the seller's identity and ABN, the issue date, a description with quantity and price, the GST amount or a statement that the total includes GST, and the extent each sale is taxable; for sales of $1,000 or more, the buyer's identity or ABN must also be shown. If a customer asks for a tax invoice, you must provide one within 28 days, unless the sale is $82.50 or less including GST. Generate invoices from the ERP or accounting system so the portal shows the same document your books hold.",
          "**Peppol eInvoicing.** Peppol uses the ABN as the business identifier in Australia, and businesses connect through an accredited access point provider. Many accounting platforms support it. It is voluntary for business-to-business trade, but useful for customers who prefer it and for government customers, where Commonwealth agencies apply faster payment terms to Peppol invoices.",
        ],
      },
      {
        heading: "Bulk ordering and reordering",
        body: [
          "Trade buyers know what they want. Speed matters more than browsing.",
        ],
        checklist: [
          "**Quick order:** enter SKUs and quantities, or paste a list. See [[/blogs/b2b-quick-order|quick order design]].",
          "**CSV or spreadsheet upload** for large orders, with clear error handling.",
          "**Order pads and saved lists** per site or season.",
          "**Reorder** from order history in one step. See [[/blogs/b2b-ecommerce-reordering|B2B reordering]].",
          "**Pack sizes, minimums and multiples** enforced at entry, not after submission.",
          "**Stock visibility** by warehouse, with expected restock dates where available.",
          "**Split deliveries** by site or date where your operations support it.",
        ],
      },
      {
        heading: "Approval workflows and permissions",
        body: [
          "Larger customers often need purchase approvals: a site manager builds an order, a manager approves it over a threshold, and finance controls payment terms. Model organisations, sites, users and roles from day one, and let customer administrators manage their own users.",
          "Keep approvals fast: notifications with one-step approve or reject, delegation when approvers are away and visibility of where an order is waiting. See [[/blogs/b2b-approval-workflows|B2B approval workflows]] and [[/blogs/b2b-ecommerce-account-management|account, user and role management]].",
        ],
      },
      {
        heading: "ERP and inventory integration",
        body: [
          "The portal is only as reliable as its integration. Typical flows are products, customer price lists, stock levels, customers and contacts, orders, order status, invoices, statements and credit limits.",
        ],
        table: {
          headers: ["Data", "Usual source of truth", "Sync pattern to consider"],
          rows: [
            ["Products and pack sizes", "ERP or PIM", "Scheduled sync plus change events"],
            ["Customer prices", "ERP", "Price list sync, or real-time price lookup for complex rules"],
            ["Stock", "ERP or WMS", "Frequent sync; real-time check at checkout for scarce items"],
            ["Orders", "Portal creates, ERP owns", "Push immediately with retries and confirmation"],
            ["Invoices and statements", "ERP or accounting system", "Fetch on demand or sync after posting"],
            ["Credit limits and terms", "ERP", "Check at checkout"],
          ],
        },
        callout: {
          type: "note",
          text: "Do not promise portal features until the ERP's integration capability is confirmed. Check which version you run, which APIs or connectors it supports, rate limits and costs, and whether your ERP partner must be involved. Older systems may only support file exchange or need middleware. Our [[/blogs/b2b-ecommerce-erp-integration|B2B ERP integration guide]] and [[/blogs/api-integration-australia|API integration for Australian businesses]] cover patterns and failure handling.",
        },
      },
      {
        heading: "Customer-specific terms, credit and payment",
        body: [
          "Trade customers often buy on account with payment terms and credit limits, while new or small customers may pay by card. Support both: show terms and available credit, block or flag orders over the limit, and offer card payment where appropriate. Card surcharges on eftpos, Visa and Mastercard were removed from 1 October 2026 under the RBA's decision, so build card costs into prices or terms.",
          "**Unfair contract terms.** If trade terms are standard form and some customers are small businesses, the unfair contract terms regime applies, and since 9 November 2023 unfair terms can attract penalties. Review terms such as unilateral variation, broad indemnities and automatic renewals with a lawyer before customers accept them through the portal.",
        ],
      },
      {
        heading: "Order tracking and freight across Australia",
        body: [
          "Distance shapes B2B commerce in Australia. Show realistic delivery estimates by location, including regional and remote areas, and make freight costs clear before checkout. Integrate with your carriers for labels and tracking where you have accounts: Australia Post's shipping and tracking APIs, for example, are available to businesses with eParcel or StarTrack contracts. Offer pick-up from your warehouse where customers prefer it.",
          "After the order, show status from the ERP or warehouse system, tracking links per consignment, and proof of delivery where available. See [[/blogs/ecommerce-order-tracking|order tracking]] for patterns.",
        ],
      },
      {
        heading: "Reporting for customers and for you",
        body: [
          "Give customers simple reports: spend by site and period, frequently ordered items and outstanding invoices. For your team, track portal adoption by account, share of orders through the portal, order errors, average order processing time and reorder frequency. Our guide to [[/blogs/business-intelligence-dashboards-australia|business intelligence dashboards]] covers definitions and permissions.",
        ],
      },
      {
        heading: "Platform choice",
        body: [],
        table: {
          headers: ["Option", "Fits when", "Watch for"],
          rows: [
            ["**Ecommerce platform with B2B features** (for example Shopify's B2B capabilities on eligible plans)", "Catalogue, account pricing, terms and reorders are the main needs", "Plan requirements; ERP connector quality; limits on complex pricing"],
            ["**Dedicated B2B commerce platform**", "Complex catalogues, quoting, procurement integration", "Cost and implementation effort"],
            ["**Custom portal or layer**", "Unusual ordering rules, configuration, or heavy ERP logic", "Ongoing maintenance and security ownership"],
          ],
        },
      },
      {
        heading: "MVP scope",
        body: [],
        table: {
          headers: ["Release", "Scope"],
          rows: [
            ["**MVP**", "Sign-in for invited accounts, customer-specific catalogue and prices, quick order and reorder, order submission to ERP, order history and status, invoices and statements"],
            ["**Next**", "Multiple users and roles, approvals, credit limits at checkout, saved lists, carrier tracking"],
            ["**Later**", "CSV upload, quotes, punchout to procurement systems, customer reporting, Peppol-related improvements in partnership with your accounting platform"],
          ],
        },
      },
      {
        heading: "Hypothetical example: a food service distributor",
        body: [
          "**This example is hypothetical.** A Queensland food service distributor takes most orders from cafés and restaurants by phone and text late at night, then re-keys them into its ERP each morning. Prices vary by customer group, and some customers have contract prices.",
          "Technical discovery confirms the ERP exposes APIs for products, stock, customer price lists and orders, but not real-time price calculation. The portal therefore syncs price lists nightly and checks stock at checkout. The MVP offers reorder from history and order pads, enforces case quantities and delivery cut-off times, and pushes orders straight to the ERP. Prices are shown excluding GST with GST totals at checkout, and tax invoices are generated by the ERP. Regional customers see delivery days for their area.",
        ],
      },
      {
        heading: "Common mistakes",
        body: [],
        checklist: [
          "Designing the portal before confirming what the ERP can actually expose.",
          "Recreating pricing logic in the portal so it drifts from the ERP.",
          "Ambiguous GST display, so totals do not match invoices.",
          "Single-user accounts for customers with teams and approvals.",
          "Treating the portal as a B2C store with a login.",
          "Launching without onboarding customers and reps, so phone orders continue.",
        ],
      },
      {
        heading: "B2B ecommerce site, logged-in portal or hybrid store?",
        body: [
          "'B2B ecommerce' covers several different builds. Decide which you need before choosing a platform, because the requirements, SEO approach and integrations differ.",
        ],
        checklist: [
          "Public catalogue pages can earn search traffic; logged-in prices and catalogues cannot, so decide what to show publicly.",
          "Hybrid stores need careful GST display: consumer prices including GST, trade prices often excluding it, never mixed on the same page without labels.",
          "Account applications need approval workflows, credit checks and ABN validation.",
          "Platform choice depends on the model: see [[/blogs/b2b-ecommerce-website-development|B2B ecommerce website development]] and [[/blogs/shopify-development-australia|Shopify development in Australia]].",
          "Whichever model you choose, the ERP integration, pricing rules and tax invoice requirements in this guide still apply.",
        ],
        table: {
          headers: ["Model", "What it is", "Fits when"],
          rows: [
            ["**Public B2B catalogue site**", "Products and specifications visible to all, with quote requests or account applications", "New customer acquisition matters; search visibility for product and category pages helps"],
            ["**Logged-in ordering portal**", "Account-specific catalogue, prices and terms for approved trade customers", "Most revenue comes from existing accounts that reorder"],
            ["**Hybrid B2B and B2C store**", "One storefront with retail prices for consumers and trade prices after sign-in", "You sell to both, and catalogue and fulfilment are shared"],
          ],
        },
      },
      {
        heading: "Sources",
        body: [
          "**Tax and invoicing:** ATO, tax invoices; ATO, Peppol.",
          "**Consumer law and payments:** ACCC, businesses urged to remove unfair contract terms; RBA, surcharging conclusions.",
          "**Freight:** Australia Post developer centre.",
          "ATO and ACCC points are summarised from official guidance and may change; check the current position before relying on them. The pricing exercise, release plan and example are ours. Nothing here is tax or legal advice or ZSpace client data.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "A B2B portal in Australia succeeds when trade customers can order faster than by phone, at prices and on invoices that match your books exactly. Get pricing and GST right, confirm what your ERP can expose, design for teams and approvals, make freight realistic for regional customers and review your trade terms. Then onboard customers deliberately, because adoption is the measure that matters. For getting new trade customers set up, see [[/blogs/b2b-customer-onboarding-automation|B2B customer onboarding automation]].",
        ],
        cta: {
          title: "Moving trade orders online?",
          description: "ZSpace Labs is an India-based, remote-first technology studio working with Australian and international businesses on [[/services/shopify-development|Shopify and B2B commerce]], [[/services/website-development|custom portals and ERP integrations]] and [[/services/ui-ux-design|ordering UX]]. If it would help to test your pricing and integration assumptions, we are happy to talk it through.",
        },
      },
    ],
  },
];
