var CartSummaryView = Backbone.View.extend({
  el: $('#cart-summary').get(0),
  template: App.templates.cart_summary,
  events: {
    'click li a': 'removeItem',
    'click #empty_cart': 'emptyCart'
  },

  removeItem: function(e) {
    e.preventDefault();
    console.log('CART SUMMARY VIEW - removeItem()');
    //IS THIS THE RIGHT WAY TO DO THINGS - OR SHOULD I GO BACK THROUGH APPLICATION
    var $e = $(e.target);
    this.collection.trigger('remove_item', $e.closest('li').attr('data-id'));
  },

  emptyCart: function(e) {
    e.preventDefault();
    console.log('--------------------------------');
    console.log('CART SUMMARY VIEW - emptyCart()');
    this.collection.trigger('empty_cart');
  },

  render: function() {
    console.log('CART SUMMARY VIEW - render()');
    this.$el.html(this.template({
     total: this.collection.getTotal(),
     items: this.collection.toJSON().slice(0,8),
    }));
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, "cart_updated", this.render);
  },
})