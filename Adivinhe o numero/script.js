function verificar(){
	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;
	if(n1==n2){
		alert("Você acertou");
	}else{
		alert("Errrou");
	}
	reset();
}
function reset(){
	document.getElementById("n2").value="";
	var r=Math.floor(Math.random()*100);
	document.getElementById("n1").innerHTML=r;

}