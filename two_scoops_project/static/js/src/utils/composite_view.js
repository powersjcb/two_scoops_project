Backbone.CompositeView = Backbone.View.extend({

  addSubview: function(selector, subview) {
    this._subviews(selector).push(subview);
    this.attachSubview(selector, subview);
    subview.render();
  },

  attachSubview: function() {

  },

  _attachSubviews: function() {

  },

  _eachSubview: function(callback) {
    subviews.each(function(selectorSubviews, selector) {
      selectorSubviews.each(function(subview){
        callback(subview, selector);
      });
    });
  },

  _getSubview: function() {

  },

  onRender: function() {

  },

  remove: function() {
  },

  removeSubview: function() {

  },

  removeModelSubview: function() {

  },

  // map of subviews per a selector
  subviews: function(selector) {
    this._subviews = this._subviews || {};
    if (selector) {
      this._subviews[selector] = this._subviews[selector] || _([]);

      return this._subviews[selector];
    }

    return _(this._subviews);
  },

});
