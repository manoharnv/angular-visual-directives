'use strict';

/**
 * @ngdoc function
 * @name angularVisualDirectivesApp.controller:VizchartsCtrl
 * @description
 * # VizchartsCtrl
 * Controller of the angularVisualDirectivesApp
 */
angular.module('angularVisualDirectives')
  .controller('VizchartsCtrl', function ($scope,$modal,uuid2,$compile) {
    $scope.modalId=uuid2.newuuid();
    $scope.openModal = function (size) {

      var modalInstance = $modal.open({
        animation: true,
        template: $scope.modalTemplate,
        size: size,
        scope:$scope,
        controller:'VizchartsCtrl'
      });
      $scope.cancel = function () {
        modalInstance.dismiss('cancel');
      };
      modalInstance.result.then(function (selectedItem) {
      }, function () {
        //$log.info('Modal dismissed at: ' + new Date());
      });
    };

  });

angular.module('angularVisualDirectives').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

});
