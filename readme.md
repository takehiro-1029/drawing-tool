# 1.環境
## セットアップ

以下をインストールします

* [node.js](https://nodejs.org/ja/)・・・バージョンは16付近
* [yarn](https://yarnpkg.com/)・・・パッケージマネージャー

```bash
# パッケージインストール
yarn install
```

## vscodeセットアップ

* `eslint`,`prettier`,`TypeScript Importer`

## コマンド

```
# develop
yarn dev

# develop with mock api
yarn dev-mock

# build
yarn build

# lunch storybook
yarn storybook
```
[storybook:参考](https://stackoverflow.com/questions/71765316/how-to-set-storybook-to-run-with-different-node-version)

# 2.主要パッケージ

* [vite](https://ja.vitejs.dev/)・・・フロントエンド（環境）ツール
* [React](https://ja.reactjs.org/)・・・データ駆動UIライブラリ
* [MUI](https://mui.com/)・・・コンポーネントフレームワーク
* [icons](https://mui.com/material-ui/material-icons/)・・・アイコン
* [swr](https://swr.vercel.app/ja)・・・キャッシュhooks
* [axios](https://axios-http.com/)・・・httpクライアント
* [swr](https://mswjs.io/)・・・APIモック
* [story-book](https://storybook.js.org/)・・・コンポーネントのカタログ化
* [sevent-source-polyfill](https://www.npmjs.com/package/event-source-polyfill)・・・Server-sent events
* [websocket-ts](https://www.npmjs.com/package/websocket-ts)・・・websocket

レイアウト参考
https://mui.com/material-ui/api/box/

# 3.ディレクトリ
* [デザインパターン](https://zenn.dev/morinokami/books/learning-patterns-1/viewer/presentational-container-pattern)・・・コンテナ・プレゼンテーションパターン

`src` 配下

```
├── assets/             画像やsvgなどの静的アセット
├── components/         共通使用するプレゼンテーショナルコンポーネント
├── constants/          定数・コンフィグ
├── containers/         コンテナコンポーネント
├── infra/              apiやローカルストレージなど外部アクセス
├── interfaces/         インターフェイス定義
├── models/             ドメインモデル
├── types/              型定義ファイル
└── utils/              ユーティリティ
```

## ファイル命名
`Angular` のファイル規則をならって、拡張子前にレイヤー名を入れます。

```
***.component.tsx
***.util.ts
***.model.ts
```

ファイル名が長くなりますが、以下の理由で採用しています。

* エディタでファイルを引っ張る時に検索しやすい
  * 例えば、`model/User.ts` の場合だと「ユーザーモデル」と引きたい
* エディタで、現在開いているファイルが、どのレイヤーのモジュールなのかわかりやすい
  * `api/user.ts` と `model/user.ts` があった場合など、タブの表示上は「user.ts」になり、パッと見でややこしい

# 4.テスト

## unit-test
* `vitest` を利用する
* utilsやmodel周り、その他必要に応じて書く
## 参考

https://blog.cybozu.io/entry/2022/08/29/110000
