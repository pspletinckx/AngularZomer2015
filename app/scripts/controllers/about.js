'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
.controller('AboutCtrl', function ($scope,netFoto,netNico) {
   $scope.files = [];
   $scope.afbeeldingen=[];

   $scope.onLoaded = function () {
     console.log('Google Picker loaded!');
   }

   $scope.onPicked = function (docs) {

     angular.forEach(docs, function (file, index) {
       $scope.files.push(file);
       netFoto.post(file).then(
        function(response){
          $scope.update();
        },
        function(response){}
        );




     });
   }

   $scope.onCancel = function () {
     console.log('Google picker close/cancel!');
   }


   $scope.update = function(){
    netNico
    .get(1)
    .success(function(data){
        var fotos = data.foto;
        angular.forEach(fotos,function(foto,index){
          $scope.afbeeldingen.push(foto);
        });
    });
   }
    $scope.update();

});

document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};
