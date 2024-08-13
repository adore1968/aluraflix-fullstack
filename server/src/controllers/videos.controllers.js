import { createVideoUtil } from "../utils/videos.utils.js";
import {
  deleteRowUtil,
  getRowsUtil,
  getRowUtil,
  updateRowUtil,
} from "../utils/general.utils.js";

export const getVideos = async (req, res) => {
  try {
    const rows = await getRowsUtil("videos");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await getRowUtil("videos", id);
    if (rows.length === 0) {
      return res.sendStatus(404);
    }
    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createVideo = async (req, res) => {
  try {
    const data = req.body;
    const result = await createVideoUtil("videos", data);
    if (result.affectedRows === 0) {
      return res.sendStatus(400);
    }
    return res.status(201).json({ ...data, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const [result, rows] = await updateRowUtil("videos", [data, id]);
    if (result.affectedRows === 0) {
      return res.sendStatus(404);
    }
    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteRowUtil("videos", id);
    if (result.affectedRows === 0) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
