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

	//zmienna o wartości jednego procenta dla szerokości 1366px
	var onePercent1366 = 13.66;
	var onePercent800 = 8;

	//utworzenie nowego elementu
	function createNewElement(name, element, nameId, textElement, whereAppend) {
		name = document.createElement(element);
		name.id = nameId;
		name.innerText = textElement;
		whereAppend.append(name);
	}

	//utworzenie nowego inputa
	function createNewInput(name, nameId, type, whereAppend) {
		name = document.createElement("input");
		name.id = nameId;
		name.type = type;
		whereAppend.append(name);
	}

	$("#first").on("click", function () {
		$(".main").empty();
		createNewElement("newParagraphTitle", "p", "title800x600", "Przeliczanie szerokości i wysokości z pikseli na procenty, dla rozdzielczości: 800x600", $(".main"));
		createNewElement("widthTitlePixels", "p", "widthTitilePixels", "podaj liczbę (w px)", $(".main"));
		createNewInput("widthInpuntPixels", "widthInpuntPixels", "number", $(".main"));
		createNewElement("btnPixels800", "button", "btnPixels800", "oblicz", $(".main"));
		createNewElement("widthPercents", "div", "widthPercents", "wynik to: ", $(".main"));
		createNewElement("scorePercents", "div", "scorePercents", "", $(".main"));

		$("#btnPixels800").on("click", function () {
			var widthPixels = $("#widthInpuntPixels").val();
			$("#scorePercents").text(widthPixels / onePercent800 + "%");
		});

		createNewElement("descriptionWidthTitlePercents", "p", "descriptionWidthTitlePercents", "podaj liczbę (w %)", $(".main"));
		createNewInput("widthInputPercents", "widthInputPercents", "number", $(".main"));
		createNewElement("btnPercents800", "button", "btnPercents800", "oblicz", $(".main"));
		createNewElement("widthPixels", "div", "widthPixels", "wynik to: ", $(".main"));
		createNewElement("scorePixels", "div", "scorePixels", "", $(".main"));

		$("#btnPercents800").on("click", function () {
			var widthPercents = $("#widthInputPercents").val();
			$("#scorePixels").text(widthPercents * onePercent800 + "px");
		});
	});

	//obsługa zdarzeń dla przycisku dla rozdzielczości 1366x768 pikseli
	$("#fifth").on("click", function () {
		$(".main").empty();
		createNewElement("newParagraphTitle", "p", "title1366x768", "Przeliczanie szerokości i wysokości z pikseli na procenty, dla rozdzielczości: 1366x768", $(".main"));
		createNewElement("widthTitlePixels", "p", "widthTitilePixels", "podaj liczbę (w px)", $(".main"));
		createNewInput("widthInpuntPixels", "widthInpuntPixels", "number", $(".main"));
		createNewElement("btnPixels1366", "button", "btnPixels1366", "oblicz", $(".main"));
		createNewElement("widthPercents", "div", "widthPercents", "wynik to: ", $(".main"));
		createNewElement("scorePercents", "div", "scorePercents", "", $(".main"));

		$("#btnPixels1366").on("click", function () {
			var widthPixels = $("#widthInpuntPixels").val();
			$("#scorePercents").text(widthPixels / onePercent1366 + "%");
		});

		createNewElement("descriptionWidthTitlePercents", "p", "descriptionWidthTitlePercents", "podaj liczbę (w %)", $(".main"));
		createNewInput("widthInputPercents", "widthInputPercents", "number", $(".main"));
		createNewElement("btnPercents1366", "button", "btnPercents1366", "oblicz", $(".main"));
		createNewElement("widthPixels", "div", "widthPixels", "wynik to: ", $(".main"));
		createNewElement("scorePixels", "div", "scorePixels", "", $(".main"));

		$("#btnPercents1366").on("click", function () {
			var widthPercents = $("#widthInputPercents").val();
			$("#scorePixels").text(widthPercents * onePercent1366 + "px");
		});
	});
});

/***/ })
/******/ ]);