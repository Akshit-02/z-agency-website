import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch five, part three: subscription product
 * pages, subscription checkout and subscription management portals. The
 * subscription build hub is `subscription-ecommerce-website`. Merged into
 * `posts` in blog-data.ts.
 */

export const commercePosts35: BlogPost[] = [
  // --------------------------------------- 223 · SUBSCRIPTION PRODUCT PAGE
  {
    slug: "subscription-product-page-design",
    title: "Subscription Product Page Design: How to Present Recurring Plans",
    seoTitle: "Subscription Product Page Design: Presenting Recurring Plans",
    excerpt: "How to design subscription product pages: one-time vs subscribe, frequency, price clarity, honest savings, shipping, cancellation info and the CTA.",
    category: "UI/UX",
    banner: "subpdp",
    bannerAlt:
      "Subscription product page elements in four columns: purchase choice (one-time, subscribe, price per delivery, saving shown honestly), plan details (frequency, quantity per delivery, first charge date, renewal price, highlighted), reassurance (skip, pause or cancel, how to manage, shipping per order, terms link) and action (one primary button, a label that says what happens, a summary before checkout, no pre-selected upsell).",
    date: "2026-09-29",
    readingTime: "17 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "beauty-personal-care", "food-beverage"],
    faqs: [
      { q: "How should a subscription option appear on a product page?", a: "As a clear choice next to one-time purchase, with the subscription price per delivery, the saving compared with one-time, frequency options, a note on how to skip, pause or cancel, and a link to terms." },
      { q: "Should subscribe be pre-selected?", a: "Pre-selection makes accidental subscriptions more likely and can create complaints and chargebacks. If you default to subscribe, make both options equally visible and the recurring nature unmistakable. Consumer rules on pre-selection and consent vary by market." },
      { q: "How should the subscription saving be shown?", a: "As a specific amount or percentage against the real one-time price, next to both prices. Avoid savings calculated against inflated reference prices." },
      { q: "How many frequency options should I offer?", a: "Enough to match typical usage, usually two to four, with a sensible default based on how long the product lasts. Too many options slow decisions." },
      { q: "Should shipping costs be shown on the product page?", a: "Yes, if they apply per delivery. A subscription that looks cheaper than one-time purchase but adds shipping each time can feel misleading." },
      { q: "What should the add-to-cart button say for subscriptions?", a: "Something that describes the action, such as “Subscribe: every 4 weeks” or “Add subscription to cart”, so shoppers know they're choosing a recurring purchase." },
      { q: "Where should cancellation information go?", a: "Next to the purchase choice, in one short line (for example “Skip, pause or cancel anytime in your account”), with details in the terms and FAQ." },
      { q: "Do intro offers need special treatment?", a: "Yes. If the first order is discounted, show the first price and the ongoing renewal price clearly, and when the renewal price starts." },
      { q: "How do subscription options work on mobile?", a: "Use two large, clearly labelled options with prices, a frequency selector below the selected option, and the recurring summary near the sticky add-to-cart button." },
      { q: "How is this different from subscription pricing design?", a: "This guide covers how plans are presented on the product page. The pricing guide covers how to structure plans, prices and savings in the first place." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A subscription product page should let shoppers understand what they'll receive, how often and how much before they click. Show one-time purchase and subscription as an equal, clear choice; state the price per delivery and an honest saving; offer a few frequencies with a default that matches typical usage; show shipping per delivery, the first charge date and any change after an intro offer; add one line on skipping, pausing and cancelling with a terms link; and use a button label that describes the recurring action. Test on mobile, where the choice competes for space.",
        ],
      },
      {
        heading: "What Shoppers Need to Decide",
        body: [
          "A subscription is a bigger commitment than a single purchase. Shoppers weigh four questions: is this product worth receiving repeatedly, how much will it cost each time, how often will it arrive, and can I change my mind. A product page that answers all four near the purchase buttons converts subscription intent into subscriptions without surprises later. The diagram above groups the elements into the purchase choice, plan details, reassurance and the action itself.",
          "For the full subscription experience beyond the product page, see [[/blogs/ecommerce-subscription-ux|subscription ecommerce UX]].",
        ],
      },
      {
        heading: "The Purchase Choice",
        body: [
          "Present one-time and subscription as two options of equal visual weight, each with its price. Radio-style cards work well: “One-time purchase: £24” and “Subscribe & save 10%: £21.60 per delivery”. Show the subscription benefit in concrete terms and keep the one-time option genuinely available. Hiding it or making it harder to select erodes trust and can create complaints.",
        ],
        table: {
          headers: ["Element", "Good practice", "Avoid"],
          rows: [
            ["Layout", "Two clearly labelled options", "Subscription as a small checkbox"],
            ["Prices", "Price on each option", "Only the subscription price visible"],
            ["Saving", "Amount or % vs actual one-time price", "Savings vs inflated compare-at prices"],
            ["Default", "No default, or clear visible default", "Pre-selected subscribe that shoppers miss"],
            ["Benefits", "Concrete (price, free delivery, perks)", "Vague “VIP” language"],
          ],
        },
      },
      {
        heading: "Frequency and Quantity",
        body: [
          "Base frequency options on how long the product lasts. A 250 g bag of coffee used daily might suggest two, three or four weeks; a supplement with 60 capsules taken twice daily suggests monthly. Show the default as a recommendation (“Most customers choose every 4 weeks”) only if it's true. If quantity per delivery varies, show the price per delivery as quantity changes.",
        ],
        callout: {
          type: "tip",
          text: "Tell shoppers how you chose the suggested frequency, for example “Based on 1 cup a day”. It helps them adjust rather than guess, and reduces early skips and cancellations.",
        },
      },
      {
        heading: "Price Clarity",
        body: [
          "Every recurring price shown should be the amount the customer will actually pay per delivery. If the first order has an intro discount, show both the first price and the renewal price and when it applies. If shipping is charged per delivery, say so near the price. If prices include or exclude tax, follow the conventions of the market. See [[/blogs/subscription-ecommerce-pricing|subscription ecommerce pricing]].",
        ],
        table: {
          headers: ["Situation", "What to show"],
          rows: [
            ["Simple subscription", "Price per delivery and saving vs one-time"],
            ["Intro offer", "First order price, then renewal price and from when"],
            ["Shipping per delivery", "Shipping cost or free-shipping threshold"],
            ["Prepaid plan", "Total charged now, deliveries included, per-delivery equivalent"],
            ["Quantity tiers", "Price per unit and per delivery"],
          ],
        },
      },
      {
        heading: "Reassurance: Control and Terms",
        body: [
          "The fear that stops most subscriptions is being locked in. Answer it next to the choice: “Skip, pause or cancel anytime from your account”, if true, and link to the terms. Mention when customers are charged and whether they'll get a reminder before renewals. Don't promise flexibility the portal doesn't deliver; customers will test it. See [[/blogs/subscription-management-portal|subscription management portal]].",
        ],
        cta: {
          title: "Subscription option not getting chosen, or getting chosen by accident?",
          description: "ZSpace designs subscription product pages that make the recurring choice clear and honest.",
        },
      },
      {
        heading: "The Call to Action",
        body: [
          "The button label should reflect the choice: “Add to cart” for one-time, “Subscribe” or “Add subscription to cart” for recurring. Near the button, restate the summary: “Every 4 weeks · £21.60 per delivery · First charge today”. On mobile, keep that summary visible with the sticky add-to-cart button. Avoid adding upsells between the choice and the button.",
        ],
      },
      {
        heading: "Variants, Bundles and Multiple Subscriptions",
        body: [
          "When products have variants (flavours, sizes), selecting a variant should update both one-time and subscription prices. For bundles or build-a-box subscriptions, show what's included, whether contents change, and how customers can swap items later. If customers can hold several subscriptions, make sure the cart and account clearly separate them.",
        ],
      },
      {
        heading: "Where Subscription Information Appears Beyond the Buttons",
        body: [],
        table: {
          headers: ["Location", "Content"],
          rows: [
            ["Near purchase options", "Choice, price, saving, frequency, control note"],
            ["Product details or FAQ", "How subscriptions work, delivery schedule, managing, cancellation"],
            ["Cart", "Subscription line with frequency and renewal price"],
            ["Checkout", "Recurring terms and consent before payment"],
            ["Confirmation", "Summary, next charge date, portal link"],
          ],
        },
      },
      {
        heading: "Mobile Layout",
        body: [
          "On a phone the purchase area must fit the choice, the frequency selector and the button without pushing essential text out of view. Use full-width option cards, show the frequency selector only for the selected subscription option, and keep the recurring summary above or inside the sticky button area. Test with real prices and long product names. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Accessibility",
        body: [
          "Use a real radio group for the purchase choice, with labels that include the price and recurring nature (“Subscribe, every 4 weeks, £21.60 per delivery”), so screen reader users hear the full choice. Make frequency selectors keyboard accessible and announce price changes. See [[/blogs/website-accessibility-guide|website accessibility]].",
        ],
      },
      {
        heading: "Worked Example: A Coffee Product Page",
        body: [
          "An illustrative scenario: a roaster sells 250 g bags. The purchase area shows two cards: one-time at £12, and subscribe at £10.80 per delivery with free delivery on subscriptions. Selecting subscribe reveals frequencies of every 2, 3 or 4 weeks, with the note “Based on about 2 cups a day, most people choose every 3 weeks”. Below: “Skip, pause or cancel anytime in your account. We'll email you 3 days before each order.” The button reads “Subscribe: every 3 weeks”. The team tracks subscription take-up, early cancellations and support contacts about unexpected charges.",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Subscribe pre-selected with the one-time option hidden",
          "Savings calculated against inflated prices",
          "Renewal price different from the first price without saying so",
          "Shipping per delivery hidden until checkout",
          "No information on how to skip or cancel",
          "Button labels that don't mention the subscription",
          "Frequency defaults that don't match usage",
        ],
      },
      {
        heading: "Product Page Checklist",
        body: [],
        checklist: [
          "One-time and subscription shown as equal options with prices",
          "Honest saving shown against the real one-time price",
          "Frequencies based on usage, with an explained default",
          "Price per delivery, shipping and renewal price clear",
          "One line on control plus a terms link",
          "Descriptive button label and recurring summary",
          "Works on mobile and with screen readers",
        ],
        cta: {
          title: "Ready to redesign your subscription product pages?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|subscription UX]], [[/services/cro-audit|subscription CRO]] and [[/services/shopify-development|Shopify subscription setup]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good subscription product page is transparent: what, how often, how much and how to change it, all visible before the click. That clarity attracts subscribers who stay. For what happens after the click, see [[/blogs/ecommerce-subscription-checkout|ecommerce subscription checkout]].",
        ],
      },
    ],
  },

  // ----------------------------------------- 224 · SUBSCRIPTION CHECKOUT
  {
    slug: "ecommerce-subscription-checkout",
    title: "Ecommerce Subscription Checkout: How to Reduce Subscription Abandonment",
    seoTitle: "Subscription Checkout: How to Reduce Abandonment",
    excerpt: "How to design a subscription checkout: recurring terms and consent, accounts, payment methods that renew, shipping, taxes, errors and confirmation.",
    category: "UI/UX",
    banner: "subcheckoutflow",
    bannerAlt: "Subscription checkout flow: plan in cart, account or sign in, address and delivery, stored payment for renewals, recurring terms (highlighted), confirmation; declined payments keep entered data and let the customer retry.",
    date: "2026-09-29",
    updated: "2026-09-30",
    readingTime: "14 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce"],
    faqs: [
      { q: "How is a subscription checkout different from a normal checkout?", a: "It must store a payment method for future charges, explain the recurring terms and get the customer's agreement, and usually link the purchase to an account so the customer can manage the subscription later." },
      { q: "Do subscribers need to create an account?", a: "They need some way to manage the subscription later. That can be a full account, passwordless sign-in by email link, or account creation completed automatically after checkout. Forcing a long registration before payment adds friction." },
      { q: "Which payment methods work for subscriptions?", a: "Methods that support stored credentials and merchant-initiated renewals, typically cards and some wallets and local methods. Support varies by payment provider, platform and market, so check before promising a method." },
      { q: "What should customers agree to at checkout?", a: "The product and frequency, the price per renewal and when it changes, when they'll be charged, how to cancel and where the full terms are. Many jurisdictions have specific disclosure and consent requirements for automatic renewals." },
      { q: "Should the terms checkbox be pre-ticked?", a: "No. Where explicit consent is expected, it should be an active choice. Check the rules in each market you sell to." },
      { q: "How should taxes be shown in subscription checkout?", a: "Using the same conventions as normal checkout for the market, with a note if renewal amounts may change because of tax rate changes or address changes." },
      { q: "What happens if authentication is required for the first payment?", a: "In markets with strong customer authentication, the first payment may require the customer to authenticate, which also sets up the stored credential for later merchant-initiated charges. The checkout should handle the authentication step without losing the order." },
      { q: "Can one checkout contain subscription and one-time items?", a: "Many platforms support mixed carts. Show clearly which items recur and which don't, and what the customer will pay today versus on each renewal." },
      { q: "What should the confirmation page include?", a: "What was ordered, what recurs, the next charge date and amount, how to manage the subscription, and a link to the account or portal." },
      { q: "How do I test a subscription checkout?", a: "Place test subscriptions with each supported payment method, including authentication challenges, declines and mixed carts, then simulate renewals and confirm emails, portal access and amounts." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A subscription checkout needs everything a normal checkout needs plus three extras: a stored payment method for renewals, clear recurring terms the customer actively agrees to, and a link to an account for managing the subscription. Reduce friction by allowing guest-style checkout with account creation handled by email link or after payment, offering payment methods that support renewals, showing today's total and the recurring amount separately, handling authentication and declines without losing data, and sending a confirmation with the next charge date and a portal link.",
        ],
      },
      {
        heading: "Why Subscription Checkout Needs Extra Care",
        body: [
          "One-time checkout ends at payment. Subscription checkout starts a relationship: the customer is authorizing future charges. If the recurring terms feel hidden, customers hesitate at checkout or dispute renewals later. If the terms are clear but the process is long, they abandon. The goal is a checkout that is short and completely transparent. The flow above shows the extra steps: account, stored payment and recurring terms.",
          "For general checkout principles, see [[/blogs/ecommerce-checkout-ux|ecommerce checkout UX]] and [[/blogs/why-customers-abandon-checkout|why customers abandon checkout]].",
        ],
      },
      {
        heading: "The Order Summary: Today vs Every Renewal",
        body: [
          "Customers need two numbers: what they pay now and what they'll pay on each renewal. Show both in the order summary, labelled plainly, along with the frequency and the next charge date. In mixed carts, separate one-time items from recurring ones.",
        ],
        table: {
          headers: ["Summary line", "Example"],
          rows: [
            ["Due today", "£21.60 + £0 shipping"],
            ["Then every 4 weeks", "£21.60 (next charge 27 October)"],
            ["One-time items", "Grinder £45 (today only)"],
            ["Intro offer", "First box £10, then £21.60"],
          ],
        },
      },
      {
        heading: "Accounts Without Friction",
        body: [
          "Subscribers need a way back to manage their plan, but a full registration form before payment adds friction. Common approaches: create the account automatically from the checkout email and send a sign-in link; use passwordless sign-in by email code; or let returning customers sign in with a saved method. Whatever you choose, the customer should be able to reach their subscription from the confirmation email in one step. See [[/blogs/ecommerce-customer-account-ux|ecommerce customer account UX]].",
        ],
      },
      {
        heading: "Payment Methods for Renewals",
        body: [
          "Not every payment method supports recurring charges. Cards generally do, with the card stored as a token by the payment provider. Some wallets and local methods support recurring payments; others don't or have restrictions. Only show methods that work for the subscription in the cart, and explain if a method is unavailable. On Shopify, for example, selling subscriptions requires a supported gateway such as Shopify Payments, and some wallets are limited with certain gateways ([[https://help.shopify.com/en/manual/products/purchase-options/subscriptions/considerations|Shopify Help Center]]).",
        ],
        callout: {
          type: "note",
          text: "Payment method support for recurring charges varies by provider, platform and country. Check your provider's documentation for each market rather than assuming a method works.",
        },
      },
      {
        heading: "Authentication and the First Payment",
        body: [
          "In markets with strong customer authentication rules, the first subscription payment may require the customer to authenticate with their bank. That step also establishes the stored credential so later renewals can be charged by the merchant without the customer present, subject to the rules. Your checkout should handle the authentication challenge inline, preserve the order if the customer takes time, and explain what happened if authentication fails.",
        ],
      },
      {
        heading: "Recurring Terms and Consent",
        body: [
          "Before payment, state the recurring terms in plain language close to the pay button: what renews, how often, the amount, when the next charge happens, how to cancel and a link to full terms. Where your markets expect explicit consent, use an unchecked checkbox or an equivalent active step. Rules on automatic renewal disclosures and consent differ by country and, in the US, by state; take advice for your markets.",
        ],
        cta: {
          title: "Subscribers dropping out at checkout?",
          description: "ZSpace redesigns subscription checkouts to be short, clear about recurring terms and reliable on payments.",
        },
      },
      {
        heading: "Shipping and Taxes",
        body: [
          "Show shipping per delivery, not just for the first order. If free shipping applies to subscriptions, say so. Taxes follow the market's normal checkout conventions, but explain that renewal amounts can change if tax rates or the delivery address change. For international subscribers, check that duties and currency behave correctly on renewals. See [[/blogs/global-ecommerce-checkout|global ecommerce checkout]].",
        ],
      },
      {
        heading: "Errors and Declines",
        body: [
          "Payment failures at checkout should keep everything the customer entered, explain the problem in plain language (card declined, authentication failed, method not supported for subscriptions), and offer another method. Avoid generic “something went wrong” messages. Log declines by reason so you can see whether a payment method or market is causing problems.",
        ],
        table: {
          headers: ["Error", "Message approach"],
          rows: [
            ["Card declined", "Ask to try another card or contact the bank"],
            ["Authentication failed", "Explain the bank check and offer to retry"],
            ["Method unsupported", "Explain it can't be used for subscriptions; show alternatives"],
            ["Address unsupported", "Explain delivery limits before payment"],
          ],
        },
      },
      {
        heading: "Confirmation Page and Email",
        body: [],
        checklist: [
          "What was ordered and what recurs",
          "Frequency and next charge date and amount",
          "Delivery estimate for the first order",
          "How to skip, pause, change or cancel",
          "A direct link to the subscription in the account or portal",
          "Terms and support contact",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "On hosted checkouts such as Shopify's, much of the payment handling is built in, and subscription apps add the recurring terms and account links. With headless storefronts, the cart must carry the selling plan or subscription plan so checkout processes it as recurring; Shopify's Storefront API, for example, accepts a selling plan ID on cart lines ([[https://shopify.dev/docs/storefronts/headless/building-with-the-storefront-api/products-collections/subscriptions|Shopify developer docs]]). With custom builds, the payment provider's subscription or stored-credential APIs handle tokenization and renewals. See [[/blogs/shopify-subscription-store|Shopify subscription store]].",
        ],
      },
      {
        heading: "Worked Example: Simplifying a Supplement Subscription Checkout",
        body: [
          "An illustrative scenario: a supplement brand requires account registration with a password before checkout and shows only “£19.99” in the summary without saying it recurs. Support gets frequent contacts about unexpected renewals. The redesign removes up-front registration (the account is created from the checkout email with a sign-in link), splits the summary into “Due today” and “Then every 30 days”, adds a plain-language recurring terms block with an unticked consent checkbox, and puts the next charge date and a “Manage subscription” link in the confirmation email. The team tracks checkout completion for subscriptions, renewal-related support contacts and chargebacks.",
        ],
      },
      {
        heading: "Pricing Transparency",
        body: [
          "Subscription abandonment often comes from uncertainty: how much will I pay later, how often, and can I stop? Put the answer in the order summary with plain language: today's charge, the recurring amount and frequency, the next charge date, and a short line on how to skip, pause or cancel. Consistency between product page, cart and checkout matters.",
        ],
      },
      {
        heading: "Mobile Subscription Checkout",
        body: [
          "On phones, the recurring terms must stay visible near the pay button, not hidden in a collapsed summary. Wallet payments are fast but check that they support recurring charges with your provider. Authentication challenges for the first payment should work smoothly in mobile browsers. See [[/blogs/global-ecommerce-checkout|global checkout]] and [[/blogs/ecommerce-ab-testing-checkout|checkout testing]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Only showing today's price",
          "Forcing full registration before payment",
          "Offering payment methods that can't renew",
          "Pre-ticked consent or hidden terms",
          "Losing the cart when authentication fails",
          "No next charge date in the confirmation",
        ],
        cta: {
          title: "Ready to improve your subscription checkout?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|checkout UX]], [[/services/cro-audit|checkout conversion audits]] and [[/services/shopify-development|Shopify subscription checkout]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Subscription checkout should feel as short as a normal checkout while making the recurring agreement unmistakable. Store the right payment method, show today and every renewal, get genuine consent and hand the customer straight to their subscription afterwards. For what they'll find there, see [[/blogs/subscription-management-portal|subscription management portal]].",
        ],
      },
    ],
  },

  // -------------------------------------- 225 · SUBSCRIPTION PORTAL
  {
    slug: "subscription-management-portal",
    title: "Ecommerce Subscription Management: What Should Your Store Support?",
    seoTitle: "Ecommerce Subscription Management: What to Support",
    excerpt:
      "What a subscription management portal needs: active subscriptions, next order, billing, skip, pause, product swaps, frequency, payment, address and cancellation.",
    category: "UI/UX",
    banner: "subportalmap",
    bannerAlt:
      "Subscription portal mock-up: a sidebar with subscriptions, next order, billing, payment method, addresses, order history and help; a header showing a coffee subscription every three weeks with the next charge date; actions to skip next, pause, change product and change frequency; upcoming orders with amounts and dates; panels to update card and address or order now as a one-off; and a visible cancel subscription link.",
    date: "2026-09-29",
    updated: "2026-09-30",
    readingTime: "13 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "website-development"],
    relatedIndustrySlugs: ["d2c-consumer", "ecommerce"],
    faqs: [
      { q: "What is a subscription management portal?", a: "The part of a customer account (or a dedicated page) where subscribers see and control their subscriptions: upcoming orders, billing, products, frequency, payment, address, pauses and cancellation." },
      { q: "What features are essential?", a: "Viewing active subscriptions and the next order date and amount, skipping or rescheduling an order, changing frequency, quantity or product, pausing, updating payment method and address, viewing billing history and cancelling." },
      { q: "How should customers reach the portal?", a: "From their account and directly from subscription emails, ideally with passwordless sign-in or secure links, so managing a subscription never requires remembering a password first." },
      { q: "Should cancellation be in the portal?", a: "Yes, visibly. Customers expect to cancel online, and hiding cancellation increases complaints and chargebacks and may breach consumer rules in some markets." },
      { q: "What's the difference between skip and pause?", a: "Skip removes one upcoming delivery and keeps the schedule. Pause stops deliveries for a period or until the customer resumes." },
      { q: "Should the portal let customers order extra one-off items?", a: "It can: adding a one-off item to the next delivery or ordering now are useful, as long as the portal makes clear what's recurring and what isn't." },
      { q: "How should billing be shown?", a: "Upcoming charges with dates and amounts, past charges with receipts or invoices, and the payment method in use, with a clear way to update it." },
      { q: "What happens when a payment fails?", a: "The portal should show the problem prominently with a one-step way to update the payment method, and explain what happens next, such as a retry date." },
      { q: "Do portals need to work on mobile?", a: "Yes. Most portal visits come from email links opened on phones, so every action should work well on small screens." },
      { q: "How is this different from subscription UX in general?", a: "The subscription UX guide covers the whole journey. This guide specifies what the management portal itself should contain and how it should behave." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A subscription management portal should let customers answer “what's coming and what does it cost?” at a glance and change anything themselves. Lead with the next order date, contents and amount; put skip and reschedule first; then change frequency, quantity and product, pause, update payment and address, view billing history, order a one-off, and cancel from a visible link. Make it reachable from every subscription email with easy sign-in, confirm every change, show failed payments prominently with a one-step fix, and design mobile-first.",
        ],
      },
      {
        heading: "Why the Portal Decides Retention",
        body: [
          "Subscribers visit the portal when something needs to change: too much stock, a holiday, a new address, an expired card or a wish to stop. If the change they need is easy, many stay; if it's hard, they cancel or dispute the next charge. The mock-up above shows a portal built around the next order, with common actions first and cancellation visible. For the wider journey, see [[/blogs/ecommerce-subscription-ux|subscription ecommerce UX]].",
        ],
      },
      {
        heading: "Feature Specification",
        body: [],
        table: {
          headers: ["Feature", "What it must do", "Why"],
          rows: [
            ["Subscription list", "All active, paused and cancelled subscriptions", "Customers may have several"],
            ["Next order", "Date, items, amount, delivery address", "The main question on every visit"],
            ["Skip / reschedule", "Skip one order or move its date", "Most common alternative to cancelling"],
            ["Change frequency", "Pick a new interval", "Fixes over- or under-supply"],
            ["Change product / quantity", "Swap variant, flavour or size; change quantity", "Keeps variety without cancelling"],
            ["Pause", "Pause for a period or until resumed", "Reversible break"],
            ["Order now / add one-off", "Get it sooner or add extras", "Captures extra demand"],
            ["Payment method", "View and update", "Prevents failed renewals"],
            ["Address", "Update for next or all orders", "Moving, travel"],
            ["Billing history", "Past charges, receipts or invoices", "Records and trust"],
            ["Cancel", "Visible link, short flow, confirmation", "Respects the customer's decision"],
          ],
        },
      },
      {
        heading: "Access: From Email in One Step",
        body: [
          "Most visits start from an email: the renewal reminder, the shipping notice or a failed payment alert. Each should link directly to the relevant subscription, using passwordless sign-in or a secure token so customers don't need to remember a password. Links should expire and require re-authentication for sensitive changes such as payment details.",
        ],
        callout: {
          type: "tip",
          text: "Put “Skip this order” and “Manage subscription” links in every renewal reminder. Customers who can act from the email rarely need support.",
        },
      },
      {
        heading: "Designing the Next Order Panel",
        body: [
          "The next order panel should show the date, the items with quantities, the amount including shipping and tax, the delivery address and the payment method, followed by the two most used actions: skip and reschedule. If the order has a cut-off for changes (common for food or made-to-order products), show it. See [[/blogs/subscription-food-ecommerce|subscription food ecommerce]] for cut-off patterns.",
        ],
      },
      {
        heading: "Pause, Skip and Change",
        body: [
          "Make each change a short, reversible action with an immediate confirmation that shows the new state (“Next order moved to 14 November”). For pause, let customers choose a duration or a resume date and remind them before deliveries restart. For product swaps, show price differences before confirming.",
        ],
        cta: {
          title: "Subscribers contacting support to make simple changes?",
          description: "ZSpace designs subscription portals where customers can make every common change themselves.",
        },
      },
      {
        heading: "Billing and Failed Payments",
        body: [
          "Show upcoming charges and past billing history with downloadable receipts or invoices. When a renewal payment fails, show a banner at the top of the portal and in the subscription, explain the next retry or what will happen, and let the customer update their payment method in one step. Failed payments are a major source of involuntary churn, so the fix must be effortless. See [[/blogs/subscription-ecommerce-retention|subscription ecommerce retention]].",
          "Retry schedules, account updater and update links are covered in [[/blogs/ecommerce-recurring-payments|ecommerce recurring payments]].",
        ],
      },
      {
        heading: "Cancellation in the Portal",
        body: [
          "Put a clear “Cancel subscription” link on each subscription. A short flow can offer one alternative (pause or skip) and ask an optional reason before confirming. The confirmation should state when the subscription ends, whether any order is still coming and how to restart. See [[/blogs/subscription-ecommerce-cancellation-flow|subscription cancellation flow]].",
        ],
      },
      {
        heading: "Architecture Notes",
        body: [
          "The portal reads and writes subscription contracts held by your subscription system: a platform app, a billing platform or a custom service. Changes must update the contract and the next billing and fulfilment dates atomically, trigger confirmation emails and, where relevant, sync to ERP or fulfilment systems. On Shopify, subscription apps manage contracts through Shopify's subscription APIs and customers manage subscriptions from their customer account or app-provided pages. See [[/blogs/shopify-subscription-store|Shopify subscription store]].",
        ],
      },
      {
        heading: "Mobile and Accessibility",
        body: [
          "Design for phones first: the next order panel and primary actions above the fold, large buttons, and confirmation inline rather than on new pages. Use clear labels (“Skip the order on 27 October”) rather than icon-only buttons, and make sure every action works with a keyboard and screen reader. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Worked Example: A Pet Food Portal",
        body: [
          "An illustrative scenario: a pet food brand's subscribers often have too much food because their pet eats less than expected. The portal shows the next order at the top with “Skip” and “Change frequency” buttons, and a short prompt: “Running low or have too much? Adjust how often you receive food.” Frequency options are shown in weeks with an estimate of daily portions. A failed payment banner appears above everything else when needed. Cancellation is a visible link that offers a pause once. The team tracks skips, frequency changes, cancellations and support contacts per subscriber.",
        ],
      },
      {
        heading: "Self-Service Capability Matrix",
        body: [
          "Decide which changes customers can make themselves and which need support. The more common changes are self-service, the fewer contacts and cancellations out of frustration.",
        ],
        table: {
          headers: ["Change", "Self-service?", "Notes"],
          rows: [
            ["Skip next delivery", "Yes", "Show new next date"],
            ["Pause", "Yes", "Set resume date, with reminder"],
            ["Reschedule", "Yes", "Within allowed windows"],
            ["Change quantity or frequency", "Yes", "Show price impact"],
            ["Swap product or variant", "Yes, within rules", "Show price differences"],
            ["Update payment method", "Yes", "Via provider's secure form"],
            ["Change address", "Yes", "Apply to next order cut-off"],
            ["Cancel", "Yes", "As easy as signing up"],
          ],
        },
      },
      {
        heading: "Renewals and Reminders",
        body: [
          "Send reminders before renewals where the law or customer expectations require it, especially for longer intervals or annual plans. Each reminder should show the date, amount, items and a link to change or skip. Reminders reduce surprise charges and disputes. See [[/blogs/subscription-ecommerce-retention|subscription retention]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Portal only reachable after password sign-in",
          "Next order date or amount missing",
          "Skip hidden behind a menu",
          "No way to change frequency or product",
          "Failed payment only communicated by email",
          "Cancellation missing or only by phone",
          "Changes without confirmation",
        ],
      },
      {
        heading: "Portal Checklist",
        body: [],
        checklist: [
          "Next order date, items and amount on first view",
          "Skip and reschedule as primary actions",
          "Frequency, quantity and product changes",
          "Pause with resume date and reminder",
          "Payment and address updates",
          "Billing history with receipts",
          "Failed payment banner with one-step fix",
          "Visible cancel link and short flow",
          "Deep links from every subscription email",
        ],
        cta: {
          title: "Ready to build a better subscription portal?",
          description: "Talk to ZSpace about [[/services/ui-ux-design|portal UX]], [[/services/shopify-development|Shopify subscription apps]] and [[/services/website-development|custom subscription portals]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A subscription portal succeeds when every common change is self-service and obvious, starting with the next order. Build it for email-first, mobile-first access, surface failed payments immediately and let customers leave cleanly when they want to. For the full build, see [[/blogs/subscription-ecommerce-website|subscription ecommerce website development]].",
        ],
      },
    ],
  },
];
