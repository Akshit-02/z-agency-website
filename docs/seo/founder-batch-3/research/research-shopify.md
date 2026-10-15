# Batch 3 research: Shopify topics 49–52
Checked 15 Oct 2026. Primary sources are help.shopify.com, shopify.dev and changelog.shopify.com. Batch 2 fact on redirects (100,000 / 20,000,000) is reused from `docs/seo/founder-batch-2/research/research-shopify.md` and re-confirmed below.
Limits on this research: search is US-only, Reddit is unreachable, and People Also Ask boxes are not visible. Demand evidence therefore relies on Shopify Community threads and the competitor SERP. WebFetch summarises pages through a small model, so some long help pages returned partial content. Anything I could not see on a primary page is labelled [Unverified].

---

## Topic 49. Managing Shopify inventory across multiple warehouses and sales channels

1. **Founder question and pain.** "We now have a warehouse, a shop and a 3PL (or Amazon MCF). Why does Shopify show something as out of stock when we have it, why did that order go to the wrong place, and do I need an IMS/ERP yet?" The pain is overselling, split shipments, wrong-location assignment, and stock counts that disagree across channels. In 2026 there is an extra trigger: **Stocky shut down after 31 Aug 2026**, so POS merchants who used it for purchase orders and counts are being pushed into native admin inventory.
2. **Intent and stage.** Problem-aware, mid-funnel operational. Typically Grow/Advanced merchants with 2–10 locations, or brands adding their first 3PL or retail store. Some buyers are evaluating whether native Shopify is enough or whether to buy an IMS/ERP.
3. **Queries.** Primary: "shopify multi location inventory". Supporting: "shopify location limit", "shopify order routing rules", "shopify fulfillment priority", "shopify inventory transfer", "shopify unavailable inventory / committed inventory", "shopify 3pl integration", "shopify fulfillment network", "stocky alternative", "shopify flow low stock alert", "shopify inventory sync amazon".
4. **Demand evidence (moderate).**
   - Shopify Community: "Stocky App Going Away after August 31 2026". The thread runs to at least 6 pages. https://community.shopify.com/t/stocky-app-going-away-after-august-31-2026/587292
   - "How can I manage multi-warehouse inventory and shipments effectively?" https://community.shopify.com/t/how-can-i-manage-multi-warehouse-inventory-and-shipments-effectively/3165
   - "Bug: Assigned fulfillment location on order does not respect inventory level" https://community.shopify.com/t/bug-assigned-fulfillment-location-on-order-does-not-respect-inventory-level/177863
   - "Creating a Shopify Flow trigger based off of a specific location's inventory" https://community.shopify.com/t/creating-a-shopify-flow-trigger-based-off-of-a-specific-locations-inventory/284273
   - Many vendor articles about the Stocky sunset (Prediko, inFlow, Ordoro, Descartes) show that vendors are competing for this traffic.
