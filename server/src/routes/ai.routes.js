import {Router} from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import AiController from "../controllers/AI.controller.js";

const router = Router();

router.get("/insights", authMiddleware, AiController.getInsights);

export default router;