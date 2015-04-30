'use strict';

/**
 * @ngdoc function
 * @name qr5WebappApp:appConfig
 * @description
 * # appConfig
 * Configuration settings for the qr5WebappApp
 */
angular.module('qr5WebappApp')
  .constant('appConfig', {
    'apiurl': 'http://localhost',
    'port': ':5000',
    'apiendpoint': '/datatable/'
  });
