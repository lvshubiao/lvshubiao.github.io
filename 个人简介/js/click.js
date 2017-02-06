 $('.txt1').click(function(event) {
     $('.content').fadeOut(1000);
     $('.aboutMe').fadeIn(1000);
 });
 $('.txt2').click(function(event) {
     $('.content').fadeOut(1000);
     $('.show').fadeIn(1000);
     //只有进入页面才执行定时器图片轮播
     timer = setInterval(change, 2000);
 });
 $('.txt3').click(function(event) {
     $('.content').fadeOut(1000);
     $('.skill').fadeIn(1000);
 });
 $('.txt4').click(function(event) {
     $('.content').fadeOut(1000);
     $('.personal').fadeIn(1000);
 });
 $('.txt5').click(function(event) {
     $('.content').fadeOut(1000);
     $('.contact').fadeIn(1000);
 });
 $('.aboutMe .txt').click(function(event) {
     $('.aboutMe').fadeOut(1000);
     $('.content').fadeIn(1000);
 });
 $('.show .txt').click(function(event) {
     $('.show').fadeOut(1000);
     $('.content').fadeIn(1000);
     // 退出页面停掉定时器
     clearInterval(timer);
 });
 $('.skill .txt').click(function(event) {
     $('.skill').fadeOut(1000);
     $('.content').fadeIn(1000);
 });
 $('.personal .txt').click(function(event) {
     $('.personal').fadeOut(1000);
     $('.content').fadeIn(1000);
 });
 $('.contact .txt').click(function(event) {
     $('.contact').fadeOut(1000);
     $('.content').fadeIn(1000);
 });
 $('.first-col4-1').click(function() {
     $('.col4-2 p').eq(0).removeClass('active').siblings().addClass('active');
     $('.first-col4-3 img').eq(2).css({ zIndex: '1' }).siblings().css({ zIndex: '0' });
     $('.fiveth-col4-1 img').css({ top: '0px' });
 });
 $('.second-col4-1').click(function() {
     $('.col4-2 p').eq(1).removeClass('active').siblings().addClass('active');
     $('.first-col4-3 img').eq(1).css({ zIndex: '1' }).siblings().css({ zIndex: '0' });
     $('.fiveth-col4-1 img').css({ top: '100px' });
 });
 $('.third-col4-1').click(function() {
     $('.col4-2 p').eq(2).removeClass('active').siblings().addClass('active');
     $('.first-col4-3 img').eq(0).css({ zIndex: '1' }).siblings().css({ zIndex: '0' });
     $('.fiveth-col4-1 img').css({ top: '200px' });
 });
