'use strict'

angular.module('angularZomer2015App')
.factory('AuthenticationService', ['$http', '$cookieStore', '$q','$rootScope', '$timeout', 'UserService','localStorageService',
    function($http, $cookieStore, $q, $rootScope,  $timeout, UserService, localStorageService){

        var baseUrl = 'http://aug2015.devilcrafter.com'
        var service = {},
        _user = {
            email: '',
            token: '',
            isAuth: false,
            role: '',
        };

        service.Init = Init;
        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.logout = _logout;
        service.GetMe = GetMe;

        return service;

        function Init() {
            var authData = localStorageService.get('authData'),
                defer = $q.defer();

            if(authData) {
                _user.token = authData.token;
                GetMe().then(function(response){
                    _user.isAuth = true;
                    _user.role = response.role;
               defer.resolve(_user);
               }, function(){
                    _logout();
                    defer.reject();
                });

 
            } else {
                defer.reject();
            }

            return defer.promise;
        };

        function Login(username, password) {
              var headers={},
              defer = $q.defer();

            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            $http({
                method: 'POST',
                url: baseUrl + '/token',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: { username: username, password: password, grant_type: 'password' },
                transformRequest: function (obj) {
                                    var str = [];
                                    for (var p in obj)
                                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                    return str.join("&");
            }}).success(function(response) {
                var token = response.token_type + ' ' + response.access_token;
                localStorageService.set('authData', {
                    token: token
                });

                _user.token = token;

                GetMe().then(function(response){
                    _user.isAuth = true;
                    _user.role = response.role;
                    defer.resolve(_user);
                },function(err){
                    _logout();
                    defer.reject(err);
                });

            }).error(function(err){
                _logout();
                defer.reject(err);
            });

        return defer.promise;
    }

        function _logout() {
            localStorageService.remove('authData');

            _user.token = '';
            _user.isAuth = false;
        };



        function SetCredentials(token) {

            localStorageService.set('authData', {
                    token: token
            });

            _user.token = token;
            GetMe().then(function(){
                _user.isAuth = true;

            }, function(err){
                console.log('error');
            });
        }

        function GetMe(){
            var header = {}, 
            defer = $q.defer();

            header.Authorization = _user.token;
            header['Content-Type'] = 'application/x-www-form-urlencoded';

            $http({
                method: 'GET',
                url: baseUrl + '/api/account',
                headers: header
            }).success(function(response){
                defer.resolve(response);
            }).error(function(){
                defer.refject();
            });

            return defer.promise;
        }
}]);
