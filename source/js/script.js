const nav = document.querySelector(".header__wrapper");
const burger = nav.querySelector(".header__burger");
const header = document.querySelector(".header");
const promo = document.querySelector(".promo");
const catalog = document.querySelector(".catalog");
const program = document.querySelector(".program-selection");
const logo = document.querySelector(".header__title-logo");

nav.classList.remove("header__wrapper--nojs");
header.classList.remove("header--nojs");
logo.classList.remove("header__title-logo--nojs");
if (promo) {
  promo.classList.remove("promo--nojs");
}
if (catalog) {
  catalog.classList.remove("catalog--nojs");
}
if (program) {
  program.classList.remove("program-selection--nojs");
}

function burgerClickHandler() {
  nav.classList.toggle("header__wrapper--opened");
}

burger.addEventListener("click", burgerClickHandler);
