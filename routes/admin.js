var path = require("path");
var Items = require(path.dirname(__dirname) + "/routes/items_node.js");

module.exports = function(router) {
  //Collection Calls
  router.route("/admin").get(function(req, res) {
    console.log("DB - Admin All Items");
    //Get all items
    res.render('admin', { items: Items.get() });
  });

  router.route("/admin/edit/:id").get(function(req, res) {
    //Read
    var id = req.params.id;
    console.log("Calling Album GET Router Code with id: " + id);
    res.json(Albums.get(+id));
  }).put(function(req, res) {
    //Update / Replace
    var albums = Albums.get();
    var current_album = _(albums).findWhere({id: id});
    _.extend(current_album, req.body);            
    Albums.set(albums);
    res.json(current_album);
  }).delete( function(req, res) {
    //Delete
    var id = req.params.id;
    var items = Items.get();
    var items = items.filter( function(item) {
      return item.id !== +id;
    }); 
    Items.setData(items);
    res.render('admin', { items: Items.get() });
  });
};
