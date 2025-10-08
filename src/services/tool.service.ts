import Tool, { type ITool } from "../models/tool";

export const createTool = async (data: Partial<ITool>) => {
  return await Tool.create(data);
};

export const getTools = async () => {
  return await Tool.find();
};
