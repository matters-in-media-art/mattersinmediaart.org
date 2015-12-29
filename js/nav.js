


$( document ).ready(function() {
$('#button').click(function(){
	if ($('#nav').height() < 166) {
    $('#nav').animate({height:'166px'}, 300);
    $(this).html("Close");
} else {
	$('#nav').animate({height:'64px'}, 300);
	$(this).html("Menu");
}

    
});
});