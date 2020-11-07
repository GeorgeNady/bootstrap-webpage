$(function () {
    'use strict';
    // adjust slider hight
    var winH    = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight(); 
    $('.slider , .carousel-item').height(winH - (upperH + navH));

    // work shuffel
    $('.work ul li').on('click', function () {

        $(this).addClass('active').siblings().removeClass('active');

        if($(this).data('class') === 'all') {
            $('.shuffel-images .col-md').css('opacity', 1).css('transition', 'all .5s ease-in-out');
        } else {
            $('.shuffel-images .col-md').css('opacity', '0.09').css('transition', 'all .5s ease-in-out');
            $($(this).data('class')).parent().css('opacity',1).css('transition', 'all .5s ease-in-out');
        }
        
    });
});