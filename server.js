var express = require("express");
var body = require("body-parser");

//defines the port the server's listening on
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static( __dirname + "/public"));

app.use(body.urlencoded({ extended: false}));
app.use(body.json());

//Set handlebars
var handle = require("express-handlebars");

var db = require("./models");

app.engine("handlebars", handle({ extname: "handlebars", defaultLayout: false, layoutsDir: "views/layouts/"}));
app.set("view engine", "handlebars");


// Import routes and give the server access to them
var route = require("./controllers/spell_controller.js");

app.use(route);

// Shows app is listening
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App now listening at localhost: " + PORT);
    });
})