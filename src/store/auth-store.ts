<<<<<<< HEAD
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
=======
import { create } from "zustand";

interface AuthState {
  user: any;
  token: string | null;
  setAuth: (data: { user: any; token: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem("token"),

  setAuth: ({ user, token }) => {
    localStorage.setItem("token", token);
    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
>>>>>>> c878c0b (added vendor services, auth store, updated types, removed unused stores)
  },
}));