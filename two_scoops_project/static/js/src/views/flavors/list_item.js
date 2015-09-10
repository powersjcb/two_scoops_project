TwoScoopsApp.Views.FlavorIndexItem = Backbone.View.extend({
  template: JST['flavors/list_item'],

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
