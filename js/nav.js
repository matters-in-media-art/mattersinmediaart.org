


$( document ).ready(function() {

    $('.scrollspy').scrollSpy();

// initial check in case doc is loading already scrolled down the page...
        if ($(document).scrollTop() > 140){
            $('#nav').stop().animate({height:'64px'}, 0);
            $('#nav-pages').stop().animate({opacity:'0'},0);
            $('#menubutton').stop().animate({opacity:'1'},0);
            $('#menubutton').html("Menu");
        }
        else if ($(document).scrollTop() < 145){
            $('#nav').stop().animate({height:'166px'}, 0);
            $('#nav-pages').stop().animate({opacity:'1'},0);
            $('#menubutton').stop().animate({opacity:'0'},0);
        }

// when the menu / close button is clicked
    $('#menubutton').click(function(){
    	if ($('#nav').height() < 100) {
            $('#nav').stop().animate({height:'166px'}, 300);
            $(this).html("Close");
            $('#nav-pages').stop().animate({opacity:'1'},500);
            $('.contextualmenu').stop().animate({opacity:'0'},300);
        }
        else {
    	   $('#nav').animate({height:'64px'}, 300);
    	   $('#nav-pages').stop().animate({opacity:'0'},500);
           $('.contextualmenu').stop().animate({opacity:'1'},300);
    	   $(this).html("Menu");
        }
    });

// when the user scrolls
    $(window).scroll(function(){

        if ($(document).scrollTop() > 140){
            $('#nav').stop().animate({height:'64px'}, 200);
            $('#nav-pages').stop().animate({opacity:'0'},300);
            $('#menubutton').stop().animate({opacity:'1'},300);
            $('.contextualmenu').stop().animate({opacity:'1'},300);
            $('#menubutton').html("Menu");
        }
        else if ($(document).scrollTop() < 145){
            $('#nav').stop().animate({height:'166px'}, 100);
            $('#nav-pages').stop().animate({opacity:'1'},200);
            $('#menubutton').stop().animate({opacity:'0'},200);
            $('.contextualmenu').stop().animate({opacity:'0'},300);
        }
    });
});