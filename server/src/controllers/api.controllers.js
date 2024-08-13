import { getRowsUtil } from "../utils/general.utils.js";

export const getApiController = async (req, res) => {
  try {
    const categorias = await getRowsUtil("categorias");
    const destacados = await getRowsUtil("destacados");
    const videos = await getRowsUtil("videos");
    return res.json({ categorias, destacados, videos });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
