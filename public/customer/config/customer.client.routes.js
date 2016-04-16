// Configure the 'articles' module routes
angular.module('customer').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/welcomeCustomer', {
			templateUrl: 'customer/views/timeshares.client.view.html'
		}).
		when('/welcomeCustomer/:timeshareId', {
			templateUrl: 'customer/views/Atimeshare.client.view.html'
		});
	}
]); 