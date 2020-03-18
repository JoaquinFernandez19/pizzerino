let homeModule = (function() {
	let article = document.createElement('div');
	article.classList.add('article');

	article.innerHTML = `<div class="article__title">
    <h1>El camino de la Pizza</h1>
</div>
<div class="article__description">
    <p>
        Cada pizza nuestra representa la libertad de nuestro pizzero,   nuestra cocina
        no tiene parametros de medición, nos regimos por el sabor.
        Los clientes que, a pesar de su experiencia en comer pizzas, quedan sorprendidos
        con la experiencia, fino o sucio, bajo o alto, no hay palabras para definir
        ni clase para categorizar, las pizzas de PIZZERINO te sorprenderan.<br>
        Animate y probalas!
    </p>
</div>`;

	return {
		article,
	};
})();

export { homeModule };
