var express = require("express");
var router = express.Router();
var path = require("path");                      //(part of node.js) provides utilitse for workiing with file & directory paths
var route_files = ['index', 'items', 'admin'];

for (var i = 0; i < route_files.length; i++) {
  require(path.resolve(path.dirname(__dirname), "routes/" + route_files[i]))(router);  //creates final string of file path names
}

module.exports = router