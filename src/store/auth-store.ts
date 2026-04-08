// src/store/authStore.ts
import { create } from "zustand";

type Step = "FORM" | "OTP";

interface AuthState {
  step: Step;
  phone: string;
  otp: string[];
  timer: number;
  error: string;

  setStep: (step: Step) => void;
  setPhone: (phone: string) => void;
  setOtp: (otp: string[]) => void;
  setError: (error: string) => void;
  startTimer: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  step: "FORM",
  phone: "",
  otp: Array(6).fill(""),
  timer: 30,
  error: "",

  setStep: (step) => set({ step }),
  setPhone: (phone) => set({ phone }),
  setOtp: (otp) => set({ otp }),
  setError: (error) => set({ error }),

  startTimer: () => {
    set({ timer: 30 });

    const interval = setInterval(() => {
      const t = get().timer;

      if (t <= 1) {
        clearInterval(interval);
        set({ timer: 0 });
      } else {
        set({ timer: t - 1 });
      }
    }, 1000);
  },
}));