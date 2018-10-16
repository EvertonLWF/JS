function bola(){
	var bola= document.createElement("div");
	bola.setAttribute("class","bola");
	var p1 = Math.floor(Math.random()*1500);
	var p2 = Math.floor(Math.random()*400);
	var color=Math.floor(Math.random()*999);
	bola.setAttribute("style","left:"+p1+"px;top:"+p2+"px;background-color: #"+color+";");

	bola.setAttribute("onclick","estourar(this)");
	document.body.appendChild(bola);
	
}
function estourar(objeto){
	document.body.removeChild(objeto);
	placar();
}
function start(){
	setInterval(bola,1000);
}
function placar(){
	var score=parseInt(document.getElementById('score').innerHTML);
	score=score+10;
	document.getElementById('score').innerHTML=score;

}
