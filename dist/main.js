/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactDetails": () => (/* binding */ contactDetails)
/* harmony export */ });
function contactDetails() {
	let content = document.getElementById("content");
	let contact1 = document.createElement("div");
	let name1 = document.createElement("h3");
	let phone1 = document.createElement("p");
	let email1 = document.createElement("p");

	name1.textContent = "Souville Branch";
	phone1.textContent = "08215187332";
	email1.textContent = "contactMe@restaurant.eat";
	contact1.appendChild(name1);
	contact1.appendChild(phone1);
	contact1.appendChild(email1);
	content.appendChild(contact1);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuDetails": () => (/* binding */ menuDetails)
/* harmony export */ });
function menuDetails() {
	let content = document.getElementById("content");
	let menu = document.createElement("div");
	let item1 = document.createElement("div");
	let name1 = document.createElement("h3");
	let details1 = document.createElement("p");

	let item2 = document.createElement("div");
	let name2 = document.createElement("h3");
	let details2 = document.createElement("p");

	name1.textContent = "Idli";
	details1.textContent =
		"The cakes made by steaming a batter consisting of fermented black lentils (de-husked) and rice.";
	item1.appendChild(name1);
	item1.appendChild(details1);

	name2.textContent = "Dosa";
	details2.textContent =
		" a pancake made from rice flour and ground pulses, typically served with a spiced vegetable filling";
	item2.appendChild(name2);
	item2.appendChild(details2);

	menu.appendChild(item1);
	menu.appendChild(item2);

	content.appendChild(menu);
}


/***/ }),

/***/ "./src/restaurant-review.js":
/*!**********************************!*\
  !*** ./src/restaurant-review.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addRestaurantReview)
/* harmony export */ });
// Page Load Function
function addRestaurantReview() {
	let content = document.querySelector("#content");

	let image = document.createElement("img");
	let headLine = document.createElement("h2");
	let review = document.createElement("p");
	image.setAttribute("src", "../assets/restaurant.jpg");
	image.setAttribute("alt", "Restaurant Image");
	image.style.width = "400px";
	image.style.height = "400px";
	headLine.textContent = "InfoCity Restaurant";
	review.textContent =
		"Food is very tasty and spicy at this restaurant. They have some healthy items too. Always recommend this restaurant.";
	content.appendChild(image);
	content.appendChild(headLine);
	content.appendChild(review);
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _restaurant_review__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-review */ "./src/restaurant-review.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");



// console.log("watching");
let head = document.querySelector("header");
let home = document.createElement("button");
home.textContent = "HOME";
let menu = document.createElement("button");
menu.textContent = "MENU";
let contact = document.createElement("button");
contact.textContent = "CONTACT";
head.appendChild(home);
head.appendChild(menu);
head.appendChild(contact);

(0,_restaurant_review__WEBPACK_IMPORTED_MODULE_0__.default)();

