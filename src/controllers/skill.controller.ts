import type { Request, Response } from "express";
import * as skillService from "../services/skill.service";

export const createSkill = async (req: Request, res: Response) => {
  try {
    const skill = await skillService.createSkill(req.body);
    res.status(201).json(skill);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getSkills = async (_req: Request, res: Response) => {
  const skills = await skillService.getSkills();
  res.json(skills);
};
