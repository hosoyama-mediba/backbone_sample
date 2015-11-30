// views/finish
// FinishView
define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone) {
    'use strict';

    var FinishView = Backbone.View.extend({
        fin: 'finish',
        initialize: function(options) {
            _.bindAll(this, 'render');

            var fireEvent = Backbone.appName + ':' + options.on;
            Backbone.mediator.once(fireEvent, this.render);
        },
        render: function() {
            // 全ての描画が終わった時の処理をここに書く
            Backbone.mediator.trigger(Backbone.appName + ':' + this.fin);
            return this;
        }
    });

    return FinishView;
});
