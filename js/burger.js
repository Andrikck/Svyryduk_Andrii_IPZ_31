document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.burger__button');
  const burgerMenu = document.querySelector('.burger-menu');
  const closeButton = document.querySelector('.close-button_burger');

  function toggleBurgerMenu() {
      burgerMenu.classList.toggle('is-active');
  }

  burgerButton.addEventListener('click', toggleBurgerMenu);
  closeButton.addEventListener('click', toggleBurgerMenu);
});
