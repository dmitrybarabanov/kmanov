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
	_sisters_init();
});


function _sisters_init()
{
	var systers_padding_top = 230; //отсуп от верха для сестер
	var minFirst_section_height = 530; //минимальная высота сестер
	var women_height = 810; //высота тетки в конце первого слайда
	
	// Home
	if (is_mobile==false)
	{
		var h = $(window).height();
		
		var sisHeight =  h-systers_padding_top;
		
		if (sisHeight<minFirst_section_height)
			sisHeight = minFirst_section_height;
		
		$(".sisters").css("height", sisHeight+"px");
		
	
		$(".main_section").css("height", (systers_padding_top+sisHeight+women_height)+"px");
		
		$(".first_slide").css("height", (systers_padding_top+sisHeight+200)+"px");
		
		
	}
	
	
}

function _init_main_page_scroll()
{
	// Home
	if (is_mobile==false)
	{
		
		var h = ($(window).height()/4)-100;
		
		var parallaxBlock = $('.about_k'),
			//amp = 0.3;
			amp = 0.43;
		if(parallaxBlock.length) {
			$(document).on('scroll', function() {
				var scrollTop = $(window).scrollTop(),
					dist = parseInt(scrollTop * amp);
					
				if (dist>h)
					dist=h;
				
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
		$("#dialog-response" ).dialog("close");
		
	})
	
	$(document).on("click",".next-resp, .prev-resp",function(event) {
		event.preventDefault();
		event.stopPropagation();
		
		$("#response_content").html("Новый текст");
		
	})
	
	
	
	
	
	$('body').click(function (event) 
	{
	   if(!$(event.target).closest('#dialog-addresponse').length && !$(event.target).is('#dialog-addresponse')) {
		  console.log("закрываем"+event.target);
		  console.log(event);
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