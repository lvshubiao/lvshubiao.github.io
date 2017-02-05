app.controller('listController', ['$scope', '$http','$stateParams', myListcontroller])
app2.controller('listController', ['$scope', '$http','$stateParams', myListcontroller])

function myListcontroller($scope, $http,$stateParams) {
	$scope.arr = ['全部','微电影','电视剧','话剧','电影','戏曲','书画','相声','戏剧','音乐剧','其它'];
    var list = {
        init: function() {
            var that = this;
            $scope.cid = 0;
            $scope.status = 0;
            $scope.timeStatus = 0;
            $scope.count = 9;
            $scope.countAll = 0;
            $scope.maxSize = 5;
            $scope.keyword = '';
			//初始化
			if ($stateParams.keyword != undefined) {
				$scope.keyword = $stateParams.keyword;
			}
            that.events();
            that.getprolistData();
        },
        events: function() {
        	var that = this;
        	$scope.changeCid = function(index){
        		$scope.cid = index;
        		that.getprolistData();
        	}
        	$scope.changeStatus = function(index){
        		$scope.status = index;
        		that.getprolistData();
        	}
        	$scope.changeTimeStatus = function(index){
        		$scope.timeStatus = index;
        		that.getprolistData();
        	}
        	$scope.pageChanged = function(){
        		
        		that.getprolistData();
        	}
        },
        getprolistData: function() {
            $http({
                url: '/prolist',
                params: {
                    keyword: $scope.keyword,
                    cid: $scope.cid,
                    status: $scope.status, 
                    timeStatus:  $scope.timeStatus,
                    page: $scope.page,
                    count: $scope.count 
                }
            }).then(function(res){
            	if (res.data.resultCode == '0000') {
            		console.log(res);
            		var result = res.data.result;
            		$scope.countAll = result.countAll;
            		$scope.prolistData = result.list;
            	}else{
            		alert(res.data.resultMsg);
            	}
            })
        }
    }
    list.init();
}
