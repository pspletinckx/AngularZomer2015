'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:LijstCtrl
 * @description
 * # LijstCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('LijstCtrl', function ($scope,restcalls) {

    $scope.vakanties = [];

    restcalls
    .getAll()
    .success(function(data){
    	$scope.vakanties = data;
    });


  });
