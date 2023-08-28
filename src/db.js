/*
Archivo de conexión.
*/
/*
createConnection mantiene un solo hilo de conexión.
createPool mantiene un conjunto de conexiones que podemos utilizar.
Por el resto, son muy similares.

Al ejecutarse, espera un objeto de conexión,
el cual espera todos los datos de dónde está
mi conexión.
*/

// CÓDIGO PARA DESARROLLO, NO PARA PRODUCCION.
import {createPool} from 'mysql2/promise'
import{
    // No importo el port porque es del servidor
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE

} from './config.js'

/*
export const pool = createPool({
host: 'localhost', // Porque la base de datos está en la misma PC.
                    // Si se usa un servicio en la nube, acá se coloca
                    // una IP
user: 'root',
password: 'frt2k3',
port: 33061, // Es el puerto que configuré.
            // Si no funciona probar con el 3306; es el puerto por defecto.
            //33061 es el que configure para la consola de mysql.
database: 'alumnosdb'
})
*/

//_______________________________________________________________________
// CÓDIGO PARA PRODUCCIÓN. Se usan variables de entorno: Que la computadora o el servidor puede tener.
// Comando (en la terminal) "npm i dotenv": Permite leer un archivo ".env" en el que se podrán leer variables de entorno
// "npm i dotenv"
// Se podrán guardar variables de entorno y no se tendrá que escribirlas a mano.

export const pool = createPool({
host: DB_HOST,
user: DB_USER,
password: DB_PASSWORD,
port: DB_PORT,
database: DB_DATABASE
})
