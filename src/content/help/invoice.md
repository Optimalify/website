---
title: "Invoice download"
description: "A Download-invoice PDF action on your customers' orders."
order: 5
---

Let customers download a **PDF invoice** for any order, straight from their account — no
more "can you send me an invoice?" support emails. A **Download invoice** action appears in
the order's action menu on the **Orders** and **Order status** pages.

## Set it up

1. **Apps → Optimalify → Blocks → Invoice**.
2. Fill in your seller details (below) and set **Status = Active**, then **Save**.
3. That's it — the action appears automatically on customers' orders. (No editor block to
   place: order actions are added by the app, not the editor.)

## Fields

| Field | Notes |
|---|---|
| **Business name** | Shown at the top of the PDF as the seller. |
| **Business address** | Free text, one line per address line. |
| **Tax ID** | Your VAT / tax number (optional). |
| **Invoice prefix** | Invoice number = prefix + order number, e.g. `INV-1001`. |
| **Footer note** | Payment terms, legal note, or a thank-you line at the bottom. |

## What the PDF contains

Order number and date, your seller block, each line item with quantity and price,
subtotal, discounts, shipping, taxes, and the total — in the order's currency.

> **Heads-up:** invoices are currently **receipt-style** — they do not include the
> customer's name or billing address, because Shopify's protected-customer-data rules
> require a separate approval for those fields. If your region requires full VAT invoices
> with buyer details, contact us — we're working on it.

## Requirements & privacy

- Only **signed-in customers** can download, and only **their own** orders — every download
  link is signed and expires after a few minutes.
- Guest-checkout orders (no customer account attached) don't offer the action.

## Not showing up?

Make sure the Invoice block is **Active**, the customer is **signed in**, and the order
isn't cancelled. On the Free plan, remember only **one block** can be active at a time.
More in [FAQ & troubleshooting](faq-troubleshooting.md).
