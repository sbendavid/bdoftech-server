import { type Document, model, Schema, type Types } from "mongoose";

export interface IProject extends Document {
  title: string;
  smallImage: string;
  largeImage: string;
  url?: string;
  tool: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    smallImage: { type: String, required: true },
    largeImage: { type: String, required: true },
    url: { type: String },
    tool: [{ type: Schema.Types.ObjectId, ref: "Tool" }],
  },
  { timestamps: true, versionKey: false },
);

export default model<IProject>("Project", projectSchema);
