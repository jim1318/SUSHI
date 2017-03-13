//Store Backbone router in the router variable
//Since this function is exectued on definition, the index route is followed as part of the initialize function
var router = new (Backbone.Router.extend({
  routes: {
    "menu/:id": App.showItemDetails.bind(App),
    "/": this.index,
    "checkout": App.checkout.bind(App),
    "admin": App.showAdmin.bind(App),
    "admin/edit/:id": App.showEdit.bind(App)
  },
  
  index: function() { 
    console.log('BB ROUTER - index()');
    App.indexView(); 
  },  //responds to the route - calls the indexView() function of App.

  initialize: function() {
    console.log('BB ROUTER - initialize()');
    //Manually Create The Index Route.  "index" is triggered as a route name event.  "this.index" is the callback
    this.route(/^\/?$/, "index", this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});

//DONT NEED THIS YET FOR SUSHI

//Use this to listen to clicks on links in the main app.
$(document).on("click", "a[href^='/']", function(e) {
  console.log($(e.currentTarget).attr('href'));
  if( $(e.currentTarget).attr('href') !== '/admin') {
    e.preventDefault();
    //"Setting Trigger to TRUE will call the route function.  This is DUPLICATIVE :() "
    router.navigate($(e.currentTarget).attr('href').replace(/^\//, ""), { trigger: true });
  }
});
