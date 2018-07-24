function press(event){//onkeydown
	console.log("pressionou alguma tecla: "+event.keyCode);
}
function up(event){//onkeydup
	if(event.shiftKey == true && event.keyCode == 69 ){
		console.log("Apertou shift + E");
	}
	if(event.altKey == true){
		console.log("Apertou alguma tecla com alt");
	}
}
function press(){
	console.log("pressionou alguma techa: "+event.keyCode);
}