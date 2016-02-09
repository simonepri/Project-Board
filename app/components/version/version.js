'use strict';

angular.module('projectBoard.version', [])

.value('version', '1.0.0')

.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);