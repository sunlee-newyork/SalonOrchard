'use strict';

angular.module('app')
	.controller('introController', ['$scope', '$interval', '$location', function ($scope, $interval, $location) {

		var redirect = function() {
	    $location.path("/home");
		}    

		$interval(function() {
			redirect();
		}, 2500, 0);

	}]);
