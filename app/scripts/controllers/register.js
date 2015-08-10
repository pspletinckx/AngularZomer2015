'use strict'

angular.module('angularZomer2015App')
.controller('RegisterCtrl', ['UserService', '$location', '$rootScope', 'FlashService', 
    function(UserService, $location, $rootScope, FlashService){
        var vm = this;
 
        vm.register = register;
 
        function register() {
                    console.log(vm.user);
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }


    }]);