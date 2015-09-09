TwoScoopsApp.Routers.Search = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$userInput = options.$userInput;
  },

  routes: {
    ':term':'results',
  },

  results: function(term) {
    var flavors = TwoScoopsApp.Collections.Flavors;
    flavors.search(term);

    var searchView = TwoScoopsApp.Views.SearchView({
      collection: flavors,
    });

  },

  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

  listenToUserInput: function() {

  },

});
