(function ($) {
	$('.js-gallery-main-slider').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		adaptiveHeight: false,
		dots: false,
		arrows: false,
		asNavFor: '.js-gallery-mini-slider',
		responsive: [
			{
				breakpoint: 577,
				settings: {
					dots: true,
				}
			},
		]
	});



	$('.js-gallery-mini-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.js-gallery-main-slider',
		dots: false,
		arrows: false,
		infinite: false,
		// centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 1021,
			settings: {
				slidesToShow: 5,
				}
			},
		]
	});

	$('.js-video-arrow__prev').click(function () {
		$('.js-gallery-main-slider').slick('slickPrev');
	
	})

	$('.js-video-arrow__next').click(function () {
		$('.js-gallery-main-slider').slick('slickNext');
		
	});
})(jQuery);