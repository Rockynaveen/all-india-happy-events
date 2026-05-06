import api from "../api/api";
import type {
  SendOtpRequest,
  SendOtpResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
  RegisterRequest,
  RegisterResponse,
} from "../types/user.type";

// safe phone formatter
const formatPhone = (phone: string) => {
  if (!phone) return "";
  return phone.startsWith("+91") ? phone : `+91${phone}`;
};

// -------------------- SEND OTP --------------------
export const sendOtp = async (
  data: SendOtpRequest
): Promise<SendOtpResponse> => {
  const res = await api.post("/send-otp", {
    phone_number: formatPhone(data.phone_number),
  });

  return res.data;
};

// -------------------- VERIFY OTP --------------------
export const verifyOtp = async (
  data: VerifyOtpRequest
): Promise<VerifyOtpResponse> => {
  const res = await api.post("/verify-otp", {
    phone_number: formatPhone(data.phone_number),
    otp: data.otp,
  });

  return res.data;
};


export const resendOtp = async (data: {
  phone_number: string;
}) => {
  const response = await api.post(
    "/resend-otp",
    data
  );

  return response.data;
};

// -------------------- REGISTER --------------------
export const registerUser = async (
  data: RegisterRequest
): Promise<RegisterResponse> => {
  const res = await api.post("/register", {
    name: data.name?.trim(),
    email: data.email?.trim(),

    // IMPORTANT FIX (most 422 errors come from this)
    phone_number: formatPhone(data.phone_number),
  });

  return res.data;
};

// -------------------- LOGOUT --------------------
export const logout = async (): Promise<{
  success: boolean;
  message: string;
}> => {
  const res = await api.post("/auth/logout");
  return res.data;
};