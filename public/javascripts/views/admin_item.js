var AdminItemView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.admin_item,
  events: {
    'click .delete_item': 'deleteItem',
    'click .edit_item': 'editItem',
  },

  deleteItem: function(e) {
    e.preventDefault();
    var $e = $(e.target);
    var id = $e.attr('data-id');
    App.trigger('removeItem', id)
    this.remove()
  },

  editItem: function(e) {
    e.preventDefault();
    new editItemView( {model: this.model} );
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find('#admin ul'));
  },

  initialize: function() {
    this.render();
    this.model.view = this;
  }
})