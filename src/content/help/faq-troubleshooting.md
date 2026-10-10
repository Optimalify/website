---
title: "FAQ & troubleshooting"
description: "Common questions and fixes, e.g. “my block doesn’t show”."
order: 16
---

## My block doesn't show on the page
Check these, in order:

1. **Is the entry Active?** In Optimalify, open the block and set **Status = Active** (not
   Draft), then **Save**.
2. **Did you add it in the editor?** A block only appears after you **add it in the customer
   account editor** and click **Save** there. See
   [Add blocks to your pages](add-blocks-in-editor.md).
3. **Are you logged in?** Customer account pages only show to **signed-in** customers. Preview
   while logged in to a customer account on your store.
4. **Entry handle match?** If you set an **Entry handle** on the placement, it must match an
   **active** entry's handle. Leave it **blank** to show your default (first active) entry.
5. **Right page?** Each block only supports certain pages (e.g. Trust badges only on Order
   status). Check the table in [Add blocks to your pages](add-blocks-in-editor.md).

## I saved in Optimalify but nothing changed on the page
Configuring the block in Optimalify and **placing it in the editor** are two separate steps.
If you've done both, refresh the account page (changes are near-instant, but a hard refresh
clears any cached view).

## Can I show different content on different pages?
Yes. Create multiple entries (Banner supports several; others use one), then set each
placement's **Entry handle** to the entry you want there. Blank = your default entry.

## Which pages can each block go on?
| Block | Pages |
|---|---|
| Banner | Orders, Order status |
| Support | Footer (all account pages) |
| Trust badges | Order status (after fulfillment details) |
| Payment icons | Order status, Orders, Profile, footer |
| Profile capture | Profile, Orders, Order status |
| Social links | Order status, Orders, Profile, footer |
| FAQ | Order status, Orders, Profile |
| Store policies | Order status, Orders, Profile |
| Rich content | Order status, Orders, Profile, footer |

## Can I translate the text of my blocks?
Yes. Translate it under **Translations** in Optimalify or in Translate & Adapt; customers see
their language, and your original text when a translation is missing. See
[Translate your blocks](translations.md).

## Where do badge logos come from?
Upload one from your computer or pick an image already in your store's **Files**
(Settings → Files) — uploads are stored in Files too. A logo replaces the badge's icon.

## Does Optimalify collect customer data?
- **Banner, Support, Trust badges, Payment icons:** no customer data — they only show the
  content you configure.
- **Profile capture:** stores the details customers voluntarily enter (birthday, size,
  communication preferences) as metafields on their customer record, visible to you in admin.
  Use it in line with your privacy policy.

## Can customers dismiss the banner?
Only if you turn on **"Let customers dismiss the banner"** for that banner.

## Still stuck?
Email **mia@optimalify.org** with your store
URL, the block, and a screenshot — we'll help.
