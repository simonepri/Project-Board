'use strict';

angular.module('projectBoard.sprints', ['ngRoute'])

.config([
	        '$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/sprints', {
			templateUrl: 'sprints/sprints.html',
			controller: 'SprintsCtrl'
		})
		.when('/sprints/:sprintId', {
			templateUrl: 'sprints/sprint-detail.html',
			controller: 'SprintDetailCtrl'
		});
	}
])

.controller('SprintsCtrl', ['$scope', function($scope) {
	
}])

.controller('SprintDetailCtrl',
	[       '$scope', '$routeParams',
		function($scope,   $routeParams) {
			function getById(arr, id) {
				for(var d = 0, len = arr.length; d < len; d += 1) {
					if(arr[d].id === id) {
						return arr[d];
					}
				}
				return undefined;
			}
			$scope.sprint = getById($scope.data.sprints, $routeParams.sprintId);
		}
	]
);
