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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page_load.js */ \"./src/page_load.js\");\n\n\n_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.header();\n// pageLoad.home();\n_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad.footer();\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/page_load.js":
/*!**************************!*\
  !*** ./src/page_load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageLoad\": () => (/* binding */ pageLoad)\n/* harmony export */ });\nlet pageLoad = (function () {\n  const body = document.querySelector(\"body\");\n\n  function header() {\n    const header = document.createElement(\"section\");\n    header.classList.add(\"header\");\n\n    const headerTitle = document.createElement(\"div\");\n    headerTitle.classList.add(\"header-title\");\n    headerTitle.textContent = \"Crimson Wheat\";\n    body.append(header);\n    header.append(headerTitle);\n  }\n\n  function home() {\n    const home = document.createElement(\"section\");\n    home.classList.add(\"home\");\n\n    const chef = document.createElement(\"article\");\n    chef.classList.add(\"chef\");\n\n    const chefImg = document.createElement(\"img\");\n    chefImg.classList.add(\"chef-img\");\n    chefImg.src = \"./images/italian-chef-720.jpg\";\n\n    const chefText = document.createElement(\"div\");\n    chefText.classList.add(\"chef-text\");\n    chefText.textContent = \"Only the finest crimson wheat est. 1912!\";\n\n    body.append(home);\n    home.append(chef);\n    chef.append(chefImg);\n    chef.append(chefText);\n  }\n\n  function footer() {\n    const footer = document.createElement(\"section\");\n    footer.classList.add(\"footer\");\n\n    const author = document.createElement(\"div\");\n    author.classList.add(\"author\");\n    author.textContent = \"Project by PaperOrb\";\n\n    body.append(footer);\n    footer.append(author);\n  }\n\n  return { header, home, footer };\n})();\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/page_load.js?");

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