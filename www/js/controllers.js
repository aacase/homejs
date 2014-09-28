angular.module('HomeJS.controllers', [])
    .controller('ItemsController', ['$scope', function ($scope) {
        $scope.status = "It works!";
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
