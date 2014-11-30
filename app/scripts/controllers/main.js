'use strict';

/**
 * @ngdoc function
 * @name netflixFeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the netflixFeedApp
 */
angular.module('netflixFeedApp')
  .controller('MainCtrl', function ($scope, Reader, $sce) {
    $scope.chooseTitle = function(entry) {
      $scope.entry = entry;
    };

    Reader.getTitles(function(feed) {
      console.log(feed);
      $scope.feed = feed;
    });

  });
