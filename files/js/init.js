var mobileWidth = 766;

jQuery(document).ready(function( $ ) {

	is_mobile = ($(window).width()<=mobileWidth);
	
	
	
	
	$('nav').attr("data-width", $('nav').outerWidth());
	
	_init_top_menu();
	
	_default_init();
	

});


function _init_top_menu()
{
	//top menu
	$(window).on("scroll", function () {
		_default_init();
	});
}

function _default_init()
{
	var scrolled = $(this).scrollTop();
	if( scrolled > 100 ) {
		$('.for_mobile_wrapper').addClass('fix');
		
		
	}   
	if( scrolled <= 100 ) {     
		$('.for_mobile_wrapper').removeClass('fix'); 
	}
	
	/*
	var scrolled = $(this).scrollTop();
	if( scrolled > 100 ) {
		$('nav').addClass('fix');
		$('.logo').addClass('fix');
		
		$('nav').css("right",$('nav').data("width")+"px");
		
		
	}   
	if( scrolled <= 100 ) {     
		$('nav').removeClass('fix');
		$('.logo').removeClass('fix'); 
	}*/
}