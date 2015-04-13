'use strict';

/**
 * @ngdoc overview
 * @name qr5WebappApp
 * @description
 * # qr5WebappApp
 *
 * Main module of the application.
 */
angular
  .module('qr5WebappApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'datatables'
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
