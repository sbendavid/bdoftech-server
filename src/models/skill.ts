import { type Document, model, Schema } from "mongoose";

export interface ISkill extends Document {
  name: string;
  yearsOfExperience: string;
  createdAt: Date;
  updatedAt: Date;
}

const skillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true },
    yearsOfExperience: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export default model<ISkill>("Skill", skillSchema);
