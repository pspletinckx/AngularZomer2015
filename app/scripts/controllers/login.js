'use strict'

angular.module('angularZomer2015App')
.controller('LoginCtrl', ['$location', 'AuthenticationService', 'FlashService', '$scope',
    function($location, AuthenticationService, FlashService, $scope){

        var vm = this;
 
        vm.login = login;

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response, user) {              
                if (response.error_description=== undefined) {
                    var token = response.token_type + ' ' + response.access_token;
                    AuthenticationService.SetCredentials(token);
                    window.history.back();
                    $scope.$emit('user:loggedIn', user);
                } else {                  
                    FlashService.Error(response.error_description);
                    vm.error = response.error_description;
                    vm.dataLoading = false;
                }
            });
        };
    }]);