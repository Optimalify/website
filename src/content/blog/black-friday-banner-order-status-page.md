---
title: "A Black Friday banner for your order status page"
description: "Schedule a Black Friday or Cyber Monday banner on Shopify's order status page: timing in UTC, copy that works, a discount link, and a checklist to switch it off afterwards."
date: 2026-10-01
tags: [banner, black friday, promotions]
---

Most Black Friday planning stops at the storefront: the homepage hero, the announcement bar, the emails. But there is a page your shoppers visit **after** they buy, and it is rarely part of the plan: the **order status page**.

Shopify describes it as the page where customers can [view, track and manage a specific order](https://shopify.dev/docs/apps/build/customer-accounts). Shoppers return to it to check delivery. That is a good moment for a message, whether it is "your parcel is on its way and here is a code for next time" or "heads-up: holiday shipping is slower". This guide shows how to set one up, schedule it, and take it down again.

## The dates

Black Friday is the day after US Thanksgiving, which is the fourth Thursday of November. In 2026 that makes it **Friday, November 27**, and Cyber Monday **Monday, November 30**. (We worked these out from that rule; we did not take them from a Shopify source, so check them against your own campaign calendar.)

## Why the order status page

- **It is seen by people who already trust you.** They have just paid. A second-purchase offer here is warmer than a cold ad.
- **It is time-sensitive by nature.** Shopify's developer documentation lists delivery updates and order-specific promotions as the kind of content announcement placements are meant for.
- **It is yours to use.** Out of the box, nothing on that page is about your store's campaign.

## What you need

- A store on the new customer accounts (see the [legacy accounts checklist](/blog/legacy-customer-accounts-deprecated-checklist)).
- A banner block for customer accounts. We use Optimalify's Banner, which works on the Orders and Order status pages, and its Free plan covers one block.
- A discount code, if the banner includes an offer.

## Step 1: Write the banner

In **Apps → Optimalify → Blocks → Banner**, click **Add banner** and fill in:

- **Internal name:** "Black Friday 2026".
- **Heading** (up to 80 characters) and **Message** (up to 300).
- **Tone:** `success` suits an offer. Save `warning` for shipping delays.
- **Button:** a label (up to 40 characters) and a link.

Three copy patterns that work for post-purchase customers:

1. **The second-order offer.** Heading: "Thanks for your order." Message: "Black Friday pricing runs until Monday. Take 15% off anything else with code THANKS15." Button: "Shop the sale".
2. **The shipping heads-up.** Heading: "Busy week, on-time packing." Message: "We are packing every order as fast as we can. Tracking updates appear on this page as soon as your parcel ships." Say only what you can keep. Do not promise dates your carrier controls.
3. **The early-access nudge.** Heading: "Cyber Monday starts early for you." Message: "As a customer, you can shop the Cyber Monday deals today." Button: "Shop early".

Write one message and one button. If you have a second message, make a second banner.

## Step 2: Make the button apply the discount

Shopify can generate a **shareable discount link** from a saved discount code. The discount applies automatically to the customer's next checkout cart, or to an active cart. By default the link opens your home page, but you can add a redirect to send customers somewhere specific:

```
https://your-store.com/discount/THANKS15?redirect=/collections/black-friday
```

Use that as the banner's button link. Shopify notes a shareable link can carry only a single discount, and works only for active discounts, so create and activate the code first. If you run multiple discounts on the same product, the most recent one applies to the link.

## Step 3: Schedule it (in UTC)

You do not want to be awake at midnight to switch a banner on. In the banner editor, set **Audience** to **Targeted** and add the **Schedule** condition with a **From** and an **Until** date and time. Optimalify's schedule is in **UTC**, so convert from your store's time zone.

For example, if you want the banner live from midnight on Friday, November 27 in New York, that is 05:00 UTC, because New York is on Eastern Standard Time (UTC−5) by then. Set **Until** the same way for the end of Cyber Monday: midnight at the start of Tuesday, December 1 in New York is 05:00 UTC on December 1.

Two tips:

- Start it a little early if you want to tease the sale before it opens, and set **Until** a few hours late so customers in other time zones are not cut off.
- The editor preview always shows the banner so you can style it. The schedule only applies to real customers on the live pages, so do not worry when you still see it before the start time.

The [banner targeting guide](/help/banner-targeting) lists the other conditions, including customer tags, which you can use to reward your best customers first (that one needs extra app permissions).

## Step 4: Place the block

Shopify needs the block added to the page itself:

1. Go to **Settings → Checkout** and click **Customize** next to your configuration.
2. In the page selector, choose **Order status**.
3. Open **Apps**, click **+** next to **Optimalify Banner**, set its **Entry handle** if you have more than one banner, and **Save**.

Repeat on the **Orders** page if you want the same banner there. Step-by-step help is in [adding blocks to your pages](/help/add-blocks-in-editor).

## Step 5: Test as a customer

Customer account pages show only to signed-in customers. Sign in to a customer account in a new browser tab and check the banner on a real order. Check it on a phone as well as a desktop. Then click the button to confirm the discount applies at checkout.

## The Black Friday checklist

- [ ] Discount code created, active and tested
- [ ] Banner written, set to **Active**, with a **Schedule**
- [ ] Block placed and **saved** on Order status (and Orders if wanted)
- [ ] Button link tested from a signed-in account
- [ ] A reminder to **turn the banner off** or let the schedule end it, and to deactivate the code

## FAQ

### Can I schedule the banner to turn off by itself?

Yes. Set **Until** in the Schedule condition and the banner stops showing after that time. Remember the schedule is in UTC.

### Will customers in other languages see it?

Banner text appears exactly as you write it. If you sell in several languages, write the copy in the language most of your customers read.

### Can I run more than one banner?

Yes. Create several and set each block's **Entry handle** so each page shows the banner you intend. With the Free plan you can use one block; Pro includes all blocks.

### Do I have to remove the banner after the sale?

If you used the Schedule condition, it stops showing after the **Until** time. You can also set the banner's status back to **Draft** to hide it, and you should deactivate the discount code so the link stops working.

## Sources

Checked against Shopify's documentation on October 1, 2026:

- [Building apps for customer accounts](https://shopify.dev/docs/apps/build/customer-accounts) and [Order status announcement and block targets](https://shopify.dev/docs/api/customer-account-ui-extensions/2026-07/targets/order-status), shopify.dev
- [Managing and editing your discounts](https://help.shopify.com/en/manual/discounts/managing-discount-codes) (shareable discount links), Shopify Help Center
- [Upgrading from legacy customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade), Shopify Help Center (adding app blocks in the editor)
- Scheduling and targeting are documented in our own [banner targeting guide](/help/banner-targeting)

## Get the banner ready before the rush

Optimalify lets you write the message, schedule it and place it on the order status page without touching theme code. [Add Optimalify from the Shopify App Store](install:listing) and set up your Black Friday banner on the Free plan, or read the [Banner guide](/help/banner) first.
