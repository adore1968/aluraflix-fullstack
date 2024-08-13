import { pool } from "../database/db.js";

export const createVideoUtil = async (table, data) => {
  const sql = `INSERT INTO ${table}(categoria, titulo, descripcion, url, id_yt, imagen, color) VALUES(?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    data.categoria,
    data.titulo,
    data.descripcion,
    data.url,
    data.id_yt,
    data.imagen,
    data.color,
  ];
  const [result] = await pool.query(sql, values);
  return result;
};
