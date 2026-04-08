import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { sendOtp, verifyOtp, resendOtp } from "../api/auth-api";
import OtpInput from "../components/otp-input";
import { useLoginStore } from "../store/login-store";
import "../assets/css/login.css";

const loginSchema = z.object({
  phone_number: z
    .string()
    .length(10, "Phone number must be 10 digits"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();

  const {
    step,
    otp,
    timer,
    error,
    setStep,
    setOtp,
    setError,
    startTimer,
  } = useLoginStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const sendOtpMutation = useMutation({
    mutationFn: (data: LoginFormInputs) =>
      sendOtp("+91" + data.phone_number),

    onSuccess: () => {
      setStep("OTP");
      setError("");
      startTimer();
    },

    onError: (err: any) => {
      setError(err.response?.data?.message || "User not found");
    },
  });

  // 🔹 VERIFY OTP
  const verifyMutation = useMutation({
    mutationFn: (data: { phone_number: string; otp: string }) =>
      verifyOtp(data),

    onSuccess: (res: any) => {
      const token =
        // res?.data?.token ||
        // res?.data?.access_token ;
        res?.data?.data?.token;

      if (!token) {
        setError("Login failed");
        return;
      }

      localStorage.setItem("token", token);
      navigate("/", { replace: true });
    },

    onError: (err: any) => {
      setError(err.response?.data?.message || "Invalid OTP");
    },
  });
  const onSubmit = (data: LoginFormInputs) => {
    sendOtpMutation.mutate(data);
  };

  const handleVerify = () => {
    if (otp.join("").length !== 6) {
      setError("Enter valid 6-digit OTP");
      return;
    }

    verifyMutation.mutate({
      phone_number: "+91" + getValues("phone_number"),
      otp: otp.join(""),
    });
  };

  const handleResend = async () => {
    await resendOtp("+91" + getValues("phone_number"));
    startTimer();
  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4">

        <h3 className="text-center mb-2">Login</h3>
        <p className="text-center subtitle">Login with OTP</p>

        {error && <p className="error">{error}</p>}

        {/* STEP 1 */}
        {step === "PHONE" && (
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="input-group-custom">
              <span className="country-code">+91</span>
              <input
                type="text"
                placeholder="Enter phone number"
                {...register("phone_number")}
              />
            </div>

            {errors.phone_number && (
              <p className="invalid-feedback">
                {errors.phone_number.message}
              </p>
            )}

            <button className="btn btn-primary"  type="submit"> 
              {sendOtpMutation.isPending ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* STEP 2 */}
        {step === "OTP" && (
          <>
            <p className="otp-text">
              OTP sent to <b>+91{getValues("phone_number")}</b>
            </p>

            <OtpInput otp={otp} setOtp={setOtp} />

            <button className="mt-5" onClick={handleVerify}> 
              {verifyMutation.isPending ? "Verifying..." : "Verify OTP"}
            </button>

            {timer > 0 ? (
              <p className="timer">Resend in {timer}s</p>
            ) : (
              <button className="resend" onClick={handleResend}>
                Resend OTP
              </button>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default Login;