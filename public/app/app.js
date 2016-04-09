angular.module('app',['ngResource','ngRoute']);

angular.module('app').config(function($routeProvider,$locationProvider) {
  console.log("app config is here.");
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/',{
    	templateUrl:'/partials/main',
    	controller:'mainCtrl'
    })
    .otherwise({
		redirectTo: '/partials/main'
    })
});

angular.module('app').controller('mainCtrl',function($scope) {
	console.log("myVar is setting here");
	$scope.myVar = "Hello Angular";
	console.log($scope.myVar);
});