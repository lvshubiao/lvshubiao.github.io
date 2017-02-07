$(function(){
	// 音乐播放
    $('.music-img').click(function() {
        if ($('audio')[0].paused ){
            $('audio')[0].play();
        } else {
            $('audio')[0].pause(); // 暂停
        }
    })
    // 开始诊脉按钮
    $('.start-btn').click(function() {
        $('.page-index').hide();
        $('.page-changed').show();
    })
    // 第一页
    choiceAnswer(1);

    // 第二页
    choiceAnswer(2);

    // 第三页
    choiceAnswer(3);

    // 第四页
    choiceAnswer(4);

    // 第五页
    choiceAnswer(5);

    // 第六页
    // 查看药方
    $('.result-btn').click(function() {
        $('.page6>.result>.face-box').addClass('move');
    });

    // 分享（遮罩显示）
    $('.share-friends').click(function() {
        $('.mask-share').show();
    });

    // 再次诊脉
    $('.test-again').click(function() {
        $('.page1').show().siblings().hide();
        $('.page6>.result>.face-box').removeClass('move');
    });

     // 遮罩隐藏
    $('.mask-share').click(function() {
        $(this).hide();
    })

    function choiceAnswer(page) {
        var dom = '.page' + page + '>.answer>ul>li';
        $(dom).click(function() {
            var that = this;
            var curTop = $(dom).index(this);
            $(this).attr('class', 'checked').siblings().attr('class', '');
            setTimeout(function() {
                $(that).attr('class', '')
                $('.page-box>.page-changed>.page' + (page + 1)).show().siblings().hide();
            }, 300);
        });
    }

})