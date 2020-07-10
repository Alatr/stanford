(function ($) {
	console.clear();
	
	
	
	
	
	/*
	* threeSlAnim start
	*/
	
	function filo_content_1(additionalSettings = {}) {
	const cnt = '.philosophy__cnt';
	const title = '.philosophy__title';
	const text = '.philosophy__text';
	const bg = '.philosophy-block__l';
	const obj = {
		paused: true,
		...additionalSettings
	}
	const tl = gsap.timeline(obj);
	
	gsap.set([ title, text, cnt], {
		autoAlpha: 0
	});
	
		//tl.fromTo(bg, 0.9, { y: -50, autoAlpha: 0 }, { y: 0, ease: exI, stagger: 0.1, autoAlpha: 1 })
		tl.fromTo(bg, 1.2, { xPercent: -150, skewX: -25, autoAlpha: 0, }, { xPercent: 0, skewX: 0, autoAlpha: 1, ease: ex, })
		tl.fromTo([title, text], 0.9, { x: -300, autoAlpha: 0 }, { x: 0, ease: ex, stagger: 0.1, autoAlpha: 1 }, '<0.4')
		tl.fromTo( cnt, 0.9, { x: -100, autoAlpha: 0 }, { x: 0, ease: ex, stagger: 0.1, autoAlpha: 1 }, '<')
	
	return tl;
	};
	function filo_img_1(additionalSettings = {}) {
	const img = '.philosophy__img';
	const IMG = '.philosophy__img img';
	const img_l = '.philosophy__img .philosophy-img-overlay__l';
	const img_r = '.philosophy__img .philosophy-img-overlay__r';
	const obj = {
		paused: true,
		...additionalSettings
	}
	const tl = gsap.timeline(obj);
	
	gsap.set([img], {
		autoAlpha: 0
	});
	
		tl.fromTo(IMG, 0.9, {scale: 1.8 }, {scale: 1, ease: ex })
		tl.fromTo(img, 0.9, { yPercent: -100,  autoAlpha: 0 }, { yPercent: 0,  autoAlpha: 1, ease: ex }, '<')
		tl.fromTo(img_l, 0.5, { xPercent: -15, skewX: -5 }, { skewX: 0, xPercent: -100, ease: ex }, '<0.3')
		tl.fromTo(img_r, 0.5, { xPercent: 25, skewX: -5 }, { skewX: 0, xPercent: 100, ease: ex }, '<')
	
	return tl;
	};

	function filo_1_img_out(additionalSettings = {}) {
	const cnt = '.philosophy__cnt';
	const title = '.philosophy__title';
	const text = '.philosophy__text';
	const img = '.philosophy__img';
	const IMG = '.philosophy__img img';
	const img_l = '.philosophy__img .philosophy-img-overlay__l';
	const img_r = '.philosophy__img .philosophy-img-overlay__r';
	const obj = {
		paused: true,
		...additionalSettings
	}
	const tl = gsap.timeline(obj);
	
	gsap.set([img, title, text], {
		autoAlpha: 0
	});

		tl.fromTo(IMG, 0.9, {scale: 1 }, {scale: 1.8, ease: ex })
		tl.fromTo(img, 0.9, { yPercent: 0,  autoAlpha: 1 }, { yPercent: 100,  autoAlpha: 0, ease: ex }, '<')
		tl.fromTo(img_l, 0.5, { xPercent: -100, skewX: 0 }, { skewX: 5, xPercent: -15, ease: ex }, '<0.1')
		tl.fromTo(img_r, 0.5, { xPercent: 100, skewX: 0 }, { skewX: 5, xPercent: 25, ease: ex }, '<')
	
	return tl;
	};

	
// filo_content_1().play()
	createAnimationTool(filo__1)
	



		function filo__1() {
			const tl = gsap.timeline();
			
				tl.add(filo_img_1().play().timeScale(0.8))
				tl.add(filo_content_1().play().timeScale(0.9), '<-0.015')

			return tl;
	};

filo__1().play()

	/*
	* threeSlAnim end
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})(jQuery);