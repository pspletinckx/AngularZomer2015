'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('HomeCtrl', function ($scope,netNico) {
    $scope.afbeeldingen = [];

        $scope.vakanties = [];
    netNico
    .getAll()
    .success(function(data){
    	$scope.vakanties = data;
	});

    netNico
    .get(1)
    .success(function(data){
        var fotos = data.foto;
        angular.forEach(fotos,function(foto,index){
          $scope.afbeeldingen.push(foto);
        });
    
 	});
 });

