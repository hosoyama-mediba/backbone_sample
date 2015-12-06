# backbone_sample
backboneの勉強用サンプル

## Backbone.jsとは
クライアントMVCを実現するためのフレームワーク。
内部的にjQueryとUnderscore.jsを使用している。

## MVCとは
サーバサイドアプリの開発ではおなじみ。
役割によって処理を分離することで可読性・メンテ性を高めたい。

* Model
* View
* Controller

## クライアントサイドでもMVCを
Viewは遅延読み込み等があり、一回DOMを構築して終わりではない。
なので、ViewもControllerの役割の一部担うことがある。

## 何を覚えておけばよいのか

### Backbone以外

* __prototype__
 * プロトタイプベースのOOPってどういうこと？
 * クラスのオブジェクトを生成する時の雛形オブジェクトが詰まったプロパティだよ

* __jQuery__
 * 内部で使っているので知っているといい

* __Undersocre.js__
 * 内部で使っているので知っているといい

* __RequireJS__
 * 複数のライブラリを非同期で読み込んでくれる
 * モジュールをAMD（Asynchronous Module Definition）で定義するといい感じで読み込んでくれる

### Backboneのモジュール達

* __Backbone.View__
 * DOMと結びつけて表示系の処理を担う
 * イベント駆動型のサンプル作った。

* __Backbone.Model__
 * 「データ」の1単位
 * データの入出力に関わる処理も担う

* __Backbone.Collection__
 * Modelのコレクションオブジェクト
 * データの入出力に関わる処理も担う
 * データが複数（配列）の場合はこれ

* __Backbone.Events__
 * イベントを監視したり発火したりして非同期処理を綺麗に書けたりする
 * デフォルトではView間でイベントのやり取りはできない

* __Backbone.Router__
 * hashchangeかpopStateを監視してイベント通知してくれるのでSPA（Single Page Application）作るのに便利
 * hashchange版のサンプルあり
 * pushStateを使うとpjaxなサイトにできる

* __Backbone.History__
 * Routerがいろいろ操作してくれる履歴
 * 監視を開始したら自分で使うことはあまりない

## サンプル

### リポジトリ
https://github.com/hosoyama-mediba/backbone_sample

### ファイル・ディレクトリ構造
```tree
backbone_sample
├── index.html
├── css
│   └── .gitkeep
├── img
│   └── .gitkeep
├── js
│   ├── main.js
│   ├── app.js
│   ├── libs
│   │   ├── backbone.js
│   │   ├── handlebars.js
│   │   ├── hbars.js
│   │   ├── jquery.js
│   │   ├── require.js
│   │   ├── text.js
│   │   └── underscore.js
│   ├── collections
│   │   └── .gitkeep
│   ├── models
│   │   └── ua.js
│   ├── views
│   │   ├── entry.js
│   │   ├── header.js
│   │   ├── body.js
│   │   ├── footer.js
│   │   ├── finish.js
│   │   └── super.js
│   └── templates
│        ├── header.html
│        ├── body.html
│        └── footer.html
├── favicon.ico
├── LICENSE
└── README.md
```
