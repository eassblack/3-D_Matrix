var  id = window.localStorage.getItem ("matrixId");
var  size = window.localStorage.getItem ("matrixSize"); 


 function updateValue(x,y,z,w){
    
    $.ajax({
      type : 'PUT',
      contentType : 'application/json',
      url :  'http://localhost:3000/matrix/'+id,
      dataType : "json",
      data: dataToJson(x,y,z,w),
      success: function(data, textStatus, jqXHR) {
        console.log(data)
        var estado=typeof(data.error)==='undefined';
        if (estado)
        {
            var id=data.Result.id; 
            swal({
                  title: data.Result,
                  type: "success",
                  showCancelButton: false,
                  confirmButtonColor: "#8DC03E !important", //sugerencia betza
                  confirmButtonText: "Ok",
                  closeOnConfirm: true
                },
                function(){                                       
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
                  closeOnConfirm: true
                },
                function(){                                        
            });                
        }
      },

      error: function(jqXHR, textStatus, errorThrown) {
          
        swal("¡Disculpe!","Valores fuera de rango");
         
      }
  });  

}

 function queryMatrix(x1,x2,y1,y2,z1,z2){
    
    $.ajax({
      type : 'POST',
      contentType : 'application/json',
      url :  'http://localhost:3000/matrix/'+id,
      dataType : "json",
      data: dataQueryToJson(x1,x2,y1,y2,z1,z2),
      success: function(data, textStatus, jqXHR) {
        console.log(data)
        var estado=typeof(data.error)==='undefined';
        if (estado)
        {
            var id=data.Result.id; 
            swal({
                  title: "Resultado de la operacion: " + data.Result,
                  type: "success",
                  showCancelButton: false,
                  confirmButtonColor: "#8DC03E !important", //sugerencia betza
                  confirmButtonText: "Ok",
                  closeOnConfirm: true
                },
                function(){                                       
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
                  closeOnConfirm: true
                },
                function(){                                        
            });                
        }
      },

      error: function(jqXHR, textStatus, errorThrown) {
          
        swal("¡Disculpe!","Valores fuera de rango");
         
      }
  });  

}

function dataToJson(x,y,z,w)
{
  var data= JSON.stringify(
    {
    	"x":x,
    	"y":y,
    	"z":z,
    	"w":w
    }
  );  
  return data;
}

function dataQueryToJson(x1,x2,y1,y2,z1,z2)
{
  var data= JSON.stringify(
    {
	"x1":x1,
	"x2":x2,
	"y1":y1,
	"y2":y2,
	"z1":z1,
	"z2":z2
	}
  );  
  return data;
}

