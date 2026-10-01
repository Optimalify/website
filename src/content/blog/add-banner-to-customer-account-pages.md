---
title: "How to add a banner to Shopify customer account pages"
description: "Step by step: put a sale, shipping or policy banner on the Orders and Order status pages of Shopify's new customer accounts, with no theme code."
date: 2026-10-01
tags: [banner, how-to, customer accounts]
---

Your customers open their account pages to check an order, track a parcel or start a return. That makes the **Orders** and **Order status** pages some of the most-visited post-purchase screens you have, and by default there is nothing on them that is yours. A banner fixes that: a shipping delay notice, a sale, a policy change, a welcome message.

This guide shows how to add one to Shopify's new customer accounts without touching your theme.

## Why you cannot just edit the theme

The new customer accounts are managed separately from your theme, so there is no template to paste a banner into. Shopify's documented route is an **app block**: an app provides a block, and you place it in the **checkout and accounts editor**. Shopify's developer documentation describes two placement styles for these extensions:

- **Block** placements render as cards that you can move to any supported location on the page.
- **Announcement** placements render as a dismissible strip at the **top** of the page, such as the Order index or Order status page.

Shopify's own documentation lists announcement-style use cases such as time-sensitive information like delivery updates and promotions, which is exactly what store banners are for.

## What you need

- A store on the **new customer accounts** (see our [legacy accounts checklist](/blog/legacy-customer-accounts-deprecated-checklist) if you are not sure).
- A banner app that supports customer accounts. We will use Optimalify's Banner block, which works on the Orders and Order status pages.
- Ten minutes.

## Step 1: Create the banner in the app

1. In your Shopify admin, open **Apps → Optimalify → Blocks → Banner**.
2. Click **Add banner**.
3. Fill in the fields:
   - **Internal name:** only you see it, for example "Free shipping June".
   - **Heading:** the bold title, up to 80 characters.
   - **Message:** the body, up to 300 characters.
   - **Tone:** `info`, `success`, `warning` or `critical` (or `auto`). Use the stronger tones sparingly.
   - **Button (optional):** a label up to 40 characters and a link.
4. Set **Status** to **Active** and save. A **Draft** banner stays hidden.

A live preview on the right updates as you type, so you can adjust the wording before anything goes live. The heading, message and button label are translated automatically into your customers' languages, and you can review each string on the app's **Translations** page.

## Step 2: Place the block in the editor

Creating the banner does not show it yet. Shopify requires you to add the block to the page:

1. Go to **Settings → Checkout** and click **Customize** next to your configuration.
2. In the page selector at the top, choose **Orders** or **Order status**.
3. Open the **Apps** sidebar and click **+** next to the **Optimalify Banner** block. Shopify's guide notes that if an app offers its block for Orders, Order status, Profile or Accounts, it works with customer accounts.
4. Move the block to where you want it on the page, then click **Save**.

Repeat for the other page if you want the banner on both. Our [guide to adding blocks in the editor](/help/add-blocks-in-editor) has screenshots of each spot.

## Step 3: Check it as a customer

Customer account pages only show to **signed-in** customers, so preview while signed in to a customer account on your store. Use your store's customer account URL (shown under **Settings → Customer accounts**) in a fresh browser tab.

## Writing a banner that earns its space

A banner on an account page is read by people who already bought from you, so write for them:

- **Lead with what changed for them.** "Orders placed before Friday ship free" beats "Shipping update".
- **One message, one button.** If you need two, make two banners.
- **Keep the heading short** and let the message carry the detail.
- **Match the tone to the news.** Reserve `warning` and `critical` for genuine problems like delays, or customers learn to ignore them.
- **Link somewhere useful**, such as a collection, a policy page or a tracking page, and not just your home page.

## Show different banners on different pages

You can create several banners. Place the block on each page and set its **Entry handle** to the banner you want there. Leave the handle blank to show your default (the first active banner). This is how you show a delivery notice on Order status and a promotion on Orders. See [Banner](/help/banner) and [banner placements and targeting](/help/banner-targeting) for the full list of options, including showing a banner only to certain customers or only during a schedule.

## If the banner does not show

Check these in order:

1. The banner's status is **Active**, not Draft.
2. The block has been **added and saved** in the editor, on the page you are viewing.
3. You are viewing **signed in**.
4. If the banner is targeted, remember the editor preview always shows it, while real customers only see it when they match.

The [FAQ and troubleshooting guide](/help/faq-troubleshooting) covers the rest.

## FAQ

### Do I need to edit my theme to add a banner?

No. The new customer accounts are not rendered by your theme. You configure the banner in the app and place its block in the checkout and accounts editor.

### Can customers dismiss the banner?

Shopify's announcement placements are dismissible strips by design. For Optimalify's content-block banner you choose whether customers can close it with the **dismiss** setting.

### Will the banner be translated?

Optimalify translates the heading, message and button label automatically, and you can review and adjust the results. Every block in the app is translatable, so customers read it in their own language.

### Can I put a banner on the sign-in page?

No. Shopify does not allow customization blocks on the sign-in page; see [what you can customize on the new customer accounts](/blog/customize-new-customer-accounts).

## Sources

Checked against Shopify's documentation on October 1, 2026:

- [About inline UI extensions](https://shopify.dev/docs/apps/build/customer-accounts/inline-extensions), shopify.dev
- [Order status announcement and block targets](https://shopify.dev/docs/api/customer-account-ui-extensions/2026-07/targets/order-status), shopify.dev
- [Upgrading from legacy customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade) and [Customizing customer accounts pages](https://help.shopify.com/en/manual/customers/customer-accounts/customize-customer-accounts/customize), Shopify Help Center
- Optimalify behavior is documented in our own [Banner guide](/help/banner)

## Put your first banner live today

Optimalify's Banner block takes the steps above and makes them a form: write the message, set it Active, place the block. The Free plan includes one block, which is enough for a banner. [Add Optimalify from the Shopify App Store](install:listing), or read the [getting started guide](/help/getting-started) first.
