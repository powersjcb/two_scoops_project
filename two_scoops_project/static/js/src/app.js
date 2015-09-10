window.TwoScoopsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    this.appHistory = [];

    // apply router based on current page content
    var path = window.location.pathname;
    // if (path.match(/^\/flavors\/search\//)) {
      this.searchRouter = new this.Routers.Search({
        $rootEl: $('#search'),
      });
    // } else if (path.match(/^\/flavors\/share\//)) {
      // this.shareRouter = new TwoScoopsApp.Routers.Share();
    // }

    Backbone.history.start();
    return this;
  },
};
