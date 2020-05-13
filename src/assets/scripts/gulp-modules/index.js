@@include('./libs.js');

// function first_in() {
// 	const obj = {
// 		paused: true,
// 	}
// 	const tl = gsap.timeline(obj);
	
// 	return tl;
// };


(function ($) {
	const $body = $('body')
	var loader = function () {
		$(".loader-wrap").delay(500).fadeOut(500);
		$body.addClass('js_animation')
	};
	loader();


	// $('.main-overlay__text').html(spliterText('.main-overlay__text'));
	// $('.main-overlay__text').html(spliterText(this));
	
	spliterText('.main-overlay__text')
	

	function spliterText($title, type = 'type_text'){
		const titleStr = $($title).text().replace(/\s{2,}/gm, '')
		const titleArr = titleStr.split(' ');

		let newStr = '';
		let wrap = ()=>{};
		switch (type) {
			case 'title':
				
				break;
		
			default:
				wrap = (word)=> `<span class="gsap_word">${word}</span>&nbsp;`
				break;
		}
		titleArr.forEach((el)=>{
			newStr += wrap(el);
		});

		$($title).html(newStr)
	}

	var time_anim = 0.4;
	var es = Power2.easeOut;
	var ex = "expo.inOut";
	var exI = "expo.in";
	var exO = "expo.out";
	var p4 = "power4.inOut";
	var p4I = "power4.in";
	var p4O = "power4.out";

	var p2 = "power2.inOut";
	var p2I = "power2.in";
	var p2O = "power2.out";

	var circ = "circ.inOut";
	var circO = "circ.out";
	var circI = "circ.in";
	var bc = "back.inOut(1.7)";

	function logo() {
		// DOM
		const overlayLogo = '.desktop-header-logo-wrap';
		const letterXL = '.desktop-header-logo-wrap .logo-letter--big';
		const letterSM = '.desktop-header-logo-wrap .word-small';

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
	 const tl = (function mainScreen() {
		// DOM
		const overlayL = '.anim-overlay__1';
		const overlayR = '.anim-overlay__2';
		const colorOverlay = '.main-overlay';
		const colorOverlayLogo = '.main-overlay__logo';
		const colorOverlayIconLogo = '.main-overlay__icon-logo';
		const colorOverlayText = '.main-overlay__text .gsap_word';
		const colorOverlaySmallArrow = '.main-overlay .arr';
		const firstImg = '.main-img-first';
		const letterXL = '.main-overlay .logo-letter--big';
		const letterSM = '.main-overlay .word-small';
		const title = $('.main-slaider__item').eq(0).find('.word-animate');
		const titleLine = '.wrap-additional__line'

		
		
		const obj = {
		}

		gsap.set([letterXL, letterSM, colorOverlayIconLogo,  colorOverlaySmallArrow, colorOverlayLogo, colorOverlayText, firstImg], {autoAlpha:0});
		const tl = gsap.timeline(obj);
		
		tl.fromTo(colorOverlay, 1.5, {yPercent: 50, autoAlpha: 1}, {yPercent: 0, autoAlpha: 1, ease: ex})
		tl.fromTo(letterXL, 0.65, {yPercent: 100, autoAlpha:0}, {yPercent: 0, autoAlpha:1, stagger: 0.1, ease: bc}, '<0.08')
		tl.fromTo(colorOverlaySmallArrow, 1.5, {yPercent: -100, autoAlpha:0}, {yPercent: 0, autoAlpha:1, stagger: 0.1, ease: bc}, '<0.08')
		tl.fromTo(letterSM, 1, {x: -30, autoAlpha:0}, {x: 0, autoAlpha:1, stagger: 0.3, ease: es}, '<0.06')
		tl.fromTo(overlayL, 2.3, {scaleX: 1, autoAlpha: 1}, {scaleX: 0, autoAlpha: 1, ease: ex}, '<-0.3')
		tl.fromTo(colorOverlayText, 0.85, {x: 200, autoAlpha: 0}, {x: 0, autoAlpha: 1, stagger: 0.05, ease: circO}, '-=1.5')
		tl.fromTo(colorOverlayIconLogo, 2, {autoAlpha: 0}, {autoAlpha: 1, stagger: 0.05, ease: circO}, '<')
		// OUT
		tl.fromTo(colorOverlay, 1.5, {yPercent: 0, autoAlpha: 1}, {yPercent: 100, autoAlpha: 1, ease: ex}, '<2')
		tl.fromTo(overlayR, 2.3, {scaleX: 1, autoAlpha: 1}, {scaleX: 0, autoAlpha: 1, ease: ex}, '<-0.3')
		tl.add(logo().play(), '<-0.3')
		tl.fromTo(title, 2.3, {yPercent: -100}, {yPercent: 0, ease: p4O, stagger: 0.1, clearProps: 'all'}, '<1')
		tl.fromTo(titleLine, 1.5, {width: 0, y: -50}, {width: 120, y: 0, ease: p4O}, '<')
		
		return tl;
	})();
	
	const master = gsap.timeline();

	tl.play();



	
	$('.time_scale_025').on('click', ()=> tl.restart().timeScale(0.25))
	$('.time_scale_050').on('click', ()=> tl.restart().timeScale(0.50))
	$('.time_scale_075').on('click', ()=> tl.restart().timeScale(0.75))
	$('.time_scale_1').on('click', ()=> tl.restart().timeScale(1))





class CustomSl{
	constructor(settings){

		this.bindAll();
		
		this.container = document.querySelector(settings.container)
		this.slides = [...this.container.querySelectorAll(`${settings.container} > *`)]
		this.bullets = [...document.querySelectorAll(`${settings.dotsContainer} > *`)]
		// this.el = document.querySelector('.js-slider')
		// this.inner = this.el.querySelector('.js-slider__inner')
		// this.slides = [...this.el.querySelectorAll('.js-slide')]
		// this.bullets = [...this.el.querySelectorAll('.js-slider-bullet')]
		this.data = {
			current: 0,
			next: 1,
			total: this.slides.length - 1,
		}

		this.state = {
			animating: false,
			text: false,
			initial: true
		}

		
		this.init()
	}

	bindAll() {
		['nextSlide']
		.forEach(fn => this[fn] = this[fn].bind(this))
	}
	
	setStyles() {
		this.slides.forEach((slide, index) => {
			if (index === 0) return

			slide.classList.add('slide--hidden');
		})
		
		this.bullets.forEach((bullet, index) => {
			if (index === 0) return
			
			bullet.classList.add('dots-btn--not-active');
			

		})
	}

	transitionNext(nextIdx) {

		const current = this.slides[this.data.current];
		const next = this.slides[nextIdx];
		const overlayL = '.anim-overlay__1';
		const overlayR = '.anim-overlay__2';


		const currentText = current.querySelectorAll('.word-animate')
		const currentImg = current.querySelectorAll('.slider-img img')
		const currentTextLine = current.querySelectorAll('.wrap-additional__line')
		
		const nextText = next.querySelectorAll('.word-animate')
		const nextImg = next.querySelectorAll('.slider-img img')
		const nextTextLine = next.querySelectorAll('.wrap-additional__line')
		
		const currentBullet = this.bullets[this.data.current]
		const nextBullet = this.bullets[nextIdx];
		
		currentBullet.classList.add('dots-btn--not-active');
		nextBullet.classList.remove('dots-btn--not-active');

		const tl = new TimelineMax({
			onComplete: () => {
				this.state.animating = false;
			}
		});
	


		TweenMax.set(nextImg, {scale: 1.2});
		// IN
		tl.fromTo(overlayR, 1.5, {scaleX: 0, autoAlpha: 1}, {scaleX: 1, autoAlpha: 1, ease: p2I})
		tl.fromTo(overlayL, 1.1, {scaleX: 0, autoAlpha: 1}, {scaleX: 1, autoAlpha: 1, ease: p2I}, '<0.4')
		tl.fromTo(currentText, 0.7, {yPercent: 0}, {yPercent: -100, ease: p2I, stagger: 0.1}, '-=1.3' )
		tl.fromTo(currentTextLine, 0.7, {width: 120, y: 0}, {width: 0, y: -50, ease: p2I}, "<")

		tl.call(()=> gsap.fromTo(currentImg, 1.5, {scale: 1}, {scale: 1.3, ease: p2I}), null, '<0.1')

		tl.call(()=>{
			this.slides.forEach(el => el.classList.add('slide--hidden'));
			next.classList.remove('slide--hidden');
		}, null, null)

		// OUT
		tl.fromTo(overlayR, 1, {scaleX: 1, autoAlpha: 1}, {scaleX: 0, autoAlpha: 1, immediateRender: false,  ease: "power1.out"}, '<')
		tl.fromTo(overlayL, 0.8, {scaleX: 1, autoAlpha: 1}, {scaleX: 0, autoAlpha: 1, immediateRender: false,  ease: "power1.out"}, '<')
		tl.staggerFromTo(nextText, 2.3, {yPercent: -100}, {yPercent: 0, ease: p4O}, 0.1, '-=1')
		tl.fromTo(nextTextLine, 1.5, {width: 0, y: -50}, {width: 120, y: 0, ease: p4O}, '<')
		tl.call(()=> gsap.fromTo(nextImg, 1.3, {scale: 1.2}, {scale: 1, ease: "power1.out"}), null, '<-0.5')
	//	tl.timeScale(0.1)
	}

	nextSlide(e) {
		const idxSlide = (e !== null) ? $(e.target).closest('.dots-btn').data().slide : this.data.next;
		console.log(`idxSlide`, idxSlide);
	//	this.data.current = idxSlide;

		if (this.state.animating) return

		this.state.animating = true

		this.transitionNext(idxSlide)
		console.log(this.data.next, 'next');
		
		this.data.current = this.data.current === this.data.total ? 0 : this.data.current + 1
		this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1
	}

	listeners() {

		// window.addEventListener('wheel', ()=>{
		// 	this.nextSlide(null);
		// });
		// window.addEventListener('touchmove', ()=>{
		// 	this.nextSlide(null);
		// });


		$('body').on('click', '.dots-btn', this.nextSlide,)
	}


	init(){
		this.setStyles();
		this.listeners();
		
	}
}

const sl = new CustomSl({
	container: '.main-slaider',
	dotsContainer: '.dots',
})













})(jQuery);