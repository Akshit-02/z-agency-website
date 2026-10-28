import type { BlogPost } from "./blog-data";

/**
 * Listicle batch 4 (2026-10-28): five topics out of candidates 61–80 with no
 * existing article on the same primary intent. Roles (61), monitoring metrics
 * (63), AI workflow failure scenarios (74, into llm-application-reliability),
 * AI privacy questions (75) and form analytics patterns (79, into
 * lead-form-tracking-events) became updates; ten others were already covered.
 * No external links (owner rule).
 * Sources checked 2026-10-28:
 * - OWASP Input Validation Cheat Sheet: syntactic and semantic validation,
 *   allowlists, server-side validation, validation is not the main defence
 *   against SQL injection or XSS, untrusted file metadata, email format does
 *   not prove ownership.
 * - Android Developers: excessive partial wake locks (2+ hours in 24h in the
 *   background; above 5% of sessions over 28 days can affect Play visibility);
 *   Data Saver and metered networks (getRestrictBackgroundStatus,
 *   isActiveNetworkMetered).
 * - Shopify Help: default customer notifications include order confirmation,
 *   shipping confirmation, shipping update, out for delivery, delivered, order
 *   refund and order canceled.
 * - Design Tokens Community Group, Format Module 2025.10: types color,
 *   dimension, fontFamily, fontWeight, duration, cubicBezier, number; composite
 *   strokeStyle, border, transition, shadow, gradient, typography; aliases.
 * - Microsoft Azure Architecture Center: circuit breaker (closed, open,
 *   half-open; combine with retry; 429 and 503 responses) and retry patterns.
 * - Stripe webhooks documentation (duplicates, ordering) as used in batch 2.
 */
