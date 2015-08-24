'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:LijstCtrl
 * @description
 * # LijstCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('LijstCtrl', function ($scope,nodePieter,netNico) {
$scope.filterForm={
  age:true,
  vakantie:"zomervakantie"
};

    $scope.vakanties = [];
    netNico
    .getAll()
    .success(function(data){
    	$scope.vakanties = data;
    });

    $scope.filterFunction = function(element) {
    return element.leeftijd.min_leeftijd<$scope.filterForm.age &&
     $scope.filterForm.age < element.leeftijd.max_leeftijd;
  };

  });
