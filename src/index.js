import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { headerModule } from './header';
import { homeModule } from './home';
import { menuModule } from './menu';
import { contactModule } from './contact';

let content = document.getElementById('content');

//state 1 : home
//state 2 : menu
//state 3 : contact
let state = 1;
function pageRender() {
	content.appendChild(headerModule.header);
	let menuBtn = document.querySelector('.menuBtn');
	let contactBtn = document.querySelector('.contactBtn');
	let homeBtn = document.getElementById('homeBtn');
	if (state === 1) content.appendChild(homeModule.article);

	//MENU EVENT LISTENER
	menuBtn.addEventListener('click', () => {
		state = 2;
		if (content.contains(homeModule.article)) {
			content.removeChild(homeModule.article);
		}

		if (content.contains(contactModule.contact)) {
			content.removeChild(contactModule.contact);
		}
		content.appendChild(menuModule.menu);
		if (state === 2) {
			menuBtn.classList.add('active');
			contactBtn.classList.remove('active');
		}
	});
	//CONTACT EVENTLISTENER
	contactBtn.addEventListener('click', () => {
		state = 3;
		if (content.contains(homeModule.article)) {
			content.removeChild(homeModule.article);
		}

		if (content.contains(menuModule.menu)) {
			content.removeChild(menuModule.menu);
		}
		content.appendChild(contactModule.contact);
		if (state === 3) {
			contactBtn.classList.add('active');
			menuBtn.classList.remove('active');
		}
	});
	// HOME EVENLISTENER
	homeBtn.addEventListener('click', () => {
		if (state === 2) menuBtn.classList.toggle('active');
		if (state === 3) contactBtn.classList.toggle('active');
		state = 1;
		if (content.contains(contactModule.contact)) {
			content.removeChild(contactModule.contact);
		}

		if (content.contains(menuModule.menu)) {
			content.removeChild(menuModule.menu);
		}
		content.appendChild(homeModule.article);
	});
}

window.onload = pageRender();
