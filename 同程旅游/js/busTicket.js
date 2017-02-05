define(function(require, exports, module) {
    var BusTicket = {
        init: function() {
            var that = this;
            that.getData();
            that.busTicketSelectCity();
            that.busTicketCityIndex();
            that.dealNav();
            that.dealHead();
        },
        getData: function() {
            var that = this;
            $.ajax({
                url: '../json/busTicket.json',
                type: 'get',
                success: function(res) {
                    if (res.resultCode == '0000') {
                    	var img = res.imgList;
                        that.dealSlide(res.slide);
                        that.playAroundImgList(img);
                        console.log(res.imgList);
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
        dealTemplate:function(child,parent,data){
        	var _html = $(child).html();
            var _htmlfn = _.template(_html);
            var _html2 = _htmlfn({ list:data });
            $(parent).html(_html2);
        },
        dealSlide: function(slidedata) {
            var that = this;
            that.dealTemplate('#slideTemplate','#x-slide-img',slidedata);
            var timer = null;
            var index = 0;
            timer = setInterval(startMove, 2000);
            function startMove() {
                //对应的li添加高亮，其他的li非高亮
                $('#x-slide-indicator>li').eq(index).addClass('active5').siblings().removeClass('active5');
                $('#x-slide-img>img').eq(index).show().siblings().hide();
                index++;
                if (index == 2) {
                    index = 0;
                }
            }
            $('#x-slide-indicator>li').hover(function() {
                clearInterval(timer);
                //获取鼠标移上去的li的次序
                index = $(this).index();
                //高亮显示
                $('#x-slide-indicator>li').eq(index).addClass('active5').siblings().removeClass('active5');
                $('#x-slide-img>img').eq(index).show().siblings().hide();
            }, function() {
                index = $(this).index();
                timer = setInterval(startMove, 2000);
            });
        },
        playAroundImgList:function(imgListData) {
        	var that = this;
        	that.dealTemplate('#playAroundImgData','#x-playaround-imglist',imgListData);
        },
        busTicketSelectCity: function() {
            var $searchHideMenu = $('#x-search-hidemenu');
            var $hideMenuInput = $('.x-search-frominput');
            function hideSearchAndClick() {
                $searchHideMenu.hide();
                $('.x-search-hidemenuCity').find('span').off('click');
            };
            //选择城市框（初始隐藏）隐藏出现 关闭
            hideSearchAndClick();
            //点击城市菜单右上"X"关闭
            $('#x-hidemenu-close').click(function() {
                hideSearchAndClick()
            });
            $('#x-search-fromcity').blur(function() {
                $(this).removeClass('active4');
            });
            $('#x-search-tocity').blur(function() {
                $(this).removeClass('active4');
            });
            $('#x-search-data').blur(function() {
                $(this).removeClass('active4');
            });
            $('#x-search-fromcity').focus(function() {
                $searchHideMenu.removeClass('active2').addClass('active1').show();
                $('#x-search-fromcity').addClass('active4');
                $('.x-search-hidemenuCity').find('span').click(function() {
                    $('#x-search-fromcity').val($(this).text());
                });
            });
            $('#x-search-tocity').focus(function() {
                $searchHideMenu.removeClass('active1').addClass('active2').show();
                $('#x-search-tocity').addClass('active4');
                $('.x-search-hidemenuCity').find('span').click(function() {
                    $('#x-search-tocity').val($(this).text());
                });
            });
            $('#x-search-data').focus(function() {
                $('#x-search-data').addClass('active4');
            });
        },
        busTicketCityIndex: function() {
            var $hideMenuCity = $('.x-search-hidemenuCity');
            var $hideMenuTitleChild = $('.x-search-hidemenuTitle').children();
            $hideMenuCity.not('.x-menuhot').hide();
            $('#x-menuhot').click(function() {
                $hideMenuCity.siblings('.x-menuhot').show().siblings().hide();
                $hideMenuTitleChild.filter('#x-menuhot').addClass('active3');
                $hideMenuTitleChild.not('#x-menuhot').removeClass('active3');
            });
            $('#x-menu-ABCDE').click(function() {
                $hideMenuCity.filter('.x-menu-ABCDE').show()
                $hideMenuCity.not('.x-menu-ABCDE').hide();
                $hideMenuTitleChild.filter('#x-menu-ABCDE').addClass('active3');
                $hideMenuTitleChild.not('#x-menu-ABCDE').removeClass('active3');
            });
            $('#x-menu-FGHJ').click(function() {
                $hideMenuCity.filter('.x-menu-FGHJ').show()
                $hideMenuCity.not('.x-menu-FGHJ').hide();
                $hideMenuTitleChild.filter('#x-menu-FGHJ').addClass('active3');
                $hideMenuTitleChild.not('#x-menu-FGHJ').removeClass('active3');
            });
            $('#x-menu-KLMNP').click(function() {
                $hideMenuCity.filter('.x-menu-KLMNP').show()
                $hideMenuCity.not('.x-menu-KLMNP').hide();
                $hideMenuTitleChild.filter('#x-menu-KLMNP').addClass('active3');
                $hideMenuTitleChild.not('#x-menu-KLMNP').removeClass('active3');
            });
            $('#x-menu-QRST').click(function() {
                $hideMenuCity.filter('.x-menu-QRST').show()
                $hideMenuCity.not('.x-menu-QRST').hide();
                $hideMenuTitleChild.filter('#x-menu-QRST').addClass('active3');
                $hideMenuTitleChild.not('#x-menu-QRST').removeClass('active3');
            });
            $('#x-menu-WXYZ').click(function() {
                $hideMenuCity.filter('.x-menu-WXYZ').show()
                $hideMenuCity.not('.x-menu-WXYZ').hide();
                $hideMenuTitleChild.filter('#x-menu-WXYZ').addClass('active3');
                $hideMenuTitleChild.not('#x-menu-WXYZ').removeClass('active3');
            });
        }
    }
    module.exports = BusTicket;
})
