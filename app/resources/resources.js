'use strict';

angular.module('projectBoard.resources', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resources', {
    templateUrl: 'resources/resources.html',
    controller: 'ResourcesCtrl'
  });
}])

.controller('ResourcesCtrl', [
	         '$scope',
	function ($scope) {
		$scope.resources = $scope.data.resources;
	}
]);
