'use strict';

describe('projectBoard.resources module', function() {
  var scope, ctrl, $httpBackend;

  beforeEach(module('projectBoard.resources'));

  describe('ResourcesCtrl', function(){
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service in order to avoid a name conflict.
    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('resources/resources.json').respond([{name: 'resource 1'}, {name: 'resource 2'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ResourcesCtrl', {$scope:scope});
    }));
    it('should create "resources" model with two resources fetched from xhr', function() {
      expect(scope.resources).toBeUndefined();
      $httpBackend.flush();

      expect(scope.resources).toEqual([{name: 'resource 1'}, {name: 'resource 2'}]);
    });
  });
});
