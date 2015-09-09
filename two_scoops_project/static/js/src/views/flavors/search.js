TwoScoopsApp.Views.FlavorSearch = Backbone.View.extend({
  template: JST['flavor/search'],

  initialize: function() {
  },

  render: function() {
    var content = this.template({
      
    });
    this.$el.html(content);
    return this;
  },
});
