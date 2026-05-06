import Footer from "../components/footer";
import Header from "../components/header";

import { useLocation, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { useAuthStore } from "../store/auth-store";
import { registerUser } from "../services/auth-service";

import type {
  RegisterRequest,
  RegisterResponse,
} from "../types/user.type";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import logo from "../assets/images/logo_all_happy_events.png";
import banner from "../assets/images/weddings/bridal_fashion.png";

import "../assets/css/style.css";


const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z.string().email("Invalid email"),

  phone_number: z
    .string()
    .min(10, "Enter valid phone number")
    .max(10, "Only 10 digits allowed"),
});

type RegisterFormInputs = z.infer<typeof registerSchema>;

const Register = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const phone = location.state?.phone;

  const { setAuth } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),

    defaultValues: {
      phone_number: phone || "",
    },
  });


  const { mutate, isPending } = useMutation<
    RegisterResponse,
    any,
    RegisterRequest
  >({
    mutationFn: registerUser,

    onSuccess: (data, variables) => {

      if (data?.user && data?.token) {
        setAuth(data.user, data.token);
      }

      navigate("/verify-otp", {
        state: {
          phone: variables.phone_number,
        },
        replace: true,
      });
    },

    onError: (error: any) => {
      console.log(error.response?.data || error.message);
    },
  });


  const onSubmit: SubmitHandler<RegisterFormInputs> = (data) => {
    mutate(data);
  };


  return (
    <>
      <Header />

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
              Create Account
            </h1>

            <p className="welcome-subtitle">
              Register to continue
            </p>


            <form onSubmit={handleSubmit(onSubmit)}>

              {/* NAME */}
              <label className="phone-label">
                Full Name
              </label>

              <div className="phone-box mb-3">

                <input
                  type="text"
                  placeholder="Enter name"
                  {...register("name")}
                />

              </div>

              {errors.name && (
                <p className="error-text">
                  {errors.name.message}
                </p>
              )}


              {/* EMAIL */}
              <label className="phone-label">
                Email
              </label>

              <div className="phone-box mb-3">

                <input
                  type="text"
                  placeholder="Enter email"
                  {...register("email")}
                />

              </div>

              {errors.email && (
                <p className="error-text">
                  {errors.email.message}
                </p>
              )}


              {/* PHONE */}
              <label className="phone-label">
                Mobile Number
              </label>

              <div className="phone-box">

                <span className="country-code">
                  +91
                </span>

                <input
                  type="text"
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
                {isPending ? "Registering..." : "Register"}
              </button>

            </form>


            <p className="bottom-link">
              Already have an account?
              <span onClick={() => navigate("/login")}>
                Login
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
                Plan your dream wedding with ease and elegance.
              </h2>

              <p>
                Find the best vendors for your special day.
              </p>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default Register;