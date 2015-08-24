'use strict';

describe('Controller: VakantieCtrl', function () {

  // load the controller's module
  beforeEach(module('angularZomer2015App'));

  var VakantieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VakantieCtrl = $controller('VakantieCtrl', {
      $scope: scope
    });
  }));


});
