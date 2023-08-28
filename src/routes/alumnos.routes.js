import { Router } from "express";

const router = Router();
import { createAlumnos, getAlumnos, updateAlumnos, deleteAlumnos, getAlumno } from "../controllers/alumnos.controller.js";

router.get('/alumnos', getAlumnos ) 
router.get('/alumnos/:id', getAlumno ) 
router.post('/alumnos', createAlumnos )

router.patch('/alumnos/:id', updateAlumnos ) 

router.delete('/alumnos/:id', deleteAlumnos )

export default router;