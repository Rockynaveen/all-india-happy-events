import { useMutation } from "@tanstack/react-query";
import { authService } from "../services/auth-service";
import { useAuthStore } from "../store/auth-store";

export const useSendOtp = () =>
  useMutation({
    mutationFn: authService.sendOtp,
  });

export const useVerifyOtp = () => {
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: ({ phone, otp }: { phone: string; otp: string }) =>
      authService.verifyOtp(phone, otp),

    onSuccess: (data) => {
      setAuth(data.user, data.token);
    },
  });
};

export const useRegister = () =>
  useMutation({
    mutationFn: authService.register,
  });