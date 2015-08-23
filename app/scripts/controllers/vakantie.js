'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:VakantieCtrl
 * @description
 * # VakantieCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('VakantieCtrl',['$scope', '$routeParams', 'netNico', '$rootScope', function ($scope,$routeParams,netNico,$rootscope) {

  	var self = this;
  	self.vakantieId = $routeParams.id;
  	$scope.vakantie ={}; //hoeft niet echt voor objecten

  	netNico
    .get(self.vakantieId)
    .success(function(data){
    	$scope.vakantie = data;
     // $rootscope.minLeeftijd = $scope.vakantie.leeftijd.min_leeftijd;
      //$rootscope.maxLeeftijd = $scope.vakantie.leeftijd.max_leeftijd;
    });

    var _onUserLoggedIn = function(event, user) {
                $scope.user = user;
    };

     $scope.$on('user:loggedIn', _onUserLoggedIn);

}]);
