//index.js acts as api module
'use strict';
var express = require('express');

var therapists = require('../../mock/therapists.json');
var router = express.Router();

router.get('/therapists',function(req, res){
  res.json({therapists:therapists});
});



module.exports = router;
