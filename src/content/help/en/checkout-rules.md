---
title: "Checkout rules"
description: "Block checkout with a clear message when the cart breaks a rule — required engraving text, gift message length, minimum or maximum quantities."
order: 19
---

Stop orders that can't be fulfilled before they are paid. **Checkout rules** blocks checkout and
shows the customer a clear message when the cart breaks a rule you set. It suits shops that sell
personalised items (engraving, gift messages), wholesale minimums, or products sold in sets.

Two kinds of rule are supported:
- **Line item property rules** — for example, engraving text is required, or a gift message may be
  at most 120 characters.
- **Quantity rules** — a **minimum**, a **maximum**, or a **multiple of** a number.

## Before you start
- The first time you open **Checkout rules**, Optimalify asks to approve a new permission to
  **manage checkout rules**. When Shopify shows it, accept **Update permissions**. Until you do,
  rules are saved but can't block checkout.
- It works on every Shopify plan.
- The **Free** plan runs **one active block** at a time — each **Active** rule counts as one
  active block. **Pro** has unlimited active rules. Paused rules don't count.

## Start from a template
The quickest start is a template. Go to **Apps → Optimalify → Checkout rules** and pick one:
- Engraving required
- Gift message max length
- Wholesale minimum of 6
- Sold in sets of 6
- Max 2 per order
- Cart minimum / maximum items

Templates are created **Paused**, so nothing changes in your checkout until you review the rule
and set it to **Active**.

## Build a rule step by step
Rules are written as a sentence:

1. **When the cart has…** — choose which products the rule applies to (scope):
   **all products**, **specific products**, **specific variants**, **collections**, or
   **product tags**.
2. **Then require…** — choose the condition:
   - **Line item property** — pick the property name and a mode:

     | Mode | Meaning |
     |---|---|
     | **is required** | The property must be present |
     | **is not empty** | The property must have some text |
     | **equals** | The property must match a value exactly |
     | **matches a pattern** | Pick a preset: **letters and numbers only**, **numbers only**, **email address**, **max N characters** — or write an **advanced custom pattern** |

   - **Quantity** — **minimum**, **maximum** or **multiple of**, applied to **each matching line**
     or the **total of all matching lines**.
3. **Show this message** — the text the customer sees when the rule blocks checkout.
4. Set **Status** to **Active** and **Save**.

### Messages
Write the message in **English** and **Japanese**. You can use these variables, which are replaced
with the real values: `{product}`, `{min}`, `{max}`, `{multiple}` and `{property}`.
For example: `Please enter {property} for {product}.`

The customer sees the message in their checkout language when you wrote one for it; otherwise
they see the English message.

### About line item properties
A line item property is extra information attached to a cart line, such as engraving text. It is
sent by a field in your product page form named like `properties[Engraving]`. Your theme (or
another app) must provide that field — **Optimalify doesn't add it to the product page**. The
property name in your rule must match the field name exactly.

## Test it
- Use the **simulator** on the rule page to try sample carts and see which rules block them.
- Click **Open test checkout** to try the rule in your real checkout.

## Active and Paused
An **Active** rule is enforced; a **Paused** rule is saved but ignored. Pause a rule to stop it
without deleting it.

## Is it live? "Live in checkout"
Each rule shows a **Live in checkout** status. If a rule isn't blocking, open the
**Why isn't it blocking?** panel. Common causes:
- The new permission hasn't been approved yet.
- The rule is **Paused**.
- The scope doesn't match the products in the cart.
- The property name is spelled differently from the one in the product page form.
- The rules are over the limits (below).

## Limits
- All your rules combined must stay under about **9 KB** once compiled.
- Across your **Active** rules you can use at most **4 different line item property names**,
  **2 different collection selections** and **2 different tag selections**.

A rule that goes over shows a clear message telling you what to reduce.

## Where customers see the message
- **Checkout:** the message appears at the top of the page and checkout can't continue.
- **Cart page:** only if your theme displays cart errors.
- **Express checkouts** (such as Shop Pay or Apple Pay) are checked too.
- Rules are **not** applied to POS, subscription renewals or order edits.

## Troubleshooting
**The rule doesn't block anything.** Check the **Why isn't it blocking?** panel, then test with
**Open test checkout**.

**It blocks even though the field is filled in.** The property name in the rule probably differs
from the product page form (capital letters and spaces count).

**I can't turn a rule on.** On the **Free** plan only one rule can be **Active** at a time —
pause another or upgrade to **Pro**.

**I see a "too many" message.** You are over a limit above — pause or merge some rules.

More help: [FAQ & troubleshooting](faq-troubleshooting.md), or see [Getting started](getting-started.md).
