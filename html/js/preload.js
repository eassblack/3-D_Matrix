
/*$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 200);
	
});*/

function quitarLoader() {
	$('body').addClass('loaded');
}

function obtenerFecha(){
	 var monthNames = [  "Enero", "Febrero", "Marzo",  "Abril", "Mayo", "Junio", "Julio",  "Agosto", "Septiembre", "Octubre",  "Noviembre", "Diciembre"];

var date = new Date();
var day = date.getDate();
var monthIndex = date.getMonth();
var year = date.getFullYear();
 var h = date.getHours();
  var m = date.getMinutes();
return (day + ' ' + monthNames[monthIndex] + ' ' + year+' '+h+':'+m);
}