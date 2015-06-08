'use strict';

describe('Service: game', function () {

  // load the service's module
  beforeEach(module('interactiveWorldApp'));

  // instantiate service
  var game;
  beforeEach(inject(function (_game_) {
    game = _game_;
  }));

  it('should do something', function () {
    expect(!!game).toBe(true);
  });

});
