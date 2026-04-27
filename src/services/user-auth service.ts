import Api from "../api/axios";

const formatPhone = (phone: string) => {
  const cleaned = phone.replace(/\s+/g, "").replace(/^\+/, "");
  return cleaned.startsWith("91") ? `+${cleaned}` : `+91${cleaned}`;
};

export const sendOtp = async (phone: string) => {
  const formattedPhone = formatPhone(phone);
  const response = await Api.post("/send-otp", {
    phone_number: formattedPhone,
  });

  return { formattedPhone, ...response.data };
};
export const registerUser = async (name: string, email: string, phone: string) => {
  const formattedPhone = formatPhone(phone);
  const response = await Api.post("/register", {
    name,
    email,
    phone_number: formattedPhone,
  });
  return { phone: formattedPhone, ...response.data };
};
export const verifyOtp = async (phone: string, otp: string) => {
  const formattedPhone = formatPhone(phone);
  const response = await Api.post("/verify-otp", {
    phone_number: formattedPhone,
    otp: otp,
  });
  return { phone: formattedPhone, ...response.data };
};

export const logout = async () => {
  const response = await Api.post("/logout");
  return { ...response.data };
};