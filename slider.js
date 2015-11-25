function showclick(nr){
	document.getElementById("pic").innerHTML = "<img src=\"Pics/Pic" + nr + ".jpg\" height=\"500\" width=\"500\" alt=\" + nr \" >";
}


function showrandom(){
	
	nr = Math.round(Math.random() * 4)+1;
	document.getElementById("pic").innerHTML = "<img src=\"Pics/Pic" + nr + ".jpg\" height=\"500\" width=\"500\" alt=\" + nr \" >";
	setTimeout("showrandom()",1000);
	document.getElementById("btn1").disabled = true;

}

function alerts(nr){
	var msg;
	switch(nr){
		case 1:
			msg = "Confirmed";
			break;
		
		case 2: 
			msg = "OK";	
	}	
	alert(msg);
}

