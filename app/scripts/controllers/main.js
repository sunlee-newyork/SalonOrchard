'use strict';

angular.module('app')
	.controller('mainController', ['$scope', function ($scope) {
		
		$scope.opts = {
			disable: 'left'
		};

		$scope.templates = [
			{ name: 'default' , url: 'app/views/content/default.html' },
			{ name: 'services', url: 'app/views/content/services.html' },
			{ name: 'stylists', url: 'app/views/content/stylists.html' },
			{ name: 'gallery' , url: 'app/views/content/gallery.html' },
			{ name: 'social'  , url: 'app/views/content/social.html' },
			{ name: 'about'   , url: 'app/views/content/about.html' }
		]

		$scope.template = $scope.templates[0];

		angular.element

	}]);
