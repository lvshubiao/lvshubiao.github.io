app.controller('homeController', ['$scope', '$http', '$interval', myHomeController])
app2.controller('homeController', ['$scope', '$http', '$interval', myHomeController])

function myHomeController($scope, $http, $interval) {
    $scope.hotNav = ['', '微电影', '电视剧', '话剧', '电影',
        '戏曲', '书画', '相声', '戏剧', '音乐剧'
    ];
    var homePage = {
        init: function() {
            var that = this;
            $http({
                url: '/IndexInfo',
                method: 'get'
            }).then(function(res) {
                if (res.data.resultCode == '0000') {
                    console.log(res);
                    // 处理轮播
                    that.dealSlide(res.data.result.slides);
                    // 处理热门项目
                    that.dealHot(res.data.result.hot);
                    // 处理卫视主推
                    that.dealTV(res.data.result.new);
                    // 处理合作单位
                    that.dealTeam(res.data.result.unit);
                } else {
                    alert(res.data.resultMsg)
                }

            })
        },
        dealSlide: function(slideData) {
            $scope.slideData = slideData;
            $scope.showIndex = 0;
            function doMove() {
                $scope.showIndex++;
                if ($scope.showIndex == $scope.slideData.length) {
                    $scope.showIndex = 0
                }
            }
            var inter = $interval(doMove, 1500);
            $scope.pauseSlide = function(index) {
                $scope.showIndex = index;
                $interval.cancel(inter);
            }
            $scope.playSlide = function(index) {
                $scope.showIndex = index;
                inter = $interval(doMove, 1500);
            }
        },
        dealHot: function(hotData) {
            $scope.hotData = hotData;
            $scope.hotIndex = 0;
            $scope.showHotItem = function(index) {
                $scope.hotIndex = index;
            }
        },
        dealTV: function(tvData) {
            $scope.tvData = tvData;
        },
        dealTeam: function(teamData) {
            $scope.teamData = teamData;
        }
    }
    homePage.init();
}
