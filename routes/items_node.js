var path = require("path");
var fs = require("fs");
var _ = require('underscore');
var file_path = path.resolve(path.dirname(__dirname), "data/items.json");

var Items = {
  get: function(id) {
    if (id) { 
      return _.findWhere(getItems(), { id: id }) 
    } else {
      return getItems();
    }
  },
  setData: function(items) {
    setItems({data: items});
  }
};

//------------JSON FILE INTERACTIONS----------------//

function getItems() {
  return JSON.parse(fs.readFileSync(file_path, "utf8")).data;
}

function setItems(data) {
  console.log('WRITING FILES');
  fs.writeFileSync(file_path, JSON.stringify(data),"utf8");
  console.log('WRITE SUCCESS');
}

module.exports = Items;