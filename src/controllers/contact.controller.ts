import type { Request, Response } from "express";
import * as contactService from "../services/contact.service";

export const createContact = async (req: Request, res: Response) => {
  try {
    const contact = await contactService.createContact(req.body);
    res.status(201).json(contact);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getContacts = async (_req: Request, res: Response) => {
  const contacts = await contactService.getContacts();
  res.json(contacts);
};
