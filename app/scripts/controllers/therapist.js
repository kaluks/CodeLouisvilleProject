'use strict';

angular.module('equipmentApp')
.controller('therapistCtrl', function($scope, dataService){
  $scope.deleteTherapist = function(therapist,index){
    $scope.therapists.splice(index,1);
    dataService.deleteTherapist(therapist);
  };

  $scope.saveTherapists = function(){
    var filteredTherapists = @scope.therapists.filter(function(therapist){
      if (therapist.edited){
        return therapist;
      };
    })
    dataService.saveTherapists(filteredTherapists);
  };

});
