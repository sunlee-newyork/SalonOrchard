'use strict';

angular.module('app')
	.controller('mainController', ['$scope', '$location', '$routeParams', '$window',
	function ($scope, $location, $routeParams, $window) {

		$scope.$watch(function () {
			return $window.innerWidth;
		}, function (value) {
			$scope.windowWidth = value;
		});

		$scope.changeTemplate = function(tmp) {
			$scope.template = tmp.url;
			$location.path('/home/' + tmp.name, false);
		}

		$scope.opts = {
			disable: 'left'
		};

		$scope.templates = {
			about: {
				name: 'about',
				url: 'app/views/content/about.html'
			},
			book: {
				name: 'book',
				url: 'app/views/content/book.html'
			},
			services: {
				name: 'services',
				url: 'app/views/content/services.html'
			},
			stylists: {
				name: 'stylists',
				url: 'app/views/content/stylists.html'
			},
			gallery: {
				name: 'gallery',
				url: 'app/views/content/gallery.html'
			},
			social: {
				name: 'social',
				url: 'app/views/content/social.html'
			}
		}

		if ($routeParams.template) {
			$scope.template = $scope.templates[$routeParams.template].url;
		} else {
			$scope.template = 'app/views/content/about.html';
		}

	}]);
