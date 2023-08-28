import { config } from "dotenv";
//import { config } from "dotenv"

config()

/* CREACION POR CONSOLA
console.log(process.env.PORT)
console.log(process.env.DB_HOST)
console.log(process.env.DB_PORT)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATABASE)
*/

process.env.PORT
process.env.DB_HOST
process.env.DB_PORT
process.env.DB_USER
process.env.DB_PASSWORD
process.env.DB_DATABASE

// PORT almacena lo que viene de process.env.PORT o si no usa el port 3000
export const PORT = process.env.PORT || 3000

export const DB_HOST = process.env.DB_HOST || 'localhost' // Lo que viene de DB_HOST, y si no viene nada, por defecto será 'localhost'
export const DB_PORT = process.env.DB_PORT || 33061 // Lo que viene de DB_PORT, y si no viene nada, por defecto será 3306
export const DB_USER = process.env.DB_USER || 'root' // Lo que viene de DB_USER, y si no viene nada, por defecto será 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'frt2k3' // Lo que viene de DB_PASSWORD, y si no viene nada, por defecto será 'frt2k3'
export const DB_DATABASE = process.env.DB_DATABASE || 'alumnosdb' // Lo que viene de DB_DATABASE, y si no viene nada, por defecto será 'alumnosdb'
