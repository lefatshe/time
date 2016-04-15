// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'example' module routes
angular.module('users').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/signup', {
			templateUrl: 'example/views/example.client.view.html'
		}).
		otherwise({
			redirectTo: '/signin'
		});
	}
]); 
