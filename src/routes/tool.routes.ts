import { Router } from "express";
import * as toolController from "../controllers/tool.controller";

const router = Router();

router.post("/", toolController.createTool);
router.get("/", toolController.getTools);

export default router;
