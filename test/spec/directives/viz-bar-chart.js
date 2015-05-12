'use strict';

describe('Directive: vizBarChart', function () {

  // load the directive's module
  beforeEach(module('angularVisualDirectives'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<viz-bar-chart></viz-bar-chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the vizBarChart directive');
  }));
});
