'use strict';

(function() {
	var link = document.querySelector(".address-contacts-btn");
	var popup = document.querySelector(".modal-content");
	var close = popup.querySelector(".modal-content-close");
	var form = popup.querySelector(".feedback-form");
	var name = popup.querySelector("[name=name]");
	var email = popup.querySelector("[name=feedback-email]");
	var storage = localStorage.getItem("name");
	var overlay = document.querySelector(".modal-overlay");

	link.addEventListener("click", function(event) { 
		event.preventDefault();
		popup.classList.add("modal-content-show");
		overlay.classList.add("modal-overlay-show");
		if (storage) {
			name.value = storage;
			email.focus();
		} else {
			name.focus();
		}
	});

	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		popup.classList.remove("modal-error");
		overlay.classList.remove("modal-overlay-show");
	});

	form.addEventListener("submit", function(event) {
		if (!name.value || !email.value) {
			event.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		} else {
			localStorage.setItem("name", name.value);
		}
	});

	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
			if (popup.classList.contains("modal-content-show")) {
				popup.classList.remove("modal-content-show");
				popup.classList.remove("modal-error");
				overlay.classList.remove("modal-overlay-show");
			}
		}
	});
})();