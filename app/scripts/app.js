'use strict';

angular.module('app', [
		'ngSanitize',
		'ngAnimate',
		'ngRoute',
		'snap',
		'duScroll',
		'angular-packery'
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

	.config(function (snapRemoteProvider) {
    snapRemoteProvider.globalOptions = { 
    	resistance: 0.8,
    	flickThreshold: 30,
    	minPosition: -110,
    	disable: 'left', 
    	touchToDrag: false
    };
  });