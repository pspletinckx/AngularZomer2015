'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('angularZomer2015App'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));


});
