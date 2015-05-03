'use strict';

/**
 * @ngdoc function
 * @name angularVisualDirectives.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularVisualDirectives
 */
angular.module('angularVisualDirectives')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
