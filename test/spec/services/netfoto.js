'use strict';

describe('Service: netFoto', function () {

  // load the service's module
  beforeEach(module('angularZomer2015App'));

  // instantiate service
  var netFoto;
  beforeEach(inject(function (_netFoto_) {
    netFoto = _netFoto_;
  }));

  it('should do something', function () {
    expect(!!netFoto).toBe(true);
  });

});
