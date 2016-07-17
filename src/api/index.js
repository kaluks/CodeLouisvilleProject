//index.js acts as api module
'use strict';
var express = require('express');

var Therapist = require('../models/therapist');

//var therapists = require('../../mock/therapists.json');
var router = express.Router();

router.get('/therapists',function(req, res){
  Therapist.find({},function(err,therapists){
    if (err){
      return res.status(500).json({message:err.message});
    }
    res.json({therapists:therapists, equipment:therapists});
  });
});

router.post('/therapists',function(req, res){
  var therapist = req.body;
  Therapist.create(therapist, function(err,therapist){
    if (err){
      return res.status(500).json({err:err.message});
    }
  res.json({'therapist': therapist, message: 'New Therapist Created'});
  })
  });

  router.put('/therapists/:id',function(req, res){
    var id = req.params.id;
    var therapist = req.body;
    if (therapist && therapist._id !== id){
      return res.status(500).json({err:"IDs don't match."})
    }
    Therapist.findByIdAndUpdate(id, therapist, function(err, therapist){
      if (err){
        return res.status(500).json({err:err.message});
      }
      res.json({'therapist': therapist, message: 'Therapist Updated'});
    })
    });


module.exports = router;
