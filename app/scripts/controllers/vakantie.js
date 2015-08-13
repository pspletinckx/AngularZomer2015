'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:VakantieCtrl
 * @description
 * # VakantieCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('VakantieCtrl', function ($scope,$routeParams,netNico) {

  	var self = this;
  	self.vakantieId = $routeParams.id;
  	$scope.vakantie ={}; //hoeft niet echt voor objecten

  	netNico
    .get(self.vakantieId)
    .success(function(data){
    	$scope.vakantie = data;
    });

    var _onUserLoggedIn = function(event, user) {
                $scope.user = user;
            };

     $scope.$on('user:loggedIn', _onUserLoggedIn);



});
