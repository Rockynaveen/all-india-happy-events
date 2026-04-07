import axiosInstance from "./axios";

// ✅ /api/register
export const registerUser = (data: any) =>
  axiosInstance.post("/register", data);

// ✅ /api/send-otp
export const sendOtp = (phone_number: string) =>
  axiosInstance.post("/send-otp", { phone_number });

// ✅ /api/verify-otp
export const verifyOtp = (data: any) =>
  axiosInstance.post("/verify-otp", data);

// ✅ /api/resend-otp
export const resendOtp = (phone_number: string) =>
  axiosInstance.post("/resend-otp", { phone_number });

// ✅ /api/logout
export const logoutUser = () =>
  axiosInstance.post("/logout");

// ✅ /api/profile
export const getProfile = () =>
  axiosInstance.get("/profile");