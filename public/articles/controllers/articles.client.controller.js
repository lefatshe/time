// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'articles' controller
angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Articles',
    function($scope, $routeParams, $location, Authentication, Articles) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        $scope.mySplit = function(string, nb) {
            var array = string.split(',');
            
            return array[nb];
        }

        // Create a new controller method for creating new articles
        $scope.create = function() {
        	// Use the form fields to create a new article $resource object
            var article = new Articles({
                title: this.title,
                category: this.category,
                province: this.province,
                discription: this.discription,

                // images
                images: this.images,

                // attractions
                attractions: this.attractions,
                nearby: this.nearby,

                // purchase price & discription
                purchase: this.purchase,
                price: this.price,
                bedrooms: this.bedrooms,
                datemin: this.datemin,
                datemax: this.datemax,

                // action timeshare
                availability: this.availability,
                verify: this.verify
            });







            








            // Use the article '$save' method to send an appropriate POST request
            article.$save(function(response) {
            	// If an article was created successfully, redirect the user to the article's page 
                $location.path('articles/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a list of articles
        $scope.find = function() {
        	// Use the article 'query' method to send an appropriate GET request
            $scope.articles = Articles.query();
        };

        // Create a new controller method for retrieving a single article
        $scope.findOne = function() {
        	// Use the article 'get' method to send an appropriate GET request
            $scope.article = Articles.get({
                articleId: $routeParams.articleId
            });
        };

        // Create a new controller method for updating a single article
        $scope.update = function() {
        	// Use the article '$update' method to send an appropriate PUT request
            $scope.article.$update(function() {
            	// If an article was updated successfully, redirect the user to the article's page 
                $location.path('articles/' + $scope.article._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for deleting a single article
        $scope.delete = function(article) {
        	// If an article was sent to the method, delete it
            if (article) {
            	// Use the article '$remove' method to delete the article
                article.$remove(function() {
                	// Remove the article from the articles list
                    for (var i in $scope.articles) {
                        if ($scope.articles[i] === article) {
                            $scope.articles.splice(i, 1);
                        }
                    }
                });
            } else {
            	// Otherwise, use the article '$remove' method to delete the article
                $scope.article.$remove(function() {
                    $location.path('#!helloAdmin/articles');
                });
            }
        };
    }
]);











