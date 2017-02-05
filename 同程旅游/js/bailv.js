$(function() {
    var index = 1;
    var oo = {
        timer: null,
        init: function() {
            this.dealNumber();
            this.dealStop();
            this.dealVideo();
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
        dealNumber: function() {
            var that = this;
            $.ajax({
                url: '../json/bailv.json',
                data: {

                },
                success: function(res) {
                    that.dealgushi(res.gushi);
                    that.dealgushi1(res.gushi1);
                    that.dealComment(res.comments);
                    that.dealTemplate("#dd","#active",res.unit);
                    that.dealTemplate("#aa","#ullList",res.slides);
                    that.dealTemplate("#ee","#vipList",res.vip);
                    
                   
                },
                error: function(err) {
                    alert('error');
                }
            })
        },
        dealString: function(id,aim,num) {
            $(id).each(function(index, ele) {
                var _html = $(ele).html();
                if (_html.length > aim) {
                    $(ele).html(_html.toString().substr(0, num) + ".....");
                }
            });
        },
        dealgushi: function(gushi) {
            this.dealTemplate("#bb","#codeList",gushi);
            this.dealMask();
            this.dealMove();
            this.dealString(".gg-text",10,20);
        },
        dealgushi1:function(gushi1){
          this.dealTemplate("#cc","#codeList1",gushi1);
          this.dealString(".gg-text",10,20);
        },
        dealTemplate:function(child,parent,num){
           var _html = $(child).html();
           var _htmlfn = _.template(_html);
           var kk = _htmlfn({ list: num });
           $(parent).html(kk);
        },
        dealMask: function() {
            $(".divmask").mouseover(function() {
                $(this).find($(".zhezhao")).stop().animate({
                    top: '0px'
                })
            });
            $(".divmask").mouseout(function() {
                $(this).find($(".zhezhao")).stop().animate({
                    top: '131px'
                })
            });
        },
        dealComment: function(comments) {
            this.dealTemplate("#ff","#ul",comments);
            $(".strmove").html($(".strmove").html() + $(".strmove").html());
            this.dealString(".strmove>li>p",40,70);
            this.dealGundong();
        },
        dealGundong: function() {
            this.timer = setInterval(function() {
                var current = parseInt($(".strmove").css("top"));
                $("#ul").css({
                    top: current - 1 + 'px'
                });
                if (current == -$(".strmove").height() / 2) {
                    $("#ul").css({
                        top: 0 + 'px'
                    });
                }
            }, 20);
        },
        dealStop: function() {
            var that = this;
            $("#box").mouseover(function() {
                clearInterval(that.timer);
            });
            $("#box").mouseout(function() {
                that.dealGundong();
            });
        },
        dealMove: function(e) {
            $(".toRight").click(function() {
                if (index >= 6) {
                    index = 6;
                }
                $(".imgList").animate({
                    left: -211 * index + 'px'
                });
                index++;
            });
            $(".toLeft").click(function(e) {
                index--;
                if (index <= 0) {
                    index = 0;
                }
                $(".imgList").animate({
                    left: -211 * index + 'px'
                });

            });
        },
        dealVideo:function(){
            $(".video_in").click(function(){
                $(".mask").hide();
                $(".play").hide();
                $(".videoimg").hide();
                $("video")[0].play();
            })
        }
    }
    oo.init();
});





















// window.onload = function() {
//     var liList = document.querySelectorAll(".strmove li");
//     var ul = document.getElementById("ul");
//     var box = document.getElementById("box");
//     var timer = null;

//     ul.innerHTML = ul.innerHTML + ul.innerHTML;
//     timer = setInterval(function() {
//         var current = parseInt(getStyle(ul, "top"));
//         if (current == -ul.clientHeight / 2) {
//             ul.style.top = 0;
//         } else {
//             ul.style.top = current - 1 + 'px';
//         }
//     }, 10);
//     box.onmouseover = function() {
//         clearInterval(timer);
//     }
//     box.onmouseout = function() {
//         timer = setInterval(function() {
//             var current = parseInt(getStyle(ul, "top"));
//             if (current == -ul.clientHeight / 2) {
//                 ul.style.top = 0;
//             } else {
//                 ul.style.top = current - 1 + 'px';
//             }
//         }, 10);
//     };

//     function getStyle(ele, stylename) {
//         if (ele.currentStyle) {
//             return ele.currentStyle[stylename];
//         } else {
//             return getComputedStyle(ele, false)[stylename];
//         }
//     }
// }
