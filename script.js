$(window).scroll(function(e) {

    var distanceScrolled = $(this).scrollTop();

    $('.header').css('-webkit-filter', 'blur('+distanceScrolled/60+'px)');

});