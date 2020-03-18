let menuModule = (function() {
	'use strict';
	let menu = document.createElement('div');
	menu.classList.add('menu');
	menu.innerHTML = `
    <div class="menu__item1 menu__item">
    <h3>Pizza Cielo<span> $550</span></h3>
    <img src="img/pizza_cielo.png" alt="" />
</div>
<div class="menu__item2 menu__item">
    <h3>Pizza Rey<span> $350</span></h3>
    <img src="img/pizza_rey.jpg" alt="" />
</div>
<div class="menu__item3  menu__item">
    <h3>Pizza Rambla<span> $450</span></h3>
    <img src="img/pizza_rambla.png" alt="" />
</div>`;

	return {
		menu,
	};
})();

export { menuModule };
