import type { BlogPost } from "./blog-data";

/**
 * Listicle batch 3 (2026-10-28): seven topics out of candidates 41–60 with no
 * existing article on the same primary intent. Candidate 59 (journey analytics
 * questions) was merged into 51 (research questions before a redesign) as one
 * article. CMS features (42), deep-link use cases (45) and dashboard chart
 * mistakes (52, saas-dashboard-design) became updates; the rest were covered. No external links (owner rule).
 * Sources checked 2026-10-28:
 * - Android Developers: request runtime permissions (in context, rationale UI
 *   with a "no thanks" option, two denials = permanent, graceful degradation,
 *   do not push users to settings); one-time permissions on Android 11+;
 *   POST_NOTIFICATIONS runtime permission on Android 13+; photo picker grants
 *   access to selected items without broad media permissions.
 * - Apple App Review Guidelines 5.1.1(ii)-(iv) (consent, purpose strings, data
 *   minimisation, pickers, alternatives such as manual address) and 5.1.2(i)
 *   (App Tracking Transparency); apps may not require enabling notifications,
 *   location or tracking to access functionality.
 * - Shopify changelog, 15 Oct 2025: variant limit raised from 100 to 2,048 for
 *   all merchants; apps not on in-support GraphQL product APIs may break above
 *   100 variants. Shopify Help: Combined Listings app is Plus-only.
 * - Google Analytics Help: enhanced measurement form_start and form_submit,
 *   parameters, custom dimensions needed, no PII. GA4 recommended lead events:
 *   generate_lead, qualify_lead, working_lead, close_convert_lead,
 *   close_unconvert_lead, disqualify_lead.
 * - Stripe decline codes: present fraudulent, lost, stolen and block-list
 *   declines as generic declines; customer next steps for insufficient funds,
 *   incorrect CVC, expired card, authentication_required.
 * - GOV.UK Design System, error message component.
 * - PostgreSQL documentation, numeric types (use numeric for money; floats are
 *   inexact). PostgreSQL wiki, Don't Do This (timestamp without time zone).
 */
