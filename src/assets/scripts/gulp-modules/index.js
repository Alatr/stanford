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
	const hoverEffectInstatse = new hoverEffect({
		parent: el,
		intensity: el.dataset.intensity || undefined,
		speedIn: el.dataset.speedin || undefined,
		speedOut: el.dataset.speedout || undefined,
		easing: el.dataset.easing || undefined,
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

				console.clear();
	
	const $body = $('body')
	var loader = function () {
		//$(".loader-wrap").delay(500).fadeOut(500);
		$(".loader-wrap").fadeOut(1);
	};
	loader();
//	$body.addClass('js_animation')

	
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
				page.canGo = true
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
		tl.fromTo(titleLine, 1.5, {width: 0, y: -50}, {width: 120, y: 0, ease: p4O}, '<')
		
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



	function pageTransitionLeft(callbackChangeSlide, callbackAnimationSlide = ()=>{}) {
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
		tl.call(()=> callbackAnimationSlide().play(), null, '<-0.25')
		
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
				pageTransitionLeft(changeSlide, secondSlAnim).play();
				break;
			case 2:
				pageTransitionLeft(changeSlide, threeSlAnim).play();
				break;
			case 3:
				pageTransitionLeft(changeSlide, fourSlAnim).play();
				break;
			case 4:
				pageTransitionLeft(changeSlide, fourSlAnim).play();
				break;
			case 5:
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






	
	
	
	
	
	
	
	
	
	

	

	function createAnimationTool(fn){

		$('.time_scale_025').on('click', ()=> fn().restart().timeScale(0.50))
		$('.time_scale_050').on('click', ()=> fn().restart().timeScale(0.50))
		$('.time_scale_075').on('click', ()=> fn().restart().timeScale(0.75))
		$('.time_scale_1').on('click', ()=> fn().restart().timeScale(1))
	}
	createAnimationTool(sixSlAnim)
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	* slider start
	*/
	console.log(`$('.gallary).width()`, $('.gallery').width());
    var 
        $gallery = $(".gallery"),
    		$galleryPictures = $(".gallery-pictures"),
        $galleryPicture = $(".gallery-picture"),
        lastPos = {x:0},
        galleryPos = {x:0},
        currentImage = -1,
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
  		cur.click(function(){
  			if(Math.abs(totalDist)<distThreshold)
  				setGalleryPos(i);
  		});
  		$(".gallery-pagination-dot").eq(i).click(function(){
  			setGalleryPos(i);
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
	    	$(".gallery-pagination-dot").eq(currentImage).addClass('gallery-pagination-dot-selected')
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
	    	var excess=0;
	    	if(targetImage<0){
	    		// excess=targetImage;
	    		// targetImage=0;
	    	}else if(targetImage>=$galleryPicture.length){
	    		excess=targetImage-($galleryPicture.length-1);
	    		targetImage=$galleryPicture.length-1;
	    	}
	    	if(excess!=0){
	    	//	targetX=-targetImage*imageTotalWidth;
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

    setGalleryPos(1,false);
	/*
	* slider end
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


	
	});
})(jQuery);


