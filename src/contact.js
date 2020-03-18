let contactModule = (function() {
	'use strict';
	let contact = document.createElement('div');
	contact.classList.add('contact');
	contact.innerHTML = `<div class="contact__mail contact-item">
    <p>Email</p>
    <p>pizzerino.muzza@gmail.com</p>
</div>
<div class="contact__phone contact-item">
    <p>Phone</p>
    <p>+598 96233466</p>
</div>
<div class="contact__adress contact-item">
    <p>Adress</p>
    <p>Colonia 1890 esq Gaboto</p>
</div>`;

	return {
		contact,
	};
})();

export { contactModule };
