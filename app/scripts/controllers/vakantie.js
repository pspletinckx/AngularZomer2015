'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:VakantieCtrl
 * @description
 * # VakantieCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('VakantieCtrl', function ($scope,$routeParams,restcalls) {

  	var self = this;
  	self.vakantieId = $routeParams.id;
  	$scope.vakantie ={}; //hoeft niet echt voor objecten

  	restcalls
    .get(self.vakantieId)
    .success(function(data){
    	$scope.vakantie = data;
    });
});
