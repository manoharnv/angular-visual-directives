'use strict';

/**
 * @ngdoc function
 * @name angularVisualDirectives.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularVisualDirectives
 */
angular.module('angularVisualDirectives')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
