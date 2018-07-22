function add() {
	var ing = document.getElementById("ing").value;
	var list = document.getElementById("list").innerHTML;
	list = list + "<li>"+ing+"</li>";
	document.getElementById("list").innerHTML=list;
}