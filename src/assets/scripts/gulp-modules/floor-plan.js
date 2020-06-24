
(function ($) {

	const floorLink = $('.js-floor-flat-link');
	const card = $('.js-floor-info');
	
	
	
	// floorLink.mouseenter(function (e) {
	// 	console.log($(this).data());
		
	// });

	function animNum(elem, num){
		var decimal_places = 1;
		var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

		elem.animateNumber({
			number: num,
			numberStep: function (now, tween) {
				// var floored_number = Math.floor(now) / decimal_factor,
				var floored_number = now.toFixed(2).toString().replace('.', ',');
				var	target = $(tween.elem);

				target.text(floored_number);
			}
		}, {
			easing: 'swing',
			duration: 200,
		});
	}

	function showInfo(e) {
		console.log($(this));
		floorLink.removeClass('active');
		$(this).addClass('active');
		for (const key in this.dataset) {
			if (this.dataset.hasOwnProperty(key)) {
				const element = this.dataset[key];
				let currentClassElement = `.js-flat-${key}`;

				switch (key) {
					case 'num':
						card.find(currentClassElement).text(element)
						break;
					case 'total_square':
						//									card.find(currentClassElement).text(element);
						animNum(card.find(currentClassElement), element)

						break;
					case 'life_square':
						//									card.find(currentClassElement).text(element);
						animNum(card.find(currentClassElement), element)

						break;
					case 'room':
						//									card.find(currentClassElement).text(element);
						animNum(card.find(currentClassElement), element)

						break;
					default:
						card.find(currentClassElement).html(element)
				}
			}
		}
	}
	
	
	
	
	
	
	
	if (screen.width > 768) {

		floorLink.mouseenter(function(e){
			showInfo.call(this);
		});
	} else {
		console.log(4);
		
			floorLink.on('click', function(e){
				showInfo.call(this);
				$('.js-mobile-popup-flat-info').addClass(popupInfoClass);
				$('.floor-plan-content').css('filter', 'blur(10px)');
			});
			$('.js-mobile-popup-flat-info-close').on('click', function (e) {
				//$('.js-mobile-popup-flat-info').addClass(popupInfoClassLeave);
				
				//$('.js-mobile-popup-flat-info').removeClass(popupInfoClass);
				gsap.to($('.js-mobile-popup-flat-info'), {
					autoAlpha: 0,
					yPercent: 25,
					clearProps: "all",
					ease: exI,
					onComplete: ()=>{
						$('.js-mobile-popup-flat-info').removeClass(popupInfoClass)
						$('.floor-plan-content').css('filter', 'none');
					}
				})
			});

	}


				const $floorTipList = $('.js-floor-list');
				const floorTipClass = 'active-tip';

				const popupInfoClass = 'mobile-popup-flat-info--active';
				const popupInfoClassLeave = 'mobile-popup-flat-info--active-leave';
				

				$floorTipList.on('click', '.js-arrow-close', function () {
					$floorTipList.removeClass(floorTipClass);
				});
				$floorTipList.on('touchstart', function (e) {
					
					if(e.target.closest('.js-arrow-close') === null){
						$(this).addClass(floorTipClass);
					}
					
				});
	

			
})(jQuery);

