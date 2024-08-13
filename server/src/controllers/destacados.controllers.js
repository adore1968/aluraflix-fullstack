import {
  deleteRowUtil,
  getRowsUtil,
  getRowUtil,
  updateRowUtil,
} from "../utils/general.utils.js";
import { createVideoUtil } from "../utils/videos.utils.js";

export const getDestacados = async (req, res) => {
  try {
    const rows = await getRowsUtil("destacados");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDestacado = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await await getRowUtil("destacados", id);
    if (rows.length === 0) {
      return res.sendStatus(404);
    }
    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDestacado = async (req, res) => {
  try {
    const data = req.body;
    const result = await createVideoUtil("destacados", data);
    if (result.affectedRows === 0) {
      return res.sendStatus(400);
    }
    return res.status(201).json({ ...data, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDestacado = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const [result, rows] = await updateRowUtil("destacados", [data, id]);
    if (result.affectedRows === 0) {
      return res.sendStatus(404);
    }
    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDestacado = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteRowUtil("destacados", id);
    if (result.affectedRows === 0) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
