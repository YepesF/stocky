import { Document } from "mongoose";

interface CustomerBase {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  gender: "male" | "female" | "other";
  birthDate: Date;
  documentType: "dni" | "passport" | "other";
  documentNumber: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICustomer extends CustomerBase, Document {}

export interface Customer extends CustomerBase {
  _id: string;
}
