'use strict';

describe('projectBoard.version module', function() {
  beforeEach(module('projectBoard.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
