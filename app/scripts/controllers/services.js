'use strict';

angular.module('app')
	.controller('servicesController', ['$scope',
	function ($scope) {

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
					{ name: '1/3 Highlights, Ombre/Balayage', price: '$80 - $100' },
					{ name: '1/2 Highlights, Ombre/Balayage', price: '$130 - $180' },
					{ name: 'Full Highlights, Ombre/Balayage', price: '$180 - $250' }
				] 
			},
			{ category: 'perms', services: [
					{ name: 'Keratin Smoothing Treatment', price: '$200 - $250' },
					{ name: 'Japanese Thermal Straightening', price: '$500' },
					{ name: 'Body Wave/Permanent Wave', price: '$200' }
				] 
			}
		]

		$scope.products = [
			{ category: 'shampoo', stock: [
				{ name: 'True Hue™ Anti-Fading Shampoo', description: '', price: '$17', images: ['/assets/imgs/products/shampoo_truehue_anti-fading.jpg']},
				{ name: 'True Hue™ Highlights Shampoo', description: '', price: '$17', images: ['/assets/imgs/products/shampoo_truehue_highlights.jpg']},
				{ name: 'True Hue™ Pure Moisturizing', description: '', price: '$17', images: ['/assets/imgs/products/shampoo_truehue_puremoisturizing.jpg']}
			] },
			{ category: 'conditioner', stock: [
				{ name: 'ColorMoist™ Conditioner', description: '', price: '$18', images: ['/assets/imgs/products/conditioner_colormoist.jpg']}
			] },
			{ category: 'treatment', stock: [
				{ name: 'Indulge Masque Hair Repair Treatment', description: '', price: '$20', images: ['/assets/imgs/products/treatment_indulgemasque.jpg']},
				{ name: 'Straight & Smooth Anti-Frizz and Straightening Balm', description: '', price: '$19', images: ['/assets/imgs/products/treatment_straightandsmooth.jpg']},
				{ name: 'Elixir 11', description: '', price: '$20', images: [
					'/assets/imgs/products/treatment_elixir11_1.jpg',
					'/assets/imgs/products/treatment_elixir11_2.jpg',
					'/assets/imgs/products/treatment_elixir11_3.jpg'
				]}
			] },
			{ category: 'styling', stock: [
				{ name: 'DiaTHIX Hair Thickening Serum', description: '', price: '$30', images: [
					'/assets/imgs/products/styling_diathix_1.jpg',
					'/assets/imgs/products/styling_diathix_2.jpg',
					'/assets/imgs/products/styling_diathix_3.jpg'
				]},
				{ name: 'Tousling Spray', description: '', price: '$22', images: [
					'/assets/imgs/products/styling_touslingspray_1.jpg',
					'/assets/imgs/products/styling_touslingspray_2.jpg',
					'/assets/imgs/products/styling_touslingspray_3.jpg'
				]},
				{ name: '', description: '', price: '', images: ['']}
			] }
		]

	}]);
