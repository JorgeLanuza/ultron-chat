- Nos vamos como siempre al package json y añadimos el script dev
- Instalamos dotenv npm i dotenv.
- Creamos fichero de entorno .env y lo requerimos en www require('dotenv'.config())
- Instalamos la librería y la requerimos en el www const io = require('socket.io')(server); Este require se esta trayendo una funcion quye nosotros ahora podemos ejecutar. Como parametro de ejecucion le pasamos el servidor con el cual queremos conectarnos, en este caso tenemos la variable server ya creada que seria el servidor http que seria el que nos permite devilver la vistas etc... y ahora tenemos el de socket que nos permite hacer una comunicacion en tiempo real. Funciona a través de eventos. Esta variable io me permite engacharme a diferentes eventos. Los eventos son cosas que suceden en cualquier punto de la aplicacion, por ejemplo un click, scroll etc...En socket io los eventos son un poco diferentes, son relacionados con cosas que ocurren el servidor, conexiones, mensajes etc...
- Para poder conectarnos y generar este tipo de eventos tenemos la funcion on() como segundo parametro recibimos una funcion anonima
- Para comunicarnos necesitaremos tener inyectado js enb nuestro layout script(src='/socket.io/socket.io.js')