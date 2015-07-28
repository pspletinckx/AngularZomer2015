'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:VakantieCtrl
 * @description
 * # VakantieCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('VakantieCtrl', function ($scope,$routeParams,nodePieter) {

  	var self = this;
  	self.vakantieId = $routeParams.id;
  	$scope.vakantie ={}; //hoeft niet echt voor objecten

  	nodePieter
    .get(self.vakantieId)
    .success(function(data){
    	$scope.vakantie = data;
    });

});
