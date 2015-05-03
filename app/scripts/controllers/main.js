'use strict';

angular.module('app')
	.controller('mainController', ['$scope', '$location', '$window',
	function ($scope, $location, $window) {

		// $scope.goHome = function () {
		// 	console.log('goHome triggered');
		// 	$location.path("/home");
		// }

		// $scope.templateParam = $location

		$scope.$watch(function () {
			return $window.innerWidth;
		}, function (value) {
			console.log(value);
			$scope.windowWidth = value;
		});

		$scope.opts = {
			disable: 'left'
		};

		$scope.templates = [
			{ name: 'about'   , url: '/SalonOrchardapp/views/content/about.html' },
			{ name: 'book'    , url: '/SalonOrchardapp/views/content/book.html' },
			{ name: 'services', url: '/SalonOrchardapp/views/content/services.html' },
			{ name: 'stylists', url: '/SalonOrchardapp/views/content/stylists.html' },
			{ name: 'gallery' , url: '/SalonOrchardapp/views/content/gallery.html' },
			{ name: 'social'  , url: '/SalonOrchardapp/views/content/social.html' }			
		]

		$scope.template = $scope.templates[0];

	}]);
