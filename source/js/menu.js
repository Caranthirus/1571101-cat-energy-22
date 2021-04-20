  var nav = document.querySelector('.header__wrapper');
  var burger = nav.querySelector('.header__burger');

  nav.classList.remove('header__wrapper--nojs');

  function burgerClickHandler() {
    nav.classList.toggle('header__wrapper--opened');
  }

  burger.addEventListener('click', burgerClickHandler);
