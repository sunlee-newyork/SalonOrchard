'use strict';

angular.module('app')
	.controller('introController', ['$scope', '$interval', '$location', function ($scope, $interval, $location) {

		var redirect = function() {
	    $location.path("/home/about");
		}    

		$interval(function() {
			redirect();
		}, 3500, 0);

	}]);
