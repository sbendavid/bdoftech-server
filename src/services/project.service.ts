import Project, { type IProject } from "../models/project";

export const createProject = async (data: Partial<IProject>) => {
  return await Project.create(data);
};

export const getProjects = async () => {
  return await Project.find().populate("tool");
};
