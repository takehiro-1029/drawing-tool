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

* `eslint` とか `prettier`
* `ts-importer` もおすすめ

## コマンド

```
# develop
yarn dev

# build
yarn build
```

# 2.主要パッケージ

* [vite](https://ja.vitejs.dev/)・・・フロントエンド（環境）ツール
* [React](https://ja.reactjs.org/)・・・データ駆動UIライブラリ
* [MUI](https://mui.com/)・・・コンポーネントフレームワーク
* [axios](https://axios-http.com/)・・・httpクライアント


# 3.ディレクトリ

`src` 配下

```
├── assets/             画像やsvgなどの静的アセット
├── components/         共通使用するプレゼンテーショナルコンポーネント
├── constants/          定数・コンフィグ
├── containers/         コンテナコンポーネント
├── infra/              apiやローカルストレージなど外部アクセス
├── interfaces/         インターフェイス定義
├── models/             ドメインモデル
├── schemas/            スキーマ定義
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


## 参考

https://blog.cybozu.io/entry/2022/08/29/110000