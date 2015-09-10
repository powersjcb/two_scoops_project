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
    __p += '<h4 class="list-group-item-heading">' + ((__t = (flavor.escape('flavor_name'))) == null ? '' : __t) + '</h4>\n<div class="list-group-item-body">\n  ' + ((__t = (flavor.escape('flavor_description'))) == null ? '' : __t) + '\n</div>\n';

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
};