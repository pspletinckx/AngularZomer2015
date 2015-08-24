'use strict';

describe('Controller: LijstCtrl', function () {

  // load the controller's module
  beforeEach(module('angularZomer2015App'));

  var LijstCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LijstCtrl = $controller('LijstCtrl', {
      $scope: scope
    });
  }));

});
