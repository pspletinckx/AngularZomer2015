'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
.controller('AboutCtrl',['$scope','netFoto','netNico',function ($scope,netFoto,netNico) {
   $scope.files = [];
   $scope.afbeeldingen=[];

   $scope.onLoaded = function () {
     console.log('Google Picker loaded!');
   };

   $scope.onPicked = function (docs) {
     angular.forEach(docs, function (file, index) {
       $scope.files.push(file);
     });
   };

   $scope.onCancel = function () {
     console.log('Google picker close/cancel!');
   };

   $scope.update = function(){
    netNico
    .get(1)
    .success(function(data){
        var fotos = data.foto;
        angular.forEach(fotos,function(foto,index){
          $scope.afbeeldingen.push(foto);
        });
    });
   };
    $scope.update();

    $scope.fotoToevoegen=function(foto){
        netFoto.post(foto).then(
        function(response){
          $scope.update();
        },
        function(response){}
        );
    };
}]);

//controller requires vacation that goes with the account or enlistment

