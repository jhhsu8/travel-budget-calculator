"use strict";

var routerApp = angular.module("routerApp");

//define a service called expenseFactory 
routerApp.service("expenseFactory", function() {
    var expenses = [{
        name: "Car Rental",
        category: "transportation",
        image: "images/car.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }, {
        name: "Taxi/Share Ride",
        category: "transportation",
        image: "images/taxis.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }, {
        name: "Hotel/Rental",
        category: "lodging",
        image: "images/hotel.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }, {
        name: "Flight/Train/Bus",
        category: "tickets",
        image: "images/airplane.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }, {
        name: "Drinks",
        category: "foods_drinks",
        image: "images/coffee.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }, {
        name: "Breakfast",
        category: "foods_drinks",
        image: "images/breakfast.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }, {
        name: "Lunch",
        category: "foods_drinks",
        image: "images/lunch.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }, {
        name: "Dinner",
        category: "foods_drinks",
        image: "images/dinner.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }, {
        name: "Souvenirs",
        category: "misc",
        image: "images/souvenirs.jpg",
        validateCost: "",
        validateCount: "",
        cost: "",
        count: ""
    }];

    //implement the function called getExpenses
    this.getExpenses = function() {
        return expenses;
    };
});