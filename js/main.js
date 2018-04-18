$(function(){

	//smooth scroll

	$(".navbar-nav li a").click(function(){

		$('html,body').animate({

			scrollTop: $('#' + $(this).data('value')).offset().top

		},1000);

	});

	// links Add Active Class	

	$('.navbar-nav li').click(function() {

    $('.navbar-nav li.active').removeClass('active'); 

    $(this).addClass('active'); 

    });

    //Hide navbar on mobile screen

	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	        $(this).collapse('hide');
	    }
	});
		// Trigger nice scroll

		$('html').niceScroll({
			cursorcolor: "#B71C1C",
			cursorwidth: "8px",
			cursorborder: "1px solid #B71C1C",
			cursorborderradius :0
		});


});
