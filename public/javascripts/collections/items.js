var Items = Backbone.Collection.extend({
  model: Item,

  removeItem: function(id) {
    console.log('ITEMS COLLECTION - remove()');
    this.remove(id);
    $.ajax({
      url: '/admin/edit/' + id,
      type: 'delete',
    });
  }
});