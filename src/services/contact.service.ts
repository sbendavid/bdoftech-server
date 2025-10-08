import Contact, { type IContact } from "../models/contact";

export const createContact = async (data: Partial<IContact>) => {
  return await Contact.create(data);
};

export const getContacts = async () => {
  return await Contact.find().sort({ createdAt: -1 });
};
