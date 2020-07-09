(function ($) {
	if (window.innerWidth == 1024 || screen.width > 768) {

		$('.js-year-slider').each((i, el)=>{

			$(el).slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				infinite: false,
			});
			
			$(el).closest('.year-slider-wrap').find('.js-stage-arrow__prev').click(function () {
				$(el).slick('slickPrev');
				
			})
			
			$(el).closest('.year-slider-wrap').find('.js-stage-arrow__next').click(function () {
				$(el).slick('slickNext');
				
			});
		})
	}

		$('.js-news-single-slider').slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			adaptiveHeight: false,
			dots: false,
			arrows: false,
			responsive: [{
				breakpoint: 476,
				settings: {
					dots: true
				}
			}]
		});

		$('.js-single-news-arrow__prev').click(function () {
			$('.js-news-single-slider').slick('slickPrev');
		})

		$('.js-single-news-arrow__next').click(function () {
			$('.js-news-single-slider').slick('slickNext');
		});
})(jQuery);