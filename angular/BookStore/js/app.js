var myapp = angular.module('myapp', [
    'bookStoreCtrls','ngRoute'
]);

myapp.config(function($routeProvider){
	$routeProvider.when('/hello',{
		templateUrl: 'tpls/hello.html',
		controller: 'helloCtrl'
	}).when('/bookList',{
		templateUrl: 'tpls/bookList.html',
		controller: 'bookListCtrl'
	}).otherwise({
		redirectTo: '/hello'
	})
})

