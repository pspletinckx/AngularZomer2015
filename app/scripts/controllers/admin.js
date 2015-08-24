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
    $scope.submitted= false;
    $scope.commentSubmitted=false;
    $scope.commentValid = false;
    $scope.commentValidated=false;
    $scope.commentTitleMissing=false;
    $scope.commentDescriptionMissing=false;
    $scope.showIncludedItemRequired=false;

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
      foto: [],
   		opmerking: [],
   		promotext: "",
      inbegrepen: [],
   		fiscaal_voordeel: false
   	}

    $scope.commentValidation = function(){
      $scope.commentValidated = true;

      if(!$scope.commentHelper){
        $scope.commentDescriptionMissing = true;
      }else{
        $scope.commentDescriptionMissing = false;
      }

      if(!$scope.commentTitle){
        $scope.commentTitleMissing = true;
      }else{
        $scope.commentTitleMissing = false;
      }

      if($scope.commentTitleMissing || $scope.commentDescriptionMissing){
        $scope.commentValid = false;
      }
      else{
        $scope.commentValid = true;
      }
    }

   	$scope.addComment = function(){
      $scope.commentValidation();
      if($scope.commentValid){
     		$scope.vakantie.opmerking.push({text: $scope.commentHelper, titel: $scope.commentTitle, url: $scope.commentUrl});
        $scope.commentHelper = "";
        $scope.commentTitle = "";
        $scope.commentUrl = "";
      }
   	}

    $scope.removeComment = function(index){
      $scope.vakantie.opmerking.splice(index,1)
    }

    $scope.addIncludedItem = function(){
      if(!$scope.includedItem){
        $scope.showIncludedItemRequired = true;
      }else{
        $scope.showIncludedItemRequired = false;
        $scope.vakantie.inbegrepen.push({basis: $scope.includedItem});
        $scope.includedItem = "";
      }      
    }

    $scope.removeIncludedItem = function(index){
      $scope.vakantie.inbegrepen.splice(index,1);
    }

    $scope.submit = function(){
            $scope.includedItem = "";
      $scope.showIncludedItemRequired = false;

      $scope.commentHelper = "";
      $scope.commentTitle = "";
      $scope.commentUrl = "";
      $scope.commentTitleMissing = false;
      $scope.commentDescriptionMissing = false;
      netNico.post($scope.vakantie);

    }
  });
