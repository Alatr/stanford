@@include('./libs.js');

// function first_in() {
// 	const obj = {
// 		paused: true,
// 	}
// 	const tl = gsap.timeline(obj);
	
// 	return tl;
// };


(function ($) {
	var loader = function () {
		$(".loader-wrap").delay(500).fadeOut(500);
	};
	loader()

	var logo_t = 0.4;
	var es = Power2.easeOut;
	var ex = "expo.inOut";
	var bc = "back.inOut(1.7)";

	function logo() {
		// DOM
		const overlayLogo = '.desktop-header-logo-wrap';
		const letterXL = '.logo-letter--big';
		const letterSM = '.word-small';

		const obj = {
			paused: true,
		}

		gsap.set([overlayLogo, letterSM, letterXL], {autoAlpha:0});
		const tl = gsap.timeline(obj);
		
		tl.fromTo(overlayLogo, 1.5, {scaleY: 0.8, scaleX: 0, autoAlpha:0}, {scaleY: 1, scaleX: 1, autoAlpha:1, ease: "power4.inOut"})
		tl.fromTo(letterXL, 1, {yPercent: 100, autoAlpha:0}, {yPercent: 0, autoAlpha:1, stagger: 0.1, ease: bc}, '<-0.25')
		tl.fromTo(letterSM, 1.5, {xPercent: -100, autoAlpha:0}, {xPercent: 0, autoAlpha:1, stagger: 0.3, ease: es}, '<')
		
		return tl;
	};
	
	const master = gsap.timeline();


	master.add( logo().play().timeScale(1.1) )





















})(jQuery);