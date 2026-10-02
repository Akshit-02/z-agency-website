import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch eleven, part three: payment failures,
 * recurring card payments and 3D Secure. Recurring payments owns the card
 * credential layer (CIT/MIT, stored credentials, network tokens, account
 * updater, retries); the billing engine lives in
 * subscription-billing-architecture. SCA statements follow the PSD2 regime
 * as summarized by Stripe and card network guidance, and are described as
 * region-specific. Merged into `posts` in blog-data.ts.
 */

export const commercePosts85: BlogPost[] = [
  // ---------------------------------------- 535 · PAYMENT FAILURE HANDLING
  {
    slug: "ecommerce-payment-failure-handling",
    title: "Ecommerce Payment Failure Handling: How to Reduce Failed Transactions",
    seoTitle: "Ecommerce Payment Failures: Declines, Timeouts, Retries, Recovery",
    excerpt:
      "How to handle failed ecommerce payments: soft and hard declines, timeouts and unknown outcomes, idempotency, retry rules, shopper error messages, asynchronous confirmation, recovery and monitoring.",
    category: "Web Development",
    banner: "paymentfailures",
    bannerAlt:
      "Comparison of soft declines, hard declines and timeouts (highlighted) by example, whether to retry, what to tell the shopper and the main risk; the note says never retry an unknown outcome without an idempotency key.",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "fintech", "d2c-consumer"],
    relatedSlugs: ["ecommerce-payment-routing", "ecommerce-webhooks", "why-customers-abandon-checkout"],
    faqs: [
      { q: "Why do ecommerce payments fail?", a: "Common causes are issuer declines (insufficient funds, suspected fraud, card restrictions), incorrect card details, failed or abandoned authentication, expired cards, provider or network errors, timeouts and integration bugs such as wrong amounts or currencies." },
      { q: "What is the difference between a soft decline and a hard decline?", a: "A soft decline is temporary or fixable, such as insufficient funds or a request for authentication, and a later or different attempt may succeed. A hard decline, such as a lost or stolen card or closed account, will not succeed on retry." },
      { q: "Should we retry declined payments automatically?", a: "Only soft declines, a limited number of times, with delays, and never in a way that looks like card testing. Hard declines should never be retried. Card networks restrict and may charge for excessive retries." },
      { q: "What should we do when a payment request times out?", a: "Treat the outcome as unknown. Check the payment status with the provider or wait for the webhook before retrying, and use an idempotency key so a retry cannot create a second charge." },
      { q: "What is an idempotency key?", a: "A unique value sent with a payment request so that if the same request is sent again, the provider returns the original result instead of processing it twice." },
      { q: "What should a decline message say?", a: "Something useful without revealing fraud signals: the payment was not approved, the card has not been charged, and the shopper can try another card or payment method or contact their bank." },
      { q: "Should we show the exact decline reason to shoppers?", a: "Show actionable reasons such as an incorrect CVC or expired card. For fraud-related or generic declines, show a neutral message, because detailed reasons can help fraudsters." },
      { q: "How do asynchronous payment methods affect failure handling?", a: "Bank transfers, some wallets and redirect methods confirm later. Keep the order pending, confirm via webhook, and decide what happens if confirmation never arrives." },
      { q: "How do we monitor payment failures?", a: "Track authorization rate by method, provider, card country and device, decline codes, timeout rates, 3DS failure rates and checkout errors, and alert on sudden changes." },
      { q: "Can we recover failed checkout payments later?", a: "Sometimes, with a reminder email linking back to a saved cart or a payment link, if the customer agreed to be contacted. Do not charge stored cards for a failed checkout without explicit agreement." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Handle failed payments by classifying every outcome: approved, soft decline (may succeed later or with action), hard decline (will not succeed), requires action (such as 3D Secure) or unknown (timeout or error). Send every payment request with an idempotency key, never retry an unknown outcome until you have checked its status, retry only soft declines within limits, show shoppers clear and safe messages with another way to pay, confirm asynchronous methods by webhook, and monitor decline rates by provider, method and market so problems are caught quickly.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "The payment lifecycle is in [[/blogs/ecommerce-payment-gateway-integration|payment gateway integration]]. Retrying on another provider is in [[/blogs/ecommerce-payment-routing|payment routing]], renewals that fail are in [[/blogs/ecommerce-recurring-payments|recurring payments]], and the broader causes of checkout abandonment are in [[/blogs/why-customers-abandon-checkout|why customers abandon checkout]].",
        ],
      },
      {
        heading: "Types of Payment Failure",
        body: [],
        table: {
          headers: ["Type", "Examples", "Retry?", "What to do"],
          rows: [
            ["Validation error", "Invalid card number, expired date, wrong CVC", "After correction", "Inline field error"],
            ["Soft decline", "Insufficient funds, issuer unavailable, do not honour (generic)", "Limited", "Offer another method; later retry for renewals"],
            ["Authentication required or failed", "3DS challenge needed, challenge failed or abandoned", "With authentication", "Run or rerun 3DS"],
            ["Hard decline", "Lost or stolen card, closed account, invalid account", "Never", "Ask for a different card"],
            ["Fraud block", "Your rules or provider risk tools blocked it", "No", "Neutral message, review queue if appropriate"],
            ["Unknown outcome", "Timeout, network error, provider 5xx", "Only after status check", "Query status or wait for webhook"],
          ],
        },
      },
      {
        heading: "Idempotency: The Foundation",
        body: [
          "Networks fail between your server and the provider. If a request times out, the payment may or may not have gone through. Retrying without protection can charge the customer twice. Idempotency keys solve this: you generate a unique key per payment attempt and send it with the request, and the provider returns the original result for repeated requests with the same key. [[https://docs.stripe.com/api/idempotent_requests|Stripe's documentation]], for example, describes keeping keys for at least 24 hours and replaying the first result.",
          "Generate the key from your own payment attempt record (for example, the order ID plus attempt number), store it before calling the provider, and reuse it for any retry of the same attempt. Use a new key only when you intend a genuinely new attempt, such as after the shopper changes card.",
        ],
        code: {
          label: "Example: idempotent payment attempt (pseudocode)",
          text: "attempt = attempts.create(order_id, amount, currency)   // status: pending\nkey = \"order-\" + order_id + \"-attempt-\" + attempt.number\n\ntry:\n  result = provider.authorize(token, amount, currency, idempotency_key = key)\n  attempts.update(attempt.id, map(result))\ncatch Timeout or NetworkError:\n  attempts.update(attempt.id, \"unknown\")\n  status = provider.lookup(key)          // or wait for the webhook\n  attempts.update(attempt.id, map(status))",
        },
      },
      {
        heading: "Handling Unknown Outcomes",
        body: [
          "An unknown outcome is the most dangerous state because both obvious reactions are wrong. Telling the shopper the payment failed may lead them to pay again; telling them it succeeded may ship goods without payment. Show a holding message ('We are confirming your payment'), check the status with the provider, and rely on the webhook as the final word. If the payment later succeeds, complete the order; if it never does, release reserved stock and tell the customer. Webhook handling is covered in [[/blogs/ecommerce-webhooks|ecommerce webhooks]].",
        ],
        diagram: {
          variant: "failureflow",
          alt: "Payment failure handling flow: attempt with idempotency key, response, classify outcome (highlighted), message the shopper, retry or fallback, reconcile by webhook.",
          caption: "Classification decides everything after it: the message, whether to retry and what the order does next.",
        },
      },
      {
        heading: "Retry Rules",
        body: [
          "Retries are useful and risky. They can recover temporary failures, but repeated attempts on the same card look like card testing to issuers and fraud systems, and card networks limit how often declined transactions may be retried.",
        ],
        checklist: [
          "Automatic retry only for transient technical errors, with the same idempotency key",
          "No automatic retry of issuer declines during checkout; let the shopper choose another method",
          "Never retry hard declines",
          "For renewals, schedule soft-decline retries over days, not seconds",
          "Cap total attempts per card per period to stay within network rules",
          "Rate-limit attempts per session, device and IP to slow card testing",
        ],
      },
      {
        heading: "What Should the Shopper See?",
        body: [
          "Decline messages should be honest, calm and actionable, and they should not disclose fraud logic. Confirm whether the card was charged, keep the cart and entered details intact, and offer an alternative such as another card, a wallet or PayPal.",
        ],
        table: {
          headers: ["Situation", "Message direction"],
          rows: [
            ["Incorrect CVC or expiry", "Point to the specific field to fix"],
            ["Generic or fraud decline", "'Your bank didn't approve this payment. You haven't been charged. Try another card or payment method.'"],
            ["Insufficient funds", "Same neutral message; do not state the reason"],
            ["Authentication failed", "'We couldn't confirm the payment with your bank. Try again or use another method.'"],
            ["Unknown outcome", "'We're confirming your payment. Please don't pay again; we'll update this page.'"],
          ],
        },
        cta: {
          title: "Losing orders to unclear payment errors?",
          description: "ZSpace Labs can audit your checkout's failure states, decline messaging and payment logs to find where paying customers drop out.",
        },
      },
      {
        heading: "Asynchronous and Redirect Payment Methods",
        body: [
          "Bank transfers, many regional wallets and redirect-based methods confirm minutes or hours later. Create the order in a pending state, reserve stock with an expiry, confirm via webhook and send a clear confirmation when payment arrives. Decide what happens if it never arrives: cancel after a time limit, release stock and notify the customer. Do not treat the shopper returning to your site as proof of payment.",
        ],
      },
      {
        heading: "Integration Bugs That Look Like Declines",
        body: [
          "Some 'declines' are your own bugs: amounts sent in the wrong unit (cents versus whole currency), unsupported currency for the merchant account, missing billing data your provider requires, expired payment sessions, or tokens created in test mode used in production. Log the provider's full response code and message for every failure, and review the top codes regularly.",
        ],
      },
      {
        heading: "Monitoring and Alerting",
        body: [],
        checklist: [
          "Authorization rate overall and by method, provider, card country, device and amount band",
          "Top decline codes and how they change over time",
          "Timeout and provider error rates",
          "3DS challenge, success and abandonment rates",
          "Unknown-outcome counts and how long they take to resolve",
          "Alerts for sudden drops, linked to deploys and provider status",
        ],
      },
      {
        heading: "Trade-offs in Failure Handling",
        body: [
          "Every recovery tactic has a cost. Automatic retries recover some temporary failures but can trigger issuer fraud flags and network retry limits. Detailed decline messages help honest shoppers fix mistakes but can help fraudsters test cards. Holding orders in an 'unknown' state protects against double charges but delays confirmation for a small number of customers. Routing a decline to a second provider may recover the sale but adds latency and, sometimes, a second authentication. Decide these trade-offs deliberately and write them down, so engineering, support and finance apply the same rules.",
        ],
      },
      {
        heading: "How to Improve Failure Handling Step by Step",
        body: [],
        checklist: [
          "**1. Export decline and error codes** for the last few months and group them by type",
          "**2. Add idempotency keys** to every payment, capture and refund call",
          "**3. Implement an unknown-outcome state** with status lookup and webhook confirmation",
          "**4. Rewrite shopper messages** per failure type, and keep the cart intact",
          "**5. Offer alternatives on decline:** another card, wallets, PayPal or local methods",
          "**6. Add rate limits and bot protection** to payment endpoints to stop card testing; see [[/blogs/ecommerce-fraud-detection|fraud detection]]",
          "**7. Handle authentication failures** as recoverable; see [[/blogs/3d-secure-ecommerce|3D Secure]]",
          "**8. Build a dashboard and alerts** for authorization rate and top codes",
          "**9. Review monthly** with payments, support and engineering together",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a home goods store sees occasional duplicate charges. Investigation shows the checkout retries the payment call on timeout without an idempotency key. The team adds keys tied to the order and attempt number, replaces the automatic retry with a status lookup, and shows a 'confirming your payment' state. Duplicate charges stop, and support tickets about double payments disappear.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Retrying timeouts without idempotency keys",
          "Telling shoppers a payment failed when the outcome is unknown",
          "Retrying hard declines",
          "Showing raw provider error text",
          "Clearing the cart after a decline",
          "Treating the redirect return as payment confirmation",
          "No monitoring of decline codes",
        ],
        cta: {
          title: "Want a checkout that handles failure as well as success?",
          description: "Talk to ZSpace Labs about [[/services/website-development|payment integration hardening]], a [[/services/cro-audit|checkout CRO audit]] or [[/services/shopify-development|Shopify checkout improvements]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Payment failures are normal; mishandling them is optional. Classify outcomes, use idempotency keys, check before retrying, limit retries to soft declines, write safe and useful messages, confirm asynchronous methods by webhook and monitor decline patterns. Related: [[/blogs/ecommerce-payment-routing|payment routing]], [[/blogs/3d-secure-ecommerce|3D Secure]] and [[/blogs/ecommerce-recurring-payments|recurring payments]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 536 · RECURRING PAYMENTS
  {
    slug: "ecommerce-recurring-payments",
    title: "Ecommerce Recurring Payments: How to Build Reliable Billing Experiences",
    seoTitle: "Ecommerce Recurring Payments: Stored Credentials, MIT and Dunning",
    excerpt:
      "How recurring card payments work in ecommerce: customer- and merchant-initiated transactions, stored credentials, network tokens, account updater, SCA, retries, dunning, webhooks and customer communication.",
    category: "Web Development",
    banner: "recurringpayments",
    bannerAlt:
      "Recurring card payments in four columns: setup as a customer-initiated transaction (consent and terms, authenticate, network transaction ID, agreement record), storage (provider token, network token, account updater, expiry tracking), renewals as merchant-initiated transactions highlighted (scheduled charge, MIT flags, idempotency, webhooks) and recovery (smart retries, customer email, update method, grace period).",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "ai-automation"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "saas-technology"],
    relatedSlugs: ["subscription-billing-architecture", "ecommerce-payment-failure-handling", "subscription-ecommerce-retention"],
    faqs: [
      { q: "What is a recurring payment in ecommerce?", a: "A payment taken automatically on a schedule, such as a subscription renewal or instalment, using a payment credential the customer agreed to store for that purpose." },
      { q: "What are CIT and MIT?", a: "A customer-initiated transaction (CIT) is one the customer takes part in, such as the first checkout. A merchant-initiated transaction (MIT) is one the merchant takes later under an agreement, such as a renewal. Renewals are MITs that reference the original CIT." },
      { q: "Do recurring payments need 3D Secure every time?", a: "In regions with strong customer authentication rules such as the EEA and UK, the first payment that sets up the agreement usually needs authentication. Later merchant-initiated renewals are generally out of scope, though an issuer can still request authentication." },
      { q: "What is a network token?", a: "A token issued by a card network in place of the card number. It can stay valid when the physical card is reissued, which can reduce declines from expired or replaced cards." },
      { q: "What is an account updater?", a: "A card network service, accessed through your payment provider, that supplies updated card details when a stored card is reissued or expires, so renewals do not fail on outdated credentials." },
      { q: "What is dunning?", a: "The process of recovering failed recurring payments through scheduled retries and customer messages asking them to update their payment method." },
      { q: "How often should we retry a failed renewal?", a: "A few attempts spread over days, timed around common pay cycles, within card network limits. Many providers offer automated retry schedules based on their data." },
      { q: "Should we stop a subscription after a failed payment?", a: "Not immediately. Use a grace period with retries and reminders, then pause or cancel with a clear message and an easy way to restart." },
      { q: "What should customers be told before a renewal?", a: "At minimum what your terms and local consumer rules require, and in practice a reminder before renewals, especially for annual plans, price changes or trials converting to paid." },
      { q: "Can we move stored cards to a new payment provider?", a: "Usually through a secure card data migration between PCI-compliant providers, arranged by both providers. Agreement references may not carry over, so plan and test the migration." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Recurring payments start with a customer-initiated transaction where the customer agrees to stored-credential terms and, where required, authenticates with 3D Secure. The provider returns a reusable token and a network transaction reference. Each renewal is a merchant-initiated transaction that references that agreement, sent with an idempotency key and confirmed by webhook. Network tokens and account updater keep stored cards current. Failed renewals go through a dunning process: classified retries over several days, customer messages with a secure update link and a grace period before pausing.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "This guide covers the card payment layer. The billing engine that decides what to charge and when (invoices, proration, schedules) is in [[/blogs/subscription-billing-architecture|subscription billing architecture]]. The commercial side of subscriptions is in [[/blogs/subscription-ecommerce-website|subscription ecommerce development]], and churn reduction in [[/blogs/subscription-ecommerce-retention|subscription retention]].",
        ],
      },
      {
        heading: "Customer-Initiated vs Merchant-Initiated Transactions",
        body: [
          "Card networks distinguish payments the customer takes part in from those the merchant initiates under an agreement. The distinction affects authentication rules, how issuers assess risk and how disputes are judged.",
        ],
        table: {
          headers: ["", "Customer-initiated (CIT)", "Merchant-initiated (MIT)"],
          rows: [
            ["Example", "First subscription checkout, one-off purchase with saved card", "Monthly renewal, instalment, delayed charge"],
            ["Customer present?", "Yes", "No"],
            ["Authentication", "May be required (for example SCA in the EEA and UK)", "Generally out of scope for SCA; issuer may still decline"],
            ["Data sent", "Consent to store credential, card or token", "Reference to the original agreement and network transaction ID"],
            ["Recorded where", "Your agreement record and provider", "Linked to the original CIT"],
          ],
        },
      },
      {
        heading: "Setting Up the Agreement",
        body: [
          "The first payment matters most. Show the recurring terms clearly before payment: amount or how it is calculated, frequency, start date, how to cancel and any trial conversion. Capture explicit consent, store the terms version and timestamp, and tell your provider the credential is being saved for recurring use. In regions with strong customer authentication, authenticate this payment; Stripe's [[https://stripe.com/guides/strong-customer-authentication|SCA guide]] explains how merchant-initiated renewals relate to the first authenticated payment.",
          "If the first payment is a free trial, you still need a setup flow that stores the credential with authentication, because there is no charge to authenticate later without the customer present.",
        ],
      },
      {
        heading: "Storing Credentials: Tokens, Network Tokens and Updaters",
        body: [
          "Your system stores a provider token, never the card number. Two network services reduce failures from outdated cards. **Network tokens** replace the card number with a token issued by the card network, which can survive card reissue. **Account updater** services supply new card details when a stored card is replaced or expires. Both are usually enabled through your payment provider rather than integrated directly. Ask your provider which are on by default and how updates are reported to you.",
        ],
      },
      {
        heading: "Charging Renewals",
        body: [
          "Renewals should be predictable jobs. The billing engine decides an amount is due; the payment service creates a merchant-initiated charge with the stored token and agreement reference, using an idempotency key derived from the invoice so a rerun cannot double charge. The webhook confirms the outcome, and only then does the subscription advance and the order get created.",
        ],
        code: {
          label: "Example: renewal charge job (pseudocode)",
          text: "for invoice in invoices.due_now(limit = 500):\n  key = \"invoice-\" + invoice.id + \"-attempt-\" + invoice.attempt\n  provider.charge(\n    token = invoice.subscription.payment_token,\n    amount = invoice.total, currency = invoice.currency,\n    off_session = true,                 // merchant-initiated\n    idempotency_key = key)\n  invoice.mark(\"payment_pending\")       // final state comes from the webhook",
        },
      },
      {
        heading: "Retries and Dunning",
        body: [
          "Renewals fail more often than checkout payments because the customer is not there to fix things. Classify the decline first: hard declines need a new card, soft declines may succeed later. Spread retries over days, not minutes, and stay within card network retry limits. Providers such as Stripe offer [[https://docs.stripe.com/billing/revenue-recovery/smart-retries|automated retry scheduling]] based on their transaction data.",
          "Pair retries with communication: an email or SMS explaining the payment did not go through, with a secure link to update the payment method without logging in through several screens. Give a grace period during which the subscription stays active or paused rather than cancelled, and say exactly what happens and when.",
        ],
        diagram: {
          variant: "dunningflow",
          alt: "Dunning flow: renewal due, charge as merchant-initiated transaction, declined, retry schedule (highlighted), notify with update link, recover or pause.",
          caption: "Recovery comes from good timing and an easy update link, not from charging the same card again and again.",
        },
        cta: {
          title: "Renewals failing more than they should?",
          description: "ZSpace Labs can review your stored-credential setup, retry logic and dunning messages, and wire network token and updater support through your provider.",
        },
      },
      {
        heading: "When Authentication Is Requested on a Renewal",
        body: [
          "Even when renewals are out of scope for strong authentication, an issuer may decline with a code asking for the customer to authenticate. You cannot authenticate without the customer, so treat this as a recovery case: email the customer a link to a page where they confirm the payment, complete 3D Secure and resume the subscription. See [[/blogs/3d-secure-ecommerce|3D Secure in ecommerce]].",
        ],
      },
      {
        heading: "Customer Communication",
        body: [],
        checklist: [
          "Receipt for every successful renewal",
          "Reminder before annual renewals, trial conversions and price changes, and whatever notice local rules require",
          "Clear failure message with a one-step update link",
          "Notice before the subscription is paused or cancelled for non-payment",
          "Self-service payment method updates in the [[/blogs/subscription-management-portal|subscription portal]]",
          "Plain-language billing descriptor so customers recognise the charge",
        ],
      },
      {
        heading: "Disputes on Recurring Payments",
        body: [
          "Customers who forget a subscription or cannot cancel easily often dispute the charge instead. Clear terms, reminders, recognisable descriptors and easy cancellation reduce these disputes. Keep evidence for each renewal: the original consent, terms version, authentication result, reminders sent and usage or shipment records. See [[/blogs/ecommerce-chargeback-management|chargeback management]].",
        ],
      },
      {
        heading: "Monitoring",
        body: [],
        checklist: [
          "Renewal success rate on first attempt and after retries",
          "Decline codes for renewals versus checkout",
          "Recovery rate and time to recovery",
          "Share of cards updated by account updater or network tokens",
          "Involuntary churn: subscriptions ended by failed payment",
          "Disputes per thousand renewals",
        ],
      },
      {
        heading: "Trade-offs in Recurring Payment Design",
        body: [
          "Recurring payments involve choices with real costs on both sides. Longer grace periods recover more subscribers but ship goods to people who may never pay. Aggressive retry schedules recover more revenue in the short term but can breach network limits and annoy issuers. Annual plans reduce the number of renewals that can fail but make each failure, and each dispute, larger. Charging just before shipment keeps billing aligned with fulfilment, while charging earlier gives more time to recover failures before the box goes out. Choose deliberately per product and document the policy.",
        ],
      },
      {
        heading: "How to Set Up Recurring Payments Step by Step",
        body: [],
        checklist: [
          "**1. Write the recurring terms** and the consent wording shown at checkout",
          "**2. Configure the setup payment** to save the credential for recurring use, with authentication where required",
          "**3. Store agreement records:** consent, terms version, network transaction reference and token",
          "**4. Enable network tokens and account updater** through your provider where available",
          "**5. Build idempotent renewal jobs** driven by the [[/blogs/subscription-billing-architecture|billing engine]]",
          "**6. Process webhooks** to finalize renewals and trigger orders",
          "**7. Design dunning:** retry schedule, messages, update link and grace period",
          "**8. Add pre-renewal reminders** where needed and a clear descriptor",
          "**9. Monitor renewal success, recovery and involuntary churn** monthly",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a coffee subscription retries failed renewals three times in one day and then cancels. Many customers simply had a new card. The team enables account updater through its provider, spreads retries over ten days, sends a short email with a secure update link after the first failure and pauses rather than cancels at the end. Involuntary churn drops, and reactivations come mostly from the update link.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Saving cards without recording consent and terms",
          "No authentication on the setup payment where required",
          "Renewals without idempotency keys",
          "Retrying many times within hours",
          "Cancelling on the first failure",
          "Update links that require a full login journey",
          "Unrecognisable billing descriptors",
        ],
        cta: {
          title: "Building or fixing recurring billing?",
          description: "Talk to ZSpace Labs about [[/services/website-development|recurring payment integration]], [[/services/shopify-development|Shopify subscription setups]] and [[/services/ai-automation|dunning automation]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Reliable recurring payments come from a well-formed first payment, current stored credentials, idempotent renewals, patient retries and clear communication. Related: [[/blogs/subscription-billing-architecture|subscription billing architecture]], [[/blogs/ecommerce-payment-failure-handling|payment failure handling]] and [[/blogs/subscription-management-portal|subscription management portal]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 539 · 3D SECURE
  {
    slug: "3d-secure-ecommerce",
    title: "3D Secure Authentication in Ecommerce: How It Works and When to Use It",
    seoTitle: "3D Secure (3DS2) in Ecommerce: Flows, SCA, Exemptions, UX",
    excerpt:
      "How 3D Secure works in ecommerce: EMV 3DS frictionless and challenge flows, strong customer authentication, exemptions, liability shift, integration steps, checkout UX and how to measure it.",
    category: "Web Development",
    banner: "threedsflow",
    bannerAlt:
      "3D Secure flow: checkout data, device data, authentication request, issuer risk check, frictionless or challenge outcome (highlighted), then authorization with the authentication result; liability shift depends on outcome, network and region.",
    date: "2026-10-02",
    readingTime: "8 min read",
    relatedServiceSlugs: ["website-development", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "fintech", "retail"],
    relatedSlugs: ["ecommerce-fraud-detection", "ecommerce-payment-failure-handling", "ecommerce-recurring-payments"],
    faqs: [
      { q: "What is 3D Secure?", a: "A card authentication protocol that lets the card issuer verify the cardholder during an online payment, either silently using device and transaction data or by asking the cardholder to confirm through a one-time code or banking app." },
      { q: "What is the difference between 3DS1 and 3DS2?", a: "3DS2, specified by EMVCo as EMV 3-D Secure, sends far more data to the issuer, supports frictionless authentication without customer input, and works in apps as well as browsers. The older 3DS1 relied on static passwords and redirects and has been retired by the major networks." },
      { q: "What is a frictionless flow?", a: "An authentication where the issuer approves based on the data it receives without asking the cardholder to do anything." },
      { q: "What is a challenge flow?", a: "An authentication where the issuer asks the cardholder to confirm, usually in their banking app or with a one-time passcode." },
      { q: "Is 3D Secure mandatory?", a: "In the EEA and UK, strong customer authentication rules mean most customer-initiated online card payments need it unless an exemption applies. Elsewhere it is generally optional, though some issuers, markets and payment types require or encourage it." },
      { q: "What is liability shift?", a: "When a payment is successfully authenticated with 3DS, liability for certain fraud-related chargebacks usually moves from the merchant to the issuer. Conditions vary by network and region." },
      { q: "What are SCA exemptions?", a: "Cases where strong authentication may not be required, such as low-value payments, low-risk transactions assessed by the acquirer or issuer, and trusted beneficiaries. Merchant-initiated transactions are out of scope. The issuer can still require authentication." },
      { q: "Does 3D Secure hurt conversion?", a: "Challenges add a step and some shoppers abandon. Frictionless rates are improved by sending complete data, and requesting authentication only where needed outside mandatory regions balances fraud and conversion." },
      { q: "Should we use 3DS outside Europe?", a: "Selectively. Many merchants trigger it for higher-risk transactions flagged by fraud tools, which can reduce fraud chargebacks without adding friction to every order." },
      { q: "How do we implement 3D Secure?", a: "Through your payment provider's SDK or API, which runs the authentication, handles the challenge window and passes the result to authorization. Few merchants integrate a 3DS server directly." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "3D Secure lets the card issuer authenticate the cardholder during an online payment. Modern EMV 3DS sends transaction and device data to the issuer, which either approves silently (frictionless) or asks the cardholder to confirm in their banking app or with a code (challenge). Successful authentication usually shifts liability for fraud chargebacks to the issuer. In the EEA and UK it is generally required for customer-initiated payments unless an exemption applies; elsewhere, use it selectively for higher-risk transactions. Implement it through your payment provider and send complete data to maximize frictionless approvals.",
        ],
      },
      {
        heading: "Where This Fits",
        body: [
          "3DS is one control in a wider fraud strategy covered in [[/blogs/ecommerce-fraud-detection|ecommerce fraud detection]]. Failed authentication is a payment failure type covered in [[/blogs/ecommerce-payment-failure-handling|payment failure handling]], and its role in subscriptions is in [[/blogs/ecommerce-recurring-payments|recurring payments]]. Regional rules are summarized in [[/blogs/international-ecommerce-payments|international payments]].",
        ],
      },
      {
        heading: "How 3D Secure Works",
        body: [
          "Three parties take part. The merchant side (your provider's 3DS server) gathers transaction and device data. The card network's directory server routes the request to the right issuer. The issuer's access control server assesses risk and decides whether to approve or challenge. The result, including a cryptographic authentication value, is then sent with the authorization request.",
          "[[https://www.emvco.com/emv-technologies/3-d-secure/|EMVCo maintains the EMV 3-D Secure specification]], which supports browser and in-app flows and much richer data than the original protocol.",
        ],
        diagram: {
          variant: "threedscompare",
          alt: "Comparison of frictionless, challenge and exemption outcomes (frictionless highlighted) by what the shopper sees, who decides, data needed and typical liability.",
          caption: "Liability outcomes are typical, not universal; network rules and region decide the specifics.",
        },
      },
      {
        heading: "Frictionless vs Challenge Flows",
        body: [
          "In a **frictionless** flow, the issuer approves based on the data it receives and the shopper sees nothing extra. In a **challenge** flow, the issuer asks the shopper to confirm, usually through a banking app notification, a one-time passcode or biometrics in the app. The share of frictionless approvals depends heavily on data quality: complete billing and shipping addresses, email, phone, device data and account history all help the issuer decide without asking.",
        ],
      },
      {
        heading: "Strong Customer Authentication and Exemptions",
        body: [
          "Under PSD2 in the EEA and the equivalent UK rules, most customer-initiated electronic payments require strong customer authentication, which 3DS provides for cards. Some transactions can be exempted or are out of scope, as summarized in [[https://stripe.com/guides/strong-customer-authentication|Stripe's SCA guide]]:",
        ],
        checklist: [
          "**Low-value payments:** under €30, with cumulative limits after which authentication is required",
          "**Transaction risk analysis:** low-risk transactions where the acquirer or issuer meets fraud-rate thresholds",
          "**Trusted beneficiaries:** where the customer has whitelisted the merchant with their bank, if the issuer supports it",
          "**Merchant-initiated transactions:** out of scope once the agreement was set up with authentication",
          "**Secure corporate payments:** certain dedicated business payment processes",
        ],
        callout: {
          type: "note",
          text: "An exemption is a request, not a guarantee. The issuer can decline and ask for authentication, so your integration must be able to run 3DS when a soft decline asks for it. Liability for fraud on exempted payments usually stays with whoever requested the exemption.",
        },
      },
      {
        heading: "Liability Shift",
        body: [
          "When a payment is successfully authenticated, liability for certain fraud-related chargebacks usually shifts to the issuer. That makes 3DS useful outside mandatory regions for high-risk orders. It does not cover non-fraud disputes such as 'item not received' or 'not as described', and conditions vary by network, region and outcome. Check your acquirer's rules rather than assuming every authenticated payment is protected.",
        ],
        cta: {
          title: "Balancing 3DS, fraud and conversion?",
          description: "ZSpace Labs can configure risk-based authentication through your provider and measure challenge rates, approvals and fraud by segment.",
        },
      },
      {
        heading: "Integrating 3DS Through Your Provider",
        body: [
          "Most merchants use their payment provider's 3DS support rather than certifying their own 3DS server. Modern provider APIs handle it inside the payment flow: if authentication is needed, the payment moves to a state such as 'requires action', your front end displays the challenge using the provider's SDK, and the payment continues once the shopper completes it. [[https://docs.adyen.com/online-payments/3d-secure|Adyen's 3D Secure documentation]] and Stripe's payment lifecycle documentation describe these flows.",
        ],
        checklist: [
          "Send complete data: billing and shipping address, email, phone, account age where supported",
          "Use the provider's SDK for device data collection and challenge display",
          "Show challenges in a modal or inline frame sized for mobile, not a full redirect, where the provider supports it",
          "Handle abandoned or failed challenges as recoverable failures",
          "Store the authentication result with the payment for disputes",
          "Support authentication requests after exemption declines",
        ],
      },
      {
        heading: "Checkout UX for Challenges",
        body: [
          "Prepare shoppers for the challenge. A short line before payment ('Your bank may ask you to confirm this payment') reduces surprise. Keep the challenge inside your checkout on mobile, avoid timing out the session while the shopper switches to their banking app, and return them to a clear state afterwards. If authentication fails, keep the cart and offer another payment method. Device wallets often avoid a separate challenge; see [[/blogs/ecommerce-digital-wallet-integration|digital wallet integration]].",
        ],
      },
      {
        heading: "When to Use 3DS Outside Mandatory Regions",
        body: [
          "Where 3DS is optional, applying it to every order adds friction and may lower conversion. A common pattern is risk-based: your fraud tool scores the order, low-risk orders proceed without 3DS, higher-risk orders are authenticated, and very high-risk orders are declined or reviewed. Measure the combined effect on conversion, fraud chargebacks and manual review workload.",
        ],
      },
      {
        heading: "Measuring 3DS Performance",
        body: [],
        checklist: [
          "Share of payments sent to 3DS and share exempted",
          "Frictionless rate versus challenge rate, by issuer country and card brand",
          "Challenge completion and abandonment rates",
          "Authorization rate after successful authentication",
          "Fraud chargebacks on authenticated versus non-authenticated payments",
          "Checkout conversion with and without 3DS for comparable traffic",
        ],
      },
      {
        heading: "Advantages and Limitations of 3D Secure",
        body: [],
        table: {
          headers: ["Advantages", "Limitations"],
          rows: [
            ["Meets strong authentication rules in the EEA and UK", "Challenges add a step and some shoppers abandon"],
            ["Usually shifts fraud chargeback liability to the issuer", "Does not cover non-fraud disputes or friendly fraud"],
            ["Rich data lets issuers approve more payments silently", "Frictionless rates depend on data your checkout may not send"],
            ["Can be applied selectively by risk elsewhere", "Issuer support and behaviour vary by market"],
            ["Supported by mainstream providers out of the box", "Exemptions shift liability back to the requester"],
          ],
        },
      },
      {
        heading: "How to Implement 3DS Step by Step",
        body: [],
        checklist: [
          "**1. Confirm requirements** for each market you sell into, with your acquirer",
          "**2. Use your provider's current payment API** that handles authentication inside the payment flow",
          "**3. Send complete data** in every authentication request",
          "**4. Build the challenge UI** inline or modal, tested on mobile and with banking app switches",
          "**5. Handle 'requires action' and soft declines** asking for authentication",
          "**6. Decide your exemption and risk strategy** with your provider and [[/blogs/ecommerce-fraud-detection|fraud tools]]",
          "**7. Store authentication results** with each payment for [[/blogs/ecommerce-chargeback-management|dispute evidence]]",
          "**8. Measure frictionless, challenge and abandonment rates** by issuer country",
        ],
      },
      {
        heading: "Worked Example",
        body: [
          "An illustrative scenario, not a client case: a UK fashion retailer sees a high challenge rate. Investigation shows its checkout sends no shipping address or phone number in the authentication request. After passing complete data through the provider's API and moving the challenge into an inline modal on mobile, the frictionless share rises and fewer shoppers abandon at authentication.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Sending minimal data and getting more challenges",
          "Full-page redirects that lose mobile shoppers",
          "Treating exemptions as guaranteed",
          "No path for authentication requested after a soft decline",
          "Applying 3DS to every order where it is optional, without measuring",
          "Assuming liability shift covers non-fraud disputes",
        ],
        cta: {
          title: "Need 3DS that protects revenue without adding friction?",
          description: "Talk to ZSpace Labs about [[/services/website-development|payment and authentication integration]], [[/services/shopify-development|Shopify payment configuration]] or a [[/services/cro-audit|checkout audit]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "3D Secure is a tool for shifting fraud liability and meeting authentication rules. Implement it through your provider, send complete data, keep challenges smooth on mobile, use exemptions and risk-based triggering thoughtfully, and measure frictionless rates and conversion. Related: [[/blogs/ecommerce-fraud-detection|fraud detection]], [[/blogs/ecommerce-chargeback-management|chargeback management]] and [[/blogs/ecommerce-payment-security|payment security]].",
        ],
      },
    ],
  },
];
