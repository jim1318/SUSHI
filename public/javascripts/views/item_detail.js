var ItemDetailView = Backbone.View.extend({
  tagName: 'div',
  id: "item_details",
  template: App.templates.item_details,
  events: {
    'click button': 'addToCart', 
  },

  addToCart: function(e) {
    console.log("ITEM DETAILS VIEW - addToCart()");
    e.preventDefault();
    App.trigger("addToCart", this.model);
  },

  prevId: function() {
    return this.model.id - 1 > 1 ? this.model.id - 1 : App.items.length 
  },
  
  nextId: function() {
    return this.model.id + 1 <= App.items.length ? this.model.id + 1 : 1 
  },

  render: function() {
     var prevId = this.prevId(); 
     var nextId = this.nextId();

    this.$el.html(this.template({
      model: this.model.toJSON(),
      prevId: prevId,
      nextId: nextId
    }));
    App.$el.html(this.$el);
  },

  initialize: function() {
    this.render();
  }
})