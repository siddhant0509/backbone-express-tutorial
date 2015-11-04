var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    fs = require("fs"),
    path = require("path"),
    _ = require("underscore"),
    users = []
    publicDir = path.join(__dirname,"/dist");

app.use(morgan("dev"));
app.use(bodyParser());
app.use(express.static('dist'));
app.use(express.static("public"));


app.get("/", function(req,res){
  var pathFile = path.join(__dirname, "dist/build.html");
  readFile(pathFile,res);
});

app.get("/student/:id", function(req,res){
  var id = req.params.id;
  var user = _.find(users, function(user){
    return user.id == id;
  });
  if(user)
    res.send(user);
  else{
    res.writeHead(500);
    res.end("Error!");
  }
});


app.put("/student", function(req,res){
  var user = req.body;
  var existing = _.find(users, function(u){
    return parseInt(user.id) === u.id
  });
  if(existing)
    update(user,existing);
  else{
    users.push(user);
  }
  res.send({success: true});

});

app.post("/student", function(req,res){
  var user = req.body;
  users.push(user);
  res.end("ok");
});


app.get("/student", function(req,res){
  res.send(users);
});

app.listen(port, function(){
console.log("Runnign on port : "+port)
});


function readFile(pathFile,res){
  fs.readFile(pathFile,function(err,data){
    if(err){
      console.log(err);
      res.writeHeadd(500);
      res.end("Error!");
    }
    else{
      res.end(data);
    }
  })
}
