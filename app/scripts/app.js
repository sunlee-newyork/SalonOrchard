'use strict';

angular.module('SalonOrchardApp', [
		'ngSanitize',
		'ngAnimate',
		'ngRoute',
		'snap'
	])

	.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: '/app/views/intro.html',
				controller: 'introController'
			})
			.when('/home', {
				templateUrl: '/app/views/main.html',
				controller: 'mainController'
			})

			.otherwise({
				redirectTo: '/home'
			});
	}])