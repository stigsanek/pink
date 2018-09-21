var menu = document.querySelector(".site-menu");
var menuOpen = document.querySelector(".page-header__toggle");
var pageMain = document.querySelector(".page-main");
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

      if (pageMain.classList.contains("page-main--shift")) {
        pageMain.classList.remove("page-main--shift");
      } else {
        pageMain.classList.add("page-main--shift");
      }

      if (pageHeader.classList.contains("page-header--background")) {
        pageHeader.classList.remove("page-header--background");
      } else {
        pageHeader.classList.add("page-header--background");
      }

      icoOpen.classList.toggle("page-header__toggle--closed");

      icoClosed.classList.toggle("page-header__toggle--open");
});
