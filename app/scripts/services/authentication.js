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
            type: ''
        };

        service.Init = Init;
        service.Login = Login;
        service.SetCredentials = SetCredentials;
        service.logout = _logout; 
        service.getprofile = _getProfile;
 
        return service;

        function Init() {
            var authData = localStorageService.get('authData'),
                defer = $q.defer();

            if(authData) {
                _user.token = authData.token;
               
                    _user.isAuth = true;
                    defer.resolve(_user);
            } else {
                defer.reject();
            }

            return defer.promise;
        };

        function _getProfile() {
            var defer = $q.defer(),
                headers = {};

            headers.Authorization = _user.token;

            $http({
                method: 'GET',
                url: baseUrl + '/user/me',
                headers: headers
            }).success(function(response) {
                var userResponse = response.data;
                //_user.firstName = userResponse.first_name;
                //_user.lastName = userResponse.last_name;
                //_user.email = userResponse.email;
                //_user.type = userResponse.type;

                for(var attribute in userResponse) {
                    _user[attribute] = userResponse[attribute];
                }

                defer.resolve();
            }).error(function() {
                defer.reject();
            });

            return defer.promise;
        };
 
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
                callback(response, _user);
            }).error(function(response){
                callback(response, _user);
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
            _user.isAuth = true;

            return _user;
        }
}]);
