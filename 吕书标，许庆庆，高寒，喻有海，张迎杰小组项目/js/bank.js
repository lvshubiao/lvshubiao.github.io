$(function(){
	$('.download').hover(function(){
		$(this).addClass('download-hover').siblings('.download-content').css({'display':'block'});
	},function(){
		$(this).removeClass('download-hover').siblings('.download-content').css({'display':'none'});
	});
	$('.weixin').hover(function(){
		$('.z-icon').addClass('weixin-hover').parent('.weixin').siblings('.weixin-content').css({'display':'block'});
	},function(){
		$('.z-icon').removeClass('weixin-hover').parent('.weixin').siblings('.weixin-content').css({'display':'none'});
	});
	var Main = {
		init:function(){
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
        }
	}
	Main.init();
})