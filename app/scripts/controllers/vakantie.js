'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:VakantieCtrl
 * @description
 * # VakantieCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
  .controller('VakantieCtrl',['$scope', '$routeParams', 'netNico', '$rootScope',
    function ($scope,$routeParams,netNico,$rootscope,$dialog) {
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

     $scope.deleteVac = function(){
       //var msgbox = $dialog.messageBox('Vakantie verwijderen', 'Weet u zeker dat u deze vakantie wilt verwijderen?', [{label:'Ja', result: 'yes'},{label:'Nee', result: 'no'}]);
          //msgbox.open().then(function(result){
             // if(result === 'yes') {
                //code to delete here
                if (window.confirm("Weet u zeker dat u deze vakantie wilt verwijderen?")) { 
                  netNico.delete($scope.vakantie.id);
                }
              //}
        //});
      }

      $scope.opmerkingAanwezig = function(){
        if($scope.vakantie != null){
          return ($scope.vakantie.opmerking.length > 0);
        }
      }

      $scope.inbegrepenAanwezig = function(){
        if($scope.vakantie != null){
          return ($scope.vakantie.inbegrepen.length > 0);
        }
      }
}]);
