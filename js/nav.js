


$( document ).ready(function() {
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('.brand-logo').stop().animate({'margin-left':'-44px'},0);

    var url = window.location.pathname;
    console.log (url);

    $( "ul.main-nav > li > a" ).each(function( index ) {
        link = $( this ).attr('href');
        li = $(this);
        console.log(li);
        if ( url == link){
            $(this).addClass('hoverclass');
        }
    });

    $('#backtotop').click(function(){
               $("html, body").animate({ scrollTop: 0 }, "fast");
  return false;
            });

// var waypoint = new Waypoint({
//   element: document.getElementsByClassName('scrollspy'),
//   handler: function(direction) {
//     console.log(this);
//     var key = this.key.substr(9);
//     var element = this.element[key];
//     var elementID = element.id;
//     console.log(elementID);
//     var menuID = 'menu-'+elementID;
//     console.log(menuID);
//     var menuItem = document.getElementById(menuID);
//     menuID.className = 'active';
//   }
// })

// initial check in case doc is loading already scrolled down the page...
        // if ($(document).scrollTop() > 120){
        //     $('#nav').stop().animate({height:'64px'}, 0);
        //     $('#nav-pages').stop().animate({opacity:'0'},0);
        //     $('#menubutton').stop().animate({opacity:'1'},0);
        //     $('#menubutton').html("Menu");
        // }
        // else if ($(document).scrollTop() < 125){
        //     $('#nav').stop().animate({height:'136px'}, 0);
        //     $('#nav-pages').stop().animate({opacity:'1'},0);
        //     $('#menubutton').stop().animate({opacity:'0'},0);
        // }

// when the menu / close button is clicked
    $('.menuicon').click(function(){
        if ($(document).scrollTop() > 120){
        	if ($('#nav').height() < 100) {
                $('#nav').stop().animate({height:'136px'}, 150);
                $('#nav-pages').stop().animate({opacity:'1'},300);
                $('.contextualmenu').stop().animate({top:'144px'},150);
            }
            else {
        	   $('#nav').animate({height:'64px'}, 150);
        	   $('#nav-pages').stop().animate({opacity:'0'},300);
                $('.contextualmenu').stop().animate({top:'44px'},150);
            }
        }
    });

// when the user scrolls
    $(window).scroll(function(){
        if ($(document).scrollTop() > 1200){
            $('#backtotop').stop().animate({opacity:'1'},150);
        }
        else if ($(document).scrollTop() > 120){
            $('#nav').stop().animate({height:'64px'}, 200);
            $('#nav-pages').stop().animate({opacity:'0'},150);
            $('.contextualmenu').stop().animate({top:'44px'},150);
            $('.brand-logo').stop().animate({'margin-left':'-10px'},150);
            $('.menuicon').stop().animate({opacity:'1'},300);

        }
        else if ($(document).scrollTop() < 125){
            $('#nav').stop().animate({height:'136px'}, 100);
            $('#nav-pages').stop().animate({opacity:'1'},150);
            $('#backtotop').stop().animate({opacity:'0'},150);
            $('.contextualmenu').stop().animate({top:'144px'},150);
            $('.brand-logo').stop().animate({'margin-left':'-44px'},150);
            $('.menuicon').stop().animate({opacity:'0'},300);
        }
    });
});