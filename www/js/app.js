var fixedNav = function(){

	var nav = document.getElementById('nav-main'),
		navIsFixed = false;

	/**
	 * Check current scroll position and set nav-state
	 */
	var setNavState = function() {

		if (window.scrollY >= 675 && navIsFixed === false) {
			nav.className = "fixed";
			navIsFixed = true;
		}

		if (window.scrollY < 675 && navIsFixed === true) {
			nav.className = "";
			navIsFixed = false;
		}

	};

	/**
	 * Call on page load so nav is fixed on page reload without scrolling
	 */
	setNavState();

	window.addEventListener( 'scroll', setNavState, false);

}
var scrollingNavLinks = function(){
	$("#nav-main a").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		});
	});
}

var showcasePopup = function(){
	var settings = {

		$showcaseItems: $(".showcase-item"),
		$body: $("body"),
		$popup: false,

		template: '<div id="popup"><div class="overlay"></div><div class="showcase-modal"><div class="content"><h4>{{{title}}}</h4><small>{{type}}</small>{{#text}}<p>{{.}}</p>{{/text}}<a class="link" href="{{link}}" target="_blank">View Project</a><a class="link-B2" href="{{linkB2}}" target="_blank"></a></div><div class="images"><img src="{{images.0}}" alt="" class="preview" />{{#images}}<img src="{{.}}" alt="" class="thumb" />{{/images}}</div></div><div class="icon-cancel"></div></div>',

		view: {
			title: '',
			type: '',
			text: [
			],
			link: '',
			linkB2: '',
			images: [
			]
		}

	}

	var popupOpen = false,
		popupClosing = false;

	var getContent = function(index){
		settings.view = showcasePopupContent[index];
	}

	var renderPopup = function(){
		popupClosing = false;
		var rendered = Mustache.render(settings.template, settings.view);
     	settings.$body.append(rendered);
     	settings.$popup = $("#popup");
	}

	var closePopup = function(e){
		if( e.target !== this ) {
   			return;
		}

 		if (popupClosing === false) {
 			settings.$showcaseItems.removeClass("active");
 			popupClosing = true;
			settings.$popup.removeClass("active");
			setTimeout(function(){
				settings.$popup.remove();
				popupOpen = false;
			}, 400);
 		}
 	}

	var bindPopupControls = function() {
		settings
			.$popup
				.find(".icon-cancel, .overlay")
				.click(closePopup);

		var $preview = settings.$popup.find(".preview");

		settings
			.$popup
				.find(".thumb")
				.click(function(){
					$preview.attr("src", $(this).attr("src"));
				});
	}

	var positionPopup = function(){
		if (window.innerWidth < 768) {
			settings
				.$popup.find(".showcase-modal, .icon-cancel").css("margin-top", window.scrollY+5);
		}
	}

	var showPopup = function(){
		setTimeout(function(){
			settings.$popup.addClass("active");
		}, 200);
	}

	settings.$showcaseItems.click(function(){
		if (popupOpen === false) {

			settings.$showcaseItems.removeClass("active");
			$(this).addClass("active");

			popupOpen = true;
			getContent($(this).attr("data-project"));
			renderPopup();
     		bindPopupControls();
     		positionPopup();
     		showPopup();
		}
	});

}
var showcasePopupContent = {
	"reis-automatica": {
		title: 'reis Automatica 2014',
			type: 'Responsive Microsite',
			text: [
				'Reis Robotics is a leading technology company for robotics and system integration founded in Germany.',
				'The Automatica is an international trade fair for automation.',
				'For the fair we made a responsive microsite and an offline iPad App with information about the Reis exhibition stand',
				'I developed the microsite in 2 languages, based on screen designs.'
			],
			link: 'http://www.reisrobotics.de/automatica2014/en/index.html',
			linkB2: 'http://b2online.de/kreationen#reis_microsite',
			images: [
				'img/portfolio/reis-automatica/screen01.png',
				'img/portfolio/reis-automatica/screen02.png',
				'img/portfolio/reis-automatica/screen03.png',
				'img/portfolio/reis-automatica/screen04.png'
			]
	},
	"ids": {
		title: 'IDS Logistik',
			type: 'Corporate Website',
			text: [
				'IDS Logistik is an european cooperation of mainly german shipping companies.',
				'A big problem of the old website was the user guidance. Many customers called the wrong phone numbers or weren\'t able to find their delivery.',
				'I worked on the concept and developed the website. I implemented the frontend of the desktop website, the required CMS modules and the track and trace connection.'
			],
			link: 'http://www.ids-logistik.de/',
			linkB2: 'http://b2online.de/kreationen#ids_website',
			images: [
				'img/portfolio/ids/screen01.png',
				'img/portfolio/ids/screen02.png',
				'img/portfolio/ids/screen03.png',
				'img/portfolio/ids/screen04.png'
			]
	},
	"nine-inazuma3": {
		title: 'Inazuma Eleven 3',
			type: 'Microsite',
			text: [
				'Inazuma Eleven 3 is a role-playing sports video game for the Nintendo 3DS.',
				'This microsite is one of the many I did for Nintendo of Europe in the last years. Nintendo sites are always challenging since you have to develop 16+ versions for different countries and languages in a short time.',
				'My job was to develop the site based on screendesigns.'
			],
			link: 'https://www.nintendo.co.uk/Games/Nintendo-3DS/Inazuma-Eleven-3-Lightning-Bolt-796260.html',
			linkB2: 'http://b2online.de/',
			images: [
				'img/portfolio/nine-inazuma3/screen01.png',
				'img/portfolio/nine-inazuma3/screen02.png',
				'img/portfolio/nine-inazuma3/screen03.png',
				'img/portfolio/nine-inazuma3/screen04.png'
			]
	},
	"nine-marioluigidreamteam": {
		title: 'Mario & Luigi:<br />Dream Team Bros.',
			type: 'Microsite',
			text: [
				'Mario & Luigi: Dream Team Bros. is a platformer and RPG video game for the Nintendo 3DS.',
				'Nintendo sites are always challenging since you have to develop 16+ versions for different countries and languages in a short time.',
				'My job was to develop the site based on screendesigns, including animations and localisation for 8 countries.'
			],
			link: 'https://www.nintendo.co.uk/Games/Nintendo-3DS/Mario-Luigi-Dream-Team-Bros--762456.html',
			linkB2: 'http://b2online.de/',
			images: [
				'img/portfolio/nine-marioluigidreamteam/screen01.png',
				'img/portfolio/nine-marioluigidreamteam/screen02.png',
				'img/portfolio/nine-marioluigidreamteam/screen03.png',
				'img/portfolio/nine-marioluigidreamteam/screen04.png'
			]
	},
	"tof": {
		title: 'trans-o-flex',
			type: 'Corporate Website',
			text: [
				'trans-o-flex is an european logistic group which does common logistics and transports dangerous goods additionally.',
				'The Challenge in this project was the mass of content and the required CMS flexibility so the website can be easily changed by the marketing department.',
				'I implemented the frontend based on screen desings + styleguide and implemented also parts of the CMS.'
			],
			link: 'http://trans-o-flex.com/en/home',
			linkB2: 'http://b2online.de/kreationen#trans_o_flex_website',
			images: [
				'img/portfolio/tof/screen01.png',
				'img/portfolio/tof/screen02.png',
				'img/portfolio/tof/screen03.png',
				'img/portfolio/tof/screen04.png'
			]
	},
	"ohv": {
		title: 'OHV Insurance broker',
			type: 'Corporate Website',
			text: [
				'OHV is a local insurance broker company.',
				'They needed a website to represent their company, team and products. All the people on the site are real employees and not anonymous testimonials.',
				'I developed the website based on screen designs.'
			],
			link: 'http://ohv-goldbach.de/',
			linkB2: 'http://b2online.de/kreationen#ohv',
			images: [
				'img/portfolio/ohv/screen01.png',
				'img/portfolio/ohv/screen02.png',
				'img/portfolio/ohv/screen03.png',
				'img/portfolio/ohv/screen04.png'
			]
	},
}
$(function(){
	fixedNav();
	scrollingNavLinks();
	showcasePopup();
});

