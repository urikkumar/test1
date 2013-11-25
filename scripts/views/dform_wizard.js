define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/dform_wizard.html'
], function($, _, Backbone, dform_wizard) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(dform_wizard);

            this.$el.html(compiledTemplate);
        }
    });
});
