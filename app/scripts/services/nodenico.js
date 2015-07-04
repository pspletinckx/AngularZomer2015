'use strict';

/**
 * @ngdoc service
 * @name angularZomer2015App.nodePieter
 * @description
 * # nodePieter
 * Factory in the angularZomer2015App.
 */
angular.module('angularZomer2015App')
  .factory('restcalls', function ($http) {
    // Service logic
    // ...

    var vakantie = {};

    vakantie.getAll = function(){
      return $http.get('http://localhost:51698/api/vacation');
    }

    vakantie.get = function(ref){
      return $http.get('http://localhost:51698/api/vacation/'+ref);
    }

    // Public API here
    return vakantie;
    
  });
