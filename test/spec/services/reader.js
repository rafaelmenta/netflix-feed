'use strict';

describe('Service: Reader', function () {

  // load the service's module
  beforeEach(module('netflixFeedApp'));

  // instantiate service
  var Reader;
  beforeEach(inject(function (_Reader_) {
    Reader = _Reader_;
  }));

  it('should do something', function () {
    expect(!!Reader).toBe(true);
  });

});
