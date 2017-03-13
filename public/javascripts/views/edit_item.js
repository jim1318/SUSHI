var editItemView = Backbone.View.extend({
  template: App.templates.edit_item,
  events: {
    'submit form': 'editItem'
  },

  editItem: function(e) {
    console.log('EDIT SUBMIT');
    e.preventDefault();
    var $f = this.$('form');
    var view = this;
    $.ajax({
      url: $f.attr('action'),
      type: $f.attr('method'),
      data: $f.serialize(),
      success: function(json) {
        App.items.reset(json);
        App.trigger('updateAdmin'); 
        view.remove();
      }
    });
  },

  render: function() {
    this.$el.html(this.template({ model: this.model.toJSON()}));
    App.$el.find('#edit_item').html(this.$el);
  },

  initialize: function() {
    this.render();
  }
})