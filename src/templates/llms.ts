import {SITE} from '../config';
import {getHelp, getPosts, slugOf} from '../utils/blog';
import {withLocale, type Locale} from '../i18n';
import {ui} from '../i18n/ui';

/**
 * llms.txt — a machine-readable index of the Help Center, pointing at the raw
 * Markdown for each article. See https://llmstxt.org. One per locale:
 * `/llms.txt` (Japanese, the default) and `/en/llms.txt`.
 */
export async function llmsTxt(locale: Locale): Promise<Response> {
  const t = ui[locale];
  const abs = (path: string) => `${SITE.url}${withLocale(path, locale)}`;

  const docs = (await getHelp(locale))
    .filter((a) => slugOf(a.id) !== 'index')
    .map((a) => `- [${a.data.title}](${abs(`/help/${slugOf(a.id)}.md`)}): ${a.data.description}`)
    .join('\n');
  const posts = (await getPosts(locale))
    .map((p) => `- [${p.data.title}](${abs(`/blog/${slugOf(p.id)}`)}): ${p.data.description}`)
    .join('\n');

  const body =
    locale === 'ja'
      ? `# ${SITE.name}

> ${t.siteDescription}

${SITE.name}は、Shopifyの顧客アカウントUI拡張機能（Customer Account UI Extensions）で動作するShopifyアプリです。
ストア運営者はアプリ管理画面でブロックを設定し、Shopifyの顧客アカウントエディターで顧客アカウントの各ページに配置します。
テーマのコード編集は不要です。以下のヘルプセンター記事は、URLの末尾に \`.md\` を付けるとMarkdownとして取得できます。
English version: ${SITE.url}/en/llms.txt

## ヘルプセンター

${docs}

## ブログ

${posts}

## その他

- [ヘルプセンター トップ](${abs('/help/index.md')}): すべてのガイドと、各ブロックの表示場所
- [ホーム](${abs('/')}): 製品概要とよくある質問
- [ファウンディングマーチャント](${abs('/founding')}): 先着20ストアは、15分のフィードバック通話と引き換えにProプランを6か月間無料で利用できます
- サポート: ${SITE.supportEmail}
`
      : `# ${SITE.name}

> ${t.siteDescription}

${SITE.name} is a Shopify app built on Customer Account UI Extensions. Merchants configure
blocks in the app admin, then place them on their customer account pages in Shopify's
customer account editor — no theme code. Every Help Center article below is available as
Markdown by appending \`.md\` to its URL.
日本語版: ${SITE.url}/llms.txt

## Help Center

${docs}

## Blog

${posts}

## Optional

- [Help Center index](${abs('/help/index.md')}): all guides, and where each block appears
- [Home](${abs('/')}): product overview and FAQ
- [Founding merchants](${abs('/founding')}): the first 20 stores get Pro free for 6 months in exchange for a 15-minute feedback call
- Support: ${SITE.supportEmail}
`;
  return new Response(body, {headers: {'content-type': 'text/plain; charset=utf-8'}});
}
