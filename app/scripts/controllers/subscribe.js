'use strict'

angular.module('angularZomer2015App')
.controller('SubscribeCtrl', ['AuthenticationService', 'UserService', '$scope', '$routeParams',
    function(AuthenticationService, UserService, $scope, $routeParams){
    	var self = this;
    	self.isLid='';
    	self.isBetaler='';

    	$scope.user={};
    	$scope.maxDate = new Date();

    	$scope.subscrModel = {
		firstname: '',
		lastName: '',
		birthdate: '',
		RNR: '',
		password_confirmed: '',
		phone_number: ''
		};

    self.vakantieId = $routeParams.id;

    	AuthenticationService.GetMe()
    	.success(function(response){
    		UserService.GetByUsername(response.userName)
    		.success(function(response){
    			$scope.user = response;
    		})
    	}).error(function(response){

    	});

    	self.subscribe = subscribe;

		function subscribe(){
			console.log($scope.subscrModel)
		}

		$scope.submit = function(){
			console.log('bla')
		}

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

console.log(self);

}]);