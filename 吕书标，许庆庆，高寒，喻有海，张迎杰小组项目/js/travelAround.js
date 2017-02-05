define(function(require,exports,module){
	var TravelAround = {
		init:function() {
			var that = this;
			that.getData();
			that.travelAroundSearch(event);
			that.travelAroundBannerOneMsg();
			that.travelAroundLightSidebar(event);
			that.dealNav();
            that.dealHead();
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
		getData: function() {
			var that = this;
			$.ajax({
				url: '../json/travelAround.json',
				type: "get",
				success: function(res) {
					if(res.resultCode == "0000") {
						that.travelAroundSlide(res.bannerSlideImg);
						that.travelAroundBottomSlide(res.bottomSlideImg);
						that.travelAroundGulid(res.mainGuildlist);
						that.travelAroundSelfDriving(res.selfDriving.rangDriving);
						that.dealTemplate("#msglistrigData1","#x-msglistrig-list1",res.selfDriving.viewMsg1);
						that.dealTemplate("#msglistrigData2","#x-msglistrig-list2",res.selfDriving.viewMsg2);
						that.dealTemplate("#msglistrigData3","#x-msglistrig-list3",res.selfDriving.viewMsg3);
					}else{
						alert("数据获取失败");
					}
				}
			})
		},
		dealTemplate:function(child,parent,data) {
			var _html = $(child).html();
			var _htmlfn = _.template(_html);
			var _html2 = _htmlfn({ list:data });
			$(parent).html(_html2);
		},
		//顶部主搜索框部分
		travelAroundSearch: function(event) {
			$(document).scroll(function(event) {
				var currentTop = $(document).scrollTop();
				if(currentTop >= 180 ){
					$('#x-ta-search').addClass('active1');
				}else{
					$('#x-ta-search').removeClass('active1');
				}
			});
			$('#henan').hover(function(event) {
				$('#x-ta-citymenu').show();
			},function(){
				$('#x-ta-citymenu').hide();
			});
			$('#x-ta-citymenu').mouseenter(function(event) {
				$('#x-ta-citymenu').show();
			});
			$('#x-ta-citymenu').mouseleave(function(event) {
				$('#x-ta-citymenu').hide();
			});
			$('#x-ta-citymenu>li').click(function(){
				var valueCity = $(this).children('a').html();
				$('#x-ta-input').val(valueCity);
			})
		},
		//banner区轮播图部分
		travelAroundSlide: function(bannerSlideData) {
			var that = this;
			that.dealTemplate("#bannerSlideData","#x-ta-slideimg",bannerSlideData);
			var timer = null;
			var index = 0;
			timer = setInterval(startMove,2000);
			function startMove(){
				//对应的li添加高亮，其他的li非高亮
				$('#x-slide-indicator>li').eq(index).addClass('active5').siblings().removeClass('active5');
				$('#x-ta-slideimg>img').eq(index).show().siblings().hide();
				index++;
				if(index == 9){
					index = 0;
				}
			}
			$('#x-slide-indicator>li').hover(function(){
				clearInterval(timer);
	            //获取鼠标移上去的li的次序
	            index  = $(this).index();
	            //高亮显示
	           $('#x-slide-indicator>li').eq(index).addClass('active5').siblings().removeClass('active5');
	           $('#x-ta-slideimg>img').eq(index).show().siblings().hide();
			},function(){
	            index = $(this).index();
	            timer = setInterval(startMove,2000);
			});
		},
		//底部推拉轮播图
		travelAroundBottomSlide: function(bottomSlideData) {
			var that = this;
			that.dealTemplate("#bottomSlideData","#x-tag-imglist",bottomSlideData);
			$('#x-tag-imglist>li').mouseenter(function(event) {
				$(this).children('section').addClass('active12').removeClass('active13');
				$(this).stop(true).animate({"width":"330px"}).siblings().stop(true).animate({"width":"138px"});
			});
			$('#x-tag-imglist>li').mouseleave(function(event){
				$(this).children('section').addClass('active13').removeClass('active12');
			});
		},
		travelAroundGulid: function(mainGuildlist){
			var that = this;
			that.dealTemplate("#mainGuildlistData","#x-ta-guild",mainGuildlist);
		},
		//页面左侧导航条部分
		travelAroundLightSidebar: function(event) {
			var rightSelidebarLi = $('#x-ta-fixedmenu>li');
			$(document).scroll(function(event) {
				var currentTop2 = $(document).scrollTop();
				console.log(currentTop2);
				if(currentTop2 >= 400){
					$('#x-ta-fixedmenu').removeClass('active3');
					$('#x-ta-fixedmenu').addClass('active2');
				}else{
					$('#x-ta-fixedmenu').css({"top": (530-currentTop2)+"px"});
					$('#x-ta-fixedmenu').removeClass('active2');
					$('#x-ta-fixedmenu').addClass('active3');
				}
				if(currentTop2<=600){
					rightSelidebarLi.eq(0).addClass('active4').siblings().removeClass('active4');
				}else if(currentTop2>=600&&currentTop2<=1000){
					rightSelidebarLi.eq(1).addClass('active4').siblings().removeClass('active4');
				}else if(currentTop2>=1000&&currentTop2<=1400){
					rightSelidebarLi.eq(2).addClass('active4').siblings().removeClass('active4');
				}else if(currentTop2>=1400&&currentTop2<=1800){
					rightSelidebarLi.eq(3).addClass('active4').siblings().removeClass('active4');
				}else if(currentTop2>=1800&&currentTop2<=2100){
					rightSelidebarLi.eq(4).addClass('active4').siblings().removeClass('active4');
				}else if(currentTop2>=2150){
					rightSelidebarLi.eq(5).addClass('active4').siblings().removeClass('active4');
				}
			});
			rightSelidebarLi.eq(0).click(function(){
				$(document).scrollTop(400);
			});
			rightSelidebarLi.eq(1).click(function(){
				$(document).scrollTop(880);
			});
			rightSelidebarLi.eq(2).click(function(){
				$(document).scrollTop(1250);
			});
			rightSelidebarLi.eq(3).click(function(){
				$(document).scrollTop(1620);
			});
			rightSelidebarLi.eq(4).click(function(){
				$(document).scrollTop(2000);
			});
			rightSelidebarLi.eq(5).click(function(){
				$(document).scrollTop(2350);
			});
		},
		//轮播图左侧信息导航区
		travelAroundBannerOneMsg: function(){
			$('#x-ta-boleftul>li').eq(1).mouseenter(function(event) {
				$('#x-ta-hideguid1').show();
			});
			$('#x-ta-boleftul>li').eq(1).mouseleave(function(event) {
				$('#x-ta-hideguid1').hide();
			});
			$('#x-ta-hideguid1').hover(function(){
				$('#x-ta-hideguid1').show();
			},function(){
				$('#x-ta-hideguid1').hide();
			});
			$('#x-ta-boleftul>li').eq(2).mouseenter(function(event) {
				$('#x-ta-hideguid2').show();
			});
			$('#x-ta-boleftul>li').eq(2).mouseleave(function(event) {
				$('#x-ta-hideguid2').hide();
			});
			$('#x-ta-hideguid2').hover(function(){
				$('#x-ta-hideguid2').show();
			},function(){
				$('#x-ta-hideguid2').hide();
			});
			$('#x-ta-boleftul>li').eq(3).mouseenter(function(event) {
				$('#x-ta-hideguid3').show();
			});
			$('#x-ta-boleftul>li').eq(3).mouseleave(function(event) {
				$('#x-ta-hideguid3').hide();
			});
			$('#x-ta-hideguid3').hover(function(){
				$('#x-ta-hideguid3').show();
			},function(){
				$('#x-ta-hideguid3').hide();
			});
		},
		//BannerTwo I Love 自驾切换部分
		travelAroundSelfDriving: function (rangDriving){
			var that = this;
			that.dealTemplate("#rangDrivingData","#x-msglist-left",rangDriving);
			$('#x-msglist-right>ul').eq(0).show().siblings().hide();
			$('#x-msglist-left>p').eq(0).click(function(){
				$('#x-msglist-left>p').eq(0).addClass('active6').siblings().removeClass('active6');
				$('#x-msglist-right>ul').eq(0).show().siblings().hide();
			});
			$('#x-msglist-left>p').eq(1).click(function(){
				$('#x-msglist-left>p').eq(1).addClass('active6').siblings().removeClass('active6');
				$('#x-msglist-right>ul').eq(1).show().siblings().hide();
			});
			$('#x-msglist-left>p').eq(2).click(function(){
				$('#x-msglist-left>p').eq(2).addClass('active6').siblings().removeClass('active6');
				$('#x-msglist-right>ul').eq(2).show().siblings().hide();
			});
		}
	}
	module.exports = TravelAround;
});








