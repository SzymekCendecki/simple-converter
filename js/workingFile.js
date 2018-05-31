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
let onePercent1366 = 13.66;
let onePercent800 = 8;

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
