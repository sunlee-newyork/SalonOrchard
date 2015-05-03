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
			{ name: 'about'   , url: '/SalonOrchard/app/views/content/about.html' },
			{ name: 'book'    , url: '/SalonOrchard/app/views/content/book.html' },
			{ name: 'services', url: '/SalonOrchard/app/views/content/services.html' },
			{ name: 'stylists', url: '/SalonOrchard/app/views/content/stylists.html' },
			{ name: 'gallery' , url: '/SalonOrchard/app/views/content/gallery.html' },
			{ name: 'social'  , url: '/SalonOrchard/app/views/content/social.html' }			
		]

		$scope.template = $scope.templates[0];

	}]);
