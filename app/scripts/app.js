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
			.when('/home/:template', {
				templateUrl: '/app/views/main.html',
				controller: 'mainController',
				reloadOnSearch: false
			})

			.otherwise({
				redirectTo: '/'
			});
	}])

	.config(function (snapRemoteProvider) {

		if (window.innerWidth > 1200) {
			snapRemoteProvider.globalOptions = { 
	    	resistance: 0.8,
	    	flickThreshold: 30,
	    	minPosition: -300,
	    	disable: 'left', 
	    	touchToDrag: false
	    };
		} else if (window.innerWidth > 1110 && window.innerWidth <= 1200) {
			snapRemoteProvider.globalOptions = { 
	    	resistance: 0.8,
	    	flickThreshold: 30,
	    	minPosition: -220,
	    	disable: 'left', 
	    	touchToDrag: false
	    };
		} else if (window.innerWidth > 415 && window.innerWidth <= 1110) {
			snapRemoteProvider.globalOptions = { 
	    	resistance: 0.8,
	    	flickThreshold: 30,
	    	minPosition: -230,
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
    
	})

	// .config(function (SpotifyProvider) {

	// 	var href = window.location.href;
	// 	// console.log(location);

	// 	SpotifyProvider.setClientId('ab4f68bfa479403382c2ffca21711cbe');
	// 	SpotifyProvider.setRedirectUri(href);
	// 	SpotifyProvider.setAuthToken('BQCYvLR-9OVbF0nv1c1QzpsIaXkHxNEy13tewS0eJ5H40fwWMksMgZ8M65-30RuEzTH7cXoZjCJXd9tZFqUYX3oHIanU672AO2qqEIK7PWcm-BZuC_GeCVJS3WpJtFTtTpu9ovY38Sem0Ik');

	// })
	
	.run(['$route', '$rootScope', '$location', function ($route, $rootScope, $location) {
    var original = $location.path;
    $location.path = function (path, reload) {
      if (reload === false) {
        var lastRoute = $route.current;
        var un = $rootScope.$on('$locationChangeSuccess', function () {
          $route.current = lastRoute;
          un();
        });
      }
      return original.apply($location, [path]);
    };
	}]);	