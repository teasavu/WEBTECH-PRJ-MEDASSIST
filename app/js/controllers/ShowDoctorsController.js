let ctli = angular.module('ShowDoctorsController', []);

ctli.controller('ShowDoctorsController', ['$scope','$http', function($scope,$http) {
    
    $http.get('/doctors').then(function(doctorsResponse) {
            $scope.doctors = doctorsResponse.data;
        });
}]);


