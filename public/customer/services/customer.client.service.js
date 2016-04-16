'use strict';


angular.module('customer').service("customerService", function ($http, $q, $resource){
	var deferred = $q.defer();

	$http.get('/api/articles/').then(function (data){
		deferred.resolve(data);
	});

	

	this.getTimeshares = function (){
		return deferred.promise;
		return $resource('api/articles/:articleId', {
	        articleId: '@_id'
	    }, {
	        update: {
	            method: 'PUT'
	        }
	    });
	}
	
});