home.addEventListener("click", (e) => {
	document.getElementById("content").innerHTML = "";
	(0,_restaurant_review__WEBPACK_IMPORTED_MODULE_0__.default)();
});
menu.addEventListener("click", (e) => {
	document.getElementById("content").innerHTML = "";
	(0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuDetails)();
});
contact.addEventListener("click", (e) => {
	document.querySelector("#content").innerHTML = "";
	(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactDetails)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SZXN0YXVyYW50UGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL1Jlc3RhdXJhbnRQYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudFBhZ2UvLi9zcmMvcmVzdGF1cmFudC1yZXZpZXcuanMiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudFBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudFBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1Jlc3RhdXJhbnRQYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vUmVzdGF1cmFudFBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9SZXN0YXVyYW50UGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNkTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7O0FDTjBEO0FBQ3JCO0FBQ1M7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyREFBUTs7QUFFUjtBQUNBO0FBQ0EsQ0FBQywyREFBUTtBQUNULENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyxrREFBVztBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQywyREFBYztBQUNmLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0RGV0YWlscygpIHtcblx0bGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGxldCBjb250YWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxldCBuYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0bGV0IHBob25lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRsZXQgZW1haWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0bmFtZTEudGV4dENvbnRlbnQgPSBcIlNvdXZpbGxlIEJyYW5jaFwiO1xuXHRwaG9uZTEudGV4dENvbnRlbnQgPSBcIjA4MjE1MTg3MzMyXCI7XG5cdGVtYWlsMS50ZXh0Q29udGVudCA9IFwiY29udGFjdE1lQHJlc3RhdXJhbnQuZWF0XCI7XG5cdGNvbnRhY3QxLmFwcGVuZENoaWxkKG5hbWUxKTtcblx0Y29udGFjdDEuYXBwZW5kQ2hpbGQocGhvbmUxKTtcblx0Y29udGFjdDEuYXBwZW5kQ2hpbGQoZW1haWwxKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChjb250YWN0MSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbWVudURldGFpbHMoKSB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxldCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGxldCBuYW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcblx0bGV0IGRldGFpbHMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblx0bGV0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bGV0IG5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRsZXQgZGV0YWlsczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXHRuYW1lMS50ZXh0Q29udGVudCA9IFwiSWRsaVwiO1xuXHRkZXRhaWxzMS50ZXh0Q29udGVudCA9XG5cdFx0XCJUaGUgY2FrZXMgbWFkZSBieSBzdGVhbWluZyBhIGJhdHRlciBjb25zaXN0aW5nIG9mIGZlcm1lbnRlZCBibGFjayBsZW50aWxzIChkZS1odXNrZWQpIGFuZCByaWNlLlwiO1xuXHRpdGVtMS5hcHBlbmRDaGlsZChuYW1lMSk7XG5cdGl0ZW0xLmFwcGVuZENoaWxkKGRldGFpbHMxKTtcblxuXHRuYW1lMi50ZXh0Q29udGVudCA9IFwiRG9zYVwiO1xuXHRkZXRhaWxzMi50ZXh0Q29udGVudCA9XG5cdFx0XCIgYSBwYW5jYWtlIG1hZGUgZnJvbSByaWNlIGZsb3VyIGFuZCBncm91bmQgcHVsc2VzLCB0eXBpY2FsbHkgc2VydmVkIHdpdGggYSBzcGljZWQgdmVnZXRhYmxlIGZpbGxpbmdcIjtcblx0aXRlbTIuYXBwZW5kQ2hpbGQobmFtZTIpO1xuXHRpdGVtMi5hcHBlbmRDaGlsZChkZXRhaWxzMik7XG5cblx0bWVudS5hcHBlbmRDaGlsZChpdGVtMSk7XG5cdG1lbnUuYXBwZW5kQ2hpbGQoaXRlbTIpO1xuXG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG59XG4iLCIvLyBQYWdlIExvYWQgRnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFJlc3RhdXJhbnRSZXZpZXcoKSB7XG5cdGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5cdGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGxldCBoZWFkTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcblx0bGV0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvcmVzdGF1cmFudC5qcGdcIik7XG5cdGltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlJlc3RhdXJhbnQgSW1hZ2VcIik7XG5cdGltYWdlLnN0eWxlLndpZHRoID0gXCI0MDBweFwiO1xuXHRpbWFnZS5zdHlsZS5oZWlnaHQgPSBcIjQwMHB4XCI7XG5cdGhlYWRMaW5lLnRleHRDb250ZW50ID0gXCJJbmZvQ2l0eSBSZXN0YXVyYW50XCI7XG5cdHJldmlldy50ZXh0Q29udGVudCA9XG5cdFx0XCJGb29kIGlzIHZlcnkgdGFzdHkgYW5kIHNwaWN5IGF0IHRoaXMgcmVzdGF1cmFudC4gVGhleSBoYXZlIHNvbWUgaGVhbHRoeSBpdGVtcyB0b28uIEFsd2F5cyByZWNvbW1lbmQgdGhpcyByZXN0YXVyYW50LlwiO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChoZWFkTGluZSk7XG5cdGNvbnRlbnQuYXBwZW5kQ2hpbGQocmV2aWV3KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGVmYXVsdCBhcyBwYWdlTG9hZCB9IGZyb20gXCIuL3Jlc3RhdXJhbnQtcmV2aWV3XCI7XG5pbXBvcnQgeyBtZW51RGV0YWlscyB9IGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCB7IGNvbnRhY3REZXRhaWxzIH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuLy8gY29uc29sZS5sb2coXCJ3YXRjaGluZ1wiKTtcbmxldCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcbmxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmhvbWUudGV4dENvbnRlbnQgPSBcIkhPTUVcIjtcbmxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm1lbnUudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcbmxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNPTlRBQ1RcIjtcbmhlYWQuYXBwZW5kQ2hpbGQoaG9tZSk7XG5oZWFkLmFwcGVuZENoaWxkKG1lbnUpO1xuaGVhZC5hcHBlbmRDaGlsZChjb250YWN0KTtcblxucGFnZUxvYWQoKTtcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IFwiXCI7XG5cdHBhZ2VMb2FkKCk7XG59KTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuXHRtZW51RGV0YWlscygpO1xufSk7XG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuaW5uZXJIVE1MID0gXCJcIjtcblx0Y29udGFjdERldGFpbHMoKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==