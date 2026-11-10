import type {Locale} from './index';

/** Strings shared by the layouts and the small pages (404, blog index, help chrome). */
export interface Ui {
  tagline: string;
  siteDescription: string;
  footNote: string;
  install: string;
  nav: {features: string; how: string; demo: string; blog: string; help: string};
  homeLabel: string;
  switcherLabel: string;
  langBar: {text: string; link: string; dismiss: string};
  foot: {
    product: string; features: string; how: string; demo: string; pricing: string; faq: string;
    founding: string; blog: string; helpCenter: string; gettingStarted: string; addBlocks: string;
    allGuides: string; contact: string; notAffiliated: string; legal: string;
  };
  help: {
    title: string; navLabel: string; back: string; viewMarkdown: string; needHand: string;
    stillStuck: (mail: string) => string;
  };
  blog: {
    title: string; description: string; heading: string; lede: string; rss: string;
    minRead: (n: number) => string; readGuide: string; feedTitle: string; feedDescription: string;
    published: string; updated: string;
  };
  notFound: {title: string; description: string; heading: string; body: string; still: string};
  dateLocale: string;
}

export const ui: Record<Locale, Ui> = {
  ja: {
    tagline: '顧客がログインする場所で、お客様に出会う',
    siteDescription:
      'Optimalifyは、バナー、プロフィール情報の取得、トラストバッジ、お支払いアイコン、サポート連絡先を、' +
      'Shopifyの顧客アカウントページに追加するアプリです。テーマのコード編集は不要です。',
    footNote:
      'Shopifyの新しい顧客アカウント向けのブロック。バナー、プロフィール情報の取得、トラストバッジ、お支払いアイコン、サポート連絡先などを追加できます。',
    install: 'Shopifyに追加',
    nav: {features: '機能', how: '使い方', demo: 'デモ', blog: 'ブログ', help: 'ヘルプセンター'},
    homeLabel: 'Optimalify ホーム',
    switcherLabel: '言語を選択',
    langBar: {text: 'This page is also available in English.', link: 'View in English', dismiss: '閉じる'},
    foot: {
      product: 'プロダクト', features: '機能', how: '使い方', demo: 'デモ', pricing: '料金', faq: 'よくある質問',
      founding: 'ファウンディングマーチャント', blog: 'ブログ', helpCenter: 'ヘルプセンター',
      gettingStarted: 'はじめに', addBlocks: 'ブロックの追加', allGuides: 'すべてのガイド',
      contact: 'お問い合わせ', notAffiliated: 'Shopify Inc. とは提携していません', legal: '運営者情報',
    },
    help: {
      title: 'ヘルプセンター',
      navLabel: 'ヘルプセンターの記事',
      back: '← ヘルプセンター',
      viewMarkdown: 'Markdownで表示 ↗',
      needHand: 'お困りですか？',
      stillStuck: (mail) =>
        `解決しない場合は、ストアのURL、該当のブロック、スクリーンショットを添えて ${mail} までご連絡ください。`,
    },
    blog: {
      title: 'ブログ',
      description:
        'Shopifyの顧客アカウントについて、変更点、カスタマイズできる範囲、お客様が毎回開くページの活用方法をストア運営者向けに解説する実践ガイドです。Optimalify提供。',
      heading: 'ストア運営者のための顧客アカウント解説',
      lede: 'Shopifyの顧客アカウントページについて、一次情報を確認したうえで書いた実践的なガイドです。',
      rss: 'RSSフィード',
      minRead: (n) => `読了目安 約${n}分`,
      readGuide: 'ガイドを読む →',
      feedTitle: 'Optimalify ブログ',
      feedDescription: 'Shopifyの顧客アカウントページに関する、ストア運営者向けの実践ガイド。',
      published: '公開',
      updated: '更新',
    },
    notFound: {
      title: 'ページが見つかりません',
      description: 'お探しのページは存在しません。',
      heading: 'お探しのページは見つかりませんでした',
      body: 'ページが移動した可能性があります。<a href="/help">ヘルプセンター</a>をご覧いただくか、<a href="/">ホーム</a>にお戻りください。',
      still: '見つからない場合は、こちらまでご連絡ください：',
    },
    dateLocale: 'ja-JP',
  },
  en: {
    tagline: 'Meet customers where they sign in',
    siteDescription:
      'Optimalify adds banners, profile capture, trust badges, payment icons and support ' +
      'links to your Shopify customer account pages — no theme code.',
    footNote:
      'Blocks for Shopify’s new customer accounts — banners, profile capture, trust badges, payment icons and support links.',
    install: 'Add to Shopify',
    nav: {features: 'Features', how: 'How it works', demo: 'Demo', blog: 'Blog', help: 'Help Center'},
    homeLabel: 'Optimalify home',
    switcherLabel: 'Choose language',
    langBar: {text: 'このページは日本語でもご覧いただけます。', link: '日本語で見る', dismiss: 'Dismiss'},
    foot: {
      product: 'Product', features: 'Features', how: 'How it works', demo: 'Demo', pricing: 'Pricing', faq: 'FAQ',
      founding: 'Founding merchants', blog: 'Blog', helpCenter: 'Help Center',
      gettingStarted: 'Getting started', addBlocks: 'Add blocks', allGuides: 'All guides',
      contact: 'Contact', notAffiliated: 'Not affiliated with Shopify Inc.', legal: 'Legal notice',
    },
    help: {
      title: 'Help Center',
      navLabel: 'Help Center articles',
      back: '← Help Center',
      viewMarkdown: 'View as Markdown ↗',
      needHand: 'Need a hand?',
      stillStuck: (mail) =>
        `Still stuck? Email ${mail} with your store URL, the block, and a screenshot.`,
    },
    blog: {
      title: 'Blog',
      description:
        'Practical guides for Shopify merchants on customer accounts: what changed, what you can customize, and how to use the pages your customers already open. From Optimalify.',
      heading: 'Customer accounts, explained for merchants',
      lede: 'Practical, source-checked guides on Shopify’s customer account pages.',
      rss: 'RSS feed',
      minRead: (n) => `${n} min read`,
      readGuide: 'Read the guide →',
      feedTitle: 'Optimalify blog',
      feedDescription: 'Practical guides for Shopify merchants on customer account pages.',
      published: 'Published',
      updated: 'Updated',
    },
    notFound: {
      title: 'Page not found',
      description: 'That page doesn’t exist.',
      heading: 'That page doesn’t exist',
      body: 'It may have moved. Try the <a href="/en/help">Help Center</a>, or head back <a href="/en/">home</a>.',
      still: 'Still lost?',
    },
    dateLocale: 'en-US',
  },
};
