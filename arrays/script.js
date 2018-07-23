	var lista = ["arroz","feijão","massa","carne"];
	
	function exibe(){		
		document.write("Lista = "+lista+",<br><br>");
	}

	function remover(){
		lista.pop();
		document.getElementById('div').innerHTML="Lista = "+lista+",<br><br>";
		alert("removido com sucesso");

	}
	function Add(){
		var a= prompt("Qual item deseja incluir?");
		lista.push(a);
		document.getElementById('div').innerHTML="Lista = "+lista+",<br><br>";
		alert("incluido com Sucesso");
	}
	
