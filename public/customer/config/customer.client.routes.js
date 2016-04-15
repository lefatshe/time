// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('customer').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/welcomeCustomer', {
			templateUrl: 'customer/views/customer.client.view.html'
		}).
		otherwise({
			redirectTo: '/welcomeCustomer'
		});
	}
]); 
