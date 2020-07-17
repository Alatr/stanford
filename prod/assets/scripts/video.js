(function ($) {
	if (window.innerWidth == 1024 || screen.width > 768) {
		$('.js-video-block-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			adaptiveHeight: false,
			dots: true,
			arrows: false,
			// responsive: [{
			// 	breakpoint: 476,
			// 	settings: {
			// 		dots: true
			// 	}
			// }]
		});

		$('.js-video-arrow__prev').click(function () {
			$('.js-video-block-slider').slick('slickPrev');
			// pause playining 
			jQuery("iframe").each(function () {
				jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
			});
		})

		$('.js-video-arrow__next').click(function () {
			$('.js-video-block-slider').slick('slickNext');
			// pause playining 
			jQuery("iframe").each(function () {
				jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
			});
		});

	}
})(jQuery);