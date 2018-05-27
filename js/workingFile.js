document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");





//obsługa zdarzeń dla przycisku dla rozdzielczości 1366x768 pikseli

$("#fifth").on("click", function(){
	
	let title = document.createElement("p");
	title.id = "title";
	title.innerText = "Przeliczanie szerokości i wysokości z pikseli na procenty, dla rozdzielczości: 1366x768";
	$(".main").append(title);
	
	
	let descriptionWidthTitlePixels = document.createElement("p");
	descriptionWidthTitlePixels.id = "descriptionWidthTitlePixels";
	descriptionWidthTitlePixels.innerText = "podaj liczbę (w px)";
	$(".main").append(descriptionWidthTitlePixels);
	
	let widthInpuntPixels = document.createElement("input");
	widthInpuntPixels.id = "widthInpuntPixels";
	widthInpuntPixels.type = "number";
	$(".main").append(widthInpuntPixels);
	
	let btnPixels1366 = document.createElement("button");
	btnPixels1366.id = "btnPixels1366";
	btnPixels1366.innerText = "oblicz";
	$(".main").append(btnPixels1366);
	
	let widthPercents = document.createElement("p");
	widthPercents.id = "widthPercents";
	widthPercents.innerText = "wynik to: ";
	$(".main").append(widthPercents);
	
	let scorePercents = document.createElement("div");
	scorePercents.id = "scorePercents";
	scorePercents.innerText = "";
	$(".main").append(scorePercents);
	
	$("#btnPixels1366").on("click", function(){
		let widthPixels = $("#widthInpuntPixels").val();
		let onePercent = 13.66;
		$("#scorePercents").text(widthPixels/onePercent + "%");
	});
	
		
	
	let descriptionWidthTitlePercents = document.createElement("p");
	descriptionWidthTitlePercents.id = "descriptionWidthTitlePercents";
	descriptionWidthTitlePercents.innerText = "podaj liczbę (w %)";
	$(".main").append(descriptionWidthTitlePercents);
	
	let widthInputPercents = document.createElement("input");
	widthInputPercents.id = "widthInputPercents";
	widthInputPercents.type = "number";
	$(".main").append(widthInputPercents);
	
		let btnPercents1366 = document.createElement("button");
	btnPercents1366.id = "btnPercents1366";
	btnPercents1366.innerText = "oblicz";
	$(".main").append(btnPercents1366);
	
	let widthPixels = document.createElement("p");
	widthPixels.id = "widthPixels";
	widthPixels.innerText = "wynik to: ";
	$(".main").append(widthPixels);
	
	let scorePixels = document.createElement("div");
	scorePixels.id = "scorePixels";
	scorePixels.innerText = "";
	$(".main").append(scorePixels);
	
	$("#btnPercents1366").on("click", function(){
		let widthPercents = $("#widthInputPercents").val();
		let onePercent = 13.66;
		$("#scorePixels").text(widthPercents*onePercent + "px");
	});
});
	

});
