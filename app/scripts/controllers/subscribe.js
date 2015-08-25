'use strict'

angular.module('angularZomer2015App')
.controller('SubscribeCtrl', ['AuthenticationService', 'UserService', '$scope', '$routeParams', 'SubscribeService','$location',
    function(AuthenticationService, UserService, $scope, $routeParams,SubscribeService, $location){
    	var self = this;
      self.isBetaler=null;
      self.vakantieId = $routeParams.id;
      self.subscribe = subscribe;

      $scope.user={};
      $scope.maxDate = new Date();

      $scope.subscrModel = {
        SubscriptionForVacationId: self.vakantieId,
        Betaald: false,
      };

      function getUser(){
        AuthenticationService.GetMe().then(function(response){
          UserService.GetByUsername(response.userName)
            .success(function(response){
              $scope.user = response;
          });
        })
    }
    getUser();


    function subscribe(){
      if (self.isBetaler){
        $scope.subscrModel.Naam_Betalingspersoon = $scope.user.firstName + ' ' + $scope.user.lastName;
        $scope.subscrModel.Adres_Betalingspersoon = $scope.user.street + ' ' + $scope.user.houseNr + ' ' + $scope.user.postalCode + ' ' + $scope.user.city;
      }else
      {
        $scope.subscrModel.Adres_Betalingspersoon = $scope.AdresBetaler + ' ' +  $scope.stadBetaler;
      }
      $scope.subscrModel.SubscribedUserId = $scope.user.id;
      $scope.subscrModel.Email = $scope.Email;

      SubscribeService.subscribe($scope.subscrModel)
      .then(function(response){
        $location.path('/')
      }, function(response){
        $scope.error = response;
      });
    };

    	  $scope.today = function() {
    		$scope.dt = new Date();
  		};

  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  $scope.open = function($event) {
    $scope.status.opened = true;
}

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.format = 'dd-MMMM-yyyy';


  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }
return '';
};

}]);