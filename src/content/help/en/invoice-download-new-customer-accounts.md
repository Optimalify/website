---
title: "Let customers download invoice PDFs from new customer accounts"
description: "Add a Download invoice PDF action to orders in Shopify's new customer accounts, in the customer's language, with optional Japanese qualified invoice fields. No code."
order: 20
---

If customers keep emailing you for an invoice, you can add a **Download invoice** action to
every order in their new customer account. Optimalify's **Invoice download** block generates a **PDF invoice** on demand, with no theme code.
(The older, legacy accounts are being replaced — see
[Moving from legacy to new customer accounts](legacy-customer-accounts-migration.md).)

[Watch the demo: Invoice PDF in customer accounts, in your customer's language](https://youtu.be/l3LG1Mo0ggs)

## What customers see

A **Download invoice** action in the order's action menu on the **Orders** and **Order
status** pages. One click gives them a PDF for that order.

## Set it up

1. Install Optimalify from the Shopify App Store (link at the end of this page).
2. **Apps → Optimalify → Blocks → Invoice download**.
3. Enter your business name and address (and a tax ID if you want one printed), set
   **Status = Active**, then **Save**.
4. Open an order in a signed-in test account and check the action is there. There is no
   editor block to place: order actions are added by the app.

All fields are explained in [Invoice download](invoice.md).

## The PDF in the customer's language

The PDF labels are available in **English, German, French, Spanish, Dutch, Italian,
Vietnamese and Japanese**. The PDF shows your business name, address and tax ID, the order
number and date, each line item, discounts, shipping, tax and the total, in the order's
currency.

## Japan: qualified invoice fields (optional)

If you sell in Japan, the Invoice block has an optional **Japan: qualified invoice** section,
off by default. You can print your **registration number** (T followed by 13 digits), choose a
document title (invoice, receipt or qualified invoice), show tax by rate, and let customers
enter a recipient name. You type the registration number yourself: Optimalify checks that it
looks like T plus 13 digits, not that it is registered. Whether the PDF fits your tax obligations is for
you or your accountant to confirm. The full walkthrough is in Japanese: [qualified invoices in customer accounts](https://optimalify.org/help/qualified-invoice-my-page).

## Good to know

- Only **signed-in customers** can download, and only **their own** orders. Download links
  are signed and expire after a few minutes.
- Invoices are **receipt-style**: they don't include the customer's name or billing address.
- Guest-checkout orders and orders older than about **60 days** don't show the action.
- On the Free plan one block can be active at a time. Plans are on the App Store listing.

## Not showing up?

Check the block is **Active**, the customer is signed in and the order isn't cancelled. More
in [FAQ & troubleshooting](faq-troubleshooting.md).

**Ready to try it?** [Add Optimalify from the Shopify App Store](https://apps.shopify.com/optimalify-customer-account?utm_source=optimalify.org&utm_medium=help&utm_campaign=organic) and see the plans there.
