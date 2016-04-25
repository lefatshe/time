angular.module('customer').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/welcomeCustomer', {
			templateUrl: 'customer/views/timeshares.client.view.html'
		}).
		when('/welcomeCustomer/timeshares/:articleId', {
			templateUrl: 'customer/views/Atimeshare.client.view.html'
		}).
		otherwise({
			redirectTo: '/welcomeCustomer'
		});
	}
]); 