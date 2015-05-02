'use strict';

angular.module('app')
	.controller('galleryController', ['$scope',
	function ($scope) {

		$scope.selected = '/assets/imgs/snapshots/20150326_200400.jpg';

		$scope.selectHero = function (item) {
			if (window.innerWidth < 415) {
				$scope.mobileClicked = true;
			}
			$scope.selected = item;
		}

		$scope.closeLightbox = function () {
			$scope.mobileClicked = false;
		}

		angular.element(document).ready(function () {
        	var pckry = new Packery('#packery');
			pckry.layout();
    	});
		

		// document.getElementById('packery').packery();

		$scope.gallery = [
			'/assets/imgs/stock-generic/beef-stock.jpg',
			'/assets/imgs/stock-generic/Crystal_ball_2_by_chop_stock.jpg',
			'/assets/imgs/stock-generic/download.jpeg',
			'/assets/imgs/stock-generic/glasses.jpg',
			'/assets/imgs/stock-generic/I_love_bread_by_chop_stock.jpg',
			'/assets/imgs/stock-generic/images.jpeg',
			'/assets/imgs/stock-generic/learn-how-to-invest.jpg',
			'/assets/imgs/stock-generic/orca-stock-photo.jpg',
			'/assets/imgs/stock-generic/Stock___Moon_by_wachowicz.jpg',
			'/assets/imgs/stock-generic/stock-market-bull-252x300.jpg',
			'/assets/imgs/stock-generic/sweet_dreams_by_deingel_dog_stock-d4hfyxj.jpg',
			'/assets/imgs/stock-generic/726a297b980b0b4044265859d2c3ec05.jpg',
			'/assets/imgs/stock-generic/Stock-Market1.jpg',
			'/assets/imgs/stock-generic/antwerp-belgium-stock-exchange-abandoned.jpg',
			'/assets/imgs/stock-generic/Tree_stock_by_lillyfly06_stock.jpg',
			'/assets/imgs/stock-generic/free-stock-nature-photos.jpg',
			'/assets/imgs/stock-generic/wall-st.jpg',
			'/assets/imgs/stock-generic/beef_stock_16x9.jpg',
			'/assets/imgs/stock-generic/12_07_how_to_find_hair_models_show.jpg',
			'/assets/imgs/stock-generic/download (1).jpeg'
		]

	}]);
