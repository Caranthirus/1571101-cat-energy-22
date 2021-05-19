const nav = document.querySelector(".header__wrapper");
const burger = nav.querySelector(".header__burger");
const header = document.querySelector(".header");
const promo = document.querySelector(".promo");
const catalog = document.querySelector(".catalog");
const program = document.querySelector(".program-selection");

nav.classList.remove("header__wrapper--nojs");
header.classList.remove("header--nojs");
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
