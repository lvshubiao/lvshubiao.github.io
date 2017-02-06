$(function() {
    var mySwiper = new Swiper('.swiper-container', {
        mousewheelControl: true,
        watchSlidesProgress: true,
        mousewheelForceToAxis: true,
        direction: 'vertical',
        // loop: true,

        // 如果需要分页器
        // pagination: '.swiper-pagination',
        onSlideChangeEnd: function(swiper) {
            var index = swiper.activeIndex;
            if (index == 1) { //第二页 index从0开始
                $('.desc-1').stop(true, true).show(500, function() {
                    $('.desc-2').show(500, function() {
                        $('.desc-3').show(500);
                    })
                })
            } else {
                $('.desc-1').hide();
                $('.desc-2').hide();
                $('.desc-3').hide();
            }
            if (index == 2) {
                $('.s3-1').animate({ 'right': '0px' }, 500);
                $('.s3 .desc').slideDown(500);
            } else {
                $('.s3-1').animate({ 'right': '-3.125rem' }, 500);
                $('.s3 .desc').slideUp(500);
            }
            if (index == 3) {
                $('.s4-4').animate({ 'bottom': '-0.625rem' }, 500);
                $('.s4 .desc').slideDown(500);
            } else {
                $('.s4-4').css({ 'bottom': '-100%' }, 500);
                $('.s4 .desc').slideUp(500);
            }
            if (index == 4) {
                $('.s5-3').fadeIn(500);
            } else {
                $('.s5-3').fadeOut(500);
            }
        }
    })
    mySwiper.progress;
    mySwiper.slides[1].progress;
})
