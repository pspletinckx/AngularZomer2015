'use strict'

angular.module('angularZomer2015App')
.factory('AuthenticationService', ['$http', '$cookieStore', '$rootScope', '$timeout', 'UserService', 
    function($http, $cookieStore, $rootScope, $timeout, UserService){

        var service = {}, 
        _user = {
            email: '',
            token: '',
            isAuth: false, 
            type: ''
        };
 
        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.ClearCredentials = ClearCredentials;
 
        return service;
 
        function Login(username, password, callback) {
            //var data = 'grant_type=password&username=' + username + '&password=' + password,
              var headers={};

            headers['Content-Type'] = 'application/x-www-form-urlencoded';

            $http({
                method: 'POST',
                url: 'http://aug2015.devilcrafter.com/token',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: { username: username, password: password, grant_type: 'password' }, 
                transformRequest: function (obj) {
                var str = [];
    for (var p in obj)
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
            }}).success(function(response) {
                callback(response);
            });
        }
 
        function SetCredentials(loginModel, token) {           
 
            localStorageService.set('authData', {
                    token: token
            });

            _user.token = token;
        }
 
        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        }   
}]);
