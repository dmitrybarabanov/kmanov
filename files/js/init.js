var mobileWidth = 766;
var is_mobile = false;
var file_input_count = 1;

jQuery(document).ready(function( $ ) {

	is_mobile = ($(window).width()<=mobileWidth);
	
	$('nav').attr("data-width", $('nav').outerWidth());
	
	_init_top_menu();
	_default_init();
	_init_main_page_scroll();
	_init_popup();
	_init_custom_file();

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


function _init_popup()
{
	$( "#dialog-addresponse" ).dialog({
      autoOpen: false,
	  width: 1100,
	  modal: true,
	   open: function() {
			$('.ui-widget-overlay').addClass('custom-overlay');
		},
		close: function() {
			$('.ui-widget-overlay').removeClass('custom-overlay');
		},  
	  
      show: {
		effect: "blind",
        duration: 500
      },
      hide: {
        effect: "explode",
        duration: 500
      }	
    });

	
	$(document).on("click",".write_response",function(event) {
		event.preventDefault();
		
		$( "#dialog-addresponse" ).dialog("open");
		
	})
	
	$(document).on("click",".close_btn",function(event) {
		event.preventDefault();
		
		$("#dialog-addresponse" ).dialog("close");
		
	})
	
	
	
	
	$('body').click(function (event) 
	{
	   if(!$(event.target).closest('#dialog-addresponse').length && !$(event.target).is('#dialog-addresponse')) {
		 $("#dialog-addresponse").dialog("close");
	   }     
	});
	
	
	
	
	$( "#dialog-response" ).dialog({
      autoOpen: false,
	  width: 1100,
	  modal: true,
	   open: function() {
			$('.ui-widget-overlay').addClass('custom-overlay');
		},
		close: function() {
			$('.ui-widget-overlay').removeClass('custom-overlay');
		},  
	  
      show: {
		effect: "blind",
        duration: 500
      },
      hide: {
        effect: "explode",
        duration: 500
      }	
    });
	
	
	
	
	
	
	
	
	//
	//data-fancybox data-type="ajax" data-src="my_page.com/path/to/ajax/" data-filter="#two" href="javascript:;"
	
	
}


function _init_custom_file() {
	
	$('input[type=file]').customFile();
	
}