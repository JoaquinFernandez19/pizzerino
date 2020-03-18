let headerModule = (function() {
	'use strict';
	let header = document.createElement('div');
	header.classList.add('header');
	header.innerHTML = `
		<div class="header__logo ">
			<span id="homeBtn"><span>PIZZERINO</span><i class="fas fa-pizza-slice icon"></i><span>
		</div>
		<div class="header__navBar">
			<ul>
			<a href="#" class="menuBtn">Menu</a>
			<a href="#" class="contactBtn">Contact</a>
			</ul>
		</div>`;

	return {
		header,
	};
})();

export { headerModule };
