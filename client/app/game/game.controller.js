'use strict';

angular.module('interactiveWorldApp')
  .controller('GameCtrl', function($scope, game) {
    /* Initialization */
    game.isLoading().then(
      function() {
        //TODO: this needs to be event driven.
        $scope.currentLocation = game.getCurrentLocation();
      }
    );
    // TODO: This needs to be dynamic
    // game.get('5574e677914a88582c5b4719').then(
    //   function(world) {
    //     $scope.world = world;
    //   },
    //   function(err) {
    //     console.log(err);
    //   }
    // );
  });
