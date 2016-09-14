(function () {

  'use strict';

  angular.module("MyFirstApp", [])
  .controller("MyFirstController", function ($scope) {
      $scope.sayHello = function() {
        return "Hello Sandeep";
      };

      $scope.test = "konda";
  });



})();
