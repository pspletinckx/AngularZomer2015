'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:LijstCtrl
 * @description
 * # LijstCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('LijstCtrl', function ($scope,nodePieter) {

    $scope.vakanties = [];

    nodePieter
    .getAll()
    .success(function(data){
    	$scope.vakanties = data;
    });


  });
