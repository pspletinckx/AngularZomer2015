'use strict';

/**
 * @ngdoc function
 * @name angularZomer2015App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularZomer2015App
 */
angular.module('angularZomer2015App')
.controller('AboutCtrl', ['$scope', function ($scope) {
   $scope.files = [];

   $scope.onLoaded = function () {
     console.log('Google Picker loaded!');
   }

   $scope.onPicked = function (docs) {

     angular.forEach(docs, function (file, index) {
       $scope.files.push(file);
     });
   }

   $scope.onCancel = function () {
     console.log('Google picker close/cancel!');
   }
}]);

