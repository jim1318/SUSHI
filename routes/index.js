var path = require("path");
var Items = require(path.dirname(__dirname) + "/routes/items_node.js");

/* GET home page & items data */
module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', { items: Items.get() });
  });
};
