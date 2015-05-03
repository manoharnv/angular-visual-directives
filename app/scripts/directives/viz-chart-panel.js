'use strict';

/**
 * @ngdoc directive
 * @name angularVisualDirectives.directive:vizChartPanel
 * @description
 * # vizChartPanel
 */
angular.module('angularVisualDirectives')
  .directive('vizChartPanel', function () {
    return {
      templateUrl: 'views/viz-chart-panel.html',
      restrict: 'E',
      controller:"VizchartsCtrl",
      link: function postLink(scope, element, attrs) {
        //element.text('this is the vizChartPanel directive');
      }
    };
  });
