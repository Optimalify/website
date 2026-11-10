import {PLANS} from '../config';
import type {Locale} from './index';

export interface HomeCopy {
  title: string;
  hero: {eyebrow: string; h1: [string, string]; lede: string; demo: string; ticks: string[]};
  why: {eyebrow: string; h2: [string, string]; ledeBefore: string; ledeLink: string; ledeAfter: string; items: {h: string; p: string}[]};
  blocks: {
    eyebrow: string; h2: string; lede: string; more: string;
    items: {icon: string; name: string; text: string; href: string}[];
  };
  trust: {eyebrow: string; h2: string; lede: string; ticks: string[]; link: string};
  profile: {eyebrow: string; h2: string; lede: string; ticks: string[]; link: string};
  how: {eyebrow: string; h2: string; lede: string; steps: {h: string; p: string}[]; footBefore: string; footLink: string; footAfter: string};
  pricing: {
    eyebrow: string; h2: string; lede: string; free: string; blocksLine: string; pro: string;
    perMonth: string; altPrice: string; proTicks: string[];
  };
  faq: {eyebrow: string; h2: string; items: {q: string; a: string}[]; footBefore: string; footLink: string; footAfter: string};
  cta: {h2: string; p: string; browse: string; noteBefore: string; noteLink: string};
}

