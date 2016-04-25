'use strict';


angular.module('customer')
.factory("TimeshareService", function ($resource){
	//return $resource ('/api/articles/:articleId', {articleId: '@articleId'});
	return $resource('api/articles/:articleId', {articleId: '@_id'});
});

