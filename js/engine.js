/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
	console.log("NIEWIERNE PSY RULEZ!!!!");

	//obsługa zdarzeń dla przycisku dla rozdzielczości 1366x768 pikseli

	$("#fifth").on("click", function () {

		var title = document.createElement("p");
		title.id = "title";
		title.innerText = "Przeliczanie szerokości i wysokości z pikseli na procenty, dla rozdzielczości: 1366x768";
		$(".main").append(title);

		var descriptionWidthTitlePixels = document.createElement("p");
		descriptionWidthTitlePixels.id = "descriptionWidthTitlePixels";
		descriptionWidthTitlePixels.innerText = "podaj liczbę (w px)";
		$(".main").append(descriptionWidthTitlePixels);

		var widthInpuntPixels = document.createElement("input");
		widthInpuntPixels.id = "widthInpuntPixels";
		widthInpuntPixels.type = "number";
		$(".main").append(widthInpuntPixels);

		var btnPixels1366 = document.createElement("button");
		btnPixels1366.id = "btnPixels1366";
		btnPixels1366.innerText = "oblicz";
		$(".main").append(btnPixels1366);

		var widthPercents = document.createElement("p");
		widthPercents.id = "widthPercents";
		widthPercents.innerText = "wynik to: ";
		$(".main").append(widthPercents);

		var scorePercents = document.createElement("div");
		scorePercents.id = "scorePercents";
		scorePercents.innerText = "";
		$(".main").append(scorePercents);

		$("#btnPixels1366").on("click", function () {
			var widthPixels = $("#widthInpuntPixels").val();
			var onePercent = 13.66;
			$("#scorePercents").text(widthPixels / onePercent + "%");
		});

		var descriptionWidthTitlePercents = document.createElement("p");
		descriptionWidthTitlePercents.id = "descriptionWidthTitlePercents";
		descriptionWidthTitlePercents.innerText = "podaj liczbę (w %)";
		$(".main").append(descriptionWidthTitlePercents);

		var widthInputPercents = document.createElement("input");
		widthInputPercents.id = "widthInputPercents";
		widthInputPercents.type = "number";
		$(".main").append(widthInputPercents);

		var btnPercents1366 = document.createElement("button");
		btnPercents1366.id = "btnPercents1366";
		btnPercents1366.innerText = "oblicz";
		$(".main").append(btnPercents1366);

		var widthPixels = document.createElement("p");
		widthPixels.id = "widthPixels";
		widthPixels.innerText = "wynik to: ";
		$(".main").append(widthPixels);

		var scorePixels = document.createElement("div");
		scorePixels.id = "scorePixels";
		scorePixels.innerText = "";
		$(".main").append(scorePixels);

		$("#btnPercents1366").on("click", function () {
			var widthPercents = $("#widthInputPercents").val();
			var onePercent = 13.66;
			$("#scorePixels").text(widthPercents * onePercent + "px");
		});
	});
});

/***/ })
/******/ ]);