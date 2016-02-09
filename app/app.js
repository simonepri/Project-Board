'use strict';

// Declare app level module which depends on views, and components
angular.module('projectBoard',[
  'ngRoute',
  'projectBoard.team',
  'projectBoard.sprints',
  'projectBoard.resources',
  'projectBoard.version'
]).
config([
					'$routeProvider', '$locationProvider',
	function($routeProvider,   $locationProvider) {
		$routeProvider
		.otherwise({redirectTo: '/team'});
		// make this demo work in plunker
		$locationProvider.html5Mode(false);
	}
])
.controller('TabsCtrl', [
	        '$rootScope', '$location',
	function($rootScope,   $location) {
		$rootScope.tabs = [
			{ link : '#/team', label : 'Team' },
			{ link : '#/sprints', label : 'Sprints' },
			{ link : '#/resources', label : 'Resources' }
		];

		for(var i=0; i < $rootScope.tabs.length; i++) {
			if ($rootScope.tabs[i].link == "#"+$location.$$path.substring(0, $rootScope.tabs[i].link.length-1)) {
				$rootScope.selectedTab = $rootScope.tabs[i];
				break;
			}
		}

		$rootScope.setSelectedTab = function(tab) {
			$rootScope.selectedTab = tab;
		}

		$rootScope.tabClass = function(tab) {
			if($rootScope.selectedTab == tab) {
				return "active";
			}
			else {
				return "";
			}
		}
	}
])
.run([
	        '$rootScope', '$http',
	function($rootScope,   $http) {
		$http.get('data.json?nocache='+(new Date()).getTime())
		.success(function(data) {
			$rootScope.data = data;
		});
	}
]);
