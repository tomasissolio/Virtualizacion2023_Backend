//Archivo: app.js, el cual tiene todas las configuraciones de express. Llama a las rutas

//console.log("Hello world");
import express from 'express'

// El import del pool pasó a index.routes.js
//import {pool} from './db.js' // Estoy importando un módulo interno, por eso el ".js"
import alumnosRoutes from './routes/alumnos.routes.js'
import indexRoutes from './routes/index.routes.js'

//import {PORT} from './config.js'

// 1) Defino app
const app = express()


// Creo una ruta nueva
//app.get('/ping', (req, res) => res.send('pong')); // "Pong" sería la respuesta (sencilla)
                                                    // al request.
//Pasé el siguiente request a index.routes.js
                                                    /*
app.get('/ping', async (req, res) => {
    //const [result] = await pool.query('SELECT 1+1 AS result') // async - await.
    const [result] = await pool.query('SELECT 1+1 AS result') // async - await.
    //res.json(result[0])
    res.json(result)
});
*/

/*
// Pasé todo este bloque de código a "alumnos.routes". cambié cada "app" por "router".
// APIs, endpoints para poder consultarlos desde aplicaciones clientes
app.get('/alumnos', (req,res) => res.send('Obteniendo alumnos') ) // Método para recibir una petición http.
app.post('/alumnos', (req,res) => res.send('Creando alumnos') ) // Método para recibir una petición http.
app.put('/alumnos', (req,res) => res.send('Actualizando alumnos') ) // Método para recibir una petición http.
app.delete('/alumnos', (req,res) => res.send('Eliminando alumnos') ) // Método para recibir una petición http.
*/


app.use(express.json()) // El método "json" dice: Voy a recibir los datos, a convertirlos en json
                        // o un objeto javascript y luego se los voy a pasar a las rutas.

//Hago los "use" para trabajar con los routes importados.
app.use(indexRoutes)
app.use('/api',alumnosRoutes) // Reemplazo todo el bloque anterior -comentado- por esta línea y el import de alumnos.routes
                                // Concatenaré un /api antes de cada una de las rutas importadas anteriormente
                                // con "'/api'". Esto es para indicar que estoy trabajando con una API.

app.use((req, res, next) => {
    res.status(404).json({
    message: 'Endpoint no encontrado'
    })
})

// 2) Exporto app.
export default app;