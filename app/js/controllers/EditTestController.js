let ctrlll = angular.module('EditTestController', []);

ctrlll.controller('EditTestController', ['$scope','$http', function($scope,$http) {
    
     $http.get('/tests').then(function(TestResponse) {
            $scope.blood_tests = TestResponse.data;
        });
    $scope.deleteTest=function(){
        $http.delete('/tests/'+$scope.blood_test.id)
        .success(function(response, status, headers, config){
            
        })
        .error(function(response, status, headers, config){
        $scope.error_message = response.error_message;
        });
    }
}]);