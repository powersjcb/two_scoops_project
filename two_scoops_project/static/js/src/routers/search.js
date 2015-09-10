TwoScoopsApp.Routers.Search = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$userInput = options.$userInput;
  },

  routes: {
    '':'results',
    ':term':'results'
  },

  results: function(term) {
    var flavors = new TwoScoopsApp.Collections.Flavors();
    flavors.fetch();

    var searchView = new TwoScoopsApp.Views.FlavorSearch({
      collection: flavors,
    });

    this._swapView(searchView);
  },

// swapping router
  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
    console.log(this.$rootEl);
  },

  listenToUserInput: function() {

  },

});
