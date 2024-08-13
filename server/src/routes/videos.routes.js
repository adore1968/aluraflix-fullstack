import { Router } from "express";
import {
  createVideo,
  deleteVideo,
  getVideo,
  getVideos,
  updateVideo,
} from "../controllers/videos.controllers.js";
import validateData from "../middlewares/validationMiddleware.js";
import {
  createVideoSchema,
  updateVideoSchema,
} from "../schemas/videos.schemas.js";

const router = Router();

router.get("/", getVideos);

router.get("/:id", getVideo);

router.post("/", validateData(createVideoSchema), createVideo);

router.put("/:id", validateData(updateVideoSchema), updateVideo);

router.delete("/:id", deleteVideo);

export default router;
