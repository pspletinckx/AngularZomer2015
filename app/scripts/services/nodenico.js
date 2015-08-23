'use strict';

/**
 * @ngdoc service
 * @name angularZomer2015App.nodePieter
 * @description
 * # nodePieter
 * Factory in the angularZomer2015App.
 */
angular.module('angularZomer2015App')
  .factory('netNico',['$http', 'localStorageService', '$window', function ($http, localStorageService, $window) {

    var vakantie = {};
    var host = "http://localhost:51698/"
    vakantie.getAll = function(){
      return $http.get(host + '/api/vacation');
    }

    vakantie.get = function(ref){
      return $http.get(host + '/api/vacation/'+ref);
    }

    vakantie.post = function(vakantie){     

      var req = {
       method: 'POST',
       url: host + 'api/vacation/',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': localStorageService.get('authData').token
       },
       data: vakantie
      }      
      
      $http.post(host + 'api/vacation/', vakantie, req).then(
        function(response){
          $window.location.href = '/#/vakantie/'+response.data;
          console.log(response.data);
        },
        function(response){}
        );

      
    }

    // Public API here
    return vakantie;
    
  }]);