export const listiclePosts5: BlogPost[] = [
  // ------------------------------------------------ DATA VALIDATION RULES
  {
    slug: "data-validation-rules",
    title: "15 Data Validation Rules for Reliable Business Applications",
    seoTitle: "15 Data Validation Rules for Reliable Business Applications",
    excerpt:
      "Fifteen validation rules that keep business application data reliable, from types and formats to cross-field, state and import checks, and where each belongs.",
    category: "Web Development",
    banner: "reqchecklist",
    sceneKind: "code",
    bannerAlt: "Data passing through validation layers in a business application: the form, the server, business rules and the database",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["website-development"],
    relatedIndustrySlugs: ["b2b-enterprise", "fintech", "saas-technology"],
    relatedSlugs: ["database-design-mistakes", "website-security-checklist", "secure-file-uploads"],
    faqs: [
      {
        q: "Is client-side validation enough?",
        a: "No. Browser and app validation helps people fix mistakes quickly, but anyone can bypass it. OWASP's guidance is to validate on the server even when the browser checks the same fields.",
      },
      {
        q: "Does input validation prevent SQL injection and XSS?",
        a: "It helps, but it is not the main defence. OWASP recommends parameterised queries against SQL injection and context-aware output encoding against cross-site scripting, with validation as an extra layer.",
      },
      {
        q: "Where should business rules be validated?",
        a: "On the server, in one place that every entry point uses: web forms, mobile apps, APIs, imports and background jobs. Database constraints then act as a final safety net.",
      },
    ],
    content: [
      {
        heading: "Which validation rules does a business application need?",
        body: [
          "**A reliable business application checks that data is the right type and format, present when required, within sensible ranges, consistent across related fields, unique where it must be, linked to records that exist, allowed in its current state and allowed for this user, and it applies the same checks to imports, APIs and integrations as to forms.** Validate in layers: in the interface for helpful feedback, on the server for every entry point, and in the database as the final guard.",
          "This list is for product owners writing requirements and developers designing forms, APIs and imports. OWASP's input validation guidance distinguishes **syntactic** validation (is it the right type and format?) from **semantic** validation (does the value make sense here, such as an end date after a start date). Both matter. For the database layer, see [[/blogs/database-design-mistakes|database design mistakes]].",
        ],
      },
      {
        heading: "Format and presence",
        body: [
          "**1. Type.** A quantity is a whole number, a price is a decimal, a date is a real date. Convert input to the expected type on the server and reject what does not convert.",
          "**2. Required fields.** Decide which fields are truly required for the record to be useful, and enforce them on the server and in the database. Every unnecessary required field is friction for users.",
          "**3. Format.** Postcodes, tax numbers, phone numbers and SKUs follow patterns. Prefer allowlists (what is accepted) over trying to block bad characters; OWASP warns against trying to recognise every malicious string.",
          "**4. Length.** Set maximum lengths that match how the data is used and stored, and minimums where meaningful. Very long input is a common cause of broken layouts and storage errors.",
          "**5. Normalisation.** Trim spaces, standardise case where appropriate (email domains), and store phone numbers in a consistent international format so duplicates can be detected.",
        ],
      },
      {
        heading: "Values and relationships",
        body: [
          "**6. Range.** Quantities above zero, discounts between 0 and 100%, dates of birth in the past. Ranges catch typing mistakes as well as abuse.",
          "**7. Cross-field rules.** An end date after the start date, a delivery date after the order date, a shipping address required when delivery is chosen. These semantic checks are where many real-world errors hide.",
          "**8. Uniqueness.** Invoice numbers, SKUs and account emails must be unique. Enforce it in the database with a unique constraint, not only by checking first in code, which fails under simultaneous requests.",
          "**9. References exist.** An order must point to a customer that exists and is active; a product to a category that exists. Foreign keys enforce this in the database; the application should give a clear message first.",
          "**10. Money and units.** Amounts have the right number of decimal places for their currency, the currency is stated, and units (kg or g, cm or inches) are explicit. Rounding rules should be defined, not left to defaults.",
          "**11. Dates and time zones.** Store moments in time unambiguously and validate that times make sense in the user's zone, especially for bookings around daylight saving changes.",
        ],
      },
      {
        heading: "State and permissions",
        body: [
          "**12. Allowed state transitions.** An order can go from paid to shipped, but not from cancelled to shipped; an invoice cannot be edited after it is issued. Define the allowed transitions and reject the rest.",
          "**13. Permission-aware validation.** Whether a value is valid can depend on who is submitting it: a sales rep may give up to 10% discount, a manager more. Check authorisation on the server for every change, not only by hiding buttons.",
        ],
      },
      {
        heading: "Bulk data and integrations",
        body: [
          "**14. Import and API validation.** CSV imports, API calls and integration syncs must pass the same rules as forms. Validate every row, report errors by row and field, and decide whether a file with some bad rows is rejected entirely or partly accepted.",
          "**15. Duplicates and replays.** Retried requests, double clicks and re-sent webhooks can create duplicate records. Use idempotency keys or event IDs and unique constraints so the same request processed twice has the same effect as once. See [[/blogs/webhook-use-cases|webhook use cases]].",
        ],
        callout: {
          type: "note",
          text: "Files need their own checks. OWASP treats the submitted filename and content type as untrusted; check content, size and type on the server, and store and serve files safely. See [[/blogs/secure-file-uploads|secure file uploads]].",
        },
        cta: {
          title: "Building a business application that has to get the data right?",
          description: "ZSpace Labs designs and builds web applications with validation, permissions and imports planned from the start. See our [[/services/website-development|web application development service]].",
        },
      },
      {
        heading: "Where each rule belongs",
        body: [],
        table: {
          headers: ["Rule", "Interface (feedback)", "Server (enforcement)", "Database (safety net)"],
          rows: [
            ["1. Type", "Input types, keyboards", "Parse and reject", "Column types"],
            ["2. Required", "Mark required fields", "Reject missing", "NOT NULL"],
            ["3. Format", "Inline hint and check", "Allowlist pattern", "Check constraint where simple"],
            ["4. Length", "Character counter", "Reject over limit", "Column length"],
            ["5. Normalisation", "Format as typed", "Normalise before save", "Not applicable"],
            ["6. Range", "Min and max hints", "Reject out of range", "Check constraint"],
            ["7. Cross-field", "Show the conflict", "Business rule", "Check constraint where possible"],
            ["8. Uniqueness", "Early warning", "Handle conflict cleanly", "Unique constraint"],
            ["9. References", "Pick from valid options", "Check existence and status", "Foreign key"],
            ["10. Money and units", "Show currency and unit", "Precision and rounding rules", "Exact numeric types"],
            ["11. Dates and zones", "Date pickers in local time", "Convert and check", "Timestamps with zone"],
            ["12. State transitions", "Disable invalid actions", "Enforce allowed transitions", "Status constraint"],
            ["13. Permissions", "Hide unavailable actions", "Authorise every change", "Row-level security where used"],
            ["14. Imports and APIs", "Preview with errors", "Same rules, row-level report", "Constraints"],
            ["15. Duplicates", "Disable double submit", "Idempotency keys", "Unique constraints"],
          ],
        },
      },
      {
        heading: "Writing good validation messages",
        body: [
          "A rule is only half the job; people need to know how to fix the problem. Say what is wrong and what is accepted, next to the field, and keep what the user entered. For forms with many fields, see [[/blogs/multi-step-form-ux-design|multi-step form design]] and, for checkout examples, [[/blogs/checkout-error-messages|checkout error messages]].",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Reliable data comes from rules applied consistently at every entry point: forms, apps, APIs, imports and integrations. Write the rules down with the business, enforce them on the server, back them with database constraints, and test them with the messy data real users and systems send. Validation also supports security, but it does not replace parameterised queries, output encoding and the other controls in our [[/blogs/website-security-checklist|website security checklist]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "OWASP Cheat Sheet Series, Input Validation Cheat Sheet. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ---------------------------------------- MOBILE BATTERY AND DATA USAGE
  {
    slug: "mobile-app-battery-data-usage",
    title: "12 Mobile App Battery and Data Usage Issues Developers Should Investigate",
    seoTitle: "12 Mobile App Battery and Data Usage Issues to Investigate",
    excerpt:
      "Twelve common causes of battery drain and heavy data use in iOS and Android apps, how to confirm each with platform tools, and what to change.",
    category: "Mobile Apps",
    banner: "appperfjourney",
    sceneKind: "mobile",
    bannerAlt: "A phone's battery and data meters with the app behaviours that drain them: background location, wake locks, polling and uncompressed images",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["mobile-app-development"],
    relatedIndustrySlugs: ["startups", "logistics-supply-chain", "healthcare-healthtech"],
    relatedSlugs: ["mobile-app-performance-optimization", "rest-api-vs-graphql-mobile-apps", "offline-first-mobile-app-development"],
    faqs: [
      {
        q: "How do I find out what is draining battery in my app?",
        a: "Start with platform data from real users: Android vitals in Google Play Console and battery and energy reports in Xcode's Organizer, which uses data from users who share diagnostics. Then reproduce the scenario on a device with Android Studio's profilers or Xcode Instruments.",
      },
      {
        q: "Does battery drain affect an app's Play Store visibility?",
        a: "It can. Android's documentation says that if excessive partial wake locks occur in more than 5% of app sessions across all devices over 28 days, it can affect the app's visibility on Google Play.",
      },
      {
        q: "Should an app use less data on mobile networks?",
        a: "Yes. Android advises limiting data use on metered networks even when Data Saver is off, and iOS lets apps detect when the user has turned on Low Data Mode. Defer large downloads and syncs to unmetered connections where possible.",
      },
    ],
    content: [
      {
        heading: "What causes battery drain and heavy data use in apps?",
        body: [
          "**The usual causes are background work that keeps the device awake, location tracking that is more precise or frequent than needed, polling instead of push, chatty or uncompressed network requests, oversized images and videos, missing caches, work repeated on every launch, heavy animations, third-party SDKs and ignoring the user's data-saving settings.** Confirm the cause with real-user data and a profiler before changing code; guesses often target the wrong thing.",
          "This list is for mobile developers and product owners responding to reviews such as \"drains my battery\" or \"uses too much data\". Platform behaviour differs, and newer OS versions restrict background work more tightly, so test on the versions your users run. Android facts were checked against Android Developers documentation on 28 October 2026. For general speed and responsiveness, see [[/blogs/mobile-app-performance-optimization|mobile app performance optimisation]].",
        ],
      },
      {
        heading: "Battery: background work",
        body: [
          "**1. Wake locks held too long (Android).** A partial wake lock keeps the CPU running after the screen turns off. Android vitals reports wake locks as excessive when, added together, they run for two or more hours in a 24-hour period while the app is in the background; if that happens in more than 5% of sessions over 28 days it can affect visibility on Google Play. **Check:** Android vitals in Play Console. **Fix:** release wake locks promptly, or use WorkManager or JobScheduler for deferrable work.",
          "**2. Background tasks scheduled too often.** Syncing every few minutes when hourly would do keeps waking the radio and CPU. **Fix:** batch work, schedule it with the platform's background task APIs, and let the OS choose efficient times.",
          "**3. Long-running foreground services (Android) or background modes (iOS).** These are for work the user is aware of, such as navigation or music. Using them to keep an app alive drains battery and risks store rejection.",
        ],
      },
      {
        heading: "Battery: location and sensors",
        body: [
          "**4. Location more precise or frequent than needed.** GPS-level accuracy and frequent updates are expensive. **Fix:** request approximate location where it suffices, lower the update frequency, use significant-change or geofencing APIs, and stop updates when the feature is closed.",
          "**5. Sensors and Bluetooth left running.** Scanning for Bluetooth devices or reading sensors continuously drains battery. Stop scanning once connected or when the screen closes.",
        ],
      },
      {
        heading: "Network: battery and data together",
        body: [
          "**6. Polling instead of push.** Asking the server every 30 seconds whether anything changed costs battery and data. Use push notifications or a server-sent update channel for changes, and poll only as a fallback. See [[/blogs/mobile-app-push-notifications|push notifications]].",
          "**7. Many small requests.** Each request wakes the radio, which stays in a high-power state for a while afterwards. Batch requests, and send analytics events in batches rather than one by one.",
          "**8. Large or uncompressed responses.** Fetching full objects when the screen needs three fields wastes data. Compress responses, request only needed fields and paginate lists. See [[/blogs/rest-api-vs-graphql-mobile-apps|REST vs GraphQL for mobile apps]].",
          "**9. Oversized images and auto-playing video.** Serve images sized for the device and in efficient formats, and do not auto-play video on mobile data unless the user has chosen to.",
          "**10. No caching.** Downloading the same images and data on every visit wastes both. Use HTTP caching headers and an on-device cache, and design for reading cached data first. See [[/blogs/offline-first-mobile-app-development|offline-first development]].",
        ],
      },
      {
        heading: "Respecting user settings and third parties",
        body: [
          "**11. Ignoring data-saving settings.** On Android, when Data Saver is on and the device is on a metered network, the system blocks background data and asks apps to use less in the foreground. Android's guidance is to check whether the network is metered and to limit data even when Data Saver is off. On iOS, apps can detect Low Data Mode and should defer non-essential downloads. Offer a \"download on Wi-Fi only\" setting for large content.",
          "**12. Heavy third-party SDKs.** Analytics, advertising and attribution SDKs can make their own network calls and background work. Audit what each SDK does, remove those you do not use, and check their impact in a profiler. This also helps with privacy disclosures.",
        ],
        cta: {
          title: "App reviews mentioning battery or data?",
          description: "ZSpace Labs builds and optimises iOS and Android apps, including diagnosing battery, data and performance problems. See our [[/services/mobile-app-development|mobile app development service]].",
        },
      },
      {
        heading: "How to investigate",
        body: [],
        table: {
          headers: ["Step", "Android", "iOS"],
          rows: [
            ["Real-user signals", "Android vitals in Play Console (wake locks, background Wi-Fi scans and more)", "Xcode Organizer energy and battery reports; MetricKit"],
            ["Reproduce on a device", "Android Studio profilers (CPU, network, energy)", "Xcode Instruments (energy, network, time profiler)"],
            ["Check data-saving behaviour", "Toggle Data Saver; simulate a metered network with adb", "Turn on Low Data Mode"],
            ["Check background work", "Inspect scheduled jobs and wake locks", "Review background modes and tasks"],
            ["Verify the fix", "Compare vitals over the following weeks", "Compare Organizer reports for the new version"],
          ],
        },
        checklist: [
          "Reproduce the user's scenario: device model, OS version, network type and how long the app was used.",
          "Change one thing at a time and measure before and after.",
          "Collect only the diagnostics you need; avoid sending personal or precise location data in logs.",
          "Prioritise by how many users are affected, not by how bad one report sounds.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Most battery and data problems come from doing work the user does not need, too often or too precisely: background tasks, location, polling, oversized media and SDKs. Use real-user data from Android vitals and Xcode Organizer to find the worst offenders, reproduce them with profilers, respect data-saving settings, and verify each fix with data. Diagnosing crashes follows a similar method; see [[/blogs/mobile-app-crash-reporting|mobile app crash reporting]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Android Developers: excessive partial wake locks (Android vitals); optimise network data usage (Data Saver). Apple Developer: MetricKit and Xcode Organizer energy reports; Low Data Mode. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // -------------------------------------------- ORDER STATUS NOTIFICATIONS
  {
    slug: "order-status-notifications",
    title: "15 Ecommerce Order Status Notifications That Keep Customers Informed",
    seoTitle: "15 Ecommerce Order Status Notifications Customers Need",
    excerpt:
      "Fifteen order notifications from confirmation to refund, including delays and failed deliveries: what each should say and what Shopify sends natively.",
    category: "Shopify & Ecommerce",
    banner: "postpurchaseflow",
    sceneKind: "orders",
    bannerAlt: "An order timeline with a notification at each stage: confirmed, shipped, out for delivery, delayed, delivered and refunded",
    date: "2026-10-28",
    readingTime: "10 min read",
    relatedServiceSlugs: ["shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail"],
    relatedSlugs: ["ecommerce-order-tracking", "ecommerce-post-purchase-experience", "ecommerce-delivery-tracking"],
    faqs: [
      {
        q: "Which order notifications does Shopify send by default?",
        a: "Shopify's default customer notifications include order confirmation, shipping confirmation, shipping update, out for delivery, delivered, order refund and order canceled, plus others for local delivery and pickup. You can edit their content in the notification settings.",
      },
      {
        q: "Should order updates be sent by SMS or WhatsApp?",
        a: "Use them for time-sensitive updates such as out for delivery or a delivery problem, where customers opted in. Email suits confirmations and receipts. Too many messages on any channel annoy customers.",
      },
      {
        q: "What is the most important notification after order confirmation?",
        a: "Often the delay or exception notice. Customers forgive a late parcel more readily when they are told early and given a new estimate; silence is what drives \"where is my order\" contacts.",
      },
    ],
    content: [
      {
        heading: "Which order notifications should a store send?",
        body: [
          "**At minimum: order confirmation, payment issues, shipped with tracking, out for delivery, delivered, and any change to the plan, such as a delay, failed delivery, partial shipment, cancellation, back-order or refund.** Each should say what has happened, what happens next and what the customer can do, on a channel suited to its urgency. Proactive exception messages prevent more support contacts than any other notification.",
          "This list is for ecommerce managers and Shopify merchants. It separates what Shopify sends natively from what needs carrier integrations, apps or custom work. Shopify's default notification names were checked in Shopify Help on 28 October 2026. For the tracking page itself, see [[/blogs/ecommerce-order-tracking|ecommerce order tracking]].",
        ],
      },
      {
        heading: "Order placed",
        body: [
          "**1. Order confirmation.** Sent immediately: items, prices, delivery address, delivery method and estimate, payment summary and a link to view the order. Shopify sends this natively. Check that it reads well on a phone and that the delivery estimate matches the checkout.",
          "**2. Payment pending.** For bank transfers, cash on delivery, UPI or other payment methods that confirm later: say the order is reserved, what the customer needs to do and by when. This prevents duplicate payments.",
          "**3. Payment failed or action needed.** If a payment fails after the order or needs re-authentication, tell the customer promptly with a secure link to fix it, and say what happens if they do not.",
          "**4. Order edited.** If items, quantities or the address change after purchase, send a summary of what changed and any price difference.",
        ],
      },
      {
        heading: "Fulfilment",
        body: [
          "**5. Back-order or pre-order update.** For items not yet in stock, confirm the expected dispatch date and send an update if it moves. See [[/blogs/ecommerce-preorders-backorders|pre-orders and back-orders]].",
          "**6. Partial shipment.** When an order ships in several parcels, say which items are in this parcel, with its own tracking, and when the rest will follow. Customers otherwise assume items are missing.",
          "**7. Shipped, with tracking.** Shopify's shipping confirmation includes the tracking link when fulfilment records it. Link to your branded tracking page if you have one, not only the carrier's.",
          "**8. Ready for pickup.** For click-and-collect: where, opening hours, what to bring, and how long the order will be held.",
        ],
      },
      {
        heading: "Delivery",
        body: [
          "**9. Out for delivery.** Shopify has a native out-for-delivery notification when tracking events are available from the carrier. Useful by SMS or WhatsApp where customers have opted in, so they can be home or arrange a safe place.",
          "**10. Delayed.** The notice customers value most. Say it is late, the new estimate if known, and the options (wait, cancel, contact support). Send it as soon as you know, not after the customer asks. Shopify's shipping update notification covers some carrier changes; proactive delay messages often need a tracking app or integration.",
          "**11. Delivery failed or exception.** Address problem, nobody home, held at depot, or returned to sender: explain what happened and the exact next step, with a link to rearrange or update the address.",
          "**12. Delivered.** Confirms arrival, with a link to report a problem. Shopify sends this natively when tracking shows delivery. Hold any review request until the customer has had time to use the product.",
        ],
      },
      {
        heading: "After delivery",
        body: [
          "**13. Cancellation.** Whether the customer or the store cancelled, say why (in plain terms), what happens to the payment and when.",
          "**14. Return received.** Confirm the return arrived and what happens next (inspection, exchange or refund), with a timeline. See [[/blogs/ecommerce-returns-ux|returns UX]].",
          "**15. Refund issued.** State the amount, the payment method it goes back to and how long banks typically take to show it. Shopify sends an order refund notification natively.",
        ],
        cta: {
          title: "Too many \"where is my order\" emails?",
          description: "ZSpace Labs sets up Shopify notifications, tracking pages and carrier integrations so customers are told before they have to ask. See our [[/services/shopify-development|Shopify development service]].",
        },
      },
      {
        heading: "Notification plan",
        body: [
          "Use this to check coverage. \"Native\" means a default Shopify customer notification exists; others usually need a tracking app, a messaging app, an integration or custom work.",
        ],
        table: {
          headers: ["Notification", "Channel", "Shopify", "Must include"],
          rows: [
            ["1. Order confirmation", "Email", "Native", "Items, address, estimate, order link"],
            ["2. Payment pending", "Email, SMS", "Depends on payment method", "What to do, deadline, don't pay twice"],
            ["3. Payment action needed", "Email", "Partly via payment provider", "Secure link, consequence"],
            ["4. Order edited", "Email", "Check your notification settings", "What changed, price difference"],
            ["5. Back-order update", "Email", "App or custom", "Expected date, options"],
            ["6. Partial shipment", "Email", "Shipping confirmation per fulfilment", "Items in this parcel, rest to follow"],
            ["7. Shipped", "Email", "Native (shipping confirmation)", "Tracking link, estimate"],
            ["8. Ready for pickup", "Email, SMS", "Pickup notifications in settings", "Location, hours, ID needed"],
            ["9. Out for delivery", "SMS, WhatsApp, email", "Native when tracking supports it", "Today's delivery, options"],
            ["10. Delayed", "Email, SMS", "Shipping update; proactive messages need an app", "New estimate, options"],
            ["11. Delivery failed", "SMS, email", "Usually app or carrier", "Reason, next step link"],
            ["12. Delivered", "Email", "Native", "Report a problem link"],
            ["13. Cancellation", "Email", "Native (order canceled)", "Reason, payment outcome"],
            ["14. Return received", "Email", "Depends on returns setup", "Next step, timeline"],
            ["15. Refund issued", "Email", "Native (order refund)", "Amount, method, bank timing"],
          ],
        },
      },
      {
        heading: "Writing and sending well",
        body: [],
        checklist: [
          "Lead with the status in the subject line or first line: \"Your order is out for delivery\".",
          "Always include the order number and a link to the order or tracking page.",
          "Say what the customer needs to do, or that they need to do nothing.",
          "Send SMS and WhatsApp only to customers who opted in, and only for time-sensitive updates.",
          "Keep notifications transactional; put promotions elsewhere.",
          "Test each template with real orders, including partial shipments and refunds.",
          "Track \"where is my order\" contacts before and after changes to see if notifications help.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Good order notifications answer the customer's question before they ask it. Shopify covers the main milestones natively; delays, failed deliveries, back-orders and partial shipments usually need extra setup, and they matter most. Map every status your orders pass through, make sure each has a clear message, and send exceptions proactively. For the wider experience after checkout, see [[/blogs/ecommerce-post-purchase-experience|the post-purchase experience]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Shopify Help Center, customer notifications. Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ---------------------------------------------- DESIGN TOKEN CATEGORIES
  {
    slug: "design-token-categories",
    title: "12 Design Token Categories for Consistent Digital Interfaces",
    seoTitle: "12 Design Token Categories for Consistent Interfaces",
    excerpt:
      "Twelve categories of design tokens, from colour and spacing to motion and breakpoints, how to name them in tiers and what the 2025 token format standard covers.",
    category: "UI/UX",
    banner: "designsystemflow",
    sceneKind: "design",
    bannerAlt: "Design tokens grouped into categories such as colour, typography, spacing, radius, shadow and motion, flowing from design files into code",
    date: "2026-10-28",
    readingTime: "9 min read",
    relatedServiceSlugs: ["ui-ux-design", "website-development"],
    relatedIndustrySlugs: ["saas-technology", "b2b-enterprise", "startups"],
    relatedSlugs: ["design-systems-for-teams-that-move-fast", "design-handoff", "figma-product-design"],
    faqs: [
      {
        q: "What are design tokens?",
        a: "Named values for design decisions, such as a brand colour, a spacing step or an animation duration, stored once and used by both design tools and code. Changing a token changes every place that uses it.",
      },
      {
        q: "Is there a standard format for design tokens?",
        a: "The Design Tokens Community Group published version 2025.10 of its format specification, its first stable version, in October 2025. It is a community group report rather than a W3C standard, so check that your design tools and build pipeline support it.",
      },
      {
        q: "How many tokens does a small product need?",
        a: "Fewer than you might think: a colour palette with semantic roles, a type scale, a spacing scale, a few radii and shadows, and motion durations. Start small and add tokens when a real need repeats.",
      },
    ],
    content: [
      {
        heading: "Which design token categories does an interface need?",
        body: [
          "**Most products need tokens for colour, typography, spacing, sizing, border radius, borders, shadows (elevation), opacity, motion (duration and easing), breakpoints, layering (z-index) and icon sizes.** Organise them in tiers: primitive tokens hold raw values, semantic tokens describe purpose (such as \"text-error\") and point to primitives, and component tokens, where needed, apply semantic tokens to specific components.",
          "This list is for designers and front-end developers setting up or tidying a design system. The Design Tokens Community Group's format specification, version 2025.10, defines standard types including colour, dimension, font family, font weight, duration, cubic Bézier and number, and composite types for border, shadow, transition, gradient, typography and stroke style. For when a design system is worth the effort, see [[/blogs/design-systems-for-teams-that-move-fast|design systems for teams that move fast]].",
        ],
      },
      {
        heading: "Primitives, semantic tokens and component tokens",
        body: [
          "Naming in tiers is what makes tokens maintainable. A **primitive** token names a raw value (blue-600). A **semantic** token names a purpose (action-primary-background) and refers to a primitive. Components use semantic tokens. When the brand blue changes, or you add a dark theme, you change what the semantic tokens point to rather than editing every component. The specification supports this through aliases, where one token references another.",
        ],
      },
      {
        heading: "The 12 categories",
        body: [
          "**1. Colour.** Primitives for the palette, and semantic tokens for text, backgrounds, borders, actions and status (success, warning, error, info). Semantic colour tokens are what make dark mode and theming manageable. Check contrast for each pairing. See [[/blogs/accessible-ui-ux-design|accessible UI/UX design]].",
          "**2. Typography.** Font families, weights, sizes, line heights and letter spacing, often combined into composite styles such as heading-large or body-small. The specification has a composite typography type for this.",
          "**3. Spacing.** A scale (for example 4, 8, 12, 16, 24, 32) used for padding, margins and gaps. A small, consistent scale removes most \"is this 13 or 14 pixels?\" debates.",
          "**4. Sizing.** Fixed sizes for controls, avatars, touch targets and containers. Include minimum touch target sizes for mobile.",
          "**5. Border radius.** A few steps, such as none, small, medium, large and full, applied consistently to buttons, cards and inputs.",
          "**6. Borders.** Widths and styles for dividers, inputs and focus outlines. Treat focus ring tokens as their own semantic set so keyboard focus stays visible across themes.",
          "**7. Shadows and elevation.** A small set of elevation levels (raised card, dropdown, modal) defined as composite shadow tokens, rather than ad hoc shadows per component.",
          "**8. Opacity.** Values for disabled states, overlays and scrims, so disabled controls look the same everywhere.",
          "**9. Motion.** Durations and easing curves (the specification's duration and cubic Bézier types), and transitions combining them. Name them by purpose, such as quick feedback or panel entrance, and respect users' reduced-motion settings.",
          "**10. Breakpoints.** The screen widths at which layouts change, shared by design and code so responsive behaviour matches the designs.",
          "**11. Layering (z-index).** Named levels for dropdowns, sticky headers, modals and toasts, so components do not compete with arbitrary numbers like 9999.",
          "**12. Icon sizes.** A few sizes aligned with the type scale and touch targets, so icons sit consistently next to text.",
        ],
        cta: {
          title: "Setting up a design system?",
          description: "ZSpace Labs designs token-based design systems in Figma and implements them in code, so design and development share one source. See our [[/services/ui-ux-design|UI/UX design service]].",
        },
      },
      {
        heading: "Category reference",
        body: [],
        table: {
          headers: ["Category", "Example semantic token", "Spec type (2025.10)", "Watch for"],
          rows: [
            ["Colour", "text-error", "color", "Contrast in every theme"],
            ["Typography", "heading-large", "typography (composite)", "Line height on small screens"],
            ["Spacing", "space-4", "dimension", "Too many steps"],
            ["Sizing", "control-height-medium", "dimension", "Minimum touch targets"],
            ["Border radius", "radius-medium", "dimension", "Mixed radii on one screen"],
            ["Borders", "focus-ring", "border (composite)", "Focus visible in all themes"],
            ["Shadows", "elevation-modal", "shadow (composite)", "Shadows invisible in dark mode"],
            ["Opacity", "opacity-disabled", "number", "Disabled text contrast"],
            ["Motion", "duration-quick, ease-standard", "duration, cubicBezier, transition", "Reduced-motion preference"],
            ["Breakpoints", "breakpoint-tablet", "dimension", "Design and code disagreeing"],
            ["Layering", "layer-modal", "number", "Arbitrary large values"],
            ["Icon sizes", "icon-small", "dimension", "Alignment with text"],
          ],
        },
      },
      {
        heading: "Practical advice",
        body: [],
        checklist: [
          "Start with colour, typography and spacing; add other categories when inconsistency appears.",
          "Name semantic tokens by purpose, never by value (\"action-primary\", not \"blue\").",
          "Keep one source of truth, exported to design tools and code by a build step.",
          "Document when to use each semantic token, with examples.",
          "Review token changes like code changes, since one change affects every screen.",
          "Check that your tools support the 2025.10 format before relying on it; support varies.",
        ],
        callout: {
          type: "note",
          text: "Tokens make consistency easier but do not create it on their own. Components, documentation and review still decide whether the interface stays consistent. See [[/blogs/design-handoff|design handoff]] for how tokens reach developers.",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Twelve categories cover most of what an interface needs to stay consistent: colour, typography, spacing, sizing, radius, borders, shadows, opacity, motion, breakpoints, layering and icon sizes. Name them in tiers, keep one source of truth and start small. For using tokens and variables inside Figma, see [[/blogs/figma-product-design|Figma for product design]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Design Tokens Community Group, Design Tokens Format Module 2025.10 (types, composite types and aliases). Accessed 28 October 2026.",
        ],
      },
    ],
  },

  // ---------------------------------------- INTEGRATION FAILURE SCENARIOS
  {
    slug: "integration-failure-scenarios",
    title: "15 Third-Party Integration Failure Scenarios Every Business App Should Handle",
    seoTitle: "15 Integration Failure Scenarios Every Business App Should Handle",
    excerpt:
      "Fifteen ways third-party integrations fail, from timeouts and rate limits to expired tokens and silent data drift, and how to detect, handle and test each.",
    category: "Web Development",
    banner: "failureflow",
    sceneKind: "monitor",
    bannerAlt: "A business application connected to payment, CRM, shipping and email services, with failure points marked and handled by retries, queues and alerts",
    date: "2026-10-28",
    readingTime: "11 min read",
    relatedServiceSlugs: ["website-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "saas-technology", "b2b-enterprise"],
    relatedSlugs: ["webhook-use-cases", "integration-architecture-patterns", "application-monitoring-observability"],
    faqs: [
      {
        q: "What is the most common integration failure?",
        a: "Timeouts and temporary errors from the other service are the most frequent, and the easiest to handle with timeouts, retries and queues. The most damaging are often quieter: expired credentials, changed data formats and records that drift out of sync without any error.",
      },
      {
        q: "Should every failed API call be retried?",
        a: "No. Retry temporary failures such as timeouts, 429 and 503 responses, with backoff and a limit. Do not retry errors that will fail again, such as invalid data or permission errors, and make sure retried operations cannot create duplicates.",
      },
      {
        q: "What is a circuit breaker?",
        a: "A pattern that stops calling a service that keeps failing, returns a fallback or error immediately, and tries again after a pause. Microsoft's Azure Architecture Center describes it as complementing, not replacing, retries.",
      },
    ],
    content: [
      {
        heading: "How do third-party integrations fail?",
        body: [
          "**Integrations fail loudly (timeouts, outages, rate limits, rejected credentials, server errors) and quietly (changed data formats, duplicate or missing events, records drifting out of sync, partial failures in multi-step operations).** A dependable business application sets timeouts, retries only safe and temporary failures, queues work, prevents duplicates, stops hammering failing services, reconciles data on a schedule, alerts a person when something needs attention, and tells users clearly what is happening.",
          "This list is for product owners and developers of applications that depend on payment providers, CRMs, ERPs, shipping, email, identity or AI services. Patterns follow Microsoft's Azure Architecture Center guidance on retries and circuit breakers. For event-driven integrations specifically, see [[/blogs/webhook-use-cases|webhook use cases]].",
        ],
      },
      {
        heading: "Availability and speed",
        body: [
          "**1. Slow responses and timeouts.** Without a timeout, a slow service ties up your application until users give up. **Handle:** set explicit timeouts, and move slow calls into background jobs where the user does not need to wait.",
          "**2. Temporary errors (500, 502, 503).** **Handle:** retry with exponential backoff and a cap. **Test:** simulate errors and confirm the retry stops after the limit.",
          "**3. Prolonged outage.** Retrying a service that is down wastes resources and can make recovery harder. **Handle:** a circuit breaker stops calls after repeated failures, returns a fallback or a clear message, and lets a few trial calls through later. Microsoft describes its closed, open and half-open states.",
          "**4. Rate limits (429).** **Handle:** respect the provider's limits and any retry-after information, spread bulk jobs over time, and use bulk APIs where offered.",
        ],
      },
      {
        heading: "Access and contracts",
        body: [
          "**5. Expired or revoked credentials.** OAuth tokens expire, API keys are rotated and users disconnect apps. **Handle:** refresh tokens automatically, detect authorisation failures, stop retrying them, and alert the account owner to reconnect.",
          "**6. Permission changes.** The integration user loses access to a field or object. **Handle:** treat permission errors as needing human action, not retries, and show which record and permission failed.",
          "**7. API version deprecation.** Providers retire API versions on a schedule. **Handle:** track the versions you use, subscribe to provider changelogs, and test against new versions before the old one is switched off.",
          "**8. Changed data formats.** A new field becomes required, an enum gains a value, a field is renamed. **Handle:** validate responses against the shape you expect, log unknown values instead of crashing, and alert on validation failures.",
        ],
      },
      {
        heading: "Data correctness",
        body: [
          "**9. Duplicates from retries.** A request times out but actually succeeded; retrying creates a second order or payment. **Handle:** use idempotency keys where the provider supports them, and unique references on your side.",
          "**10. Missed events.** A webhook was not delivered or failed to process. **Handle:** log every event, process from a queue, and run a reconciliation job that compares recent records through the API.",
          "**11. Out-of-order events.** An update arrives before the create, or \"shipped\" before \"paid\". **Handle:** fetch the current state before acting, or compare timestamps and versions.",
          "**12. Silent drift between systems.** Stock, prices or customer details differ between systems with no error anywhere. **Handle:** define which system owns each field, run scheduled comparisons, and report mismatches to a person.",
          "**13. Partial failure in multi-step operations.** The order was created in the ERP but the invoice step failed. **Handle:** record progress per step, make each step safe to retry, and have a compensating action or a clear manual fix for steps that cannot be undone.",
        ],
      },
      {
        heading: "People and operations",
        body: [
          "**14. Failures nobody notices.** Errors written to a log no one reads. **Handle:** monitor error rates, queue age and failed jobs per integration, and alert the right person with enough context to act. See [[/blogs/application-monitoring-observability|application monitoring and observability]].",
          "**15. Users left guessing.** A customer sees \"Something went wrong\" or a spinner that never ends. **Handle:** tell users what happened and what will happen next (\"Your order is saved; confirmation may take a few minutes\"), and give staff a screen showing failed syncs with a retry button.",
        ],
        cta: {
          title: "Integrations that fail quietly?",
          description: "ZSpace Labs builds integrations with timeouts, retries, queues, reconciliation and monitoring designed in. See our [[/services/website-development|web application development]] and [[/services/ai-automation|workflow automation]] services.",
        },
      },
      {
        heading: "Scenario table",
        body: [],
        table: {
          headers: ["Scenario", "Detect with", "Handle with", "Retry?"],
          rows: [
            ["Slow response", "Latency metrics", "Timeouts; background jobs", "Sometimes"],
            ["Temporary error", "Error rate", "Backoff with a cap", "Yes"],
            ["Prolonged outage", "Repeated failures", "Circuit breaker; fallback", "After a pause"],
            ["Rate limit (429)", "429 responses", "Respect limits; spread load", "Yes, after waiting"],
            ["Expired credentials", "401 responses", "Refresh; alert to reconnect", "No"],
            ["Permission change", "403 responses", "Human action", "No"],
            ["API deprecation", "Changelogs, warnings", "Planned upgrade", "Not applicable"],
            ["Changed data format", "Response validation", "Log unknowns; alert", "No"],
            ["Duplicates", "Unique reference conflicts", "Idempotency keys", "Safe only with keys"],
            ["Missed events", "Reconciliation gaps", "Queue plus scheduled sync", "Via reconciliation"],
            ["Out-of-order events", "Version or time checks", "Fetch current state", "Not needed"],
            ["Silent drift", "Scheduled comparisons", "Source-of-truth rules", "Not applicable"],
            ["Partial failure", "Step status records", "Retry steps; compensate", "Per step"],
            ["Unnoticed failures", "Alerts on errors and queue age", "Owner and runbook", "Not applicable"],
            ["Users left guessing", "Support contacts", "Clear status messages", "Not applicable"],
          ],
        },
      },
      {
        heading: "Testing these scenarios",
        body: [],
        checklist: [
          "Use provider sandboxes and test modes to trigger errors, declines and webhooks.",
          "Simulate timeouts, 429s and 503s with a mock server or fault injection before launch.",
          "Replay the same webhook or request twice and confirm nothing is duplicated.",
          "Expire a token in a test environment and check the reconnect flow and alert.",
          "Run the reconciliation job against deliberately mismatched test data.",
          "Write a short runbook for each critical integration: symptoms, checks, fixes, who to contact.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Every integration will fail at some point; what matters is whether the application notices, stays safe and recovers. Set timeouts, retry only what is temporary and safe, prevent duplicates, queue and reconcile, alert people with context, and keep users informed. For choosing between APIs, events and queues in the first place, see [[/blogs/integration-architecture-patterns|integration architecture patterns]].",
        ],
      },
      {
        heading: "Sources",
        body: [
          "Microsoft Azure Architecture Center, Circuit Breaker pattern and Retry pattern. Stripe documentation on webhook delivery behaviour. Accessed 28 October 2026.",
        ],
      },
    ],
  },
];
