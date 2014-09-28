angular.module('HomeJS', ['ngRoute', 'HomeJS.services', 'HomeJS.controllers', 'firebase'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            controller: 'ItemsController',
            templateUrl: 'partials/main.html'
        })
        .when('/view', {
            controller: 'ViewCtrl',
            templateUrl: 'partials/view.html'
        })
        .otherwise({redirectTo: '/'});
    });
