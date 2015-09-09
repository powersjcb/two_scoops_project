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
