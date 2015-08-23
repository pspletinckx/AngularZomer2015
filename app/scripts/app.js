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
    'ngTouch',
    'ngMaterial',
    'lk-google-picker',
    'ngMaterial', 
    'LocalStorageModule',
    'ui.bootstrap'
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
      .when('/admin',{
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .when('/register', {
                controller: 'RegisterCtrl',
                templateUrl: 'views/register.html',
                controllerAs: 'vm'
      })
      .when('/vakantie/:id/subscribe',{
        templateUrl: 'views/subscribe.html',
        controller: 'SubscribeCtrl',
        controllerAs: 'self',
        access: {
          requiresLogin: true
        }
      })
      .when('/404',{
        templateUrl: '404.html'
      })
      .otherwise({
        redirectTo: '/404' //kies je zelf, gebruik homepage of 404
      });
  })
.config(['lkGoogleSettingsProvider', function (lkGoogleSettingsProvider) {

  lkGoogleSettingsProvider.configure({
    apiKey   : 'AIzaSyD2ykQJlbGOLgdzMYGkRgpAgCtzA-r72yQ',
    clientId : '1044635851629-np9mt0k3jp02muigtljj65v2t9smpgbn.apps.googleusercontent.com',
    scopes   : ['https://www.googleapis.com/auth/drive'],
    locale   : 'nl',
    features : ['MULTISELECT_ENABLED', 'ANOTHER_ONE'],
    views    : ['DocsUploadView()']
  });
}])
  //ref: https://docs.angularjs.org/api/ngRoute/provider/$routeProvider#when