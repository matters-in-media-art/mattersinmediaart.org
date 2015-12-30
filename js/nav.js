


$( document ).ready(function() {


    $('#menubutton').click(function(){
    	if ($('#nav').height() < 100) {
            $('#nav').stop().animate({height:'166px'}, 300);
            $(this).html("Close");
            $('#nav-pages').stop().animate({opacity:'1'},500);
        }
        else {
    	   $('#nav').animate({height:'64px'}, 300);
    	   $('#nav-pages').stop().animate({opacity:'0'},500);
    	   $(this).html("Menu");
        }
    });


    $(window).scroll(function(){

        if ($(document).scrollTop() > 166){
            $('#nav').stop().animate({height:'64px'}, 300);
            $('#nav-pages').stop().animate({opacity:'0'},500);
            $('#menubutton').stop().animate({opacity:'1'},500);
            $('#menubutton').html("Menu");
        }
        else if ($(document).scrollTop() < 166){
            $('#nav').stop().animate({height:'166px'}, 300);
            $('#nav-pages').stop().animate({opacity:'1'},500);
            $('#menubutton').stop().animate({opacity:'0'},500);
        }

       	// if ($('#nav').height() > 100) {
        //     $('#nav').animate({height:'64px'}, 400);
        //     $('#menubutton').html("Menu");
        // }    
    });


});