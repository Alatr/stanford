var vertex = `
varying vec2 vUv;
void main() {
	vUv = uv;
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;

var fragment = `
varying vec2 vUv;

uniform sampler2D texture;
uniform sampler2D texture2;
uniform sampler2D disp;

// uniform float time;
// uniform float _rot;
uniform float dispFactor;
uniform float effectFactor;

// vec2 rotate(vec2 v, float a) {
//  float s = sin(a);
//  float c = cos(a);
//  mat2 m = mat2(c, -s, s, c);
//  return m * v;
// }

void main() {

		vec2 uv = vUv;

		// uv -= 0.5;
		// vec2 rotUV = rotate(uv, _rot);
		// uv += 0.5;

		vec4 disp = texture2D(disp, uv);

		vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
		vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);

		vec4 _texture = texture2D(texture, distortedPosition);
		vec4 _texture2 = texture2D(texture2, distortedPosition2);

		vec4 finalTexture = mix(_texture, _texture2, dispFactor);

		gl_FragColor = finalTexture;
		// gl_FragColor = disp;
}
`;
@@include('./libs.js');

function spliterText($title, type = 'type_text'){
		const titleStr = $($title).text().replace(/\s{2,}/gm, '')
		let titleArr = [];

		let newStr = '';
		let wrap = ()=>{};
		switch (type) {
			case 'latter':
				
				titleArr = titleStr.split('');
				wrap = (word)=> `<span class="gsap_latter">${word}</span>`
				break;
		
			default:
				titleArr = titleStr.split(' ');
				wrap = (word)=> `<span class="gsap_word">${word}</span>&nbsp;`
				break;
		}
		titleArr.forEach((el)=>{
			newStr += wrap(el);
		});

		$($title).html(newStr)
	}



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
// function first_in() {
// 	const obj = {
// 		paused: true,
// 	}
// 	const tl = gsap.timeline(obj);
	
// 	return tl;
// };


let hoverArrEl = [];
	
Array.from(document.querySelectorAll('.js-grid__item-img')).forEach((el) => {
	const imgs = Array.from(el.querySelectorAll('img'));

	const imagesRatioNum = ($(el).height() / $(el).width()).toFixed(2)
	const hoverEffectInstatse = new hoverEffect({
		parent: el,
		intensity: el.dataset.intensity || undefined,
		easing: el.dataset.easing || undefined,
		imagesRatio: imagesRatioNum || undefined,
		hover: false,
		image1: imgs[0].getAttribute('src'),
		image2: imgs[1].getAttribute('src'),
		displacementImage: el.dataset.displacement,
				 angle2: Math.PI / 2,
				});
				
			 hoverArrEl.push(hoverEffectInstatse)
});
			//});

(function ($) {
	imagesLoaded( document.querySelectorAll('img.displacement__img'), () => {

				//console.clear();
	
	const $body = $('body')
	const $window = $(window)
	var loader = function () {
		//$(".loader-wrap").delay(500).fadeOut(500);
		$(".loader-wrap").fadeOut(1);
	};
	loader();

	$window.resize(checkWidthAnimation)
	function checkWidthAnimation(){
		
		if(window.screen.width > 1020){
			$body.addClass('js_animation');
		} else {
			$body.removeClass('js_animation');
		}
	}
	checkWidthAnimation();

	
	spliterText('.main-overlay__text')
	gsap.config({
		force3D: true,
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	



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
			onComplete: ()=> {
				page.canGo = true;
				$body.attr('data-active', 1);
			}
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
		tl.fromTo(titleLine, 1.5, {width: 0,  y: -50}, {width: '100%',  y: 0, ease: p4O}, '<')
		
		return tl;
	})();
	
	const master = gsap.timeline();

	tl.play();



	






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
		['nextSlide', 'transitionNext']
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

	transitionNext(currentIdx, nextIdx) {
		console.log(currentIdx, nextIdx);
		
		const self = this;
		const current = this.slides[currentIdx];
		const next = this.slides[nextIdx];
		const overlayL = '.anim-overlay__1';
		const overlayR = '.anim-overlay__2';


		const currentText = current.querySelectorAll('.word-animate')
		const currentImg = current.querySelectorAll('.slider-img img')
		const currentTextLine = current.querySelectorAll('.wrap-additional__line')
		
		const nextText = next.querySelectorAll('.word-animate')
		const nextImg = next.querySelectorAll('.slider-img img')
		const nextTextLine = next.querySelectorAll('.wrap-additional__line')
		
		const currentBullet = this.bullets[currentIdx]
		const nextBullet = this.bullets[nextIdx];
		
		//currentBullet.classList.add('dots-btn--not-active');
		
		this.bullets.forEach( bullet => bullet.classList.add('dots-btn--not-active'))
		nextBullet.classList.remove('dots-btn--not-active');
		function transitionAnim() {
			console.log('transitionAnim');
			
			const tl = new TimelineMax({
				onComplete: () => {
					self.state.animating = false;
				}
			});
			
			gsap.set(nextText, {clearProps: 'all'})
	
	
			TweenMax.set(nextImg, {scale: 1.2});
			// IN
			tl.fromTo(overlayR, 1.5, {scaleX: 0, autoAlpha: 1}, {scaleX: 1, autoAlpha: 1, ease: p2I})
			tl.fromTo(overlayL, 1.1, {scaleX: 0, autoAlpha: 1}, {scaleX: 1, autoAlpha: 1, ease: p2I}, '<0.4')
			tl.fromTo(currentText, 0.7, {yPercent: 0}, {yPercent: -100, ease: p2I, stagger: 0.1}, '-=1.3' )
			tl.fromTo(currentTextLine, 0.7, {width: 120, y: 0}, {width: 0, y: -50, ease: p2I}, "<")
	
			tl.call(()=> gsap.fromTo(currentImg, 1.5, {scale: 1}, {scale: 1.3, ease: p2I}), null, '<0.1')
	
			tl.call(()=>{
				self.slides.forEach(el => el.classList.add('slide--hidden'));
				next.classList.remove('slide--hidden');
			}, null, null)
	
			// OUT
			tl.fromTo(overlayR, 1, {scaleX: 1, autoAlpha: 1}, {scaleX: 0, autoAlpha: 1, immediateRender: false,  ease: "power1.out"}, '<')
			tl.fromTo(overlayL, 0.8, {scaleX: 1, autoAlpha: 1}, {scaleX: 0, autoAlpha: 1, immediateRender: false,  ease: "power1.out"}, '<')
			tl.fromTo(nextText, 2.3, {yPercent: -100}, {yPercent: 0, ease: p4O, stagger: 0.1}, '-=1')
			tl.fromTo(nextTextLine, 1.5, {width: 0, y: -50}, {width: 120, y: 0, ease: p4O}, '<')
			tl.call(()=> gsap.fromTo(nextImg, 1.3, {scale: 1.2}, {scale: 1, ease: "power1.out"}), null, '<-0.5')

		return tl
	}
	transitionAnim().play()
	}

	nextSlide(e) {
		if (this.state.animating) return
		this.state.animating = true
		
		if(e !== null){
			const idxCurent = this.data.current;
			const idxNext = $(e.target).closest('.dots-item').data().slide;

			this.transitionNext(idxCurent, idxNext);

			this.data.current = idxNext;
			this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1
			console.log(this.data.next);
			
		} else {
			const idxCurent = this.data.current;
			const idxNext = this.data.next;
			
			this.transitionNext(idxCurent, idxNext);

			this.data.current = idxNext;
			this.data.next = this.data.current === this.data.total ? 0 : this.data.current + 1
			
			
			console.log(this.data.next);
		}
	}

	listeners() {

		// window.addEventListener('wheel', ()=>{
		// 	this.nextSlide(null);
		// });
		// window.addEventListener('touchmove', ()=>{
		// 	this.nextSlide(null);
		// });
		const self = this;
		// setTimeout(()=>{
		// 	console.log(2000);
		// 	setInterval(function(){
		// 		self.nextSlide(null)
		// 	}, 3000)
		// }, 2000)
		// $('.dots-btn').on('click', this.nextSlide)
	}


	init(){
		this.setStyles();
		this.listeners();
		
	}
}

const sl = new CustomSl({
	container: '.main-slaider',
	dotsContainer: '.dots',
});







/*
	* page transition site start
*/ 

let page = {};
if( $body.hasClass('js_animation') ){



	class Paginator {
		constructor(settings) {
			this.slides = [...document.querySelectorAll(`${settings.container}`)]
			this.speed = settings.speed,
			this.activeSlide = 0;
			this.canGo = true;
			this.min = 0;
			this.max = this.slides.length - 1;
			
			this.scrollEvents();
			this.setStyle();
		}
		
		setStyle() {
			var self = this;

			self.slides.forEach(el => el.classList.add('slide--hidden'));
			self.slides[0].classList.remove('slide--hidden')

		}
		scrollEvents() {
			var self = this;


			$(window).on('wheel', function(e) {
				if(!self.canGo) return;
				
				e = e.originalEvent;
				var direction = e.deltaY > 0 ? 1 : -1;
				
				var newSlide = self.activeSlide + direction;
				if(newSlide > self.max || newSlide < self.min) return;
				self.canGo = false;
				
				PubSub.publish( 'gotoSlide', {from: self.activeSlide, to: newSlide, direction} );
				self.activeSlide = newSlide;
				
				// add delay
				setTimeout(()=> { self.canGo = true; }, self.speed);
			});
		}
	}



	function pageTransitionLeft(callbackChangeSlide, callbackAnimationSlide = null) {
		const obj = {
			paused: true
		}
		const overlay_1 = '.transition-effect__1';
		const overlay_2 = '.transition-effect__3';

		const tl = gsap.timeline(obj);

		tl.fromTo(overlay_1, 0.4, {rotation: 45, scale: 0}, {rotation: 45, scale: 1, ease: "sine.out"})
		tl.fromTo(overlay_2, 0.4, {rotation: 45, scale: 0}, {rotation: 45, scale: 1, ease: "sine.out"}, '<')
		
		tl.call(()=> logoPageTransitionIn().play(), null, '-=0.25')
		tl.call(callbackChangeSlide)
		tl.fromTo(overlay_1, 0.4, {rotation: 45, scale: 1}, {rotation: 45, scale: 0, ease: "sine.out"}, '+=0.4')
		tl.fromTo(overlay_2, 0.4, {rotation: 45, scale: 1}, {rotation: 45, scale: 0, ease: "sine.out"}, '<')
		tl.call(()=> logoPageTransitionOut().play(), null, '-=0.4')
		tl.call(()=> {
			if(callbackAnimationSlide !== null) {
				callbackAnimationSlide().play();
			}
		}, null, '<-0.25');
		return tl;
	};
	function pageTransitionRight(callback) {
		const obj = {
			paused: true,
		}
		const overlay_1 = '.transition-effect__2';
		const overlay_2 = '.transition-effect__4';
		const tl = gsap.timeline(obj);

		tl.fromTo(overlay_1, 0.4, {rotation: 45, scale: 0}, {rotation: 45, scale: 1, ease: 'p4O'})
		tl.fromTo(overlay_2, 0.4, {rotation: 45, scale: 0}, {rotation: 45, scale: 1, ease: 'p4O'}, '<')
		tl.fromTo(overlay_1, 0.4, {rotation: 45, scale: 1}, {rotation: 45, scale: 0, ease: 'p4O'}), '-=0.4'
		tl.fromTo(overlay_2, 0.4, {rotation: 45, scale: 1}, {rotation: 45, scale: 0, ease: 'p4O'}, '<')
		
		return tl;
	};
	//pageTransitionRight().play()
	// 
	page = new Paginator({
		container: 'section.section',
		speed: 2600, // speed animation page transition

	});
	page.canGo = false;




	PubSub.subscribe('gotoSlide', function(msg, data){

		console.log(msg, data);
		const changeSlide = function(){
			page.slides.forEach(el => el.classList.add('slide--hidden'));
			page.slides[data.to].classList.remove('slide--hidden');
		}
		switch (data.to) {
			case 1:
				$body.attr('data-active', 2);
				pageTransitionLeft(changeSlide, secondSlAnim).play();
				break;
			case 2:
				$body.attr('data-active', 3);
				pageTransitionLeft(changeSlide, threeSlAnim).play();
				break;
			case 3:
				setGalleryPos($galleryPicture.length)
				$body.attr('data-active', 4);
				pageTransitionLeft(changeSlide, fourSlAnim).play();
				break;
			case 4:
				$body.attr('data-active', 5);
				const callback = ()=> {
					return {play: ()=> setGalleryPos(1)}
				}
				pageTransitionLeft(changeSlide, callback).play();
				break;
			case 5:
				setGalleryPos($galleryPicture.length)
				$body.attr('data-active', 6);
				pageTransitionLeft(changeSlide, sixSlAnim).play();
				break;
				
			default:
				pageTransitionLeft(changeSlide).play();
				break;
		}

	});

	function logoPageTransitionIn () {
		const logoL = '.loader-logo__l';
		const logoR = '.loader-logo__r';
		gsap.set([logoL, logoR], {autoAlpha: 0});
		const obj = {
		paused: true,
		}
		const tl = gsap.timeline(obj);
			tl.fromTo(logoL, 0.25, {x: -30, y: -30, rotation: -25, autoAlpha: 0}, {overwrite: 'auto',x: 0, y: 0, rotation: 0, autoAlpha: 1, ease: circ})
			tl.fromTo(logoR, 0.25, {x: 30, y:30, autoAlpha: 0, rotation: -25}, {overwrite: 'auto', x: 0, y:0, autoAlpha: 1, rotation: 0, ease: circ}, '<')
		return tl;
	};
	logoPageTransitionIn();

	function logoPageTransitionOut () {
		const logoL = '.loader-logo__l';
		const logoR = '.loader-logo__r';
		const obj = {
		paused: true,
		}
		const tl = gsap.timeline(obj);
			// tl.fromTo(logoL, 0.2, {x: 0, y: 0, rotation: 0, autoAlpha: 1}, {immediateRender: false ,x: -30, y: -30, rotation: -25, autoAlpha: 0, ease: 'none'})
			// tl.fromTo(logoR, 0.2,  { x: 0, y:0, autoAlpha: 1, rotation: 0}, {immediateRender: false ,x: 30, y:30, autoAlpha: 0, rotation: -25, ease: 'none'}, '<')

			tl.fromTo(logoL, 0.05, { autoAlpha: 1}, {immediateRender: false , autoAlpha: 0, ease: 'none'})
			tl.fromTo(logoR, 0.05,  { autoAlpha: 1}, {immediateRender: false , autoAlpha: 0, ease: 'none'}, '<')
		return tl;
	};







/*
	* secondSlAnim start
	*/

	function secondSlAnim() {
		const overlay = '.section__img-overlay';
		const content = '.section-second__title span';
		const text = '.section-second__text';

		const obj = {
		paused: true,
		}
		const tl = gsap.timeline(obj);
		gsap.set([content, text], {autoAlpha:0});

		
		tl.fromTo(overlay, 1, {scaleX: 1}, {scaleX: 0, ease: ex})
		tl.call(()=>{
			hoverArrEl.forEach(el=> el.previous());
			hoverArrEl[0].next();
		}, null, '<')
		tl.staggerFromTo(content, 1.2, {xPercent: -30, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, ease: p4}, 0.1, '<-0.2')
		tl.fromTo(text, 1.2, {yPercent: 100, autoAlpha: 0}, {yPercent: 0, ease: ex, autoAlpha: 1}, '<')

		return tl;
	};
	secondSlAnim()

/*
	* secondSlAnim end
	*/

	/*
	* threeSlAnim start
	*/
	
	function threeSlAnim() {
	const overlay = '.section-third .section__img-overlay';
	const title = '.section-third__subtitle';
	const text = '.section-third__text';
	const link = '.section-third__link';
	gsap.set([], {autoAlpha:0});
	const obj = {
	paused: true,
	}
	const tl = gsap.timeline(obj);
	
	gsap.set([title, text, link], {autoAlpha:0});
	
		
	tl.fromTo(overlay, 1, {scaleX: 1}, {scaleX: 0, ease: ex})
	tl.call(()=>{
		hoverArrEl.forEach(el=> el.previous());
		hoverArrEl[1].next();
	}, null, '<')
	tl.staggerFromTo(title, 1.2, {xPercent: -30, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, ease: p4}, 0.1, '<-0.2')
	tl.fromTo(text, 1.2, {yPercent: 100, autoAlpha: 0}, {yPercent: 0, ease: ex, autoAlpha: 1}, '<')
	tl.fromTo(link, 1.2, {yPercent: 100, autoAlpha: 0}, {yPercent: 0, ease: ex, autoAlpha: 1}, '<')
	
	
	return tl;
	};
	threeSlAnim();
	
	/*
	* threeSlAnim end
	*/
	
	/*
	* fourSlAnim start
	*/
	
	function fourSlAnim() {
		const overlayBox = '.section-four-content';
		const content = '.js-data-four_stagger';
		const desc = '.features-item__desc';
		const num = '.features-item__num';
		gsap.set([overlayBox, content, num], {autoAlpha: 0});
		const obj = {
			paused: true,
		}
		
		const tl = gsap.timeline(obj);
		
		tl.fromTo(overlayBox, 1.1, {scaleY: 0, autoAlpha: 0}, {scaleY: 1, autoAlpha: 1, ease: ex})
		tl.call(()=>{
			hoverArrEl.forEach(el=> el.previous());
			hoverArrEl[2].next();
		}, null, '<')
		tl.fromTo(content, 1, {y: 100, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: ex, stagger: 0.1}, '<')
		tl.fromTo(desc, 1, {x: -50, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: ex, stagger: 0.1}, '<0.1')
		tl.fromTo(num, 1, {y: 50, autoAlpha: 0}, {y: 0, autoAlpha: 1, ease: ex, stagger: 0.1}, '<')
		tl.call(()=>{
			$('.js_num_1').animateNumber(
				{ number: 5 },{
					easing: 'swing',
					duration: 1200
				});
			$('.js_num_2').animateNumber(
				{ number: 17 },{
					easing: 'swing',
					duration: 1200
				});
			$('.js_num_3').animateNumber(
				{ number: 10 },{
					easing: 'swing',
					duration: 1200
				});
	
		}, null, '<')
	
	
		return tl;
	};
	
	fourSlAnim();
	/*
	* fourSlAnim end
	*/

	/*
	* sixSlAnim start
	*/
	function sixSlAnim() {
		const news = '.section__six .card';
		const title = '.section__six .card .card__title';
		const text = '.section__six .card .card__text';
		const titleSec = '.section__six .section-title';
		const overlay = '.section__six .hover-overlay';
		const logo = '.section__six .card .hover-logo';
		const logoL = '.section__six .card .hover-logo__l';
		const logoR = '.section__six .card .hover-logo__r';
		const btn1 = '.news-nav-link__goup';
		const btn2 = '.all-news';
	
		gsap.set([news, title, text, titleSec, logo, btn1, btn2], {autoAlpha: 0});
		gsap.set([logoL, logoR], {x: 0, y: 0, rotation: 0});
		gsap.set([overlay], {autoAlpha: 1});
		const obj = {
			paused: true,
			onComplete: ()=>{
				gsap.set([logoL, logoR, logo, overlay], {clearProps: 'all'});
	
		}
		}
		const tl = gsap.timeline(obj);
			tl.fromTo([titleSec, btn1, btn2], 1, {y: 80, autoAlpha: 0}, {y:0, autoAlpha: 1, ease: ex})
			tl.fromTo(news, 1, {y: 80, autoAlpha: 0}, {y:0, autoAlpha: 1, stagger: 0.1, ease: ex}, '<')
			tl.fromTo(title, 1, {x: -120, autoAlpha: 0}, {x: 0, autoAlpha: 1, ease: ex}, '<')
			tl.fromTo(text, 1, {y: 120, autoAlpha: 0}, {y:0, autoAlpha: 1, ease: ex}, '<')
			tl.fromTo(logo, 1, {y: 120, autoAlpha: 0}, {y:0, autoAlpha: 1, ease: ex}, '<')
		return tl;
	};
	sixSlAnim()
	/*
	* sixSlAnim end
	*/

	
	


}






	
	
	
	
	
	
	
	
	
	

	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	* slider start
	*/
    var 
        $gallery = $(".gallery"),
    		$galleryPictures = $(".gallery-pictures"),
        $galleryPicture = $(".gallery-picture"),
        lastPos = {x:0},
        galleryPos = {x:0},
        currentImage = 1,
        imageWidth = $('.gallery').width(),
        imageSpacing = 120,
        imageTotalWidth= $('.gallery').width(),
        speedLog=[],
        speedLogLimit=5,
        minBlur=2,
        maxBlur=200,
        blurMultiplier=0.25,
        lastBlur=0,
        dragging=false,
        lastDragPos={x:0},
        dragPos={x:0},
        totalDist=0,
        distThreshold=10,
        distLog=[],
        distLogLimit=10,
        momentumTween=null
    ;

	function setBlur(v){
		if(v<minBlur) v=0;
		if(v>maxBlur) v=maxBlur;
		if(v!=lastBlur){
			$("#blur").get(0).firstElementChild.setAttribute("stdDeviation",v+",0");
		}
		lastBlur=v;
	}

	$galleryPictures.css({
		webkitFilter:"url('#blur')",
		filter:"url('#blur')"
	});
    $galleryPicture.each(function(i) {
        var cur = $(this);
  		// cur.click(function(){
  		// 	if(Math.abs(totalDist)<distThreshold)
  		// 		setGalleryPos(i);
  		// });
  		$(".gallery-pagination-dot").eq(i).click(function(){
  			setGalleryPos(i+1);
  		})
    });

    function setGalleryPos(v,anim){
    	if(typeof anim=="undefined") anim=true;
    	stopMomentum();
    	TweenMax.to(galleryPos,anim?0.8:0,{
    		x:-v*imageTotalWidth,
    		ease:Quint.easeOut,
    		onUpdate:updateGalleryPos,
    		onComplete:updateGalleryPos
    	});
    }

    function updateGalleryPos(){
			TweenMax.set($galleryPictures,{
				x:galleryPos.x+(imageWidth),
    		force3D:true,
    		lazy:true
    	});
    	var speed=lastPos.x-galleryPos.x;
    	var blur=Math.abs(Math.round(speed*blurMultiplier));
	    setBlur(blur);
    	lastPos.x=galleryPos.x;

	    var _currentImage=Math.round(-galleryPos.x/imageTotalWidth);
	    if(_currentImage!=currentImage){
	    	currentImage=_currentImage;
	    	$(".gallery-pagination-dot-selected").removeClass('gallery-pagination-dot-selected');
	    	$(".gallery-pagination-dot").eq(currentImage-1).addClass('gallery-pagination-dot-selected')
	    }

    }
    $gallery.mousedown(function(event){
    	event.preventDefault();
    	dragging=true;
    	dragPos.x=event.pageX;
    	lastDragPos.x=dragPos.x;
    	totalDist=0;
    	distLog=[];

    	stopMomentum();

    	updateGalleryPosLoop();
    });
    $(document).mousemove(function(event){
    	if(dragging){
    		dragPos.x=event.pageX;
    	}
    });
    function updateGalleryPosLoop(){
    	if(dragging){
    		updateGalleryPos();
    		var dist=dragPos.x-lastDragPos.x;
    		lastDragPos.x=dragPos.x;
    		totalDist+=dist;
    		distLog.push(dist);
    		while(distLog.length>distLogLimit){
    			distLog.splice(0,1);
    		};
    		galleryPos.x+=dist;
    		requestAnimationFrame(updateGalleryPosLoop)
    	}
    }
    $(document).mouseup(function(event){
    	if(dragging){
	    	dragging=false;
	    	var releaseSpeed=0;
	    	for (var i = 0; i < distLog.length; i++) {
	    		releaseSpeed+=distLog[i];
	    	};
	    	releaseSpeed/=distLog.length;

				var targetX=galleryPos.x+(releaseSpeed*20);
				targetX=Math.round(targetX/imageTotalWidth)*imageTotalWidth;
	    	var targetImage=-targetX/imageTotalWidth;
	    	var excess=1;
	    	if(targetImage<1){
	    		excess=targetImage;
	    		targetImage=1;
	    	}else if(targetImage>=$galleryPicture.length){
	    		excess=targetImage-($galleryPicture.length-1);
	    		targetImage=$galleryPicture.length-1;
	    	}
	    	if(excess!=1){
	    		targetX=-targetImage*imageTotalWidth;
	    	}
	    	momentumTween=TweenMax.to(galleryPos,1-(Math.abs(excess)/20),{
	    		x:targetX,
	    		ease:Quint.easeOut,
	    		onUpdate:updateGalleryPos,
	    		onComplete:updateGalleryPos
	    	});

	    	if(Math.abs(totalDist)>=distThreshold){
	    		event.preventDefault();
	    		event.stopPropagation();
	    	}
	    }
    });
    function stopMomentum(){
    	if(momentumTween!=null){
	    	momentumTween.kill();
	    	momentumTween=null;
	    	updateGalleryPos();
	    }
    }

		setGalleryPos($galleryPicture.length,false);
		
		const gallPrevBtn = $('.js-gallery-pagination-arrow__prev');
		const gallNextBtn = $('.js-gallery-pagination-arrow__next');
			gallPrevBtn.on('click', function(){
				const idx = (currentImage === 1) ? $galleryPicture.length : currentImage - 1
				setGalleryPos(idx);
			});
			
			gallNextBtn.on('click', function(){
				const idx = (currentImage === $galleryPicture.length) ? 1 : currentImage + 1
				setGalleryPos(idx);
		});

	/*
	* slider end
	*/
	
	
	
	
	

	/*
	* menu site start
	*/

	const $menuBtn = $('.js-menu-btn');

	$menuBtn.on('click', function(){
		
	});

	/*
	* menu site end
	*/
	/*
	* form submit site start
	*/
	
	
	
	
	
	
	
	
	
	
	

	
	$('.js-main-form__input').on('focus', function () {
		$(this).parent().addClass('js-input-focus');
	}).blur(function () {
		if ($(this).val() === '') {
			$(this).parent().removeClass('js-input-focus');
		}
	});
	
	$('#call-form').on('submit', function (e) {
		event.preventDefault();
		var parent = e.target;
		ajax_form(parent);
	});
	
	function ajax_form(e) {
		event.preventDefault();
		var err = [];
		let serverAnsver = {};
		var rulesPattern = {
			email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
			tel: /^\+38\(\d{3}\)\d{7}$/
		};
		var validatorMethods = {
			empty: function (el) {
				return (el === '') ? true : false;
			},
			pattern: function (el, pattern) {
				return pattern.test(el);
			},
			contains: function (el1, el2) {
				return (el1 == el2) ? false : true;
			},
			check: function (el) {
				return (el.checked) ? false : true;
			},
			max: function (el) {
				return (el.length > 5) ? true : false;
			}
		}
		var removeAnimationClass = function (selector, classAnimation) {
			selector.addClass(classAnimation);
			selector.on("animationend", function () {
				selector.removeClass(classAnimation);
			});
		}
		var pushError = function (key) {
			err.push(key);
		}
		var showError = function (key) {
			var errorMessage = $(this).next().data("errormessage"); // добавляем в input сообщение об ошибке из dataAttr и class
			var inputText = $(this).next().find('.main-form__text');
			($(this).closest('.main-form-block').hasClass('js-input-focus')) ? removeAnimationClass(inputText, 'shake-focus'): removeAnimationClass(inputText, 'shake')
	
			inputText.text(errorMessage);
			$(this).addClass('js-no-valid');
			pushError(key)
		}
		var showDefaultMessage = function () {
			var defaultMessage = $(this).next().data("defaultmessage"); // при клике на input убираем сообщение и class
			$(this).next().find('.main-form__text').text(defaultMessage);
	
			$(this).removeClass('js-no-valid');
		}
		var str = $("#" + e.id).serialize();
		//var x = document.forms[e.id]["name"].value;
		//var y = document.forms[e.id]["tel"].value;
		//	console.log(str);
	
	
		var errors = true; // по умолчанию ошибок в форме нет
		$(e).find('.main-form__input-requaired').each(function () {
			var rule = $(this).data("rule").split(' ');
			if ($(this).data("patterns") != undefined) {
				var pattern = $(this).data("patterns").split(' ');
			}
			if ($(this).data("compare") != undefined) {
				var compare = $(this).data("compare").split(' ');
			}
	
			rule.forEach((el) => {
	
	
				switch (el) {
					case 'pattern':
						pattern.forEach((elPat) => {
							errors = !validatorMethods[el]($.trim($(this).val()), rulesPattern[elPat]);
							if (errors) showError.call($(this), elPat);
						});
						break;
					case 'contains':
						var compareElemOne = $('#' + compare[0]).val();
						var compareElemTwo = $('#' + compare[1]).val();
						errors = validatorMethods[el](compareElemOne, compareElemTwo);
						if (errors) showError.call($(this), el);
						break;
					case 'check':
						errors = validatorMethods[el]($(this)[0]);
						if (errors) showError.call($(this), el);
						break;
					default:
						errors = validatorMethods[el]($.trim($(this).val()));
						if (errors) showError.call($(this), el);
				}
			})
	
			$(".main-form__input").on("mouseup", showDefaultMessage);
	
		});
		if (err.length == 0) {
			get(str, "./static/val.php", true, (data) => {
				serverAnsver = data.error;
				for (let key in serverAnsver) {
					showErrorMessage.call(e, key, serverAnsver[key])
				};
	
				if (serverAnsver.length == 0) {
					get(str, "./static/val.php", true, () => {
						$.ajax({
								method: "POST",
								url: "./static/val.php",
								data: str,
								beforeSend: function () {
									$(e).find('button.js-main-form__button').text('Отправка...') // замена текста в кнопке при отправке
									$('body').css('cursor', 'wait')
								},
								error: function () {
									$(e).find('button.js-main-form__button').text('Ошибка отправки!'); // замена текста в кнопке при отправке в случае
								}
							})
							.done(function (msg) {
								$('.form-succses').addClass('form-succses-active');
								$(e).find('.main-form__input-requaired').each(function (el) {
									$(this).val('');
									showDefaultMessage.call($(this));
								});
								$(e).find('.main-form-block.requaired').removeClass('js-input-focus');
								$('body').css('cursor', 'default');
								//location.replace('/message/');
								$(e).find('button.js-main-form__button').text('Отправить');
							});
					});
				}
			});
	
		}
	
		function showErrorMessage(elem, text) {
			const element = $(this).find(`[data-type="${elem}"] .main-form__text`);
			const inp = element.closest('.requaired').find('.main-form__input-requaired');
			inp.addClass('js-no-valid');
			removeAnimationClass(element, 'shake-focus')
			element.text(text);
		}
	}
	
	/*
	 * form submit site end
	 */
	/**********************************/
	/*
		* data time start
	*/
		$.datetimepicker.setLocale('ru');
		var logic1 = function (currentDateTime) {
			if (currentDateTime.getDate() == new Date().getDate()) {
				this.setOptions({
					minTime: new Date()
				});
			} else {
				this.setOptions({
					minTime: '9:00'
				});
			}
		};
	
		$('.js-datetimepicker_dark').datetimepicker({
			//            theme:'dark',
			// value: 'trololo',
			// value: new Date(),
			minDate: new Date(),
			maxTime: '20:00',
			yearStart: 2019,
			yearEnd: 2019,
			dayOfWeekStart: 1,
			onSelectDate: logic1,
			onShow: logic1
	
		});
	/*
		* data time end
	*/
	/**********************************/
	/*
		* popup open start
	*/

	const callTimeRadio = $('.js-time-call');
	const inputTime = $('.js-main-form-block__data-time');

	callTimeRadio.on('change', function(){
		const val = +$(this).val();
		if(val === 0){
			inputTime.slideUp(300);
			inputTime.find('.main-form__input').removeClass('main-form__input-requaired');
		} else {
			inputTime.slideDown(300);
			inputTime.find('.main-form__input').addClass('main-form__input-requaired');
		}
		
	});
		      // $('.js-call-popup').magnificPopup({
		      // 	callbacks: {
		      // 		beforeOpen: function () {
		      // 			// ANIMATION MODAL POPUP
		      // 			const blockModal = $(this.st.el),
		      // 				overlayClass = blockModal.attr('data-modal-class'),
		      // 				animationClass = blockModal.attr('data-effect');
		      // 			if (overlayClass) this.st.mainClass = `${this.st.mainClass} ${overlayClass} ${animationClass} `;
		      // 		},
		      // 		beforeClose: function () {

		      // 		},

		      // 		open: function () {
		      // 			// DOM ELEMENTS
		      // 			let closeModalBtn = $('.js-close-btn');
		      // 			let link = $('.js-u-deal-modal__close-btn');
		      // 			closeModalBtn.on('click', () => $.magnificPopup.close());

		      

		      // 		}

		      // 	}
					// });
					



					var $modal = $(".js-modal"),
					$overlay = $(".js-modal-overlay"),
					blocked = false,
					unblockTimeout = null;
					
					console.log($modal, $overlay);
		TweenMax.set($modal, {
			autoAlpha: 0
		})

		var isOpen = false;

		function openModal() {
			if (!blocked) {
				block(400);

				$body.addClass('modal-active');
				
				TweenMax.to($overlay, 0.3, {
					autoAlpha: 1
				});
				let customEase = gsap.parseEase("Elastic.easeOut(0.4, 0.3)");

				TweenMax.fromTo($modal, 0.5, {
					x: (-$(window).width() - $modal.width()) / 2 - 50,
					scale: 0.9,
					autoAlpha: 1
				}, {
					delay: 0.1,
					rotationY: 0,
					scale: 1,
					opacity: 1,
					x: 0,
					z: 0,
					ease: customEase,
					force3D: false
				});
				$.startUpdatingBlur(800);
			}
		}

		function closeModal() {
			if (!blocked) {
				$body.removeClass('modal-active');

				block(400);
				TweenMax.to($overlay, 0.3, {
					delay: 0.3,
					autoAlpha: 0
				});
				TweenMax.to($modal, 0.3, {
					x: ($(window).width() + $modal.width()) / 2 + 100,
					scale: 0.9,
					ease: Quad.easeInOut,
					force3D: false,
					onComplete: function () {
						TweenMax.set($modal, {
							autoAlpha: 0
						});
					}
				});
				$.startUpdatingBlur(400);
			}
		}

		function block(t) {
			blocked = true;
			if (unblockTimeout != null) {
				clearTimeout(unblockTimeout);
				unblockTimeout = null;
			}
			unblockTimeout = setTimeout(unblock, t);
		}

		function unblock() {
			blocked = false;
		}
		$body.on('click', '.js-call-popup', function () {
			openModal();
		});
		$body.on('click', ".modal-overlay,.js-close-btn", function () {
			closeModal();
		});

		$modal.initBlur(0.5);
	/*
		* popup open end
	*/
	/**********************************/
	/**********************************/
	/*
	* menu start
	*/
	spliterText('.js-menu__title-text', 'latter');

	var menuIsOpen = false,
		$menu = $(".js-menu"),
		$menuItem = $(".menu-item"),
		$menuBg = $(".menu-bg"),
		$menuToggle = $(".menu-toggle")
		;
		
		gsap.set($menu, {xPercent: -150});
		
		
function openMenu() {
		const	$menuTitle = [...$(".js-menu .gsap_latter")].reverse(),
					$footerItem = [...$(".js-menu .gsap-footer-stagger")].reverse();
		menuIsOpen = true;
	gsap.set([], {autoAlpha:0});
	const obj = {
	paused: true,
	}
	
	const tl = gsap.timeline(obj);
		tl.fromTo($menu, 1, {
			xPercent: -150,
			skewX: -25,
		}, {
			xPercent: 0,
			skewX: 0,
			ease: exO,
		})
		tl.fromTo([$footerItem, $menuTitle], 0.7, {
			x: -80,
			autoAlpha: 0,
		}, {
			x: 0,
			ease: exO,
			autoAlpha: 1,
			stagger: 0.05
		}, '0.05')
		tl.fromTo('.icon--sign', 0.5, {
			rotation: -80,
			autoAlpha: 0
		}, {
			rotation: 0,
			autoAlpha: 1
		}, '-=0.6')
	return tl;
};




function closeMenu() {
	const $menuTitle = [...$(".js-menu .gsap_latter")],
				$footerItem = [...$(".js-menu .gsap-footer-stagger")];
	menuIsOpen = false;
	gsap.set([], {autoAlpha:0});
	const obj = {
	paused: true,
	}
	
	const tl = gsap.timeline(obj);
		tl.fromTo($menu, 1.3, {
			xPercent: 0,
			skewX: 0,
		}, {
			xPercent: -150,
			skewX: 2,
			ease: ex,
		})
		tl.fromTo([$footerItem, $menuTitle], 0.7, {
			x: 0,
			autoAlpha: 1,
		}, {
			x: -80,
			autoAlpha: 0,
			ease: ex,
			stagger: 0.05
		}, '0.05')
		tl.fromTo('.icon--sign', 0.5, {
			rotation: 0,
			autoAlpha: 1
		}, {
			rotation: -80,
			autoAlpha: 0
		}, '-=0.6')
	return tl;
};

	function toggleMenu() {
		if (menuIsOpen) {
			$body.removeClass('menu-open');
			closeMenu().play().timeScale(0.9);
		} else {
			$body.addClass('menu-open');
			openMenu().play().timeScale(0.9);
		}
	}
	$body.on('click', '.js-menu-btn, .js-close-menu-btn', function () {
		toggleMenu();
	});



	//openMenu().play();

function createAnimationTool(fn) {

	$('.time_scale_025').on('click', () => fn().restart().timeScale(0.05))
	$('.time_scale_050').on('click', () => fn().restart().timeScale(0.50))
	$('.time_scale_075').on('click', () => fn().restart().timeScale(0.75))
	$('.time_scale_090').on('click', () => fn().restart().timeScale(0.9))
	$('.time_scale_1').on('click', () => fn().restart().timeScale(1.1))
}
createAnimationTool(closeMenu)

	/*
	* menu end
	*/
	/**********************************/
	});
})(jQuery);
