import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { registerSchema } from "../schema/auth-schema";
import type { RegisterFormInputs } from "../schema/auth-schema";
import { registerUser, verifyOtp, resendOtp } from "../api/auth-api";
import { useAuthStore } from "../store/auth-store";
import OtpInput from "../components/otp-input";
import "../assets/css/register.css"

const Register = () => {
  const navigate = useNavigate();

  const {
    step,
    phone,
    otp,
    timer,
    error,
    setStep,
    setPhone,
    setOtp,
    setError,
    startTimer,
  } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const registerMutation = useMutation({
    mutationFn: registerUser,

    onSuccess: (_, variables) => {
      setPhone(variables.phone_number);
      setStep("OTP");
      setError("");
      startTimer();
    },

    onError: (err: any) => {
      setError(err?.response?.data?.message || "Registration failed");
    },
  });

  const verifyMutation = useMutation({
    mutationFn: verifyOtp,

    onSuccess: (res: any) => {
      const token =
        // res?.data?.token ||
        // res?.data?.access_token ||
        res?.data?.data?.token;

      if (!token) {
        setError("Token not received");
        return;
      }

      localStorage.setItem("token", token);
      navigate("/");
    },

    onError: (err: any) => {
      setError(err?.response?.data?.message || "Invalid OTP");
    },
  });

  // 🔹 Handlers
  const onSubmit = (data: RegisterFormInputs) => {
    registerMutation.mutate(data);
  };

  const handleVerify = () => {
    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      setError("Enter valid OTP");
      return;
    }

    verifyMutation.mutate({
      phone_number: phone,
      otp: otpValue,
    });
  };

  const handleResend = async () => {
    try {
      await resendOtp(phone);
      startTimer();
    } catch {
      setError("Resend failed");
    }
  };

  return (
    <div className="register-page">
      <div className="register-box">
        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        {/* 🔹 FORM */}
        {step === "FORM" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Full Name" {...register("name")} />
            <p>{errors.name?.message}</p>

            <input placeholder="Email" {...register("email")} />
            <p>{errors.email?.message}</p>

            <input placeholder="Phone" {...register("phone_number")} />
            <p>{errors.phone_number?.message}</p>

            <button type="submit">
              {registerMutation.isLoading
                ? "Sending..."
                : "Send OTP"}
            </button>
          </form>
        )}

        {/* 🔹 OTP */}
        {step === "OTP" && (
          <>
            <p>OTP sent to {phone}</p>

            <OtpInput otp={otp} setOtp={setOtp} />

            <button onClick={handleVerify}>
              {verifyMutation.isLoading
                ? "Verifying..."
                : "Verify"}
            </button>

            {timer > 0 ? (
              <p>Resend in {timer}s</p>
            ) : (
              <button onClick={handleResend}>
                Resend OTP
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Register;