'use strict';

angular.module('app')
	.controller('mainController', ['$scope', '$location', '$routeParams', '$window',
	function ($scope, $location, $routeParams, $window) {

		$scope.$watch(function () {
			return $window.innerWidth;
		}, function (value) {
			$scope.windowWidth = value;
		});

		$scope.changeTemplate = function(event, tmp) {
			for (var t in $scope.templates) {
				$scope.templates[t].selected = false;				
			}

			tmp.selected = true;
			$scope.template = tmp;
			$location.path('/home/' + tmp.name, false);
		}

		$scope.opts = {
			disable: 'left'
		};

		$scope.templates = {
			about: {
				name: 'about',
				url: 'app/views/content/about.html',
				selected: false
			},
			book: {
				name: 'book',
				url: 'app/views/content/book.html',
				selected: false
			},
			services: {
				name: 'services',
				url: 'app/views/content/services.html',
				selected: false
			},
			stylists: {
				name: 'stylists',
				url: 'app/views/content/stylists.html',
				selected: false
			},
			gallery: {
				name: 'gallery',
				url: 'app/views/content/gallery.html',
				selected: false
			},
			social: {
				name: 'social',
				url: 'app/views/content/social.html',
				selected: false
			}
		}

		if ($routeParams.template) {
			$scope.template = $scope.templates[$routeParams.template];
			$scope.templates[$routeParams.template].selected = true;
		} else {
			$scope.template = 'app/views/content/about.html';
		}

	}]);
