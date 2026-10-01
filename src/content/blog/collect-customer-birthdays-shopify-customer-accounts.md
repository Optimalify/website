---
title: "How to collect customer birthdays on Shopify (new customer accounts)"
description: "Ask signed-in customers for their birthday and contact preferences on the Profile page of Shopify's new customer accounts, and use it for birthday offers, with no theme code."
date: 2026-10-01
tags: [profile, birthdays, zero-party data]
---

A birthday offer is one of the few marketing emails customers are happy to get. The hard part is the data: how do you get a birthday from a customer without a pop-up, a long sign-up form or a clumsy survey?

On Shopify's new customer accounts there is a natural place to ask: the **Profile** page, where signed-in customers already manage their name, addresses and preferences. This guide shows how to put a birthday field there, where the answer is stored, and how to use it responsibly.

## Why the Profile page is a good place to ask

- **The customer chose to be there.** They are signed in and managing their own details, so the question feels like part of their account and not an interruption.
- **It is zero-party data.** The customer gives it to you on purpose. You are not guessing or buying it.
- **You can attach it to the customer.** Shopify's developer documentation describes the Profile page as the page where customers manage personal information, and lists customer metafields among the things apps can show there. It also documents writing to customer metafields from a customer account extension through the Customer Account API, so the answer is stored with the customer inside Shopify and not in a separate spreadsheet.

You do not need to write any of that yourself. A block app does it for you.

## What you need

- A store on the **new customer accounts** (our [legacy accounts checklist](/blog/legacy-customer-accounts-deprecated-checklist) explains how to check).
- A profile block for customer accounts. Optimalify's **Profile** block collects a **birthday** and **contact preferences** and saves them to the customer.

## Step 1: Configure the Profile block

1. In your Shopify admin, open **Apps → Optimalify → Blocks → Profile**.
2. Under **Fields to collect**, turn on **Birthday**. Turn on **Contact preferences** too if you want customers to pick what they hear about. At least one field must be on, or the block will not show.
3. Write a **heading** and **subheading** that say why you are asking, for example "Your birthday" and "Tell us and we'll send you a treat." If you leave them blank, Optimalify uses friendly built-in wording that is translated for each customer's language.
4. If you enabled contact preferences, add your own options, such as "New arrivals", "Restock alerts" or "Weekly digest".
5. Set **Status** to **Active** and save.

The full option list is in the [Profile guide](/help/profile).

## Step 2: Place the block on the Profile page

As with every customer account block, saving in the app is half the job. Shopify needs you to add the block in the checkout and accounts editor:

1. Go to **Settings → Checkout** and click **Customize** next to your configuration.
2. Choose the **Profile** page in the page selector.
3. Open the **Apps** sidebar, click **+** next to the **Optimalify Profile** block, position it, and **Save**.

See [adding blocks to your pages](/help/add-blocks-in-editor) for the details. Remember the block only shows to **signed-in** customers, so test while signed in to a customer account.

## Step 3: See what customers have saved

Saved values are stored on the customer as app-owned metafields, and the Optimalify docs say you can see them in your Shopify admin on the customer's profile. Open a customer you used for testing and confirm the birthday appears.

Whether your email or automation tool can read those metafields depends on the tool. We have not verified specific integrations, so check that your tool supports reading customer metafields before you build a flow around them.

## Step 4: Use the birthday

The simplest use needs no extra tool. Optimalify banners can be **targeted**, and one of the conditions is **Birthday month**, which matches customers whose saved birthday falls in the current month. A birthday banner looks like this:

1. In **Apps → Optimalify → Blocks → Banner**, create a banner with a warm heading ("Happy birthday month!") and a button.
2. Set **Audience** to **Targeted** and add the **Birthday month** condition. The [targeting guide](/help/banner-targeting) lists the other conditions.
3. Point the button at a discount. Shopify lets you copy a **shareable discount link** from a saved discount code; it applies the discount automatically to the customer's next checkout cart, and you can add a redirect such as `/discount/CODE?redirect=/collections/gifts` to send them to a specific page.
4. Add the Banner block to the Orders page so it greets customers when they open their account.

The birthday banner only appears for customers who have saved a birthday, which is why you need the Profile block first.

## Getting customers to fill it in

A field on the Profile page only works if customers visit the Profile page. Give them a reason:

- Add a **banner** on the Orders page that says "Add your birthday and we'll send you a treat" with a button to your customer account's Profile page.
- Mention it in your order confirmation or post-purchase emails.
- Keep it **optional** and ask for only what you will use.

## Handle the data with care

A birthday is personal information. A few habits keep you on the right side of your customers' trust:

- **Say why you are asking.** "So we can send you a birthday treat" is clear. A blank field is not.
- **Collect only what you will use.** If you are not going to send a birthday offer, do not ask for a birthday.
- **Follow your privacy policy and local rules.** This post is not legal advice. Check what applies in the regions you sell to.
- **Keep consent separate.** Treat contact preferences as preference data, and keep running your email marketing consent through Shopify's own settings.

## FAQ

### Do customers need to be signed in to add a birthday?

Yes. The Profile block shows only to signed-in customers, because the answers are saved to their own customer record.

### Where is the birthday stored?

On the customer, as app-owned metafields, visible in your Shopify admin on the customer's profile.

### Can I collect other details too?

The Profile block collects birthday and contact preferences. Contact preferences are options you define yourself, such as "New arrivals" or "Weekly digest".

### Will it work in other languages?

Leave the heading and subheading blank and Optimalify uses built-in wording that is translated for each customer's language. Blocks in the app are translatable.

## Sources

Checked against Shopify's documentation on October 1, 2026:

- [Building apps for customer accounts](https://shopify.dev/docs/apps/build/customer-accounts), shopify.dev (what the Profile page is and what apps can show there)
- [About metafields in customer accounts](https://shopify.dev/docs/apps/build/customer-accounts/metafields-in-customer-accounts), shopify.dev (reading and writing customer metafields from an extension)
- [Managing and editing your discounts](https://help.shopify.com/en/manual/discounts/managing-discount-codes), Shopify Help Center (shareable discount links)
- Optimalify behavior is documented in our own [Profile guide](/help/profile) and [banner targeting guide](/help/banner-targeting)

## Start collecting birthdays

Optimalify's Profile block adds a birthday and contact preferences form to the Profile page with no theme code. The Free plan includes one block, so you can start with Profile and add a birthday banner later on Pro, which includes all blocks with a 14-day free trial. [Add Optimalify from the Shopify App Store](install:listing).
