'use strict';

angular.module('app')
	.controller('aboutController', ['$scope', '$window',
	function ($scope, $window) {

		$scope.$watch(function () {
			return $window.innerWidth;
		}, function (value) {
			$scope.windowWidth = value;
		});

		$scope.schedule = [
			{day: 'Monday', time: 'CLOSED'},
			{day: 'Tuesday', time: '11AM to 8PM'},
			{day: 'Wednesday', time: '11AM to 8PM'},
			{day: 'Thursday', time: '11AM to 8PM'},
			{day: 'Friday', time: '11AM to 8PM'},
			{day: 'Saturday', time: '11AM to 8PM'},
			{day: 'Sunday', time: '1PM to 6PM'}
		]

	}]);
