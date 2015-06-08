'use strict';

angular.module('interactiveWorldApp')
  .service('player', function($window) {
    /* Declarations */
    var svc = {};
    /* @type {Player} */
    var player = $window.localStorage.getItem('player');

    /* Functions */
    /**
     * Fetches the users' current player
     *
     * @returns {Player}
     */
    svc.get = function() {
      return player;
    };

    /**
     * Creates a new player, overriding the currently stored player.
     * TODO: finish the logic to create a new player, including prompting the user for information.
     *
     * @returns {Player}
     */
    svc.new = function() {
      player = {
        name: '',
        location: {
          x: 0,
          y: 0
        },
        world: '5574e677914a88582c5b4719'
      };

      $window.localStorage.setItem('player', JSON.stringify(player));
    };

    /* Initialization */
    if (_.isEmpty(player)) {
      svc.new();
    } else {
      player = JSON.parse(player);
    }

    return svc;
  });

/**
 * @typedef {Object} Player
 * @property {String} name
 * @property {Coord} location
 */
