'use strict';

var mongoose= require('mongoose');

//therapist.name
//therapist.equipment

var therapistSchema =  new mongoose.Schema({
  name:String,
  equipment:String
});

var model = mongoose.model('Therapist', therapistSchema);

module.exports = model;
