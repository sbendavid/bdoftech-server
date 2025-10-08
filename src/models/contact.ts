import { type Document, model, Schema } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true, versionKey: false },
);

export default model<IContact>("Contact", contactSchema);
