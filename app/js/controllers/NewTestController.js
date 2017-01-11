let ctrl = angular.module('NewTestController', []);

ctrl.controller('NewTestController', ['$scope','$http', function($scope,$http) {
    $scope.blood_tests = {};
    
     $http.get('/doctors').then(function(doctorsResponse) {
            $scope.doctors = doctorsResponse.data;
    });
    $scope.newBloodTest=function(){
        $http.post('/tests',$scope.blood_tests).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
    }
}]);