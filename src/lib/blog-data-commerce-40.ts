import type { BlogPost } from "./blog-data";

/**
 * Ecommerce knowledge hub, batch five, part eight: loyalty program UX,
 * customer account UX, reorder experience and wishlist UX. The retention
 * hub is `ecommerce-customer-retention`. Merged into `posts` in
 * blog-data.ts.
 */

export const commercePosts40: BlogPost[] = [
  // ------------------------------------------- 243 · LOYALTY PROGRAM UX
  {
    slug: "ecommerce-loyalty-program-ux",
    title: "Ecommerce Rewards UX: How to Design a Better Loyalty Experience",
    seoTitle: "Ecommerce Rewards UX: Designing a Better Loyalty Experience",
    excerpt:
      "How to design ecommerce loyalty program UX: joining, earning, seeing and redeeming rewards, tiers, rewards in account, cart and checkout, mobile, and fair terms.",
    category: "UI/UX",
    banner: "loyaltyflow",
    bannerAlt:
      "Loyalty flow: join, earn, see balance (highlighted), redeem at checkout, tier progress, benefits, with rewards visible where customers already are: account, cart and checkout.",
    date: "2026-09-29",
    updated: "2026-09-30",
    readingTime: "13 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What makes a good ecommerce loyalty program UX?", a: "Members can understand how to earn, see their balance and progress wherever they shop, redeem rewards easily at checkout, and understand tiers and expiry without reading long terms." },
      { q: "Where should loyalty information appear?", a: "In the account, on product pages (points earned for this item), in the cart and at checkout (balance and redemption), in order confirmations and in emails." },
      { q: "Should loyalty programs use points or other models?", a: "Points are common, but tiered benefits, paid memberships, cashback-style credit and experiential perks also work. Choose a model customers can understand quickly and that your margins support." },
      { q: "How should rewards be redeemed?", a: "Ideally at checkout, applied with one action, showing the value and the new total, without forcing customers to generate codes elsewhere." },
      { q: "How do tiers affect UX?", a: "Tiers need clear thresholds, visible progress and benefits that feel meaningful. Complicated tier rules and unexplained downgrades frustrate members." },
      { q: "Should points expire?", a: "Many programs use expiry to limit liability, but expiry should be clearly communicated in advance. Surprise expiry damages trust." },
      { q: "Do loyalty programs need an app?", a: "Not necessarily. The program should work well on mobile web and in the account; apps can add convenience for frequent shoppers." },
      { q: "How do I measure loyalty program UX?", a: "Enrolment rate, share of members who earn and redeem, redemption at checkout, repeat purchase rate of members vs comparable non-members, and support contacts about points." },
      { q: "Can loyalty programs hurt margins?", a: "Yes, if rewards are too generous or mostly go to customers who would have bought anyway. Model costs and measure incremental behaviour." },
      { q: "How is loyalty different from personalization?", a: "Loyalty rewards repeat behaviour through a program; personalization makes each visit more relevant. See the comparison guide for details." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Good loyalty program UX makes rewards understandable and visible where customers already are. Explain how to join and earn in one short page, show points earned on product pages and in the cart, show balance and tier progress in the account and header, let members redeem at checkout with one action and see the new total, communicate tiers, expiry and changes clearly and in advance, and make everything work on mobile. Measure enrolment, earning, redemption and whether members' repeat behaviour changes, not just sign-ups.",
        ],
      },
      {
        heading: "Why Many Loyalty Programs Underperform",
        body: [
          "Loyalty programs often fail at the interface, not the offer. Members forget they have points, can't find their balance, don't know how to redeem, or discover rewards have expired. The value only affects behaviour if customers see it at the moments they decide. The flow above shows the member journey from joining to benefits. For how loyalty fits retention overall, see [[/blogs/ecommerce-customer-retention|ecommerce customer retention]].",
        ],
      },
      {
        heading: "Choosing a Program Model",
        body: [],
        table: {
          headers: ["Model", "How it works", "UX consideration"],
          rows: [
            ["Points", "Earn points per purchase or action, redeem for rewards", "Show value in money terms"],
            ["Tiers", "Status levels unlock benefits", "Visible progress and clear thresholds"],
            ["Paid membership", "Fee for ongoing benefits (e.g. free delivery)", "Benefits must be obvious every visit"],
            ["Store credit / cashback", "Percentage returned as credit", "Simple to understand, easy to apply"],
            ["Perks and experiences", "Early access, events, exclusives", "Communicate availability clearly"],
          ],
        },
      },
      {
        heading: "Joining",
        body: [
          "Keep joining simple: usually creating an account or opting in from the account, checkout or order confirmation. Explain the program on one short page: what members get, how to earn, how to redeem and key terms. Avoid making customers join a separate portal with a separate login.",
        ],
      },
      {
        heading: "Earning: Show It Before and After Purchase",
        body: [
          "Show points to be earned on product pages (“Earn 45 points”) and in the cart, and confirm points earned in the order confirmation. If members earn for other actions (reviews, referrals, birthdays), list them in the account with what's been completed. Express points in money terms somewhere visible so members understand the value.",
        ],
      },
      {
        heading: "Seeing the Balance",
        body: [
          "The balance and progress should be visible without searching: in the account overview, in a header or menu indicator for signed-in members, in the cart and at checkout. Show pending points separately (for example until the return window closes) with a date.",
        ],
        cta: {
          title: "Members not using their rewards?",
          description: "ZSpace Labs designs loyalty experiences that make earning and redeeming obvious across the store.",
        },
      },
      {
        heading: "Redeeming at Checkout",
        body: [
          "Redemption should happen where members pay: a clear “Use your points” option in the cart or checkout, with the value, the new total and any minimums or restrictions stated. Avoid flows that require generating a discount code elsewhere and pasting it in. If rewards can't be combined with other discounts, say so before the member tries.",
        ],
        table: {
          headers: ["Redemption pattern", "Assessment"],
          rows: [
            ["Apply points at checkout in one action", "Simplest for members"],
            ["Choose from reward options in cart", "Works if options are few and clear"],
            ["Generate a code in account, paste at checkout", "Adds friction; often abandoned"],
            ["Automatic credit applied", "Simple; make it visible"],
          ],
        },
      },
      {
        heading: "Tiers and Progress",
        body: [
          "If you use tiers, show the member's current tier, the next tier, how far they are from it and what it unlocks. Explain how tiers are calculated (spend over what period) and what happens when the period resets. Benefits should be concrete and noticeable (free delivery, early access) rather than vague.",
        ],
      },
      {
        heading: "Expiry, Changes and Terms",
        body: [
          "Points expiry and program changes are sensitive. Communicate expiry dates in the account and remind members before points expire. Give advance notice of program changes. Keep terms readable and linked from the program page. Rules on loyalty programs, unclaimed value and communications vary by market; check requirements where you operate.",
        ],
      },
      {
        heading: "Mobile and Accessibility",
        body: [
          "Most members will check points on their phones. Keep the balance visible on mobile account screens, make redemption controls large and clear in mobile checkout, and ensure progress bars have text equivalents for screen readers. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Platform Notes",
        body: [
          "Most loyalty programs run through apps or loyalty platforms integrated with the store, account and checkout. Check that the tool can show points on product pages and in the cart, apply rewards at checkout natively, sync with the customer account and send reminders. On Shopify, check how the app integrates with customer accounts and checkout. See [[/blogs/ecommerce-customer-account-ux|ecommerce customer account UX]].",
        ],
      },
      {
        heading: "Worked Example: Making Points Visible",
        body: [
          "An illustrative scenario: a homeware brand's loyalty program has many members but few redemptions. Research finds members can only see points on a separate rewards page and must generate codes to redeem. The redesign shows “You'll earn X points” on product pages and in the cart, adds the balance to the account menu, lets members apply points at checkout in one step, and sends a reminder before points expire. The team tracks redemption rate, repeat purchase among members and support contacts about points.",
        ],
      },
      {
        heading: "Designing the Program Page",
        body: [
          "The program page should answer, in order: what members get, how to earn, how to redeem, how tiers work (if any) and key terms. Use a simple earning table rather than long copy, show a worked example (“Spend £50, earn 50 points, worth £2.50”), and put a join or sign-in action at the top. For members, show their status on the same page. Keep it short enough to read on a phone. See [[/blogs/ux-writing|UX writing]] for clear program copy, and [[/blogs/ecommerce-customer-segmentation|customer segmentation]] for targeting member communications.",
        ],
      },
      {
        heading: "Progress Indicators",
        body: [
          "Progress toward the next reward or tier motivates when it's reachable. Show points needed in both points and approximate spend (\"120 points, about 2 more orders\"), place progress in the account, cart and post-purchase emails, and celebrate milestones briefly. Make indicators accessible with text equivalents.",
        ],
      },
      {
        heading: "Transparency and Trust",
        body: [
          "Rewards feel fair when rules are clear: how points are earned, what they're worth, when they expire and what happens on returns. Show a points history with every earn, redemption and expiry, and warn before points expire. For programme strategy and economics, see [[/blogs/ecommerce-loyalty-programs|ecommerce loyalty programmes]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Points visible only on a separate rewards page",
          "Redemption through copy-and-paste codes",
          "Points without a money value",
          "Unclear tier rules and surprise downgrades",
          "Unannounced expiry",
          "Rewards too generous for margins",
          "Measuring sign-ups instead of behaviour",
        ],
        cta: {
          title: "Ready to redesign your loyalty experience?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|loyalty UX]], [[/services/cro-audit|retention testing]] and [[/services/shopify-development|Shopify loyalty integration]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Loyalty programs work when members see value at the right moments and can use it easily. Show earning, balance and redemption across the store, keep rules simple and communicate changes in advance. For how loyalty compares with personalization, see [[/blogs/ecommerce-loyalty-vs-personalization|loyalty vs personalization]].",
        ],
      },
    ],
  },

  // ---------------------------------------- 244 · CUSTOMER ACCOUNT UX
  {
    slug: "ecommerce-customer-account-ux",
    title: "Ecommerce Customer Account UX: What Should Customers Be Able to Do?",
    seoTitle: "Ecommerce Customer Account UX: What Customers Need",
    excerpt: "What an ecommerce account should let customers do: orders, tracking, returns, addresses, payment methods, subscriptions, wishlists, rewards and privacy.",
    category: "UI/UX",
    banner: "accountmap",
    bannerAlt:
      "Customer account areas in four columns: orders (order status, tracking, returns and exchanges, invoices, highlighted), profile (personal details, addresses, payment methods, privacy and consent), commerce (buy again, subscriptions, wishlists, saved carts) and loyalty (points and tier, rewards, referrals, member benefits), noting that most account visits are about an order.",
    date: "2026-09-29",
    readingTime: "17 min read",
    relatedServiceSlugs: ["ui-ux-design", "shopify-development", "cro-audit"],
    relatedIndustrySlugs: ["ecommerce", "retail", "d2c-consumer"],
    faqs: [
      { q: "What should an ecommerce customer account include?", a: "Order history with status and tracking, returns and exchanges, addresses, saved payment methods, personal details, communication preferences and privacy controls, plus subscriptions, wishlists, rewards and reordering where the store offers them." },
      { q: "What is the most important part of a customer account?", a: "Order status and tracking. Most account visits are about an existing order: where it is, changing it, returning it or getting an invoice." },
      { q: "Should customers be forced to create an account to buy?", a: "Forced account creation is a common reason for checkout abandonment. Offer guest checkout and let customers create an account afterwards, for example from the confirmation." },
      { q: "How should customers sign in?", a: "With low-friction methods such as email one-time codes or links, social or platform sign-in where appropriate, and passwords as an option. Shopify's newer customer accounts, for example, use email codes." },
      { q: "Can guests track orders without an account?", a: "They should be able to, through links in order emails or an order lookup with email and order number." },
      { q: "How should returns work in the account?", a: "Customers should select items from an order, choose a reason and resolution (refund or exchange), get a label or instructions and track the return's status." },
      { q: "What privacy controls should accounts offer?", a: "Marketing preferences, consent choices, and routes to access or delete personal data, in line with applicable privacy laws." },
      { q: "How is this different from a B2B customer portal?", a: "B2B portals serve companies with users, roles, approvals, invoices and credit terms. Consumer accounts serve individuals and focus on orders, returns, reordering and personal preferences." },
      { q: "Should the account be the home for subscriptions and loyalty?", a: "Yes. Subscriptions and rewards belong in the account alongside orders, so customers have one place to manage their relationship with the store." },
      { q: "How do I measure account UX?", a: "Support contacts about orders and returns, self-service return rates, sign-in success, repeat purchase from account features, and usability test task success." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "An ecommerce customer account should let shoppers handle their relationship with the store without contacting support. Lead with orders: status, tracking, returns and exchanges, invoices. Then profile: details, addresses, saved payment methods, communication preferences and privacy controls. Add commerce features the store offers: buy again, subscriptions, wishlists, saved carts, rewards. Make sign-in easy (email codes or links), keep guest checkout with optional account creation afterwards, and let guests track orders from emails. Keep it distinct from B2B portals, which serve companies.",
        ],
      },
      {
        heading: "Why Account UX Matters",
        body: [
          "Accounts are where customers go when something needs doing after a purchase: tracking a parcel, starting a return, changing an address, reordering, managing a subscription. Each task that can't be done in the account becomes a support contact or a frustrated customer. The diagram above groups account features into orders, profile, commerce and loyalty. For B2B needs, see [[/blogs/b2b-ecommerce-customer-portal|B2B customer portal]], which is a different product.",
        ],
      },
      {
        heading: "Feature Map",
        body: [],
        table: {
          headers: ["Area", "Features", "Priority"],
          rows: [
            ["Orders", "Status, tracking, order details, invoices", "Essential"],
            ["Returns", "Start return or exchange, labels, status, refunds", "Essential if you accept returns"],
            ["Addresses", "Add, edit, default", "Essential"],
            ["Payment methods", "View, remove, set default (as the platform supports)", "Common"],
            ["Personal details and privacy", "Name, email, preferences, consent, data requests", "Essential"],
            ["Buy again", "Reorder items from past orders", "Valuable for repeat products"],
            ["Subscriptions", "Manage upcoming orders, skip, pause, cancel", "If offered"],
            ["Wishlists", "Saved items with stock and price", "If offered"],
            ["Rewards", "Points, tier, redemption", "If offered"],
          ],
        },
      },
      {
        heading: "The Account Overview",
        body: [
          "Start with what's current: orders in progress with status, any action needed (a return to send, a payment to update), then shortcuts to the other areas. Signed-in customers who arrive from an email should land on the relevant order or subscription, not a generic dashboard.",
        ],
        callout: {
          type: "tip",
          text: "Deep-link every transactional email to the exact place in the account: “Track this order”, “Start a return”, “Manage subscription”. Customers rarely navigate accounts from the top.",
        },
      },
      {
        heading: "Orders, Tracking and Returns",
        body: [
          "Order history should show status in plain language, estimated delivery, tracking links, items with images, totals and invoices. Returns should start from the order: select items, reason, preferred resolution (refund, exchange, store credit), then instructions or a label and a status timeline until the refund. Exchanges for size or colour keep revenue and are valued by customers. See [[/blogs/ecommerce-reorder-experience|ecommerce reorder experience]] for buying again from orders.",
        ],
      },
      {
        heading: "Sign-In and Guests",
        body: [
          "Password friction keeps customers out of their accounts. Offer email one-time codes or magic links, remembered sessions on trusted devices and social or platform sign-in where appropriate. Shopify's newer customer accounts, for example, use email one-time codes rather than passwords. Keep guest checkout, offer account creation after purchase, and let guests track orders and start returns through secure links. See [[/blogs/ecommerce-checkout-ux|checkout UX]].",
        ],
        cta: {
          title: "Customers contacting support for things they could do themselves?",
          description: "ZSpace Labs designs customer accounts around the post-purchase tasks that generate the most contacts.",
        },
      },
      {
        heading: "Profile, Payment Methods and Privacy",
        body: [
          "Customers should be able to update their name, email, addresses and communication preferences, and see or remove saved payment methods where the platform supports it. Privacy controls should include marketing consent and routes to request access to or deletion of personal data, in line with laws such as GDPR in the EU and UK and state laws in the US. Sensitive changes (email, payment methods) should require re-authentication.",
        ],
      },
      {
        heading: "Commerce Features: Buy Again, Subscriptions, Wishlists",
        body: [
          "Where the store sells repeat products, “Buy again” turns the account into a shortcut to the next order. Subscriptions need a management area with next order, skip, pause and cancel. Wishlists should show stock and price changes. These features make the account worth visiting between orders. See [[/blogs/subscription-management-portal|subscription management portal]] and [[/blogs/ecommerce-wishlist-ux|ecommerce wishlist UX]].",
          "Business buyers need a different account model; see [[/blogs/b2b-ecommerce-account-management|B2B account management]].",
        ],
      },
      {
        heading: "Rewards",
        body: [
          "If you run a loyalty program, show points, tier progress and available rewards in the account overview, and let members redeem at checkout. Keep the program inside the account rather than a separate portal. See [[/blogs/ecommerce-loyalty-program-ux|ecommerce loyalty program UX]].",
        ],
      },
      {
        heading: "Mobile and Accessibility",
        body: [
          "Account visits often come from email links on phones. Design mobile-first: order status and tracking on the first screen, large actions, clear labels, accessible forms and tables, and no dependence on hover. Test return flows on small screens. See [[/blogs/website-accessibility-guide|website accessibility]].",
        ],
      },
      {
        heading: "Worked Example: Reducing “Where Is My Order” Contacts",
        body: [
          "An illustrative scenario: a fashion retailer's support team receives many contacts about order status and returns. The account shows orders without tracking and returns require emailing support. The redesign adds tracking and delivery estimates to each order, deep links from shipping emails, a self-service returns and exchanges flow with status updates, and email-code sign-in. Guests get secure tracking and return links in emails. The team measures contacts per order, self-service returns and exchange share.",
        ],
      },
      {
        heading: "Account Information Architecture",
        body: [],
        table: {
          headers: ["Section", "Screens", "Entry points"],
          rows: [
            ["Overview", "Current orders, actions needed, shortcuts", "Sign-in, header"],
            ["Orders", "List, order detail, tracking, invoice", "Shipping and delivery emails"],
            ["Returns", "Start return, return status", "Order detail, delivery email"],
            ["Buy again", "Previously purchased items", "Homepage row, reminders"],
            ["Subscriptions", "List, next order, manage", "Renewal reminders"],
            ["Wishlist", "Saved items, lists", "Header icon, product pages"],
            ["Rewards", "Balance, tier, rewards", "Header, cart, checkout"],
            ["Profile and privacy", "Details, addresses, payment methods, preferences", "Settings"],
          ],
        },
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Forcing account creation before checkout",
          "Password-only sign-in",
          "Order status without tracking",
          "Returns only by email or phone",
          "Emails linking to the account home instead of the order",
          "Subscriptions, loyalty and wishlists in separate portals",
          "No privacy or preference controls",
        ],
        cta: {
          title: "Ready to improve your customer account?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|account UX]], [[/services/shopify-development|Shopify customer accounts]] and [[/services/cro-audit|retention audits]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A good customer account handles post-purchase tasks, starting with orders and returns, and gives customers reasons to come back through reordering, subscriptions, wishlists and rewards. Make it easy to reach from emails and easy to use on a phone. For retention strategy, see [[/blogs/ecommerce-customer-retention|ecommerce customer retention]].",
        ],
      },
    ],
  },

  // ------------------------------------------ 245 · REORDER EXPERIENCE
  {
    slug: "ecommerce-reorder-experience",
    title: "Ecommerce Reorder Experience: How to Make Repeat Ordering Easier",
    seoTitle: "Ecommerce Reorder Experience: Make Repeat Ordering Easier",
    excerpt: "How to design the reorder experience: buy again buttons, order history, frequently purchased items, reminders, saved carts, subscriptions and edge cases.",
    category: "UI/UX",
    banner: "reorderflow",
    bannerAlt:
      "Reorder flow: account or email, order history, buy again (highlighted), cart with current prices, checkout; unavailable items branch to a suggested alternative.",
    date: "2026-09-29",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "d2c-consumer", "retail"],
    faqs: [
      { q: "What is an ecommerce reorder experience?", a: "The features that let customers buy the same products again quickly: buy again buttons, order history with reorder, frequently purchased lists, replenishment reminders, saved carts and subscriptions." },
      { q: "Where should reorder options appear?", a: "In order history, in a “Buy again” section of the account, in order and replenishment emails, on the homepage for signed-in customers and on product pages the customer has bought before." },
      { q: "Should reorders use the original price?", a: "No. Reorders should use current prices and availability, with clear notice if prices have changed." },
      { q: "What happens if a reordered product is unavailable?", a: "Show it clearly, suggest the closest alternative or a back-in-stock alert, and let the customer continue with the rest of the order." },
      { q: "When should replenishment reminders be sent?", a: "Based on typical usage for the product and the customer's own reorder history, with consent, and with a direct reorder link." },
      { q: "Is reorder the same as subscription?", a: "No. Reorder helps customers who prefer to decide each time; subscriptions automate repeat delivery. Offering both serves different customers." },
      { q: "How is consumer reordering different from B2B reordering?", a: "B2B reordering involves quick order by SKU, uploads, approvals and account pricing. Consumer reordering focuses on convenience: buy again buttons, reminders and simple carts." },
      { q: "Can guests reorder?", a: "Through links in order emails that rebuild the cart, if the store supports it. Accounts make it easier." },
      { q: "Should reorder go straight to checkout?", a: "Usually to the cart first, so customers can adjust quantities or add items. For single-item repeat products, a direct checkout option can work." },
      { q: "How do I measure the reorder experience?", a: "Share of orders from reorder features, time between orders, repeat purchase rate and conversion from reminder emails." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "A good reorder experience makes buying the same things again take seconds. Add “Buy again” to order history, a dedicated account section and order emails; show frequently purchased products to signed-in customers; send consented replenishment reminders timed to real usage with a direct reorder link; rebuild carts with current prices and availability, flagging changes and suggesting alternatives for unavailable items; and offer subscriptions for customers who want automation. Measure the share of repeat orders using these features.",
        ],
      },
      {
        heading: "Why Reordering Deserves Design",
        body: [
          "Customers buying the same coffee, supplements, pet food or skincare should not have to search, browse and check out as if they were new. Every step removed makes the second, third and tenth order more likely. The flow above shows the shortest path from an email or account to a filled cart. For B2B reordering, which has different needs, see [[/blogs/b2b-ecommerce-reordering|B2B ecommerce reordering]].",
        ],
      },
      {
        heading: "Where Reorder Options Should Appear",
        body: [],
        table: {
          headers: ["Location", "Pattern"],
          rows: [
            ["Order history", "“Buy again” per item and “Reorder all” per order"],
            ["Account overview", "“Buy again” section of frequently purchased items"],
            ["Order and delivery emails", "Reorder link near product images"],
            ["Replenishment reminders", "One-click link that fills the cart"],
            ["Homepage (signed in)", "Recently purchased products row"],
            ["Product page (bought before)", "“You bought this on [date]” with quick add"],
          ],
        },
      },
      {
        heading: "Current Prices and Availability",
        body: [
          "Reorders should always use current prices, stock and variants. If something changed, say so plainly: “Price has changed since your last order” or “This size is out of stock”. For discontinued products, suggest the closest alternative. Don't block the whole reorder because one item is unavailable.",
        ],
      },
      {
        heading: "Replenishment Reminders",
        body: [
          "For consumables, reminders timed to typical usage bring customers back at the right moment. Use product size and usage to estimate the interval, refine it from each customer's own reorder history, get consent for marketing messages where required, and include a direct reorder link. Suggest a subscription only when the customer's pattern is regular. See [[/blogs/ecommerce-repeat-purchases|repeat purchase optimization]].",
        ],
        cta: {
          title: "Repeat customers still reordering the long way?",
          description: "ZSpace Labs designs reorder features that turn repeat purchases into a few taps.",
        },
      },
      {
        heading: "Saved Carts and Lists",
        body: [
          "Some customers build the same basket regularly (groceries, household supplies). Saved carts or named lists let them reuse it. Keep lists editable and show stock and price when they're added to the cart. See [[/blogs/grocery-ecommerce-ux|grocery ecommerce UX]] for list-heavy patterns.",
        ],
      },
      {
        heading: "Reorder vs Subscription",
        body: [],
        table: {
          headers: ["", "Reorder", "Subscription"],
          rows: [
            ["Customer decides", "Each time", "Once, then manages"],
            ["Best for", "Irregular or varied repeat buying", "Regular, predictable use"],
            ["Price", "Current price", "Often discounted or with benefits"],
            ["Effort", "A few taps", "None until a change is needed"],
          ],
        },
      },
      {
        heading: "Mobile Reordering",
        body: [
          "Most reorders happen from emails opened on phones. Keep the reorder link prominent in emails, make the cart load pre-filled with clear quantities, and support express payment so the order can be completed in a few taps. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Worked Example: Supplements Brand",
        body: [
          "An illustrative scenario: a supplements brand sees many customers reorder every 50 to 60 days by searching for the same product. It adds a “Buy again” section to the account, a reorder button in delivery emails, and a consented reminder around day 45 for a 60-day supply with a link that fills the cart. Customers reordering twice at regular intervals see a subscription suggestion. The team measures time between orders, reorder share and reminder conversion.",
        ],
      },
      {
        heading: "Designing the Buy-Again Section",
        body: [
          "A dedicated “Buy again” area in the account works best when it shows products rather than orders: each item the customer has bought, with image, current price, stock status, last purchase date and a quantity stepper with add to cart. Sort by frequency or recency, hide items the customer returned, group variants sensibly (the size they bought, with an option to change), and let customers remove items they don't want to see. On the homepage for signed-in customers, a short row of their most frequent items is often enough.",
        ],
        table: {
          headers: ["Element", "Detail"],
          rows: [
            ["Item", "Image, name, variant bought"],
            ["Status", "Current price, stock, price change note"],
            ["History", "Last purchased date, times bought"],
            ["Action", "Quantity stepper and add to cart"],
            ["Housekeeping", "Hide returned items, remove from list"],
          ],
        },
      },
      {
        heading: "Measuring the Reorder Experience",
        body: [
          "Track the share of repeat orders placed through reorder features (buy again, reminders, order history), time between orders for repeat customers, reminder click-through and conversion, and support contacts about finding past products. Compare customers exposed to new reorder features with a holdout where possible. See [[/blogs/ecommerce-customer-retention|ecommerce customer retention]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Reorder only reachable deep in order history",
          "Reorders at old prices or failing silently",
          "Whole reorder blocked by one unavailable item",
          "Reminders at the wrong time for the product",
          "Pushing subscriptions on irregular buyers",
          "Reorder links that land on the homepage",
        ],
        cta: {
          title: "Ready to make reordering effortless?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|account and reorder UX]], [[/services/cro-audit|repeat purchase optimization]] and [[/services/shopify-development|Shopify reorder features]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "Reordering should be the fastest journey in your store. Put buy again where customers already are, keep prices and stock current, time reminders well and offer subscriptions to those who want them. For the account around it, see [[/blogs/ecommerce-customer-account-ux|ecommerce customer account UX]].",
          "For related guides, see [[/blogs/ecommerce-replenishment|replenishment]].",
        ],
      },
    ],
  },

  // -------------------------------------------- 246 · WISHLIST UX
  {
    slug: "ecommerce-wishlist-ux",
    title: "Ecommerce Wishlist UX: How to Design Wishlists That Customers Use",
    seoTitle: "Ecommerce Wishlist UX: Design Wishlists Customers Use",
    excerpt: "How to design wishlists customers use: saving without an account, lists, price and stock alerts, sharing, mobile patterns, persistence and moving to cart.",
    category: "UI/UX",
    banner: "wishlistflow",
    bannerAlt:
      "Wishlist flow: save item, guest or account, organize lists, price and stock alerts (highlighted), share, buy.",
    date: "2026-09-29",
    readingTime: "15 min read",
    relatedServiceSlugs: ["ui-ux-design", "cro-audit", "shopify-development"],
    relatedIndustrySlugs: ["ecommerce", "fashion-apparel", "retail"],
    faqs: [
      { q: "Why do ecommerce stores need wishlists?", a: "Many shoppers aren't ready to buy on the first visit. Wishlists let them save products to compare, wait for payday or a sale, share with others or come back later, and give the store a consented reason to follow up." },
      { q: "Should customers need an account to save items?", a: "Let guests save items first, stored on the device, and prompt them to sign in to keep the list across devices. Requiring an account before saving discourages use." },
      { q: "What's the difference between a wishlist and saved for later?", a: "Wishlists are for products customers may buy in the future; saved for later usually moves items out of the cart temporarily. Some stores combine them." },
      { q: "Should wishlists show price and stock changes?", a: "Yes. Price drops and low-stock or back-in-stock information are the most useful reasons to revisit a wishlist, and alerts (with consent) bring customers back." },
      { q: "How should the save button look?", a: "A recognizable icon (often a heart) with an accessible label, placed consistently on product cards and product pages, with a clear saved state." },
      { q: "Should wishlists be shareable?", a: "For gifting categories, yes: shareable links for registries, birthdays or shopping with a partner. Keep sharing opt-in and private by default." },
      { q: "How should variants be handled?", a: "Save the selected variant where one is chosen, or let customers pick size and colour when moving the item to the cart." },
      { q: "Can wishlists have multiple lists?", a: "Multiple named lists help in categories like furniture, gifts and fashion. Keep a default list so saving remains one tap." },
      { q: "How do wishlists support marketing?", a: "With consent, price drop, back-in-stock and reminder emails based on wishlist items tend to be relevant because customers chose the products themselves." },
      { q: "How do I measure wishlist UX?", a: "Save rate, share of saved items later purchased, wishlist-driven revisits, alert conversion and sign-ins prompted by wishlists." },
    ],
    content: [
      {
        heading: "Quick answer",
        body: [
          "Wishlists get used when saving is instant, lists persist and the list gives customers a reason to return. Put a clearly labelled save icon on product cards and pages, let guests save without an account and prompt sign-in to sync across devices, save the chosen variant, show current price, price drops and stock status in the list, offer consented alerts for price drops and back-in-stock, allow named lists and optional sharing, and make moving items to the cart one action. Measure how many saved items are later bought.",
        ],
      },
      {
        heading: "What Wishlists Are For",
        body: [
          "Shoppers use wishlists to remember products, compare options, wait for the right time or price, and share ideas. That makes wishlists valuable for considered purchases (furniture, fashion, electronics, gifts) and less relevant for impulse or replenishment products. The flow above follows an item from saving to purchase, with alerts as the reason to return. For how wishlists fit into the account, see [[/blogs/ecommerce-customer-account-ux|ecommerce customer account UX]].",
        ],
      },
      {
        heading: "Saving: Make It One Tap",
        body: [
          "Place the save control consistently on product cards and product pages, use a recognizable icon with a text label or accessible name (“Save to wishlist”), and show a clear saved state. Don't interrupt with an account prompt at the moment of saving; save first, then invite guests to sign in to keep the list across devices.",
        ],
        table: {
          headers: ["Decision", "Good practice"],
          rows: [
            ["Icon and label", "Heart or bookmark with accessible name"],
            ["Placement", "Same position on cards and product pages"],
            ["Saved state", "Filled icon plus confirmation"],
            ["Guests", "Save to device, prompt to sign in later"],
            ["Variants", "Save selected variant or ask at add-to-cart"],
          ],
        },
      },
      {
        heading: "Persistence Across Devices",
        body: [
          "Customers often save on a phone and buy on a laptop, or the reverse. Store guest wishlists on the device, merge them into the account on sign-in, and keep account wishlists synced across devices. Explain the benefit when prompting sign-in: “Sign in to see your saved items on any device.”",
        ],
      },
      {
        heading: "The Wishlist Page",
        body: [
          "Show each item with image, name, selected variant, current price, price change since saving, stock status and a clear “Add to cart” action. Let customers sort or filter longer lists, remove items easily and move items between named lists. Show when an item is no longer available and suggest alternatives.",
        ],
        cta: {
          title: "Wishlists saved but never revisited?",
          description: "ZSpace Labs designs wishlists with the price, stock and alert features that bring shoppers back.",
        },
      },
      {
        heading: "Price and Stock Alerts",
        body: [
          "Alerts turn a passive list into a reason to return: price drops, low stock and back-in-stock notifications for saved items, sent only with the customer's consent where required. Keep them occasional and relevant, and link straight to the item with the variant selected. See [[/blogs/ecommerce-personalization|ecommerce personalization]] for consented personalization principles.",
        ],
      },
      {
        heading: "Multiple Lists and Sharing",
        body: [
          "Named lists help customers organize projects (“Living room”, “Gift ideas”). Keep a default list so saving remains one tap, and let customers move items later. Sharing via a private link supports gifting and shopping with others; keep lists private by default and make sharing explicit.",
        ],
      },
      {
        heading: "Mobile Patterns",
        body: [
          "On mobile, the save icon on product cards must be large enough to tap without opening the product, and the wishlist should be one tap from the header or account. Show a brief confirmation with a link to the list. See [[/blogs/mobile-ecommerce-ux|mobile ecommerce UX]].",
        ],
      },
      {
        heading: "Accessibility",
        body: [
          "Use a real button with an accessible name that reflects state (“Save to wishlist” / “Remove from wishlist”), announce changes to screen readers, and ensure keyboard focus is visible. Don't rely on the icon's colour alone to show saved state.",
        ],
      },
      {
        heading: "Worked Example: Furniture Wishlists",
        body: [
          "An illustrative scenario: a furniture store's customers often browse for weeks before buying. It lets guests save items, prompts sign-in after the third saved item to sync across devices, supports named room lists, shows price changes and stock in the list, and sends consented price-drop and low-stock alerts. Shared lists let couples plan together. The team tracks save rate, purchases of saved items and alert conversion.",
        ],
      },
      {
        heading: "Wishlists, Saved for Later and Carts",
        body: [
          "Stores often have several ways to keep products: the cart, a “save for later” area in the cart, and a wishlist. Decide how they relate so customers aren't confused. A common pattern: “save for later” moves items out of the cart into the wishlist, the wishlist holds future intentions, and the cart holds what the customer means to buy now. Keep saved items visible from the cart and product pages. See [[/blogs/ecommerce-cart-ux|ecommerce cart UX]].",
        ],
      },
      {
        heading: "Wishlist Data for Merchandising",
        body: [
          "Aggregated wishlist data (which products are saved most, which are saved but rarely bought) is a useful demand signal for buying, restocking and pricing decisions. Frequently saved but rarely bought products may have a price, sizing or information problem worth investigating. Use it in aggregate and within your privacy commitments. See [[/blogs/ecommerce-merchandising|ecommerce merchandising]] and [[/blogs/ecommerce-product-page-design|product page design]].",
        ],
      },
      {
        heading: "Common Mistakes",
        body: [],
        checklist: [
          "Requiring an account before saving",
          "Lists that disappear between devices",
          "No price or stock information in the list",
          "Save icons without accessible names",
          "Alerts sent without consent or too often",
          "Moving to cart that loses the chosen variant",
        ],
        cta: {
          title: "Ready to design wishlists that drive return visits?",
          description: "Talk to ZSpace Labs about [[/services/ui-ux-design|wishlist and account UX]], [[/services/cro-audit|retention testing]] and [[/services/shopify-development|Shopify wishlist setup]].",
        },
      },
      {
        heading: "Conclusion",
        body: [
          "A wishlist is a promise to help customers come back. Make saving instant, keep lists everywhere, show what's changed and alert customers when it matters. For the retention picture, see [[/blogs/ecommerce-customer-retention|ecommerce customer retention]].",
        ],
      },
    ],
  },
];
