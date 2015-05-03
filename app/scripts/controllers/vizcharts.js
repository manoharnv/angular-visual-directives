'use strict';

/**
 * @ngdoc function
 * @name angularVisualDirectivesApp.controller:VizchartsCtrl
 * @description
 * # VizchartsCtrl
 * Controller of the angularVisualDirectivesApp
 */
angular.module('angularVisualDirectives')
  .controller('VizchartsCtrl', function ($scope,$modal) {
    $scope.openModal = function (size) {

      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'modalDialog.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };

  });

angular.module('angularVisualDirectives').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});
