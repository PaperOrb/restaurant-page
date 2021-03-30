/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load.js */ \"./src/page_load.js\");\n\n\nconst body = document.querySelector(\"body\");\n\n_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.header();\n_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.nav();\nconst nav = document.querySelector(\".tabs\");\nconst navTabs = document.querySelectorAll(\".nav-item\");\n\n_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.home();\n\nfunction removePreviousHTML() {\n  const eleToRemove = body.querySelector(\".home\") || body.querySelector(\".menu\") || body.querySelector(\".contact\");\n  eleToRemove.remove();\n  body.querySelector(\".footer\").remove();\n}\n\nfunction resetNavTabs() {\n  navTabs.forEach(element => {\n    if (element.classList.contains(\"highlight-nav-item\")) {\n      element.classList.remove(\"highlight-nav-item\");\n    };\n  });\n};\n\nnav.addEventListener(\"click\", function (e) {\n  removePreviousHTML();\n  resetNavTabs();\n\n  if (e.target.classList.contains(\"home-tab\")) {\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.home();\n  } else if (e.target.classList.contains(\"menu-tab\")) {\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.menu();\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.addMenuItem(\"./images/Krabby_Patty_2.png\", \"Krabby Patty\", \"2.00\", \"w/ sea cheese.\");\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.addMenuItem(\"./images/Krabby_Patty_2.png\", \"Krabby Patty\", \"2.00\", \"w/ sea cheese.\");\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.addMenuItem(\"./images/Krabby_Patty_2.png\", \"Krabby Patty\", \"2.00\", \"w/ sea cheese.\");\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.addMenuItem(\"./images/Krabby_Patty_2.png\", \"Krabby Patty\", \"2.00\", \"w/ sea cheese.\");\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.addMenuItem(\"./images/Krabby_Patty_2.png\", \"Krabby Patty\", \"2.00\", \"w/ sea cheese.\");\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.addMenuItem(\"./images/Krabby_Patty_2.png\", \"Krabby Patty\", \"2.00\", \"w/ sea cheese.\");\n  } else if (e.target.classList.contains(\"contact-tab\")) {\n    _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.contact();\n  }\n  _page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.footer();\n});\n\n_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.footer();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nlet pageLoad = (function () {\n  const body = document.querySelector(\"body\");\n\n  function header() {\n    const header = document.createElement(\"section\");\n    header.classList.add(\"header\");\n\n    const headerTitle = document.createElement(\"div\");\n    headerTitle.classList.add(\"header-title\");\n    headerTitle.textContent = \"Krusty Krab\";\n    body.append(header);\n    header.append(headerTitle);\n  }\n\n  function nav() {\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"tabs\");\n\n    const button1 = document.createElement(\"button\");\n    const button2 = document.createElement(\"button\");\n    const button3 = document.createElement(\"button\");\n\n    button1.classList.add(\"home-tab\", \"nav-item\");\n    button2.classList.add(\"menu-tab\", \"nav-item\");\n    button3.classList.add(\"contact-tab\", \"nav-item\");\n\n    button1.textContent = \"Home\";\n    button2.textContent = \"Menu\";\n    button3.textContent = \"Contact\";\n\n    body.append(nav);\n    nav.append(button1, button2, button3);\n  }\n\n  function home() {\n    const home = document.createElement(\"section\");\n    home.classList.add(\"home\");\n\n    const chef = document.createElement(\"article\");\n    chef.classList.add(\"chef\");\n\n    const chefImg = document.createElement(\"img\");\n    chefImg.classList.add(\"chef-img\");\n    chefImg.src = \"./images/Mr._krabs_spongebob_squarepants.png\";\n\n    const chefText = document.createElement(\"div\");\n    chefText.classList.add(\"chef-text\");\n    chefText.textContent =\n      \"Only the finest krabby patties with real sea cheese! Come on down and see why The Krusty Krab is the most popular restaurant in Bikini Bottom!\";\n\n    body.append(home);\n    home.append(chef);\n    chef.append(chefImg);\n    chef.append(chefText);\n    document.querySelector('.home-tab').classList.add(\"highlight-nav-item\");\n  }\n\n  function menu() {\n    const menu = document.createElement(\"section\");\n    menu.classList.add(\"menu\");\n\n    body.append(menu);\n    document.querySelector('.menu-tab').classList.add(\"highlight-nav-item\");\n  }\n\n  function contact() {\n    const contact = document.createElement(\"section\");\n    contact.classList.add(\"contact\");\n\n    const phone = document.createElement(\"div\");\n    phone.classList.add(\"phone\");\n\n    const phoneH1 = document.createElement(\"h1\");\n    phoneH1.innerText = \"By phone:\";\n\n    const phoneNum = document.createElement(\"div\");\n    phoneNum.innerText = \"+00 00000 00000\";\n\n    const mail = document.createElement(\"div\");\n    mail.classList.add(\"mail\");\n\n    const mailH1 = document.createElement(\"h1\");\n    mailH1.innerText = \"By mail:\";\n\n    const mailAddress = document.createElement(\"div\");\n    mailAddress.innerText = \"Bikini Bottom, Pacific Ocean, 831 Bottom Feeder Lane\";\n\n    const email = document.createElement(\"div\");\n    email.classList.add(\"email\");\n\n    const emailH1 = document.createElement(\"h1\");\n    emailH1.innerText = \"By email:\";\n\n    const emailAddress = document.createElement(\"div\");\n    emailAddress.innerText = \"krustykrab@mail.com\";\n\n    body.append(contact);\n    contact.append(phone);\n    phone.append(phoneH1);\n    phone.append(phoneNum);\n    contact.append(mail);\n    mail.append(mailH1);\n    mail.append(mailAddress);\n    contact.append(email);\n    email.append(emailH1);\n    email.append(emailAddress);\n    document.querySelector('.contact-tab').classList.add(\"highlight-nav-item\");\n  }\n\n  function addMenuItem(imagePath, nameStr, priceStr, descriptionStr) {\n    const menu = document.querySelector(\".menu\");\n\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n\n    const menuItemImg = document.createElement(\"img\");\n    menuItemImg.classList.add(\"menu-item-img\");\n    menuItemImg.src = imagePath;\n\n    const menuItemContainer = document.createElement(\"div\");\n    menuItemContainer.classList.add(\"menu-item-container\");\n\n    const menuItemHeader = document.createElement(\"div\");\n    menuItemHeader.classList.add(\"menu-item-header\");\n\n    const name = document.createElement(\"div\");\n    name.classList.add(\"name\");\n    name.textContent = nameStr;\n\n    const price = document.createElement(\"div\");\n    price.classList.add(\"price\");\n    price.textContent = priceStr;\n\n    const menuItemDescription = document.createElement(\"div\");\n    menuItemDescription.classList.add(\"menu-item-description\");\n    menuItemDescription.textContent = descriptionStr;\n\n    menu.append(menuItem);\n    menuItem.append(menuItemImg);\n    menuItem.append(menuItemContainer);\n    menuItemContainer.append(menuItemHeader);\n    menuItemHeader.append(name);\n    menuItemHeader.append(price);\n    menuItemContainer.append(menuItemDescription);\n    // menuItemDescription.append();\n  }\n\n  function footer() {\n    const footer = document.createElement(\"section\");\n    footer.classList.add(\"footer\");\n\n    const author = document.createElement(\"div\");\n    author.classList.add(\"author\");\n    author.textContent = \"Project by PaperOrb\";\n\n    body.append(footer);\n    footer.append(author);\n  }\n\n  return { header, home, nav, menu, addMenuItem, contact, footer };\n})();\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/page_load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;