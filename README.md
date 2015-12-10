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
 * イベント駆動型のサンプルあり

* __Backbone.Model__
 * 「データ」の1単位
 * データの入出力（サーバとの通信）に関わる処理も担う
 * RESTFul APIをサポートしている

* __Backbone.Collection__
 * Modelのコレクションオブジェクト
 * モデルが複数（配列）になる場合はこちらで制御する

* __Backbone.Events__
 * イベントを監視したり発火したりして非同期処理を綺麗に書けたりする
 * デフォルトではView間でイベントのやり取りはできないが、サンプルでは機能拡張して可能にした

* __Backbone.Router__
 * hashchangeかpopStateを監視して通知してくれるのでSPA（Single Page Application）作るのに便利
 * popState版のサンプルあり

## 参考

[これからBackbone.jsを始めるならこれ読んどけばOKという記事たち - Qiita](http://qiita.com/kakkunpakkun/items/8e1cfeba6230a5d88ed9)

## サンプルコード

ライブラリのソースを読みながら我流で作ってみたので、もっと良い書き方とかはあるかもしれない。

### リポジトリ
https://github.com/hosoyama-mediba/backbone_sample

### ファイル・ディレクトリ構造
```tree
backbone_sample
├── .gitignore
├── .htaccess
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
