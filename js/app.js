// app
// App
/*
define([
    'underscore',
    'backbone',
    'views/super',
    'views/entry',
    'views/header',
    'views/body',
    'views/footer',
    'views/finish'
], function(
    _,
    Backbone,
    SuperView,
    EntryView,
    HeaderView,
    BodyView,
    FooterView,
    FinishView
) {
    'use strict';
});
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

    // ルータ設定（pushStateに対応できる）
    var AppRouter = Backbone.Router.extend({
        routes: {
            credit: 'credit',
            '*route': 'default'
        }
    });

    // 名前を付けておく
    Backbone.appName = 'portal';

    // 異なるView間でイベントのやり取りをするためのオブジェクト
    Backbone.mediator = _.extend({}, Backbone.Events);

    // SuperViewを親クラスとしてMixinする（気をつけないと危険）
    _.extend(Backbone.View.prototype, SuperView);

    // ルータの初期化
    var initialize = function() {
        var appRouter = new AppRouter();

        // defaultのコールバック
        appRouter.on('route:default', function(route) {

            // 各View初期化時にどのViewの後に処理を開始するか決めることが可能
            var entryView  = new EntryView();
            var headerView = new HeaderView({
                on: entryView.fin
            });
            var bodyView   = new BodyView({
                on: headerView.fin
            });
            var footerView = new FooterView({
                on: bodyView.fin
            });
            var finishView = new FinishView({
                on: footerView.fin
            });

            // entryだけrenderした後はイベント駆動
            entryView.render();
        });

        // creditのコールバック
        appRouter.on('route:credit', function() {
            alert('Presented by hosoyama-mediba.');
        });

        // 監視を開始
        Backbone.history.start();
    };

    // ルータを外に出さないようにしてる
    return {
        initialize: initialize
    };
});
