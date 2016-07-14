'use strict';

angular.module('equipmentApp')
.service('dataService', function($http){
  this.getTherapists = function(callback){
    $http.get('/api/therapists').then(callback)
  };


  
  this.deleteTherapist = function(therapist){
  console.log(therapist.name + " has been deleted.")
  };
  this.saveTherapist = function(therapist){
    console.log(therapist.name + " saved.")
  };

});
