var mobileWidth = 766;
var is_mobile = false;

jQuery(document).ready(function( $ ) {

	is_mobile = ($(window).width()<=mobileWidth);
	
	$('nav').attr("data-width", $('nav').outerWidth());
	
	_init_top_menu();
	_default_init();
	_init_main_page_scroll();

});


function _init_main_page_scroll()
{
	// Home
	if (is_mobile==false)
	{
		var parallaxBlock = $('.about_k'),
			//amp = 0.3;
			amp = 0.33;
		if(parallaxBlock.length) {
			$(document).on('scroll', function() {
				var scrollTop = $(window).scrollTop(),
					dist = parseInt(scrollTop * amp);

				parallaxBlock.css('transform', 'translateY(-'+ dist +'px)');
			});
		}
	}
}


function _init_top_menu()
{
	//top menu
	$(window).on("scroll", function () {
		_default_init();
	});
}

function _default_init()
{
	var top_menu_position_hide = 100;
	if ($("#page").hasClass("inner_page"))
	{
		top_menu_position_hide = 76;
	}	
	
	
	var scrolled = $(this).scrollTop();
	if( scrolled > top_menu_position_hide ) {
		$('.for_mobile_wrapper').addClass('fix');
		
		
	}   
	if( scrolled <= top_menu_position_hide ) {     
		$('.for_mobile_wrapper').removeClass('fix'); 
	}
}