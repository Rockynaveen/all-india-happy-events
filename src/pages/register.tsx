import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { registerUser, verifyOtp, resendOtp } from "../api/auth-api";
import OtpInput from "../components/otp-input";
import "../assets/css/register.css";

const registerSchema = z.object({
  name: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email"),
  phone_number: z.string().length(10, "Phone number must be 10 digits"),
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"FORM" | "OTP">("FORM");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  // OTP Timer
  useEffect(() => {
    if (step === "OTP" && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  // 🔹 React Query: Register Mutation
  const registerMutation = useMutation({
    mutationFn: (data: RegisterFormInputs) => registerUser(data),
    onSuccess: () => {
      setStep("OTP");
      setTimer(30);
      setError("");
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Registration failed");
    },
  });

  // 🔹 React Query: OTP Verification
  const verifyMutation = useMutation({
    mutationFn: (data: { phone_number: string; otp: string }) => verifyOtp(data),
    onSuccess: (res: any) => {
      const token = res.data?.token || res.data?.access_token || res.data?.data?.token;
      if (!token) {
        setError("Login failed: token not received");
        return;
      }
      localStorage.setItem("token", token);
      navigate("/", { replace: true });
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Invalid OTP");
    },
  });

  const onSubmit = (data: RegisterFormInputs) => {
    registerMutation.mutate(data);
  };

  const handleVerify = () => {
    if (otp.join("").length !== 6) {
      setError("Enter valid 6-digit OTP");
      return;
    }
    verifyMutation.mutate({ phone_number: watchPhone(), otp: otp.join("") });
  };

  // Watch phone number from form
  const watchPhone = () => {
    return (document.querySelector<HTMLInputElement>('input[name="phone_number"]')?.value || "").trim();
  };

  const handleResend = async () => {
    try {
      await resendOtp(watchPhone());
      setTimer(30);
    } catch {
      setError("Failed to resend OTP");
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <div className="register-box p-4">
        <h2 className="mb-3 text-center">Register</h2>

        {error && <p className="error">{error}</p>}

        {step === "FORM" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name")}
              className={errors.name ? "is-invalid" : ""}
            />
            {errors.name && <p className="invalid-feedback">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className={errors.email ? "is-invalid" : ""}
            />
            {errors.email && <p className="invalid-feedback">{errors.email.message}</p>}

            <input
              type="text"
              placeholder="Phone Number"
              {...register("phone_number")}
              className={errors.phone_number ? "is-invalid" : ""}
            />
            {errors.phone_number && <p className="invalid-feedback">{errors.phone_number.message}</p>}

            <button type="submit" disabled={registerMutation.isLoading}>
              {registerMutation.isLoading ? "Sending OTP..." : "Register & Send OTP"}
            </button>
          </form>
        )}

        {step === "OTP" && (
          <>
            <p className="otp-text">
              Enter OTP sent to <b>{watchPhone()}</b>
            </p>
            <OtpInput otp={otp} setOtp={setOtp} />
            <button onClick={handleVerify} disabled={verifyMutation.isLoading}>
              {verifyMutation.isLoading ? "Verifying..." : "Verify OTP"}
            </button>

            {timer > 0 ? (
              <p className="timer">Resend in {timer}s</p>
            ) : (
              <button onClick={handleResend} className="resend">
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