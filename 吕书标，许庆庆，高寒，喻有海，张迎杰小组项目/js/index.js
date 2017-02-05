define(function(require, exports, module) {
    var Main = {
        init: function() {
            this.dealHead();
            this.dealTab();
            this.dealSlides();
            this.getHotCityData();
            this.dealIcon();
            this.dealNav();
        },
        dealNav: function() {
            $('.l-nav .l-nav-list>li').on('click', function() {
                $(this).addClass('active').siblings().removeClass('active');
            })
        },
        dealHead: function() {
            $('.l-top-right li').hover(function() {
                $(this).find('.l-hide').stop(true, true).slideDown(500);
            }, function() {
                $(this).find('.l-hide').slideUp(500);
            });
        },
        dealSlides: function() {
            var showIndex = 0;
            var timer = null;
            $('.l-slide').css({ 'width': $('.l-slide li').length * 780 + 'px' });

            function doMove() {
                showIndex++;
                if (showIndex == $('.l-slide li').length) {
                    showIndex = 0;
                }
                $('.l-slide').stop(true, true).animate({ 'left': -showIndex * 780 + 'px' });
                $('.l-indicator li').eq(showIndex).addClass('active').siblings().removeClass('active');
            }
            timer = setInterval(doMove, 3000);
            $('.l-indicator li').hover(function() {
                clearInterval(timer);
                showIndex = $(this).index();
                $('.l-slide').stop(true, true).animate({ 'left': -showIndex * 780 + 'px' });
                $(this).addClass('avtive').siblings().removeClass('active');
            }, function() {
                showIndex = $(this).index();
                timer = setInterval(doMove, 3000);
            })
        },
        dealTab: function() {
            $('.l-tab .l-tabs>span').on('click', function() {
                var index = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $('.l-tabs-main .main').eq(index).show().siblings().hide();
            })
        },
        getHotCityData: function() {
            var that = this;
            $.ajax({
                url: '../json/hotcitylist.json',
                type: 'get',
                success: function(res) {
                    if (res.resultCode == '0000') {
                        that.dealhotCity(res.hoCityListData);
                        that.dealTemplate('#hotTemplate','#hotList',res.hoCityListData,0);
                    }
                }
            })
        }, 
        dealhotCity: function(hotCityData) {
            var that = this;
            $('.l-hot-city .l-ticket-hotcity-tab>li').hover(function() {
                var index = $(this).index();
                that.dealTemplate('#hotTemplate','#hotList',hotCityData,index);
                $(this).addClass('active').siblings().removeClass('active');
            })
        },
        dealTemplate: function(child, parent,data,index) {
            var _html = $(child).html();
            var _htmlFn = _.template(_html);
            var _html2 = _htmlFn({ list: data[index] });
            $(parent).html(_html2);
        },
        dealIcon: function() {
            var LBEle = document.getElementsByClassName('l-ticket-lunbo-content')[0];
            var offsetWidth = LBEle.offsetWidth;
            var timer = null;
            var speed = 10;
            timer = setInterval(move, 1000);

            function move() {
                if (parseInt(LBEle.style.left) > 0) {
                    LBEle.style.left = -offsetWidth / 2 + 'px';
                }
                if (parseInt(LBEle.style.left) < -offsetWidth / 2) {
                    LBEle.style.left = 0 + 'px';
                }
                LBEle.style.left = LBEle.offsetLeft + speed + 'px';
            };
            $('.l-prev').click(function() {
                speed = -10;
                move();
            })
            $('.l-next').click(function() {
                speed = 10;
                move();
            })
            $('.l-ticket-lunbo-content li').hover(function() {
                clearInterval(timer);
            }, function() {
                timer = setInterval(move, 1000);
            })
        }
    }
    module.exports = Main;
})
