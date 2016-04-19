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
			console.log($scope.timesharesID);

			$scope.find = function() {
        	// Use the timeshares 'query' method to send an appropriate GET request
	           $scope.timeshares = Timeshares.query();
	        };

	        // Create a new controller method for retrieving a single article
	        $scope.findOne = function() {
	        	// Use the timeshares 'get' method to send an appropriate GET request
	            $scope.timeshare = Timeshares.get({
	                timeshareId: $routeParams.articleId
	            });
	        };



		});

	}
]);
