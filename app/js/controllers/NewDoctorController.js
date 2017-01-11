let ctrll = angular.module('NewDoctorController', []);

ctrll.controller('NewDoctorController', ['$scope','$http', function($scope,$http) {
    $scope.doctors = {};
    $scope.newDoctor=function(){
        $http.post('/doctors',$scope.doctors).
        success(function(data) {
            console.log("posted successfully");
        }).error(function(data) {
            console.error("error in posting");
        })
    }
}]);