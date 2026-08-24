---
title: "Banner placements & targeting"
description: "Announcement strips, and showing banners to the right customers."
order: 4
---

Choose **where** each banner appears and **who** sees it. Every banner can broadcast to
everyone (the default) or target specific customers — by tags, country, language, B2B
status, saved profile details, birthday month, or a schedule.

## Where to show (placements)

Each banner picks its placements in **Apps → Optimalify → Blocks → Banner → (edit) → Where
to show**:

| Placement | What it looks like |
|---|---|
| **Orders — content block** | The classic banner card on the Orders (order index) page. |
| **Order status — content block** | The banner card on the Order status page. |
| **Orders — top announcement** | A slim dismissible strip at the very top of the Orders page. |
| **Order status — top announcement** | The same strip on the Order status page. |
| **Profile — top announcement** | The strip at the top of the Profile page. |

Notes on announcement strips: they are rendered by Shopify's announcement slot, so they
ignore the **Tone** and **dismiss** settings (the strip is always dismissible by design) and
show the button as an inline link. Remember to add the matching **Optimalify Banner** block
in the customer account editor for each page — see
[Add blocks to your pages](add-blocks-in-editor.md).

## Who sees it (targeting)

In the banner editor, set **Audience** to **Targeted** and add conditions:

| Condition | Matches when… | Needs |
|---|---|---|
| **Customer tag** | The customer has any of the tags you list. | Extra permission* |
| **New vs returning** | The customer has at most one order (new) / two or more (returning). | Extra permission* |
| **Country** | The customer is browsing from one of the listed country codes (e.g. `VN, US`). | — |
| **Language** | The account is shown in one of the listed languages (e.g. `vi, en`). | — |
| **B2B customer** | The logged-in customer belongs to a B2B company. | — |
| **Profile field** | A saved Profile answer (e.g. size) equals one of your values. | Profile block |
| **Birthday month** | The customer's saved birthday falls in the current month. | Profile block |
| **Schedule** | Now is between your From/Until datetimes (UTC). | — |

Combine conditions with **all** (every condition must match) or **any** (at least one).
Each condition can be **negated** ("must NOT match").

*Tag and order-history conditions require granting the app the extra Shopify permissions
`read_customers` / `read_orders`. Until then those conditions can't be verified for a
customer — the **"If we can't tell"** setting below decides what happens.

## "If we can't tell"

Some conditions can't always be evaluated — for example a visitor who isn't signed in yet,
or a condition that needs a permission you haven't granted. Choose what happens then:

- **Hide the banner (recommended)** — safest for promotions and targeted offers.
- **Show the banner** — good for general notices you'd rather over-show than hide.

## Examples

- **Birthday offer:** Audience = Targeted · condition **Birthday month** · a warm heading
  and a discount-code button. Pair it with the Profile block so customers save birthdays.
- **VIP-only notice:** condition **Customer tag** = `VIP` (needs the extra permission).
- **Campaign window:** condition **Schedule** with From/Until — the banner turns itself on
  and off.

## Not showing up?

Broadcast banners behave exactly as before. For targeted banners, remember the editor
preview always shows the banner (so you can style it) — targeting only applies to real
customers on the live pages. Full checklist in
[FAQ & troubleshooting](faq-troubleshooting.md).
