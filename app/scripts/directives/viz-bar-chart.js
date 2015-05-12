'use strict';

/**
 * @ngdoc directive
 * @name angularVisualDirectives.directive:vizBarChart
 * @description
 * # vizBarChart
 */
angular.module('angularVisualDirectives')
  .directive('vizBarChart', function (uuid2) {
    return {
      template: '<div></div>',
      restrict: 'E',
      controller:'VizchartsCtrl',
      scope:{

      },
      link: function postLink(scope, $element, attrs) {
        var chartId = uuid2.newuuid();
        $element.append('<div class="dimple-graph" id="'+chartId+'"></div>');
        var margin = {top: 40, right: 20, bottom: 30, left: 40},
          width = $element.width() - margin.left - margin.right,
          height = $element.height() - margin.top - margin.bottom;
        var formatPercent = d3.format(".0%");

        var x = d3.scale.ordinal()
          .rangeRoundBands([0, width], .1);

        var y = d3.scale.linear()
          .range([height, 0]);

        var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom");

        var yAxis = d3.svg.axis()
          .scale(y)
          .orient("left")
          .tickFormat(formatPercent);

        var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([-10, 0])
          .html(function(d) {
            return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
          })

        var svg = d3.select($element[0]).append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.call(tip);

        var chartData=[
          {letter:'A',frequency:25},
          {letter:'B',frequency:10},
          {letter:'c',frequency:28},
          {letter:'d',frequency:44},
          {letter:'e',frequency:100},
          {letter:'f',frequency:2},
        ];
        chartData.map( function( d) {
          x.domain(d.letter);
          y.domain([0, d3.max(d, function(d) { return d.frequency; })]);

          svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

          svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Frequency");

          svg.selectAll(".bar")
            .data(d)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.letter); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.frequency); })
            .attr("height", function(d) { return height - y(d.frequency); })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)

        });

        function type(d) {
          d.frequency = +d.frequency;
          return d;
        }

      }
    };
  });
