/*
Controladores. Es aquí donde vamos a importar los archivos, por ejemplo, los de conexión
con la base de datos. (Aunque por ahora no hay ningún archivo)
*/
import { query } from 'express'
import {pool} from '../db.js'

//export const getAlumnos = (req,res) => res.send('Obteniendo alumnos')
export const getAlumnos = async (req,res) => {
    try {
          const [rows] = await pool.query('SELECT * FROM alumnos') // Devuelve un arreglo de todos los objetos
                                                             // que tengo en ese momento en la tabla.
    res.json(rows)  
    } catch (error) {
        return res.status(500).json({
            message : 'Se produjo un error -Programa para Virtualizacion-'
        })
    }
}

export const getAlumno = async (req,res) => {
    try {
            console.log(req.params.id) // Obtengo el parámetro ID desde req, ya que viene desde la URL.
                                // req.params guarda en un objeto todos los parámetros que vienen desde la URL.
            const [rows] = await pool.query('SELECT * FROM alumnos WHERE id = ?', [req.params.id]) 
                                                            // Devuelve el/los alumnos (debería ser uno solo)
                                                            // cuyo Id coincide con lo traído desde la URL en req.params.id.
            console.log(rows) // Con esta línea, el resultado de lo buscado en el navegador se imprime en la consola/terminal.
    
    //if (rows.length <= 0) return res.status(404).json({
    if (rows.length === 0) return res.status(404).json({// si esta operación no funciona, cambiar por la línea de arriba
        message : 'Alumno no encontrado'
    })
    
    res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message : 'Se produjo un error -Programa para Virtualizacion-'
        })
    }
}

//export const createAlumnos = (req,res) => res.send('Creando alumnos')
export const createAlumnos = async (req,res) => {

    try {
    // Cuando hacemos una operación con una DB, esta siempre es asíncrona (async, await).

    //const {id, legajo, dni, apellidoYNombre, fechaNacimiento} = console.log(req.body)
    const {id, legajo, dni, apellidoYNombre, fechaNacimiento} = req.body
    /*
    Si quisieramos validar datos, aquí es donde se debería hacer.
    Ej: Que sea número/cadena; que tenga cierta cantidad de caracteres, que cumpla un determinado formato, etc.
    */

    const [rows] = await pool.query('INSERT INTO alumnos (legajo, dni, apellidoYNombre, fechaNacimiento) VALUES (?, ?, ?, ?)', [legajo, dni, apellidoYNombre, fechaNacimiento])

    //res.send('Post success') // Comentado luego de agregar "const [rows] = await.query ..."" y "res.send({rows})"
    //res.send({rows})
    res.send({
        id : rows.insertId, // El ID es (generado e) insertado automáticamente -desde thunder client-.
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



//export const updateAlumnos = (req,res) => res.send('Actualizando alumnos')
export const updateAlumnos = async (req,res) => {

    try {
        const {id} = req.params
    const {legajo, dni, apellidoYNombre, fechaNacimiento} = req.body

    //const [result] = await pool.query('UPDATE alumnos SET id = ?, legajo = ?, dni = ?, apellidoYNombre = ?, fechaNacimiento = ? WHERE id = ?' , [id, legajo, dni, apellidoYNombre, fechaNacimiento, id])
    // Agrego el IFNULL: Si no recibe ningún valor, mantiene el valor de la propiedad que tenía antes.
    // Hago esto para usarlo con el "patch" en vez de con el "put" (en alumnos.routes.js) y solo modificar la/s propiedades que quiera.
    const [result] = await pool.query('UPDATE alumnos SET id = IFNULL(?, id), legajo = IFNULL(?, legajo), dni = IFNULL(?, dni), apellidoYNombre = IFNULL(?, apellidoYNombre), fechaNacimiento = IFNULL(?, fechaNacimiento) WHERE id = ?' , [id, legajo, dni, apellidoYNombre, fechaNacimiento, id])

    if(result.affectedRows === 0) return res.status(404).json({
        message : 'Alumno no encontrado'
    })

    console.log(result)
    //console.log(id, legajo, dni, apellidoYNombre, fechaNacimiento)

    const [rows] = await pool.query('SELECT * FROM alumnos WHERE id = ?', [id])

    //res.json('Recibido')
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message : 'Se produjo un error -Programa para Virtualizacion-'
        })
    }
}

//export const deleteAlumnos = (req,res) => res.send('Eliminando alumnos') // Método anterior
export const deleteAlumnos = async (req,res) => {

    try {
        const [result] = await pool.query('DELETE FROM alumnos WHERE id = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message : 'Alumno no encontrado'
    })

    //console.log(result)
    //res.send('Alumno eliminado')
    res.sendStatus(204) // 204 significa que la operación de borrado/baja/eliminado se aplicó a un objeto de la tabla
    //Affected rows, en la salida del terminal, me indicará si efectivamente el borrado impactó en algún elemento de la tabla.
    } catch (error) {
        return res.status(500).json({
            message : 'Se produjo un error -Programa para Virtualizacion-'
        })
    }   
}