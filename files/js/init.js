var mobileWidth = 768;
var is_mobile = false;
var file_input_count = 1;
var window_width = 320;


var sis_height = 0; /*---------------------*/
var systers_padding_top = 135; //отсуп от верха для сестер
var minFirst_section_height = 530; //минимальная высота сестер
var maxFirst_section_height = 910; //минимальная высота сестер
var women_height = 810; //высота тетки в конце первого слайда
var max_main_section_height = 1861;




jQuery(document).ready(function( $ ) {

	is_mobile = ($(window).width()<=mobileWidth);
	window_width = $(window).width();
	
	$('nav').attr("data-width", $('nav').outerWidth());
	
	_init_top_menu();
	_default_init();
	_init_main_page_scroll();
	_init_popup();
	_init_custom_file();
	_sisters_init();
	
	_image_dopinfo_init();
	_foto_menu();
	
	_init_anchor_going();
	_init_mobile_menu();
	
	_init_forms();/*!!!!*/
	_init_responses();
});


function _init_responses()
{
	$(document).on("click","#load_next_resp",function(event) {
		event.preventDefault();
		current_response ++;
		current_response = current_response%indexes.length;
		loadresponse(indexes[current_response]);
	});
	
	$(document).on("click","#load_prev_resp",function(event) {
		event.preventDefault();
		current_response--;
		current_response = (current_response+indexes.length)%indexes.length;
		//loadresponse(indexes[current_response]);
		console.log(current_response+" "+indexes[current_response])
	});
	
	
	function loadresponse($id)
	{
		$("#temp").load("/ajax/load_response.php?ajax=Y&id="+$id, function () {
			$("#response_content").html($("#temp").html());
			$("#temp").html("");
		});
		ajax
		
	}
	
	
	
	
}

function _init_forms()
{
	$(document).on("click","#submit_response",function(event) {
		event.preventDefault();
		
		if (ValidateForm("response_form"))
		{
			$("#response_form").submit();
		}
	});
}

function _init_anchor_going()
{
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		if ($(this.hash).length) {
			$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
			e.preventDefault();
		}
	});
	
}

function _foto_menu() {
	
	$(document).on("click",".foto_top_menu",function(event) {
		event.preventDefault();
		
				
		var submenu_id = $(this).data("submenu");
		
		$(".foto_menu .fitem").removeClass("selected");
		$(this).parent().addClass("selected");
		
		$(".foto_submenu").css("display", "none");
		$("#"+submenu_id).css("display", "block");
		
		
	});
	
	
	//gallery
	$(document).on("click",".foto_submenu .item a",function(event) {
		event.preventDefault();
		
				
		var gallery_id = $(this).data("galleryid");
	
		$(".foto_submenu .item a").removeClass("selected");
		$(this).addClass("selected");
		
		$( "#fotoLoader" ).load( "ajax/response.html" );
	});
	
	//responses
	$(document).on("click",".response_link",function(event) {
		event.preventDefault();
		
				
		var response_id = $(this).data("respid");

		//todo
		
		$("#dialog-response").dialog("open");
	
		//$( "#fotoLoader" ).load( "ajax/response.html" );
	});
	
	
	
	
	var diplomSliderIsInit = 0;
	
	$(document).on("click",".about_menu .fitem a",function(event) {
		event.preventDefault();
		
		$(".about_menu .fitem").removeClass("selected");
		$(this).parent().addClass("selected");
		
		
		var about_id = $(this).data("aboutid");
		
		
		$(".about_text_wrapper").removeClass("selected");
		$("#"+about_id).addClass("selected");
		
		var num = $(this).data("num");
		
		if (num==1){
			$("#about_foto2").css("background-image", "url(files/images/bg_kahram.png)");
			//$("#foto-slider").addClass("opacityBlock").removeClass("opacityNone");
			//$("#diplom-slider").addClass("opacityNone").removeClass("opacityBlock");
			$("#foto-slider").css("display", "block");
			$("#diplom-slider").css("display", "none");
			
			
		}
		else if (num==2)
		{
			$("#about_foto2").css("background-image", "url(files/images/bg_kahram2.png)");
			//$("#foto-slider").addClass("opacityNone").removeClass("opacityBlock");
			//$("#diplom-slider").addClass("opacityBlock").removeClass("opacityNone");
			
			$("#foto-slider").css("display", "none");
			$("#diplom-slider").css("display", "block");
			
			if (diplomSliderIsInit==0)
			{
				_init_diplom_slider();
				diplomSliderIsInit=1;
			}
			
		}
		else if (num==3)
		{
			$("#about_foto2").css("background-image", "url(files/images/bg_kahram3.png)");
			//$("#foto-slider").addClass("opacityNone").removeClass("opacityBlock");
			//$("#diplom-slider").addClass("opacityBlock").removeClass("opacityNone");
			$("#foto-slider").css("display", "none");
			$("#diplom-slider").css("display", "block");
			
			if (diplomSliderIsInit==0)
			{
				_init_diplom_slider();
				diplomSliderIsInit=1;
			}
			
		}
		
		
		/*
		
		
		
		
		
		*/
	});
	
}

