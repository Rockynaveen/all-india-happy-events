import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import OtpInput from "../components/otp-input";
import { useVerifyOtp } from "../hooks/user-auth";
import { useAuthStore } from "../store/user-store";
import { useNavigate, Navigate, useSearchParams } from "react-router";
const schema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

const VerifyOtpPage = () => {
   let [searchParams] = useSearchParams();
  const phone = searchParams.get("phone");
  const navigate = useNavigate();
  const {  setToken,setUser} = useAuthStore();
  const { mutate, isPending } = useVerifyOtp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  if (!phone) {
    return <Navigate to="/login" replace />;
  }
  const onSubmit = (data: any) => {
    mutate(
      { phone, otp: data.otp },
      {
        onSuccess: (res) => {
          setToken(res.data.token);
          setUser(res.data.user);
          navigate("/");
        },
        onError: (err: any) => alert(err.message),
      }
    );
  };
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Verify OTP</h4>
        <p className="text-center">OTP sent to {phone}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <OtpInput register={register} error={errors.otp?.message} />
          <button className="btn btn-success w-100" disabled={isPending}>
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};
export default VerifyOtpPage;