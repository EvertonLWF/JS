


function Data(){
	setInterval(Data,1);
	var dt = new Date();
	var ptbr = "Data="+dt.getDate()+"/"+dt.getMonth()+"/"+dt.getFullYear()+" Horario ="+dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+":"+(parseInt(dt.getMilliseconds()/10));
	document.getElementById('dta').innerHTML = ptbr;

}