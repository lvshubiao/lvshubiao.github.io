    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: false,
        pagination: '.swiper-pagination',
        onSlideChangeEnd: function(swiper) {
            if (swiper.activeIndex == 0) {
                $(".end").addClass("circle");
                $(".circle").removeClass("end");
                $(".letter2").animate({
                    left: '2.625rem'
                })
            } else {
                $(".circle").addClass("end");
                $(".end").removeClass("circle");
                $(".letter2").animate({
                    left: '-5rem'
                })
            }
            if (swiper.activeIndex == 1) {

                $(".vv").addClass("show");
                $(".show").removeClass("vv");
                $(".text2").animate({
                    'left': '2.5rem'
                })

            } else {
                $(".show").addClass("vv");
                $(".vv").removeClass("show");
                $(".text2").animate({
                    'left': '10rem'
                })
            }
            if (swiper.activeIndex == 2) {
                $(".ufo").addClass("ufo1");
                $(".text4").animate({
                    opacity: "1"
                })
            } else {
                $(".ufo1").removeClass("ufo1");
                $(".text4").animate({
                    opacity: "0"
                })
            }
            if (swiper.activeIndex == 3) {
                $(".text5").animate({
                    left: '2rem'
                })
            } else {
                $(".text5").animate({
                    left: '-6rem'
                })
            }
            if (swiper.activeIndex == 4) {
                $(".laji").addClass("lji");
                $(".lji").removeClass("laji");
                $(".text6").animate({
                    opacity: "1"
                })

            } else {
                $(".lji").addClass("laji");
                $(".text6").animate({
                    opacity: "0"
                })

            }
            if (swiper.activeIndex == 5) {
                $(".zoo").addClass("zoom");
                $(".zoom").removeClass("zoo");
                $(".text7").animate({
                    left: "2rem"
                })
            } else {
                $(".zoom").addClass("zoo");
                $(".zoo").removeClass("zoom");
                $(".text7").animate({
                    left: "10rem"
                })
            }
            if (swiper.activeIndex == 6) {
                $(".xqBo").addClass("xqBox");
                $(".xqBox").removeClass("xqBo");
                $(".text8").animate({
                    left: '2.5rem'
                })
            } else {
                $(".xqBox").addClass("xqBo");
                $(".xqBo").removeClass("xqBox");
                $(".text8").animate({
                    left: '-5rem'
                })
            }
            if (swiper.activeIndex != 8) {
                $(".mask").removeClass("maska");
            }
        }
    })