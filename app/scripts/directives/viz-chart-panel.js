'use strict';

/**
 * @ngdoc directive
 * @name angularVisualDirectives.directive:vizChartPanel
 * @description
 * # vizChartPanel
 */
angular.module('angularVisualDirectives')
  .directive('vizChartPanel', function ($compile,$templateCache) {
    return {
      templateUrl: 'views/viz-chart-panel.html',
      restrict: 'E',
      scope:{
        "chartTitle":"@",
        "chartData":"@"
      },
      transclude:true,
      controller:"VizchartsCtrl",
      link: function postLink(scope,$element,  $attrs, controller, $transclude) {
     var transclude =$($element).find("div.panel-body").clone();
        transclude.find("ng-transclude").replaceWith("<div>"+transclude.find("ng-transclude").html()+"</div");
        var template = $($templateCache.get("modalDialog.html"));
        template.find("div.modal-body").append(transclude.html());
        scope.modalTemplate =template.html();


      }
    };
  });
