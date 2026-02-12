const burgerButton = document.querySelector('.main-nav__toggle');
const mainMenu = document.querySelector('.main-nav');

mainMenu.classList.remove('main-nav--nojs');
mainMenu.classList.add('main-nav--closed');

burgerButton.addEventListener('click', () => {
  mainMenu.classList.toggle('main-nav--opened');
  mainMenu.classList.toggle('main-nav--closed');
});