function _init_diplom_slider()
{
	var diplomSlider = new Swiper('#diplom-foto', {
					nextButton: '#diplom-slider .swiper-button-next',
					prevButton: '#diplom-slider .swiper-button-prev',
					slidesPerView: 'auto',
					loop: true,
					spaceBetween: 31,
					centeredSlides: true,
					paginationClickable: true
				});
				
				diplomSlider.slideTo(2, 0, false);
}

function _image_dopinfo_init()
{
	
	$(document).on("click",".close_more",function(event) {
		event.preventDefault();
		
		$(this).closest(".top_ball.active").removeClass("active");
		$(this).closest(".like_tbl.active").removeClass("active");
		
	});
	
	$(document).on("click",".more",function(event) {
		event.preventDefault();
		
		$(this).closest(".top_ball").addClass("active");
		var tbl = $(this).next();
		
		setTimeout(function(){
			$(tbl).addClass("active");
		}, 500);
		
	});
	
}

function _sisters_init() /*--------------------*/
{
	
	
	// Home
	if (is_mobile==false || true)
	{
		var h = $(window).height();
		
		var sisHeight =  h-systers_padding_top - $(".about_k").height()+120;
		
		if (sisHeight<minFirst_section_height) /*минимальная высота*/
			sisHeight = minFirst_section_height;
			
		if (sisHeight>maxFirst_section_height) /*максимальная высота*/
			sisHeight = maxFirst_section_height;
			
		sis_height = sisHeight;
	
		
		$(".sisters").css("height", sisHeight+"px");
		
	
		var main_section_height = systers_padding_top+sisHeight+women_height;
		
		/*if (main_section_height> max_main_section_height) {
			main_section_height= max_main_section_height;
		}*/
		
		$(".main_section").css("height", (main_section_height)+"px");
		
		
		
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
				
				var about_k_height = $(".about_k").height();
				/*
				console.log("about_k_height="+about_k_height);
				console.log("systers_padding_top="+systers_padding_top);
				console.log("sis_height="+sis_height);
				*/
				//
				
				var h = $(".first_slide").height() - sis_height - systers_padding_top - 10;
				console.log("h="+h);
				
				
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

function _default_init() /*------------------*/
{
	var top_menu_position_hide = 66;
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
	var winwidth = 1100;
	if (window_width<=winwidth)
		winwidth = window_width;
	
	
	$( "#dialog-addresponse" ).dialog({
      autoOpen: false,
	  width: winwidth,
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
		
		//dialog-response
		$( "#dialog-addresponse" ).dialog("open");
		
	})
	
	$(document).on("click",".close_btn",function(event) {
		event.preventDefault();
		
		$("#dialog-addresponse" ).dialog("close");
		$("#dialog-response" ).dialog("close");
		
	})	
	
	
	
	$('body').click(function (event) 
	{
	   if(!$(event.target).closest('#dialog-addresponse').length && !$(event.target).is('#dialog-addresponse')) {
	//	  console.log("закрываем"+event.target);
		//  console.log(event);
		 $("#dialog-addresponse").dialog("close");
	   }     
	});
	
	
	
	
	$("#dialog-response" ).dialog({
      autoOpen: false,
	  width: winwidth,
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

function _init_mobile_menu()
{
	if (is_mobile)
	{
		var menu = '<h3 class="mobile_info"><span>Запись на бесплатную консультацию:</span><br/>+7 906 090  99 22</h3>';

		menu += $("#desktop-menu").html();

		$("#mobile-menu ul").append(menu);

		API = $("#mobile-menu").mmenu({
			navbar 		: false,
			slidingSubmenus: false
			// options
		}, {
			// configuration
			offCanvas: {
				pageNodetype: "div#page",
				menuInjectMethod: "append",
				hardwareAcceleration: false
			},
			clone: false
		});
		
		
		$(".foto_menu2 .item a").each(
			function(){
				
				var txt = $.trim($(this).text());
				txt = txt.replace("<br/>", " ");
				
				$(this).text(txt);
			}
		);
		
		
	}
}