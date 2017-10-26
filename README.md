# 3-D_Matrix

Resumen del proyecto: El proyecto fue desarollado usando una base de datos en mongoDB, y una API REST en express para poder interactuar con la base de datos.Tambien cumple la funcion de retornar las vistas del proyecto como tal.

Con fines de poner en prueba lo desarrollado se ejecuto dicho proyecto en una instancia EC2 de AWS.

URL de la vista: http://54.152.143.242:3010  

Tambien se encuentran funcionando los siguientes endPoint:

-Get Matrixs: http://54.152.143.242:3010/matrix llamado con el verbo "GET".

-Create Matrix: http://54.152.143.242:3010/matrix llamado con el verbo "POST" y cuerpo de tipo JSON {"n": number}.

-Update Value: http://54.152.143.242:3010/matrix/id donde id es el id de la matrix que se quiere operar, llamado con el verbo "PUT" y cuerpo de tipo JSON {"x": number,"y":number,"z":number,"w":number}.

-Query Matrix: http://54.152.143.242:3010/matrix/id donde id es el id de la matrix que se quiere operar, llamado con el verbo "POST" y cuerpo de tipo JSON {"xq": number,"x2":number,"y1":number,"y2":number,"z1":number,"z2":number}.

Estructura del proyecto:

Controllers: En esta carpeta se encuentra el archivo 3-D_matrix.js en el cual esta contenido la logica del proyecto. En donde esta la interaccion con la base de datos. Dichas funciones son llamadas mediante las diferentes rutas y dependiento del verbo REST que se este llamando.

Models: En esta carpeta se encuentra el archivo matrix.js que contiene las estructuras basicas de los modelos manejados en el proyecto. Y que atravez de las mismas es almacenada la data persistente.

Html: En esta carpeta se encuentra los diferentes archivos que conforman las vistas del poyecto, que constan de tres HTMLs, la carpeta js donde se encuentran las diferentes librerias javaScript usadas como "materialize.js", y dentro de la mismas esta la carpeta app en la cual estan contenidos los diferentes controladores que se encarga de consumir la API REST y mostrar los resultados en las vistas. 

app.js : Archivo principal que se encarga de crear la app en express, En el cual se encuentra la conexion a la base de datos. la definicion de las diferentes rutas manejas y se encarga de direcciona hace su respectivo controller. Tambien se encarga mediante una de sus rutas el retorno de la vista principal para poder hacer uso del proyecto.

