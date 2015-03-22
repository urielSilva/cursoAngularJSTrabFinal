'use strict';

/**
 * @ngdoc overview
 * @name cursoAngularJstrabFinalApp
 * @description
 * # cursoAngularJstrabFinalApp
 *
 * Main module of the application.
 */
angular
  .module('cursoAngularJstrabFinalApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
