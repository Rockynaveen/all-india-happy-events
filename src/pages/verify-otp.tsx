import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import {
  verifyOtp,
  resendOtp,
} from "../services/auth-service";

import { useAuthStore } from "../store/auth-store";

import logo from "../assets/images/logo_all_happy_events.png";
import banner from "../assets/images/weddings/bridal_fashion.png";

import "../assets/css/style.css";

type FormInputs = {
  otp: string;
};

const VerifyOtpPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const setAuth = useAuthStore((s) => s.setAuth);

  const phone: string = location.state?.phone || "";

  useEffect(() => {
    if (!phone) {
      navigate("/login", { replace: true });
    }
  }, [phone, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();


  /* VERIFY OTP */
  const { mutate, isPending } = useMutation({
    mutationFn: verifyOtp,

    onSuccess: (data: any) => {
      const user = data?.user || data?.data?.user;
      const token = data?.token || data?.data?.token;

      if (!user || !token) return;

      setAuth(user, token);

      navigate("/", { replace: true });
    },

    onError: (error: any) => {
      console.log(error.response?.data || error.message);
    },
  });


  /* RESEND OTP */
  const {
    mutate: resendOtpMutate,
    isPending: resendLoading,
  } = useMutation({
    mutationFn: resendOtp,

    onSuccess: () => {
      console.log("OTP resent successfully");
    },

    onError: (error: any) => {
      console.log(error.response?.data || error.message);
    },
  });


  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    mutate({
      phone_number: phone,
      otp: data.otp.trim(),
    });
  };


  const handleResendOtp = () => {
    resendOtpMutate({
      phone_number: phone,
    });
  };


  return (
    <div className="login-page my-5 py-5">

      <div className="login-wrapper my-5">


        {/* LEFT SIDE */}
        <div className="login-left">

          <img
            src={logo}
            alt="logo"
            className="brand-logo"
          />

          <h1 className="welcome-title">
            Verify OTP
          </h1>

          <p className="welcome-subtitle">
            OTP sent to <strong>{phone}</strong>
          </p>


          <form onSubmit={handleSubmit(onSubmit)}>

            <label className="phone-label">
              Enter OTP
            </label>

            <div className="phone-box">

              <input
                type="text"
                placeholder="Enter OTP"
                maxLength={6}
                {...register("otp", {
                  required: "OTP is required",

                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Only numbers allowed",
                  },

                  minLength: {
                    value: 4,
                    message: "Invalid OTP",
                  },
                })}
              />

            </div>


            {errors.otp && (
              <p className="error-text">
                {errors.otp.message}
              </p>
            )}


            <button
              type="submit"
              className="otp-btn"
              disabled={isPending}
            >
              {isPending
                ? "Verifying..."
                : "Verify OTP"}
            </button>

          </form>


          <p className="bottom-link">
            Wrong number?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
            >
              Change
            </span>
          </p>


          <p className="bottom-link">
            Didn’t receive OTP?{" "}
            <span
              onClick={handleResendOtp}
              style={{ cursor: "pointer" }}
            >
              {resendLoading
                ? "Sending..."
                : "Resend OTP"}
            </span>
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div className="login-right">

          <img
            src={banner}
            alt="banner"
          />

          <div className="overlay-content">

            <h2>
              Plan your dream wedding with ease
              and elegance.
            </h2>

            <p>
              Find the best vendors for your
              special day.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default VerifyOtpPage;