$(document).ready(function () {

	// STICKY MENU //
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$("nav").addClass('sticky-menu');
		} else {
			$("nav").removeClass('sticky-menu');
		}
	});

	
	// SHOW & HIDE MENU //
	$(".menu-show-icon").click(function () {
		$(".main-menu").toggleClass("main-menu-show");
		$(".bar1").toggleClass("bar-color");
		$(".bar2").toggleClass("bar-color");
		$(".bar3").toggleClass("bar-color");
	});

	
	// TOGGLE SEARCH BAR //
	$('.header-search-wrapper .search-main > i').click(function () {
		$(".header-search-wrapper .search-main > i").hide();
		$(".header-search-wrapper .search-main span").show();
		$('.search-form-main').addClass('active-search');
		$('.search-form-main .search-field').focus();
	});

	$('.header-search-wrapper .search-main span').click(function () {
		$(".header-search-wrapper .search-main > i").show();
		$(".header-search-wrapper .search-main span").hide();
		$('.search-form-main').removeClass('active-search');
		$('.search-form-main .search-field').focus();
	});
	

	// WOW JS 
	new WOW().init();

	
	// POPUP VIDEO //
	$('.popup-video').magnificPopup({
		type: 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',
			patterns: {
				youtube: {
					index: 'youtube.com/',
					id: 'v=',
					src: 'https://www.youtube.com/embed/%id%?autoplay=1'
				},
				vimeo: {
					index: 'vimeo.com/',
					id: '/',
					src: '//player.vimeo.com/video/%id%?autoplay=1'
				},
				gmaps: {
					index: '//maps.google.',
					src: '%id%&output=embed'
				}

			},

			srcAction: 'iframe_src',
		}
	});

});
