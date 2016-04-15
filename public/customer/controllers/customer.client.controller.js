// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'customer' controller
angular.module('customer').controller('CustomerController', ['$scope', 'customerService',
	function($scope, customerService) {
		var promise = customerService.getTimeshares();

		promise.then(function (data){
			$scope.timeshares = data.data;

			console.log($scope.timeshares);
		});







	}
]);
