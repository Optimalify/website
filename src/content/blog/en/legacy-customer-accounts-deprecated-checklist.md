---
title: "Shopify legacy customer accounts are deprecated: a merchant checklist"
description: "Shopify has deprecated legacy customer accounts. Here is what that means for your store, what we could and could not confirm about dates, and a step-by-step upgrade checklist."
date: 2026-10-01
tags: [customer accounts, migration, checklist]
---

If your store still uses **legacy customer accounts** (the Liquid-based `/account/login` pages that live inside your theme), Shopify has told merchants it is time to move. This post sticks to what Shopify has published, tells you what is still unknown, and then gives you a checklist you can work through in an afternoon.

## What Shopify has actually said

On February 26, 2026 Shopify's developer changelog announced that [legacy customer accounts are now deprecated](https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated). The announcement says:

- Legacy customer accounts are **no longer available to new stores**, or to existing stores that are not already using them.
- Shopify will **stop providing feature updates and technical support** for the older version.
- Theme developers should **no longer include legacy customer account Liquid files**. A store on legacy accounts that upgrades to a theme without those files is **automatically upgraded** to the latest customer accounts.
- Apps that relied on legacy customer account Liquid pages **will not work** with the latest version of customer accounts.

Shopify's own help page for the move carries the same warning: [legacy customer accounts are deprecated](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade), and you can revert an upgrade within 30 days.

### What we could not confirm: a shutdown date

The changelog says "a final sunset date for legacy customer accounts will be announced later in 2026". As of October 1, 2026, we searched Shopify's developer docs and changelog and **did not find a published final date**. So this post does not give one. If you read a specific date elsewhere, check it against the [Shopify developer changelog](https://shopify.dev/changelog) before you plan around it.

The practical takeaway does not depend on the date: no new features, no technical support, and moving to a theme that has dropped the legacy files upgrades you automatically. Upgrading on your own schedule beats being upgraded by a theme change.

## The checklist

This follows Shopify's own [upgrade guide](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade), with a few merchant-side notes.

### 1. Find out which version you are on

In your Shopify admin go to **Settings → Customer accounts**. If you are on legacy accounts, an **Upgrade** banner appears at the top of that page.

### 2. List your legacy customizations

Shopify tells you to review customizations before you upgrade, because they will not transfer. Check two places:

- **Theme editor:** Online Store → Edit theme → the **Legacy customer accounts** templates (login, register, order, addresses, and so on).
- **Code:** Online Store → Edit code → `templates/customers`.

Write down what is worth keeping: a loyalty link, a returns portal, a banner, a size chart, a block of support details. Ignore the rest. Shopify notes old customizations you no longer need "won't transfer over" and can be safely ignored.

### 3. Duplicate your configuration

Under **Settings → Checkout**, duplicate your current configuration so you can build and preview the new setup without touching what customers see.

### 4. Replace each customization with an app block or a Shopify feature

Customer accounts are extended with apps, placed in the checkout and accounts editor, not with theme code. Shopify's guide suggests searching the App Store with **Works with → Customer accounts** and then adding the app's blocks from the editor's **Apps** sidebar. If you used an app on legacy accounts, check whether its developer has released an updated version first.

This is where a no-code block app earns its keep. For the content most stores recreate first:

- A sale or shipping notice: [Banner](/help/banner)
- Your contact channels: [Support links](/help/support)
- Reassurance on the order tracking page: [Trust badges](/help/trust-badges)
- Accepted payment methods: [Payment icons](/help/payment-icons)
- Birthday or preference capture: [Profile](/help/profile)

### 5. Check your brand settings

Checkout and customer accounts share brand settings. Open the editor, switch between the checkout and customer account pages, and confirm that your logo and colors look right everywhere.

### 6. Consider a customer accounts subdomain

By default, customer account pages use a shopify.com address. Shopify lets you connect a subdomain of your primary domain instead (for example `account.your-store.com`), which customers see on every account page including order status.

### 7. Check your sender email

Customers sign in with a verification code that is sent from your store's sender email. Make sure it is current and that you can access it.

### 8. Read the limitations before you upgrade

Shopify lists these in the upgrade guide. They are the ones most likely to surprise a store:

- Legacy URLs such as `/account/login` are **redirected** to the new accounts, including hard-coded links in your theme. A **custom sign-in or registration experience** you built may need to be removed first.
- **Workflows and automations** triggered by legacy customer accounts are not supported and cannot be migrated.
- **Customer segments** using the `customer_account_status` filter will not work as expected afterward.
- You **cannot set a custom customer accounts domain per market**; one domain serves all markets.
- You **cannot add customization blocks to the sign-in page**. You can change its logo, colors, fonts and brand image.

### 9. Publish, test, then upgrade

Publish your new configuration, then open the new customer accounts URL (shown under **Settings → Customer accounts**) in a fresh browser tab and sign in as a test customer. Try every sign-in option you offer. Your online store and checkout keep linking to legacy accounts until you click **Upgrade**, so you can test safely first.

## What to do if you are not ready yet

Do steps 1 to 3 this week. They cost nothing and they make the rest a short job. Then pick the one customization your customers would miss most and rebuild that first.

## FAQ

### Are legacy customer accounts being shut down?

Shopify has deprecated them and says a final sunset date will be announced later in 2026. We found no published date as of October 1, 2026, so treat any specific date you see with caution until you have checked the Shopify changelog.

### What does not carry over when I upgrade?

Shopify's guide lists three things: your legacy theme customizations, workflows built on legacy accounts, and segments that use the legacy account status filter. Review the limitations list above before you upgrade.

### Can I undo the upgrade?

Shopify's upgrade page says you can revert within 30 days.

### Do I need a developer?

For most customizations, no: block apps are configured in the app and placed in the editor. Shopify's guide notes that a custom sign-in or registration experience built into your theme may need theme edits before you upgrade, and that if no app fits a need you can work with a developer or Partner on a custom app.

## Sources

Checked against Shopify's documentation on October 1, 2026:

- [Legacy customer accounts are now deprecated](https://shopify.dev/changelog/posts/legacy-customer-accounts-are-deprecated), Shopify developer changelog, February 26, 2026
- [Upgrading to customer accounts from legacy customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade), Shopify Help Center

## Rebuild your customer account content in minutes

Optimalify adds a banner, profile capture, trust badges, payment icons and support links to the new customer account pages, with no theme code. The Free plan covers one block, so you can recreate the one thing your customers miss most and decide from there. [Add Optimalify from the Shopify App Store](install:listing), or start with the [getting started guide](/help/getting-started).
