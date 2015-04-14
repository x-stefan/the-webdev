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