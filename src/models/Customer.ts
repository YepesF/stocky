import { Customer } from "@/types/customer";
import { Schema, model } from "mongoose";

const customerSchema = new Schema<Customer>(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    birthDate: { type: Date },
    documentType: {
      type: String,
      required: true,
      enum: ["dni", "passport", "other"],
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
