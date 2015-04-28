'use strict';

angular.module('app')
	.controller('mainController', ['$scope', '$location',
	function ($scope, $location) {

		// $scope.goHome = function () {
		// 	console.log('goHome triggered');
		// 	$location.path("/home");
		// }

		$scope.templateParam = $location

		$scope.opts = {
			disable: 'left'
		};

		$scope.templates = [
			{ name: 'about'   , url: 'app/views/content/about.html' },
			{ name: 'book'    , url: 'app/views/content/book.html' },
			{ name: 'services', url: 'app/views/content/services.html' },
			{ name: 'stylists', url: 'app/views/content/stylists.html' },
			{ name: 'gallery' , url: 'app/views/content/gallery.html' },
			{ name: 'social'  , url: 'app/views/content/social.html' }			
		]

		$scope.template = $scope.templates[3];

	}]);
