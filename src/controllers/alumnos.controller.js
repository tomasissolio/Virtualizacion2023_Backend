
import { query } from 'express'
import {pool} from '../db.js'

export const getAlumnos = async (req,res) => {
    try {
          const [rows] = await pool.query('SELECT * FROM alumnos')
    res.json(rows)  
    } catch (error) {
        return res.status(500).json({
            message : 'Se produjo un error -Programa para Virtualizacion-'
        })
    }
}

export const getAlumno = async (req,res) => {
    try {
            console.log(req.params.id) 
            const [rows] = await pool.query('SELECT * FROM alumnos WHERE id = ?', [req.params.id]) 

            console.log(rows)
    
    if (rows.length === 0) return res.status(404).json({
        message : 'Alumno no encontrado'
    })
    
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message : 'Se produjo un error -Programa para Virtualizacion-'
        })
    }
}

export const createAlumnos = async (req,res) => {
    try {
    const {id, legajo, dni, apellidoYNombre, fechaNacimiento} = req.body
    
    const [rows] = await pool.query('INSERT INTO alumnos (legajo, dni, apellidoYNombre, fechaNacimiento) VALUES (?, ?, ?, ?)', [legajo, dni, apellidoYNombre, fechaNacimiento])

    res.send({
        id : rows.insertId,
        legajo,
        dni,
        apellidoYNombre,
        fechaNacimiento
    })
    } catch (error) {
    return res.status(500).json({
        message : 'Se produjo un error -Programa para Virtualizacion-'
    })
    }
}

export const updateAlumnos = async (req,res) => {

    try {
        const {id} = req.params
    const {legajo, dni, apellidoYNombre, fechaNacimiento} = req.body

    const [result] = await pool.query('UPDATE alumnos SET id = IFNULL(?, id), legajo = IFNULL(?, legajo), dni = IFNULL(?, dni), apellidoYNombre = IFNULL(?, apellidoYNombre), fechaNacimiento = IFNULL(?, fechaNacimiento) WHERE id = ?' , [id, legajo, dni, apellidoYNombre, fechaNacimiento, id])

    if(result.affectedRows === 0) return res.status(404).json({
        message : 'Alumno no encontrado'
    })

    console.log(result)

    const [rows] = await pool.query('SELECT * FROM alumnos WHERE id = ?', [id])

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message : 'Se produjo un error -Programa para Virtualizacion-'
        })
    }
}

export const deleteAlumnos = async (req,res) => {

    try {
        const [result] = await pool.query('DELETE FROM alumnos WHERE id = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message : 'Alumno no encontrado'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message : 'Se produjo un error -Programa para Virtualizacion-'
        })
    }   
}