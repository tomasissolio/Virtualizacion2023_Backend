import { Router } from "express";
//import {pool} from '../db.js' // Estoy importando un módulo interno, por eso el ".js"
                                // Dejo de importarlo cuando paso a index.controller.js
                                // Es ahí donde lo pego ahora
//"..db.js", con dos puntos (..) porque ese archivo está en el directorio superior.

import { ping } from "../controllers/index.controller.js";

const router = Router();
/*
router.get('/ping', async (req, res) => {
    //const [result] = await pool.query('SELECT 1+1 AS result') // async - await.
    const [result] = await pool.query('SELECT 1+1 AS result') // async - await.
    //res.json(result[0])
    res.json(result)
});
*/
router.get('/ping', ping); // Cuando visite "ping" ('/ping'), vas a ejecutar la función "ping"

export default router; // Ya terminé de escribir código, ahora lo exporto