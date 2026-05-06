export type User = {
  id: string;
  phone_number: string;
  name?: string;
  email?:string;
};

export type SendOtpRequest = {
  phone_number: string;
};

export type VerifyOtpRequest = {
  phone_number: string;
  otp: string;
};

export type RegisterRequest = {
  name: string;
  phone_number: string;
  email:string;

};

export type SendOtpResponse = {
  success: boolean;
  message: string;
};

export type VerifyOtpResponse = {
  success: boolean;
  message: string;
  token: string;
  user: User;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  token: string;
  user: User;
};