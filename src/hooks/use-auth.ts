import { useMutation } from "@tanstack/react-query";
import { sendOtp, verifyOtp, registerUser } from "../services/auth-service";
import { useAuthStore } from "../store/auth-store";

export const useSendOtp = () => {
  return useMutation({
    mutationFn: sendOtp,
  });
};

export const useVerifyOtp = () => {
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      setAuth(data);
    },
  });
};

export const useRegister = () => {
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setAuth(data);
    },
  });
};