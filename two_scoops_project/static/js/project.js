window.TwoScoopsApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
  },
};
;
this["JST"] = this["JST"] || {};
this["JST"]["flavors/index_item"] = function (obj) {
  obj || (obj = {});
  var __t, __p = '',
      __e = _.escape;
  with(obj) {
    __p += '<h4 class="list-group-item-heading">' + ((__t = (flavor.get('flavor_name'))) == null ? '' : __t) + '</h4>\n<div class="list-group-item-body">\n  ' + ((__t = (flavor.get('flavor_description'))) == null ? '' : __t) + '\n</div>\n';

  }
  return __p
};;
TwoScoopsApp.Models.Flavor = Backbone.Model.extend({
});
;
TwoScoopsApp.Views.FlavorIndexItem = Backbone.View.extend({
  template: JST['flavor/index_item'],

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
