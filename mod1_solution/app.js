(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunches = "";
    $scope.numberOfLunches = 0;
    $scope.lunchesArr = [];

    $scope.state = "";
    $scope.btnClass = "";

    $scope.displayNumberOfLunches = function() {
      $scope.lunchesArr = $scope.lunches.split([","]);
      // $scope.numberOfLunches = $scope.lunchesArr.length;           //numberOfLunches counting empty elements
      var totalLunches = $scope.lunchesArr.length;

      function countNotEmpty(index) {
        return index.trim() !== "";
      };

      $scope.numberOfLunches = $scope.lunchesArr.filter(countNotEmpty).length;
    };

    $scope.sayState = function() {
      if($scope.numberOfLunches == 0) {
        $scope.state= "Please enter data first";
        $scope.btnClass = "danger";
      } else if($scope.numberOfLunches <= 3) {
        $scope.state= "Enjoy";
        $scope.btnClass = "success";
      } else {
        $scope.state= "Too much!";
        $scope.btnClass = "success";
      }
    };
  };
})();
