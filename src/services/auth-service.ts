import { api } from "../api/api";
import {
  SendOtpRequest,
  VerifyOtpRequest,
  RegisterRequest ,
  AuthResponse ,
} from "../types/user.type";

export const sendOtp = async (data: SendOtpRequest) => {
  const res = await api.post("/send-otp", data);
  return res.data;
};

export const verifyOtp = async (data: VerifyOtpRequest) => {
  const res = await api.post("/verify-otp", data);
  return res.data as AuthResponse;
};

export const registerUser = async (data: RegisterRequest) => {
  const res = await api.post("/register", data);
  return res.data as AuthResponse;
};