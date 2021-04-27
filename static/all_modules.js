"use strict";

// Get the mainApp
var mainApp = angular.module("mainApp", []);

// Create the controller
mainApp.controller("moduleController", function($scope, $http) {
    $http.get('/modules').then(function(response) {
      $scope.modules = response.data;
    });
  });