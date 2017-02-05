define(function(require, exports, module) {
    var Main = {
        init: function() {
            var that = this;
            that.dealNav();
            that.dealHead();
            that.dealSlides();
            that.dealwufeng();
            that.getData();
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

            function doMove() {
                showIndex++;
                if (showIndex == $('.carousel-ul-wrap>ul li').length) {
                    showIndex = 0;
                }
                $('.carousel-ul-wrap>ul').stop(true,true).animate({ "left": -showIndex * 840 + 'px' });
                $('.carousel-nav li').eq(showIndex).addClass('current').siblings().removeClass('current');

            }
            timer = setInterval(doMove, 3000);
            $('.carousel-nav li').hover(function() {
                clearInterval(timer);
                showIndex = $(this).index();
                $('.carousel-ul-wrap>ul').stop(true,true).animate({ "left": -showIndex * 840 + 'px' });
                $(this).addClass('current').siblings().removeClass('current');

            }, function() {
                timer = setInterval(doMove, 3000);
            })
        },
        dealwufeng: function() {
            $('.carousel-ul-z>ul').css({ 'left': '-1260px' });
            $('.carousel-ul-z').hover(function() {
                $('.carousel-ul-z>a.left').show();
                $('.carousel-ul-z>a.right').show();
            }, function() {
                $('.carousel-ul-z>a.left').hide();
                $('.carousel-ul-z>a.right').hide();
            });
            $('.carousel-ul-z>a.left').hover(function() {
                $(this).css({ 'background': '#5a6666' });
            }, function() {
                $(this).css({ 'background': '#9eb1b2' });
            });
            $('.carousel-ul-z>a.right').hover(function() {
                $(this).css({ 'background': '#5a6666' });
            }, function() {
                $(this).css({ 'background': '#9eb1b2' });
            });
            $('.carousel-ul-z>a.left').click(function() {
                var left = $('.carousel-ul-z>ul').css('left');
                var width = $('.carousel-ul-z>ul').css('width');
                var curLeft = parseInt(left) + 210;

                if (curLeft >= 0) {
                    $('.carousel-ul-z>ul').stop(true,true).animate({ 'left': '0px' }, function() {
                        $('.carousel-ul-z>ul').css({ 'left': '-1260px' });
                    });
                    return;
                }

                $('.carousel-ul-z>ul').animate({ 'left': curLeft + "px" });
            });
            $('.carousel-ul-z>a.right').click(function() {
                var left = $('.carousel-ul-z>ul').css('left');
                var width = $('.carousel-ul-z>ul').css('width');
                var curLeft = parseInt(left) - 210;
                if (parseInt(left) <= -1260) {
                    $('.carousel-ul-z>ul').stop(true,true).animate({ 'left': '-1260px' }, function() {
                        $('.carousel-ul-z>ul').css({ 'left': '0px' });
                    });
                    return;
                }
                $('.carousel-ul-z>ul').animate({ 'left': curLeft + "px" });

            })
        },
        getData: function() {
            var that = this;
            $.ajax({
                url: '../json/chujing.json',
                type: 'get',
                success: function(res) {
                    if (res.resultCode == '0000') {
                        that.dealHtml(res.proline);
                        that.dealHtml1(res.proline);
                        that.TemplateInit(res.proline);
                    }
                }
            })
        },
        dealHtml: function(prolineData) {
            var that = this;
            $('#area>ul>li').click(function() {
                var index = $(this).index();
                that.dealTemplate('#proTemplate', '#proList',  prolineData, index);
                $(this).addClass('current').siblings().removeClass('current');
            })
        },
         dealHtml1: function(prolineData) {
            var that = this;
            $('#area1>ul>li').click(function() {
                var index = $(this).index();
                that.dealTemplate('#proTemplate1', '#proList1',  prolineData, index);
                $(this).addClass('current').siblings().removeClass('current');
            })
        },
        TemplateInit: function(data) {
            var that = this;
            that.dealTemplate('#proTemplate', '#proList',  data, 0);
            that.dealTemplate('#proTemplate1', '#proList1',  data, 0);
        },
        dealTemplate: function(child, parent,  data, index) {
            var _html = $(child).html();
            var _htmlFn = _.template(_html);
            var _html2 = _htmlFn({ list: data[index] });
            $(parent).html(_html2);
        }
    }

    module.exports = Main;
})
