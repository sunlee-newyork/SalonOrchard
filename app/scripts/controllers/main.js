'use strict';

angular.module('app')
	.controller('mainController', ['$scope', '$location',
	function ($scope, $location) {

		// $scope.goHome = function () {
		// 	console.log('goHome triggered');
		// 	$location.path("/home");
		// }

    var contentBody = angular.element(document.getElementsByClassName('content-body'));

    $scope.scrollToTop = function() {
      contentBody.scrollTop(0, 5000);
    }

		$scope.opts = {
			disable: 'left'
		};

		$scope.templates = [
			{ name: 'book' , url: 'app/views/content/book.html' },
			{ name: 'services', url: 'app/views/content/services.html' },
			{ name: 'stylists', url: 'app/views/content/stylists.html' },
			{ name: 'gallery' , url: 'app/views/content/gallery.html' },
			{ name: 'social'  , url: 'app/views/content/social.html' },
			{ name: 'about'   , url: 'app/views/content/about.html' }
		]

		$scope.template = $scope.templates[1];

		$scope.menu = [
			{ category: 'simple', services: [
					{ name: 'Blow Out', price: '$50 - $60' },
					{ name: 'Up Do', price: '$100' },
					{ name: 'Barber Cut', price: '$55' },
					{ name: 'Hair Cut', price: '$65 - $100' },
					{ name: 'Glaze', price: '$60' }
				] 
			},
			{ category: 'color', services: [
					{ name: 'Single Process Color', price: '$80 - $100' },
					{ name: 'Double Process Color', price: '$130 - $180' },
					{ name: '1/3 Highlights, Ombre or Balayage', price: '$80 - $100' },
					{ name: '1/2 Highlights, Ombre or Balayage', price: '$130 - $180' },
					{ name: 'Full Highlights, Ombre or Balayage', price: '$180 - $250' }
				] 
			},
			{ category: 'perms', services: [
					{ name: 'Keratin Smoothing Treatment', price: '$200 - $250' },
					{ name: 'Japanese Thermal Straightening', price: '$500' },
					{ name: 'Body Wave/Permanent Wave', price: '$200' }
				] 
			}
		]

	}]);
