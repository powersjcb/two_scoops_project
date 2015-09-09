TwoScoopsApp.Views.FlavorIndexItem = Backbone.View.extend({
  template: JST['flavor/list_item'],

  initialize: function() {
  },

  render: function() {
    var content = this.template({
      flavor: this.model
    });
    this.$el.html(content);
    return this;
  },
});
