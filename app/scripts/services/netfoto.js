'use strict';

/**
 * @ngdoc service
 * @name angularZomer2015App.netFoto
 * @description
 * # netFoto
 * Service in the angularZomer2015App.
 */
angular.module('angularZomer2015App')
  .factory('netFoto',['$http','localStorageService', function ($http, localStorageService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var hostname = 'http://localhost:51698';
    var foto = {};

    foto.getAll = function(){
      return $http.get(hostname + '/api/picture');
    }

    foto.post = function(imageRef){
    	var titel = imageRef.name;
    	var besc = imageRef.description;
    	var loc = imageRef.downloadUrl;

      var photo = {
          "vacation":1,
          "titel":name,
          "beschrijving":besc,
          "locatie":loc

        };

      var req = {
       method: 'POST',
       url: host + '/api/picture/',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': localStorageService.get('authData').token
       },
       data: photo
      };

    	$http.post(hostname + '/api/picture/', photo, req);
    }

    //bestaat deze
    foto.get = function(ref){
      return $http.get(hostname + 'api/picture/'+ref);
    }

    //bestaat deze dan??
    foto.put = function(ref){

    }

    // Public API here
    return foto;
  }]);
