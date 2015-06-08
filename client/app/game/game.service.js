'use strict';

angular.module('interactiveWorldApp')
  .service('game', function($q, $resource, player) {
    /* Declarations */
    var svc = {};
    var world;
    var isLoading = $q.defer();

    /* Functions */
    /**
     * Fetches the current world.
     *
     * @returns {World}
     */
    svc.getWorld = function() {
      return world;
    };
    /**
     * Fetches the players' current location in the world, as a tile.
     *
     * @returns {Tile}
     */
    svc.getCurrentLocation = function() {
      var location = player.get().location;
      return _.clone(_.find(world.tiles, {x: location.x, y: location.y}), true);
    };
    /**
     * A promise that will resolve when the game data is done loading.
     *
     * @returns {Promise}
     */
    svc.isLoading = function() {
      return isLoading.promise;
    }

    /**
     * Fetches the current users' world and stores it for later.
     *
     */
    function fetchWorld() {
      $resource('/api/worlds/:id', {
        id: player.get().world
      }).get().$promise.then(
        function(data) {
          world = data;
        },
        function(err) {
          console.log(err);
        }
      ).finally(function() {
        isLoading.resolve();
      });
    }

    /* Initialization */
    fetchWorld();

    return svc;
  });

/**
 * @typedef {Object} World
 * TODO
 */
/**
 * @typedef {Object} Tile
 * @property {Number} level
 * @property {String} image
 * @property {String} type
 * @property {Number} x
 * @property {Number} y
 */
