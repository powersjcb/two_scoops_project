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
        $rootEl: $('#search-results'),
        $userInput: $('input#search-term'),
      });
    // } else if (path.match(/^\/flavors\/share\//)) {
      // this.shareRouter = new TwoScoopsApp.Routers.Share();
    // }

    Backbone.history.start();
    return this;
  },
};
;
this["JST"] = this["JST"] || {};
this["JST"]["flavors/list"] = function (obj) {
  obj || (obj = {});
  var __t, __p = '',
      __e = _.escape;
  with(obj) {
    __p += '<div id="list-container" class=""></div>\n';

  }
  return __p
};
this["JST"]["flavors/list_item"] = function (obj) {
  obj || (obj = {});
  var __t, __p = '',
      __e = _.escape;
  with(obj) {
    __p += '<h4 class="list-group-item-heading">' + ((__t = (flavor.get('flavor_name'))) == null ? '' : __t) + '</h4>\n<div class="list-group-item-body">\n  ' + ((__t = (flavor.get('flavor_description'))) == null ? '' : __t) + '\n</div>\n';

  }
  return __p
};
this["JST"]["flavors/search"] = function (obj) {
  obj || (obj = {});
  var __t, __p = '',
      __e = _.escape;
  with(obj) {
    __p += '<div class="search-box input-group">\n  <label for="search-term" class="form-control">Search flavors</label>\n  <input id="search-term" class="form-control" type="text" name="name" value="">\n</div>\n\n<div id="search-results-container" class=""></div>\n';

  }
  return __p
};;
TwoScoopsApp.Models.Flavor = Backbone.Model.extend({
  urlRoot: '/api/flavors'
});
;
TwoScoopsApp.Collections.Flavors = Backbone.Collection.extend({
  url: '/api/flavors',
  model: TwoScoopsApp.Models.Flavor,
}, {
  search: function(searchTerm) {
    var search = $.Deferred();
    options = options || {};
    var collections  = new this([], options);
    collections.url = _.result(collection, this.url) + 'search?term=' + query;
    var fetch = collection.fetch({data: {term: query}});
    fetch.done(_.bind(function() {
      Backbone.Events.trigger('search:done');
      search.resolveWith(this,[collection]);
    }, this));
    fetch.fail(function() {
      Backbone.Events.trigger('search:fail');
      search.reject();
    });
    return search.promise();
  },

});
;
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
;
TwoScoopsApp.Views.FlavorIndexItem = Backbone.View.extend({
  template: JST['flavor/list_item'],

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
;
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
;
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
;
window.TwoScoopsApp.initialize();
