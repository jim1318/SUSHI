var path = require("path");
var Items = require(path.dirname(__dirname) + "/routes/items_node.js");
var _ = require('underscore');

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
    var id = +req.params.id;
    var items = Items.get();
    var current_item = _(items).findWhere({id: id});
    
    //Rebuild the Stats Hash
    var stats = {};
    stats.protein = req.body.protein;
    stats.fat = req.body.fat;
    stats.carbohydrate = req.body.carbohydrate;
    stats.energy = req.body.energy;
    stats.sugar = req.body.sugar;
    req.body.stats = stats;

    _.extend(current_item, req.body);  
    Items.setData(items);
    res.json(items);
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
