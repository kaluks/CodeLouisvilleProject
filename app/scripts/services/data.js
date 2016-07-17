'use strict';
var angular = require('angular');

// function dataService ($http, $q) {

  // this.getTherapists = function(callback) {
    // $http.get('/api/therapists').then(callback);
  // };
// };


angular.module('equipmentApp')
.service('dataService', function($http, $q){
 this.getTherapists = function(callback){
   $http.get('/api/therapists').then(callback)
 };



  this.deleteTherapist = function(therapist){
  console.log(therapist.name + " has been deleted.")
  };
  this.saveTherapists = function(therapists){
    var queue = [];
   therapists.forEach(function(therapist){
     var request;
     if(!therapist._id){
       request = $http.post('/api/therapists', therapist)
     } else{
       request = $http.put('/api/therapists' + therapist._id, therapist).then(function(result){
         therapist = result.data.therapist;
         return therapist;
       })
     };
     queue.push(request);
   });
    return $q.all(queue).then(function(results){
     console.log('I saved '+ therapists.length + 'therapists.');
   });
 };

});
