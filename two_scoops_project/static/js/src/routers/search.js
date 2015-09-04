TwoScoopsApp.Routers.Search = Backbone.Router.extend({

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.$userInput = options.$userInput;
  },

  routes: {
    '':'root',
  },

  root: function () {
    // will render empty results view
    console.log('root');
  },

  results: function(term) {
    // shows results based on search term
    console.log('results');

  },

  _swapView: function(view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },

});
