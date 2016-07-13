'use strict';
var express = require('express');
var app = express();




app.get('/',function(req, res){
  res.send('my project goes here!');
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log("The frontend server running on 3000.")
});
