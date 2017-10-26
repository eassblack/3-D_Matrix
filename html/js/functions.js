var usuariop="";

var actual=0;

$(".ima").bind('touchstart', function(){
			 siguiente();
});
function checkConnection() {
    var networkState = navigator.network.connection.type;
	if (networkState == 'none'){
		alert('Disculpe, para utilizar esta aplicaci\u00F3n requiere una conexi\u00F3n activa');
		navigator.app.exitApp();
	}
}

var callBackAjax = function (jqXHR, ajaxOptions, thrownError){
	if (jqXHR.status === 0) {
		console.log('Not connect.\n Verify Network.');
	} else if (jqXHR.status == 404) {
		console.log('Requested page not found. [404]');
	} else if (jqXHR.status == 500) {
		console.log('Internal Server Error [500].');
	} else if (ajaxOptions === 'parsererror') {
		console.log('Requested JSON parse failed.');
	} else if (ajaxOptions === 'timeout') {
		console.log('Time out error.');
	} else if (ajaxOptions === 'abort') {
		console.log('Ajax request aborted.');
	} else if (jqXHR.status == 401) {
		$.mobile.hidePageLoadingMsg();
		alert('Su sesión ha expirado');
		$('#identification').val('');
		$.mobile.changePage('#login');
	} else {
		console.log('Uncaught Error.\n' + jqXHR.responseText);
	}
				
	$.mobile.hidePageLoadingMsg();
	console.log('un servicio no esta respondiendo!');
	alert('Disculpe, en estos momentos el servicio no se encuentra disponible.');
	//$('#identification').val('');
	//$.mobile.changePage('#login');
}

// manejo de la tecla atrás de android <-
function onBackKeyDown() {
	if($.mobile.activePage.is('#login')){
		navigator.app.exitApp();
	}
	if($.mobile.activePage.is('#dashboard')){
		var answer = confirm("Realmente desea salir?")
		if (answer){
		      navigator.app.exitApp();
		}
	}
	else {
        navigator.app.backHistory()
    }
}

function closeApp(){
	var answer = confirm("Realmente desea salir?")
	if (answer){
		navigator.app.exitApp();
	}
} 