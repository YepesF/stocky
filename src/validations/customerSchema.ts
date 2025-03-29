import { DocumentType, Gender } from "@/types/customer";
import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  address: z.string().min(5),
  gender: z.nativeEnum(Gender).optional(),
  birthDate: z.date().optional(),
  documentType: z.nativeEnum(DocumentType),
  documentNumber: z.string().min(5),
  notes: z.string().optional(),
});

export type CustomerType = z.infer<typeof customerSchema>;
