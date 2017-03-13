var App = {
  templates: JST,   //JST Set in handlebars_templates.js file
  $el: $('#content'),

  //Dispaly the Index View
  indexView: function() {
    console.log('APP - indexView()');
    this.createCart();                    //Create the Cart Collection
    this.renderItems();                   //Render the Menu Items
    this.bindEvents();                    //Bind All Events
  },

  createCart: function() {
    console.log('APP - createCart()');
    this.cart = new CartItems();
    new CartSummaryView({ collection: this.cart });
    new CartInfoView({ collection: this.cart });
  },

  renderItems: function() {
    console.log('APP - renderItems()');
    new ItemsView({
      collection: this.items
    });
    if (this.items.length > 0) {
      this.items.each(this.renderItemView);
    }
  },
  renderItemView: function(item) {
    //console.log('APP - renderItem()');
    new ItemView({
      model: item
    });
  },

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.off();  //First unbind old events
    this.on("addToCart", this.addToCart);
    this.on("removeFromCart", this.removeFromCart)
    this.on("nextItem", this.nextItem);
    this.on("prevItem", this.prevItem);
    this.on("removeItem", this.items.removeItem.bind(this.items));
    this.on("updateAdmin", this.showAdmin);
  },

  //EVENT PROCESSING----------------------------------------
  showItemDetails: function(id) {
    console.log('APP - showItemDetails()');
    //Create a cart if there is not one yet
    if (!this.cart) {
      this.createCart();
      this.bindEvents();
    };
    new ItemDetailView({
      model: this.items.get(+id),
    });
  },

  checkout: function() {
    console.log('APP - checkout()');
    console.log(this.cart.toJSON());
    new CheckoutView({ collection: this.cart });
  },

  addToCart: function(item) {
    console.log('APP - addToCart()');
    //Allow item input to be a model or model id.
    if (typeof item === 'number') { item = this.items.get(item) };
    this.cart.addItem(item);
  },

  removeFromCart: function(id) {
    console.log('APP - removeFromCart()');
    //Allow item input to be a model or model id.
    //if (typeof item === 'number') { item = this.items.get(item) };
    this.cart.removeOneItem(id);
  },

  nextItem: function(item) {
    var nextId
    item.id + 1 < this.items.length ? nextId = item.id + 1 : nextId = 1
    new ItemDetailView({
      model: this.items.get(+nextId),
    });
    router.navigate
  },

  //ADMIN STUFF -----------------------------
  showAdmin: function() {
    console.log("APP - showAdmin()");
    this.bindEvents();
    $('#admin ul').html("");  //reset view
    if (this.items.length > 0) {
      this.items.each(function(item) {
        new AdminItemView({
          model: item
        });
      });
    };
  },

  showEdit: function(id) {
  },
}

//Partial for formatting price
Handlebars.registerHelper("format_price", function(price) {
  return (+price).toFixed(2);
});