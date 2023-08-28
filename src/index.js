// Archivo que inicia a todo;
// este archivo llama a app.js, el cual tiene todas las configuraciones de express.

// Código trabajado en base a: "https://www.youtube.com/watch?v=3dSkc-DIM74"
// Comando para correr automáticamente el código luego de guardar un cambio: "npm run dev"

import app from './app.js'
import {PORT} from './config.js'

//app.listen(3000) // Que escuche en el puerto 3000; Previo a configurar para escuchar desde el puerto PORT
app.listen(PORT) // Que escuche en el puerto PORT, importado desde config.js
console.log('Servidor corriendo en el puerto', PORT)
//console.log('Servidor corriendo en el puerto 3000') // Previo a escuchar en el puerto PORT, importado desde config.js