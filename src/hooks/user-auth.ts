import { useMutation } from "@tanstack/react-query";
import { registerUser, sendOtp, verifyOtp } from "../services/user-auth service";

export const useRegister = () =>
  useMutation({
    mutationFn: ({ name, email, phone }: { name: string; email: string; phone: string }) =>
      registerUser(name, email, phone),
  });

export const useSendOtp = () =>
  useMutation({
    mutationFn: sendOtp,
  });

export const useVerifyOtp = () =>
  useMutation({
    mutationFn: ({ phone, otp }: { phone: string; otp: string }) =>
      verifyOtp(phone, otp),
  });