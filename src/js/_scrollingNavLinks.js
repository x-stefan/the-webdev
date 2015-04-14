var scrollingNavLinks = function(){
	$("#nav-main a").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		});
	});
}
