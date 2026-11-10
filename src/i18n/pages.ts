import {PLANS} from '../config';
import type {Locale} from './index';

export interface FoundingCopy {
  title: string; description: string; eyebrow: string; h1: string;
  ledeA: string; strongA: string; ledeB: string; strongB: string; ledeC: string;
  join: string; installFree: string; fineBefore: string; fineAfter: string;
  getsH: string; gets: {title: string; text: string}[];
  howH: string; steps: {title: string; text: string}[];
  faqH: string; faqs: {q: string; a: string}[];
}
export interface DemoCopy {
  title: string; description: string; h1: string; lede: string; useCases: string; note: string;
  pages: {title: string; alt: string; blocks: string; text: string}[];
  endH: string; endBefore: string; endAfter: string;
}

const price = `$${PLANS.pro.monthly}`;
const priceY = `$${PLANS.pro.yearly}`;

export const founding: Record<Locale, FoundingCopy> = {
  ja: {
    title: 'ファウンディングマーチャント',
    description: '先着20ストアは、15分のフィードバック通話と引き換えに、OptimalifyのProプランを6か月間無料でご利用いただけます。',
    eyebrow: 'ファウンディングマーチャント',
    h1: 'OptimalifyのProプランを使う、最初の20ストアのひとつに',
    ledeA: '先着20ストアは、',
    strongA: 'Proプランを6か月間無料',
    ledeB: 'でご利用いただけます。その代わりに、',
    strongB: '15分のフィードバック通話',
    ledeC: 'にご協力ください。顧客アカウントのブロックをストアでどのように使いたいかをお聞かせいただければ、公開までお手伝いします。',
    join: 'メールで参加を申し込む',
    installFree: '無料でインストール',
    fineBefore: 'メールの宛先は',
    fineAfter: 'です。先に無料プランでインストールして、アプリを試していただくこともできます。',
    getsH: '参加特典',
    gets: [
      {title: 'Proプランを6か月間無料',
        text: `11種類すべてのブロックを、6か月間無料でご利用いただけます。Proプランの通常料金は月額${price}または年額${priceY}です。`},
      {title: '開発者に直接つながる窓口',
        text: 'ご連絡いただくメールは、実際に確認している受信箱に届きます。通話でいただいた内容は、Optimalifyを開発しているメンバーに直接共有されます。'},
      {title: '次に作るものに意見できる',
        text: '足りないものや分かりにくい点をおうかがいし、その回答をもとに次に開発する機能を決めます。'},
    ],
    howH: '参加の流れ',
    steps: [
      {title: 'メールで連絡する',
        text: '下のボタンを押すと、メールのひな形が開きます。ストアのURLと、最初に使いたいブロックを記入してください。'},
      {title: 'Shopify App Storeからインストールする',
        text: `Shopify App StoreからOptimalifyを追加してください。無料プランでは${PLANS.free.blocks}ブロックを利用できるため、すぐに使い始められます。`},
      {title: '15分の通話を予約する',
        text: '参加枠を確認したうえで返信し、アプリの使い方や改善してほしい点についての短い通話を調整します。'},
    ],
    faqH: 'よくある質問',
    faqs: [
      {q: '参加の見返りとして、何をする必要がありますか？',
        a: 'Optimalifyの使い方についての、15分のフィードバック通話に1回ご参加ください。うまくいっている点、分かりにくい点、足りない点をおうかがいします。'},
      {q: '誰が参加できますか？',
        a: '新しい顧客アカウントを使っているShopifyストアであれば、どなたでも参加できます。特典は、先にご連絡いただいた先着20ストアが対象です。枠が埋まった時点で、このページは削除または変更します。'},
      {q: '6か月が過ぎたらどうなりますか？',
        a: 'ご自身で選べます。App Storeのリスティングに表示されている通常料金でProプランを続けるか、無料プランに切り替えることができます。'},
    ],
  },
  en: {
    title: 'Founding merchants',
    description: 'The first 20 stores get Optimalify Pro free for 6 months in exchange for a 15-minute feedback call.',
    eyebrow: 'Founding merchants',
    h1: 'Be one of the first 20 stores on Optimalify Pro',
    ledeA: 'The first 20 stores get ',
    strongA: 'Pro free for 6 months',
    ledeB: ' in exchange for a ',
    strongB: '15-minute feedback call',
    ledeC: '. Tell us how you would use customer account blocks on your store and we will help you get them live.',
    join: 'Email us to join',
    installFree: 'Install free',
    fineBefore: 'The email goes to ',
    fineAfter: '. You can also install on the Free plan first and look around.',
    getsH: 'What you get',
    gets: [
      {title: 'Pro free for 6 months',
        text: `All 11 blocks with no charge for six months. Pro is normally ${price}/month or ${priceY}/year.`},
      {title: 'A direct line to the builders',
        text: 'You email a real inbox, and what you tell us on the call goes straight to the people building Optimalify.'},
      {title: 'A say in what we build next',
        text: 'We will ask what is missing and what is confusing, and use the answers to decide what to build next.'},
    ],
    howH: 'How it works',
    steps: [
      {title: 'Email us',
        text: 'Use the button below. It opens an email with a short template: your store URL and the block you would use first.'},
      {title: 'Install from the App Store',
        text: `Add Optimalify from the Shopify App Store. The Free plan covers ${PLANS.free.blocks} block, so you can start straight away.`},
      {title: 'Book a 15-minute call',
        text: 'We reply to confirm your place and arrange a short call about how you use the app and what you would change.'},
    ],
    faqH: 'Questions',
    faqs: [
      {q: 'What do I have to do in return?',
        a: 'One 15-minute feedback call about how you use Optimalify: what works, what is confusing and what is missing.'},
      {q: 'Who can join?',
        a: 'Any Shopify store using the new customer accounts. The offer is for the first 20 stores that get in touch. We will take this page down or change it when those places are taken.'},
      {q: 'What happens after six months?',
        a: 'You choose. Stay on Pro at the regular price shown on the App Store listing, or move to the Free plan.'},
    ],
  },
};

