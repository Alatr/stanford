(function ($) {
	let currentS = 0;
	let lastS = 0;
	let lastTime = 0;
	let liheight = 450;
	let windowHeight = $(window).height();
	let windowWidth = $(window).width();

	let top = (windowHeight - liheight) / 2;
	let factor = windowHeight / liheight;
	let maxScroll = ($('.main-scroller').height() - windowHeight) / factor;

	let isScrolling = false;

	let clip = 'rect(' + top + 'px,' + windowWidth + 'px,' + (top + liheight) + 'px,0)';

	$('.nav ul').css('top', top);
	$('.nav__2').css('clip', clip);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

			document.addEventListener('wheel', function (event) {
				event.preventDefault();
				if (!isScrolling) isScrolling = true;
				let norm = normalizeWheel(event);
				currentS += norm.spinY * 50;
		
		
				if (currentS < 0) currentS = 0;
				if (currentS > maxScroll) currentS = maxScroll;
		
		// const ease_1 = BezierEasing(.27, 1.03, .62, .96);
		const ease_1 = BezierEasing(.17, 1.04, .62, .96);
				TweenLite.to('.main-scroller', 1, {
				ease: "expo.inOut",
				ease: "power1.inOut",
				ease: ease_1,
					y: -currentS * factor,
					overwrite: 5, // preexisting
					onUpdate: function () {
						// TweenLite.set('.nav ul', {
						// 	y: -currentS
						// });
					},
					onComplete: function () {
						//gotoClosest();
						isScrolling = false;
					}
				});
		
		
		
			});
		}
	
	
	
	















})(jQuery);