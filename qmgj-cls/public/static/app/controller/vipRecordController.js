app2.controller('vipRecordController', ['$scope', '$http',
    function($scope, $http) {
        var record = {
            init: function() {
                var that = this;
                $scope.type = 0;
                $scope.page = 1;
                $scope.count = 9;
                $scope.countAll = 0;
                $scope.maxSize = 5;
                that.events();
                that.getRecordData();
            },
            events: function() {
            	var that = this;
                $scope.changeType = function(index) {
                    $scope.type = index;
                    that.getRecordData();
                }
                $scope.pageChanged = function(){
                	that.getRecordData();
                }
            },
            getRecordData: function() {
                $http({
                    url: '/user/RecordList',
                    method: 'post',
                    data: {
                        type: $scope.type, 
                        page:$scope.page, 
                        count: $scope.count 
                    }
                }).then(function(res){
                	if (res.data.resultCode == '0000') {
                		console.log(res);
                		$scope.countAll =  res.data.result.count;
                		$scope.recordData = res.data.result.list;
                	}else{
                		alert(res.data.resultMsg);
                	}
                })
            }
        }
        record.init();
    }
])
