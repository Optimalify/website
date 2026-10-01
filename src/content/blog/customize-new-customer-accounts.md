---
title: "What can you customize on Shopify's new customer accounts?"
description: "A merchant's map of what you can change on Shopify's new customer accounts (branding, menu, domain, app blocks, market overrides) and what you cannot, checked against Shopify's docs."
date: 2026-10-01
tags: [customer accounts, customization, shopify]
---

When merchants move from legacy customer accounts to the new ones, the first question is usually: "Where did my theme templates go?" The answer is that the new customer accounts are **managed separately from your theme**, so you customize them in a different place with a different set of tools. This guide maps out what you can change, what you cannot, and where each setting lives. Everything below is taken from Shopify's documentation, linked at the end.

## Where customization happens

Most changes are made in the **checkout and accounts editor**. Open it from your Shopify admin via **Settings → Checkout**, then click **Edit** or **Customize** next to the configuration you want to change. Shopify describes the customer account pages you can customize as four pages:

- **Sign-in**, where customers sign in by email or any social sign-in options you offer.
- **Orders**, a gallery or list of a customer's orders.
- **Order status**, one page per order with the order summary and tracking information.
- **Profile**, where customers manage contact information, addresses and saved payment methods.

## What you can customize

### 1. Branding and style

Customer accounts inherit the shared branding settings you use for checkout, so a logo uploaded there also appears on the account pages and the sign-in page. You can then override on the account pages directly:

- **Logo** image and width
- **Colors:** the header background, plus the background and accent colors of the main page body, per page
- **Sign-in page style:** logo, colors and a hero image (the hero image shows on desktop only)

### 2. The Orders page for customers with no orders

A customer can have an account without ever having ordered. For them, the Orders page shows a **Shop now** button. You can pick a **collection** to display there as well, which turns an empty page into a product shelf.

### 3. The account menu

A default menu (`customer-account-main-menu`) is created automatically, with links to your home page and the customer's orders. You can edit it under **Content → Menus** or from the editor. Shopify says you can add the Profile page, app pages, other templates on your online store, and external links. On desktop it supports up to three levels of nesting. URL redirects are not supported in this menu.

### 4. Your own subdomain

Account pages use a shopify.com address by default. You can connect a subdomain of your primary domain, such as `account.your-store.com`, so customers see your brand from sign-in through to order status.

### 5. Blocks and pages from apps

This is the biggest lever for content. Apps can add **blocks to existing pages** (Shopify mentions the order page, order summary and profile) and can add **entirely new pages**, such as a wishlist. You place them in the editor from the **Apps** sidebar. Shopify's developer documentation says apps can extend the **Order index**, **Order status** and **Profile** pages at defined targets, and can create new pages with full-page extensions.

There are two kinds of placement, and the difference matters to you:

- **Block** placements can be **repositioned by the merchant** in the editor.
- **Static** placements render in one fixed location.

App blocks pick up the colors, fonts and styling you set in the editor, so they look native.

### 6. Market-specific versions

On the **Advanced** or **Plus** plan, you can tailor customer account pages to specific markets. Shopify's examples include extra account features for your domestic market, or a message about shipping delays for one international region. Overrides cover branding, settings and blocks, and also adding or removing full-page extensions, changing menus, and adding or removing order actions.

### 7. Sign-in itself

Customers can sign in with a one-time email code, with Sign in with Shop, or with Google and Facebook sign-in. On **Plus**, you can connect your own identity provider, which replaces the default sign-in experience.

## What you cannot do

Shopify's own pages state these limits:

- **No blocks on the sign-in page.** You can change its logo, colors, fonts and brand image, but not add app blocks.
- **No custom customer accounts domain per market.** One domain serves every market.
- **No background image replacement** once you remove an existing one: you can remove it, but you cannot set a new one.
- **No legacy theme templates.** The new accounts are managed independently from your theme, so edits to legacy customer account Liquid files do not carry over.
- **No URL redirects in the account menu.**

One more nuance: Shopify's guide for changing where customers land after sign-in still says that customization requires adding **Liquid code to your theme**. It is possible, but it is not a no-code setting.

## A practical order of operations

1. Set your logo and colors once in shared branding, then check each account page.
2. Connect a subdomain if you have a custom domain.
3. Tidy the account menu to the three or four links customers actually use.
4. Decide what content your account pages are missing, and add it with blocks.

For step 4, the usual gaps are an announcement, contact details, reassurance and a reason to come back. A block app such as Optimalify covers those with [banners](/help/banner), [support links](/help/support), [trust badges](/help/trust-badges), [payment icons](/help/payment-icons) and a [profile block](/help/profile) for customer details. Our [guide to adding blocks in the editor](/help/add-blocks-in-editor) shows every spot a block can go.

## FAQ

### Can I edit customer accounts with Liquid?

Not on the new customer accounts. Shopify says they are managed independently from your theme. You extend them with apps, using customer account UI extensions that merchants place through the editor, rather than theme code.

### Can merchants move app blocks around?

For block placements, yes: Shopify's developer documentation says merchants can reposition block extensions to any supported location on the page in the checkout and accounts editor. Static placements stay where the app developer put them.

### Do I need Shopify Plus to customize customer accounts?

The pages we read call out a plan requirement in two places: market-specific customization (Advanced or Plus) and connecting your own identity provider (Plus). We found no plan requirement stated for branding, the menu, a subdomain or app blocks, but check the linked Shopify pages for your plan before you rely on that.

### Can I add blocks to the sign-in page?

No. Shopify's upgrade guide says you can customize its logo, colors, fonts and brand image only.

## Sources

Checked against Shopify's documentation on October 1, 2026:

- [Customizing customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/customize-customer-accounts) and [Customizing customer accounts pages](https://help.shopify.com/en/manual/customers/customer-accounts/customize-customer-accounts/customize), Shopify Help Center
- [Customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts) and [Upgrading from legacy customer accounts](https://help.shopify.com/en/manual/customers/customer-accounts/upgrade), Shopify Help Center
- [Building apps for customer accounts](https://shopify.dev/docs/apps/build/customer-accounts) and [About inline UI extensions](https://shopify.dev/docs/apps/build/customer-accounts/inline-extensions), shopify.dev

## Fill in the empty parts of the page

Out of the box, the new account pages are clean and a little bare. Optimalify gives you five no-code blocks for them (Banner, Profile, Trust badges, Payment icons and Support links), configured in the app and placed in the editor you just read about. The Free plan covers one block. [Add Optimalify from the Shopify App Store](install:listing) and try the one that fits your store first.
