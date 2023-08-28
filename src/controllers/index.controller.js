import {pool} from '../db.js'

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result') // async - await.
    res.json(result[0])
}