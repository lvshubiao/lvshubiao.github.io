app2.controller('vipMainController', ['$scope','$http', 
	function($scope,$http){
	$http({
		url:'/user/pros',
		method:'get'
	}).then(function(res){
		if (res.data.resultCode == '0000') {
			console.log(res)
			$scope.procare = res.data.result.procare;
			$scope.prohot = res.data.result.prohot;
		}else{
			alert(res.data.resultMsg);
		}
	})
}])