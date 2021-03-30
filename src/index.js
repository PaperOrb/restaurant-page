import { pageLoad } from "./page_load.js";

const body = document.querySelector("body");

pageLoad.header();
pageLoad.nav();
pageLoad.home();
const nav = document.querySelector(".tabs");

function removePreviousHTML() {
  const eleToRemove = body.querySelector(".home") || body.querySelector(".menu") || body.querySelector(".contact");
  eleToRemove.remove();
  body.querySelector(".footer").remove();
}

nav.addEventListener("click", function (e) {
  removePreviousHTML();

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
