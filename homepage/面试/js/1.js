var myapp=angular.module('myapp', ['ui.router']);

myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('index');
	$stateProvider.state('index',{
		url:'/index',
		views:{
			'':{
				templateUrl:'tpls/index.html',
				controller:'indexCtr'
			},
			'main@index':{
				templateUrl:'tpls/home.html',
				controller:'homeCtr'
			}
		}
	}).state('index.my',{
		url:'/my',
		views:{
			'main@index':{
				template:'<div>about me</div>'
			}
		}
	})
}]);
myapp.controller('indexCtr', function($scope){
	
})
myapp.controller('homeCtr', function($scope){
	
})
myapp.directive('nav',function(){
	return{
		link:function(scope,ele,attr){
			ele.on('click', 'li', function(event) {
				event.preventDefault();
				$(this).addClass('active').siblings().removeClass('active');
			});
		}
	}
})
myapp.directive('carousel',function(){
	return{
		link:function(scope,ele,attr){
			
		}
	}
})

