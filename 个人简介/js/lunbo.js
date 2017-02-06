var timer = setInterval(change, 1000);
clearInterval(timer);
var index = 3;

function change() {
    $('.col2-2 img').eq(index).css({ zIndex: '1' }).siblings().css({ zIndex: '0' });
    $('#leftImg').css({ top: 115 * (3 - index) + 'px' });
    index--;
    if (index < 0) {
        index = 3;
    }
}