export const demo: Record<Locale, DemoCopy> = {
  ja: {
    title: 'デモ：顧客アカウント上の全ブロックを見る',
    description: 'OptimalifyのブロックがShopifyの顧客アカウントページ（注文履歴、注文状況、プロフィール、カスタムページ）でどのように表示されるかをご確認いただけます。',
    h1: '顧客アカウント上での表示を見る',
    lede: 'デモストアで実際に動作しているブロックです。表示されているテキストはサンプルで、実際の内容はアプリで自由に設定できます。',
    useCases: '14のユースケースを見る',
    note: 'デモストアでは、最初のページにパスワードが表示されます。',
    pages: [
      {title: '注文履歴', blocks: 'バナー、リッチコンテンツ、請求書',
        alt: 'バナー、ボタン付きのウェルカムカード、各注文の「請求書をダウンロード」ボタンが表示された注文履歴ページ',
        text: '注文一覧の上に、お知らせとウェルカムカードを表示します。各注文には「請求書をダウンロード」ボタンが付きます。'},
      {title: '注文履歴（ページ下部）', blocks: 'FAQ、ソーシャルリンク、サポート連絡先',
        alt: 'FAQ、ソーシャルリンク、サポートのフッターが表示された注文履歴ページの下部',
        text: 'よくある質問、ストアのSNSプロフィール、お問い合わせ方法を、注文一覧のすぐ下に表示します。'},
      {title: '注文状況', blocks: 'お支払いアイコン、ストアポリシー、トラストバッジ',
        alt: 'お支払いアイコン、バナー、ストアポリシー、トラストバッジが表示された注文状況ページ',
        text: 'お支払い方法、開閉式のポリシー、トラストバッジを、配送情報の隣に表示します。'},
      {title: 'プロフィール', blocks: 'プロフィール',
        alt: '誕生日の入力欄と連絡の希望のチェックボックスが表示されたプロフィールページ',
        text: 'お客様が、誕生日と受け取りたいお知らせの種類を保存できます。'},
      {title: 'カスタムページ', blocks: 'ページ',
        alt: '顧客アカウントのメニューに表示されたサイズガイドのページ',
        text: 'サイズガイドなどの独自ページを、アカウントのメニューに追加できます。'},
    ],
    endH: 'ご自身のストアで試す',
    endBefore: '無料プランでは1ブロックを利用できます。ご質問は',
    endAfter: 'までメールでお寄せください。',
  },
  en: {
    title: 'Demo: see every block in a customer account',
    description: 'See how Optimalify blocks look on Shopify customer account pages: Orders, Order status, Profile and custom pages.',
    h1: 'See it in a customer account',
    lede: 'These are the real blocks on our demo store. The text is sample content, and you write your own in the app.',
    useCases: 'See 14 use cases',
    note: 'The demo store shows its password on the first page.',
    pages: [
      {title: 'Orders', blocks: 'Banner, Rich content, Invoice',
        alt: 'Orders page with a banner, a welcome card with a button, and Download invoice buttons on each order',
        text: 'A notice and a welcome card sit above the order list. Each order gets a Download invoice button.'},
      {title: 'Orders, further down', blocks: 'FAQ, Social links, Support',
        alt: 'Bottom of the Orders page with a FAQ list, social links and a support footer',
        text: 'Common questions, your social profiles and your contact options, right under the orders.'},
      {title: 'Order status', blocks: 'Payment icons, Store policies, Trust badges',
        alt: 'Order status page with payment icons, a banner, store policies and a trust badge',
        text: 'Payment methods, expandable policies and a trust badge beside the delivery details.'},
      {title: 'Profile', blocks: 'Profile',
        alt: 'Profile page with a birthday field and contact preference checkboxes',
        text: 'Customers save their birthday and what they want to hear about.'},
      {title: 'Custom page', blocks: 'Pages',
        alt: 'A size guide page in the customer account menu',
        text: 'Add your own page, such as a size guide, to the account menu.'},
    ],
    endH: 'Try it on your store',
    endBefore: 'The Free plan covers one block. Questions? Email ',
    endAfter: '.',
  },
};
