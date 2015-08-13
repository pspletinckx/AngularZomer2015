'use strict'

angular.module('angularZomer2015App')
.factory('AuthenticationService', ['$http', '$cookieStore', '$q','$rootScope', '$timeout', 'UserService','localStorageService', 
    function($http, $cookieStore, $q, $rootScope,  $timeout, UserService, localStorageService){

        var baseUrl = 'http://localhost:17649'
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

                GetMe().then(function(){

                }, function(){

                });
               
                    _user.isAuth = true;
                    defer.resolve(_user);
            } else {
                defer.reject();
            }

            return defer.promise;
        };     
 
        function Login(username, password, callback) {
              var headers={};

            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            $http({
                method: 'POST',
                url: 'http://localhost:51698/token',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: { username: username, password: password, grant_type: 'password' }, 
                transformRequest: function (obj) {
                                    var str = [];
                                    for (var p in obj)
                                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                                    return str.join("&");
            }}).success(function(response) {
                callback(response, _user);
            }).error(function(response){
                callback(response);
            });
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
            var header = {};
            header.Authorization = _user.token;
            header['Content-Type'] = 'application/x-www-form-urlencoded';

            return $http({
                method: 'GET',
                url: 'http://localhost:51698/api/account', 
                headers: header
            });
        }
}]);
