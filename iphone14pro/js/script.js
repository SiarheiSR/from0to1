'use strict';

const burgerBtn = document.querySelector('.burger__btn');
const nav = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
	nav.classList.toggle('menu-open');
});