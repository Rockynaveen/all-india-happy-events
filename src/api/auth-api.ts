import axiosInstance from "./axios";

export const registerUser = (data: any) =>
  axiosInstance.post("/register", data);

export const sendOtp = (phone_number: string) =>
  axiosInstance.post("/send-otp", { phone_number });

export const verifyOtp = (data: any) =>
  axiosInstance.post("/verify-otp", data);

export const resendOtp = (phone_number: string) =>
  axiosInstance.post("/resend-otp", { phone_number });

export const logoutUser = () =>
  axiosInstance.post("/logout");

export const getProfile = () =>
  axiosInstance.get("/profile");