webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	//added after webpack installed. angular then installed -g with npm


	angular.module('equipmentApp', []);


	//require app files needed after webpack
	__webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	function mainCtrl ($scope, dataService) {

	  dataService.getTherapists(function(response){
	    var therapists = response.data.therapists;
	    $scope.therapists =  therapists;
	  })

	  $scope.addTherapist = function() {
	    $scope.therapists.unshift({name: "New staff"});
	  };

	}

	module.exports = mainCtrl;


	/*angular.module('equipmentApp')
	.controller('mainCtrl',function($scope, dataService){

	  dataService.getTherapists(function(response){
	    var therapists = response.data.therapist;
	    $scope.therapists = therapists;
	  })



	   $scope.deleteTherapist = function(therapist, $index){
	     dataService.deleteTherapist(therapist);
	     $scope.therapists.splice($index,1);
	   }
	   $scope.saveTherapist = function(therapist){
	     dataService.saveTherapist(therapist);
	   }

	  $scope.contactInfo = function(){
	    console.log("Hover for therapist name and contact info!");
	  }

	  $scope.addTherapist = function(){
	    $scope.therapists.push({name: "new staff"});

	  }

	  /* $scope.therapists = [
	    {name: "Kat",
	     equipment: "walker"},
	    {name: "Leann",
	     equipment: "wheelchair"},
	    {name: "Stef",
	     equipment: "ramp"},
	    {name: "Carla",
	     equipment: "Tab"}
	    ]


	  $scope.equipmentChange = function(newEquipment){
	    console.log("updated the new equipment!");

	  }
	  */

	  //$scope.equipmentAdd = function(){
	  //  $scope.equipments.push(equipment);
	//  }


	//});


/***/ }
]);