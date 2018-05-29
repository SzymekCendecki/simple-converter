document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

//zmienna o wartości jednego procenta dla szerokości 1366px
let onePercent = 13.66;

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

//obsługa zdarzeń dla przycisku dla rozdzielczości 1366x768 pikseli

$("#fifth").on("click", () =>{
	
	createNewElement("newParagraphTitle", "p", "title1366x768", "Przeliczanie szerokości i wysokości z pikseli na procenty, dla rozdzielczości: 1366x768", $(".main"));
	createNewElement("widthTitlePixels", "p", "widthTitilePixels", "podaj liczbę (w px)", $(".main"));
	createNewInput("widthInpuntPixels", "widthInpuntPixels", "number", $(".main"));
	createNewElement("btnPixels1366", "button", "btnPixels1366", "oblicz", $(".main"));
	createNewElement("widthPercents", "p", "widthPercents", "wynik to: ", $(".main")); 
	createNewElement("scorePercents", "div", "scorePercents", "", $(".main"));
		
	$("#btnPixels1366").on("click", () =>{
		let widthPixels = $("#widthInpuntPixels").val();
		$("#scorePercents").text(widthPixels/onePercent + "%");
	});
	
	createNewElement("descriptionWidthTitlePercents", "p", "descriptionWidthTitlePercents", "podaj liczbę (w %)", $(".main"));
	createNewInput("widthInputPercents", "widthInputPercents", "number", $(".main"));
	createNewElement("btnPercents1366", "button", "btnPercents1366", "oblicz", $(".main"));
	createNewElement("widthPixels", "p", "widthPixels", "wynik to: ", $(".main"));
	createNewElement("scorePixels", "div", "scorePixels", "", $(".main"));
		
	$("#btnPercents1366").on("click", ()=>{
		let widthPercents = $("#widthInputPercents").val();
		$("#scorePixels").text(widthPercents*onePercent + "px");
	});
});
});
