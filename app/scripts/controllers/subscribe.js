'use strict'

angular.module('angularZomer2015App')
.controller('SubscribeCtrl', ['AuthenticationService', 'UserService', '$scope',
    function(AuthenticationService, UserService, $scope){

    	var self = this;
    	self.isLid='';
    	self.isBetaler='';
    	self.inschr ={};

    	$scope.user={};
    	$scope.maxDate = new Date();

    	AuthenticationService.GetMe()
    	.success(function(response){
    		UserService.GetByUsername(response.userName)
    		.success(function(response){
    			$scope.user = response;
    		})
    	}).error(function(response){

    	});

    	  $scope.today = function() {
    		$scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

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
}
self.subscribe = subscribe;
function subscribe(){
	console.log(self.inschr);
	console.log('Blaaaaa')
}
return self;
    }]);