import { pageLoad } from "./page_load.js";

const body = document.querySelector("body");

pageLoad.header();
pageLoad.nav();
const nav = document.querySelector(".tabs");
const navTabs = document.querySelectorAll(".nav-item");

pageLoad.home();

function removePreviousHTML() {
  const eleToRemove = body.querySelector(".home") || body.querySelector(".menu") || body.querySelector(".contact");
  eleToRemove.remove();
  body.querySelector(".footer").remove();
}

function resetNavTabs() {
  navTabs.forEach(element => {
    if (element.classList.contains("highlight-nav-item")) {
      element.classList.remove("highlight-nav-item");
    };
  });
};

nav.addEventListener("click", function (e) {
  removePreviousHTML();
  resetNavTabs();

  if (e.target.classList.contains("home-tab")) {
    pageLoad.home();
  } else if (e.target.classList.contains("menu-tab")) {
    pageLoad.menu();
    pageLoad.addMenuItem("./images/Krabby_Patty_2.png", "Krabby Patty", "2.00", "w/ sea cheese.");
    pageLoad.addMenuItem("./images/Krabby_Patty_2.png", "Krabby Patty", "2.00", "w/ sea cheese.");
    pageLoad.addMenuItem("./images/Krabby_Patty_2.png", "Krabby Patty", "2.00", "w/ sea cheese.");
    pageLoad.addMenuItem("./images/Krabby_Patty_2.png", "Krabby Patty", "2.00", "w/ sea cheese.");
    pageLoad.addMenuItem("./images/Krabby_Patty_2.png", "Krabby Patty", "2.00", "w/ sea cheese.");
    pageLoad.addMenuItem("./images/Krabby_Patty_2.png", "Krabby Patty", "2.00", "w/ sea cheese.");
  } else if (e.target.classList.contains("contact-tab")) {
    pageLoad.contact();
  }
  pageLoad.footer();
});

pageLoad.footer();
