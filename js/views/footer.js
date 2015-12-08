/**
 * @fileOverview フッタ描画View
 * @file         views/footer
 * @author       Terunobu Hosoyama <hosoyama@mediba.jp>
 */
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
        events: {
            'click .pagination a': 'onPaginationClick',
            'click .credit a': 'onPaginationClick'
        },
        prepare: function() {
            return this.render();
        },
        render: function() {
            var _this = this;
            this.$el.hide().html(template).fadeIn('normal', function() {
                Backbone.app.event.on('resize', _this.onResize, this);
                _this.finalize();
            });
            return this;
        },
        onResize: function(e) {
            //console.log('foot:resize');
            // 他のVIEWに影響を与えずに個別にON/OFFできる
            Backbone.app.event.off('resize', this.onResize, this);
        },
        onPaginationClick: function(e) {
            e.preventDefault();
            var $this = $(e.currentTarget);

            // pushState
            Backbone.app.router.navigate($this.attr('href'), true);
        },
        onCredit: function() {
            alert('Presented by hosoyama-mediba.');
            Backbone.app.router.navigate('/');
        }
    });

    return FooterView;
});
