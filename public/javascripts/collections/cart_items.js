var CartItems = Backbone.Collection.extend({

  //Set the total cart cost
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);
    return this
  },
  getTotal: function() { return this.total },

  //Set the total cart quantity
  setQuantity: function() {
    this.quantity  = this.toJSON().reduce(function(a, b) {
      return a + b.quantity;
    }, 0);
    return this
  },
  getQuantity: function() { return this.quantity },
  
  //Add new item to cart
  addItem: function(item) {
    //check if it's an existing item in the cart - if so, just add to quantity
    var existing = this.get(item.get("id"));
    if (existing) { 
      existing.set('quantity', existing.get('quantity') + 1) 
    }
    else {
      existing = item.clone();
      existing.set('quantity', 1);
      this.add(existing);
    }
    this.updateStats();
    this.trigger('cart_updated');
  },

  removeOneItem: function(id) {
    var existing = this.get(id);
    var newQuantity = existing.get('quantity') - 1;
    if (newQuantity === 0) {
      this.removeItem(id);
    } else {
      existing.set('quantity', newQuantity); 
    };
    this.updateStats();
    this.trigger('cart_updated');
  },

  removeItem: function(id) {
    console.log('CART COLLECTION - removeItem()');
    console.log(+id);
    this.remove(id);
    this.updateStats();
    this.trigger('cart_updated');
  },

  emptyCart: function() {
    console.log('CART COLLECTION - emptyCart()');
    this.reset();
    this.updateStats();
    this.trigger('cart_updated');
  },

  //Update Cart Stats
  updateStats: function() {
    this.setTotal().setQuantity().updateStorage();
  },

  initialize: function() {
    this.readStorage();
    this.on('remove_item', this.removeItem);
    this.on('empty_cart', this.emptyCart);
  },

  //--------------STORAGE UTILITIES-------------------------------------

  //Read Cart Items From Local Storage
  readStorage: function() {
    var stored_cart = JSON.parse(localStorage.getItem('cart'));
    this.reset(stored_cart);
    this.setTotal().setQuantity();
  },

  //Save Cart Items to Local Storage
  updateStorage: function() {
    localStorage.setItem('cart', JSON.stringify(this.toJSON()));
  },

})