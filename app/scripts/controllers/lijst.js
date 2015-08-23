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

    $scope.vakanties = [];

    netNico
    .getAll()
    .success(function(data){
    	$scope.vakanties = data;
    });
 });
