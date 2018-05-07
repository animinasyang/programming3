var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hello world");
});
app.get("/name", function(req, res){
   res.send("Hello world name");
});
app.get("/search", function(req, res){
    var n = req.params.name;
   res.redirect("https://www.google.com/");
});
app.get("/name/:name", function(req, res){
    var n = req.params.name;
   res.send("<h1> Hello" + n +"</h1>");
});
app.get("/*", function(req, res){
   res.send("404 not found");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
