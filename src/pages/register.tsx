import { useState, useEffect } from "react";
import {
  registerUser,
  verifyOtp,
  resendOtp
} from "../api/auth-api";
import OtpInput from "../components/otp-input";
import { useNavigate } from "react-router-dom";
import "../assets/css/register.css"
const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: ""
  });

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [step, setStep] = useState<"FORM" | "OTP">("FORM");
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ⏱ OTP Timer
  useEffect(() => {
    if (step === "OTP" && timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [step, timer]);

  // 🧾 Handle Input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📲 REGISTER
  const handleRegister = async () => {
    if (!form.name || !form.email || !form.phone_number) {
      setError("All fields are required");
      return;
    }

    if (form.phone_number.length !== 10) {
      setError("Enter valid 10-digit phone number");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await registerUser(form);
      console.log("REGISTER RESPONSE 👉", res.data);

      setStep("OTP");
      setTimer(30);

    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // 🔐 VERIFY OTP
  const handleVerify = async () => {
    if (otp.join("").length !== 6) {
      setError("Enter valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await verifyOtp({
        phone_number: form.phone_number,
        otp: otp.join("")
      });

      console.log("VERIFY RESPONSE 👉", res.data);

      // ✅ SAFE TOKEN EXTRACTION
      const token =
        res.data?.token ||
        res.data?.access_token ||
        res.data?.data?.token;

      if (!token) {
        setError("Login failed: token not received");
        return;
      }

      localStorage.setItem("token", token);

      // ✅ Redirect
      navigate("/", { replace: true });

    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // 🔁 RESEND OTP
  const handleResend = async () => {
    try {
      await resendOtp(form.phone_number);
      setTimer(30);
    } catch (err) {
      setError("Failed to resend OTP");
    }
  };

  return (
  <div className="register-wrapper">
    
    {/* LEFT SIDE */}
    <div className="register-left">
      <div className="overlay">
        <h1>Welcome to All Happy Events</h1>
        <p>Plan your perfect event with the best vendors</p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="register-right">
      <div className="register-box">
        <h2>Create Account</h2>

        {error && <p className="error">{error}</p>}

        {step === "FORM" && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />

            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />

            <input
              name="phone_number"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <button onClick={handleRegister} disabled={loading}>
              {loading ? "Sending OTP..." : "Register & Send OTP"}
            </button>
          </>
        )}

        {step === "OTP" && (
          <>
            <p className="otp-text">
              Enter OTP sent to <b>{form.phone_number}</b>
            </p>

            <OtpInput otp={otp} setOtp={setOtp} />

            <button onClick={handleVerify} disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
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
  </div>
);
}

export default Register;