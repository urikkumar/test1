define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/dform_elements.html'
], function($, _, Backbone, dform_elements) {
    return Backbone.View.extend({
        el: $("#main-content"),

        render: function() {

            var compiledTemplate = _.template(dform_elements);

            this.$el.html(compiledTemplate);
        }
    });
});
