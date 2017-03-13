this["JST"] = this["JST"] || {};

this["JST"]["admin_item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1><a href=\"#\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"delete_item\">DELETE</a><a href=\"#\" data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"edit_item\">EDIT</a>";
},"useData":true});

this["JST"]["cart_info"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "Shopping Cart<span>"
    + container.escapeExpression(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"quantity","hash":{},"data":data}) : helper)))
    + " Items</span>";
},"useData":true});

this["JST"]["cart_summary"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul><div><h3>YOUR<br>Shopping CART</h3><p>$"
    + container.escapeExpression((helpers.format_price || (depth0 && depth0.format_price) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.total : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</p><a id=\"empty_cart\" href=\"#\">EMPTY CART</a><a id=\"checkout\" href=\"/checkout\">CHECKOUT</a></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><a><img src=\"/images/items/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"></a><span>"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "x$"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"format_price","hash":{},"data":data}))
    + "</span></li>";
},"4":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.items : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["checkout"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr data-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><td><div class=\"checkout_image\"><img src=\"/images/items/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"></div></td><td><h2>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2></td><td><a href=\"#\" class=\"subtract\">-</a><p class=\"quantity\">"
    + alias4(((helper = (helper = helpers.quantity || (depth0 != null ? depth0.quantity : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"quantity","hash":{},"data":data}) : helper)))
    + "</p><a href=\"#\" class=\"add\">+</a></td><td><h3>$"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "<h3></td></tr>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id=\"check_bar\"><h1>Order Details</h1><table><tr><th>Item</th><th></th><th>Quantity</th><th>Price</th></tr>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</table><p>Total:<span>$"
    + container.escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"total","hash":{},"data":data}) : helper)))
    + "</span><p><a href=\"#\" id=\"cancel_order\">CANCEL ORDER</a><a href=\"#\" id=\"order_now\">Order Now!</a></div>";
},"useData":true});

this["JST"]["edit_item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<img src=\"../images/items/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.image : stack1), depth0))
    + "\"><dl><dd><label for=\"name\">Name:</label></dd> <dt><input type=\"text\" name=\"name\" id=\"name\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" /></dt><dd><label for=\"description\">Description:</label></dd> <dt><input type=\"text\" name=\"description\" id=\"description\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.description : stack1), depth0))
    + "\" /></dt><dd><label for=\"price\">price:</label></dd> <dt><input type=\"text\" name=\"price\" id=\"price\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.price : stack1), depth0))
    + "\" /></dt><dd><label for=\"protein\">Protein:</label></dd> <dt><input type=\"text\" name=\"protein\" id=\"protein\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.protein : stack1), depth0))
    + "\" /></dt><dd><label for=\"fat\">Fat:</label></dd> <dt><input type=\"text\" name=\"fat\" id=\"fat\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.fat : stack1), depth0))
    + "\" /></dt><dd><label for=\"carbohydrate\">Carbohydrate:</label></dd> <dt><input type=\"text\" name=\"carbohydrate\" id=\"carbohydrate\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.carbohydrate : stack1), depth0))
    + "\" /></dt><dd><label for=\"energy\">Energy:</label></dd> <dt><input type=\"text\" name=\"energy\" id=\"energy\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.energy : stack1), depth0))
    + "\" /></dt><dd><label for=\"sugar\">Sugar:</label></dd> <dt><input type=\"text\" name=\"sugar\" id=\"sugar\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.sugar : stack1), depth0))
    + "\" /></dt></dl><a href=\"#\">SAVE</a>";
},"useData":true});

this["JST"]["item_details"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div id=\"item_bar\"><a href=\"/menu/"
    + alias4(((helper = (helper = helpers.prevId || (depth0 != null ? depth0.prevId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prevId","hash":{},"data":data}) : helper)))
    + "\" id=\"left_nav\"></a><img src=\"../images/items/"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.image : stack1), depth0))
    + "\"><div id=\"item_summary\"><h1>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1><p>"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.idescription : stack1), depth0))
    + "</p><h2>"
    + alias4((helpers.format_price || (depth0 && depth0.format_price) || alias2).call(alias1,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.iprice : stack1),{"name":"format_price","hash":{},"data":data}))
    + "</h2><button>+ ADD TO CART</button></div><div id=\"item_facts\"><h1> SUSHI DETAILS </h1><p>protein: "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.protein : stack1), depth0))
    + "</p><p>fat: "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.fat : stack1), depth0))
    + "</p><p>carbohydrate: "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.carbohydrate : stack1), depth0))
    + "</p><p>energy: "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.energy : stack1), depth0))
    + "</p><p>sugar: "
    + alias4(alias5(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.stats : stack1)) != null ? stack1.sugar : stack1), depth0))
    + "</p></div><a href=\"/menu/"
    + alias4(((helper = (helper = helpers.nextId || (depth0 != null ? depth0.nextId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextId","hash":{},"data":data}) : helper)))
    + "\" id=\"right_nav\"></a></div>";
},"useData":true});

this["JST"]["item"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"/menu/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><img src=\"images/items/"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" ><strong>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</strong><span>$ "
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</span></a><button>Add to Cart</button>";
},"useData":true});