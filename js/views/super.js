// views/super
// SuperView

define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    'use strict';

    var SuperView = {
        fin: undefined,
        // デフォルトの初期化処理
        initialize: function(options) {
            if (!this.fin) {
                throw new Error('Property "fin" definition is required.');
            }
            _.bindAll(this, 'prepare', 'render', 'finalize');
            if (options && 'on' in options) {
                // イベント監視
                var fireEvent = Backbone.appName + ':' + options.on;
                Backbone.mediator.once(fireEvent, this.prepare);
            }
        },
        // 終わったら呼ぶ
        finalize: function() {
            // 終わったよイベント発火
            Backbone.mediator.trigger(Backbone.appName + ':' + this.fin);
            return this;
        },
        // 描画のための準備
        prepare: function() {
            return this.render();
        },
        // 各Viewでrenderを実装する
        render: function() {
            return this.finalize();
        }
    };

    return SuperView;
});

