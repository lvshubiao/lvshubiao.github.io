    var index = 1;
    $(function() {
        var music = document.getElementById("music");
        var audio = document.getElementById("audio");
        $(".mark3").addClass("mark3-active");
        music.onclick = function() {
            if (audio.paused) {
                audio.play();
                $(".mark3").addClass("mark3-active");
            } else {
                audio.pause();
                $(".mark3").removeClass("mark3-active");

            }
        };
        $(".letter2").animate({
            left: '2.625rem'
        });
        $("ul").eq(index).show().siblings().hide();
        $("ul>li").click(function() {
            $(".inputBox>input").val($(this).html());

        });
        $(".change").click(function() {

            $("ul").eq(index).show().siblings().hide();
            index++;
            if (index == 4) {
                index = 0;
            }
        });
        $("button").click(function() {
            $(".mask").addClass("maska");
            $(".maska").click(function() {
                $(".mask").removeClass("maska");
            })
        });
        var clientY = document.documentElement.clientHeight;
        $(window).resize(function(){
            var clientYy = document.documentElement.clientHeight;
            if(clientYy<clientY){
                $(".code").hide();
                $(".ull").hide();
                $(".change").hide();
                $(".ma").hide();
            }else{
                $(".code").show(); 
                $(".ull").eq(index).show().siblings().hide();
                $(".change").show();
                $(".ma").show();
            }
        })
    })
