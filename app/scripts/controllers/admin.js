'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('AdminCtrl', function ($scope, netNico) {
  	$scope.commentHelper = "";
    $scope.commentTitle = "";
    $scope.commentUrl = "";
    $scope.includedItem = "";
   	$scope.vakantie = {
   		titel: "",
   		leeftijd: {},
   		waar: {},
   		wanneer: {},
   		aantal_deelnemers: 0,
   		prijs: {},
   		informatie: {},
   		opmerking: [],
   		promotext: "",
   		foto: [], 
      inbegrepen: [],
   		fiscaal_voordeel: false
   	}

   	$scope.addComment = function(){
   		$scope.vakantie.opmerking.push({text: $scope.commentHelper, titel: $scope.commentTitle, url: $scope.commentUrl});
      $scope.commentHelper = "";
      $scope.commentTitle = "";
      $scope.commentUrl = "";
   	}

    $scope.removeComment = function(index){
      $scope.vakantie.opmerking.splice(index,1)
    }

    $scope.addIncludedItem = function(){
      $scope.vakantie.inbegrepen.push({basis: $scope.includedItem});
      $scope.includedItem = "";
    }

    $scope.removeIncludedItem = function(index){
      $scope.vakantie.inbegrepen.splice(index,1);
    }

    $scope.submit = function(){
      netNico.post($scope.vakantie);
    }
  });
