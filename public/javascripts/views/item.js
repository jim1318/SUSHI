var ItemView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.item,
  events: {
    'click button': 'addToCart'
  },

  addToCart: function(e) {
    console.log("ITEM VIEW - addToCart()");
    e.preventDefault();
    App.trigger("addToCart", this.model)
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find('ul'));
  },

  initialize: function() {
    this.render();
    this.model.view = this;
  }
})