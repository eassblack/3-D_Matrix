
 var infoMatrix = {
        "id" : null,
        "size" : null
    };
 
 function getMatrix(){
    
    $.ajax({
        type: 'GET',
        contentType: 'application/json',
        url: 'http://localhost:3000/matrix',
        dataType: "json",
		success: function(data, textStatus, jqXHR){
         
			
			if(data==""){
				 quitarLoader();
				 swal( "No existen matrices.");

			}
			else{
			mostrarMatrix(data.Result.matrixes);
			}
			
        },
        error: function(jqXHR, textStatus, errorThrown){
        	quitarLoader();
            //alert('Error: ' + textStatus);
            swal("¡Disculpe!","En este momento nuestro servicio no esta disponible, por favor intente nuevamente mas tarde.");

        }
        
    });    

}

function mostrarMatrix(data){
	for ( var i in data) {
		infoMatrix.id = data[i].id;
		infoMatrix.size = data[i].w;

		var matrix = "<li>"
						+"<a id=\""+infoMatrix.id+"\" onclick=\"openOperateMatrix(\'"+infoMatrix.id+"\',"+infoMatrix.size+")\"><div class=\"waves-effect waves-gray\">"
				      		+"<p>Matrix "+infoMatrix.size+"x"+infoMatrix.size+"x"+infoMatrix.size+" id = "+infoMatrix.id+"</p>"
				      		+"<i class=\"fa fa-angle-right\"></i>"
				      	+"</div></a>"
				    +"</li>";
			
		$("#listMatrix").append(matrix);  
	}
quitarLoader();	
}

function openOperateMatrix(id,size){
	if(typeof(window.localStorage) != 'undefined'){ 
        window.localStorage.setItem("matrixId",id);
        window.localStorage.setItem("matrixSize",size); 
    } 
    else{ 
        throw "window.localStorage, no definido"; 
    }
    window.location = "operateMatrix.html";
}