const ja: HomeCopy = {
  title: 'Optimalify — 顧客がログインする場所で、お客様に出会う',
  hero: {
    eyebrow: 'Shopifyの顧客アカウント向け',
    h1: ['お客様がログインする場所で、', 'お客様に出会う'],
    lede:
      'バナー、プロフィール情報の取得、トラストバッジ、お支払いアイコン、サポート連絡先を、お客様が日ごろから開いている顧客アカウントのページにそのまま表示できます。テーマのコード編集は不要です。',
    demo: 'デモを見る',
    ticks: ['1つのアプリで11種類のブロック', '数分で設定完了'],
  },
  why: {
    eyebrow: 'なぜ今なのか',
    h2: ['旧顧客アカウントは廃止の対象です。', '新しいページが、お客様との接点になります。'],
    ledeBefore: 'Shopifyは',
    ledeLink: '旧顧客アカウントを非推奨（deprecated）',
    ledeAfter:
      'とし、新しい顧客アカウントページへの移行を進めています。新しいページはすっきりして高速ですが、初期状態ではかなりシンプルです。',
    items: [
      {
        h: '購入者が必ず訪れるページ',
        p: '注文の追跡のために、お客様は何度もアカウントに戻ってきます。購入後に確実に見てもらえる、ほぼ唯一のページです。',
      },
      {
        h: 'ただし、ストア独自の情報は何もない',
        p: 'お知らせも、連絡先も、安心材料もありません。店頭に立っていれば伝えたはずのことを、伝える場所がないのです。',
      },
      {
        h: 'Optimalifyがその空白を埋めます',
        p: 'この場所のために作られた専用ブロックです。Shopify標準のページはそのまま使い、そこにストアならではの情報を載せられます。',
      },
    ],
  },
  blocks: {
    eyebrow: 'ブロック一覧',
    h2: '11種類のブロックを、1つのアプリで',
    lede:
      '必要なものだけを有効にできます。各ブロックはアプリで設定し、Shopifyのエディターで好きな場所に配置します。',
    more: '詳しく見る →',
    items: [
      {icon: '📣', name: 'バナー', href: '/help/banner',
        text: '注文履歴ページと注文状況ページにお知らせを表示します。セール、配送のご案内、ポリシー変更などを、全員に、または対象のお客様だけに届けられます。'},
      {icon: '🎂', name: 'プロフィール', href: '/help/profile',
        text: 'ログイン中のお客様が、プロフィールページで誕生日や連絡の希望を保存できます。情報はお客様のレコードに保存され、オファーやセグメントにそのまま活用できます。'},
      {icon: '🛡️', name: 'トラストバッジ', href: '/help/trust-badges',
        text: '配送状況を確認するお客様が見る注文状況ページに、安全なチェックアウト、返金保証、配送に関するバッジを表示します。'},
      {icon: '💳', name: 'お支払いアイコン', href: '/help/payment-icons',
        text: '利用できるお支払い方法を、ブランドアイコンの整った列としてアカウントページに表示します。'},
      {icon: '💬', name: 'サポート連絡先', href: '/help/support',
        text: 'メール、電話、WhatsApp、ヘルプセンター、「問題を報告」へのリンクを、アカウントページのフッターに表示します。'},
      {icon: '🧾', name: '請求書のダウンロード', href: '/help/invoice',
        text: '注文に「請求書をダウンロード」アクションを追加します。ログイン中のお客様がご自身でPDFを入手でき、ストアへのメール依頼が不要になります。'},
      {icon: '❓', name: 'よくある質問（FAQ）', href: '/help/faq',
        text: '疑問が生まれる場所である注文状況・注文履歴・プロフィールの各ページに、開閉式の回答リストを表示します。'},
      {icon: '📦', name: 'ストアポリシー', href: '/help/store-policies',
        text: '返品や配送に関する簡潔な回答を、注文のすぐ隣に開閉式のリストで表示します。'},
      {icon: '✨', name: 'リッチコンテンツ', href: '/help/rich-content',
        text: '見出し、テキスト、ボタンをアカウントページに表示します。新コレクションの紹介や季節のメッセージに便利です。'},
      {icon: '🔗', name: 'ソーシャルリンク', href: '/help/social-links',
        text: 'Facebook、Instagram、X、TikTok、YouTube、Pinterest、LinkedInのプロフィール、または任意のリンクを表示します。'},
      {icon: '📄', name: 'ページ', href: '/demo',
        text: 'アカウント内に独自のページを作成し、メニュー項目として追加します。サイズガイドやお手入れガイドなどに使えます。'},
      {icon: '👀', name: '実際の表示を見る', href: '/demo',
        text: '実際のアカウントページで全ブロックを確認できます。14のユースケースと、それぞれの入力例も掲載しています。'},
    ],
  },
  trust: {
    eyebrow: 'トラストバッジ',
    h2: 'ひと目で安心感を届ける',
    lede:
      '安全なチェックアウト、返金保証、配送に関するバッジを、注文状況ページに表示できます。お客様が配送状況を追いながら「本当に届くのだろうか」と感じる、まさにそのタイミングで安心していただけます。',
    ticks: [
      '用意されたバッジをそのまま使うことも、自分で作成することも可能',
      'アイコンは、ストアの「ファイル」にあるロゴに差し替え可能',
      'アカウントのフッターのサポート連絡先と組み合わせ可能',
    ],
    link: 'トラストバッジのガイドを読む →',
  },
  profile: {
    eyebrow: 'プロフィール情報の取得',
    h2: 'お客様が求めているものを知る',
    lede:
      '誕生日や連絡の希望を、プロフィールページで直接収集できます。回答はお客様ごとにメタフィールドとして保存されるため、セグメントやフローをよりパーソナルにできます。お客様が自発的に提供するゼロパーティデータです。',
    ticks: [
      '誕生日と連絡の希望',
      'お客様のレコードに保存され、管理画面で確認可能',
      'お客様が入力していない情報は一切収集しません',
    ],
    link: 'プロフィール情報の取得ガイドを読む →',
  },
  how: {
    eyebrow: '使い方',
    h2: 'アプリで設定し、エディターで配置する',
    lede: 'これがすべてです。2つのステップで、どちらもコードは不要です。',
    steps: [
      {h: 'ブロックを設定する',
        p: 'Shopify管理画面の<strong>アプリ → Optimalify → ブロック</strong>を開きます。ブロックを選んで内容を入力し、<strong>有効</strong>にして保存します。'},
      {h: 'ページに配置する',
        p: '<strong>顧客アカウントのエディター</strong>を開き、Optimalifyのブロックを好きな場所に追加して保存します。ログイン中のお客様には、すぐに表示されます。'},
    ],
    footBefore: '2つ目のステップで迷ったら、',
    footLink: 'エディターでのブロックの追加方法',
    footAfter: 'で、ブロックを置ける全箇所をスクリーンショット付きで解説しています。',
  },
  pricing: {
    eyebrow: '料金',
    h2: 'まずは無料で。すべてのブロックを使いたくなったらアップグレード。',
    lede: 'お支払いはすべて米ドル（USD）建てで請求されます。',
    free: '無料',
    blocksLine: `${PLANS.free.blocks}ブロック`,
    pro: 'Pro',
    perMonth: ' / 月',
    altPrice: `または年額 $${PLANS.pro.yearly}（${PLANS.pro.yearlySaving}お得）`,
    proTicks: ['すべてのブロック', `${PLANS.pro.trialDays}日間の無料トライアル`],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'ストア運営者からよくいただくご質問',
    items: [
      {q: 'テーマの編集は必要ですか？',
        a: 'いいえ、不要です。Optimalifyの管理画面でブロックを設定し、Shopifyの顧客アカウントエディターでページに配置するだけです。テーマのコードも、開発者も必要ありません。'},
      {q: '新しい顧客アカウントで動作しますか？',
        a: '動作するのは新しい顧客アカウントのみです。OptimalifyはShopifyの顧客アカウントUI拡張機能で作られており、これは新しい顧客アカウント上で動作します。Shopifyが非推奨とした旧顧客アカウントでは動作しません。'},
      {q: 'ブロックの内容を翻訳できますか？',
        a: 'はい。Optimalify内、またはShopifyのTranslate & Adaptアプリでテキストを翻訳すると、お客様がご利用中の言語で表示されます。標準の文言は、英語、日本語、ベトナム語、ドイツ語、フランス語、スペイン語、オランダ語、イタリア語に翻訳済みで提供されます。'},
      {q: 'Optimalifyは顧客データを収集しますか？',
        a: 'プロフィールブロックは、お客様が自発的に入力した内容（誕生日や連絡の希望など）を、そのお客様自身のレコードにメタフィールドとして保存します。請求書のダウンロードは、PDFを作成するためにお客様ご自身の注文を読み取ります。その他のブロックは、設定した内容を表示するだけです。'},
      {q: '料金はいくらですか？',
        a: `無料プランでは${PLANS.free.blocks}ブロックをご利用いただけます。Proプランはすべての11ブロックが利用でき、月額$${PLANS.pro.monthly}または年額$${PLANS.pro.yearly}（${PLANS.pro.yearlySaving}お得）で、${PLANS.pro.trialDays}日間の無料トライアルが付きます。請求はすべて米ドル（USD）建てです。`},
      {q: 'ブロックが表示されないのはなぜですか？',
        a: 'ほとんどの場合、次のどちらかが原因です。エントリーが「有効」ではなく「下書き」のままになっているか、顧客アカウントエディターでブロックが追加・保存されていないかです。その他の原因は、トラブルシューティングガイドで順に確認できます。'},
    ],
    footBefore: 'さらに詳しくは、',
    footLink: 'FAQ・トラブルシューティングガイド',
    footAfter: 'をご覧いただくか、次のアドレスまでメールでお問い合わせください：',
  },
  cta: {
    h2: 'お客様が毎回開くページに、ストアからの情報を載せませんか',
    p: `テーマのコード編集なしで11種類のブロックを利用できます。まずは無料プランから、またはProプランを${PLANS.pro.trialDays}日間無料でお試しください。`,
    browse: 'ヘルプセンターを見る',
    noteBefore: '先着20ストアに該当しますか？',
    noteLink: 'ファウンディングマーチャントの特典を見る →',
  },
};

