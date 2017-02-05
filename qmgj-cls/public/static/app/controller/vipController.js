app2.controller('vipController', ['$scope','$http', 
	function($scope,$http){
	$http({
		url:'/user/info',
		method:'post'

	}).then(function(res){
		if (res.data.resultCode == '0000') {
			console.log(res);
			$scope.userinfo = res.data.result;
		}else{
			alert(res.data.resultMsg);
		}
	})
}])
