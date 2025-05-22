import { Customer, DocumentType, Gender } from "@/types/customer";
import { Schema, model } from "mongoose";

const customerSchema = new Schema<Customer>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, enum: Gender, default: Gender.OTHER },
    birthDate: { type: Date, default: Date.now },
    documentType: {
      type: String,
      required: true,
      enum: DocumentType,
    },
    documentNumber: { type: String, required: true },
    notes: { type: String },
  },
  {
    timestamps: true,
  },
);

const CustomerModel = model<Customer>("Customer", customerSchema);

export default CustomerModel;
