window.TwoScoopsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    this.appHistory = [];

    // apply router based on current page content
    var path = window.location.pathname;
    if (path.match(/^flavors\/search\//)) {
      this.searchRouter = new TwoScoopsApp.Routers.Search();
    } else if (path.match(/^flavors\/share\//)) {
      // this.shareRouter = new TwoScoopsApp.Routers.Share();
    }


    Backbone.History.navigate();
    return this;
  },
};

(function(window) {
  window.app = window.TwoScoopsApp.initialize();
})(window);
