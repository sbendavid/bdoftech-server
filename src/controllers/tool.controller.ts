import type { Request, Response } from "express";
import * as toolService from "../services/tool.service";

export const createTool = async (req: Request, res: Response) => {
  try {
    const tool = await toolService.createTool(req.body);
    res.status(201).json(tool);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getTools = async (_req: Request, res: Response) => {
  const tools = await toolService.getTools();
  res.json(tools);
};
