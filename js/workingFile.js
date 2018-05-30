document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//zmienna o wartości jednego procenta dla szerokości 1366px
let onePercent1366 = 13.66;
let onePercent800 = 8;

//utworzenie nowego elementu
function createNewElement(name, element, nameId, textElement, whereAppend){
	name = document.createElement(element);
	name.id = nameId;
	name.innerText = textElement;
	whereAppend.append(name);
}

//utworzenie nowego inputa
function createNewInput(name, nameId, type, whereAppend){
	name = document.createElement("input");
	name.id = nameId;
	name.type = type;
	whereAppend.append(name);
}


$("#first").on("click", ()=>{
	$(".main").empty();
	createNewElement("newParagraphTitle", "p", "title800x600", "Przeliczanie szerokości i wysokości z pikseli na procenty, dla rozdzielczości: 800x600", $(".main"));
	createNewElement("widthTitlePixels", "p", "widthTitilePixels", "podaj liczbę (w px)", $(".main"));
	createNewInput("widthInpuntPixels", "widthInpuntPixels", "number", $(".main"));
	createNewElement("btnPixels800", "button", "btnPixels800", "oblicz", $(".main"));
	createNewElement("widthPercents", "div", "widthPercents", "wynik to: ", $(".main")); 
	createNewElement("scorePercents", "div", "scorePercents", "", $(".main"));
		
	$("#btnPixels800").on("click", () =>{
		let widthPixels = $("#widthInpuntPixels").val();
		$("#scorePercents").text(widthPixels/onePercent800 + "%");
	});
	
	createNewElement("descriptionWidthTitlePercents", "p", "descriptionWidthTitlePercents", "podaj liczbę (w %)", $(".main"));
	createNewInput("widthInputPercents", "widthInputPercents", "number", $(".main"));
	createNewElement("btnPercents800", "button", "btnPercents800", "oblicz", $(".main"));
	createNewElement("widthPixels", "div", "widthPixels", "wynik to: ", $(".main"));
	createNewElement("scorePixels", "div", "scorePixels", "", $(".main"));
		
	$("#btnPercents800").on("click", ()=>{
		let widthPercents = $("#widthInputPercents").val();
		$("#scorePixels").text(widthPercents*onePercent800 + "px");
	});
});




//obsługa zdarzeń dla przycisku dla rozdzielczości 1366x768 pikseli
$("#fifth").on("click", () =>{
	$(".main").empty();
	createNewElement("newParagraphTitle", "p", "title1366x768", "Przeliczanie szerokości i wysokości z pikseli na procenty, dla rozdzielczości: 1366x768", $(".main"));
	createNewElement("widthTitlePixels", "p", "widthTitilePixels", "podaj liczbę (w px)", $(".main"));
	createNewInput("widthInpuntPixels", "widthInpuntPixels", "number", $(".main"));
	createNewElement("btnPixels1366", "button", "btnPixels1366", "oblicz", $(".main"));
	createNewElement("widthPercents", "div", "widthPercents", "wynik to: ", $(".main")); 
	createNewElement("scorePercents", "div", "scorePercents", "", $(".main"));
		
	$("#btnPixels1366").on("click", () =>{
		let widthPixels = $("#widthInpuntPixels").val();
		$("#scorePercents").text(widthPixels/onePercent1366 + "%");
	});
	
	createNewElement("descriptionWidthTitlePercents", "p", "descriptionWidthTitlePercents", "podaj liczbę (w %)", $(".main"));
	createNewInput("widthInputPercents", "widthInputPercents", "number", $(".main"));
	createNewElement("btnPercents1366", "button", "btnPercents1366", "oblicz", $(".main"));
	createNewElement("widthPixels", "div", "widthPixels", "wynik to: ", $(".main"));
	createNewElement("scorePixels", "div", "scorePixels", "", $(".main"));
		
	$("#btnPercents1366").on("click", ()=>{
		let widthPercents = $("#widthInputPercents").val();
		$("#scorePixels").text(widthPercents*onePercent1366 + "px");
	});
});
});
