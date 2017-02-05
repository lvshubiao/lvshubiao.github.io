$(function() {
    var Main = {
        init: function() {
            var that = this;
            that.dealHead();
            that.dealNav();
            that.dealSlide();
            that.dealBottom();
            $.ajax({
                url: '../json/jiudian.json',
                type: 'get',
                success: function(res) {
                    if (res.resultCode == '0000') {
                        that.dealHotHotel(res.hotHotel);
                        var hotHotelData = res.hotHotel;
                        var _html = $('#hotTemplate').html();
                        var _htmlfn = _.template(_html);
                        var _html2 = _htmlfn({ list: hotHotelData[0] });
                        $('#hotList').html(_html2);

                        that.dealsortHotel(res.sortHotel);
                        var sortHotelData = res.sortHotel;
                        var _html = $('#sortHotelTemplate').html();
                        var _htmlfn = _.template(_html);
                        var _html2 = _htmlfn({ list11: sortHotelData[0] });
                        $('#sortHotel').html(_html2);

                        that.dealOnlyTheme(res.onlyTheme);
                        var onlyThemeData = res.onlyTheme;
                        var _html = $('#onlyThemeTemplate').html();
                        var _htmlfn = _.template(_html);
                        var _html2 = _htmlfn({ list: onlyThemeData[0] });
                        $('#themeList').html(_html2);
                    } else {
                        alert(res.resultMsg);
                    }
                }
            })
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
        dealHotHotel: function(hotHotelData) {
            $('.g-hot-hotel ul.tab li').click(function() {
                var index = $(this).index();
                var _html = $('#hotTemplate').html();
                var _htmlfn = _.template(_html);
                var _html2 = _htmlfn({ list: hotHotelData[index] });
                $('#hotList').html(_html2);
                $(this).addClass('active').siblings().removeClass('active');

            })
        },
        dealsortHotel: function(sortHotelData) {
            $('.g-search-tab div').click(function() {
                // alert('哈哈');
                var index = $(this).index();
                var _html = $('#sortHotelTemplate').html();
                var _htmlfn = _.template(_html);
                var _html2 = _htmlfn({ list11: sortHotelData[index] });
                $('#sortHotel').html(_html2);
                $(this).addClass('active').siblings().removeClass('active');
            })
        },
        dealOnlyTheme: function(onlyThemeData) {
            $('.vacation-con ul.nav li').click(function() {
                var index = $(this).index();
                var _html = $('#onlyThemeTemplate').html();
                var _htmlfn = _.template(_html);
                var _html2 = _htmlfn({ list: onlyThemeData[index] });
                $('#themeList').html(_html2);
                $(this).addClass('active').siblings().removeClass('active');
            })
        },
        dealSlide: function() {
            var timer = null;
            var index = 0;
            timer = setInterval(doMove, 2000);

            function doMove() {

                $('.g-slider li').eq(index).show().siblings().hide();

                $('.g-slider-nav>li').eq(index).addClass('current').siblings().removeClass('current');
                index++;
                if (index == 4) {
                    index = 0;
                }
            }
            $('.g-slider-nav>li').hover(function() {
                clearInterval(timer);

                index = $(this).index();

                $('.g-slider li').eq(index).show().siblings().hide();

                $('.g-slider-nav>li').eq(index).addClass('current').siblings().removeClass('current');
            }, function() {
                index = $(this).index();
                timer = setInterval(doMove, 2000);
            });

            // 处理淡入淡出
            $('.icon-nav span i').click(function() {
                $('.g-record').slideToggle('slow');
            });
        },
        dealBottom: function() {
            var brandEle = document.getElementById('brand-list');
            var ulEle = brandEle.getElementsByTagName('ul')[0];
            var liEle = ulEle.getElementsByTagName('li');

            var speed = -2;

            ulEle.innerHTML = ulEle.innerHTML + ulEle.innerHTML + ulEle.innerHTML;

            ulEle.style.width = liEle[0].offsetWidth * liEle.length + 'px';

            function move() {
                if (ulEle.offsetLeft < -ulEle.offsetWidth / 2) {
                    ulEle.style.left = '0';
                }
                if (ulEle.offsetLeft > 0) {
                    ulEle.style.left = -ulEle.offsetWidth / 2 + 'px';
                }
                ulEle.style.left = ulEle.offsetLeft + speed + 'px';
            }
            var timer = setInterval(move, 30);
            brandEle.onmouseover = function() {
                clearInterval(timer);
            }
            brandEle.onmouseout = function() {
                timer = setInterval(move, 30);
            }
            document.getElementById('btn-prev').onclick = function() {
                speed = -2;
            }
            document.getElementById('btn-next').onclick = function() {
                speed = 2;
            }
        }

    }
    Main.init();
})

