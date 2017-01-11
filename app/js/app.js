var app = angular.module("mainApp",  ['ui.router','ngRoute','ShowTestsController','NewTestController','ShowDoctorsController','NewDoctorController','EditTestController']);

/*app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/appointments', {
        templateUrl : 'views/appointments.html',
       
    })
    .when('/blood_tests', {
        templateUrl : 'views/blood_tests.html', 
        controller : 'ShowTestsController'
    })
    .when('/home', {
        templateUrl : 'views/home.html'
    })
    
    .otherwise({
       redirectTo: '/home'
    });
}]);
  */
  
   app.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider){
        
    $urlRouterProvider.otherwise('/home')
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
        })
        .state('appointments', {
            url: '/appointments',
            template : '<h2>Appointments page</h2> under construction'
        })
        .state('blood_tests', {
            url: '/blood_tests',
            templateUrl: 'views/blood_tests.html',
            controller: 'ShowTestsController'
        })
        .state('add_tests', {
            url: '/add_tests',
            templateUrl: 'views/add_test.html',
            controller: 'NewTestController'
        })
        .state('doctors', {
            url: '/doctors',
            templateUrl: 'views/doctors.html',
            controller: 'ShowDoctorsController'
        })
         .state('add_doctors', {
            url: '/add_doctors',
            templateUrl: 'views/add_doctor.html',
            controller: 'NewDoctorController'
        })
         .state('edit_tests', {
            url: '/edit_tests',
            templateUrl: 'views/edit_test.html',
            controller: 'EditTestController'
        })
       
}])