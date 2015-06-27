'use strict';

describe('Service: nodePieter', function () {

  // load the service's module
  beforeEach(module('angularZomer2015App'));

  // instantiate service
  var nodePieter;
  beforeEach(inject(function (_nodePieter_) {
    nodePieter = _nodePieter_;
  }));

  it('should do something', function () {
    expect(!!nodePieter).toBe(true);
  });

});
