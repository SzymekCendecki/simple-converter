document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

$("input").hide();
$(".main button").hide();
$("#scoreTitle").hide();
$("#scoreTitleHeight").hide();

function showHidden(){
	$("input").show();
	$(".main button").show();
	$("#scoreTitle").show();
	$("#scoreTitleHeight").show();
}

//zmienna o wartości jednego procenta dla szerokości 800, 1366 pikseli
let onePercent800 = 8;
let onePercent1024 = 10.24;
let onePercent1280 = 12.80;
let onePercent1360 = 13.60;
let onePercent1366 = 13.66;
let onePercent600 = 6;
let onePercent768 = 7.68;

//obsługa zdarzeń dla przycisku 800x600 pikseli
$("#first").on("click", ()=>{
 	showHidden();

	$("#pixelsToPercents").text("Konwersja szerokości z pikseli na procenty dla szerokości");
	$("#widthValue").text("800px");
	$("#subTitlePixels").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsWidth").on("click", () =>{
		let widthPixels = $("#numberPixelsValue").val();

		if(widthPixels <= 0){
				$("#scoreWidth").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(widthPixels > 0){
			$("#scoreWidth").text(widthPixels/onePercent800 + "%");
		}
	});

	$("#subTitlePercents").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsWidth").on("click", ()=>{
		let widthPercents = $("#numberPercentsValue").val();

		if(widthPercents <= 0){
				$("#scoreWidth").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(widthPercents > 0){
			$("#scoreWidth").text(widthPercents*onePercent800 + "px");
		}
	});

	$("#pixelsToPercentsHeight").text("Konwersja szerokości z pikseli na procenty dla wysokości");
	$("#heightValue").text("600px");
	$("#subTitlePixelsHeight").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsHeight").on("click", () =>{
		let heightPixels = $("#numberPixelsValueHeight").val();

		if(heightPixels <= 0){
				$("#scoreHeight").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(heightPixels > 0){
			$("#scoreHeight").text(heightPixels/onePercent600 + "%");
		}
	});

	$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsHeight").on("click", ()=>{
		let heightPercents = $("#numberPercentsValueHeight").val();

		if(heightPercents <= 0){
				$("#scoreHeight").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(heightPercents > 0){
			$("#scoreHeight").text(heightPercents*onePercent600 + "px");
		}

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

		if(widthPixels <= 0){
				$("#scoreWidth").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(widthPixels > 0){
				$("#scoreWidth").text(widthPixels/onePercent1024 + "%");
		}
	});

	$("#subTitlePercents").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsWidth").on("click", ()=>{
		let widthPercents = $("#numberPercentsValue").val();

		if(widthPercents <= 0){
				$("#scoreWidth").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(widthPercents > 0){
				$("#scoreWidth").text(widthPercents*onePercent1024 + "px");
		}

	});

	$("#pixelsToPercentsHeight").text("Konwersja szerokości z pikseli na procenty dla wysokości");
	$("#heightValue").text("768px");
	$("#subTitlePixelsHeight").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsHeight").on("click", () =>{
		let heightPixels = $("#numberPixelsValueHeight").val();

		if(heightPixels <= 0){
				$("#scoreHeight").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(heightPixels > 0){
				$("#scoreHeight").text(heightPixels/onePercent768 + "%");
		}
	});

	$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsHeight").on("click", ()=>{
		let heightPercents = $("#numberPercentsValueHeight").val();

		if(heightPercents <= 0){
				$("#scoreHeight").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(heightPercents > 0){
		$("#scoreHeight").text(heightPercents*onePercent768 + "px");
}
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

		if(widthPixels <= 0){
				$("#scoreHeight").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(widthPixels > 0){
	$("#scoreWidth").text(widthPixels/onePercent1280 + "%");
}
});

	$("#subTitlePercents").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsWidth").on("click", ()=>{
		let widthPercents = $("#numberPercentsValue").val();

		if(widthPercents <= 0){
				$("#scoreHeight").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(widthPercents > 0){
				$("#scoreWidth").text(widthPercents*onePercent1280 + "px");
}

	});

	$("#pixelsToPercentsHeight").text("Konwersja szerokości z pikseli na procenty dla wysokości");
	$("#heightValue").text("768px");
	$("#subTitlePixelsHeight").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsHeight").on("click", () =>{
		let heightPixels = $("#numberPixelsValueHeight").val();

		if(heightPixels <= 0){
				$("#scoreHeight").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(heightPixels > 0){
				$("#scoreHeight").text(heightPixels/onePercent768 + "%");
}

	});

	$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsHeight").on("click", ()=>{
		let heightPercents = $("#numberPercentsValueHeight").val();

		if(heightPercents <= 0){
				$("#scoreHeight").text("liczba jest mniejsza lub równa zero. popraw");
		}else if(heightPercents > 0){
					$("#scoreHeight").text(heightPercents*onePercent768 + "px");
}
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

	$("#pixelsToPercentsHeight").text("Konwersja szerokości z pikseli na procenty dla wysokości");
	$("#heightValue").text("768px");
	$("#subTitlePixelsHeight").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsHeight").on("click", () =>{
		let heightPixels = $("#numberPixelsValueHeight").val();
		$("#scoreHeight").text(heightPixels/onePercent768 + "%");
	});

	$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsHeight").on("click", ()=>{
		let heightPercents = $("#numberPercentsValueHeight").val();
		$("#scoreHeight").text(heightPercents*onePercent768 + "px");
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

	$("#pixelsToPercentsHeight").text("Konwersja szerokości z pikseli na procenty dla wysokości");
	$("#heightValue").text("768px");
	$("#subTitlePixelsHeight").text("Podaj liczbę (w pikselach)");

	$("#calculatePixelsHeight").on("click", () =>{
		let heightPixels = $("#numberPixelsValueHeight").val();
		$("#scoreHeight").text(heightPixels/onePercent768 + "%");
	});

	$("#subTitlePercentsHeight").text("Podaj liczbę (w procentach)");
	$("#calculatePercentsHeight").on("click", ()=>{
		let heightPercents = $("#numberPercentsValueHeight").val();
		$("#scoreHeight").text(heightPercents*onePercent768 + "px");
	});
});
});
