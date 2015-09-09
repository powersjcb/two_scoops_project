TwoScoopsApp.Views.FlavorList = Backbone.View.extend({
  template: JST['flavor/index_item'],

  initialize: function() {
  },

  render: function() {
    var content = this.template({});
    this.$el.html(content);
    return this;
  },
});
