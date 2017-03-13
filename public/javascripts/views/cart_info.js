var CartInfoView = Backbone.View.extend({
  el: $('#cart-info').get(0),
  template: App.templates.cart_info,
  events: {
  },

  render: function() {
    console.log('CART INFO VIEW - render()');
    this.$el.html(this.template({
      quantity: this.collection.getQuantity()
    }));
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render);
  }
});