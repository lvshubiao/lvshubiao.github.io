define(function(require, exports, module) {
    var homePage = {
        init: function() {
            var that = this;
            that.dealHead();
            that.getSlideData();
            that.dealTab();
            that.dealMask();
            that.dealNav();
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
        getSlideData: function() {
            var that = this;
            $.ajax({
                url: './json/homePageslide.json',
                type: 'get',
                success: function(res) {
                    if (res.resultCode == '0000') {
                        that.dealSlide(res.slides);
                        that.dealHot(res.hot);
                        that.dealJingxuan(res.jingxuan);
                        that.dealZhouBian(res.zhoubian);
                        that.dealMuDi(res.mudi);
                        that.dealCJJXTitle(res.chujingtitle);
                        that.dealCJJXCon1(res.chujingcontent1);

                        that.TemplateInit(res.chujingtitle);
                        
                        // 内容
                        var con1Data = res.chujingcontent1;
                        var _html2 = $('#l-cj-contentTemplate').html();
                        var _htmlFn2 = _.template(_html2);
                        var _html3 = _htmlFn2({ list6: con1Data[0] });
                        $('#l-contentList').html(_html3);
                    }
                }
            })
        },
        dealSlide: function(slideData) {
            var _html = $('#slideTemplate').html();
            var _htmlFn = _.template(_html);
            var _html2 = _htmlFn({ list: slideData });
            $('#slideList').html(_html2);
            // 
            var showIndex = 0,
                timer = null;

            function doMove() {
                showIndex++;
                if (showIndex == slideData.length) {
                    showIndex = 0;
                }
                $('#slideList li').eq(showIndex).show().siblings().hide();
                $('.l-indicator li').eq(showIndex).addClass('active').siblings().removeClass('active');
            }
            timer = setInterval(doMove, 3000);
            $('.l-indicator li').hover(function() {
                clearInterval(timer);
                showIndex = $(this).index();
                $('#slideList li').eq(showIndex).show().siblings().hide();
                $(this).addClass('active').siblings().removeClass('active');
            }, function() {
                timer = setInterval(doMove, 3000);
            })

        },
        dealTab: function() {
            $('.l-tab .l-tabs>span').on('click', function() {
                var index = $(this).index();
                $(this).addClass('active').siblings().removeClass('active');
                $('.l-tabs-main .main').eq(index).show().siblings().hide();
                if (index == 2) {
                    $('.l-btn').addClass('l-add');
                } else {
                    $('.l-btn').removeClass('l-add');
                }
            })
        },
        dealMask: function() {
            $('.mask .l-close>img').click(function() {
                $('.mask').animate({ 'left': '-100%' }, 1000, function() {
                    $('.mask .l-small').animate({ 'left': '0' }, 500);
                })
            });
            $('.mask .l-small').click(function() {
                $(this).css({ 'left': '-55px' });
                $('.mask').animate({ 'left': '0' }, 1000);
            })
        },
        dealHot: function(hotData) {
            var that = this;
            that.dealTemplate('#hotTemplate', '#hotList', 'list', hotData);
        },
        dealTemplate: function(child, parent, list, data) {
            var _html = $(child).html();
            var _htmlFn = _.template(_html);
            var _html2 = _htmlFn({ list: data });
            $(parent).html(_html2);
        },
         TemplateInit: function(data) {
            var that = this;
            that.dealTemplate2('#l-cj-titleTemplate', '#l-cj-title-List', 'list', data, 0);
        },
        dealTemplate2: function(child, parent, list, data, index) {
            var _html = $(child).html();
            var _htmlFn = _.template(_html);
            var _html2 = _htmlFn({ list: data[index] });
            $(parent).html(_html2);
        },
        dealJingxuan: function(jingXuanData) {
            var that = this;
            that.dealTemplate('#jinxuan', '#jingxuanList', 'list', jingXuanData);
        },
        dealZhouBian: function(zhoubianData) {
            var that = this;
            that.dealTemplate('#zhoubianjinxuan', '#zhoubianjingxuanList', 'list', zhoubianData);
        },
        dealMuDi: function(mudiData) {
            var that = this;
            that.dealTemplate('#mudiTemplate', '#mudiList', 'list', mudiData);
        },
        dealCJJXTitle: function(titleData) { //处理出境精选
            var that = this;
            $('.l-chujing .l-chujing-title h3').click(function() {
                var index = $(this).index();
                that.dealTemplate2('#l-cj-titleTemplate', '#l-cj-title-List', 'list', titleData, index);
                $(this).addClass('active').siblings().removeClass('active');
            })
        },
        dealCJJXCon1: function(con1Data) {
            $('#l-cj-title-List').on('click', '>li', function() {
                var index = $(this).index();
                var _html = $('#l-cj-contentTemplate').html();
                var _htmlFn = _.template(_html);
                var _html2 = _htmlFn({ list6: con1Data[index] });
                $('#l-contentList').html(_html2);
                $(this).addClass('active').siblings().removeClass('active');
            })
        }
    }
    module.exports = homePage;
})
