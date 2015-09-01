window.TwoScoopsApp.Views.FlavorIndexItem = Backbone.View.extend({
  template: JST['flavor/index_item'],

  initialize: function() {
    console.log('made a view')
  },

  render: function() {
    var content = this.template({
      flavor: this.model
    });
    this.$el.html(content);
    return this;
  },
});
