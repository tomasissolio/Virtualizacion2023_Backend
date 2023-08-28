// Traigo solo un módulo de express, "Router".
// Es para crear una sección de rutas, que agrupe todas las rutas
// y les coloque nombre.
import { Router } from "express";

const router = Router();
import { createAlumnos, getAlumnos, updateAlumnos, deleteAlumnos, getAlumno } from "../controllers/alumnos.controller.js";

/*
// Código previo a crear la carpeta "Controllers"
// APIs, endpoints para poder consultarlos desde aplicaciones clientes
router.get('/alumnos', (req,res) => res.send('Obteniendo alumnos') ) // Método para recibir una petición http.
router.post('/alumnos', (req,res) => res.send('Creando alumnos') ) // Método para recibir una petición http.
router.put('/alumnos', (req,res) => res.send('Actualizando alumnos') ) // Método para recibir una petición http.
router.delete('/alumnos', (req,res) => res.send('Eliminando alumnos') ) // Método para recibir una petición http.
*/


// Código previo a crear la carpeta "Controllers"
// APIs, endpoints para poder consultarlos desde aplicaciones clientes
router.get('/alumnos', getAlumnos ) // Método para recibir una petición http. Todos los alumnos.
router.get('/alumnos/:id', getAlumno ) // Método para recibir una petición http. Un único alumno, por ID.
router.post('/alumnos', createAlumnos ) // Método para recibir una petición http.

//router.put('/alumnos', updateAlumnos ) // Método para recibir una petición http.
//router.put('/alumnos/:id', updateAlumnos ) // Método para recibir una petición http.
router.patch('/alumnos/:id', updateAlumnos ) // Método para recibir una petición http.
                                             // Patch es casi igual a put, solo que permite actualizar parcialmente,
                                             // no tengo que volver a enviar los datos que no quiero modificar.
                                             // Al request también tendré que hacerlo con "Patch" y no con "Put".

//router.delete('/alumnos', deleteAlumnos ) // Método para recibir una petición http.
router.delete('/alumnos/:id', deleteAlumnos ) // Método para recibir una petición http. Eliminara solo el alumno con el id que corresponda al ingreso


export default router; // Ya terminé de escribir código, ahora lo exporto
/*
Con este código le digo a express
que tengo un número de rutas.
*/