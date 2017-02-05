app2.controller('logoutController', ['$scope','$rootScope','$http',
 function($scope,$rootScope,$http){
	$rootScope.userLogout = function(){
		$http({
			url:'/user/logout'
		}).then(function(res){
			if (res.data.resultCode == '0000') {
				alert('退出成功');
				location.reload();
			}
		})
	}
}])