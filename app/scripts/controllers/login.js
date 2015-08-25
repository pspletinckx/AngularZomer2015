'use strict'

angular.module('angularZomer2015App')
.controller('LoginCtrl', ['$location', 'AuthenticationService', 'FlashService', '$scope', 
    function($location, AuthenticationService, FlashService, $scope){

        var vm = this;
 
        vm.login = login;

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password)
                .then(function (response) {              
                    //window.history.back();
                    $scope.$emit('user:loggedIn', response);
                    $location.path('/')
                },function(response){
                    console.log(response)
                    FlashService.Error(response.error_description);
                    vm.error = response.error_description;
                    vm.dataLoading = false;
                });
        };
    }]);