'use strict';

angular.module('app')
	.controller('stylistsController', ['$scope', '$window',
	function ($scope, $window) {

		$scope.stylists = [
			{ name: 'chie', title: 'Hairmaster', summary: "Chie Sugawara has earned a faithful following in New York City, after residencies and consultations at leading hair salons Aveda and Laicale in the Soho neighborhood of New York City for over 15 years. Salon Orchard is her first boutique hair salon, located in the trendy Lower East Side. Chie loves her job, and her enthusiasm for her work shows through her dedication to create her client’s perfect style.", avatar: '//nebula.wsimg.com/2365b791556bef5385939c674b0ea2a8?AccessKeyId=73C04B9C199A83BFF44A&disposition=0&alloworigin=1', website: null },
			{ name: 'mark', title: 'Stylist', summary: "NYC hairstylist currently working at Salon Orchard in the Lower East Side. I have a passion for fashion and a flair for hair. My inspiration comes from my everyday life. NYC is so full of interesting things to look at. From the different people, to the amazing architecture, and even the small pieces of nature sprouting out in this concrete jungle I call home. Life is what you make it, I like to make mine beautiful.", avatar: false, website: 'http://tajasstyles.com' },
			{ name: 'arnulfo', title: 'Senior Stylist', summary: "Arnulfo has many royal followers for hair cut and color. We will post his schedule as soon as he plans to come to NYC.", avatar: false, website: false }
		]

		$scope.$watch(function () {
			return $window.innerWidth;
		}, function (value) {
			console.log(value);
			$scope.windowWidth = value;
		});

	}]);
