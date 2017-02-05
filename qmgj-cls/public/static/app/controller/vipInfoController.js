app2.controller('vipInfoController', ['$scope', '$http',
    function($scope, $http) {
        $scope.fileNameChanged = function(e) {
            console.log(e);
        }
        $scope.cipArr = ['微电影', '电视剧', '话剧', '电影',
            '戏曲', '书画', '相声', '戏剧', '音乐剧'
        ];
        $scope.radio = function(e) {
            var ngDom = angular.element(e.target);
            ngDom.parent().children().removeClass('active');
            ngDom.addClass('active');
        }
        $scope.checkbox = function(e) {
            var ngDom = angular.element(e.target);
            ngDom.toggleClass('active');
        }
        $scope.submit = function() {
            var ngDom1 = angular.element(document.querySelectorAll('.info-radio.active'));
            console.log('性别:', ngDom1.attr('data-value'));
            var ngDom2 = angular.element(document.querySelectorAll('.info-checkbox.active'));
            var arr = [];
            for (var i = 0; i < ngDom2.length; i++) {
                arr.push(ngDom2.eq(i).attr('data-value'));
            }
            console.log('关注的圈子', arr.toString());
        }

    }
])
