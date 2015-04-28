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
			.when('/home/about', {
				templateUrl: '/app/views/main.html?template=about',
				controller: 'mainController'
			})

			.otherwise({
				redirectTo: '/home'
			});
	}])

	.config(function (snapRemoteProvider) {

		if (window.innerWidth > 415) {
			snapRemoteProvider.globalOptions = { 
	    	resistance: 0.8,
	    	flickThreshold: 30,
	    	minPosition: -130,
	    	disable: 'left', 
	    	touchToDrag: false
	    };	
		} else {
			snapRemoteProvider.globalOptions = { 
	    	resistance: 0.8,
	    	flickThreshold: 30,
	    	minPosition: -200,
	    	disable: 'left', 
	    	touchToDrag: false
	    };
		}
    
  });