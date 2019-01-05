// required npm packages are stored here at the top
var express = require("express");
var path = require("path");
// telling node we are creating an express server
var app = express();
// because we are deploying to Heroku this is the way we structure the server info
var PORT = process.env.PORT || 8080;
// this allows us to send information from the forms 
app.use(express.urlencoded({extended: true})); 
// configuring server to take json 
app.use(express.json());
app.use(express.static(__dirname + "/app/public"));
// requiring the routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log ("app listening" + PORT);
}

)

// Routes
// =============================================================
// html routes
require('./app/routing/htmlRoutes.js')(app);
// api routes
require('./app/routing/apiRoutes.js')(app);