'use strict';

describe('Controller: VizchartsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularVisualDirectivesApp'));

  var VizchartsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VizchartsCtrl = $controller('VizchartsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
