$(function() {
    var index = 0
    var timer = null;
    var timer1 = null;
    var hours = 12;
    var minutes = 60;
    var seconds = 60;
    var oo1 = {
        init: function() {
            this.dealAjax();
            this.dealTab(".hangxian li", ".good-info");
            this.dealTime();
            this.dealScroll();
            this.dealNav();
            this.dealHead();
            
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
        dealAjax: function() {
            var that = this;
            $.ajax({
                url: '../json/youlun.json',
                data: {},
                success: function(res) {
                    that.dealNews(res.news);
                    that.dealTemai(res.special);
                    that.dealLunboimg(res.slides,res.lvyou,res.xiangqing);
                    that.dealInfo("#info1", res.info);
                    that.dealInfo("#info2", res.info1);
                    that.dealInfo("#info3", res.info2);
                    that.dealGonglue("#youji", res.youji1);
                    that.dealGonglue("#youji1", res.youji2);
                    that.dealGonglue("#youji2", res.youji3);
                    that.dealGonglue("#youji3", res.youji4);
                    that.dealTitle(res.title);
                    that.dealYoulun(res.youlun);
                    that.dealEnd(res.end);
                    that.dealHaiyang(res.haiyang);
                    that.dealVideo();
                },
                error: function() {
                    console.log("失败");
                }
            })
        },
        dealNews: function(news) {
            var _html = $("#news").html();
            var _htmlfn = _.template(_html);
            var aa1 = _htmlfn({ list: news });
            $("#new").html(aa1);
        },
        dealTemai: function(special) {
            var that = this;
            that.dealTemplate("#temai","#scales",special);
        },
        dealString: function(element) {
            $(element).each(function(index, ele) {
                var _html = $(ele).html();
                if (_html.length > 10) {
                    $(ele).html(_html.toString().substr(0, 30) + ".....");
                }
            });
        },
        dealLunboimg: function(slides,lvyou,xiangqing) {
            var that = this;
            var _html = $("#lunbo").html();
            var _htmlfn = _.template(_html);
            var aa3 = _htmlfn({ arr2: slides,arr7:lvyou,arr8:xiangqing});
            $("#lun").html(aa3);
            $(".lunbo img").eq(0).show().siblings().filter("img").hide();
            timer = setInterval(that.dealLunbo, 1000);
            $(".indicator>li").mouseover(function() {
                clearInterval(timer);
                index = $(this).index();
                $(".lunbo>img").eq(index).show().siblings().filter("img").hide();
                $(this).addClass("active").siblings().removeClass("active");
            });
            $(".indicator>li").mouseout(function() {
                timer = setInterval(that.dealLunbo, 1000);
            });
            that.dealNav();

        },
        dealLunbo: function() {
            $(".lunbo>img").eq(index).show().siblings().filter("img").hide();
            $(".indicator>li").eq(index).addClass("active").siblings().removeClass("active");
            index++;
            if (index == 3) {
                index = 0
            }
        },
        dealInfo: function(id, info) {
            var that = this;
            this.dealTemplate("#info",id,info);
            this.dealString("p.text1");
            $(".good-info").eq(0).show().siblings().filter(".show").hide();
        },
        dealGonglue: function(id, gonglue) {
            this.dealTemplate("#gong",id,gonglue)
            this.dealString(".ttxt2");
        },
        dealTab: function(id1, id2) {
            $(id1).click(function() {
                var showIndex = $(this).index();
                $(id2).eq(showIndex).show().siblings().filter(".show").hide();
            })
        },
        dealTitle: function(title) {
            this.dealTemplate("#lil","#ultitle",title);
            var that = this;
            $(".travel-info").eq(0).show().siblings().filter(".show").hide();
            that.dealTab(".cruise-tab1 li", ".travel-info");

        },
        dealYoulun: function(youlun) {
            this.dealTemplate("#ylun","#youlun",youlun);
        },
        dealTime: function() {
            timer1 = setInterval(function() {
                seconds = seconds - 1;
                $(".seconds").html(seconds);
                if (seconds < 10) {
                    $(".seconds").html("0" + seconds);
                }
                if (seconds == 0) {
                    minutes = minutes - 1;
                    if (minutes == 0) {
                        hours = hours - 1;
                        $(".hours").html(hours);
                        minutes = 60;
                        seconds = 60;
                        if (hours == 0) {
                            clearInterval(timer1);
                        }
                    } else {
                        $(".minutes").html(minutes);
                    }
                    seconds = 60;
                }
            }, 1000)
        },
        dealScroll: function() {
            $(document).scroll(function() {
                var sctop = $(this).scrollTop();
                if (sctop >= 400) {
                    $(".tishi").eq(0).css({ display: "block" });
                    $(".tishi>li").eq(0).addClass("liactive").siblings().removeClass("liactive");
                } else {
                    $(".tishi").eq(0).css({ display: "none" });
                }
                if (sctop >= 900) {
                    $(".tishi>li").eq(1).addClass("liactive").siblings().removeClass("liactive");
                }
                if (sctop >= 1300) {
                    $(".tishi>li").eq(2).addClass("liactive").siblings().removeClass("liactive");
                }
                if (sctop >= 1800) {
                    $(".tishi>li").eq(3).addClass("liactive").siblings().removeClass("liactive");
                }
                if (sctop >= 2200) {
                    $(".tishi>li").eq(4).addClass("liactive").siblings().removeClass("liactive");
                }
            })
        },
        dealNav: function() {
            $(".ly>li").mouseover(function() {
                $(".neirong1").eq($(this).index()).show().siblings().filter(".neirong1").hide();
            });
            $(".ly>li").mouseout(function() {
                $(".neirong1").hide();
            });
            $(".neirong1").mouseover(function() {
                $(this).show();
            });
            $(".neirong1").mouseout(function() {
                $(this).hide();
            });
        },
        dealTemplate:function(child,parent,data){
             var _html = $(child).html();
            var _htmlfn = _.template(_html);
            var _html2 = _htmlfn({ list: data });
            $(parent).html(_html2);
        },
        dealEnd:function(end){
             this.dealTemplate("#yyh","#box1",end);
             this.dealTab(".cruise-tab>li",".bigBox");
            $(".bigBox").eq(0).show().siblings().filter(".bigBox").hide();

        },
        dealHaiyang:function(haiyang){
             this.dealTemplate("#haiyang","#bignav",haiyang);
             this.dealTab(".cruise-tab>li",".nav");
            $(".nav").eq(0).show().siblings().filter(".nav").hide();

        },
        dealVideo:function(){
            $(".video").click(function(){
                console.log("aa");
                $(".bigmask").css({display:"block"})
            });
            $(".bigmask").on("click",".button",(function(e){
                $(".bigmask").css({display:"none"});
                 e.stopPropagation();
            }))
        }
    };
    oo1.init();
})
