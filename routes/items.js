var path = require("path");
var Items = require(path.dirname(__dirname) + "/routes/items_node.js");

module.exports = function(router) {
  //Collection Calls
  router.route("/items").get(function(req, res) {
    //Get all items
    console.log("DB - getting all items");
    res.json(Items.get());
  });

  //Model Calls
  router.route("/menu/:id").get(function(req, res) {
    //Get an individual item data
    console.log("DB - getting single item");
    var id = req.params.id;
    console.log(Items.get(+id));
    res.render('index', { items: Items.get() });
  });
};