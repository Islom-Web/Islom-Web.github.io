document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger'),
	  closeBtn = document.querySelector('.menu__close'),
	  menu = document.querySelector('.menu');

	hamburger.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
	closeBtn.addEventListener('click', () => {
		menu.classList.remove('active');
	});

const count = document.querySelectorAll('.abilities__item-count'),
	  span = document.querySelectorAll('.abilities__item-bar span');

count.forEach((item, i) => {
	span[i].style.width = item.textContent;
});
});