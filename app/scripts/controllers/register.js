'use strict'

angular.module('angularZomer2015App')
.controller('RegisterCtrl', ['UserService', '$location', '$rootScope', 'FlashService', 
    function(UserService, $location, $rootScope, FlashService){
        var vm = this;
 
        vm.register = register;
 
        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user, function(response){
                if (response.message === undefined) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        vm.error = "Gebruiker bestaat al";
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
            })
        }
    }]);