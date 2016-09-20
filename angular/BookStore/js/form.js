var userInfoModule=angular.module('userInfoModule', []);

userInfoModule.controller('userInfoCtrl',['$scope',
	function($scope){
		$scope.userInfo={
			email:'25jflaji@qq.com',
			password:'fskdjflki',
			autoLogin:true
		}
		$scope.getFormData=function(){
			console.log($scope.userInfo);
		}
		$scope.setFormData=function(){
			$scope.userInfo={
				email:'jljoi@qq.com',
				password:'sfdsaf',
				autoLogin:false
			}
		}
		$scope.resetForm=function(){
			$scope.userInfo={
				email:'25jflaji@qq.com',
				password:'fskdjflki',
				autoLogin:true
			}
		}
	}
])
