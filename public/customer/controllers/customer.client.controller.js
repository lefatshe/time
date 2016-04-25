// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'customer' controller
angular.module('customer').controller('CustomerController', ['$scope', 'customerService',
	function($scope, customerService) {
		
		var promise = customerService.getTimeshares();

		promise.then(function (data){
			$scope.timeshares = data.data;
			//$scope.timesharesID = data.data[0]._id;
			console.log($scope.timeshares);
		});

	}
]);
