/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_songView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/songView */ \"./src/scripts/songView.js\");\n/* harmony import */ var _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/keyboard */ \"./src/scripts/keyboard.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var main = document.getElementById(\"main\");\n  new _scripts_songView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  new _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"](main);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLE1BQXhCLENBQWI7QUFDQSxNQUFJTCx5REFBSixDQUFhSSxJQUFiO0FBQ0EsTUFBSUgseURBQUosQ0FBYUcsSUFBYjtBQUNILENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXlib2FyZF9oZXJvLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvbmdWaWV3IGZyb20gXCIuL3NjcmlwdHMvc29uZ1ZpZXdcIjtcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi9zY3JpcHRzL2tleWJvYXJkXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIG5ldyBTb25nVmlldyhtYWluKTtcbiAgICBuZXcgS2V5Ym9hcmQobWFpbik7XG59KTtcbiJdLCJuYW1lcyI6WyJTb25nVmlldyIsIktleWJvYXJkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/keyboard.js":
/*!*********************************!*\
  !*** ./src/scripts/keyboard.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Keyboard = function Keyboard(el) {\n  _classCallCheck(this, Keyboard);\n\n  this.el = el;\n  this.keyboard = document.createElement(\"div\");\n  this.keyboard.className = \"keyboard\";\n  this.keyboard.innerHTML = \"<h1>Keyboard</h1>\";\n  this.el.appendChild(this.keyboard);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9rZXlib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7SUFBTUEsV0FDRixrQkFBWUMsRUFBWixFQUFlO0FBQUE7O0FBQ1gsT0FBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0EsT0FBS0YsUUFBTCxDQUFjRyxTQUFkLEdBQTBCLFVBQTFCO0FBQ0EsT0FBS0gsUUFBTCxDQUFjSSxTQUFkLEdBQTBCLG1CQUExQjtBQUNBLE9BQUtMLEVBQUwsQ0FBUU0sV0FBUixDQUFvQixLQUFLTCxRQUF6QjtBQUNIOztBQUdMLCtEQUFlRixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2V5Ym9hcmRfaGVyby8uL3NyYy9zY3JpcHRzL2tleWJvYXJkLmpzPzBkZmEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgS2V5Ym9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGVsKXtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmtleWJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZC5jbGFzc05hbWUgPSBcImtleWJvYXJkXCI7XG4gICAgICAgIHRoaXMua2V5Ym9hcmQuaW5uZXJIVE1MID0gXCI8aDE+S2V5Ym9hcmQ8L2gxPlwiO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMua2V5Ym9hcmQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmQ7Il0sIm5hbWVzIjpbIktleWJvYXJkIiwiZWwiLCJrZXlib2FyZCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/keyboard.js\n");

/***/ }),

/***/ "./src/scripts/songView.js":
/*!*********************************!*\
  !*** ./src/scripts/songView.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SongView = function SongView(el) {\n  _classCallCheck(this, SongView);\n\n  this.el = el;\n  this.songView = document.createElement(\"div\");\n  this.songView.className = \"song-view\";\n  this.songView.innerHTML = \"<h1>Song View</h1>\";\n  this.el.appendChild(this.songView);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SongView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zb25nVmlldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7SUFBTUEsV0FDRixrQkFBWUMsRUFBWixFQUFlO0FBQUE7O0FBQ1gsT0FBS0EsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsT0FBS0MsUUFBTCxHQUFnQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0EsT0FBS0YsUUFBTCxDQUFjRyxTQUFkLEdBQTBCLFdBQTFCO0FBQ0EsT0FBS0gsUUFBTCxDQUFjSSxTQUFkLEdBQTBCLG9CQUExQjtBQUNBLE9BQUtMLEVBQUwsQ0FBUU0sV0FBUixDQUFvQixLQUFLTCxRQUF6QjtBQUNIOztBQUdMLCtEQUFlRixRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2V5Ym9hcmRfaGVyby8uL3NyYy9zY3JpcHRzL3NvbmdWaWV3LmpzP2Y2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU29uZ1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGVsKXtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLnNvbmdWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGhpcy5zb25nVmlldy5jbGFzc05hbWUgPSBcInNvbmctdmlld1wiO1xuICAgICAgICB0aGlzLnNvbmdWaWV3LmlubmVySFRNTCA9IFwiPGgxPlNvbmcgVmlldzwvaDE+XCI7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5zb25nVmlldyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb25nVmlldzsiXSwibmFtZXMiOlsiU29uZ1ZpZXciLCJlbCIsInNvbmdWaWV3IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/songView.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXlib2FyZF9oZXJvLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;