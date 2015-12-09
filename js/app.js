/**
 * @fileOverview アプリケーションのコントローラ
 * @file         app
 * @author       Terunobu Hosoyama <hosoyama@mediba.jp>
 */
define(function(require, exports, module) {
    'use strict';

    var _          = require('underscore'),
        Backbone   = require('backbone'),
        SuperView  = require('views/super'),
        EntryView  = require('views/entry'),
        HeaderView = require('views/header'),
        BodyView   = require('views/body'),
        FooterView = require('views/footer'),
        FinishView = require('views/finish');

    // ルータ設定（URLの監視して通知してくれる人）
    var AppRouter = Backbone.Router.extend({
        routes: {
            credit: 'credit',
            '*route': 'default'
        }
    });

    // 異View間でやり取りできるようにBackboneオブジェクトを利用する
    Backbone.app = {
        // 名前
        name: 'app',
        // ルータ
        router:  new AppRouter(),
        // イベント
        event: _.extend({}, Backbone.Events)
    };

    // SuperViewを親クラスとしてMixinする（気をつけないと危険）
    _.extend(Backbone.View.prototype, SuperView);

    // どのViewの後に処理を開始するか決める
    var entry = new EntryView();
    var header = new HeaderView({
        on: entry.fin
    });
    var body = new BodyView({
        on: header.fin
    });
    var footer = new FooterView({
        on: body.fin
    });
    var finish = new FinishView({
        on: footer.fin
    });

    // ルータの初期化
    var initialize = function() {

        // default
        Backbone.app.router.on('route:default', entry.prepare, entry);

        // credit
        Backbone.app.router.on('route:credit', footer.onCredit, footer);

        // 監視を開始
        Backbone.history.start({
            pushState: true,
            route: '/'
        });
    };

    // ルータを外に出さないようにしてる
    return {
        initialize: initialize
    };
});
