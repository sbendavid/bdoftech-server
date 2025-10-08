import type { Request, Response } from "express";
import * as projectService from "../services/project.service";

export const createProject = async (req: Request, res: Response) => {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json(project);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getProjects = async (_req: Request, res: Response) => {
  const projects = await projectService.getProjects();
  res.json(projects);
};
