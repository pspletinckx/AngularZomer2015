'use strict';

/**
 * @ngdoc service
 * @name angularZomer2015App.nodePieter
 * @description
 * # nodePieter
 * Factory in the angularZomer2015App.
 */
angular.module('angularZomer2015App')
  .factory('SubscribeService', function ($http, localStorageService) {

  	function subscribe(subscription){
        var host = 'http://localhost:60482';
        var header={};
        var authData = localStorageService.get('authData');
        var token = authData.token;
        header.Authorization = token;

        return $http({
            method: 'post',
            url: host + '/api/subscribe',
            data: subscription,
            headers: header
        });       
  	}

  	var service = this;
  	service.subscribe = subscribe;

  	return service;
  });