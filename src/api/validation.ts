import * as z from "zod";

export const sendOtpSchema = z.object({
  phone: z.string().min(10),
});

export const verifyOtpSchema = z.object({
  otp: z.string().min(4).max(6),
});

export const registerSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
});