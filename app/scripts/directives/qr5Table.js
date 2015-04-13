(function(angular) {
'use strict';

/**
 * @ngdoc function
 * @name qr5WebappApp.directive:Qr5Table
 * @description
 * # Qr5Table
 * Custom directive to show the QR5 Datatable
 */
angular.module('qr5WebappApp')
  .directive('qr5Table', function() {
    return {
      templateUrl: 'views/templates/qr5Table.html',
      restrict: 'E',
      scope: {},
      controllerAs: 'vm',
      bindToController: true,
      controller: function ($scope, DTOptionsBuilder, DTColumnBuilder, appConfig) {

        this.dtOptions = DTOptionsBuilder.newOptions()
          .withOption('ajax', {
            'url': appConfig.apiurl + ':' + appConfig.port,
            'type': 'POST'
          })
          .withDataProp('data')
          .withOption('processing', true)
          .withOption('serverSide', true)
          .withPaginationType('full_numbers');

        this.dtColumns = [
          DTColumnBuilder.newColumn('dfirm_layer').withTitle('DFRIM Layer'),
          DTColumnBuilder.newColumn('firm_panel').withTitle('FIRM Panel'),
          DTColumnBuilder.newColumn('error_code').withTitle('Error Code'),
          DTColumnBuilder.newColumn('error_desc').withTitle('Error Desc')
        ];
      }
    };
  });

}(angular));
