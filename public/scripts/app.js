

angular.module('equipmentApp', [])
.controller('mainCtrl',function($scope){
  $scope.contactInfo = function(){
    console.log("Hover for therapist name and contact info!");
  }
  $scope.addTherapist = function(){
    var therapist = {name: "new staff"};
    $scope.therapists.push(therapist);
  }
  $scope.therapists = [
    {name: "Kat",
     equipment: "walker"},
    {name: "Leann",
     equipment: "wheelchair"},
    {name: "Stef",
     equipment: "ramp"}
    ]

  $scope.equipmentChange = function(newEquipment){
    console.log("updated the new equipment!");

  }

  //$scope.equipmentAdd = function(){
  //  $scope.equipments.push(equipment);
//  }




});
