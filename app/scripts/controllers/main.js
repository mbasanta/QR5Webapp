'use strict';

/**
 * @ngdoc function
 * @name qr5WebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qr5WebappApp
 */
angular.module('qr5WebappApp')
  .controller('MainCtrl', function ($scope, appConfig) {
    $scope.awesomeThings = [
      appConfig.apiurl,
      appConfig.port
    ];
  });
