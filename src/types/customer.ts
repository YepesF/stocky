import { Document } from "mongoose";

interface CustomerBase {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  gender?: Gender;
  birthDate?: Date;
  documentType: DocumentType;
  documentNumber: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

export enum DocumentType {
  NATIONAL_ID = "dni",
  PASSPORT = "passport",
  FOREIGN_ID = "other",
}

export type CustomerDTO = Omit<CustomerBase, "createdAt" | "updatedAt">;

export interface ICustomer extends CustomerBase, Document {}

export interface Customer extends CustomerBase {
  _id: string;
}
