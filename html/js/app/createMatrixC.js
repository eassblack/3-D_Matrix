
function crearMatrix(n){
  
  $.ajax({
      type : 'POST',
      contentType : 'application/json',
      url :  'http://localhost:3000/matrix',
      dataType : "json",
      data: createMatrixToJson(n),
      success: function(data, textStatus, jqXHR) {
        console.log(data)
        var estado=typeof(data.error)==='undefined';
        if (estado)
        {
            var id=data.Result.id; 
            swal({
                  title: data.Result.msj,
                  text: data.Result.id,
                  type: "success",
                  showCancelButton: false,
                  confirmButtonColor: "#8DC03E !important", //sugerencia betza
                  confirmButtonText: "Ok",
                  closeOnConfirm: false
                },
                function(){
                  window.location = "index.html";                                        
            });                
        }
        else
        {
            swal({
                  title: data.error,
                  type: "warning",
                  showCancelButton: false,
                  confirmButtonColor: "#8DC03E !important", //sugerencia betza
                  confirmButtonText: "Ok",
                  closeOnConfirm: false
                },
                function(){
                  window.location = "index.html";                                        
            });                
        }
      },

      error: function(jqXHR, textStatus, errorThrown) {
          
        swal("¡Disculpe! Error de Conexion","Por favor intentelo mas tarde.");
         
      }
  });
}

function createMatrixToJson(n)
{
  var data= JSON.stringify(
    {        
      "n":n
    }
  );  
  return data;
}




