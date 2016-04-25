// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'customer' controller
angular.module('customer')
.controller('CustomerController', ['$scope', '$http', 'TimeshareService', '$routeParams', 
	function($scope, $http, TimeshareService, $routeParams) {
		
		// var timeshares_data = $http.get('/api/articles/');

		// timeshares_data.then(function(result) {
		// 	$scope.timeshares = result.data
		// })

		$scope.timeshares = TimeshareService.query();

		$scope.getAtimeshare = function() {
			//$scope.oneTimeshare = TimeshareService.get({_id: articleId});
			$scope.timeshare = TimeshareService.get({
                articleId: $routeParams.articleId
            });
		};
		
	}
]);
