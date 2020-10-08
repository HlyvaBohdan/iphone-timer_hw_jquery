$('.green').animate({
    height: "0px",
    backgroundColor: "red"
}, 60000, function () {
        $('.countP').text('1');
}).animate({
    height: '359px',
    backgroundColor: "green"
}, 60000, function () {
        $('.countP').text('0');
        $('body').css('background-image', 'url(https://sfhd.ru/wallpapers/2019/11/3840x2160-sfhd.ru-01963.jpg)');
        $('.container').css('display', 'none');
})


