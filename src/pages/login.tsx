import { useForm, type SubmitHandler } from "react-hook-form";
import { sendOtp } from "../services/auth-service";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { SendOtpRequest } from "../types/user.type";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo_all_happy_events.png";
import banner from "../assets/images/weddings/bridal_fashion.png";

import "../assets/css/style.css";

const loginSchema = z.object({
  phone_number: z
    .string()
    .min(10, "Enter valid phone number")
    .max(10, "Only 10 digits allowed"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: SendOtpRequest) => sendOtp(data),

    onSuccess: (_data, variables) => {
      navigate("/verify-otp", {
        state: { phone: variables.phone_number },
      });
    },

    onError: (error: any) => {
      console.log(error.response?.data || error.message);
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    mutate(data);
  };

  return (
    <div className="login-page my-5 py-5">

      <div className="login-wrapper my-5 ">

        {/* LEFT SIDE */}
        <div className="login-left">

          <img
            src={logo}
            alt="logo"
            className="brand-logo"
          />

          <h1 className="welcome-title">
            Welcome Back
          </h1>

          <p className="welcome-subtitle">
            Enter your mobile number to sign in
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>

            <label className="phone-label">
              Mobile Number
            </label>

            <div className="phone-box">

              <span className="country-code">
                +91
              </span>

              <input
                type="tel"
                placeholder="9876543210"
                {...register("phone_number")}
              />

            </div>

            {errors.phone_number && (
              <p className="error-text">
                {errors.phone_number.message}
              </p>
            )}

            <button
              type="submit"
              className="otp-btn"
              disabled={isPending}
            >
              {isPending ? "Sending OTP..." : "Send OTP"}
            </button>

          </form>

          <p className="bottom-link">
            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-decoration-none"
            >
              <span>Create Account</span>
            </Link>
          </p>

          <p className="bottom-link">
            Are you a Vendor?{" "}

            <Link
              to="/login"
              className="text-decoration-none"
            >
              <span>Vendor Login</span>
            </Link>
          </p>
          <p className="terms-text">
            By continuing, you agree to our
            <span> Terms & Privacy Policy</span>
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
              Plan your dream wedding with ease and elegance.
            </h2>

            <p>
              Find the best vendors for your special day.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;