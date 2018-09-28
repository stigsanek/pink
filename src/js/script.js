//Скрипт меню
var menu = document.querySelector(".site-menu");
var menuOpen = document.querySelector(".page-header__toggle");
var pageMain = document.querySelector(".page-main");
var pageHeader = document.querySelector(".page-header");
var pageFooter = document.querySelector(".page-footer");
var icoOpen = document.querySelector(".page-header__ico-open");
var icoClosed = document.querySelector(".page-header__ico-closed");

menuOpen.addEventListener("click", function (evt) {
  evt.preventDefault();

  if (menu.classList.contains("site-menu--open")) {
    menu.classList.remove("site-menu--open");
  } else {
    menu.classList.add("site-menu--open");
  }

  if (pageMain.classList.contains("page-main--shift")) {
    pageMain.classList.remove("page-main--shift");
  } else {
    pageMain.classList.add("page-main--shift");
  }

  if (pageFooter.classList.contains("page-footer--shift")) {
    pageFooter.classList.remove("page-footer--shift");
  } else {
    pageFooter.classList.add("page-footer--shift");
  }

  if (pageHeader.classList.contains("page-header--background")) {
    pageHeader.classList.remove("page-header--background");
  } else {
    pageHeader.classList.add("page-header--background");
  }

  icoOpen.classList.toggle("page-header__toggle--closed");

  icoClosed.classList.toggle("page-header__toggle--open");
});
//

//Скрипт слайдера в блоке отзывы
var button1 = document.querySelector(".reviews__control-button--one");
var button2 = document.querySelector(".reviews__control-button--two");
var button3 = document.querySelector(".reviews__control-button--three");
var reviews1 = document.querySelector(".reviews__item--one");
var reviews2 = document.querySelector(".reviews__item--two");
var reviews3 = document.querySelector(".reviews__item--three");

button2.addEventListener("click", function (evt) {
  evt.preventDefault();

  reviews2.classList.remove("reviews__item--hidden");
  reviews1.classList.add("reviews__item--hidden");
  reviews3.classList.add("reviews__item--hidden");
  button2.classList.add("reviews__control-button--active");
  button1.classList.remove("reviews__control-button--active");
  button3.classList.remove("reviews__control-button--active");
});

button3.addEventListener("click", function (evt) {
  evt.preventDefault();

  reviews3.classList.remove("reviews__item--hidden");
  reviews1.classList.add("reviews__item--hidden");
  reviews2.classList.add("reviews__item--hidden");
  button3.classList.add("reviews__control-button--active");
  button1.classList.remove("reviews__control-button--active");
  button2.classList.remove("reviews__control-button--active");
});

button1.addEventListener("click", function (evt) {
  evt.preventDefault();

  reviews1.classList.remove("reviews__item--hidden");
  reviews2.classList.add("reviews__item--hidden");
  reviews3.classList.add("reviews__item--hidden");
  button1.classList.add("reviews__control-button--active");
  button2.classList.remove("reviews__control-button--active");
  button3.classList.remove("reviews__control-button--active");
});
//

//Скрипт слайдера в блоке цены
var table = document.querySelector(".price__table");
var tableControl1 = document.querySelector(".price__control-button--one");
var tableControl2 = document.querySelector(".price__control-button--two");
var tableControl3 = document.querySelector(".price__control-button--three");

tableControl1.addEventListener("click", function(evt) {
  evt.preventDefault();

  table.classList.add("price__table--right");
  table.classList.remove("price__table--left");
  tableControl1.classList.add("price__control-button--active");
  tableControl2.classList.remove("price__control-button--active");
  tableControl3.classList.remove("price__control-button--active");
});

tableControl2.addEventListener("click", function(evt) {
  evt.preventDefault();

  table.classList.remove("price__table--right");
  table.classList.remove("price__table--left");
  tableControl2.classList.add("price__control-button--active");
  tableControl1.classList.remove("price__control-button--active");
  tableControl3.classList.remove("price__control-button--active");
});

tableControl3.addEventListener("click", function(evt) {
  evt.preventDefault();

  table.classList.remove("price__table--right");
  table.classList.add("price__table--left");
  tableControl3.classList.add("price__control-button--active");
  tableControl1.classList.remove("price__control-button--active");
  tableControl2.classList.remove("price__control-button--active");
});
//
