var editItemView = Backbone.View.extend({
  template: App.templates.edit_item,
  events: {
  },

  render: function() {
    this.$el.html(this.template({ model: this.model.toJSON()}));
    App.$el.find('#edit_item').html(this.$el);
    //this.$el.appendTo(App.$el.find('#edit_item'));
  },

  initialize: function() {
    this.render();
  }
})