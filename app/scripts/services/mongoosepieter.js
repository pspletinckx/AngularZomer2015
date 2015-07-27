'use strict';

/**
 * @ngdoc service
 * @name angularZomer2015App.nodePieter
 * @description
 * # nodePieter
 * Factory in the angularZomer2015App.
 */
angular.module('angularZomer2015App')
  .factory('nodePieter', function ($http) {
    // Service logic
    // ...

    var vakantie = {};

    vakantie.getAll = function(){
      return $http.get('http://github-pspletinckx.rhcloud.com/joetz/v1/informatie');
    }

    vakantie.get = function(ref){
      return $http.get('http://github-pspletinckx.rhcloud.com/joetz/v1/informatie/'+ref);
    }
    vakantie.deleteBlogpost = function(ref){

    }

    // Public API here
    return vakantie;
    
  });
