const burgerButton = document.querySelector('.main-nav__toggle');
const mainMenu = document.querySelector('.main-nav__list');

burgerButton.classList.remove('main-nav__toggle--active');
mainMenu.classList.remove('main-nav__list--active');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('main-nav__toggle--active');
  mainMenu.classList.toggle('main-nav__list--active');
});