5. **Existing ZSpace coverage.**
   - `/blogs/ecommerce-inventory-management-integration` (680 words) is platform-neutral: states, source of truth, ATS, safety buffer and multichannel allocation. It contains no Shopify limits, routing rules, transfers or Stocky material.
   - `/blogs/distributed-order-management` (988 words) covers generic sourcing rules, split shipments and ship-from-store, with no Shopify mechanics.
   - `/blogs/oms-vs-ims` (1,064 words) has a single FAQ, "Does Shopify include an OMS and IMS?", answered in one vague sentence.
   - Also adjacent: `/blogs/retail-inventory-visibility`, `/blogs/ecommerce-fulfilment-integration` (3PL messages), `/blogs/ecommerce-warehouse-management-integration` and `/blogs/shopify-business-systems-integration-guide` (Batch 1 topic 12).
   - **Distinctness: confirmed.** None of these pages answers "what does Shopify itself do, and where does it stop?" A Shopify-specific page can carry the facts (location limits, the five inventory states, routing rules and the Plus-only custom routing Function, local delivery and pickup limits, SFN's 2025 change, transfers and purchase orders, the Stocky shutdown, and Flow) and link out to the generic pages for theory. To avoid cannibalisation, the new page must not re-explain DOM, OMS or IMS theory; one paragraph plus links is enough.
   - **Fix in passing:** the `oms-vs-ims` FAQ answer should link to the new page once it exists.
6. **SERP weaknesses.**
   - https://cogsy.com/blog/shopify-locations: an older guide built around the legacy "priority list" model, with no routing rules and nothing on Stocky.
   - https://mgroupweb.com/blogs/shopify-multi-location-inventory/: an agency "2026" guide. In the snippet a related source claims "up to 1,000 locations". Shopify's own limit is 200 on Plus, so third-party limit claims are unreliable.
   - https://katanamrp.com/blog/shopify-multiple-warehouses/: a vendor pitch for its MRP.
   - https://ecosire.com/blog/shopify-inventory-multi-location: a generic, ERP-vendor angle.
   - https://www.cleverence.com/articles/shopify-us-documentation/shopify-help-center-locations-4827/: a paraphrase of the help center.
   - **Gap:** nobody explains in one place the post-2025 changes: SFN's switch to a multi-3PL marketplace, purchase orders that create transfers (June 2026), the Stocky shutdown, and custom routing being Plus-only by request.
7. **Qualified-buyer potential: high.** Readers with several locations and a 3PL have real revenue and integration budgets. This maps to Shopify development, custom app and ERP/3PL integration work.
8. **Format and original asset.** A practitioner guide (~2,500 words) with these assets:
   - **(a)** A "Shopify native vs app vs IMS/ERP" decision table by scenario: 1 warehouse plus 1 store; adding a 3PL; retail chain with BOPIS; marketplaces; kitting and forecasting.
   - **(b)** A routing-rule worksheet: list the locations, which rules apply in which order, and the expected outcome for 4 sample orders.
   - **(c)** A "where stock disappears" diagnostic: committed vs unavailable reasons, a zero-stock online location blocking sales, and an app-managed location.
   - **(d)** A post-Stocky migration checklist: export POs, cost history and stocktakes before data is lost.
9. **Service page and CTA.** `/services/shopify-development`, with the CTA "Map your locations, routing and 3PL sync before you add the next warehouse." The secondary link is the integration guide.
10. **Recommendation: CREATE `/blogs/shopify-multi-location-inventory-management`. I agree with your call.** It is distinct from the generic pages. The Stocky shutdown and the SFN change make it timely, and neither is covered anywhere on the site. Keep the scope Shopify-mechanics-first and link to the DOM, OMS-vs-IMS and inventory-integration pages for theory.
11. **Facts an article would need** (checked 15 Oct 2026)

| Claim | Source | Label |
|---|---|---|
| Active location limits: **Starter 2; Basic, Grow and Advanced 10 each; Plus 200**. Deactivated locations don't count. Reactivating one counts again. | https://help.shopify.com/en/manual/locations/setting-up-your-locations | [Official] |
| "If you use apps that physically stock inventory for you, then they're treated as locations… they don't count toward your location limit." This covers 3PLs, dropshipping apps and custom fulfilment services. | same; https://help.shopify.com/en/manual/products/inventory/setup/multi-managed-inventory | [Official] |
| Multi-managed inventory: some fulfilment apps can manage stock for the same product alongside your own locations. With apps that don't support this, the product can't also be stocked at your locations. | https://help.shopify.com/en/manual/products/inventory/setup/multi-managed-inventory | [Official] (via search summary; re-read the page before quoting) |
| Inventory states: **On hand** = all units at a location (= committed + unavailable + available). **Available** = can sell. **Committed** = set aside and can't be sold (unfulfilled orders, draft-order reservations, transfers marked ready to ship). **Unavailable** = set aside by apps or held for other reasons (damaged, quality control, safety stock). **Incoming** = on the way (transfers, purchase orders, apps), becoming Available when received. No plan restriction is stated. | https://help.shopify.com/en/manual/products/inventory/managing-inventory-quantities/inventory-states | [Official] |
| The API also has a `reserved` quantity name. The admin shows reserved, damaged, safety_stock and quality_control as "Unavailable". | https://shopify.dev/docs/apps/build/orders-fulfillment/inventory-management-apps | [Official] (search summary) |
| Order routing "requires 2 or more active locations" and "applies rules in sequence to prioritize locations". The default strategy is: minimise split fulfilments, stay within the destination market, and ship from the closest location. You can also create rules on **location metafields** (e.g. capacity, speed). | https://help.shopify.com/en/manual/fulfillment/setup/order-routing | [Official] |
| "Ship from closest location" uses straight-line (Haversine) distance. There is a "Ranked locations" rule for prioritising specific warehouses, stores or 3PLs. | Help page via search snippet; https://community.shopify.com/t/introducing-smart-order-routing/229931 | Haversine [Official, snippet]. Ranked-locations detail [Unverified]: check it in the admin. |
| Custom routing via the **Order Routing Location Rule Function API** is "only available by request for merchants that have a Shopify Plus plan". It is not supported for subscriptions (recurring orders), pre-order/TBYB or checkout order edits. POS is supported only when shipping to a customer. | https://shopify.dev/docs/api/functions/latest/order-routing-location-rule | [Official] |
| Legacy behaviour (older help text): POS sales use inventory at the location of sale. If a location that fulfils online orders has 0 stock and the location with stock doesn't fulfil online orders, the item shows as out of stock online. | https://help.shopify.com/manual/locations/setting-up-your-location-fulfillments | [Official] (search snippet; this may predate routing rules, so re-check) |
| Local delivery: turned on per location; **up to 10 zones per location**; postal-code list up to 3,000 characters or a radius up to **160 km / 100 miles**; up to 3 extra price rules per zone; minimum order per zone. It is not available at B2B checkout. It is not offered with Apple Pay, Google Pay, Amazon Pay or PayPal chosen in the first checkout step. Shipped and locally delivered items can't be combined in one order. Zones never cross a country border. | https://help.shopify.com/en/manual/fulfillment/setup/delivery-methods/local-delivery | [Official] |
| Pickup in store: set up per location. By default pickup is offered only if the entire order is in stock there, but **store transfers** can be enabled with a separate processing time. Customers see pickup locations only in their own country. Each pickup location needs a shipping zone. | https://help.shopify.com/en/manual/fulfillment/setup/delivery-methods/pickup-in-store | [Official] |
| SFN history: on 6 Jun 2023 Flexport completed its acquisition of Shopify's logistics business (incl. Deliverr). Shopify received a 13% equity stake and a board seat. Flexport became the primary Shop Promise provider. | https://www.freightwaves.com/news/flexport-completes-acquisition-of-shopify-logistics-business | [Industry] |
| SFN now: an app that lets you "connect with third-party logistics providers (3PLs) that store your inventory and fulfill orders on your behalf". On **26 Aug 2025** five partners were added: Amazon MCF, DHL Fulfillment Network, Bigblue, Mayple and GoBolt. shopify.com/logistics lists Amazon MCF, Bigblue, DHL, Flexport ("Preferred partner"), GoBolt, Mayple Global, ShipBob and Shipfusion. No pricing is published. DHL is "from 3,000 orders a month". | https://help.shopify.com/manual/shipping/sfn ; https://changelog.shopify.com/posts/new-partners-join-shopify-fulfillment-network ; https://www.shopify.com/logistics | [Official]/[Vendor]. Partner availability by country (India, UAE, AU) is [Unverified]. |
| Charging duties at checkout is not possible if the store uses SFN (B2 fact). | https://help.shopify.com/manual/markets/duties-and-import-taxes/charging-duties | [Official] (B2, 14 Oct) |
| Transfers move stock between your locations, or to and from external locations such as suppliers. Shipments are created automatically. Partial receiving and multiple shipments are supported. Since **6 Jan 2026** shipments can be edited after they are in transit or received, and transfers can have no origin (supplier) or no destination (write-off, external warehouse). | https://help.shopify.com/en/manual/products/inventory/transfers ; https://changelog.shopify.com/posts/greater-flexibility-for-inventory-transfers | [Official] (6 Jan date via search summary) |
| **22 Jun 2026**: purchase orders create linked transfers. Stock can be received in admin or POS. There is CSV import of PO line items, and cost auto-fills from the previous price or the product's cost per item. No plan restriction is stated. | https://changelog.shopify.com/posts/purchase-orders-now-create-transfers-to-move-inventory | [Official] |
| "The Stocky app will no longer be available after August 31st, 2026." It can no longer be installed. Merchants must move to native inventory management. | https://help.shopify.com/en/manual/sell-in-person/shopify-pos/inventory-management/stocky | [Official]. Third-party claims that forecasting is not replaced and supplier records can't be exported are [Vendor]/[Unverified]. |
| Shopify Flow: "a free app available on the Basic, Grow, Advanced, and Plus plans" (so **not Starter**). The inventory trigger is now "Product variant inventory quantity changed". Typical automations are low-stock email/Slack alerts, tagging restocked items and hiding zero-stock products. | https://help.shopify.com/en/manual/shopify-flow ; https://help.shopify.com/changelog/inventory-item-new-fields-and-productvariant-deprecations | Plans [Official]. Trigger name [Official, snippet]. Specific template names [Unverified]. |
| Sales channels draw on the same location inventory. Whether a location's stock is sellable online depends on its "fulfil online orders" setting. Marketplace sync (Amazon and others) runs through channel apps or an IMS. | Help pages above | [Inference]. Verify per channel. |

---

## Topic 50. Building a better repeat-purchase experience on Shopify

1. **Founder question and pain.** "Customers buy once and disappear. What can Shopify do natively (reorder, subscriptions, accounts, emails) before I pay for a loyalty/retention stack?" The pain is a low second-order rate, rising CAC, and app sprawl (subscription, loyalty, reviews and email apps all bolted on).
2. **Intent and stage.** Mostly informational and mid-funnel. Readers are post-launch D2C merchants with consumable or replenishable products.
3. **Queries.** Primary: "shopify repeat purchases". Supporting: "shopify buy again button", "shopify reorder button customer account", "shopify subscriptions app vs recharge", "shopify win back email", "shop app for merchants", "shopify loyalty program".
4. **Demand evidence (moderate but fragmented).** Most of the SERP is app vendors.
   - Community threads are about controlling the native button, not about strategy:
     - https://community.shopify.com/t/how-can-i-remove-the-buy-again-option-in-customer-orders-page/241942
     - https://community.shopify.dev/t/hide-buy-again-button-in-customer-portal-view-order/10868
     - https://community.shopify.com/t/how-can-i-modify-the-order-again-button-link-in-a-headless-shops-customer-accounts/315886 (headless: "Order again" redirects to the default theme)
   - So the Shopify-specific demand is narrow and technical.
5. **Existing ZSpace coverage (checked).**
   - `ecommerce-repeat-purchases` (844 words; commerce-14) covers the second order, replenishment timing, buy-again journey, mechanisms table and account experience.
   - `ecommerce-customer-retention` (1,038 words) covers measurement, lifecycle messaging, subscriptions, loyalty and accounts.
   - `ecommerce-reorder-experience` (789 words; commerce-40) covers where reorder appears, current prices and availability, saved carts and "Designing the Buy-Again Section". It mentions Shopify only in the CTA.
   - `d2c-repeat-purchase-ux` (573 words; design-3) is thin, but it is a UX angle.
   - `ecommerce-customer-retention-technology` (1,034 words) covers the stack.
   - Plus `shopify-subscription-store` (1,131 words; commerce-17), which already covers the Shopify Subscriptions app (features, failed-payment retries, self-serve management, gateways).
   - **What's missing:** no page says what Shopify gives you for free. That means the native "Buy again" in new customer accounts and its limits, Shop app order tracking and post-purchase posts, Shopify's free win-back and first-purchase-upsell automations, and Flow tagging of first-time buyers.
   - **Outdated:** the `shopify-subscription-store` gateway sentence lists only Shopify Payments, PayPal Express and Authorize.net. The help page now also lists **Adyen** (existing Adyen approval only) and **Stripe** (select merchants only). Separately, **Shopify Payments is not available in India**, so Indian stores need one of the other gateways for the native app. That limit is relevant to ZSpace's main market and should be stated.
6. **SERP weaknesses.**
   - https://www.shopify.com/blog/repeat-purchases-increase: Shopify's own blog, with self-reported stats.
   - https://sidepanda.com/post/how-to-drive-repeat-purchases-with-your-shopify-store: an app vendor.
   - https://akohub.com/blogs/how-to-increase-repeat-purchases-in-shopify-a-data-driven-retention-lifecycle-marketing-playbook-2026: a generic playbook.
   - https://blog.shopney.co/increase-repeat-sales-on-your-shopify-store-mobile-app/: a mobile-app vendor.
   - https://xgentech.net/blogs/resources/how-to-drive-more-repeat-purchases-and-boost-loyalty-on-your-shopify-store: unsourced "20% lift" claims.
   - **Gap:** none separate native from app from custom work. ZSpace's five generic pages already beat these on depth, so a sixth page would cannibalise them.
7. **Qualified-buyer potential: medium.** It is a strong CRO/UX lead when tied to an audit, and weak as standalone traffic.
8. **Format and asset (for the update only).** A compact "Native on Shopify" box: feature, where it lives, limit, and when you need an app or custom build.
9. **Service and CTA.** `/services/cro-audit` (repeat-purchase audit) with `/services/shopify-development` as the secondary link.
10. **Recommendation: KEEP, with one minimal UPDATE. I agree with your call.** Make no new page. The minimal update:
    - **(a)** Add an H2 "Buy again on Shopify" (~200 words) to **`/blogs/ecommerce-reorder-experience`**. It is the page whose topic is the buy-again section, and it currently has no Shopify detail. Cover:
      - New customer accounts include reorder ("Buy again") on orders.
      - The checkout and accounts editor has a Buy again setting (B2 fact).
      - The native button re-adds variant and quantity, so line-item properties/custom options are lost [Vendor, verify on a dev store].
      - On headless stores the button goes to the Online Store theme (community report).
      - Shop app "Track with Shop" and posts are post-purchase touchpoints.
      - Link to `shopify-subscription-store` for subscriptions.
    - **(b)** Fix the gateway sentence in `shopify-subscription-store` (add Adyen and Stripe with their limits; note that Shopify Payments isn't offered in India).
    - Don't add Shopify detail to the other four pages. One internal link from `ecommerce-repeat-purchases` "Designing the Buy-Again Journey" to the new H2 is enough.
11. **Facts an article would need** (checked 15 Oct 2026)

| Claim | Source | Label |
|---|---|---|
| New customer accounts let customers "view and manage their orders" and take actions "such as self-serve returns or reordering". The orders page shows "Buy again". Sign-in uses a one-time 6-digit code, and sessions last up to 365 days. Shop users can sign in with Shop/passkeys. Plus can connect its own identity provider. | https://help.shopify.com/en/manual/customers/customer-accounts/new-customer-accounts | [Official] |
| Legacy customer accounts deprecated 26 Feb 2026 (B2). | https://changelog.shopify.com/posts/legacy-customer-accounts-are-now-deprecated | [Official] (B2, 14 Oct) |
| The checkout editor branding settings include "Buy again" (B2). | https://help.shopify.com/en/manual/checkout-settings/customize-checkout-configurations/checkout-style | [Official] (B2, 14 Oct) |
| The native buy-again re-adds variant and quantity only, and custom product options are missing. | https://docs.cloudlift.app/article/213-customer-accounts | [Vendor]/[Unverified]. Test before stating. |
| Headless + new customer accounts: "Order again" redirects to the default Online Store theme. | https://community.shopify.com/t/how-can-i-modify-the-order-again-button-link-in-a-headless-shops-customer-accounts/315886 | Community report [Unverified] |
| Shopify Subscriptions: auto-billed subscriptions renewing "weekly, monthly, or yearly"; modify/skip/pause/cancel; discount types; POS selling; customers manage subscriptions in their customer account. | https://help.shopify.com/en/manual/products/purchase-options/shopify-subscriptions | [Official] |
| Shopify Subscriptions gateways: Shopify Payments, PayPal Express, Authorize.net, Adyen (existing Adyen approval only), Stripe (select merchants only). Subscriptions are supported only on Online Store, POS, Shop and custom storefront channels. | https://help.shopify.com/en/manual/products/purchase-options/shopify-subscriptions/considerations | [Official] |
| Shopify Payments is available in 41 countries, including the UAE, Australia, the UK and Singapore. **India is not listed.** | https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries | [Official] |
| Shop channel: "Track with Shop" from the order status page; posts and post-purchase offers; Shop Cash earn and redeem; stores meeting the Shop Merchant Guidelines are listed automatically; Shop is available where Shopify Payments is supported. | https://help.shopify.com/en/manual/online-sales-channels/shop | [Official]. This implies limited Shop channel reach for India-based stores [Inference]. |
| Shopify's free automations include welcome, win-back (default: fulfilled order + 60-day wait, editable) and first-purchase upsell templates. | https://www.shopify.com/marketing-automation | [Vendor]. 60-day default [Unverified] (search snippet). |
| B2B cannot use subscriptions (B2). | https://help.shopify.com/en/manual/b2b/getting-started/considerations | [Official] (B2) |

---

## Topic 51. Designing a Shopify returns and exchanges process customers can understand

1. **Founder question and pain.** "Returns are handled over email and WhatsApp, customers don't know if they're eligible, and exchanges get turned into refunds. Can Shopify do this natively, or do I need a returns app?" The pain is support load, lost revenue from refunds that could have been exchanges, and inventory that drifts when returned stock isn't restocked to the right place.
2. **Intent and stage.** Operational, mid-funnel, close to a tooling decision (native vs apps such as Loop, AfterShip or Rich Returns). This is high for apparel and footwear.
3. **Queries.** Primary: "shopify returns and exchanges". Supporting: "shopify self serve returns", "shopify return rules", "shopify restocking fee", "shopify return label" (and "…UK/Canada/Australia"), "shopify store credit refund", "shopify exchange different product", "best returns app shopify".
4. **Demand evidence (moderate).** Several vendor pages target country-specific label queries, which tells us merchants outside the US hit the label limit:
   - https://returnzap.com/blog/uk-shopify-return-labels
   - https://returnzap.com/blog/canadian-shopify-return-labels
   - Ringly (Sept 2026) writes about native self-serve returns: https://www.ringly.io/blog/shopify-self-service-returns
   - Community threads were not separately checked (search summary only).
5. **Existing ZSpace coverage and accuracy.**
   - **`/blogs/ecommerce-returns-management`** (1,298 words). The "Returns on Shopify" H2 is one paragraph: "Shopify supports return requests, return rules, return labels and refunds, and customers can request returns from their accounts where enabled. Returns apps add portals, exchange flows, store credit incentives and analytics…" **It is not wrong, but it is misleading for ZSpace's markets:**
     - **(a)** Return labels can be created in admin only when the default location (and the customer's address) is in the **US**. Merchants in India, the UAE, AU, the UK and SG must upload a PDF/JPEG label or URL from their carrier.
     - **(b)** It implies portals and store credit need apps. Native **store credit** exists (refund to original payment, store credit, or split; optional expiry). It requires new customer accounts.
     - **(c)** It omits the useful native controls: return windows (14/30/90/unlimited/custom), per-collection/product overrides, final-sale exclusions, return shipping fee (free / flat / customer buys label), percentage restocking fee, and self-serve **cancellation** windows.
   - **`/blogs/ecommerce-exchange-management`** (1,062 words). The FAQ "Does Shopify support exchanges?" says exchanges are supported in the admin and the GraphQL Admin API, and that apps add customer-facing flows. **It is accurate but incomplete.** Add these points:
     - Exchanges for online orders have been available to all merchants since 28 Feb 2024.
     - In native self-serve, customers request a *return*. The merchant adds exchange items at approval. Customer-initiated exchanges need an app [Vendor-reported, consistent with Shopify's self-serve page].
     - Exchange inventory **isn't reserved until the return is processed**. This matters because the page's own "Stock Reservation" H2 recommends reserving.
     - Exchange items can't be added to orders with duties.
     - The customer can pay a balance via invoice.
6. **SERP weaknesses.**
   - https://bogos.io/shopify-returns/: an app vendor.
   - https://www.shipaid.com/blogs/news/does-shopify-handle-returns-a-comprehensive-guide-to-streamlining-your-returns-process: AI-ish, generic.
   - https://eseospace.com/blog/shopify-returns-and-exchanges/: decent native-vs-app framing, but it states limits secondhand (e.g. a "250 line-item cap" I could not verify).
   - https://www.ringly.io/blog/shopify-self-service-returns: a services vendor, current.
   - https://www.cleverence.com/amp/articles/shopify-us-documentation/setting-up-self-serve-returns-shopify-help-8123/: a help-centre paraphrase.
   - **Gap:** nobody writes for non-US merchants (labels, local consumer law) or shows customer-facing policy copy aligned to Shopify return rules.
7. **Qualified-buyer potential: medium–high** for apparel and beauty brands. It leads to CRO/UX and Shopify work (portal design, policy pages, custom returns apps). Note the 1 Dec 2026 Built for Shopify requirement on returns apps.
8. **Format and asset (inside the update).**
   - A "Native Shopify returns: what's built in, what needs an app" table.
   - A one-screen policy-copy template that mirrors the return rules: window, final-sale list, who pays shipping, restocking fee, refund method and timing, how exchanges work.
9. **Service and CTA.** `/services/shopify-development` (returns setup and app integration). `/services/ui-ux-design` for the account/returns UX.
10. **Recommendation: minor UPDATE to `/blogs/ecommerce-returns-management`, plus a 2-sentence FAQ edit on `/blogs/ecommerce-exchange-management`. I agree with your call.** Make no new page. Expand "Returns on Shopify" to ~300 words:
    - native self-serve returns and cancellations
    - return rules
    - US-only labels and the upload alternative
    - restocking and return-shipping fees
    - native store credit and its prerequisites
    - exchanges added at approval
    - when an app is worth it (customer-chosen exchanges, instant exchanges, label generation outside the US, analytics)
    Keep the existing "UK Returns Rules" H2. Add at most one sentence each for AU and India, and only once verified (see the table).
11. **Facts an article would need** (checked 15 Oct 2026)

| Claim | Source | Label |
|---|---|---|
| Self-serve: customers can "request to return items that have been delivered, or cancel items that haven't shipped yet". The merchant approves or declines in admin, can add exchange items when approving, and can provide shipping instructions and labels. | https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/self-serve-returns | [Official] |
| Self-serve requests come "from their accounts". Third parties state it does not work with legacy customer accounts (legacy accounts were deprecated 26 Feb 2026, B2). | https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/return-rules ; https://eseospace.com/blog/shopify-returns-and-exchanges/ | [Official]; legacy incompatibility [Vendor] |
| Return rules: window 14 / 30 / 90 days / Unlimited / Custom, starting from each item's delivery or from the last item's delivery, optionally extended to the next business day. Overrides by collection, product or variant (the shortest applies). Return shipping: free, flat fee, or the customer buys a label. **Restocking fee as a percentage**, editable per return and per item. **Final sale** by collections or products (not both in one rule; bundles can't be final sale). Cancellation windows: none / until fulfilled / 15 min / 1 h / 24 h. Rules can differ by market. POS needs **POS Pro**. Rules apply to B2B. For EU customers Shopify recommends ≥14 days from the last delivery. | https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/return-rules | [Official] |
| On processing, the restocking fee depends on the items processed, and the return shipping fee is applied the first time a return is processed. Restocking to a chosen location is optional. | https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/processing-returns | [Official]. The vendor claim that fees "aren't deducted automatically" conflicts with this, so test in admin. |
| You can refund without a return, but you can't create a return after a refund has been issued. | Processing-returns page (search snippet) | [Official, snippet] |
| Exchanges for online orders are "open to all merchants" (28 Feb 2024). They can draw on the full catalogue, return fees are tracked, and accounting changes affect third-party apps. | https://changelog.shopify.com/posts/retain-more-revenue-with-built-in-exchanges-on-shopify | [Official]. The help page still says Plus merchants can enable exchanges via "feature test drive", which is legacy wording. |
| Exchange limits: no custom items; can't be added to orders with duties; order-level discounts don't apply (product discounts can); "Exchange items inventory isn't reserved until you process the return"; same limits as order editing. Even exchange: the money paid is applied to the new items. If the customer owes money, send an invoice or charge the card on file. | https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/creating-returns | [Official] |
| Customers cannot start an exchange in native self-serve; the merchant adds exchange items at approval. | https://www.ringly.io/blog/shopify-self-service-returns | [Vendor]. Consistent with the [Official] self-serve page. |
| Return labels: only "if your default location is in the United States and your business accepts returns" (search snippet adds: the customer address must also be in the US). Otherwise, upload a PDF/JPEG label or a label URL. | https://help.shopify.com/manual/shipping/shopify-shipping/shipping-labels ; https://help.shopify.com/manual/orders/refunds-returns/self-serve-returns/managing-returns | [Official] |
| Refund method: original payment, store credit, or both. Optional expiry. Staff need both refund permissions to see all options. | https://help.shopify.com/en/manual/fulfillment/managing-orders/returns/processing-returns | [Official] |
| Store credit: requires new customer accounts ("isn't available for legacy customer accounts"). Redeemed when signed in or via Shop Pay. The full balance only is applied. Works on Online Store, POS and Shop only; not on draft or edited orders. Balance must match the checkout currency. Per-customer cap below USD 15,000. Stores created on or after 12 May 2025 pay third-party transaction fees on amounts paid with store credit. Check local law before setting expiry. | https://help.shopify.com/en/manual/customers/store-credit | [Official] |
| From **1 Dec 2026**, returns/exchanges and subscription apps with buyer-facing self-service must authenticate customers via the Customer Account API to keep Built for Shopify status (posted 17 Jun 2026). | https://shopify.dev/changelog/built-for-shopify-requirements-for-returns-and-exchanges-and-subscription-apps | [Official] |
| **India (context):** the Consumer Protection (E-Commerce) Rules, 2020 (notified 23 Jul 2020) require e-commerce entities to show return, refund, exchange, warranty and grievance information before purchase. They do not create a universal change-of-mind return right. | https://ssrana.in/articles/consumer-protection-e-commerce-rules-2020/ | [Industry]. Cite the notified text from consumeraffairs.nic.in before publishing. "No universal right" is [Inference]. |
| **Australia (context):** under the Australian Consumer Law, change-of-mind refunds are not mandatory, but consumer-guarantee remedies are, and "no refunds" signs are not allowed. | https://www.accc.gov.au/consumers/buying-products-and-services/repair-replace-refund | [Unverified]: the page returned 403 today. Re-fetch before stating. |
| **UK:** already covered on the page's existing UK H2 (14-day cancellation for distance sales). It was not re-verified in this batch. | n/a | Check against the B1/B2 notes. |

---

## Topic 52. Migration checklist: what to test before and after switching platforms

1. **Founder question and pain.** "We're about to switch platforms. What exactly do we test before go-live, and what do we watch in the days after, so we don't lose orders, rankings or tracking?" The pain is silent failures after cutover: payments for one method failing, orders not reaching the 3PL, duplicate purchase events, redirect gaps, and accounting mismatches found a month later.
2. **Intent and stage.** Decision/implementation stage. These are high-intent buyers already committed to a migration, often looking for an agency to run it.
3. **Queries.** Primary: "ecommerce migration testing checklist". Supporting: "post-migration checklist ecommerce", "replatforming hypercare", "shopify test order", "shopify bogus gateway" (still the common search term), "shopify redirect limit", "after migrating to shopify checklist".
4. **Demand evidence (moderate; mostly SERP).**
   - Many agency and vendor replatforming checklists exist (below).
   - Searching for a dedicated "first 72 hours" or hypercare checklist found **none**, which is the gap.
   - Community: https://community.shopify.com/t/i-am-unable-to-index-my-page-on-google-search-console/385370 (sitemap unreadable after removing the password) is a typical post-launch problem.
5. **Existing ZSpace coverage (checked, with substantial overlap).**
   - `ecommerce-platform-migration-checklist` (906 words). **The proposed slug already exists, as you noted.** Its section "11. Launch and Aftercare" has one checklist line for monitoring.
   - `ecommerce-migration-testing` (979 words; commerce-68). It covers pre-launch only: priorities, checkout, ops, data, accounts, integrations, redirects, analytics, UAT and a test-cycle table ending at "Launch: smoke tests, live payments". There is **no post-launch section**. The FAQ "Should test orders use real payments?" mentions test modes generically.
   - `migrating-to-shopify-guide` (1,414 words) **already has** "Step 7: Test" (a 7-item Shopify checklist), "Step 9: Monitor and Stabilize" and a **"The First 30 Days After Launch" table** (Day 1 / Week 1 / Weeks 2–4 / Day 30). That table is SEO- and traffic-heavy.
   - `woocommerce-to-shopify-migration-checklist` (B2) has "Post-launch checks" (8 items).
   - The site also has "URL Migration to Shopify" content in a redirect page (Step 7 redirect-test sketch).
   - **What's missing:**
     - **(a)** A first-72-hours hypercare plan: who watches what, hourly or daily, and with what rollback triggers.
     - **(b)** A 30-day *operational* reconciliation (finance payouts vs orders, refunds and returns through the first cycle, inventory drift, 3PL acknowledgements, subscription renewals). The Shopify guide's 30-day table covers SEO and traffic, not operations.
     - **(c)** Correct Shopify test mechanics: the "Bogus Gateway" is now called **Test payment gateway**; it is incompatible with POS and subscription products; Shopify Payments test mode is unavailable for Indian stores.
6. **SERP weaknesses.**
   - https://www.noibu.com/blog/ecommerce-replatforming-checklist-apka7: a monitoring-vendor angle.
   - https://cartcoders.com/blog/website-migration/ecommerce-replatforming-planning-migration-launch/: generic.
   - https://www.gorillagroup.com/trending/ecommerce-replatforming-checklist-3-0: enterprise, pre-launch heavy.
   - https://www.oyova.com/blog/ecommerce-replatforming-checklist/: generic.
   - https://signin.coredna.com/guides/ecommerce-replatforming-checklist: a vendor.
   - **Gap:** none gives a time-boxed post-launch verification plan with owners and rollback triggers.
7. **Qualified-buyer potential: high.** Migration buyers are the most project-ready audience ZSpace has.
8. **Format and asset.** An H2 "After launch: verification plan" in `ecommerce-migration-testing`:
   - **(a)** A table: T+0–2 h (smoke: one live order per payment method, then refund; order reaches the 3PL/ERP; emails; top-100 redirects; purchase event fires once), T+24 h, T+72 h (full redirect list, 404 log, payout and tax spot-check, support-ticket themes), then weekly to day 30 (payout reconciliation, first returns and refunds, inventory variance, subscription renewals, Search Console coverage).
   - **(b)** Rollback and hotfix triggers (e.g. any payment method failing, orders not reaching fulfilment).
   - **(c)** Owners per row.
9. **Service and CTA.** `/services/website-development` (migration QA), plus `/services/shopify-development` for Shopify destinations.
10. **Recommendation: minor UPDATE to `/blogs/ecommerce-migration-testing`. I agree, with one refinement.**
    - Keep that page **platform-neutral**. Add the after-launch plan focused on operational verification (72 h and 30 days). Link to `migrating-to-shopify-guide#the-first-30-days-after-launch` for the SEO/traffic side so the two tables don't duplicate each other.
    - Put the **Shopify-specific test mechanics** into `migrating-to-shopify-guide` "Step 7: Test", which is already Shopify-specific: the Test payment gateway (1/2/3), Shopify Payments test mode, the "can't take live orders while in test mode" warning, the incompatibility with subscriptions and POS, redirects working only from 404 URLs, and the 100k / 20M limits.
    - In `ecommerce-migration-testing`, use a 3-bullet "If you're moving to Shopify" box that links there, rather than duplicating the content.
    - Also refresh that page's FAQ "Should test orders use real payments?" to name test gateways and the processor-fee caveat on real refunds.
    - Do not touch `ecommerce-platform-migration-checklist` beyond one link to the new H2.
11. **Facts an article would need** (checked 15 Oct 2026)

| Claim | Source | Label |
|---|---|---|
| Three ways to test: a test payment gateway (simulated), Shopify Payments test mode, or a real provider (place an order, then immediately cancel and refund). "Customers can't place live orders during the time that your payment providers are in test mode." Test orders don't appear in payouts or reports. You can test a gateway only on a paid plan. With a real provider "you might be charged processor fees", even after a refund. | https://help.shopify.com/en/manual/checkout-settings/test-orders | [Official] |
| **"Test payment gateway"** (formerly known as Bogus Gateway; the current help page no longer uses that name). Deactivate any active credit-card provider (Shopify Payments or third-party) first, then activate it in Settings > Payments. Card number **1** = approved, **2** = declined, **3** = gateway failure; name on card "Test payment gateway"; any CVV; any future expiry. Purchases must exceed USD 1 equivalent. **Not compatible with Shopify POS or subscription products.** | https://help.shopify.com/en/manual/checkout-settings/test-orders/payments-test-mode | [Official]. The "Bogus Gateway" rename is [Inference] from the absence of the old name; avoid stating a rename date. |
| Shopify Payments test mode: Settings > Payments > Shopify Payments > Manage > Test mode. Success cards 4242 4242 4242 4242 (Visa) and 5555 5555 5555 4444 (Mastercard). Failure cards 4000 0000 0000 0002 (decline) and 4000 0000 0000 0259 (chargeback). It doesn't cover POS card readers, Shop Pay Installments or the PayPal wallet. It "shouldn't be used on a store in production". | same | [Official] |
| Shopify Payments is not available in India, so Indian stores test with the Test payment gateway or their third-party gateway's own test mode. | https://help.shopify.com/en/manual/payments/shopify-payments/supported-countries | [Official] list. Gateway test modes are [Inference]. |
| Redirects: max **100,000** (standard) and **20,000,000** (Plus). They work only from broken (404) URLs: if the source still loads a page, the redirect won't fire. URLs with query strings "might not work as expected". CSV import via the sample file (headers not stated). | https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect | [Official] (re-confirmed 15 Oct; matches B2) |
| Shopify auto-generates sitemap.xml at the domain root and updates it automatically. A password-protected store can't be crawled, so remove the password before submitting. | https://help.shopify.com/manual/using-themes/find-site-map | Sitemap [Official, snippet]. Password effect [Industry]/[Inference]. |
| Legacy customer accounts deprecated 26 Feb 2026. Customers sign in with an email code, with no passwords to migrate (B2). | https://changelog.shopify.com/posts/legacy-customer-accounts-are-now-deprecated | [Official] (B2) |
| Test payment gateway can't test subscription products, so test subscription renewals on the real gateway or in the subscription app's test tools. | payments-test-mode page above | [Official] + [Inference] |
| Typical post-migration failure modes: checkout integration breaks, performance regressions, third-party tag failures, SEO loss and data-integrity issues. | https://www.noibu.com/blog/ecommerce-replatforming-checklist-apka7 | [Vendor] |

---

## Cross-topic fixes to existing copy (summary)
- `shopify-subscription-store` (commerce-17): add Adyen (existing approval) and Stripe (select merchants) to the gateway list, and state that Shopify Payments isn't offered in India.
- `ecommerce-returns-management` (Returns on Shopify): the label claim is US-only. Add native store credit, return rules detail and the self-serve cancellation window.
- `ecommerce-exchange-management` FAQ: say exchanges have been open to all merchants since Feb 2024, that customers can't pick an exchange in native self-serve, and that exchange stock isn't reserved until the return is processed.
- `ecommerce-migration-testing` FAQ "Should test orders use real payments?": name the Test payment gateway and Shopify Payments test mode, and add the processor-fee caveat.
- `oms-vs-ims` FAQ "Does Shopify include an OMS and IMS?": link to the new multi-location page once it is live.
