import { type Document, model, Schema } from "mongoose";

export interface ITool extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

const toolSchema = new Schema<ITool>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export default model<ITool>("Tool", toolSchema);
