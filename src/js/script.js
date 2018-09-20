var menu = document.querySelector(".site-menu");
var menuOpen = document.querySelector(".page-header__toggle");
var cover = document.querySelector(".page-main__cover");
var pageHeader = document.querySelector(".page-header");
var icoOpen = document.querySelector(".page-header__ico-open");
var icoClosed = document.querySelector(".page-header__ico-closed");

menuOpen.addEventListener("click", function (evt) {
      evt.preventDefault();

      if (menu.classList.contains("site-menu--open")) {
        menu.classList.remove("site-menu--open");
      } else {
        menu.classList.add("site-menu--open");
      }

      if (cover.classList.contains("page-main__cover--site-menu")) {
        cover.classList.remove("page-main__cover--site-menu");
      } else {
        cover.classList.add("page-main__cover--site-menu");
      }

      if (pageHeader.classList.contains("page-header--background")) {
        pageHeader.classList.remove("page-header--background");
      } else {
        pageHeader.classList.add("page-header--background");
      }

      icoOpen.classList.toggle("page-header__toggle--closed");

      icoClosed.classList.toggle("page-header__toggle--open");
});
