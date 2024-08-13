import { Router } from "express";
import { getApiController } from "../controllers/api.controllers.js";

const router = Router();

router.get("/", getApiController);

export default router;
