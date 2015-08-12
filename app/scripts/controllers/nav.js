'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('NavCtrl', function ($scope,$location) {
  	$scope.isUrl=function(href){
  		return $location.path()===href;
  	}
  	
  });
