'use strict';

var Therapist = require('./models/therapist.js');

var therapists = [
  'LCulbertson',
   'SPerri',
    'CarlaHuffmn'
];
// var equipments = [
  // 'cableman belts',
  // 'camera in hand',
  // 'endless supply of Tab'
// ];


therapists.forEach(function(therapist, equipment, index){
  Therapist.find({'name': therapist}, function(err, therapists){
    if(!err && !therapists.length){
      Therapist.create({name: therapist, equipment:""});

    };
  });
});
