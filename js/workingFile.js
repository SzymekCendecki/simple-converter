document.addEventListener("DOMContentLoaded", () => {
console.log("NIEWIERNE PSY RULEZ!!!!");

$("#convert").on("click", ()=>{
	let widthPercent = $("#widthOnPercent").val();
	let onePercent = 13.66;
	$("#score").text(onePercent*widthPercent + "px");
});

$("#convert2").on("click", ()=>{
	let percent = $("#percentOnWidth").val();

	let onePercent = 13.66;
	$("#score2").text(percent/onePercent + "%");
});



$("#fifth").on("click", () => {

});


});
