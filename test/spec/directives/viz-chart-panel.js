'use strict';

describe('Directive: vizChartPanel', function () {

  // load the directive's module
  beforeEach(module('angularVisualDirectives'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<viz-chart-panel></viz-chart-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the vizChartPanel directive');
  }));
});