const en: HomeCopy = {
  title: 'Optimalify — Meet customers where they sign in',
  hero: {
    eyebrow: 'For Shopify customer accounts',
    h1: ['Meet customers', 'where they sign in'],
    lede:
      'Banners, profile capture, trust badges, payment icons and support links — right on the account pages your shoppers already visit. No theme code.',
    demo: 'See the demo',
    ticks: ['11 blocks, one app', 'Set up in minutes'],
  },
  why: {
    eyebrow: 'Why now',
    h2: ['Legacy customer accounts are deprecated.', 'The new pages are where customers land.'],
    ledeBefore: 'Shopify has ',
    ledeLink: 'deprecated legacy customer accounts',
    ledeAfter:
      ' in favour of the new customer account pages. They’re clean, fast — and, out of the box, fairly bare.',
    items: [
      {h: 'A page every buyer visits',
        p: 'Order tracking pulls shoppers back to their account again and again. It’s the one post-purchase page you can count on being seen.'},
      {h: 'And nothing on it is yours',
        p: 'No announcement, no contact details, no reassurance — nowhere to say the thing you’d say if you were standing there.'},
      {h: 'Optimalify fills the gap',
        p: 'Purpose-built blocks for exactly this surface. You keep Shopify’s pages; you just get to put something on them.'},
    ],
  },
  blocks: {
    eyebrow: 'The blocks',
    h2: '11 blocks, all in one app',
    lede: 'Turn on what you need. Each block is configured in the app and placed wherever you want it in Shopify’s editor.',
    more: 'Learn more →',
    items: [
      {icon: '📣', name: 'Banner', href: '/help/banner',
        text: 'Announcements on the Orders and Order status pages — sales, shipping notices, policy updates. Show them to everyone or only to the right customers.'},
      {icon: '🎂', name: 'Profile', href: '/help/profile',
        text: 'Let signed-in customers save their birthday and contact preferences on the Profile page. It’s stored on the customer, ready for your offers and segments.'},
      {icon: '🛡️', name: 'Trust badges', href: '/help/trust-badges',
        text: 'Secure-checkout, money-back and shipping badges on the Order status page, where shoppers track delivery.'},
      {icon: '💳', name: 'Payment icons', href: '/help/payment-icons',
        text: 'The payment methods you accept, shown as a tidy row of brand icons on the account pages.'},
      {icon: '💬', name: 'Support links', href: '/help/support',
        text: 'Email, phone, WhatsApp, help centre and “report a problem” links in the footer of the account pages.'},
      {icon: '🧾', name: 'Invoice download', href: '/help/invoice',
        text: 'A Download invoice action on the order, so signed-in customers get their own PDF without emailing you.'},
      {icon: '❓', name: 'FAQ', href: '/help/faq',
        text: 'An expandable list of answers on the Order status, Orders and Profile pages, where the questions come up.'},
      {icon: '📦', name: 'Store policies', href: '/help/store-policies',
        text: 'Short return and shipping answers in an expandable list, right next to the order.'},
      {icon: '✨', name: 'Rich content', href: '/help/rich-content',
        text: 'A heading, text and a button on the account pages. Good for a new collection or a seasonal message.'},
      {icon: '🔗', name: 'Social links', href: '/help/social-links',
        text: 'Your Facebook, Instagram, X, TikTok, YouTube, Pinterest and LinkedIn profiles, or your own link.'},
      {icon: '📄', name: 'Pages', href: '/demo',
        text: 'Your own pages inside the account, with a menu item. Use them for a size guide or a care guide.'},
      {icon: '👀', name: 'See them live', href: '/demo',
        text: 'Tour every block on real account pages, with 14 use cases and what to enter for each.'},
    ],
  },
  trust: {
    eyebrow: 'Trust badges',
    h2: 'Build confidence at a glance',
    lede:
      'Reassure shoppers with secure-checkout, money-back and shipping badges — right on the order status page, while they’re tracking delivery and wondering whether the parcel is really coming.',
    ticks: [
      'Ready-made badges, or write your own',
      'Swap any icon for a logo from your store’s Files',
      'Pair them with support links in the account footer',
    ],
    link: 'Read the trust badges guide →',
  },
  profile: {
    eyebrow: 'Profile capture',
    h2: 'Learn what your customers want',
    lede:
      'Collect birthday and contact preferences right on the Profile page. Answers save to each customer as metafields, so your segments and flows get personal — zero-party data, given willingly.',
    ticks: [
      'Birthday and contact preferences',
      'Saved on the customer record, visible in admin',
      'Nothing collected that the customer didn’t type',
    ],
    link: 'Read the profile capture guide →',
  },
  how: {
    eyebrow: 'How it works',
    h2: 'Configure in the app, place in the editor',
    lede: 'That’s the whole model. Two steps, and no code in either of them.',
    steps: [
      {h: 'Configure the block',
        p: 'Shopify admin → <strong>Apps → Optimalify → Blocks</strong>. Open a block, fill in the content, set it to <strong>Active</strong>, save.'},
      {h: 'Place it on your pages',
        p: 'Open the <strong>customer account editor</strong>, drop the Optimalify block where you want it, and save. It’s live for signed-in customers straight away.'},
    ],
    footBefore: 'Stuck on step two? ',
    footLink: 'Adding blocks in the editor',
    footAfter: ' has screenshots of every spot a block can go.',
  },
  pricing: {
    eyebrow: 'Pricing',
    h2: 'Start free. Upgrade when you want every block.',
    lede: 'All charges are billed in USD.',
    free: 'Free',
    blocksLine: `${PLANS.free.blocks} block`,
    pro: 'Pro',
    perMonth: ' / month',
    altPrice: `or $${PLANS.pro.yearly}/year — save ${PLANS.pro.yearlySaving}`,
    proTicks: ['All blocks', `${PLANS.pro.trialDays}-day free trial`],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Questions merchants ask first',
    items: [
      {q: 'Do I need to edit my theme?',
        a: 'No. You configure a block in the Optimalify admin, then place it on the page in Shopify’s customer account editor. No theme code, no developer.'},
      {q: 'Does this work with the new customer accounts?',
        a: 'That’s the only thing it works with. Optimalify is built on Shopify’s customer account UI extensions, which run on the new customer accounts — not on legacy customer accounts, which Shopify has deprecated.'},
      {q: 'Can I translate my blocks?',
        a: 'Yes. Translate your text inside Optimalify or in Shopify’s Translate & Adapt app, and customers see it in the language they shop in. Built-in wording comes translated in English, Japanese, Vietnamese, German, French, Spanish, Dutch and Italian.'},
      {q: 'Does Optimalify collect customer data?',
        a: 'Profile stores what customers voluntarily enter (such as a birthday and contact preferences) as metafields on their own customer record. Invoice download reads the customer’s own order to build the PDF. The other blocks only display what you configure.'},
      {q: 'How much does it cost?',
        a: `Free covers ${PLANS.free.blocks} block. Pro covers all 11 blocks for $${PLANS.pro.monthly}/month, or $${PLANS.pro.yearly}/year (save ${PLANS.pro.yearlySaving}), with a ${PLANS.pro.trialDays}-day free trial. All charges are billed in USD.`},
      {q: 'Why isn’t my block showing?',
        a: 'Almost always one of two things: the entry is still Draft rather than Active, or the block hasn’t been added and saved in the customer account editor. The troubleshooting guide walks through the rest.'},
    ],
    footBefore: 'More in the ',
    footLink: 'full FAQ & troubleshooting guide',
    footAfter: ', or email ',
  },
  cta: {
    h2: 'Put something on the page your customers already open',
    p: `11 blocks, no theme code. Start on Free, or try Pro free for ${PLANS.pro.trialDays} days.`,
    browse: 'Browse the Help Center',
    noteBefore: 'Among the first 20 stores? ',
    noteLink: 'See the founding merchants offer →',
  },
};

export const home: Record<Locale, HomeCopy> = {ja, en};
