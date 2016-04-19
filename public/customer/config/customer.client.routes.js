angular.module('customer').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/welcomeCustomer', {
			templateUrl: 'customer/views/timeshares.client.view.html'
		}).
		otherwise({
			redirectTo: '/welcomeCustomer'
		}).
		when('/timeshares', {
			templateUrl: 'customer/views/Atimeshare.client.view.html'
		});
	}
]); 