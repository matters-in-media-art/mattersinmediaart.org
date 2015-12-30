


$( document ).ready(function() {


$('#menubutton').click(function(){
	if ($('#nav').height() < 100) {
    $('#nav').animate({height:'166px'}, 300);
    $(this).html("Close");
    $('#nav-pages').animate({opacity:'1'},500);
} else {
	$('#nav').animate({height:'64px'}, 300);
	$('#nav-pages').animate({opacity:'0'},500);
	$(this).html("Menu");
}

    
});


    $(window).scroll(function(){
           	if ($('#nav').height() > 100) {
    $('#nav').animate({height:'64px'}, 400);
    $('#menubutton').html("Menu");
}    
            });

});