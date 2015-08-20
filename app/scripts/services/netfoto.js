'use strict';

/**
 * @ngdoc service
 * @name angularZomer2015App.netFoto
 * @description
 * # netFoto
 * Service in the angularZomer2015App.
 */
angular.module('angularZomer2015App')
  .factory('netFoto', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var foto = {};

    foto.getAll = function(){
      return $http.get('http://aug2015.devilcrafter.com/api/picture');
    }

    foto.post = function(imageRef){
    	var titel = imageRef.name;
    	var besc = imageRef.description;
    	var loc = imageRef.downloadUrl; 
    	$http.post('http://aug2015.devilcrafter.com/api/picture/',
    		{
				"vacation":1,
  				"titel":name,
  				"beschrijving":besc,
  				"locatie":loc
  			});
    }
    //bestaat deze
    foto.get = function(ref){
      return $http.get('http://aug2015.devilcrafter.com/api/picture/'+ref);
    }

    //bestaat deze dan??
    foto.put = function(ref){

    }

    // Public API here
    return foto;
  });
