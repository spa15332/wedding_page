


// loading off
function loading_off() {
	$('.wrapper').addClass('on');
	setTimeout(function(){
		$('.loading').stop().animate({'opacity': '0'}, 1000, 'swing');
	},1000);
	setTimeout(function(){
		$('.loading').css({'display':'none'});
	},2000);
	setTimeout(function(){
		$('header,.global_navi,.menu_button').stop().animate({'opacity': '1'}, 1000, 'swing');
	},2000);
}



// rollover pc
function rollover() {
	$('a.over').hover(function(){
		var on = $('img' ,this).attr('src').replace('_off', '_on');
		$('img' ,this).attr('src', on);
	}, function(){
		var off = $('img' ,this).attr('src').replace('_on', '_off');
		$('img' ,this).attr('src', off);
	});
}



// scroll navigation
function navi() {
	$('a[href^="#"]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;

		$('.scroll_navi li a').removeClass('current');
		$('.scroll_navi li a').addClass('not');
		if ( href == '#area_04' ) {
			$('.navi_01 a').addClass('anime');
		} else if ( href == '#area_05' ) {
			$('.navi_02 a').addClass('anime');
		} else if ( href == '#area_06' ) {
			$('.navi_03 a').addClass('anime');
		} else if ( href == '#area_07' ) {
			$('.navi_04 a').addClass('anime');
		} else if ( href == '#area_08' ) {
			$('.navi_05 a').addClass('anime');
		}
		$('html, body').stop().animate({ scrollTop: position }, 750, 'easeOutQuint');
		setTimeout(function(){
			$('.scroll_navi li a').removeClass('not');
		},750);
		setTimeout(function(){
			$('.scroll_navi li a.anime').addClass('current');
			$('.scroll_navi li a').removeClass('anime');
		},750);

		return false;
	});
}



// scroll
function scroll() {
	var section_01 = $('#area_04').offset().top - 1;
	var section_02 = $('#area_05').offset().top - 1;
	var section_03 = $('#area_06').offset().top - 1;
	var section_04 = $('#area_07').offset().top - 1;
	var section_05 = $('#area_08').offset().top - 1;
	var section_06 = $('#area_09').offset().top - 1;
	var scroll = $(window).scrollTop();
	var window_height = $(window).innerHeight();
	var window_bottom = scroll + window_height;
	if ( scroll > section_01 && scroll < section_02 ) {
		$('.scroll_navi li a').removeClass('current');
		$('.navi_01 a').addClass('current');
	} else if ( scroll > section_02 && scroll < section_03 ) {
		$('.scroll_navi li a').removeClass('current');
		$('.navi_02 a').addClass('current');
	} else if ( scroll > section_03 && scroll < section_04 ) {
		$('.scroll_navi li a').removeClass('current');
		$('.navi_03 a').addClass('current');
	} else if ( scroll > section_04 && scroll < section_05 ) {
		$('.scroll_navi li a').removeClass('current');
		$('.navi_04 a').addClass('current');
	} else if ( scroll > section_05 && scroll < section_06 ) {
		$('.scroll_navi li a').removeClass('current');
		$('.navi_05 a').addClass('current');
	} else {
		$('.scroll_navi li a').removeClass('current');
	}
}



// pc fixed area
function pc_fixed_area() {
	var window_width = $(window).width();
	if ( window_width > 980 && window_width < 1200 ) {
		var margin_side = ( window_width - 980 ) / 2;
		$('.pc nav').css({'left':margin_side+'px'});
		$('.pc header').css({'right':margin_side+'px'});
		$('.pc.pagetop').css({'right':margin_side-9+'px'});
	} else {
		$('.pc nav').css({'left':'110px'});
		$('.pc header').css({'right':'110px'});
		$('.pc.pagetop').css({'right':'110px'});
	}
}



// menu sp
function menu() {
	$('.menu_button, .sp nav ul li a').click(function(){
		if ( $('.menu_button').hasClass('open') ) {
			menu_close();
		} else {
			menu_open();
		}
		return false;
	});

	// menu_close
	function menu_close() {
		$('.menu_button').removeClass('open');
		$('.sp nav').stop().animate({'opacity': '0'}, 400, 'easeOutCubic');
		setTimeout(function(){
			$('.sp nav').css({'display':'none'});
		},400);
	}

	// menu_open
	function menu_open() {
		$('.menu_button').addClass('open');
		$('.sp nav').css({'display':'block'});
		$('.sp nav').stop().animate({'opacity': '1'}, 400, 'easeInCubic');
	}
}



// popup
function popup_size_position() {
	var popup_active = $('.popup_content.active').length;
	if ( popup_active ) {
		var contentsHeight = $('body').height();
		$('.popup_overlay').css({'height':contentsHeight+'px'});
		var scrollPos = $(window).scrollTop();
		var window_height = $(window).innerHeight();
		var content_height = $('.popup_content.active').height();
		if ( content_height < window_height ) {
			var content_height_pos = ( window_height - content_height ) / 2;
			$('.popup_content.active').css({'top':scrollPos+content_height_pos+'px'});
		} else {
			$('.popup_content.active').css({'top':scrollPos+50+'px'});
		}
	}
}

function popup() {
	$('.thumb_box a').click(function () {
		var target = $(this).attr('class');
		$('.popup_content.'+target+'_content').addClass('active');
		popup_size_position();
		$('.popup_overlay').css({'display':'block'}).stop().animate({'opacity': '1'}, 500, 'swing');
		$('.popup_content.'+target+'_content').css({'display':'block'});
		return false;
	});
	$('.popup_close a, .popup_overlay').click(function () {
		$('.popup_content').addClass('off');
		$('.popup_overlay').stop().animate({'opacity': '0'}, 750, 'swing');
		setTimeout(function(){
			$('.popup_content').css({'display':'none'});
			$('.popup_content').removeClass('active off');
		},500);
		setTimeout(function(){
			$('.popup_overlay').css({'display':'none'});
		},750);
		return false;
	});
}



// fadein
function fadein() {
	var scroll = $(window).scrollTop();
	var window_height = $(window).innerHeight();
	var window_bottom = scroll + window_height;
	$('.fadein').each(function(){
		var fadein_pos = $(this).offset().top - 1;
		if ( fadein_pos < window_bottom ) {
			$(this).addClass('fadein_anime');
		}
	});
}





$(function(){
	$('.wrapper').imagesLoaded(function(){
		loading_off();
		rollover();
		navi();
		menu();
	});
}); // ready





$(window).on('load', function(){
	$('.wrapper').imagesLoaded(function(){
		scroll();
		pc_fixed_area();
		popup();
		fadein();
	});
}); // load





$(window).on('resize', function(){
	scroll();
	pc_fixed_area();
}); // resize





$(window).scroll(function(){
	scroll();
	fadein();
}); // scroll





// // preload
// $(window).on('load', function(){

// 	// preloadImages
// 	jQuery.preloadImages = function(){
// 		var path = 'https://wd.spa15332.com/static/image/';
// 		for(var i = 0; i<arguments.length; i++){
// 			jQuery('<img>').attr('src', path + arguments[i]);
// 		}
// 	};
// 	$.preloadImages(
// 		'top_image_sp.png'
// 	);

// }); //load