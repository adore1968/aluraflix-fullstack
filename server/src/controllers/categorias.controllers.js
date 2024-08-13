import { pool } from "../database/db.js";
import {
  deleteRowUtil,
  getRowsUtil,
  getRowUtil,
  updateRowUtil,
} from "../utils/general.utils.js";

export const getCategorias = async (req, res) => {
  try {
    const rows = await getRowsUtil("categorias");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await getRowUtil("categorias", id);
    if (rows.length === 0) {
      return res.sendStatus(404);
    }
    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCategoria = async (req, res) => {
  try {
    const { categoria, color } = req.body;
    const sql = "INSERT INTO categorias(categoria, color) VALUES (?, ?)";
    const values = [categoria, color];
    const [result] = await pool.query(sql, values);
    if (result.affectedRows === 0) {
      return res.sendStatus(400);
    }
    return res.status(201).json({
      id: result.insertId,
      categoria,
      color,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const [result, rows] = await updateRowUtil("categorias", [data, id]);
    if (result.affectedRows === 0) {
      return res.sendStatus(404);
    }
    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteRowUtil("categorias", id);
    if (result.affectedRows === 0) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
