'use strict'

angular.module('angularZomer2015App')
.controller('LoginCtrl', ['$location', 'AuthenticationService', 'FlashService', 
    function($location, AuthenticationService, FlashService){

        var vm = this;
 
        vm.login = login;

        // reset login status
         AuthenticationService.ClearCredentials();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.error = response.message;
                    vm.dataLoading = false;
                }
            });
        };
    }]);