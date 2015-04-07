'use strict';

angular.module('app')
	.controller('mainController', ['$scope', function ($scope) {
		
		$scope.opts = {
			disable: 'left'
		};

		$scope.template = [
			{ name: 'about', url: '/views/content/about.html' },
			{ name: '', url: '' }
		]

	}]);
