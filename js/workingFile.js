document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

$("input").hide();
$(".main button").hide();
$("#scoreTitle").hide();

function showHidden(){
	$("input").show();
	$(".main button").show();
	$("#scoreTitle").show();
}

//zmienna o wartości jednego procenta dla szerokości 800, 1366 pikseli
let onePercent800 = 8;
let onePercent1024 = 10.24;
let onePercent1280 = 12.80;
let onePercent1360 = 13.60;
let onePercent1366 = 13.66;

//obsługa zdarzeń dla przycisku 800x600 pikseli
$("#first").on("click", ()=>{
 	showHidden();

	$("#pixelsToPercents").text("Konwersja szerokości z pikseli na procenty dla szerokości");
	$("#widthValue").text("800px");
	$("#subTitlePixels").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsWidth").on("click", () =>{
		let widthPixels = $("#numberPixelsValue").val();
		$("#scoreWidth").text(widthPixels/onePercent800 + "%");
	});

	$("#subTitlePercents").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsWidth").on("click", ()=>{
		let widthPercents = $("#numberPercentsValue").val();
		$("#scoreWidth").text(widthPercents*onePercent800 + "px");
	});
});

//obsługa zdarzeń dla przycisku 1024x768 pikseli
$("#second").on("click", ()=>{
 	showHidden();

	$("#pixelsToPercents").text("Konwersja szerokości z pikseli na procenty dla szerokości");
	$("#widthValue").text("1024px");
	$("#subTitlePixels").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsWidth").on("click", () =>{
		let widthPixels = $("#numberPixelsValue").val();
		$("#scoreWidth").text(widthPixels/onePercent1024 + "%");
	});

	$("#subTitlePercents").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsWidth").on("click", ()=>{
		let widthPercents = $("#numberPercentsValue").val();
		$("#scoreWidth").text(widthPercents*onePercent1024 + "px");
	});
});

//obsługa zdarzeń dla przycisku 1280x768 pikseli
$("#third").on("click", ()=>{
 	showHidden();

	$("#pixelsToPercents").text("Konwersja szerokości z pikseli na procenty dla szerokości");
	$("#widthValue").text("1280px");
	$("#subTitlePixels").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsWidth").on("click", () =>{
		let widthPixels = $("#numberPixelsValue").val();
		$("#scoreWidth").text(widthPixels/onePercent1280 + "%");
	});

	$("#subTitlePercents").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsWidth").on("click", ()=>{
		let widthPercents = $("#numberPercentsValue").val();
		$("#scoreWidth").text(widthPercents*onePercent1280 + "px");
	});
});

//obsługa zdarzeń dla przycisku 1360x768 pikseli
$("#fourth").on("click", ()=>{
 	showHidden();

	$("#pixelsToPercents").text("Konwersja szerokości z pikseli na procenty dla szerokości");
	$("#widthValue").text("1360px");
	$("#subTitlePixels").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsWidth").on("click", () =>{
		let widthPixels = $("#numberPixelsValue").val();
		$("#scoreWidth").text(widthPixels/onePercent1360 + "%");
	});

	$("#subTitlePercents").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsWidth").on("click", ()=>{
		let widthPercents = $("#numberPercentsValue").val();
		$("#scoreWidth").text(widthPercents*onePercent1360 + "px");
	});
});

//obsługa zdarzeń dla przycisku dla rozdzielczości 1366x768 pikseli
$("#fifth").on("click", () =>{
	showHidden();

	$("#pixelsToPercents").text("Konwersja szerokości z pikseli na procenty dla szerokości");
	$("#widthValue").text("1366px");
	$("#subTitlePixels").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsWidth").on("click", () =>{
		let widthPixels = $("#numberPixelsValue").val();
		$("#scoreWidth").text(widthPixels/onePercent1366 + "%");
	});

	$("#subTitlePercents").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsWidth").on("click", ()=>{
		let widthPercents = $("#numberPercentsValue").val();
		$("#scoreWidth").text(widthPercents*onePercent1366 + "px");
	});
});
});
