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
      scope: {
        detailsLink: '@'
      },
      controllerAs: 'vm',
      bindToController: true,
      controller: function ($scope, DTOptionsBuilder, DTColumnBuilder, appConfig) {
        var url = appConfig.apiurl + appConfig.port + appConfig.apiendpoint;
        this.dtOptions = DTOptionsBuilder.newOptions()
          .withOption('ajax', {
            'url': url,
            'type': 'GET',
            'data': {
              'detailsLink': $scope.vm.detailsLink
            }
          })
          .withDataProp('data')
          .withOption('processing', true)
          .withOption('serverSide', true)
          .withOption('detailsLink', $scope.vm.detailsLink)
          .withPaginationType('full_numbers');

        this.dtColumns = [
          DTColumnBuilder.newColumn('buttons').notSortable(),
          DTColumnBuilder.newColumn('dfirm_layer', 'DFRIM Layer'),
          DTColumnBuilder.newColumn('firm_panel', 'FIRM Panel'),
          DTColumnBuilder.newColumn('error_code', 'Error Code'),
          DTColumnBuilder.newColumn('error_desc', 'Error Desc')
        ];
      }
    };
  });

}(angular));
