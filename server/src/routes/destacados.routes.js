import { Router } from "express";
import {
  getDestacados,
  getDestacado,
  createDestacado,
  updateDestacado,
  deleteDestacado,
} from "../controllers/destacados.controllers.js";
import validateData from "../middlewares/validationMiddleware.js";
import {
  createVideoSchema,
  updateVideoSchema,
} from "../schemas/videos.schemas.js";

const router = Router();

router.get("/", getDestacados);

router.get("/:id", getDestacado);

router.post("/", validateData(createVideoSchema), createDestacado);

router.put("/:id", validateData(updateVideoSchema), updateDestacado);

router.delete("/:id", deleteDestacado);

export default router;
