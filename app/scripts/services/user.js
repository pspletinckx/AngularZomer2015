'use strict'

angular.module('angularZomer2015App')
.factory('UserService', ['$http', 
    function($http){

        var service = {};
 
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
 
        return service;
 
        function GetAll() {
            return $http.get('/api/users').then(handleSuccess, handleError('Error getting all users'));
        }
 
        function GetById(id) {
            return $http.get('/api/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }
 
        function GetByUsername(username) {
            return $http.get('http://localhost:51698/api/account/?username=' + username).then(handleSuccess, handleError('Error getting user by username'));
        }
 
        function Create(user, callback) {
            $http.post('http://localhost:51698/api/account/register', user)
            .success(function(response){
                callback(response);
            }).error(function(response){
                callback(response);
            });

            
        }
        function Update(user) {
            return $http.put('/api/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }
 
        function Delete(id) {
            return $http.delete('/api/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }
 
        // private functions
 
        function handleSuccess(data) {
            console.log(data);
            return data;
        }
 
        function handleError(error) {
            return function () {
                console.log(error)
                return { success: false, message: error };
            };
        }
    }]);