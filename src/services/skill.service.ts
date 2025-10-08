import Skill, { type ISkill } from "../models/skill";

export const createSkill = async (data: Partial<ISkill>) => {
  return await Skill.create(data);
};

export const getSkills = async () => {
  return await Skill.find();
};
