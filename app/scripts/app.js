'use strict';

/**
 * @ngdoc overview
 * @name angularZomer2015App
 * @description
 * # angularZomer2015App
 *
 * Main module of the application.
 */
angular
  .module('angularZomer2015App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/lijst',{
        templateUrl: 'views/lijst.html',
        controller: 'LijstCtrl'
      })
      .when('/vakantie/:id',{
        templateUrl: 'views/vakantie.html',
        controller: 'VakantieCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/test',{
        templateUrl: 'views/test.html',
        controller: 'TestCtrl'
      })
      .when('/404',{
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/404' //kies je zelf, gebruik homepage of 404
      });
  });
  //ref: https://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when