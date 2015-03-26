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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
      })
      .when('/loginAdmin', {
        templateUrl: 'views/loginAdmin.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
      })
      .when('/loginCongressista', {
        templateUrl: 'views/loginCongressista.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
      })
      .when('/homeAdmin', {
        templateUrl: 'views/homeAdmin.html',
        controller: 'homeCtrl',
        controllerAs: 'ctrl'
      })
      .when('/registration', {
        templateUrl: 'views/registration.html',
        controller: 'RegistrationCtrl',
        controllerAs: 'ctrl'
      })
      .when('/rooms', {
        templateUrl: 'views/rooms.html',
        controller: 'RoomsListCtrl',
        controllerAs: 'ctrl'
      })
      .when('/rooms/add', {
        templateUrl: 'views/formRoom.html',
        controller: 'RoomsFormCtrl',
        controllerAs: 'ctrl'
      })
      .when('/hotelsAdm', {
        templateUrl: 'views/hotelsAdm.html',
        controller: 'HotelsListCtrl',
        controllerAs: 'ctrl'
      })
      .when('/hotels/add', {
        templateUrl: 'views/formHotel.html',
        controller: 'HotelsFormCtrl',
        controllerAs: 'ctrl'
      })
      .when('/hotels/:id', {
        templateUrl: 'views/formEditHotel.html',
        controller: 'HotelsFormCtrl',
        controllerAs: 'ctrl'
      })
      .when('/workshopsAdm', {
        templateUrl: '../views/workshopsAdm.html',
        controller: 'WorkshopsListAdmCtrl',
        controllerAs: 'ctrl'
      })
      .when('/workshops', {
        templateUrl: '../views/workshops.html',
        controller: 'WorkshopsListCtrl',
        controllerAs: 'ctrl'
      })
      .when('/workshops/add', {
        templateUrl: 'views/formWorkshop.html',
        controller: 'WorkshopsFormCtrl',
        controllerAs: 'ctrl'
      })
      .when('/workshops/edit/:id', {
        templateUrl: 'views/formWorkshop.html',
        controller: 'WorkshopsFormCtrl',
        controllerAs: 'ctrl'
      })
      .when('/perfil', {
        templateUrl: 'views/perfil.html',
        controller: 'perfilCtrl',
        controllerAs: 'ctrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
