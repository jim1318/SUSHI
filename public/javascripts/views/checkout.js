var CheckoutView = Backbone.View.extend({
  tagName: 'div',
  id: 'checkout',
  template: App.templates.checkout,
  events: {  
    'click a.subtract': 'reduceQuantity',
    'click a.add': 'addQuantity',
    'click #cancel_order': 'cancelOrder',
    'click #order_now': 'orderNow'
  },

  reduceQuantity: function(e) {
    console.log('CHECKOUTVIEW - reduce()');
    e.preventDefault();
    var $e = $(e.target);
    var id = +$e.closest('tr').attr('data-id');
    App.trigger("removeFromCart", id);
    this.remove();
    App.checkout();
  },

  addQuantity: function(e) {
    console.log('CHECKOUTVIEW - add()');
    e.preventDefault();
    var $e = $(e.target);
    var id = +$e.closest('tr').attr('data-id');
    App.trigger("addToCart", id);
    this.remove();
    App.checkout();
  },

  cancelOrder: function(e) {
    console.log('-----------------------------');
    console.log('CHECKOUT VIEW - cancelOrder()');
    e.preventDefault();
    router.navigate("/", {trigger: true});  
  },

  orderNow: function(e) {
    console.log('--------------------------');
    console.log('CHECKOUT VIEW - orderNow()');
    e.preventDefault();
    this.collection.trigger('empty_cart');
    router.navigate("/", {trigger: true});  
  },

  reRender: function() {
    this.remove();
    App.checkout();
  },

  render: function() {
    console.log('CART CHECKOUT VIEW - render()');
    console.log(this.collection.toJSON());
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    App.$el.html(this.$el);
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.reRender);
  }
})