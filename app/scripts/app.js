"use strict";

var routerApp = angular.module("routerApp", ["ui.router"]);
routerApp.config( ["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state("app", {
        url: "/",
        views: {
            'content': {
                templateUrl: "views/calculator.html",
                controller: "CalculatorController"
            }
        }
    });
}]);