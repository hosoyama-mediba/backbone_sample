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

* __jQuery__
 * おなじみ

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
 * HTML5のpushStateを使ってSPA(SinglePageApplication)を簡単に作れちゃう
 * サンプルあり

* __Backbone.History__
 * Routerの内部で使っている履歴
 * View内で移動してもブラウザの履歴に入るので戻るボタンで戻れる

## サンプル
https://github.com/hosoyama-mediba/backbone_sample
