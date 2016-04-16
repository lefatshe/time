// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'customer' controller
angular.module('customer').controller('CustomerController', ['$scope', 'customerService',
	function($scope, customerService) {
		
		var promise = customerService.getTimeshares();

		promise.then(function (data){
			$scope.timeshares = data.data;

			console.log($scope.timeshares);

			// Create a new controller method for retrieving a list of timeshares
	        $scope.find = function() {
	        	// Use the timeshares 'query' method to send an appropriate GET request
	        	$scope.timeshares = data.data;
	            $scope.timeshares = Timeshares.query();
	        };

	        // Create a new controller method for retrieving a single timeshare
	        $scope.findOne = function() {
	        	// Use the timeshare 'get' method to send an appropriate GET request
	            $scope.timeshare = Timeshares.get({
	                timeshareId: $routeParams.timeshareId
	            });
	        };
		});

	}
]);
