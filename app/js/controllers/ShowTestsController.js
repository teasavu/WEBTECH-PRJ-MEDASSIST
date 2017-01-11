let ctl = angular.module('ShowTestsController', []);

ctl.controller('ShowTestsController', ['$scope','$http', function($scope,$http) {
    
    $http.get('/tests').then(function(showTestResponse) {
            $scope.blood_tests = showTestResponse.data;
        });
        
          $scope.deleteTest=function(){
        $http.delete('/tests/'+$scope.blood_test.id)
        .success(function(response, status, headers, config){
            
        })
        .error(function(response, status, headers, config){
        $scope.error_message = response.error_message;
        });
    }
      $scope.update=function(){
        $http.put('/tests/'+$scope.blood_test.id,$scope.blood_test).
        success(function(data) {
            console.log("put successful");
        }).error(function(data) {
            console.error("error in put http request");
        })
        $scope.tvshowToEdit="";
    }
}]);
/*ctl.controller('ShowTestsController', ['$scope', function($scope) {
	
	$scope.message = "This is Test screen";
}]);*/

 
     

     

