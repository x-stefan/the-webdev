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