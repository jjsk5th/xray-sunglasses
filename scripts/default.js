$(document).ready(function (){


});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 800) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});