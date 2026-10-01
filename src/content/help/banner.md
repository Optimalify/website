---
title: "Banner"
description: "Announcements on the Orders and Order status pages."
order: 3
---

Show announcements on your customers' **Orders** and **Order status** pages — sales,
shipping notices, policy updates, or a welcome message. Banner copy is shown
exactly as you write it.

## Where it appears
Orders (order index) and Order status pages. You choose which page(s) to place it on in the
editor — see [Add blocks to your pages](add-blocks-in-editor.md).

## Create a banner
1. **Apps → Optimalify → Blocks → Banner**.
2. Click **Add banner** (you can create several).
3. Fill in the fields (below), set **Status = Active**, and click **Create / Save**.
4. Add the **Optimalify Banner** block in the customer account editor and, if you have more
   than one banner, set its **Entry handle**.

## Fields

| Field | Notes |
|---|---|
| **Internal name** | Only you see this — a label to find the banner later (max 60 chars). |
| **Status** | **Active** shows it to customers; **Draft** keeps it hidden. |
| **Heading** | The bold title (max 80). |
| **Message** | The body text (max 300). |
| **Tone** | Colour/emphasis: `auto`, `info`, `success`, `warning`, `critical`. |
| **Let customers dismiss the banner** | If on, customers can close it. |
| **Button (optional)** | Add a call-to-action: **Button label** (max 40) + **Button link URL**. |

## Tips
- **Tone** sets the visual style — use `warning`/`critical` sparingly for genuinely important
  notices, `success` for good news, `info` (or `auto`) for everyday messages.
- Keep the heading short; the message can carry the detail.
- The **live preview** on the right updates as you type.
- Banner text is not translated yet: customers see it in the language you write it in.

## Show different banners on different pages
Create multiple banners, then place the block on each page and set the **Entry handle** to the
banner you want there. Leave the handle blank to show your default (first active) banner. See
[the Entry handle section](add-blocks-in-editor.md#choose-which-entry-a-block-shows--the-entry-handle).

## Not showing up?
Check that the banner is **Active**, the block is **added and saved** in the editor, and
you're viewing while **logged in**. Full list in [FAQ & troubleshooting](faq-troubleshooting.md).
