# GitHub Portfolio Mobile
- GitHub上で公開している制作物を**モバイル端末で見やすいポートフォリオ形式**で閲覧できる Web アプリです。
- Next.js と Tailwind CSS を用いて制作し、各作品の詳細は **GitHub の README をそのまま表示**する構成にしています。

## 🔗 Demo
- [Web サイト（Vercel）](https://github-portfolio-mobile.vercel.app)  
- [制作ログ（ブログ）](https://aobacreate.net/github-portfolio-mobile-complete/)

## 🛠 使用技術
- Next.js（App Router）
- React
- TypeScript
- Tailwind CSS
- Vercel
- react-markdown

## 📱 制作内容・工夫点
- モバイルファーストで設計したポートフォリオ UI
- 作品一覧をカード形式で表示
- タイトルリンクから作品詳細ページへ遷移
- GitHub リンクから該当リポジトリへアクセス可能
- 各作品の詳細説明は **GitHub の README を raw URL から直接取得して表示**
- GitHub API を使わず、構成をシンプルに保つ設計
- README 表示には `react-markdown` を使用
- Markdown 表示用の CSS に対して、global.css で余白や文字サイズを調整

## 📂 構成について
各作品は以下の情報をもとに管理しています。
- slug
- title
- README と GitHub リンクは slug から生成することで、データ構造を最小限に保っています。

```ts
export const readmeRawUrl = (slug: string) =>
  `https://raw.githubusercontent.com/${GITHUB_USER}/${slug}/${GITHUB_BRANCH}/README.md`;
```

## 🚀 ローカルでの起動方法
```bash
npm install
npm run dev
```
ブラウザで以下にアクセスしてください。

`http://localhost:3000`
