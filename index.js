const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/home", function(req,res){
  res.sendFile(__dirname+"/index.html");
  //path.basename('C:\Users\ASUS\Desktop\Final Project\E-commerce\Htmls');
});
app.post("/", function(req,res){
  res.send("Thanks for posting!");
});

app.get("/contact", function(req,res){
  res.sendFile(__dirname+"/Contact.html");
});
app.post("/", function(req,res){
  res.send("Thanks for posting!");
});

app.get("/favourite", function(req,res){
  res.sendFile(__dirname+"/favourite.html");
});
app.post("/", function(req,res){
  res.send("Thanks for posting!");
});

app.listen(3001, function(){
  console.log("Server started at port 3001");
});
