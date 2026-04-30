export interface SendOtpRequest {
  phone: string;
}

export interface VerifyOtpRequest {
  phone: string;
  otp: string;
}

export interface RegisterRequest {
  name: string;
  phone: string;
  email?: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    name: string;
    phone: string;
  };
}