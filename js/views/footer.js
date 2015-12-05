// views/footer
// FooterView
define([
    'jquery',
    'underscore',
    'backbone',
    'hbars!templates/footer'
], function($, _, Backbone, template) {
    'use strict';

    var FooterView = Backbone.View.extend({
        el: '.js-footer',
        fin: 'footer',
        prepare: function() {
            return this.render();
        },
        render: function() {
            var _this = this;
            this.$el.hide().html(template).fadeIn('normal', function() {
                Backbone.mediator.on('resize', _this.onResize, this);
                _this.finalize();
            });
            return this;
        },
        onResize: function(e) {
            //console.log('foot:resize');
            // 他のVIEWに影響を与えずに個別にON/OFFできる
            Backbone.mediator.off('resize', this.onResize, this);
        }
    });

    return FooterView;
});
