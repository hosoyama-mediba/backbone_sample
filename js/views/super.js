// views/super
// SuperView

define([
    'jquery',
    'underscore',
    'backbone',
    'hbars!templates/body'
], function($, _, Backbone, template) {
    'use strict';

    var SuperView = {
        fin: undefined,
        // デフォルトの初期化処理
        initialize: function(options) {
            if (!this.fin) {
                throw new Error('Property "fin" definition is required.');
            }
            _.bindAll(this, 'render', 'finalize');
            if (options && 'on' in options) {
                // イベント監視
                var fireEvent = Backbone.appName + ':' + options.on;
                Backbone.mediator.once(fireEvent, this.render);
            }
        },
        // 終わったら呼ぶ
        finalize: function() {
            // 終わったよイベント発火
            Backbone.mediator.trigger(Backbone.appName + ':' + this.fin);
        },
        // 各Viewでrenderを実装する
        render: function() {
            this.finalize();
        }
    };

    // コントローラでextendしてやる
    //_.extend(Backbone.View.prototype, PortalView);

    return SuperView;
});

// Viewを拡張したいなんて時は気をつけながらも可能

