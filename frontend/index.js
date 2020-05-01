const express = require("express");

const app = express();

app.use(express.static('public'))
app.use(express.static('files'))

app.get("/home", function(req,res){
  res.sendFile(__dirname+"/public/index.html");
});

app.get("/contact", function(req,res){
  res.sendFile(__dirname+"/public/Contact.html");
});

app.get("/favourite", function(req,res){
  res.sendFile(__dirname+"/public/favourite.html");
});

app.listen(3001, function(){
  console.log("Server started at port 3001");
});
