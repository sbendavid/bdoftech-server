import { Router } from "express";
import * as skillController from "../controllers/skill.controller";

const router = Router();

router.post("/", skillController.createSkill);
router.get("/", skillController.getSkills);

export default router;
