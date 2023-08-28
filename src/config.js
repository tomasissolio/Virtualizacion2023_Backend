import { config } from "dotenv";

config()

process.env.PORT
process.env.DB_HOST
process.env.DB_PORT
process.env.DB_USER
process.env.DB_PASSWORD
process.env.DB_DATABASE

export const PORT = process.env.PORT || 3000

export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_PORT = process.env.DB_PORT || 33061 
export const DB_USER = process.env.DB_USER || 'root' 
export const DB_PASSWORD = process.env.DB_PASSWORD || 'frt2k3'
export const DB_DATABASE = process.env.DB_DATABASE || 'alumnosdb'
