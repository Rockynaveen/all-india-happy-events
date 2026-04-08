// src/schema/authSchema.ts
import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone_number: z.string().length(10, "Phone must be 10 digits"),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>;