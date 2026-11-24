---
title: "Member wallet"
description: "A loyalty card with the customer's points, member rank and a membership QR code."
order: 18
---

Show members where they stand. **Member wallet** is a card with the customer's **points
balance**, their **member rank**, and an optional **QR code** that staff can scan in a physical
shop.

## Where it appears
The **Profile** and **Orders** pages. Add the **Optimalify Member wallet** block wherever you
want it in the editor.

## Where the values come from
Optimalify doesn't calculate points. It reads them from **customer metafields** that you, your
loyalty app or a Shopify Flow write. For each value you want to show:

1. In Shopify admin, go to **Settings → Custom data → Customers** and create (or open) the
   metafield definition — for example `custom.loyalty_points` (number or text) and
   `custom.member_rank` (text).
2. Set **Customer account access** to **Read**. Without it, customers can't see the value.

Metafields owned by another app (the `$app` namespace) can't be read. Store credit isn't shown.

## Set it up
1. **Apps → Optimalify → Blocks → Member wallet**.
2. Fill in the card (below), set **Status = Active**, and **Save**. The page warns you if a
   metafield is missing or isn't readable by customers.
3. Add the **Optimalify Member wallet** block in the customer account editor — see
   [Add blocks to your pages](add-blocks-in-editor.md).

## Settings

| Field | Notes |
|---|---|
| **Card title** | Leave blank to use the built-in title in each customer's language. |
| **Points metafield** | Customer metafield as `namespace.key`, e.g. `custom.loyalty_points`. Blank hides points. |
| **Rank metafield** | Customer metafield as `namespace.key`, e.g. `custom.member_rank`. Blank hides the rank. |
| **Points label / Rank label** | Optional. Blank uses the built-in label. |
| **Show a membership QR code** | The QR contains the **customer ID**, or a **customer metafield** such as a member number. |
| **Text before the value** | Optional prefix, e.g. `MEMBER-`, for POS systems that expect one. |
| **Line under the QR code** | Optional caption. |

## Tips
- A customer who has no value for a metafield simply doesn't see that line. If none of the
  values exist for them, the card is hidden.
- In the editor you see a short hint instead of real numbers, because no customer is signed in.
  Check the result by signing in to a test customer account on your storefront.

## Plans
- The **Free** plan runs **one active block** at a time; **Pro** unlocks all of them.

Not showing? See [FAQ & troubleshooting](faq-troubleshooting.md).
