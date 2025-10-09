import { type Document, model, Schema } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IContactDocument extends IContact, Document {}

const contactSchema = new Schema<IContactDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export default model<IContactDocument>("Contact", contactSchema);
