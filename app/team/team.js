'use strict';

angular.module('projectBoard.team', ['ngRoute'])

.config([
	        '$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/team', {
			templateUrl: 'team/team.html',
			controller: 'TeamCtrl'
		});
	}
])

.controller('TeamCtrl', [
	         '$scope',
	function ($scope) {
		$scope.team = $scope.data.team;
	}
]);
