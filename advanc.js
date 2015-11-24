function przedzial(){
	var liczba1 = document.getElementById("liczba1").value;
	var liczba2 = document.getElementById("liczba2").value;
	var napis = "";
	if (liczba1 < liczba2){
		for (i=liczba1; i<=liczba2; i++) {
			 napis = napis + i + " ";
		}
		document.getElementById("wyw").innerHTML = napis;
	}
	else if (liczba1 > liczba2) {
		document.getElementById("wyw").innerHTML = "Liczba 1 musi być mniejsza od Liczby 2";
	}
	else  {
		document.getElementById("wyw").innerHTML = "Podaj liczby";
	}
		
		
}