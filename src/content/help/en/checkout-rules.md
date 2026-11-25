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
- The **Free** plan runs **one active entry** at a time: one block **or** one checkout rule. Only
  **Active** rules count; **Testing** and **Draft** rules don't. **Pro** has unlimited active rules.

## Start from a template
The quickest start is a template. Go to **Apps → Optimalify → Checkout rules** and pick one:
- Engraving or custom text required
- Gift message length
- Wholesale minimum
- Sold in sets
- Max per cart line
- Cart size limits

Templates start **Active**. **Engraving or custom text required** starts on **Specific products**: pick the
products it covers (or switch to **All products**) before you save. Review the rule, then press **Save rule**. If you'd rather try it first,
set its status to **Testing** (see below). On the **Free** plan, if another block or rule is already
active, Optimalify asks which one stays active.

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
     or the **total of all matching lines**. With **each matching line**, every cart line is checked
     on its own — two variants of one product are two lines.
3. **Show this message** — the text the customer sees when the rule blocks checkout.
4. Choose a **Status** — **Draft**, **Testing** or **Active** — and press **Save rule**. Saving
   updates your checkout straight away.

### Messages
Write the message in **English** and **Japanese**. You can use these variables, which are replaced
with the real values: `{product}`, `{min}`, `{max}`, `{multiple}` and `{property}`.
For example: `Please enter {property} for {product}.` A variable that doesn't exist, such as
`{qty}`, is flagged and the rule can't be saved until you fix it.

The customer sees the message in their checkout language when you wrote one for it; otherwise
they see the English message.

### About line item properties
A line item property is extra information attached to a cart line, such as engraving text. It is
sent by a field in your product page form named like `properties[Engraving]`. Your theme (or
another app) must provide that field — **Optimalify doesn't add it to the product page**. The
property name in your rule must match the field name exactly.

## Draft, Testing and Active
Each rule shows its state as a badge. To change it, open the rule's **⋮** menu and choose **Set to Active**,
**Set to Testing** or **Set to Draft** (the state it already has isn't listed).


| Status | What it does |
|---|---|
| **Draft** | Saved, but checks nothing. Use it to keep a rule without running it. |
| **Testing** | Blocks **test checkouts only** — real customers aren't affected. Doesn't use the Free plan's active slot. |
| **Active** | Blocks every checkout that breaks the rule. |

## Test it
- Use the **simulator** on the rule page to try sample carts and see which rules block them.
- Set the rule to **Testing**, then click **Open test checkout**. It opens checkout with only the sample
  product, marked as a test, so rules in **Testing** apply too. Your own cart in that browser is
  replaced, not added to.
- A **Testing** rule shows its message at the top of checkout. An **Active** rule may also stop the add-to-cart
  step, where Shopify shows its own error page or sends you back to your store.
- When it behaves as you expect, switch the rule to **Active**.

## Is it live? "Live in checkout"
Each rule shows a **Live in checkout** status. If a rule isn't blocking, open the
**Why isn't it blocking?** panel. Common causes:
- The new permission hasn't been approved yet.
- The rule is a **Draft**, or in **Testing** (it then blocks only test checkouts).
- The scope doesn't match the products in the cart.
- The property name is spelled differently from the one in the product page form.
- The rules don't fit in checkout (below).

## Does it fit in checkout?
Shopify runs your rules in a checkout function with a fixed amount of room. The **Does it fit in
checkout?** section on the Checkout rules page shows how much is used:

| Bar | Limit |
|---|---|
| Rules | 60 saved rules, Drafts included |
| Line item property names | 4 different names across Active and Testing rules |
| Collection selections | 2 different selections across Active and Testing rules |
| Tag selections | 2 different selections across Active and Testing rules |
| Rule size | Messages and long product lists take space; shown as a percentage |

**Draft** rules take no room. When a bar is nearly full it turns to a warning; when it is full, new
rules can't be turned on. Make room by setting a rule you don't need to **Draft** or deleting it,
reusing a property name, collection or tag selection that a rule already uses, shortening messages,
or listing fewer products.

## Where customers see the message
- **Checkout:** the message appears at the top of the page and checkout can't continue.
- **Cart page:** only if your theme displays cart errors.
- **Express checkouts** (such as Shop Pay or Apple Pay) are checked too.
- Rules are **not** applied to POS, subscription renewals or order edits.

## Troubleshooting
**The rule doesn't block anything.** Check the **Why isn't it blocking?** panel, then test with
**Open test checkout** (set the rule to **Testing** first if you don't want to affect customers).

**It blocks even though the field is filled in.** The property name in the rule probably differs
from the product page form (capital letters and spaces count).

**I can't turn a rule on.** On the **Free** plan only one block or rule can be **Active** at a
time. Choose which one stays active, keep the rule in **Testing**, or upgrade to **Pro**.

**A capacity bar is full.** See **Does it fit in checkout?** above — set some rules to **Draft** or
reuse the same property names, collections and tags.

More help: [FAQ & troubleshooting](faq-troubleshooting.md), or see [Getting started](getting-started.md).
