TwoScoopsApp.Views.FlavorSearch = Backbone.View.extend({
  template: JST['flavors/search'],

  initialize: function() {
    this.updateListSubview();
  },

  events: {
    'keyup input#search-term': 'handleTyping',
  },

  handleTyping: function(event) {
    // parse input to search
    // maybe ajax search
  },

  maybeSearch: function (term) {
    // if some conditions are met, post ajax
  },

  render: function() {
    var content = this.template({});
    this.$el.html(content);
    return this;
  },

  updateListSubview: function () {
    var subview = new TwoScoopsApp.Views.FlavorList({
      collection: this.collection,
    });
  }
});
