const nav = document.querySelector(".header__wrapper");
const burger = nav.querySelector(".header__burger");
const header = document.querySelector(".header");
const logo = document.querySelector(".header__title-logo");

nav.classList.remove("header__wrapper--nojs");
header.classList.remove("header--nojs");
logo.classList.remove("header__title-logo--nojs");

function burgerClickHandler() {
  nav.classList.toggle("header__wrapper--opened");
}

burger.addEventListener("click", burgerClickHandler);
