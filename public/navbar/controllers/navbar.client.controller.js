// Create the 'example' controller
angular.module('navbar').controller('NavCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.states = {};
        $scope.states.activeItem = 'item1';

        $scope.items = [{
            id: 'item1',
            title: 'Timeshare',
            icon: 'images/minutes.svg',
            clas: 'timeshare',
            path: '/#!helloAdmin/'
        }, {
            id: 'item2',
            title: 'Site Posts',
            icon: 'images/letter.svg',
            clas: 'posts',
            path: '/#!helloAdmin/'
        }, {
            id: 'item3',
            title: 'Upload Media',
            icon: 'images/up-arrow.svg',
            clas: 'media',
            path: '/#!helloAdmin/'
        }];
        
    }
]);