export const listiclePosts4: BlogPost[] = [
  // ---------------------------------------- WEBSITE PERSONALISATION IDEAS
  {
    slug: "website-personalisation-ideas",
    title: "15 Website Personalisation Ideas for Different Visitor Types",
    seoTitle: "15 Website Personalisation Ideas for Different Visitor Types",
    excerpt:
      "Fifteen practical personalisation ideas for service, B2B and SaaS websites, by visitor type, with the data each needs, privacy limits and how to test them.",
    category: "Web Development",
    banner: "segmentsplit",
    sceneKind: "landing",
    bannerAlt: "One website showing different headlines and calls to action to new visitors, returning visitors, existing customers and campaign traffic",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development", "cro-audit"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "professional-services"],
    relatedSlugs: ["landing-page-development", "website-lead-generation", "measure-multi-channel-website-conversions"],
    faqs: [
      {
        q: "What is the difference between personalisation and dynamic content?",
        a: "Dynamic content changes according to rules that apply to everyone in the same situation, such as showing local currency or opening hours. Personalisation adapts content to what you know about a particular visitor or segment, such as their industry, stage or past behaviour. Both can be useful; personalisation needs more data and more care with privacy.",
      },
      {
        q: "Does website personalisation hurt SEO?",
        a: "Not if the default version of each page is complete and is what search engines and first-time visitors see. Showing search engines content that users cannot see is cloaking, which breaches Google's spam policies. Personalise around a solid default rather than replacing it.",
      },
      {
        q: "Do I need a personalisation platform?",
        a: "Not to start. Several ideas here need only campaign parameters, a cookie or two and your CMS. Dedicated tools help when you have many segments, enough traffic to test them and someone to maintain the variations.",
      },
    ],
    content: [
      {
        heading: "Which personalisation ideas work on a business website?",
        body: [
          "**The most practical ideas match the page to how a visitor arrived (campaign message match), whether they have been before (new versus returning), who they are (industry or role, ideally self-selected), where they are (currency, language, contact options) and whether they are already a customer (support and account links instead of sales pitches).** Start with ideas that use data you already have with consent, keep a complete default version of every page, and test whether each variation helps before adding more.",
          "Most personalisation guides are written for online stores; ours are in the [[/blogs/ecommerce-personalization|ecommerce personalisation guide]]. This one is for service businesses, B2B companies and SaaS websites, where the goal is a better enquiry or sign-up, not a bigger basket. The ideas are hypotheses to test, not guaranteed improvements.",
        ],
      },
      {
        heading: "Personalisation versus dynamic content",
        body: [
          "It helps to separate the two. **Dynamic content** follows simple rules that apply to anyone in the same situation: showing prices in the visitor's currency, hiding a live-chat button outside office hours, or listing the nearest service area. **Personalisation** uses what you know about a particular visitor or segment, such as their industry, campaign, stage or history. Dynamic content is cheap and low-risk; personalisation can be more effective but needs data, consent, content for each variation and someone to maintain it.",
        ],
      },
      {
        heading: "By how the visitor arrived",
        body: [
          "**1. Campaign message match.** Use campaign parameters to swap the headline and proof on a landing page so it repeats the promise of the ad or email that brought the visitor. This is often the highest-value, lowest-risk idea. See [[/blogs/landing-page-development|landing page development]].",
          "**2. Partner or referral source.** Visitors from a partner's site or a marketplace listing can see a short note acknowledging the partner and any agreed offer.",
          "**3. Content-led visitors.** Someone arriving on a blog article from search is usually researching. Offer a related guide or checklist rather than a \"Book a demo\" button in their face.",
        ],
      },
      {
        heading: "By what you know about the visitor",
        body: [
          "**4. New versus returning.** First-time visitors need to understand what you do; returning visitors may be comparing options. Show returning visitors pricing, proof or a \"pick up where you left off\" link to content they viewed.",
          "**5. Self-selected industry or role.** A simple \"I'm a...\" selector on the home or solutions page lets visitors choose their industry or role and see relevant examples and services. Self-selection is more accurate and less intrusive than guessing.",
          "**6. Recently viewed services.** If a visitor read three pages about one service, surface that service's next step on the home page and in the navigation for the rest of their session.",
          "**7. Pricing-page visitors.** Someone who has viewed pricing is further along. Test showing a short FAQ about contracts or onboarding, or an option to talk to someone, on their next pages.",
          "**8. Existing customers.** Signed-in or recognised customers should see support, documentation and account links first, not the sales pitch for the product they already use.",
        ],
      },
      {
        heading: "By context",
        body: [
          "**9. Country and currency.** Show prices, payment methods, phone numbers and compliance notes relevant to the visitor's country, with a visible way to change it. Do not redirect people automatically to another country version without letting them choose.",
          "**10. Language.** Offer translated pages when you have them, using the visitor's browser preference as a suggestion, not a forced redirect.",
          "**11. Device.** On phones, prioritise call, WhatsApp or short-form options; on desktop, longer comparisons and downloadable resources may work better.",
          "**12. Time and availability.** Show live chat or \"call now\" only when someone is available, and set expectations (\"We reply within one working day\") otherwise.",
        ],
      },
      {
        heading: "By stage in the relationship",
        body: [
          "**13. Lead-magnet subscribers.** Visitors who downloaded a guide can see the next logical resource or an invitation to a call, rather than the same download offer again.",
          "**14. Open opportunities.** If your CRM knows a visitor is in an active sales conversation (for example through a link in a sales email), show relevant case material and a direct link to their contact person.",
          "**15. Lapsed customers.** For SaaS and subscription products, returning former customers can see what has changed since they left. Only do this when they are signed in or have arrived through your own email.",
        ],
        cta: {
          title: "Want to personalise without a heavy platform?",
          description: "ZSpace Labs builds websites in Next.js with campaign-aware landing pages and content variations managed in the CMS. See our [[/services/website-development|website development service]] and [[/services/cro-audit|conversion audits]].",
        },
      },
      {
        heading: "Effort, data and risk at a glance",
        body: [],
        table: {
          headers: ["Idea", "Data needed", "Effort", "Privacy risk"],
          rows: [
            ["1. Campaign message match", "Campaign parameters", "Low", "Low"],
            ["2. Partner or referral", "Referrer or link parameter", "Low", "Low"],
            ["3. Content-led visitors", "Landing page", "Low", "Low"],
            ["4. New vs returning", "First-party cookie", "Low", "Low (with consent where required)"],
            ["5. Self-selected industry", "Visitor's choice", "Medium (content per segment)", "Low"],
            ["6. Recently viewed services", "Session data", "Medium", "Low"],
            ["7. Pricing-page visitors", "Session data", "Low", "Low"],
            ["8. Existing customers", "Login", "Medium", "Medium"],
            ["9. Country and currency", "Approximate location or choice", "Medium", "Low"],
            ["10. Language", "Browser preference", "High (translations)", "Low"],
            ["11. Device", "Device type", "Low", "Low"],
            ["12. Time and availability", "Clock and staff status", "Low", "None"],
            ["13. Lead-magnet subscribers", "Email click or cookie", "Medium", "Medium"],
            ["14. Open opportunities", "CRM via tracked link", "High", "Medium to high"],
            ["15. Lapsed customers", "Login or own email", "Medium", "Medium"],
          ],
        },
      },
      {
        heading: "Privacy, SEO and maintenance limits",
        body: [],
        checklist: [
          "**Consent:** cookies and tracking used for personalisation may need consent in your markets. Under India's DPDP Act, the GDPR and similar laws, be clear about what you use and why. See [[/blogs/ai-data-privacy|data privacy considerations]].",
          "**Avoid creepy inferences:** identifying a visitor's company from their IP address and naming it on the page often feels intrusive. Self-selection and campaign context are safer.",
          "**Keep a complete default:** every page must work for an unknown visitor; that default is what search engines see. Showing search engines different content from users is cloaking.",
          "**Limit the number of variations:** each one needs writing, design, testing and updates. Three well-maintained segments beat twenty stale ones.",
          "**Test, do not assume:** compare each variation against the default on qualified enquiries, not clicks. See [[/blogs/website-ab-testing-ideas|website A/B testing ideas]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Personalisation on a business website works best when it is modest and grounded: match the campaign, respect the visitor's own choices, recognise customers, and adapt to country and device. Start with message match and returning-visitor content, measure qualified leads, and expand only where a variation earns its upkeep. To track the results properly, see [[/blogs/measure-multi-channel-website-conversions|measuring conversions across channels]].",
        ],
      },
    ],
  },

  // --------------------------------------------- DATABASE DESIGN MISTAKES
  {
    slug: "database-design-mistakes",
    title: "10 Database Design Mistakes That Cause Problems as an Application Grows",
    seoTitle: "10 Database Design Mistakes That Hurt Growing Applications",
    excerpt:
      "Ten database design mistakes, from floats for money to missing constraints and unsafe schema changes, why they hurt as an app grows and how to avoid them.",
    category: "Web Development",
    banner: "datalifecycle",
    sceneKind: "code",
    bannerAlt: "A database schema with common design mistakes highlighted: money stored as floats, missing foreign keys, timestamps without time zones and missing indexes",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["saas-technology", "fintech", "b2b-enterprise"],
    relatedSlugs: ["database-performance-optimization", "multi-tenant-saas-architecture", "web-application-architecture-patterns"],
    faqs: [
      {
        q: "What is the most common database design mistake?",
        a: "Skipping constraints: no foreign keys, no unique constraints and no NOT NULL rules, leaving data integrity to application code. It works until a bug, an import or a second application writes bad data that the database happily accepts.",
      },
      {
        q: "Can database design mistakes be fixed later?",
        a: "Most can, but the cost grows with the amount of data and the number of systems that depend on it. Changing a money column type or adding a tenant column to a large live database needs careful, staged migrations and testing.",
      },
      {
        q: "Should I use a relational or NoSQL database?",
        a: "For most business applications with related records such as customers, orders and invoices, a relational database like PostgreSQL is the safer default. Document and key-value stores suit specific needs such as flexible content, caching or very high write volumes.",
      },
    ],
    content: [
      {
        heading: "Which database design mistakes cause the most trouble?",
        body: [
          "**The mistakes that hurt most as an application grows are storing money as floating-point numbers, leaving integrity to application code instead of constraints, using keys that change, storing times without time zones, indexing poorly, hiding structured data in JSON blobs, letting duplicated data drift, deleting records with no history, retrofitting multi-tenancy, and changing the schema in ways that break running code.** Each is cheap to avoid at the start and expensive to fix once there is real data and several systems depend on it.",
          "This list is for technical founders, product owners reviewing a build, and developers early in a project. Examples use PostgreSQL, but the principles apply to most relational databases. For speeding up an existing database, see [[/blogs/database-performance-optimization|database performance optimisation]].",
        ],
      },
      {
        heading: "1. Storing money as floating-point numbers",
        body: [
          "Floating-point types store approximations. PostgreSQL's documentation says that some values cannot be stored exactly, that comparisons for equality may not work as expected, and that for exact amounts such as money you should use the numeric type. Small rounding errors add up across invoices, tax and refunds, and reconciliation stops matching.",
          "**Instead:** use a fixed-precision decimal type, or store amounts as whole minor units (paise, cents) in an integer column, and always store the currency alongside the amount.",
        ],
      },
      {
        heading: "2. Leaving integrity to the application",
        body: [
          "Without foreign keys, unique constraints, NOT NULL and check constraints, the database accepts anything. Orders end up pointing to deleted customers and the same email appears twice. It works while one careful application writes to the database; it fails once imports, scripts, background jobs or a second service write too.",
          "**Instead:** declare relationships and rules in the schema. Constraints are documentation that cannot go out of date.",
        ],
      },
      {
        heading: "3. Using keys that can change",
        body: [
          "Using an email address, phone number or product code as the primary key seems natural until someone changes their email or a supplier renames a SKU, and every related record must be updated.",
          "**Instead:** use a surrogate key (an auto-generated identity or a UUID) as the primary key, and put a unique constraint on the natural identifier.",
        ],
      },
      {
        heading: "4. Storing times without time zones",
        body: [
          "Timestamps saved without time zone information are ambiguous once you have users, servers or offices in more than one zone, or when daylight saving changes. The PostgreSQL community's \"Don't Do This\" guidance advises against timestamp without time zone for recording moments in time.",
          "**Instead:** store moments as timestamps with time zone (in practice, UTC), and convert to local time for display. Store the user's time zone separately when you need it for scheduling.",
        ],
      },
      {
        heading: "5. Indexing too little, or too much",
        body: [
          "Missing indexes on columns used in joins and filters make queries slow as tables grow; foreign key columns are a common gap. Indexing every column slows writes and wastes storage.",
          "**Instead:** index for the queries you actually run, check them with the query planner, and review regularly. See [[/blogs/database-performance-optimization|how to find and fix slow queries]].",
        ],
      },
      {
        heading: "6. Hiding structured data in JSON blobs",
        body: [
          "JSON columns are useful for genuinely variable data, such as an integration's raw payload or optional settings. Problems start when core fields like status, amount or customer reference live inside JSON: constraints cannot protect them, reporting gets harder and different code paths write different shapes.",
          "**Instead:** give important, queried fields their own typed columns, and keep JSON for the truly flexible remainder.",
        ],
      },
      {
        heading: "7. Duplicating data without a plan",
        body: [
          "Copying a customer's name and address onto every order, or caching totals in several tables, can be sensible for performance or history. Without a clear rule about which copy is the source of truth, copies drift and reports disagree.",
          "**Instead:** normalise by default, and when you duplicate deliberately, document why and whether the copy is a snapshot (an order's address at the time of purchase) or must stay in sync.",
        ],
      },
      {
        heading: "8. Deleting records with no history",
        body: [
          "Hard deletes and in-place updates lose the information you later need for support, audits and disputes: who changed this price, when was this account closed? Adding a \"deleted\" flag everywhere creates other problems, such as unique constraints that block re-creating a record.",
          "**Instead:** decide per table: keep an audit log of changes for important records, use soft deletes where you need to restore, and plan data retention and deletion to meet privacy obligations. See [[/blogs/saas-audit-logging|audit logging]].",
        ],
      },
      {
        heading: "9. Retrofitting multi-tenancy",
        body: [
          "A product built for one customer and later sold to many needs every relevant table to know which tenant owns each row, and every query to respect it. Adding that later is one of the most expensive changes, and a missed filter leaks one customer's data to another.",
          "**Instead:** if there is a realistic chance of serving several organisations, include a tenant identifier from the start and enforce isolation centrally, for example with row-level security. See [[/blogs/multi-tenant-saas-architecture|multi-tenant SaaS architecture]].",
        ],
      },
      {
        heading: "10. Changing the schema in ways that break running code",
        body: [
          "Renaming or dropping a column in the same release that changes the code causes errors during deployment, when old and new versions run side by side, and makes rollback hard. Large migrations can also lock busy tables.",
          "**Instead:** use migrations in version control and the expand-and-contract approach: add the new structure, deploy code that writes to both, backfill, switch reads, then remove the old structure in a later release. Test migrations on a copy of production-sized data.",
        ],
        cta: {
          title: "Planning a new application's data model?",
          description: "ZSpace Labs designs and builds web applications, including data models, migrations and reporting. See our [[/services/website-development|web application development service]].",
        },
      },
      {
        heading: "Summary table",
        body: [],
        table: {
          headers: ["Mistake", "Symptom as you grow", "Safer default"],
          rows: [
            ["Floats for money", "Totals that do not reconcile", "Decimal or integer minor units, plus currency"],
            ["No constraints", "Orphaned and duplicate records", "Foreign keys, unique, NOT NULL, checks"],
            ["Changeable keys", "Cascading updates, broken links", "Surrogate key plus unique natural key"],
            ["Times without zones", "Wrong times across regions", "Timestamps with time zone, stored as UTC"],
            ["Poor indexing", "Slow queries or slow writes", "Index for real queries; review"],
            ["Core data in JSON", "Hard reporting, inconsistent shapes", "Typed columns for queried fields"],
            ["Unplanned duplication", "Reports that disagree", "Normalise; document deliberate copies"],
            ["No history", "No answer to who changed what", "Audit log; deliberate delete policy"],
            ["Late multi-tenancy", "Costly rework, data-leak risk", "Tenant ID and central isolation"],
            ["Breaking migrations", "Deployment errors, hard rollback", "Expand and contract; test on real-sized data"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A sound data model is one of the cheapest investments in an application's future. Use exact types for money, let the database enforce integrity, keep keys stable and times unambiguous, index deliberately, plan for history and tenants, and change the schema in backward-compatible steps. For how the database fits into the wider system, see [[/blogs/web-application-architecture-patterns|web application architecture patterns]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "PostgreSQL documentation, numeric types (arbitrary precision numbers and floating-point types). PostgreSQL wiki, Don't Do This. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ----------------------------------------------- MOBILE APP PERMISSIONS
  {
    slug: "mobile-app-permissions",
    title: "15 Mobile App Permissions and When an App Should Request Them",
    seoTitle: "15 Mobile App Permissions and When to Request Them",
    excerpt:
      "When to ask for notifications, location, camera, photos, contacts, tracking and other iOS and Android permissions, and how to handle a user saying no.",
    category: "Mobile Apps",
    banner: "permissionflow",
    sceneKind: "mobile",
    bannerAlt: "A phone showing a short explanation before a system permission prompt, with the app still usable after the user declines",
    date: "2026-10-28",
    readingTime: "11 min read",
    relatedServiceSlugs: ["mobile-app-development", "ui-ux-design"],
    relatedIndustrySlugs: ["startups", "healthcare-healthtech", "fintech"],
    relatedSlugs: ["mobile-app-push-notifications", "mobile-app-data-privacy", "what-a-good-mobile-app-onboarding-actually-does"],
    faqs: [
      {
        q: "When should an app ask for permissions?",
        a: "When the user starts to use the feature that needs it. Android's documentation says to ask in context, and Apple's guidelines say to request only data relevant to the app's core functionality. Asking for everything on first launch invites refusals that are hard to reverse.",
      },
      {
        q: "What happens if a user denies a permission on Android?",
        a: "Android's documentation says that if the user denies a permission more than once, the system treats it as permanent and stops showing the dialog. The app should keep working without the feature and explain what is unavailable, without nagging.",
      },
      {
        q: "Can an app require a permission to be used?",
        a: "Only where the permission is genuinely essential, such as camera access for a document scanner. Apple's guidelines say apps may not require users to enable notifications, location or tracking to access functionality, and should offer alternatives where possible, such as typing an address instead of sharing location.",
      },
    ],
    content: [
      {
        heading: "When should an app request each permission?",
        body: [
          "**Request a permission at the moment the user starts a feature that needs it, explain why in your own words first, ask for the least access that works (approximate rather than precise location, a photo picker rather than the whole library), and keep the app usable if the answer is no.** Some permissions need extra care: background location, tracking, health data and SMS or call logs are tightly controlled by Apple and Google.",
          "This list is for founders, designers and developers planning an app. Platform rules were checked against Android Developers and Apple's App Review Guidelines on 28 October 2026. Exact behaviour varies by OS version, so test on the versions your users run.",
        ],
      },
      {
        heading: "Principles that apply to every permission",
        body: [],
        checklist: [
          "**Ask in context.** Android says to ask \"when the user starts to interact with the feature that requires it\".",
          "**Explain first, briefly.** The system dialog does not say why. Show a short explanation with a \"Not now\" option before the prompt.",
          "**Write clear purpose strings.** On iOS, Apple requires purpose strings that \"clearly and completely describe\" how the data is used.",
          "**Ask for the minimum.** Apple's data minimisation guideline says to use pickers or share sheets instead of full access where possible.",
          "**Respect a no.** On Android, two denials are permanent. Android advises against nagging or pushing users to settings to change their mind.",
          "**Offer alternatives.** Apple's example: if a user declines location, let them enter an address manually.",
        ],
      },
      {
        heading: "Communication permissions",
        body: [
          "**1. Notifications.** On Android 13 and later, and on iOS, apps must ask before sending notifications. Ask after the user has done something that makes notifications useful, such as placing an order they will want updates on. Apple's guidelines say apps may not require notifications to be enabled to use the app. See [[/blogs/mobile-app-push-notifications|push notifications in mobile apps]].",
          "**2. Contacts.** Ask only for a feature that clearly needs them, such as inviting friends, and consider a contact picker or share sheet instead of full access. Never upload a user's whole address book without a clear, specific reason they agreed to.",
          "**3. SMS and call logs (Android).** Google Play restricts these permissions to apps whose core function needs them, such as default SMS or dialler apps, and requires a declaration. Most apps should use one-time-code autofill or other APIs instead.",
        ],
      },
      {
        heading: "Location permissions",
        body: [
          "**4. Approximate location.** Enough for local weather, nearby stores or regional content. Both platforms let users share approximate rather than precise location; design features to work with it.",
          "**5. Precise location.** Needed for navigation, deliveries or finding a specific place. Ask when the user starts that task, and explain why approximate is not enough.",
          "**6. Background location.** Location while the app is not in use, for example for a delivery driver's trip or geofenced reminders. It is requested separately from foreground access, attracts extra review on Google Play and should be avoided unless the core feature needs it. On Android 11 and later, users also see an \"Only this time\" option for foreground location, camera and microphone.",
        ],
      },
      {
        heading: "Camera, microphone and media",
        body: [
          "**7. Camera.** Ask when the user taps \"Scan\" or \"Take photo\". If camera access is denied, offer an upload or manual entry where possible.",
          "**8. Microphone.** Ask when the user starts a voice note, call or voice search. Apple's guidelines give the example that an app for posting photos must not require microphone access to do so.",
          "**9. Photos and media.** Prefer the system photo picker, which on Android grants access only to the items the user selects, and on iOS avoids full library access. Request full library access only for apps such as gallery or backup tools.",
          "**10. Files and documents.** Use the system document picker to open specific files rather than requesting broad storage access.",
        ],
      },
      {
        heading: "Devices, health and identity",
        body: [
          "**11. Bluetooth and nearby devices.** Needed to connect to wearables, printers or hardware. Ask when the user starts pairing, and explain which device and why.",
          "**12. Health and fitness data.** Access through Apple HealthKit and Android Health Connect is granted per data type and comes with strict rules on how the data may be used. Ask only for the types the feature uses. See [[/blogs/mobile-app-data-privacy|mobile app data privacy]].",
          "**13. Biometrics (Face ID and fingerprint).** Used to unlock the app or approve actions. iOS needs a purpose string for Face ID. Always offer a passcode or password fallback.",
          "**14. Local network (iOS).** Apps that find devices on the local network, such as smart-home or casting apps, trigger a local network prompt. Ask when the user starts device discovery.",
        ],
      },
      {
        heading: "Tracking",
        body: [
          "**15. App Tracking Transparency (iOS).** Apple requires explicit permission through the App Tracking Transparency framework before tracking users across other companies' apps and websites, for example for targeted advertising. Apps may not require tracking permission to use the app or offer rewards for granting it. If you do not track, do not show the prompt.",
        ],
        cta: {
          title: "Planning permissions for a new app?",
          description: "ZSpace Labs designs and builds iOS and Android apps with permission flows, privacy disclosures and fallbacks planned from the start. See our [[/services/mobile-app-development|mobile app development service]].",
        },
      },
      {
        heading: "Permission timing table",
        body: [],
        table: {
          headers: ["Permission", "Ask when", "If declined"],
          rows: [
            ["Notifications", "After an action that makes updates useful", "Show updates in-app; email if agreed"],
            ["Contacts", "User chooses to invite or find people", "Share link or manual entry"],
            ["SMS / call logs", "Only for core SMS or dialler apps", "One-time-code autofill"],
            ["Approximate location", "User opens a location-based feature", "Manual city or postcode"],
            ["Precise location", "User starts navigation or delivery tracking", "Approximate location or address"],
            ["Background location", "Only for features that need it while closed", "Foreground-only mode"],
            ["Camera", "User taps scan or take photo", "Upload or manual entry"],
            ["Microphone", "User starts voice feature", "Text input"],
            ["Photos", "Use the picker instead", "Picker needs no broad permission"],
            ["Files", "Use the document picker", "Not applicable"],
            ["Bluetooth", "User starts pairing", "Explain feature unavailable"],
            ["Health data", "User enables a health feature", "Manual logging"],
            ["Biometrics", "User turns on biometric unlock", "Passcode or password"],
            ["Local network (iOS)", "User starts device discovery", "Manual device setup"],
            ["Tracking (iOS)", "Only if you track across apps", "Non-personalised experience"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Good permission design is mostly about timing and restraint: ask when the user can see why, ask for the least you need, and make sure the app still works if they say no. Both stores enforce these principles, and users reward them. Permission prompts are part of the first-run experience, so plan them with [[/blogs/what-a-good-mobile-app-onboarding-actually-does|your onboarding]] and with the [[/blogs/mobile-app-mvp-features|features your first release needs]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Android Developers: request runtime permissions; one-time permissions; notification runtime permission (Android 13); photo picker. Apple App Review Guidelines 5.1.1 (data collection and storage) and 5.1.2 (data use and sharing). Google Play policy on SMS and call log permissions and background location. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // -------------------------------------------- PRODUCT VARIANT MANAGEMENT
  {
    slug: "product-variant-management",
    title: "15 Product Variant Management Best Practices for Large Ecommerce Catalogues",
    seoTitle: "15 Product Variant Management Best Practices for Ecommerce",
    excerpt:
      "How to structure options, SKUs, images, inventory and SEO for products with many variants, including Shopify's 2,048-variant limit and when to split products.",
    category: "Shopify & Ecommerce",
    banner: "productdatamap",
    sceneKind: "shopify",
    bannerAlt: "A product with size and colour options expanding into variants, each with its own SKU, barcode, image, price and stock level",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["shopify-development"],
    relatedIndustrySlugs: ["fashion-apparel", "ecommerce", "retail"],
    relatedSlugs: ["ecommerce-product-data-architecture", "shopify-product-seo", "product-structured-data-ecommerce"],
    faqs: [
      {
        q: "How many variants can a Shopify product have?",
        a: "Shopify raised the limit from 100 to 2,048 variants per product for all merchants in October 2025. Shopify warned that apps not using its current GraphQL product APIs may not work properly with products above 100 variants, so check your apps and integrations before using the higher limit.",
      },
      {
        q: "Should each colour be a separate product or a variant?",
        a: "It depends on how people search and shop. If shoppers search for specific colours and each colour has distinct photos and content, separate products (grouped with combined listings or swatches) can help discovery and SEO. If colour is a minor choice, variants on one product are simpler.",
      },
      {
        q: "What is the difference between a variant and a custom option?",
        a: "A variant is a stocked version of a product with its own SKU, price and inventory. A custom option, such as engraving text, does not change stock and is better captured as a line-item property or through a personalisation app, not as a variant.",
      },
    ],
    content: [
      {
        heading: "How should you manage product variants in a large catalogue?",
        body: [
          "**Plan options and naming before you import, give every variant its own SKU, barcode, image and stock record, keep custom choices out of variants, decide deliberately when a colour or style deserves its own product, and check that your apps, feeds and integrations can handle the variant counts you plan.** On Shopify, the per-product limit rose to 2,048 variants in October 2025, which removes a long-standing workaround but makes data discipline more important.",
          "This list is for ecommerce managers and Shopify merchants with catalogues where products come in many sizes, colours, materials or pack sizes. It separates what Shopify supports natively from what needs apps or custom work. For the wider data model, see [[/blogs/ecommerce-product-data-architecture|ecommerce product data architecture]].",
        ],
      },
      {
        heading: "Structure",
        body: [
          "**1. Plan options before importing.** Decide which attributes are true variant options (they change stock or price, such as size or colour) and which are descriptive attributes (fabric, fit), which belong in metafields or product attributes. Shopify products support only a small number of options, three at the time of writing, so choose carefully.",
          "**2. Standardise option names and values.** \"Colour\" or \"Color\", \"XL\" or \"Extra large\": pick one and use it everywhere. Inconsistent values break filters, reports and feeds.",
          "**3. Order option values logically.** Sizes from smallest to largest, not alphabetically, so that swatches and dropdowns make sense.",
          "**4. Keep custom choices out of variants.** Engraving text, gift messages or made-to-measure inputs do not change stock. Capture them as line-item properties or through a personalisation app, so the variant count does not explode.",
          "**5. Use bundles, not variants, for kits.** A kit made of existing products should be a bundle that draws down component stock, not a variant with its own inventory. Shopify's free Bundles app handles fixed bundles and multipacks.",
        ],
      },
      {
        heading: "Identifiers and content",
        body: [
          "**6. Give every variant a unique SKU.** Use a consistent pattern (for example product code, colour code, size) so staff and systems can read it. Never reuse a SKU for a different item.",
          "**7. Add barcodes (GTINs) where they exist.** Marketplaces and shopping feeds often require them per variant.",
          "**8. Assign images to variants.** When a shopper picks a colour, the gallery should change to that colour. Missing variant images are a common cause of returns and lost sales.",
          "**9. Store variant-level specifications.** Dimensions, weights and materials that differ by variant belong at variant level (in Shopify, variant metafields), not in a description paragraph.",
        ],
      },
      {
        heading: "Pricing and inventory",
        body: [
          "**10. Price at variant level, deliberately.** If larger sizes cost more, set it per variant and make the price change visible when the shopper selects it.",
          "**11. Track inventory per variant and location.** Stock must be counted for each variant at each location. Sold-out variants should be clearly marked, and offer back-in-stock alerts where demand justifies them. See [[/blogs/shopify-multi-location-inventory-management|Shopify multi-location inventory]].",
          "**12. Retire variants without deleting history.** Deleting a discontinued variant can break links in order history and reports. Archive, set inventory to zero or hide it, depending on your platform and integrations.",
        ],
      },
      {
        heading: "Discovery and SEO",
        body: [
          "**13. Decide when to split into separate products.** Separate products for each colour or style can rank for colour-specific searches and show distinct content, but they spread reviews and need grouping. On Shopify Plus, the Combined Listings app can present separate products as one listing. Choose per category, based on how customers search.",
          "**14. Mark up variants correctly.** Use product structured data that reflects variants (for example ProductGroup with variants) so search engines understand prices and availability. See [[/blogs/product-structured-data-ecommerce|product structured data for ecommerce]] and [[/blogs/shopify-product-seo|Shopify product SEO]].",
        ],
      },
      {
        heading: "Operations",
        body: [
          "**15. Check apps, feeds and integrations before scaling up.** Shopify's changelog for the 2,048-variant limit warned that apps not using its current GraphQL product APIs may give a downgraded or broken experience above 100 variants. Test your ERP sync, marketplace feeds, review and search apps with a high-variant product before migrating your catalogue. For large catalogues, manage variant data in a PIM or a spreadsheet process with validation, not by hand in the admin. See [[/blogs/pim-vs-cms|PIM vs CMS]].",
        ],
        cta: {
          title: "Restructuring a large Shopify catalogue?",
          description: "ZSpace Labs builds and migrates Shopify stores, including product data models, variant structures and integrations. See our [[/services/shopify-development|Shopify development service]].",
        },
      },
      {
        heading: "Native, app or custom?",
        body: [],
        table: {
          headers: ["Need", "Shopify native", "Usually needs"],
          rows: [
            ["Up to 2,048 variants per product", "Yes (since October 2025)", "Compatible apps and integrations"],
            ["Variant images and metafields", "Yes", "Theme support to display them"],
            ["Per-location inventory", "Yes", "ERP or WMS sync for complex stock"],
            ["Fixed bundles and multipacks", "Shopify Bundles app (free)", "Third-party app for mix-and-match"],
            ["Separate products shown as one listing", "Combined Listings app (Plus only)", "Theme or app swatches on other plans"],
            ["Custom text or engraving", "Line-item properties via theme", "Personalisation app for complex options"],
            ["Bulk variant data management", "CSV import and bulk editor", "PIM for large catalogues"],
          ],
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Variant problems are data problems: inconsistent names, missing images, shared SKUs and stock that does not match. Plan options and naming first, keep custom choices and kits out of variants, decide per category when to split products, and test every integration before using higher variant limits. A clean variant structure makes filters, feeds, search and inventory work without constant fixes.",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Shopify developer changelog, the product variant limit is now 2,048 for all merchants (15 October 2025). Shopify Help Center, product variants and Combined Listings. Shopify App Store, Shopify Bundles. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ------------------------------------------- QUESTIONS BEFORE REDESIGN
  {
    slug: "questions-before-website-redesign",
    title: "15 Research and Analytics Questions to Answer Before Redesigning a Website",
    seoTitle: "15 Questions to Answer Before Redesigning a Website",
    excerpt:
      "Fifteen questions to answer before a website or product redesign: eight from your analytics and seven from users, and where to find each answer.",
    category: "UI/UX",
    banner: "uxauditflow",
    sceneKind: "analytics",
    bannerAlt: "A redesign brief built from two sets of evidence: analytics questions about journeys and drop-offs, and research questions answered by users",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "ecommerce"],
    relatedSlugs: ["website-redesign-vs-rebuild", "user-research-methods", "ux-audit"],
    faqs: [
      {
        q: "How much research do you need before a redesign?",
        a: "Enough to know what is broken, for whom and why. For many business websites, a few days of analytics review plus five to eight user interviews or usability sessions answer most of the questions here. Large products and high-risk changes justify more.",
      },
      {
        q: "Can analytics tell me why users leave?",
        a: "No. Analytics shows where and how often people leave, not why. Use it to decide where to look, then use interviews, usability tests or surveys to understand the reasons.",
      },
      {
        q: "What if we do not have reliable analytics?",
        a: "Fix tracking first if you can, and record a baseline before the redesign so you can measure the result. In the meantime, rely more on user research, support tickets and sales conversations.",
      },
    ],
    content: [
      {
        heading: "What should you find out before redesigning?",
        body: [
          "**Before a redesign, answer two sets of questions. From analytics: who visits, where they come from, which journeys lead to enquiries or sales, where people drop out, what they search for, which pages and devices underperform, and what your baseline is. From users: what they came to do, what nearly stopped them, what words they use, what they compare you with, and what they need to trust you.** The answers decide what the redesign should change, and give you a baseline to judge it.",
          "Redesigns often start from opinions (\"the site looks dated\") and end with a new look but the same problems. This list is for marketing leads, product owners and founders briefing a redesign. Treat the answers as evidence for a brief, not a design. For whether you need a redesign or a rebuild, see [[/blogs/website-redesign-vs-rebuild|website redesign vs rebuild]].",
        ],
      },
      {
        heading: "Questions your analytics can answer",
        body: [
          "**1. Who visits, and from where?** Split traffic by channel, country and device. A site that gets most enquiries from mobile search needs different priorities from one driven by desktop referrals.",
          "**2. Which pages do people land on?** Landing pages, not the home page, are often the real front door. Search Console and analytics landing-page reports show which pages carry the most weight.",
          "**3. Which journeys lead to an enquiry or sale?** Look at the paths of visitors who converted. Which pages did they see? How many visits did it take? Protect what works.",
          "**4. Where do people drop out?** Find the steps with the largest drop: a service page with many exits, a form with many starts and few submissions, a checkout step. These are candidates for fixing first.",
          "**5. What do people search for on the site?** Site search terms reveal missing content and confusing navigation in the visitor's own words.",
          "**6. Which pages and devices underperform?** Compare conversion and engagement by template and device. A page that converts well on desktop and poorly on mobile points to a mobile layout problem, not a content problem.",
          "**7. What queries bring people from search?** Search Console shows the queries you rank for and their click-through rates. Make sure the redesign keeps or improves the pages behind valuable queries; URL and content changes can lose rankings.",
          "**8. What is the baseline?** Record conversion rates, enquiry volume and quality, key page speed measures and top landing pages before you change anything, or you will not know whether the redesign helped. See [[/blogs/measure-multi-channel-website-conversions|measuring conversions across channels]].",
        ],
      },
      {
        heading: "Questions only users can answer",
        body: [
          "**9. What were they trying to do?** Ask recent visitors, customers or leads what brought them to the site and whether they managed it. Their tasks should shape the navigation.",
          "**10. What nearly stopped them?** Customers who converted anyway can tell you about doubts and friction: unclear pricing, missing information, a confusing form.",
          "**11. What words do they use?** Note how people describe their problem and your service. Navigation and headings in customers' language are easier to scan than internal jargon.",
          "**12. What did they compare you with?** Knowing the alternatives, including doing nothing or using a spreadsheet, tells you what the site must explain.",
          "**13. What did they need to trust you?** Ask what reassured them or what they looked for: examples, process, pricing, people, reviews.",
          "**14. Where do they get stuck when they try?** Watch five or so people attempt key tasks on the current site. Usability testing reveals problems analytics only hints at. See [[/blogs/usability-testing|usability testing]].",
          "**15. What do sales and support hear?** Staff who talk to customers know the recurring questions and misunderstandings. Review support tickets and sales call notes for patterns.",
        ],
        cta: {
          title: "Want the evidence before the redesign?",
          description: "ZSpace Labs runs [[/services/cro-audit|conversion audits]] and [[/services/ui-ux-design|UX research]] that combine analytics review with user testing, so the redesign brief is based on evidence.",
        },
      },
      {
        heading: "Where to find each answer",
        body: [],
        table: {
          headers: ["Question", "Main source", "Typical time"],
          rows: [
            ["1. Who visits", "Analytics (channel, country, device)", "Hours"],
            ["2. Landing pages", "Analytics, Search Console", "Hours"],
            ["3. Converting journeys", "Analytics path and conversion reports, CRM", "A day"],
            ["4. Drop-off points", "Funnel reports, form analytics", "A day"],
            ["5. Site search", "Site search reports", "Hours"],
            ["6. Underperforming pages and devices", "Analytics by template and device", "Hours"],
            ["7. Search queries", "Search Console", "Hours"],
            ["8. Baseline", "Analytics, CRM, field speed data", "A day"],
            ["9. Tasks", "Interviews, on-site survey", "A week"],
            ["10. Doubts and friction", "Customer interviews", "A week"],
            ["11. Customer language", "Interviews, reviews, sales calls", "Days"],
            ["12. Alternatives", "Interviews, lost-deal notes", "Days"],
            ["13. Trust needs", "Interviews, surveys", "Days"],
            ["14. Usability problems", "Moderated or unmoderated tests", "A week"],
            ["15. Sales and support patterns", "Tickets, call notes, staff interviews", "Days"],
          ],
        },
      },
      {
        heading: "Turning answers into a brief",
        body: [],
        checklist: [
          "List the top problems, each with the evidence behind it and the audience it affects.",
          "Note what must be protected: high-ranking pages, converting journeys and URLs with backlinks.",
          "Set two or three measurable goals tied to the baseline.",
          "Decide what to test with prototypes before building. See [[/blogs/test-website-prototype-before-development|testing a prototype before development]].",
          "Plan redirects and tracking for launch day if URLs or structure will change.",
        ],
        callout: {
          type: "note",
          text: "Research findings are evidence, not instructions. A few interviews can mislead if participants are not representative; look for patterns that appear across sources.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A redesign is most likely to help when it starts from answered questions: what visitors are trying to do, where they fail, why, and what must not be broken. Spend a little time on analytics and a little with users, write a brief from the evidence, and measure against a baseline. For research methods in more depth, see [[/blogs/user-research-methods|user research methods]].",
        ],
      },
    ],
  },

  // ----------------------------------------------- LEAD FORM EVENTS
  {
    slug: "lead-form-tracking-events",
    title: "12 Lead Form Analytics Events to Track on a B2B Website",
    seoTitle: "12 Lead Form Analytics Events to Track on a B2B Website",
    excerpt:
      "Twelve form and lead events to track in GA4 and your CRM, from form_start to qualified lead, and how to track them without collecting personal data.",
    category: "CRO",
    banner: "analyticsflow",
    sceneKind: "analytics",
    bannerAlt: "A lead form journey tracked as events: form viewed, started, field errors, submitted, lead generated, qualified and converted in the CRM",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "saas-technology", "professional-services"],
    relatedSlugs: ["measure-multi-channel-website-conversions", "improve-website-enquiry-form-conversions", "multi-step-form-ux-design"],
    faqs: [
      {
        q: "Does GA4 track form submissions automatically?",
        a: "GA4's enhanced measurement can send form_start and form_submit events, but form_submit fires when a form is submitted, not when the submission succeeds. For lead counts, send your own event, such as generate_lead, only after the server confirms the submission.",
      },
      {
        q: "Can I send form field values to Google Analytics?",
        a: "Not personal information. Google's help pages state that you must ensure no personally identifiable information is collected. Send field names, step numbers and error types, never names, emails, phone numbers or message text.",
      },
      {
        q: "How do I track lead quality in GA4?",
        a: "Store the GA client ID or click identifiers with the lead in your CRM, then send events such as qualify_lead and close_convert_lead back to GA4 or your ad platforms when the lead progresses. That lets you judge channels by qualified leads, not just form fills.",
      },
    ],
    content: [
      {
        heading: "Which lead form events should a B2B website track?",
        body: [
          "**Track the full journey: form viewed, form started, step completed, field errors, submit attempted, submission succeeded or failed, and lead generated; then the follow-on actions on the thank-you page and the CRM outcomes of qualified, converted or disqualified.** Together these show where people abandon forms and which channels bring leads that become customers. Never send personal details to analytics.",
          "This list is for marketers, CRO specialists and developers setting up tracking on enquiry, demo and quote forms. Event names follow Google Analytics 4 where GA4 has a standard event, checked against Google's documentation on 28 October 2026. For capturing lead sources in the CRM, see [[/blogs/measure-multi-channel-website-conversions|measuring conversions across channels]].",
        ],
      },
      {
        heading: "Before the form is submitted",
        body: [
          "**1. form_view (custom).** The form came into view. Without it, you cannot tell whether a low start rate means people saw the form and ignored it, or never scrolled to it. **Parameters:** form name, page type.",
          "**2. form_start (GA4 enhanced measurement).** The first interaction with a form in a session. Enhanced measurement sends it with form_id, form_name and form_destination; you need custom dimensions to report on those parameters. **Read it as:** interest. Start rate equals starts divided by views.",
          "**3. form_step_complete (custom).** For multi-step forms, each completed step with its number. Shows exactly which step loses people. See [[/blogs/multi-step-form-ux-design|multi-step form design]].",
          "**4. form_field_error (custom).** A validation error, with the field name and error type (missing, format) but never the value entered. Repeated errors on one field point to an unclear label or a format rule that is too strict.",
          "**5. form_abandon (custom, approximate).** A user started but left without submitting, often sent when the page is hidden or closed. Browser behaviour makes this imperfect; treat it as a directional signal.",
        ],
      },
      {
        heading: "At submission",
        body: [
          "**6. form_submit (GA4 enhanced measurement).** Fires when the form is submitted, including attempts that fail validation or server checks. Useful as \"submit attempted\", not as a lead count.",
          "**7. form_submit_error (custom).** The server rejected the submission or it failed to send, with an error category. Spikes reveal broken integrations and spam filters blocking real people.",
          "**8. generate_lead (GA4 recommended event).** Send this only after the server confirms the lead was saved. GA4 defines it as a lead being generated, with optional currency, value and lead_source parameters. Mark it as a key event.",
        ],
      },
      {
        heading: "After submission",
        body: [
          "**9. Thank-you page actions (custom).** Clicks on \"book a time\", downloads or calendar bookings after submitting. These show momentum and help you test what to offer next.",
          "**10. Alternative contact clicks (custom).** Clicks on phone, WhatsApp and email links near the form. Some visitors prefer these to a form; count them as contact intent, not as completed leads.",
        ],
      },
      {
        heading: "In the CRM, sent back to analytics",
        body: [
          "**11. qualify_lead and disqualify_lead (GA4 recommended events).** When sales marks a lead as qualified or not, send the event back (GA4 offers a disqualified_lead_reason parameter). This turns \"which channel brings form fills\" into \"which channel brings qualified leads\".",
          "**12. close_convert_lead and close_unconvert_lead (GA4 recommended events).** When the lead becomes a customer or is closed as lost (with an unconvert_lead_reason), send the outcome with a value if you have one. To connect these to the original visit, store the GA client ID or ad click identifiers with the lead.",
        ],
        cta: {
          title: "Not sure your form tracking tells the truth?",
          description: "A [[/services/cro-audit|ZSpace Labs conversion audit]] checks your form events, CRM handoff and reporting, and shows where leads are lost.",
        },
      },
      {
        heading: "Event table",
        body: [],
        table: {
          headers: ["Event", "Source", "What it tells you", "Key parameters (no personal data)"],
          rows: [
            ["form_view", "Custom", "Form was seen", "form_name, page_type"],
            ["form_start", "GA4 enhanced measurement", "Interest", "form_id, form_name"],
            ["form_step_complete", "Custom", "Step-by-step drop-off", "form_name, step"],
            ["form_field_error", "Custom", "Problem fields", "field_name, error_type"],
            ["form_abandon", "Custom (approximate)", "Started but left", "form_name, last_field"],
            ["form_submit", "GA4 enhanced measurement", "Submit attempts", "form_id, form_submit_text"],
            ["form_submit_error", "Custom", "Failed submissions", "error_category"],
            ["generate_lead", "GA4 recommended", "Confirmed leads", "lead_source, value, currency"],
            ["Thank-you actions", "Custom", "Momentum after submit", "action_type"],
            ["Alternative contact clicks", "Custom", "Contact intent outside forms", "channel"],
            ["qualify_lead / disqualify_lead", "GA4 recommended, from CRM", "Lead quality by channel", "disqualified_lead_reason"],
            ["close_convert_lead / close_unconvert_lead", "GA4 recommended, from CRM", "Revenue by channel", "value, currency, unconvert_lead_reason"],
          ],
        },
      },
      {
        heading: "10 form analytics patterns and what they may mean",
        body: [
          "Once the events are in place, look for patterns. Each one below suggests a possible cause, not a proven one; confirm with session recordings, a few usability sessions or a test before changing the form.",
        ],
        table: {
          headers: ["Pattern", "What it may mean", "How to check"],
          rows: [
            ["1. Many views, few starts", "Form looks long, offer unclear, or it is easy to miss", "Test the call to action and what the form asks for"],
            ["2. Many starts, few submissions", "Friction inside the form", "Look at the step or field where people stop"],
            ["3. Errors concentrated on one field", "Unclear label or over-strict format rule", "Read the error types for that field"],
            ["4. Drop at one step of a multi-step form", "That step asks for something sensitive or unexpected", "Move or explain the question"],
            ["5. Submit attempts much higher than confirmed leads", "Validation or server failures", "Compare form_submit with generate_lead and error events"],
            ["6. Mobile completion far below desktop", "Input types, keyboard or layout problems", "Test the form on a mid-range phone"],
            ["7. One channel's leads rarely qualify", "Message mismatch or wrong audience", "Compare qualify_lead rates by source"],
            ["8. High submissions, low qualification after a change", "The form became too easy for low-intent visitors", "Add a qualifying question and compare"],
            ["9. Spikes in submit errors on a date", "A broken integration or spam filter", "Check deploys and integration logs that day"],
            ["10. Many phone or WhatsApp clicks next to the form", "Some visitors prefer talking to typing", "Keep both; measure the contacts they create"],
          ],
        },
      },
      {
        heading: "Rules for tracking responsibly",
        body: [],
        checklist: [
          "Never send names, emails, phone numbers, company names or message text to analytics; Google requires that no personally identifiable information is collected.",
          "Respect consent: in markets that require it, analytics events fire only after consent, which leaves gaps you should expect in the numbers.",
          "Count leads from the server-confirmed event, not from clicks on the submit button.",
          "Name events and parameters consistently, and document them in a tracking plan.",
          "Test every event in GA4's debug view after each form change, and check that counts match the CRM.",
          "Report rates (start rate, completion rate, qualification rate), not just counts.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Twelve events are enough to see where a B2B form loses people and which channels bring leads that turn into customers. Use GA4's standard form and lead events where they exist, add a few custom events for views, steps, errors and failures, and close the loop with CRM outcomes. Then use the data to improve the form itself; see [[/blogs/improve-website-enquiry-form-conversions|improving enquiry forms without attracting low-quality leads]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Google Analytics Help, enhanced measurement events (form interactions). Google Analytics developer documentation, recommended events (generate_lead, qualify_lead, working_lead, close_convert_lead, close_unconvert_lead, disqualify_lead). Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // --------------------------------------------- CHECKOUT ERROR MESSAGES
  {
    slug: "checkout-error-messages",
    title: "15 Checkout Error Messages That Need Clearer UX and Recovery Guidance",
    seoTitle: "15 Checkout Error Messages to Rewrite, With Better Examples",
    excerpt:
      "Fifteen common checkout errors, from declined cards to expired carts and unserviceable postcodes, with clearer wording and a recovery path for each.",
    category: "CRO",
    banner: "checkoutdiag",
    sceneKind: "checkout",
    bannerAlt: "Checkout error messages rewritten: a vague 'Payment failed' replaced with a specific message and a clear next step",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["cro-audit", "shopify-development", "ui-ux-design"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail"],
    relatedSlugs: ["ecommerce-checkout-ux", "why-customers-abandon-checkout", "ux-writing"],
    faqs: [
      {
        q: "Should a checkout tell customers why their card was declined?",
        a: "Sometimes. Where the customer can fix the problem, such as a wrong security code or an expired card, say so. Where the decline relates to suspected fraud or a card reported lost or stolen, payment providers such as Stripe advise showing a generic decline message instead.",
      },
      {
        q: "Can I change checkout error messages on Shopify?",
        a: "Only partly. Shopify controls most checkout messages, though you can edit some text through the checkout language settings, and Shopify Plus stores can add checkout UI extensions. Messages on pages you control, such as the cart, and in your own emails are fully yours to improve.",
      },
      {
        q: "What makes a good error message?",
        a: "It says what went wrong in plain language, explains how to fix it, appears next to the problem, keeps what the customer already entered, and avoids blame and jargon.",
      },
    ],
    content: [
      {
        heading: "Which checkout errors need better messages?",
        body: [
          "**The errors that most need work are payment declines, authentication failures, timeouts and pending payments, address and delivery problems, discount code rejections, stock and price changes, expired sessions and order limits.** For each, say what happened in plain language, tell the customer what to do next, keep everything they have entered, and offer another way to pay or get help. Never reveal fraud-related decline reasons.",
          "This list is for ecommerce managers, designers and developers. The wording follows the GOV.UK Design System's error message guidance, and the payment examples follow Stripe's decline code documentation, both checked on 28 October 2026. The example messages are suggestions to adapt and test, not proven wording. For the wider checkout, see [[/blogs/ecommerce-checkout-ux|ecommerce checkout UX]].",
        ],
      },
      {
        heading: "Principles for every message",
        body: [],
        checklist: [
          "**Say what went wrong and how to fix it.** GOV.UK's guidance is to explain what went wrong and how to fix it, in plain English.",
          "**Be specific.** \"Something went wrong\" helps nobody; name the problem.",
          "**Put it next to the problem** and repeat it in a summary at the top for screen reader users.",
          "**Keep the customer's input.** Never clear the form after an error.",
          "**Avoid blame and jargon.** No \"invalid\", \"illegal\" or error codes in customer-facing text.",
          "**Offer a way forward:** another payment method, edit the address, contact support.",
        ],
      },
      {
        heading: "Payment errors",
        body: [
          "**1. Generic decline.** Instead of \"Transaction failed\": \"Your card was declined. Try another card or payment method, or contact your bank.\" Use this wording too for declines related to suspected fraud, lost or stolen cards, which Stripe says should be presented as a generic decline.",
          "**2. Insufficient funds.** Stripe's suggested next step is to use another payment method. \"Your card was declined. Try a different card or payment method.\" Do not mention the account balance.",
          "**3. Incorrect security code.** \"Check the 3-digit security code on the back of your card.\" Highlight only the security code field and keep the other card details.",
          "**4. Expired card.** \"This card has expired. Use a different card.\" Check the expiry date on entry so customers find out before submitting.",
          "**5. Authentication not completed (3-D Secure, OTP).** \"We couldn't confirm the payment with your bank. Try again and complete the check in your banking app or the code screen.\" Explain that no money was taken if that is the case.",
          "**6. Timeout or processing error.** \"We couldn't process your payment. You have not been charged.\" Only say that if it is true. Offer to retry, and prevent double charges by disabling the button while processing.",
          "**7. Payment pending.** Common with UPI, bank transfers and wallets: \"Waiting for confirmation from your bank. Don't pay again; we'll update this page and email you.\" Duplicate payments from impatient retries are costly to refund.",
        ],
      },
      {
        heading: "Address and delivery errors",
        body: [
          "**8. Postcode or PIN code not serviceable.** \"We don't deliver to 560001 yet.\" Offer alternatives: pickup points, another address, or a notification when delivery becomes available. Better still, check serviceability on the product page.",
          "**9. Address cannot be verified.** \"We couldn't find this address. Check the street and building number, or continue with the address as entered.\" Let customers override address suggestions; validation services are not always right.",
          "**10. Phone number format.** Accept common formats (spaces, country codes) and say what is needed: \"Enter a 10-digit mobile number so the courier can contact you.\"",
          "**11. Payment method unavailable for this order.** For example cash on delivery not available for the order value or area: say why and list the methods that are available.",
        ],
      },
      {
        heading: "Cart and order errors",
        body: [
          "**12. Discount code not accepted.** Say which reason applies: expired, not valid for items in the basket, minimum spend not reached (and by how much), or already used. \"This code needs a minimum spend of 1,500. Add 300 more to use it.\"",
          "**13. Item out of stock during checkout.** \"Sorry, the blue size 9 sold out while you were checking out.\" Show the item, remove it with the customer's agreement, and offer a similar item or back-in-stock alert.",
          "**14. Price or delivery cost changed.** If a price, tax or delivery charge changes, show the old and new amounts and ask the customer to confirm before charging.",
          "**15. Session or cart expired.** \"Your session timed out for security. Your basket has been saved.\" Restore the basket and entered details wherever possible.",
        ],
        cta: {
          title: "Losing orders to checkout errors?",
          description: "A [[/services/cro-audit|ZSpace Labs CRO audit]] reviews your checkout errors, payment flows and recovery messages, on Shopify or custom stores.",
        },
      },
      {
        heading: "Before and after table",
        body: [],
        table: {
          headers: ["Error", "Unhelpful message", "Clearer message and recovery"],
          rows: [
            ["Generic decline", "Transaction failed", "Card declined; try another card or method, or contact your bank"],
            ["Insufficient funds", "Insufficient funds", "Card declined; try a different card or payment method"],
            ["Wrong security code", "Invalid CVC", "Check the 3-digit code on the back; other details kept"],
            ["Expired card", "Card error", "This card has expired; use another card"],
            ["Authentication failed", "3DS failure", "Bank check not completed; try again; no money taken"],
            ["Timeout", "Error 500", "Payment not processed; you have not been charged; retry"],
            ["Payment pending", "Processing...", "Waiting for your bank; don't pay again; we'll email you"],
            ["Unserviceable postcode", "Invalid pincode", "We don't deliver to this postcode yet; pickup or notify me"],
            ["Unverified address", "Address invalid", "Check street and number, or continue as entered"],
            ["Phone format", "Invalid phone", "Enter a 10-digit mobile so the courier can call"],
            ["Method unavailable", "Payment method not allowed", "COD not available over this amount; choose another method"],
            ["Discount rejected", "Invalid code", "Needs minimum spend; add the difference"],
            ["Out of stock", "Cart error", "Item sold out; remove or choose similar"],
            ["Price changed", "(silent change)", "Show old and new amounts; confirm"],
            ["Session expired", "Session expired", "Timed out for security; basket saved"],
          ],
        },
      },
      {
        heading: "Platform limits and measurement",
        body: [
          "On hosted checkouts, including Shopify's, the platform controls most error text and flows; you can usually edit some wording through language settings, and Shopify Plus stores can add checkout UI extensions. Payment provider errors may also come from the provider's own interface. You fully control errors on the cart page, in your own forms and in follow-up emails, so start there. See [[/blogs/shopify-checkout-customisation-guide|what you can customise in Shopify checkout]].",
          "Track errors as events (error type and step, never card or personal data) so you can see which ones happen most and whether rewording reduces abandonment. Treat each rewrite as a hypothesis and check the results. See [[/blogs/why-customers-abandon-checkout|why customers abandon checkout]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Checkout errors are moments when a customer who wants to buy is told no. Clear, specific messages with a recovery path keep many of those orders: say what happened, how to fix it, keep their details, offer another way, and never expose fraud-related reasons. Start with the errors you control, measure which occur most, and rewrite those first. For writing interface text generally, see [[/blogs/ux-writing|UX writing]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "GOV.UK Design System, error message component. Stripe documentation, decline codes. Accessed 28 October 2026.",
        ],
      },
    ],
  },
];
