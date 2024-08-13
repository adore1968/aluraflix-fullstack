import { Router } from "express";
import {
  getCategorias,
  getCategoria,
  createCategoria,
  updateCategoria,
  deleteCategoria,
} from "../controllers/categorias.controllers.js";
import validateData from "../middlewares/validationMiddleware.js";
import {
  createCategoriaSchema,
  updateCategoriaSchema,
} from "../schemas/categorias.schemas.js";

const router = Router();

router.get("/", getCategorias);

router.get("/:id", getCategoria);

router.post("/", validateData(createCategoriaSchema), createCategoria);

router.put("/:id", validateData(updateCategoriaSchema), updateCategoria);

router.delete("/:id", deleteCategoria);

export default router;
