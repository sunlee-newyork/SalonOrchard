'use strict';

angular.module('app')
	.controller('stylistsController', ['$scope',
	function ($scope) {

		$scope.stylists = [
			{ name: 'chie', title: 'Hairmaster', summary: "Chie Sugawara has earned a faithful following in New York City, after residencies at leading hair salons Aveda and Laicale in the Soho neighborhood of New York City for over 15 years. She has also acted as consultant to Aveda and Avon for the hair and beauty markets in the US and Japan, as well as providing hair and makeup styling for numerous fashion shows. Salon Orchard is Chie's first boutique hair salon, located in the trendy Lower East Side. She specializes in cutting edge coloring techniques, highlights, painting, balayage, vibrant color, modern cuts, razor cutting, blowouts, as well as special occasion hair. She is also trained in hair straightening treatments. Chie loves her job, and her enthusiasm for her work shows through her dedication to create her client’s perfect style.", avatar: '//nebula.wsimg.com/2365b791556bef5385939c674b0ea2a8?AccessKeyId=73C04B9C199A83BFF44A&disposition=0&alloworigin=1', website: null },
			{ name: 'mark', title: 'Stylist', summary: "NYC hairstylist currently working at Salon Orchard in the Lower East Side. I have a passion for fashion and a flair for hair. My inspiration comes from my everyday life. NYC is so full of interesting things to look at. From the different people, to the amazing architecture, and even the small pieces of nature sprouting out in this concrete jungle I call home. Life is what you make it, I like to make mine beautiful.", avatar: null, website: 'http://tajasstyles.com' },
			{ name: 'arnulfo', title: 'Senior Stylist', summary: "Arnulfo has many royal followers for hair cut and color. We will post his schedule as soon as he plans to come to NYC.", avatar: null, website: null }
		]

	}]);
