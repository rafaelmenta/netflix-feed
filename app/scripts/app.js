'use strict';

/**
 * @ngdoc overview
 * @name netflixFeedApp
 * @description
 * # netflixFeedApp
 *
 * Main module of the application.
 */
angular
  .module('netflixFeedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
