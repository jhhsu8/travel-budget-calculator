"use strict";

var routerApp = angular.module("routerApp");

routerApp.controller("CalculatorController", ["$scope", "expenseFactory", function($scope, expenseFactory) {
    //create an itemized list
    $scope.expenses = expenseFactory.getExpenses();
    
    //validate cost input field
    $scope.validateCostInput = function() {
        for (var i = 0; i < $scope.expenses.length; i++) {
            if (isNaN($scope.expenses[i].cost) || $scope.expenses[i].cost < 0) {
                $scope.expenses[i].validateCost = "Enter Cost as a positive number."
            } else {
                $scope.expenses[i].validateCost = "";
            }
        }
    };
    
    //validate count input field
    $scope.validateCountInput = function() {
        for (var i = 0; i < $scope.expenses.length; i++) {
            if (($scope.expenses[i].count % 1) !== 0 || $scope.expenses[i].count < 0) {
                $scope.expenses[i].validateCount = "Enter Count as a positive integer."
            } else {
                $scope.expenses[i].validateCount = "";
            }
        }
    };
    
    $scope.total_cost = 0;
    
    //create a function to calculate the total cost
    $scope.calculate = function() {
        if ($scope.total_cost === 0) {
            for (var i = 0; i < $scope.expenses.length; i++) {
                $scope.total_cost += ($scope.expenses[i].cost * $scope.expenses[i].count);
            }
            return $scope.total_cost;
        }
    };
    
    //create a function to restart the calculator
    $scope.reset = function() {
        for (var i = 0; i < $scope.expenses.length; i++) {
            $scope.expenses[i].cost = "";
            $scope.expenses[i].count = "";
            $scope.expenses[i].validateCost = "";
            $scope.expenses[i].validateCount = "";
        }
        $scope.total_cost = 0;
    };
    
    $scope.tab = 1;
    $scope.filtText = "";
    //tab selection
    $scope.select = function(setTab) {
      $scope.tab = setTab;
      if (setTab === 2) {
        $scope.filtText = "transportation";
      } else if (setTab === 3) {
        $scope.filtText = "lodging";
      } else if (setTab === 4) {
        $scope.filtText = "tickets";
      } else if (setTab === 5) {
        $scope.filtText = "foods_drinks";
      } else if (setTab === 6) {
        $scope.filtText = "misc";
      } else {
        $scope.filtText = "";
      }
    };
    
    $scope.isSelected = function(checkTab) {
      return ($scope.tab === checkTab);
    };
}]);