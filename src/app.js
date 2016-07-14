'use strict';
var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();


app.use('/', express.static(__dirname + '/public'));
app.use(parser.json());


//app.get('/',function(req, res){
 //res.send('');
//});


app.use('/api', router);
//keep this here, not index.js, as used to import router


app.listen(3000, function(){
  console.log("The frontend server running on 3000.")
});
