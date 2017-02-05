$(function() {
    var Main = {
        init: function() {
            var that = this;
            that.dealHead();
            that.dealNav();
            $.ajax({
                url: '../json/DZLY.json',
                type: 'get',
                success: function(res) {
                    if (res.resultCode == '0000') {
                        that.dealSlide(res.slides);
                        that.dealQiye1(res.qiye[0]);
                        that.dealQiye2(res.qiye[1]);
                        that.dealPerson1(res.person[0]);
                        that.dealPerson2(res.person[1]);
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
        // 处理轮播图
        dealSlide: function(slideData) {
            var _html = '';
            var timer = null;
            for (var i = 0; i < slideData.length; i++) {
                _html += '<img src="' + slideData[i].img + '" alt="">';
                // console.log(_html);
            }
            $('.g-slide').append(_html);
            var showIndex = 0;
            $('.g-slide>img').eq(showIndex).show().siblings('img').hide();
            $('.g-slide-nav li').eq(showIndex).addClass('active').siblings().removeClass('active');
            timer = setInterval(doMove, 1500);

            function doMove() {

                showIndex++;
                if (showIndex == slideData.length) {
                    showIndex = 0;
                }
                $('.g-slide>img').eq(showIndex).show().siblings('img').hide();
                $('.g-slide-nav li').eq(showIndex).addClass('active').siblings().removeClass('active');

            };
            $('.g-slide-nav li').hover(function() {
                clearInterval(timer);
                showIndex = $(this).index();
                $('.g-slide>img').eq(showIndex).show().siblings('img').hide();
                $('.g-slide-nav li').eq(showIndex).addClass('active').siblings().removeClass('active');
            }, function() {
            	timer = setInterval(doMove, 1500);
            })
        },

        // 处理企业定制
        dealQiye1: function(qiyeData1) {
            var _html1 = $('#qiyeTemplate1').html();
            var _htmlFn = _.template(_html1);
            var _html2 = _htmlFn({ list1: qiyeData1 });
            $('#qiyeList').append(_html2);
        },
        dealQiye2: function(qiyeData2) {
            var _html = $('#qiyeTemplate2').html();
            var _htmlFn = _.template(_html);
            var _html3 = _htmlFn({ list2: qiyeData2 });
            $('#qiyeList').append(_html3);
        },

        // 处理个人定制
        dealPerson1: function(personData1) {
            var _html1 = $('#personTemplate1').html();
            var _htmlFn = _.template(_html1);
            var _html2 = _htmlFn({ list1: personData1 });
            $('#personList').append(_html2);
        },
        dealPerson2: function(personData2) {
            var _html = $('#personTemplate2').html();
            var _htmlFn = _.template(_html);
            var _html3 = _htmlFn({ list2: personData2 });
            $('#personList').append(_html3);
        }


    }
    Main.init();
})
