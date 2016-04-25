'use strict';


angular.module('customer').service("customerService", function ($http, $q){
	var deferred = $q.defer();

	this.getTimeshares = function (){
		$http.get('/api/articles/').then(function (data){
			deferred.resolve(data);
		});
		return deferred.promise;
	}
	
});

