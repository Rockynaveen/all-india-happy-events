import { create } from "zustand";

type StepType = "PHONE" | "OTP";

interface LoginState {
  step: StepType;
  otp: string[];
  timer: number;
  error: string;

  setStep: (step: StepType) => void;
  setOtp: (otp: string[]) => void;
  setError: (error: string) => void;
  startTimer: () => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  step: "PHONE",
  otp: Array(6).fill(""),
  timer: 30,
  error: "",

  setStep: (step) => set({ step }),
  setOtp: (otp) => set({ otp }),
  setError: (error) => set({ error }),

  startTimer: () => {
    set({ timer: 30 });

    const interval = setInterval(() => {
      set((state) => {
        if (state.timer <= 1) {
          clearInterval(interval);
          return { timer: 0 };
        }
        return { timer: state.timer - 1 };
      });
    }, 1000);
  },
}));