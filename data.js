function showdata(){

var date = new Date();
var day;
var month;
var hours;
var minutes;
var seconds;

switch(date.getDay()){
	case 1: 
		day = "Poniedzialek";
		break;
	case 2: 
		day = "Wtorek";
		break;
	case 3: 
		day = "Środa";
		break;
	case 4: 
		day = "Czwartek";
		break;
	case 5: 
		day = "Piątek";
		break;
	case 6: 
		day = "Sobota";
		break;
	case 7: 
		day = "Niedziela";
		break;
}		

switch(date.getMonth()){
	case 1:
		month = "Styczeń";
		break;
	case 2:
		month = "Luty";
		break;
	case 3:
		month = "Marzec";
		break;
	case 4:
		month = "Kwieceń";
		break;
	case 5:
		month = "Maj";
		break;
	case 6:
		month = "Czerwiec";
		break;
	case 7:
		month = "Lipiec";
		break;
	case 8:
		month = "Sierpień";
		break;
	case 9:
		month = "Wrzesień";
		break;
	case 10:
		month = "Padziernik";
		break;
	case 11:
		month = "Listopad";
		break;
	case 12:
		month = "Grudzień";
		break;
}

if(date.getHours() <10)	hours = "0"+ date.getHours();
else hours = date.getHours();

if(date.getMinutes() <10) minutes = "0"+ date.getMinutes();
else minutes = date.getMinutes();

if(date.getSeconds() <10) seconds = "0"+ date.getSeconds();
else seconds = date.getSeconds();

document.getElementById("demo").innerHTML =  day + ", " + date.getDate() +  " " + month + " " + date.getFullYear()  + " " + hours + ":" + minutes + ":" + seconds;

setTimeout("showdata()", 1000);


}