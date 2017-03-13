var ItemsView = Backbone.View.extend({
  tagName: 'ul',
  className: 'main',
  render: function() {
    console.log('ITEMS VIEW -- render()');
    App.$el.html(this.$el);
  },

  initialize: function() {
    this.render();
  }
})